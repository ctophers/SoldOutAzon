package webservice;

import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import amazonws.SignedRequestsHelper;


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
public class AmazonWS extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public AmazonWS() {
       super(INFO);
    }

	public String getImageFromAsin(String asin){
		String imageUrl="";
		StringBuffer requestUrl = new StringBuffer("Service=AWSECommerceService");
		requestUrl.append("&Version=2011-08-01");
		requestUrl.append("&AWSAccessKeyId=AKIAJJC6VNKYZBJ3JQYQ");
		requestUrl.append("&AssociateTag=jordanmalik-20");
		requestUrl.append("&Operation=ItemLookup");
		requestUrl.append("&ResponseGroup=Images");
		requestUrl.append("&ItemId=").append(asin);
		
		try {
			SignedRequestsHelper helper = SignedRequestsHelper.getInstance();
			String signedRequestUrl = helper.sign(requestUrl.toString());
            log(DEBUG, "Get amazon image w/ signed url: " + signedRequestUrl);
			imageUrl = fetchLargeImage(signedRequestUrl);
			
		} catch(Exception e) {
            log(ERROR, "Can't get image from Amazon web service: ", e);			
		}
		
		return imageUrl;
	}
	
    private String fetchLargeImage(String requestUrl) {
        String ret = null;
        try {   
        	
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            Document doc = db.parse(requestUrl);
                 
            Node node = doc.getElementsByTagName("MediumImage").item(0);
            Element e = (Element) node;
            Node url = e.getElementsByTagName("URL").item(0);
            
            ret = url.getTextContent();
        } catch (Exception e) {
            log(ERROR, "Error parsing LargeImage from url: " + requestUrl);
        }
        return ret;
    }
    
    public AmazonSearchResults itemSearch(String keywords, int page) {
    	AmazonSearchResults results = new AmazonSearchResults();
    	List<AmazonItem> list = new ArrayList();
    	
    	try {
	    	StringBuffer requestUrl = new StringBuffer("http://ecs.amazonaws.com/onca/xml?Service=AWSECommerceService&Version=2011-08-01");
			requestUrl.append("&AssociateTag=jordanmalik-20");
			requestUrl.append("&Operation=ItemSearch&Availability=Available");
			requestUrl.append("&SearchIndex=All");
			requestUrl.append("&ResponseGroup=ItemAttributes,Images");
			requestUrl.append("&Keywords=").append(keywords);
			requestUrl.append("&ItemPage=").append(page);

    	
			SignedRequestsHelper helper = SignedRequestsHelper.getInstance();
			String signedRequestUrl = helper.sign(requestUrl.toString());
			
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
	        DocumentBuilder db = dbf.newDocumentBuilder();
	        Document doc = db.parse(signedRequestUrl);		
	        
	        
	        String totalPages = doc.getElementsByTagName("TotalPages").item(0).getTextContent();
	        try{
	        	int tPages = Integer.parseInt(totalPages);
	        	results.setTotalPages(tPages);
	        } catch (NumberFormatException ne ){
	        	log(ERROR, "Invalid TotalPages" + ne.getMessage());
	        }
            
            String totalItems = doc.getElementsByTagName("TotalResults").item(0).getTextContent();
	        try{
	        	int tPages = Integer.parseInt(totalItems);
	        	results.setTotalItems(tPages);
	        } catch (NumberFormatException ne ){
	        	log(ERROR, "Invalid TotalItems" + ne.getMessage());
	        }            
	        
	        
	        NodeList nodes = doc.getElementsByTagName("Item");
	        Element el;
	        
	        for(int i=0; i< nodes.getLength(); i++){
	        	AmazonItem item = new AmazonItem();
	        	el = (Element) nodes.item(i);
	        	//p.setAsin(el.getElementsByTagName("ASIN").item(0).getTextContent());
	        	String asin = el.getElementsByTagName("ASIN").item(0).getTextContent();
	        	item.setAsin(asin);
	        	String detailPageUrl = el.getElementsByTagName("DetailPageURL").item(0).getTextContent();
	        	item.setDetailPageUrl(detailPageUrl);
	        	
	        	try {
	        		Element el2 = (Element)el.getElementsByTagName("ItemAttributes").item(0);
	        		item.setName(el2.getElementsByTagName("Title").item(0).getTextContent());
	        		item.setCategory(el2.getElementsByTagName("ProductGroup").item(0).getTextContent());
	        	} catch (Exception e) {
	        		log(ERROR, "Can't get item attribute for asin: " + asin);
	        	}
	        	try {
	        		Element imageNode = (Element)el.getElementsByTagName("MediumImage").item(0);
	        		item.setImageUrl(imageNode.getElementsByTagName("URL").item(0).getTextContent());
	        	} catch (Exception e) {
	        		log(ERROR, "Error AmazonWS.itemSearch.getImage: " + e.getMessage());
	        	}
	        	list.add(item);
	        }
		}catch(Exception e){
			log(ERROR, "Error AmazonWS.itemSearch: " + e.getMessage());
		}
        	
		
        results.setItems(list);
        
		return results;
        
	}
    
	public class AmazonSearchResults {
	    int totalPages = 0;
        int totalItems = 0;
	    List<AmazonItem> items;
	    
	    public List<AmazonItem> getItems(){
	        return items;
	    }
	    
	    public void setItems(List<AmazonItem> param){
	        items = param;
	    }
	    
	    public void setTotalPages(int param){
	    	totalPages = param;
	    }
	    
	    public int getTotalPages(){
	    	return totalPages;
	    }
        public void setTotalItems(int param){
	    	totalItems = param;
	    }
	    
	    public int getTotalItems(){
	    	return totalItems;
	    }
        
	}	
	
	public AmazonItem getAmazonItem(){
		return new AmazonItem();
	}
	
	public class AmazonItem {
		
		String name;
		String asin;
		String imageUrl;
		String category;
		String detailPageUrl;
		
		
		public void setAsin(String value){
			asin = value;
		}
		
		public void setName(String value){
			name = value;
		}
		
		public void setImageUrl(String value){
			imageUrl = value;
		}
		
		public void setCategory(String value){
			category = value;
		}

		public String getName() {
			return name;
		}

		public String getAsin() {
			return asin;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public String getCategory() {
			return category;
		}
		
		
		public String getDetailPageUrl() {
			return detailPageUrl;
		}

		public void setDetailPageUrl(String detailPageUrl) {
			this.detailPageUrl = detailPageUrl;
		}

		public String toString(){
			StringBuffer sb = new StringBuffer(asin);
			sb.append(", Name: ").append(name);
			sb.append(", Category: ").append(category);
			sb.append(", Image: ").append(imageUrl);
			return sb.toString();
		}
		
	}    
    
    

}
