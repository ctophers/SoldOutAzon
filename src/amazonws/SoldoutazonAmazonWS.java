package amazonws;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class SoldoutazonAmazonWS {
	
	public static void main(String args[]) {
		SoldoutazonAmazonWS ws = new SoldoutazonAmazonWS();
		try {
			//ws.getImageFromAsin("B006KTHTIG");
			ws.itemSearch("batman", 1);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public class AmazonItem {
		
		String name;
		String asin;
		String imageUrl;
		String category;
		
		
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
		
		
		public String toString(){
			StringBuffer sb = new StringBuffer(asin);
			sb.append(", Name: ").append(name);
			sb.append(", Category: ").append(category);
			sb.append(", Image: ").append(imageUrl);
			return sb.toString();
		}
		
	}
	
	private void itemSearch(String keywords, int page) throws Exception {
		StringBuffer requestUrl = new StringBuffer("http://ecs.amazonaws.com/onca/xml?Service=AWSECommerceService&Version=2011-08-01");
			requestUrl.append("&AssociateTag=jordanmalik-20");
			requestUrl.append("&Operation=ItemSearch&Availability=Available");
			requestUrl.append("&SearchIndex=All");
			requestUrl.append("&ResponseGroup=ItemAttributes,Images");
			requestUrl.append("&Keywords=").append(keywords);
			requestUrl.append("&ItemPage=").append(page);

		System.out.println("Sign the request url: " + requestUrl.toString());
		SignedRequestsHelper helper = SignedRequestsHelper.getInstance();
		String signedRequestUrl = helper.sign(requestUrl.toString());
		System.out.println("Signed url: " + signedRequestUrl);
		
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        DocumentBuilder db = dbf.newDocumentBuilder();
        Document doc = db.parse(signedRequestUrl);		
        
        NodeList nodes = doc.getElementsByTagName("Item");
        Element el;
        for(int i=0; i< nodes.getLength(); i++){
        	AmazonItem item = new AmazonItem();
        	el = (Element) nodes.item(i);
        	//p.setAsin(el.getElementsByTagName("ASIN").item(0).getTextContent());
        	String asin = el.getElementsByTagName("ASIN").item(0).getTextContent();
        	item.setAsin(asin);
        	
        	try {
        		Element el2 = (Element)el.getElementsByTagName("ItemAttributes").item(0);
        		item.setName(el2.getElementsByTagName("Title").item(0).getTextContent());
        		item.setCategory(el2.getElementsByTagName("ProductGroup").item(0).getTextContent());
        	} catch (Exception e) {
        		System.out.println("Can't get item attribute for asin: " + asin);
        	}
        	try {
        		Element imageNode = (Element)el.getElementsByTagName("MediumImage").item(0);
        		item.setImageUrl(imageNode.getElementsByTagName("URL").item(0).getTextContent());
        	} catch (Exception e) {
        		System.out.println("Can't get image for asin: " + asin);
        	}
        	System.out.println(item.toString());
        }
        	
		
        
	}

	public String getImageFromAsin(String asin) throws Exception{
		String imageUrl="";
		String queryString = "Service=AWSECommerceService&Version=2011-08-01&AssociateTag=jordanmalik-20&Operation=ItemLookup&ResponseGroup=Images&ItemId=" + asin;
		SignedRequestsHelper helper = SignedRequestsHelper.getInstance();
		String signedRequestUrl = helper.sign(queryString);
		imageUrl = fetchLargeImage(signedRequestUrl);
			
		return imageUrl;
	}
	
    private String fetchLargeImage(String requestUrl) {
        String ret = null;
        try {
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            Document doc = db.parse(requestUrl);
            Node node = doc.getElementsByTagName("LargeImage").item(0);
            Element e = (Element) node;
            Node url = e.getElementsByTagName("URL").item(0);
            
            ret = url.getTextContent();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ret;
    }	

}
