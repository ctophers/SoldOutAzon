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
}