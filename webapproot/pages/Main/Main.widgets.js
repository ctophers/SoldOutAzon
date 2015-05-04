Main.widgets = {
	serviceAmazonImage: ["wm.ServiceVariable", {"operation":"getImageFromAsin","service":"AmazonWS"}, {"onBeforeUpdate":"loadingDialogPicture.show","onResult":"loadingDialogPicture.hide"}, {
		input: ["wm.ServiceInput", {"type":"getImageFromAsinInputs"}, {}]
	}],
	serviceAmazonItemSearch: ["wm.ServiceVariable", {"operation":"itemSearch","service":"AmazonWS"}, {"onBeforeUpdate":"loadingDialogSearch.show","onResult":"loadingDialogSearch.show.show.show.show.hide"}, {
		input: ["wm.ServiceInput", {"type":"itemSearchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"searchProductName.dataValue","targetProperty":"keywords"}, {}],
				wire1: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}]
			}]
		}]
	}],
	searchCountVar: ["wm.Variable", {"type":"NumberData"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceGetProductsCount.searchCount","targetProperty":"dataSet"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceGetProductsCount.searchCount","targetProperty":"dataValue"}, {}]
		}]
	}],
	loadingDialogPicture: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"picture1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	loadingDialogSearchSoldout: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceProducts","targetProperty":"serviceVariableToTrack"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"tabLayerSoldout","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	loadingDialogSearch: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"tabLayerSearch","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"serviceAmazonItemSearch","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueOutsetPanel","wm_BackgroundColor_LightBlue","MainContent"]},"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"988px"}, {}, {
		pagePanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minWidth":900,"verticalAlign":"top","width":"100%"}, {}, {
			headerPanel: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				SoldOutAzonPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"350px"}, {}, {
					SoldOutAzon: ["wm.Picture", {"aspect":"h","height":"110%","link":"http://soldoutazon.com","source":"resources/images/logos/Logo3.png","width":"100%"}, {"onclick":"SoldOutAzonClick"}]
				}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					systemMessage: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
						largeTextArea1: ["wm.LargeTextArea", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontColor_Red","wm_BackgroundColor_Yellow","wm_FontFamily_Arial","wm_FontSizePx_14px","largeTextArea1"]},"border":"2","borderColor":"#ff0000","captionPosition":"bottom","desktopHeight":"50px","displayValue":"05/01: We have updated the following categories: Home & Decor, Health & Personal Care, Power & Hand Tools.","height":"50px","margin":"2","padding":"4","readonly":true,"styles":{"whiteSpace":""},"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.liveVariableSystem.message","targetProperty":"dataValue"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"app.liveVariableSystem.flag","targetProperty":"showing"}, {}]
							}]
						}]
					}],
					SecurityComponents: ["wm.Template", {"height":"70%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"490px"}, {}, {
						templateUserNameLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"20px","padding":"4","showing":false,"width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"\"Welcome, \" + ${app.usernameVar.dataValue}","targetProperty":"caption"}, {}]
							}]
						}],
						templateLogoutButton: ["wm.Button", {"caption":"Log Out","margin":"4","width":"90px"}, {"onclick":"app.logoutVariable1"}],
						buttonFAQ: ["wm.Button", {"caption":"F.A.Q.","margin":"4"}, {"onclick":"faqButtonClick"}],
						buttonContact: ["wm.Button", {"caption":"Contact","margin":"4"}, {"onclick":"contactButtonClick"}],
						buttonVideos: ["wm.Button", {"caption":"Videos","margin":"4"}, {"onclick":"videosButtonClick"}],
						buttonKey: ["wm.Button", {"caption":"Key","margin":"4"}, {"onclick":"keyButtonClick"}],
						adminButton: ["wm.Button", {"caption":"Admin","margin":"4","roles":["Admin"],"styles":{},"width":"74px"}, {"onclick":"app.gotoAdmin"}]
					}]
				}]
			}],
			bodyPanel: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				bodyMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					tabLayers1: ["wm.TabLayers", {"defaultLayer":0}, {}, {
						tabLayerSoldout: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Sold Out Products","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							filterPanel: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
								label1: ["wm.Label", {"caption":"FILTERS:","padding":"4","width":"70px"}, {}],
								filterProductName: ["wm.Text", {"caption":"Product Name","dataValue":undefined,"displayValue":"","helpText":"Enter the name of the product. The less words you use, the more results you'll see (i.e. type 'Mickey Mouse' instead of  'Disney Mickey Mouse Action Figure'."}, {"onEnterKeyPress":"SearchProducts"}],
								filterHighRank: ["wm.Text", {"caption":"Amazon Rank >","captionSize":"110px","dataValue":undefined,"displayValue":"","helpText":"With sold-out items, the Amazon sales rank is not critical. An item that has not been in stock on Amazon has a 'worsening' sales rank because the item simply hasn't sold for a while (since there is no inventory). Amazon Bestseller rank indicates how quickly the item is selling. The lower the Rank, the 'hotter' the item is on Amazon. Example: a sales rank of 5,000 is hotter-selling than (say) 500,000","invalidMessage":"Please enter a positive number","regExp":"","showMessages":false,"width":"220px"}, {"onEnterKeyPress":"SearchProducts"}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								filterCategory: ["wm.SelectMenu", {"allowNone":true,"caption":"Category","captionSize":"75px","dataType":"com.soldoutazondb.data.output.GetCategoryRtnType","dataValue":undefined,"displayField":"c0","displayValue":"","helpText":"Select one category (i.e. 'Toys and Games')","pageSize":0,"startUpdate":true}, {"onchange":"SearchProducts"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceGetCategory","targetProperty":"dataSet"}, {}]
									}]
								}]
							}],
							dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name","title":"Product Name","width":"250px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"category","title":"Category","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"asin","title":"Amazon ASIN","width":"80px","align":"left","formatFunc":"productDojoGridAmazonLinkFormat","mobileColumn":false},
{"show":true,"field":"rank","title":"Rank","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lastupdate","title":"Lastupdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"customField","title":"Price History","width":"100%","formatFunc":"productDojoGridPriceLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField1","title":"All Amazon","width":"100%","formatFunc":"productDojoGridSearchAmazonLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"customField2","title":"The Find.com","width":"100%","formatFunc":"productDojoGridSearchOthersLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField3","title":"Craigslist","width":"100%","formatFunc":"productDojoGridSearchCraigslistLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField4","title":"eBay","width":"100%","formatFunc":"productDojoGridSearchEbayLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"customField5","title":"Google Products","width":"100%","formatFunc":"productDojoGridSearchGoogleLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField6","title":"Shopzilla","width":"100%","formatFunc":"productDojoGridSearchShopzillaLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField7","title":"Google Shopping","width":"100%","formatFunc":"productDojoGridGoogleShopping","expression":"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Product Name: \" + ${name} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Category: \" + ${category}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Amazon ASIN: \" + ${wm.runtimeId}.formatCell(\"asin\", ${asin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Rank: \" + ${rank}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Price History: \" + ${wm.runtimeId}.formatCell(\"customField\", ${customField}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"All Amazon: \" + ${wm.runtimeId}.formatCell(\"customField1\", ${customField1}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Craigslist: \" + ${wm.runtimeId}.formatCell(\"customField3\", ${customField3}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"EBay: \" + ${wm.runtimeId}.formatCell(\"customField4\", ${customField4}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Shopzilla: \" + ${wm.runtimeId}.formatCell(\"customField6\", ${customField6}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Google Shopping: \" + ${wm.runtimeId}.formatCell(\"customField7\", ${customField7}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":2,"minHeight":2,"styles":{"wordBreak":""}}, {"onClick":"dojoGrid1SelectionChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceProducts","targetProperty":"dataSet"}, {}]
								}]
							}],
							searchNavPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
								First: ["wm.Button", {"caption":"<< First","margin":"4"}, {"onclick":"FirstClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"${app.serviceProducts.firstRow} < 1","source":false,"targetProperty":"disabled"}, {}]
									}]
								}],
								Prev: ["wm.Button", {"caption":"< Prev","margin":"4"}, {"onclick":"PrevClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"${app.serviceProducts.firstRow} < 1","source":false,"targetProperty":"disabled"}, {}]
									}]
								}],
								panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"280px"}, {}, {
									Page: ["wm.Text", {"_classes":{"domNode":["wm_TextAlign_Center"]},"captionAlign":"center","captionSize":"40px","displayValue":"Page 1 of 0 (  products total)","height":"100%","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire1: ["wm.Wire", {"expression":"${app.serviceGetProductsCount.searchCount} > 0","source":false,"targetProperty":"showing"}, {}],
											wire: ["wm.Wire", {"expression":"'Page ' + (${app.serviceProducts.firstRow}/10 + 1) + ' of ' + \nMath.ceil(${searchCountVar.dataValue}/10) +\n' ( ' +${searchCountVar.dataValue} +' products total)'","source":false,"targetProperty":"dataValue"}, {}]
										}]
									}]
								}],
								Next: ["wm.Button", {"caption":"Next >","margin":"4"}, {"onclick":"NextClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":" ${app.serviceProducts.firstRow} *1 + ${app.serviceProducts.maxResults} *1 > ${app.serviceGetProductsCount.searchCount}","source":false,"targetProperty":"disabled"}, {}]
									}]
								}],
								Last: ["wm.Button", {"caption":"Last >>","margin":"4"}, {"onclick":"LastClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":" ${app.serviceProducts.firstRow} *1 + ${app.serviceProducts.maxResults} *1 > ${app.serviceGetProductsCount.searchCount}","source":false,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}],
						tabLayerSearch: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Any Product","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							searchProductNamePanel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"300px"}, {}, {
								searchProductName: ["wm.Text", {"caption":"Search","captionSize":"60px","dataValue":undefined,"displayValue":"","helpText":"Enter the name of the product OR the ASIN (Amazon Standard Identification Number)","width":"100%"}, {"onEnterKeyPress":"searchProductNameEnterKeyPress"}]
							}],
							dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"name","title":"Product Name","width":"250px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asin","title":"Asin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"category","title":"Category","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"customField5","title":"Amazon ASIN","width":"90px","align":"left","formatFunc":"productDojoGridAmazonDetailLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField","title":"Price History","width":"100%","align":"left","formatFunc":"productDojoGridPriceLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField1","title":"All Amazon","width":"100%","align":"left","formatFunc":"productDojoGridSearchAmazonLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"customField2","title":"The Find.com","width":"100%","align":"left","formatFunc":"productDojoGridSearchOthersLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField3","title":"Craigslist","width":"100%","align":"left","formatFunc":"productDojoGridSearchCraigslistLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField4","title":"eBay","width":"100%","align":"left","formatFunc":"productDojoGridSearchEbayLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"imageUrl","title":"ImageUrl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"customField6","title":"Shopzilla","width":"100%","align":"left","formatFunc":"productDojoGridSearchShopzillaLinkFormat","expression":"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"customField7","title":"Google Shopping","width":"100%","align":"left","formatFunc":"productDojoGridGoogleShopping","expression":"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"detailPageUrl","title":"DetailPageUrl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Product Name: \" + ${name} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Category: \" + ${category}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Amazon ASIN: \" + ${wm.runtimeId}.formatCell(\"customField5\", ${customField5}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Price History: \" + ${wm.runtimeId}.formatCell(\"customField\", ${customField}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"All Amazon: \" + ${wm.runtimeId}.formatCell(\"customField1\", ${customField1}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Craigslist: \" + ${wm.runtimeId}.formatCell(\"customField3\", ${customField3}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"EBay: \" + ${wm.runtimeId}.formatCell(\"customField4\", ${customField4}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Shopzilla: \" + ${wm.runtimeId}.formatCell(\"customField6\", ${customField6}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Google Shopping: \" + ${wm.runtimeId}.formatCell(\"customField7\", ${customField7}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","margin":"4","minDesktopHeight":60,"styles":{"wordBreak":"normal"}}, {"onSelectionChange":"dojoGrid2SelectionChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"serviceAmazonItemSearch.items","targetProperty":"dataSet"}, {}]
								}]
							}],
							panel4: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
								FirstWS: ["wm.Button", {"caption":"<< First","margin":"4"}, {"onclick":"FirstWSClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"${serviceAmazonItemSearch.input.data.page} <=1","source":false,"targetProperty":"disabled"}, {}]
									}]
								}],
								PrevWS: ["wm.Button", {"caption":"< Prev","margin":"4"}, {"onclick":"PrevWSClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"${serviceAmazonItemSearch.input.data.page} <=1","source":false,"targetProperty":"disabled"}, {}]
									}]
								}],
								panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"280px"}, {}, {
									Page1: ["wm.Text", {"_classes":{"domNode":["wm_TextAlign_Center"]},"captionAlign":"center","captionSize":"40px","displayValue":"Page 1 of 5","height":"100%","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire1: ["wm.Wire", {"expression":"${serviceAmazonItemSearch.data.totalPages} > 0","source":false,"targetProperty":"showing"}, {}],
											wire: ["wm.Wire", {"expression":"'Page ' + ${serviceAmazonItemSearch.input.data.page} + ' of ' + \n'5'","source":false,"targetProperty":"dataValue"}, {}]
										}]
									}]
								}],
								NextWS: ["wm.Button", {"caption":"Next >","margin":"4"}, {"onclick":"NextWSClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"(${serviceAmazonItemSearch.input.data.page} >= 5) || (${serviceAmazonItemSearch.data.totalPages} == 0)","source":false,"targetProperty":"disabled"}, {}]
									}]
								}],
								LastWS: ["wm.Button", {"caption":"Last >>","margin":"4"}, {"onclick":"LastWSClick"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"(${serviceAmazonItemSearch.input.data.page} >= 5) || (${serviceAmazonItemSearch.data.totalPages} == 0)","source":false,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}],
						UserProfileTab: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"User Profile","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							fancyPanel2: ["wm.FancyPanel", {"height":"143px","title":"User Information"}, {}, {
								spacer5: ["wm.Spacer", {"height":"14px","width":"331px"}, {}],
								text4: ["wm.Text", {"caption":"Username","captionSize":"200px","displayValue":"chris","readonly":true,"width":"400px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"app.usernameVar.dataValue","targetProperty":"dataValue"}, {}]
									}]
								}],
								username: ["wm.Text", {"caption":"New Username","captionSize":"200px","dataValue":undefined,"displayValue":"","required":true,"width":"400px"}, {}],
								panel3: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
									UpdateUsername: ["wm.Button", {"caption":"Update","margin":"4","width":"100px"}, {"onclick":"UpdateUsernameClick"}]
								}]
							}],
							fancyPanel3: ["wm.FancyPanel", {"height":"142px","title":"Change Password"}, {}, {
								spacer3: ["wm.Spacer", {"height":"14px","width":"331px"}, {}],
								newPassword: ["wm.Text", {"caption":"New Password","captionSize":"200px","dataValue":undefined,"displayValue":"","password":true,"required":true,"width":"400px"}, {}],
								retypePassword: ["wm.Text", {"caption":"Retype Password","captionSize":"200px","dataValue":undefined,"displayValue":"","password":true,"required":true,"width":"400px"}, {}],
								panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
									UpdatePassword: ["wm.Button", {"caption":"Update","margin":"4","width":"100px"}, {"onclick":"UpdatePasswordClick"}]
								}]
							}]
						}]
					}]
				}],
				sidePanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"296px"}, {}, {
					productDetailsPanel: ["wm.FancyPanel", {"height":"190px","innerHorizontalAlign":"center","innerVerticalAlign":"middle","title":"Product Image"}, {}, {
						picture1: ["wm.Picture", {"aspect":"h","border":"2","height":"100%","width":"100%"}, {"onclick":"productAmazonLink"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"serviceAmazonImage.dataValue","targetProperty":"source"}, {}]
							}]
						}]
					}],
					fancyPanel1: ["wm.FancyPanel", {"title":"Craiglist Wanted Ad"}, {}, {
						craiglistTitle: ["wm.LargeTextArea", {"caption":"CL Wanted Ad Suggested Title","dataValue":undefined,"desktopHeight":"70px","displayValue":"","height":"70px","width":"100%"}, {}],
						spacer1: ["wm.Spacer", {"height":"17px","width":"97px"}, {}],
						craiglistText: ["wm.LargeTextArea", {"caption":"CL Wanted Ad Suggested Copy","dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {}]
					}]
				}]
			}]
		}]
	}]
}