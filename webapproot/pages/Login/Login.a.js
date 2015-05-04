/*
*  Copyright (C) 2010-2011 VMware, Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*     http://www.apache.org/licenses/LICENSE-2.0
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
dojo.declare("Login", wm.Page, {
"preferredDevice": "desktop",
start: function() {
this.connect(this.domNode, "keydown", this, "keydown");
this.usernameInput.setDataValue(dojo.cookie("user") || "");
this.usernameInput.focus();
if (this.wmTitle)
this.wmTitle.setCaption(app.name || app.declaredClass);
},
keydown: function(e) {
if (e.keyCode == dojo.keys.ENTER) {
this.loginButton.domNode.focus();
}
},
loginButtonClick: function(inSender) {
dojo.cookie("user", this.usernameInput.getDataValue(), {expires: 365});
this.loginErrorMsg.setCaption("");
wm.login(
[this.usernameInput.getDataValue(), this.passwordInput.getDataValue()],
null, dojo.hitch(this, "loginFailed"));
},
loginFailed: function(inResponse) {
this.loginErrorMsg.setCaption("Invalid username or password.");
this.usernameInput.focus();
},
_end: 0
});

Login.widgets = {
layoutBox: ["wm.Layout", {}, {}, {
loginMainPanel: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"center","padding":"10","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
panel1: ["wm.Panel", {"height":"170px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
SoldOutAzon: ["wm.Picture", {"aspect":"v","height":"90%","link":"http://soldouta.com","source":"resources/images/logos/Logo3.png","width":"475px"}, {}]
}],
loginInputPanel: ["wm.EmphasizedContentPanel", {"desktopHeight":"180px","enableTouchHeight":true,"height":"180px","horizontalAlign":"center","mobileHeight":"144px","padding":"10","styles":{},"verticalAlign":"center","width":"380px"}, {}, {
usernameInput: ["wm.Text", {"caption":"Username","captionSize":"95px","dataValue":undefined,"displayValue":"","width":"80%"}, {}],
passwordInput: ["wm.Text", {"caption":"Password","captionSize":"95px","dataValue":undefined,"displayValue":"","password":true,"width":"80%"}, {}],
loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,95","padding":"4","styles":{},"width":"82%"}, {}, {
loginButton: ["wm.Button", {"caption":"Login","desktopHeight":"27px","height":"27px","iconHeight":"14px","iconMargin":"0 0 0 0","imageIndex":0,"margin":"4","mobileHeight":"30%","styles":{},"width":"100%"}, {"onclick":"loginButtonClick"}]
}],
loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
forgotPassword: ["wm.Label", {"align":"center","caption":"Forgot your password? Click here.","link":"https://goo.gl/qYfFDZ","padding":"4","styles":{},"width":"100%"}, {}]
}]
}]
}]
};

Login.prototype._cssText = '.Login .Login-loginErrorMsg {\
font-size: 12px; color: red\
}\
';
Login.prototype._htmlText = '<div id="sample">Sample Markup</div>\
';