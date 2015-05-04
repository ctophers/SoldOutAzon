package scraper;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.soldoutazondb.SoldoutazonDB;
import com.soldoutazondb.data.Category;
import com.soldoutazondb.data.Config;
import com.soldoutazondb.data.Node;
import com.soldoutazondb.data.Product;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.RuntimeService;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.TypedServiceReturn;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;

import org.apache.log4j.Logger;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */

@ExposeToClient
public class AmazonScraper {
/* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */

    //public static final String userAgent = "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Safari/535.7";
	public static final String userAgent = "Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0";
    public static final int AMAZON_MAX_PAGE_LIMIT = 400;
	
    private SoldoutazonDB dbService;
    private Category category;
    
    //Dependency injected services    
    private RuntimeService runtimeSvc;
    private SecurityService securitySvc;    
    
    private static final String DB = "soldoutazonDB";
    
    static final Logger logger = Logger.getLogger(AmazonScraper.class);
    
    private static Date today;

    public AmazonScraper() {
        //super(INFO);
        dbService = (SoldoutazonDB) RuntimeAccess.getInstance().getServiceBean(DB);
    }

    // use parseAmazonCategoryObject
    public String scrapeUrl(Node node) {
        String result = "";
        try {
        	logger.info("Scrape URL: " + node.getUrl());
            result = "Hello World";
            
            parseAmazonNode(node);
            
            logger.info("Returning " + result);
        } catch (Exception e) {
            logger.error("The sample java service operation has failed", e);
            dbService.rollback();
        }
        return result;
    }
    
    // use parseAmazonCategoryObject
    public void parseAmazonCategory(String category) throws Exception {
    	logger.info("Parsing Amazon category: " + category);
    	PagingOptions pagingOptions = new PagingOptions();
    	//pagingOptions.setMaxResults(100l);
    	List<Node> nodes = dbService.getNodesByCategoryName(category, pagingOptions);
    	Node node = null;
    	for(int i=0; i<nodes.size(); i++) {
    		node = nodes.get(i);
    		parseAmazonNode(node);
    	}
    	
    }
    @ExposeToClient
    public void parseAmazonCategoryObject(Category category) {
    	today = new Date();
    	this.category = category;

    	int categoryCount = 0;
    	int searchCount = 0;
    	int errorCount = 0;
    	int inconsistentCount = 0;
    	int duplicateCount = 0;
    	
    	//reset count
    	category.setPrevcount(category.getLatestcount());
    	
    	
    	logger.info("Parse Category Object: " + category.getName());
    	
    	//update category start date
    	category.setStarted(DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT).format(today));
    	category.setCompleted("processing...");
    	try {
    		logger.debug("Updating Category startDate & processing...");
    		/*
    		dbService.begin();
        	dbService.update(category);
    		dbService.commit();
    		*/
    		
            TypedServiceReturn tsrCategory = runtimeSvc.update(DB, "com.soldoutazondb.data.Category",category,0);
            category = (Category)tsrCategory.getReturnValue();
            
    	} catch (Exception ex) {
    		logger.error("Error updating category startdate: " + ex.toString());
    		dbService.rollback();
    	}
    	
    	// cleanup old products
    	deleteOldProductsFromCategory(category.getName());
    	
    	PagingOptions pagingOptions = new PagingOptions();
    	//pagingOptions.setMaxResults(100l);
    	logger.debug("Getting nodes for category: " + category.getName());
    	List<Node> nodes = dbService.getNodesByCategoryName(category.getName(), pagingOptions);
    	
    	logger.debug("Nodes count: " + nodes.size());
    	Node node = null;
    	for(int i=0; i<nodes.size(); i++) {
        		node = parseAmazonNode(nodes.get(i));
        		categoryCount +=  node.getLastcount().intValue();
        		errorCount += node.getErrors().intValue();
        		inconsistentCount += node.getInconsistent().intValue();
        		duplicateCount += node.getDuplicate().intValue();
    	}
    	
    	logger.info("CATEGORY: " + category.getName() + 
    				"  Total:" + categoryCount + 
    				"  Previous:" + category.getLatestcount() +
    				"  Error: " + errorCount +
    				"  Inconsistent: " + inconsistentCount +
    				"  Duplicates:" + duplicateCount);

    	// update category end date
    	try {
    		category.setCompleted(DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.MEDIUM).format(new Date()));
    		//category.setPrevcount(category.getLatestcount()); -- done on top
    		category.setLatestcount(categoryCount);
    		category.setError(errorCount);
    		category.setInconsistent(inconsistentCount);
    		category.setProductexistcount(duplicateCount);
            TypedServiceReturn tsrCategory = runtimeSvc.update(DB, "com.soldoutazondb.data.Category",category,0);
            category = (Category)tsrCategory.getReturnValue();
            
    	} catch (Exception ex) {
    		logger.error("Error updating category enddate: " + category.toString());
    		dbService.rollback();
    	}    
    	
	    	
    }    

    /* One node is 1 amazon SUB-category e.g. Toys-Action figures */
    @ExposeToClient
    public Node parseAmazonNode(Node node) {
    	logger.debug(node.getCategory() + " : " + node.getId());
    
		String pagedUrl;
		int maxPagesToParse = AMAZON_MAX_PAGE_LIMIT;
		Document doc;
		
		int countNodeTotal = 0; 
		int countNodeDuplicates = 0;
		int countNodeNoLongerSoldout = 0;
		int countSouldoutInSearchResults = 0;
		int countNodePageError = 0;
		int countScraperError = 0;
		int countSaveError = 0;
		
		for(int i=1;  i <= maxPagesToParse; i++) {
			pagedUrl = node.getUrl() + "&page=" + i;
			doc = null;
			doc = retrieveDocumentFromUrl(pagedUrl);
			if(doc !=null) { 
				
				// on the 1st page, get the total result count for the category
				//to determine the number of pages to parse
				
				//div id="rightResultsATF"
				/*
				Elements  resultsATF = doc.select("div#rightResultsATF");
				if(resultsATF.size() < 1) {
					logger.debug("JSOUP Select failed: id=rightResultsATF \n" + pagedUrl);
				}*/
				
				String resultCountText = "";
				String resultCountStr = "";
				
				// on first search results page, get the search results total
				if(i==1) {
					try {
						// Get the product count - h2 with class resultCount ===   h2.resultCount
						
						// h2 id='s-result-count'
						resultCountText = doc.select("h2#s-result-count").first().text();
						
						//if products are less than 400 pages, determine the last page based on the number of items
						resultCountStr = resultCountText.substring(resultCountText.indexOf("of") + 3, resultCountText.indexOf("results"));
						//logger.info("Total search results count: " + resultCountStr);
						
						long resultCount = Long.parseLong(resultCountStr.replace(",", "").trim());
						maxPagesToParse = (Math.round(resultCount / 24) + 1);
						
						//Amazon pages are only upto  401
						if(maxPagesToParse > AMAZON_MAX_PAGE_LIMIT) {
							//System.out.println("Category has more results than 400 pages");
							maxPagesToParse = AMAZON_MAX_PAGE_LIMIT;
							//logger.warn( node.getCategory() + " subcategory has more than 400 pages. Will not be able to process more than 400 pages.");
						}
							
						//System.out.println(" Result Count:" + resultCount + "  Max Page: " + maxPagesToParse);
					} catch (java.lang.Exception e){ 
						//System.out.println("Error parsing resultCount");
						logger.error("ERROR Search Results Count:" 
						+ resultCountText + " : " + resultCountStr);
					}
				}
				
				
				//Find the unavailable product in current page
				//Elements products = doc.select("div.product:contains(unavailable)");
				
				//Product Search result grid should have <div class=rsltGrid>
	            /*
	             * as of nov 2014, div.rsltGrid has change
				Elements products = doc.select("div.rsltGrid:contains(unavailable)"); // 12-18-13 //div with class resltGrid
	            Elements products2 = doc.select("div.rsltGrid:contains(out of stock)"); // 01-09-14
	            */
				
				//Product Search result grid should have <li class='s-result-item'>
				Elements products = doc.select("li.s-result-item:contains(unavailable)"); // 12-18-13 //div with class resltGrid
	            Elements products2 = doc.select("li.s-result-item:contains(out of stock)"); // 01-09-14				
				
	            products.addAll(products2);
	            Product p = null;
				for(Element product: products) {
					countSouldoutInSearchResults ++;
					try {
					 p = getProductFromAmazon(product, node.getCategory());
					 if(null == p) 
						 	countSaveError++; 
					 	else 
					 		countNodeTotal++;
					} catch (DuplicateException e) {
						countNodeDuplicates++;
					} catch (InconsistentException e) {
						countNodeNoLongerSoldout++;
					}
				}	// for loop within a page		

			} else {
				countNodePageError++;
			}
			
		} //for
		
		node.setLastcount(countNodeTotal);
		node.setDuplicate(countNodeDuplicates);
		node.setErrors(countSaveError + countScraperError + countNodePageError);
		node.setInconsistent(countNodeNoLongerSoldout);
		updateNode(node);

    	logger.info("Category:" + node.getCategory() +
    				"  Node:" + node.getId() + 
    				"  SoldOut in Search:" + countSouldoutInSearchResults +
    				"  SoldOut Total:" + countNodeTotal + 
    				"  SoldOut NotValid:" + countNodeNoLongerSoldout +
    				"  Duplicates:" + countNodeDuplicates +
    				"  Pages error:" + countNodePageError);		
    	return node;
	}
    
    // process a single product found on the browse page
    public Product getProductFromAmazon(Element product, String category) throws DuplicateException, InconsistentException{
    	Product p = null; //return value
    	String productId = null, productName = null, rank = "";
    	
    	// productId = product.attr("name");
    	// 2014-nov amazon changes
    	productId = product.attr("data-asin");
    	
/*
		try {
			productName = product.select("a.title").first().text();
		} catch (NullPointerException ne) {
			logger.error(String.format("Error found during parsing : %s : %s, %s" ,productId, productName, ne.toString()));
		}
*/
		try {
			Document productDoc = retrieveDocumentFromUrl("http://www.amazon.com/dp/" + productId);

			// On the product page, check if product is still available
            Elements availability = new Elements();
        	availability.addAll(productDoc.select("div#availability:contains(unavailable)")); // Div with id availability. # means id (12/18/13)
        	availability.addAll(productDoc.select("div#availability:contains(out of stock)")); // Div with id availability. # means id (12/18/13)
        	availability.addAll(productDoc.select("span.availRed:contains(unavailable)"));// Div with id availability. # means id (12/18/13)
        	availability.addAll(productDoc.select("span.availRed:contains(out of stock)"));
        	availability.addAll(productDoc.select("div#outOfStock"));
			
			if(availability != null && availability.size() > 0) {
				
				// check if product is already in the database, to prevent duplicates
				// sometimes products belong to more than one category
				if(!productExist(productId, category)) {
					rank = getBestsellerRank(productDoc);

					Integer rankInt = null;
					if(!rank.isEmpty()){
						rankInt = new Integer(rank.replace(",", ""));
					}					

					// ---- Get Product Name -----//
					Elements elementTitle = productDoc.select("h1#title"); // <h1 class="a-size-large a-spacing-none" id="title">Title</h1> (12/22/13)
					// sometimes h1 title is null (0526/2014)
					if(elementTitle !=null && elementTitle.text().length() == 0) {
						elementTitle = productDoc.select("#btAsinTitle"); // <span id="btAsinTitle">Title</span>
					}
		            if(elementTitle != null) {
		            	int trim = elementTitle.text().length() < 250 ? elementTitle.text().length() : 250;
		                productName = elementTitle.text().substring(0, trim);
		            } else {
		             //logger.warn("Title is null for Product #: " + productId);
		            }					
					
		            // ---- Save Product -----//
					p = saveProduct(productName, productId, rankInt, category);
					
					 
				} else {
						
					throw new DuplicateException();
				}
				
				
			}
		} catch (Exception pe) {
			throw new InconsistentException();
		}    	
		return p;
    }
	
	private Document retrieveDocumentFromUrl(String url) {
		Document doc = null;
		int connectErrorCnt = 0;

		while(doc == null && connectErrorCnt <= 2) {
			try {
				Connection con = Jsoup.connect(url);
    			doc = con.userAgent(userAgent)
    					.timeout(10*1000)
    					.execute()
    					.parse();
			} catch (Exception e) {
				connectErrorCnt++;
				
				if(connectErrorCnt == 2) {
					logger.debug("Connection error after 2 tries: " + url);
					return null;
					//throw new Exception(e);
				}
				
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e1) {
					logger.debug("Error in Thread.sleep(1000)");
				}
			} 
		}		
		return doc;
	}
	
	private String getBestsellerRank(Document doc) {
		String rank = "";
		try {		
			Elements products = doc.select("li#SalesRank");
			String text = products.first().text();
			int startIndex = text.indexOf("#") + 1;
			int endIndex = text.indexOf(' ', startIndex);
			rank = text.substring(startIndex, endIndex);
		} catch (Exception e) {
			// sometimes products has no best seller rank
		}
		
		return rank;
	}	
	
    private Product saveProduct(String name, String asin, Integer rank, String category) {
    		//logger.info("Found sold out product id: " + asin);
    		name = name.length() > 250 ? name.substring(0, 250) : name;
    		name = name.replaceAll("[-+.^:,]","");
            Product p = new Product();
            p.setName(name);
            p.setAsin(asin);
            p.setCategory(category);
            p.setRank(rank);
            p.setLastupdate(today);
            
        	try {
        		TypedServiceReturn tsr = runtimeSvc.insert(DB, "com.soldoutazondb.data.Product",p);
                p = (Product) tsr.getReturnValue();
                return p;
        		
        	} catch (Exception ex) {
        		//dbService.rollback();
        		logger.error("DB Insert error: " + p.getAsin());
        		return null;
        	}            
    }	
    
    
    
    // not used after 6.5.3 
    @Deprecated
    private void updateNode1(Node node, int count) {
    	logger.info("Update node: " + node.getId());
    	// Timestamp the node on last update
		node.setLastupdate(today);
		node.setLastcount(count);
		try {
			/*// 6.5.3 update
			dbService.begin();
			dbService.update(node);
			dbService.commit();*/
			TypedServiceReturn tsr = runtimeSvc.update(DB, "com.soldoutazondb.data.Node",node,0);
            //node = (Node)tsr.getReturnValue();
			
		} catch (Exception ex) {
			//dbService.rollback();
		}    
    }
    
    private void updateNode(Node node) {
    	logger.info("Update node: " + node.getId());
    	//Session session = dbService.getDataServiceManager().getSession();
		node.setLastupdate(new Date());
		//session.update(node);
		//dbService.commit();
		
		try {
			TypedServiceReturn nodeRet = runtimeSvc.update(DB, "com.soldoutazondb.data.Node",node,0);
		} catch (Exception e) {
			logger.error("Error updating Node timestamp and count: ", e);
		}
    	
    
    }
        
    
    //old method, now using the one below
    @Deprecated
    private boolean isStillSoldOut(String asin){
    	boolean returnFlag = true;
    	String url = "http://www.amazon.com/dp/" + asin;
    	String regEx = "span.availRed:contains(unavailable)";
    	
    	//Grocery & Gourmet Food
    	if(this.category.getId().intValue() > 8200 
    			&& this.category.getId().intValue() < 8230 ) {
    		regEx = "span.availRed:contains(becomes available)";
/*    	} else if (this.category.getId().intValue() >= 8100 
    			&& this.category.getId().intValue() < 8200 ) {
    		//Electronics
    		regEx = "div#availability:contains(out of stock)";  //<div id="availability"> */
    	}
    	
		try {		
			Document doc = retrieveDocumentFromUrl(url);
			Elements availability = doc.select(regEx); // span tag with class availRed contains 'unavailable' text
			if(availability == null || availability.size() == 0) {
				returnFlag = false; 
			}
		} catch (Exception e) {
			//product page is not accessible
			returnFlag = false;
		}
    	return returnFlag;
    }
    
    private void deleteProduct(int id) {
    	String sql = "delete from Product where id = " + id;
    	try {
	    	dbService.begin();
	    	Session session = dbService.getDataServiceManager().getSession();
	    	SQLQuery query = session.createSQLQuery(sql);
	        query.executeUpdate();
	        dbService.commit();
    	} catch (Exception ex) {
    		dbService.rollback();
    		logger.error("DB Delete error: " + id);
    	}   
    	
    }
    
    private void updateConfig(Config config) {
    	String sql = "update Config set value = \"" + config.getValue() 
    			+ "\"where key = \"" + config.getId() + "\"";
    	try {
	    	dbService.begin();
	    	Session session = dbService.getDataServiceManager().getSession();
	    	SQLQuery query = session.createSQLQuery(sql);
	        query.executeUpdate();
	        dbService.commit();
    	} catch (Exception ex) {
    		dbService.rollback();
    		logger.error("DB update error: " + sql);
    	}   
    	
    }
    
    //May 26, 2014 - add category
    private boolean productExist(String asin, String category){
    	
    	String sql = "select id from Product where asin =\""+ asin +"\" and category =\"" + category + "\"";

    	try {
	    	dbService.begin();
	    	Session session = dbService.getDataServiceManager().getSession();
	    	List list = session.createSQLQuery(sql).list();
	    	//int count = ((Long)session.createSQLQuery(sql).uniqueResult()).intValue();
	        dbService.commit();
	        if(list.size() > 0){ // atleast 1 already exist in the database.
	        	return true;
	        }
    	} catch (Exception ex) {
    		dbService.rollback();
    		logger.error("DB Query error: " + sql);
    	}  
    	return false;
    	
    }
    
    private void deleteOldProductsFromCategory(String category){
    	logger.info("DB Deleting old product from category: " + category);
    	String today = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
    	String sql = "delete from product where category = '"+ category +"' and lastupdate < '" + today +"'";

    	try {
	    	dbService.begin();
	    	Session session = dbService.getDataServiceManager().getSession();
	    	SQLQuery query = session.createSQLQuery(sql);
	        query.executeUpdate();
	        dbService.commit();
    	} catch (Exception ex) {
    		dbService.rollback();
    		logger.error("DB Delete error: " + sql);
    	}       	
    }
    
    //Used by Spring to set runtimeSvc member 
    //See also SecureDbSvc.spring.xml
    @HideFromClient
    public void setRuntimeSvc(RuntimeService runtimeSvc){
            this.runtimeSvc = runtimeSvc;
    }

    //Used by Spring to set securitySvc member 
    //See also SecureDbSvc.spring.xml
    @HideFromClient
    public void setSecuritySvc(SecurityService securitySvc){
            this.securitySvc = securitySvc;
    }

}