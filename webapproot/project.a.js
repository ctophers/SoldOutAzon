wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['waveMakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.soldoutazondb.data.Category": {
			"fields": {
				"completed": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"error": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"id": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inconsistent": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"latestcount": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"prevcount": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"productexistcount": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"search": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"started": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.Config": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"value": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.Node": {
			"fields": {
				"category": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"duplicate": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"errors": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"id": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inconsistent": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"lastcount": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"lastupdate": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"subcategory": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"url": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.Product": {
			"fields": {
				"asin": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"category": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lastupdate": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"rank": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.System": {
			"fields": {
				"flag": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"id": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"message": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.User": {
			"fields": {
				"id": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lastlogin": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"password": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"role": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"username": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.output.GetCategoryRtnType": {
			"fields": {
				"c0": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "soldoutazonDB"
		},
		"com.soldoutazondb.data.output.GetProductsCountRtnType": {
			"fields": {
				"searchCount": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "soldoutazonDB"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"org.jsoup.nodes.Element": {
			"fields": {
				"allElements": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.Object"
				},
				"block": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "boolean"
				},
				"outputSettings": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "org.jsoup.nodes.Document.OutputSettings"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "AmazonScraper"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		},
		"webservice.AmazonWS.AmazonItem": {
			"fields": {
				"asin": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"category": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"detailPageUrl": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"imageUrl": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "AmazonWS"
		},
		"webservice.AmazonWS.AmazonSearchResults": {
			"fields": {
				"items": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "webservice.AmazonWS.AmazonItem"
				},
				"totalItems": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "int"
				},
				"totalPages": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "int"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "AmazonWS"
		}
	}
};
wm.Application.themeData['common.themes.soldoutazon-blue'] = {"wm.ToggleButton":{"border":"1","borderColor":"#333333"},"wm.Button":{"border":"1","borderColor":"#333333"},"wm.Layout":{"border":"0","borderColor":"#333333"},"wm.Bevel":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.Splitter":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.AccordionDecorator":{"captionBorder":"1","captionBorderColor":"#333333"},"wm.AccordionLayers":{"border":"0","borderColor":"#333333","captionBorder":"2","layerBorder":"1","captionHeight":"30"},"wm.FancyPanel":{"margin":"2","border":"0","borderColor":"#999999","innerBorder":"2","labelHeight":"24"},"wm.TabLayers":{"layersType":"Tabs","margin":"0,2,0,2","clientBorder":"1","border":"0","isMajorContent":1,"clientBorderColor":"#999999","headerHeight":"29px","borderColor":"#999999"},"wm.WizardLayers":{"margin":"0,2,0,2","border":"0","clientBorder":"1","isMajorContent":1,"clientBorderColor":"#333333"},"wm.Layer":{"margin":"2,0,2,0"},"wm.Dialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","containerClass":"HeaderContent","titlebarHeight":"22"},"wm.GenericDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.RichTextDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"HeaderContent"},"wm.PageDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","noBevel":true,"containerClass":"MainContent"},"wm.DesignableDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.DojoMenu":{"padding":"0","border":"0","borderColor":"#333333"},"wm.List":{"margin":"0,2,0,2","border":"2","borderColor":"#333333"},"wm.dijit.ProgressBar":{"border":"0","borderColor":"#333333"},"wm.RichText":{"border":"0","borderColor":"#333333"},"wm.RoundedButton":{"border":"0","borderColor":"#333333"},"wm.DataGrid":{"border":"2","borderColor":"#333333"},"wm.Label":{},"wm.Picture":{},"wm.Spacer":{},"wm.Layers":{"border":"0"},"wm.PageContainer":{},"wm.Panel":{"borderColor":"#333333","border":"0"},"wm.CheckBoxEditor":{},"wm.CurrencyEditor":{},"wm.Text":{"border":"0"},"wm.SelectMenu":{"border":"0"},"wm.dijit.Calendar":{},"wm.DojoGrid":{"border":"1","borderColor":"#999999"},"wm.Control":{"borderColor":"#333333"},"wm.BusyButton":{"border":"1","borderColor":"#333333"},"wm.Checkbox":{"border":"0"},"wm.ColorPicker":{"border":"0"},"wm.Currency":{"border":"0"},"wm.Date":{"border":"0"},"wm.Number":{"border":"0"},"wm.RadioButton":{"border":"0"},"wm.Slider":{"border":"0"},"wm.LargeTextArea":{"border":"0"},"wm.Time":{"border":"0"},"wm.WidgetsJsDialog":{"containerClass":"HeaderContent","border":"1","borderColor":"#333333"},"wm.FileUploadDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.ColorPickerDialog":{"border":"1","borderColor":"#333333"},"wm.MainContentPanel":{"border":"0","borderColor":"#ffffff"},"wm.HeaderContentPanel":{"border":"1","borderColor":"#333333"},"wm.EmphasizedContentPanel":{"border":"2","borderColor":"#000000"},"wm.WidgetList":{},"wm.PopupMenuButton":{}};
wm.componentList['example.GoogleOrgChart'] = ['wm.base.widget.Composite','common.packages.example.GoogleOrgChart'];
wm.componentList['example.GoogleOrgChart'] = ['wm.base.widget.Composite','common.packages.example.GoogleOrgChart'];
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
SoldOutAzon.prototype._css = '@import "lib/wm/common/themes/coolblue/theme.css";\
body .wmeditor .EditorHelpIcon {\
width: 22px;\
height: 22px;\
background-image: url("resources/images/help3.png");\
}\
html.WMApp body .dojogrid {\
}\
/*this will set the wrapping on the dojo grid header to per words */\
body .dojoxGridCell, .wmlist-cell {\
word-wrap: normal;\
}\
/*\
html.WMApp body .dojogrid {\
overflow:auto;\
}\
html.WMApp body .dojogrid {\
white-space:normal;\
overflow:auto;\
}\
*/\
html.WMApp body .largeTextArea1 {\
overflow:hidden;\
}\
';
