dojo.declare("Admin", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
//page defined function
//use page name, not this in formatter function
gridButton: function(rowId) {
alert(rowId);
console.log("Grid Button RowId is : " + rowId);
},
nodeDojoGridCustomFieldFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
try {
console.log("Grid RowId is : " + rowId);
return '<button onclick=this.gridButton(' + rowId + ')>Update Products</button>';
} catch (e) {
console.error('ERROR IN nodeDojoGridCustomFieldFormat: ' + e);
}
},
runDeleteSuccess: function(inSender) {
try {
this.serviceGetDeleteRunDate.update();
this.serviceGetDeleteCount.update();
//this.deleteLastRunDate.setDataSet(serviceGetDeleteRunDate.);
} catch (e) {
console.error('ERROR IN busyButton2Success: ' + e);
}
},
dojoGridCategoryUpdate: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
try {
return "<button onclick=this.gridButton(' + rowId + ')>Download Products</button>";
} catch (e) {
console.error('ERROR IN dojoGrid1CustomFieldFormat: ' + e);
}
},
categoryGridRefresh: function(inSender) {
try {
this.categoryLiveVariable.update();
} catch (e) {
console.error('ERROR IN button2Click2: ' + e);
}
},
serviceDeleteNonSoldOutBeforeUpdate: function(inSender, ioInput) {
try {
this.DeleteNonSoldOutButton.disabled = true;
} catch (e) {
console.error('ERROR IN serviceDeleteNonSoldOutBeforeUpdate: ' + e);
}
},
serviceDeleteNonSoldOutResult: function(inSender, inDeprecated) {
try {
this.serviceConfigDeleteEnd.update();
this.serviceConfigDeleteCount.update();
} catch (e) {
console.error('ERROR IN serviceDeleteNonSoldOutResult: ' + e);
}
},
DeleteNonSoldOutButtonClick: function(inSender) {
try {
this.DeleteNonSoldOutButton.disable();
} catch(e) {
console.error('ERROR IN DeleteNonSoldOutButtonClick: ' + e);
}
},
_end: 0
});

Admin.widgets = {
templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
templateUsernameVar1: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
templateUsernameVar2: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
gotoMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
serviceUpdateCategoryObject: ["wm.ServiceVariable", {"operation":"parseAmazonCategoryObject","service":"AmazonScraper"}, {"onResult":"categoryGridRefresh"}, {
input: ["wm.ServiceInput", {"type":"parseAmazonCategoryObjectInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"categoryDojoGrid.selectedItem","targetProperty":"category"}, {}]
}]
}]
}],
gotoTest: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Test\"","targetProperty":"pageName"}, {}]
}]
}]
}],
serviceConfigDeleteCount: ["wm.ServiceVariable", {"operation":"getConfigById","service":"soldoutazonDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getConfigByIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DELETE_CNT\"","targetProperty":"key"}, {}],
wire1: ["wm.Wire", {"expression":"\"DELETE_CNT\"","targetProperty":"id"}, {}]
}]
}]
}],
serviceConfigDeleteStart: ["wm.ServiceVariable", {"operation":"getConfigById","service":"soldoutazonDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getConfigByIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DELETE_DATE\"","targetProperty":"key"}, {}],
wire1: ["wm.Wire", {"expression":"\"DELETE_STR\"","targetProperty":"id"}, {}]
}]
}]
}],
serviceConfigDeleteEnd: ["wm.ServiceVariable", {"operation":"getConfigById","service":"soldoutazonDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getConfigByIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DELETE_DATE\"","targetProperty":"key"}, {}],
wire1: ["wm.Wire", {"expression":"\"DELETE_END\"","targetProperty":"id"}, {}]
}]
}]
}],
nodeLiveVariable: ["wm.LiveVariable", {"liveSource":"app.nodeLiveView1","type":"com.soldoutazondb.data.Node"}, {}],
userLiveVariable: ["wm.LiveVariable", {"liveSource":"app.userLiveView","loadingDialog":"","maxResults":1000,"type":"com.soldoutazondb.data.User"}, {}],
categoryLiveVariable: ["wm.LiveVariable", {"refireOnDbChange":true,"type":"com.soldoutazondb.data.Category"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.soldoutazondb.data.Category","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Started","sortable":true,"dataIndex":"started","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Completed","sortable":true,"dataIndex":"completed","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Prevcount","sortable":true,"dataIndex":"prevcount","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Latestcount","sortable":true,"dataIndex":"latestcount","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Productexistcount","sortable":true,"dataIndex":"productexistcount","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Error","sortable":true,"dataIndex":"error","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Search","sortable":true,"dataIndex":"search","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Inconsistent","sortable":true,"dataIndex":"inconsistent","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}
]}, {}]
}],
systemLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.systemLiveView1","type":"com.soldoutazondb.data.System"}, {}],
logoutVariable1: ["wm.LogoutVariable", {"inFlightBehavior":"executeLast"}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
serviceNodeByCategory: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getNodesByCategoryName","service":"soldoutazonDB"}, {}, {
input: ["wm.ServiceInput", {"type":"getNodesByCategoryNameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectCategory.dataValue","targetProperty":"category"}, {}]
}]
}]
}],
nodeDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":211,"height":211,"title":"node","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
nodeLiveFormPopup: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"114px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"nodeLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"borderColor":"#333333","caption":"Id","captionSize":"200px","desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"width":"100%"}, {}],
categoryEditor1: ["wm.Text", {"caption":"Category","captionSize":"200px","desktopHeight":"26px","emptyValue":"emptyString","formField":"category","height":"26px","width":"100%"}, {}],
subcategoryEditor1: ["wm.Text", {"caption":"Subcategory","captionSize":"200px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subcategory","height":"26px","width":"100%"}, {}],
urlEditor1: ["wm.Text", {"caption":"Url","captionSize":"200px","desktopHeight":"26px","emptyValue":"emptyString","formField":"url","height":"26px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
nodeSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"nodeLiveFormPopup.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"nodeLiveFormPopup.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
nodeCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"nodeDialog.hide"}]
}]
}],
categoryDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"165px","height":"165px","title":"Update Category","width":"500px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
text1: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"1","caption":"Category Name:","captionSize":"120px","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"categoryDojoGrid.selectedItem.name","targetProperty":"dataValue"}, {}]
}]
}],
text2: ["wm.Text", {"border":"1","caption":"Start Date:","captionSize":"120px","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"categoryDojoGrid.selectedItem.started","targetProperty":"dataValue"}, {}]
}]
}],
text3: ["wm.Text", {"border":"1","caption":"End Date:","captionSize":"120px","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"categoryDojoGrid.selectedItem.completed","targetProperty":"dataValue"}, {}]
}]
}],
panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
button2: ["wm.Button", {"caption":"Run Update","margin":"4","width":"100px"}, {"onclick":"serviceUpdateCategoryObject","onclick1":"categoryDialog.hide","onclick2":"categoryGridRefresh"}],
categoryCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"categoryDialog.hide"}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"15px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}]
}],
userDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","desktopHeight":185,"height":185,"title":"user","width":"500px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
userLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"114px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"userLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor3: ["wm.Number", {"caption":"Id","captionSize":"200px","desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
usernameEditor2: ["wm.Text", {"caption":"Username","captionSize":"200px","desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
passwordEditor2: ["wm.Text", {"caption":"Password","captionSize":"200px","desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","required":true,"width":"100%"}, {}],
roleEditor2: ["wm.Text", {"caption":"Role","captionSize":"200px","defaultInsert":"Member","desktopHeight":"26px","emptyValue":"emptyString","formField":"role","height":"26px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
userSaveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"userLiveForm2.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
userCancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"userDialog.hide"}]
}]
}],
layoutBox1: ["wm.Layout", {"height":"600px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
TabsTemplate: ["wm.Template", {"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"minWidth":900,"verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
SoldOutAzonPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"350px"}, {}, {
SoldOutAzon: ["wm.Picture", {"aspect":"h","height":"110%","link":"http://soldouta.com","source":"resources/images/logos/Logo3.png","width":"100%"}, {}]
}],
SecurityComponents1: ["wm.Template", {"height":"85%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"300px"}, {}, {
templateUserNameLabel1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"20px","padding":"4","showing":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Welcome, \" + ${templateUsernameVar.dataValue}","targetProperty":"caption"}, {}]
}]
}],
templateLogoutButton1: ["wm.Button", {"caption":"Log Out","margin":"4","width":"90px"}, {"onclick":"logoutVariable1"}],
button1: ["wm.Button", {"caption":"Main","margin":"4"}, {"onclick":"gotoMain"}]
}],
UpdateNotes: ["wm.LargeTextArea", {"caption":"Update Notes","dataValue":"02/05/15: Fix creating new account","displayValue":"02/05/15: Fix creating new account","readonly":true}, {}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
manageDataLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Update Categories","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fancyPanel3: ["wm.FancyPanel", {"title":"Download Products From Category"}, {}, {
categoryLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"right","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"categoryDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"categoryLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"categoryDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"categorySaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
categoryDojoGrid: ["wm.DojoGrid", {"border":"0","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"34px","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Started: \" + ${started}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Completed: \" + ${completed}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Total: \" + ${latestcount}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Previous: \" + ${prevcount}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Search: \" + ${search}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Errors: \" + ${error}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Inconsistent: \" + ${inconsistent}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Duplicate: \" + ${productexistcount}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"id","title":"Id","width":"15px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"130px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"started","title":"Started","width":"142px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"completed","title":"Completed","width":"142px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"latestcount","title":"Total","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"prevcount","title":"Previous","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"search","title":"Search","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"error","title":"Errors","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"inconsistent","title":"Inconsistent","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"productexistcount","title":"Duplicate","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false}
],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"categoryDialog.show"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"categoryLiveVariable","targetProperty":"dataSet"}, {}]
}]
}],
button3: ["wm.Button", {"caption":"Refresh","margin":"4"}, {"onclick":"categoryGridRefresh"}]
}]
}]
}]
}],
manageUsersLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Manage Users","horizontalAlign":"left","verticalAlign":"top"}, {}, {
userLivePanel1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
userLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"userLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"userDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"userSaveButton1","targetId":null,"targetProperty":"saveButton"}, {}]
}],
userDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"id","title":"Id","width":"47px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"username","title":"Username","width":"91px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"role","title":"Role","width":"88px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"209px","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Username: \" + ${username}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Role: \" + ${role}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"lastlogin","title":"Lastlogin","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"}
],"height":"100%","margin":"4","minDesktopHeight":60,"width":"471px"}, {"onCellDblClick":"userLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveVariable","targetProperty":"dataSet"}, {}]
}]
}],
userGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
userNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"userLivePanel1.popupLivePanelInsert"}],
userUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"userLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
userDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"userLiveForm2.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}],
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"System Config","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
systemLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
systemDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"freeze":false,"height":"144px","title":"System Message","width":"60%"}, {}, {
systemLiveForm1: ["wm.LiveForm", {"displayErrors":false,"fitToContentHeight":true,"height":"112px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"saveOnEnterKey":false,"verticalAlign":"top"}, {"onSuccess":"systemLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"systemLiveVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"dataOutput.id"}, {}]
}],
flagEditor1: ["wm.Checkbox", {"caption":"Display Message?","captionSize":"120px","desktopHeight":"26px","displayValue":false,"emptyValue":"false","formField":"flag","height":"26px","readonly":true,"width":"100%"}, {}],
messageEditor1: ["wm.Text", {"caption":"Message","captionSize":"120px","desktopHeight":"52px","emptyValue":"emptyString","formField":"message","height":"52px","readonly":true,"required":true,"singleLine":false,"width":"100%"}, {}],
systemLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"systemLiveForm1","lock":false,"operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton3: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"systemLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"systemLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton3: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"systemLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
updateButton3: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"systemLiveForm1EditPanel.beginDataUpdate"}]
}]
}]
}]
}]
}]
}],
manageCatagoriesLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Category Nodes","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
panel5: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selectCategory: ["wm.SelectMenu", {"allowNone":true,"caption":"Filter Category","dataField":"name","dataType":"com.soldoutazondb.data.Category","dataValue":undefined,"displayField":"name","displayValue":""}, {"onchange":"serviceNodeByCategory"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"categoryLiveVariable","targetProperty":"dataSet"}, {}]
}]
}]
}],
nodeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel6: ["wm.Panel", {"height":"31px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
nodeLiveForm2EditPanel: ["wm.EditPanel", {"desktopHeight":"33px","height":"33px","horizontalAlign":"left","layoutKind":"left-to-right","liveForm":"nodeLiveFormDetails","operationPanel":"operationPanel1","savePanel":"savePanel1","showing":false}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"nodeLiveForm2EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"nodeLiveForm2EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"nodeLiveForm2EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"nodeLiveForm2EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"nodeLiveForm2EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
nodeGridPanel: ["wm.FancyPanel", {"minDesktopHeight":180,"minHeight":"180","title":"Node"}, {}, {
nodeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"id","title":"Id","width":"28px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":false,"field":"category","title":"Category","width":"134px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":false,"field":"subcategory","title":"Subcategory","width":"150px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"lastupdate","title":"Timestamp","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Timestamp: \" + ${wm.runtimeId}.formatCell(\"lastupdate\", ${lastupdate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Total: \" + ${lastcount}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Errors: \" + ${errors}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Inconsistent: \" + ${inconsistent}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Duplicate: \" + ${duplicate}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Url: \" + ${wm.runtimeId}.formatCell(\"url\", ${url}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"lastcount","title":"Total","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"errors","title":"Errors","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"inconsistent","title":"Inconsistent","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"duplicate","title":"Duplicate","width":"60px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},
{"show":true,"field":"url","title":"Url","width":"340px","align":"left","formatFunc":"wm_link_formatter","editorProps":{"restrictValues":true},"mobileColumn":false}
],"height":"100%","margin":"4","minDesktopHeight":60,"primaryKeyFields":["id","category","lastupdate","lastcount"],"selectFirstRow":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceNodeByCategory","targetProperty":"dataSet"}, {}]
}]
}]
}],
nodeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"193px","title":"Details"}, {}, {
nodeLiveFormDetails: ["wm.LiveForm", {"captionSize":"150px","fitToContentHeight":true,"height":"161px","horizontalAlign":"right","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"nodeLiveVariable2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
categoryEditor2: ["wm.Text", {"caption":"Category","captionAlign":"left","desktopHeight":"26px","emptyValue":"emptyString","formField":"category","height":"26px","readonly":true,"width":"100%"}, {}],
urlEditor2: ["wm.Text", {"caption":"Url","captionAlign":"left","desktopHeight":"75px","emptyValue":"emptyString","formField":"url","height":"75px","padding":"5","readonly":true,"selectOnClick":true,"singleLine":false,"width":"100%"}, {}],
lastupdateEditor1: ["wm.DateTime", {"caption":"Lastupdate","captionAlign":"left","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastupdate","height":"26px","readonly":true,"width":"100%"}, {}],
nodeLiveFormDetailsEditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"nodeLiveFormDetails","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton2: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"nodeLiveFormDetailsEditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeLiveFormDetailsEditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton2: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"nodeLiveFormDetailsEditPanel.cancelEdit"}]
}],
operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton2: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"nodeLiveFormDetailsEditPanel.beginDataInsert"}],
updateButton2: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"nodeLiveFormDetailsEditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeLiveFormDetailsEditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton2: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"nodeLiveFormDetailsEditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeLiveFormDetailsEditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

Admin.prototype._cssText = '';
Admin.prototype._htmlText = '';