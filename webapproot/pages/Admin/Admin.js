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