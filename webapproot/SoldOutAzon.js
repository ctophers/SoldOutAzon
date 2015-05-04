dojo.declare("SoldOutAzon", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSSLUsed": false, 
	"isSecurityEnabled": true, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha95", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "nothing", 
	"studioVersion": "6.6.0M2", 
	"tabletMain": "", 
	"theme": "common.themes.soldoutazon-blue", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		categoryLiveView: ["wm.LiveView", {"dataType":"com.soldoutazondb.data.Category","service":"soldoutazonDB","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2000},
{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"Started","sortable":true,"dataIndex":"started","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2002},
{"caption":"Completed","sortable":true,"dataIndex":"completed","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2003},
{"caption":"Prevcount","sortable":true,"dataIndex":"prevcount","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2004},
{"caption":"Latestcount","sortable":true,"dataIndex":"latestcount","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2005},
{"caption":"Productexistcount","sortable":true,"dataIndex":"productexistcount","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2006},
{"caption":"Error","sortable":true,"dataIndex":"error","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2007},
{"caption":"Search","sortable":true,"dataIndex":"search","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2008},
{"caption":"Inconsistent","sortable":true,"dataIndex":"inconsistent","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2009}
]}, {}], 
		nodeLiveView: ["wm.LiveView", {"dataType":"com.amazonoosdb.data.Node","service":"amazonoosDB","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4000,"subType":null,"widthUnits":"px"},
{"caption":"Category","sortable":true,"dataIndex":"category","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4001,"subType":null,"widthUnits":"px"},
{"caption":"Subcategory","sortable":true,"dataIndex":"subcategory","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4002,"subType":null,"widthUnits":"px"},
{"caption":"Url","sortable":true,"dataIndex":"url","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4003,"subType":null,"widthUnits":"px"},
{"caption":"Runcount","sortable":true,"dataIndex":"runcount","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4004,"subType":null,"widthUnits":"px"}
]}, {}], 
		nodeLiveView1: ["wm.LiveView", {"dataType":"com.soldoutazondb.data.Node","service":"soldoutazonDB","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},
{"caption":"Category","sortable":true,"dataIndex":"category","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"Subcategory","sortable":true,"dataIndex":"subcategory","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},
{"caption":"Url","sortable":true,"dataIndex":"url","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},
{"caption":"Lastupdate","sortable":true,"dataIndex":"lastupdate","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2004},
{"caption":"Lastcount","sortable":true,"dataIndex":"lastcount","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2005}
]}, {}], 
		systemLiveView1: ["wm.LiveView", {"dataType":"com.soldoutazondb.data.System","service":"soldoutazonDB","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Flag","sortable":true,"dataIndex":"flag","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Message","sortable":true,"dataIndex":"message","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}], 
		userLiveView: ["wm.LiveView", {"dataType":"com.soldoutazondb.data.User","service":"soldoutazonDB","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4000,"subType":null,"widthUnits":"px"},
{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4001,"subType":null,"widthUnits":"px"},
{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4002,"subType":null,"widthUnits":"px"},
{"caption":"Role","sortable":true,"dataIndex":"role","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4003,"subType":null,"widthUnits":"px"},
{"caption":"Lastlogin","sortable":true,"dataIndex":"lastlogin","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4004}
]}, {}], 
		gotoAdmin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Admin\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		liveVariableSystem: ["wm.LiveVariable", {"liveSource":"com.soldoutazondb.data.System","type":"com.soldoutazondb.data.System"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"filter.id"}, {}]
			}]
		}], 
		logoutVariable1: ["wm.LogoutVariable", {"inFlightBehavior":"executeAll"}, {}, {
			input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
		}], 
		serviceGetCategory: ["wm.ServiceVariable", {"maxResults":200,"operation":"getCategory","service":"soldoutazonDB"}, {}, {
			input: ["wm.ServiceInput", {"type":"getCategoryInputs"}, {}]
		}], 
		serviceGetProductsCount: ["wm.ServiceVariable", {"designMaxResults":1,"maxResults":1,"operation":"getProductsCount","service":"soldoutazonDB"}, {}, {
			input: ["wm.ServiceInput", {"type":"getProductsCountInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire1: ["wm.Wire", {"expression":undefined,"source":"[main].filterProductName.dataValue","targetProperty":"name"}, {}],
					wire2: ["wm.Wire", {"expression":undefined,"source":"[main].filterHighRank.dataValue","targetProperty":"rank"}, {}],
					wire: ["wm.Wire", {"expression":undefined,"source":"[main].filterCategory.selectedItem.c0","targetProperty":"category"}, {}]
				}]
			}]
		}], 
		serviceLogout: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {}, {
			input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
		}], 
		serviceParseAmazonCategory: ["wm.ServiceVariable", {"operation":"parseAmazonCategory","service":"AmazonScraper"}, {}, {
			input: ["wm.ServiceInput", {"type":"parseAmazonCategoryInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"[admin].selectCategoryUpdate.selectedItem.c0","targetProperty":"category"}, {}]
				}]
			}]
		}], 
		serviceProducts: ["wm.ServiceVariable", {"designMaxResults":10,"firstRow":"0","maxResults":10,"operation":"getProducts","service":"soldoutazonDB"}, {}, {
			input: ["wm.ServiceInput", {"type":"getProductsInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire1: ["wm.Wire", {"expression":undefined,"source":"[main].filterProductName.dataValue","targetProperty":"name"}, {}],
					wire2: ["wm.Wire", {"expression":undefined,"source":"[main].filterHighRank.dataValue","targetProperty":"rank"}, {}],
					wire: ["wm.Wire", {"expression":undefined,"source":"[main].filterCategory.selectedItem.c0","targetProperty":"category"}, {}]
				}]
			}]
		}], 
		serviceScrapeUrl: ["wm.ServiceVariable", {"operation":"scrapeUrl","service":"AmazonScraper"}, {}, {
			input: ["wm.ServiceInput", {"type":"scrapeUrlInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"nodeDojoGrid.selectedItem","targetProperty":"url"}, {}],
					wire5: ["wm.Wire", {"expression":undefined,"source":"[admin].nodeLiveForm2.dataOutput.lastupdate","targetProperty":"node.lastupdate"}, {}],
					wire4: ["wm.Wire", {"expression":undefined,"source":"[admin].nodeLiveVariable1.url","targetProperty":"node.url"}, {}],
					wire3: ["wm.Wire", {"expression":undefined,"source":"[admin].nodeLiveForm2.dataOutput.subcategory","targetProperty":"node.subcategory"}, {}],
					wire2: ["wm.Wire", {"expression":undefined,"source":"[admin].nodeLiveForm2.dataOutput.id","targetProperty":"node.id"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"[admin].nodeLiveForm2.dataOutput.category","targetProperty":"node.category"}, {}],
					wire6: ["wm.Wire", {"expression":undefined,"source":"[admin].nodeDojoGrid.selectedItem","targetProperty":"node"}, {}]
				}]
			}]
		}], 
		serviceSystemMessage: ["wm.ServiceVariable", {}, {}, {
			input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
		}], 
		serviceUpdatePassword: ["wm.ServiceVariable", {"operation":"updatePassword","service":"soldoutazonDB"}, {}, {
			input: ["wm.ServiceInput", {"type":"updatePasswordInputs"}, {}]
		}], 
		serviceUpdateUsername: ["wm.ServiceVariable", {"operation":"updateUsername","service":"soldoutazonDB"}, {}, {
			input: ["wm.ServiceInput", {"type":"updateUsernameInputs"}, {}]
		}], 
		userIdVar: ["wm.ServiceVariable", {"operation":"getUserId","service":"securityService","startUpdate":true}, {}, {
			input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
		}], 
		usernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
			input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
		}]
	},
	_end: 0
});

SoldOutAzon.extend({

	_end: 0
});