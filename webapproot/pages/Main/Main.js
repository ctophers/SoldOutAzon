dojo.declare("Main", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        dojo.subscribe("session-expiration", this, "sessionExpired");
        dojo.subscribe("session-expiration-servicecall", this, "sessionExpired");
        try {

        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    sessionExpired: function() {
        alert("Sorry, your session has expired. Please refresh the browser and log-in again.");
        //this.templateLogoutVar.update();
    },
    productDojoGridAmazonLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        
        try {
            return ("<a href='http://www.amazon.com/dp/" + rowObj.asin + "/?tag=jordanmalik-20' target='_blank'>" + rowObj.asin + "</a>");

        } catch (e) {
            console.error('ERROR IN productDojoGridCustomFieldFormat: ' + e);
        }
    },
    productDojoGridAmazonDetailLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        
        try {
            return ("<a href='" + rowObj.detailPageUrl + "' target='_blank'>" + rowObj.asin + "</a>");
            //return ("<a href='http://www.amazon.com/dp/" + rowObj.asin + "/?tag=jordanmalik-20' target='_blank'>" + rowObj.asin + "</a>");

        } catch (e) {
            console.error('ERROR IN productDojoGridCustomFieldFormat: ' + e);
        }
    },
    productDojoGridPriceLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            return ("<a href='http://camelcamelcamel.com/product/" + rowObj.asin + "' target='_blank'>Price History</a>");

        } catch (e) {
            console.error('ERROR IN productDojoGridCustomFieldFormat: ' + e);
        }
    },
    productDojoGridSearchAmazonLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias=aps&field-keywords=" + escape(rowObj.name);
            return ("<a href='" + link + "' target='_blank'>All Amazon</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridCustomFieldFormat: ' + e);
        }
    },

    productDojoGridSearchOthersLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.thefind.com/search?query=" + escape(rowObj.name);
            return ("<a href='" + link + "' target='_blank'>The Find.com</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridCustomFieldFormat: ' + e);
        }
    },
    productDojoGridSearchCraigslistLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            //var link = "http://www.allofcraigs.com/p/results.html?q=" + escape(rowObj.name);
            var link = "http://www.adhuntr.com/2012/05/all.html?cx=partner-pub-9413604915893153:o8xsd8d7h7s&cof=FORID:11&ie=UTF-8&newwindow=1&q=" + escape(rowObj.name) + "&as_qdr=a&safe=active&sa=Search#449";

            return ("<a href='" + link + "' target='_blank'>Craigslist</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridCustomFieldFormat: ' + e);
        }
    },
    productDojoGridSearchEbayLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.ebay.com/sch/i.html?_nkw=" + escape(rowObj.name);

            return ("<a href='" + link + "' target='_blank'>eBay</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridSearchEbayLinkFormat: ' + e);
        }
    },
    productDojoGridSearchGoogleLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.google.com/search?hl=en&t=shop&q="+escape(rowObj.name);
            return ("<a href='" + link + "' target='_blank'>Google Products</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridSearchGoogleLinkFormat: ' + e);
        }
    },
    productDojoGridSearchShopzillaLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.shopzilla.com/"+escape(rowObj.name) + "/search";

            return ("<a href='" + link + "' target='_blank'>Shopzilla</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridSearchShopzillaLinkFormat: ' + e);
        }
    },    
    productDojoGridSearchNextagLinkFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.nextag.com/"+escape(rowObj.name) + "/products-html";

            return ("<a href='" + link + "' target='_blank'>Nextag</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridSearchShopzillaLinkFormat: ' + e);
        }
    },    
    productDojoGridGoogleShopping: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        try {
            var link = "http://www.google.com/search?output=search&tbm=shop&q="+escape(rowObj.name);

            return ("<a href='" + link + "' target='_blank'>Google Shopping</a>");
        } catch (e) {
            console.error('ERROR IN productDojoGridSearchShopzillaLinkFormat: ' + e);
        }
    },    
    downloadButtonClick: function(inSender) {
        try {
            this.productDojoGrid.showCSVData();

        } catch (e) {
            console.error('ERROR IN downloadButtonClick: ' + e);
        }
    },
    faqButtonClick: function(inSender) {
        try {

            window.open('http://soldouta.com/FAQ', 'SoldOutA FAQ', 'width=800,height=600,scrollbars=1');

        } catch (e) {
            console.error('ERROR IN faqButtonClick: ' + e);
        }
    },
    contactButtonClick: function(inSender) {
        try {

            window.open('mailto:soldouta@gmail.com');

        } catch (e) {
            console.error('ERROR IN contactButtonClick: ' + e);
        }
    },

    videosButtonClick: function(inSender) {
        try {

            window.open('http://www.SoldOutA.com/21389kf1/videos', 'SoldOutA Videos', 'width=800,height=600,scrollbars=1');

        } catch (e) {
            console.error('ERROR IN button1Click: ' + e);
        }
    },
    keyButtonClick: function(inSender) {
        try {

            window.open('http://www.SoldOutA.com/key.html ', 'SoldOutA Key', 'width=800,height=600,scrollbars=1');

        } catch (e) {
            console.error('ERROR IN button1Click: ' + e);
        }
    },
    SoldOutAzonClick: function(inSender) {
        try {
            window.open('http://www.SoldOutA.com', 'SoldOutA', 'width=800,height=600,scrollbars=1');
        } catch (e) {
            console.error('ERROR IN SoldOutAClick: ' + e);
        }
    },
    productAmazonLink: function(inSender) {
        var asin = this.dojoGrid1.selectedItem.getData().asin;

        try {
            var link = "http://www.amazon.com/dp/" + asin + "/?tag=jordanmalik-20";
            window.open(link);
            //var link = "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias=aps&field-keywords=" + escape(product);
            //alert(link);
            //return ("<a href='" + link + "' target='_blank'>Amazon Search</a>");
        } catch (e) {
            console.error('ERROR IN productAmazonLink: ' + e);
        }
    },
    dojoGrid1SelectionChange: function(inSender) {
        try {
            var product = this.dojoGrid1.selectedItem.getData();
            var craiglistTitle = 'Wanted: ' + product.name + ', will pay $';
            var craiglistText = "\nI am looking to buy a used or new  " + product.name + ".  I need one that's 100% complete. \n\nI can pay you CASH ON THE SPOT. \n\nIf you have one to sell to me, please email me by clicking the email address above. \n\nThank you for reading my ad!";

            this.craiglistTitle.setValue("dataValue", craiglistTitle);
            this.craiglistText.setValue("dataValue", craiglistText);
            this.serviceAmazonImage.input.setValue("asin", product.asin);
            this.serviceAmazonImage.update();

        } catch (e) {
            console.error('ERROR IN dojoGrid1SelectionChange: ' + e);
        }
    },
    dojoGrid2SelectionChange: function(inSender) {
        try {
            var product = this.dojoGrid2.selectedItem.getData();
            var craiglistTitle = 'Wanted: ' + product.name + ', will pay $';
            var craiglistText = "\nI am looking to buy a used or new " + product.name + ". I need one that's 100% complete. \n\nI can pay you CASH ON THE SPOT. \n\nIf you have one to sell to me, please email me by clicking the email address above. \n\nThank you for reading my ad!";

            this.craiglistTitle.setValue("dataValue", craiglistTitle);
            this.craiglistText.setValue("dataValue", craiglistText);
            this.serviceAmazonImage.input.setValue("asin", product.asin);
            this.serviceAmazonImage.update();


        } catch (e) {
            console.error('ERROR IN dojoGrid2SelectionChange: ' + e);
        }
    },
    NextClick: function(inSender) {
        try {
            var svar = this.app.serviceProducts;
            var count = svar.getPageCount();
            var currentPage = svar.getPage();
            var length = svar.getData().length;

            svar.firstRow = svar.firstRow * 1 + svar.maxResults * 1;
            svar.update();

        } catch (e) {
            console.error('ERROR IN NextClick: ' + e);
        }
    },
    PrevClick: function(inSender) {
        try {
            var svar = this.app.serviceProducts;
            if (svar.firstRow * 1 - svar.maxResults * 1 >= 0) {
                svar.firstRow = svar.firstRow * 1 - svar.maxResults * 1;
                svar.update();
            }


        } catch (e) {
            console.error('ERROR IN PrevClick: ' + e);
        }
    },
    FirstClick: function(inSender) {
        try {
            this.app.serviceProducts.firstRow = 0;
            this.app.serviceProducts.update();
        } catch (e) {
            console.error('ERROR IN FirstClick: ' + e);
        }
    },
    LastClick: function(inSender) {
        try {
            var svar = this.app.serviceProducts;
            var count = this.searchCountVar.getValue("dataValue");
            var lastPageCount = (count * 1) % (svar.maxResults *1 );
            svar.firstRow = count * 1 - (lastPageCount);
            svar.update();


        } catch (e) {
            console.error('ERROR IN LastClick: ' + e);
        }
    },
    SearchProducts: function(inSender) {
        try {

            if (this.filterCategory.displayValue === '') {
                alert('Please select a Category to filter.');
            } else {

                var svar = this.app.serviceProducts;
                if (this.filterHighRank.displayValue !== '') {
                    var rank = this.filterHighRank.getDataValue();
                    var rankDigit = rank.replace(',', '');
                    if (parseInt(rankDigit, 10) > 0) {
                        svar.input.data.rank = rankDigit;
                        this.app.serviceGetProductsCount.data.rank = rankDigit;
                    } else {
                        svar.input.data.rank = '';
                        this.app.serviceGetProductsCount.data.rank = '';
                    }
                }
                svar.firstRow = 0;
                svar.update();
                this.app.serviceGetProductsCount.update();
            }



        } catch (e) {
            console.error('ERROR IN SearchProducts: ' + e);
        }
    },
    UpdatePasswordClick: function(inSender) {
        try {
            if (this.newPassword.getDataValue().length < 6) {
                alert('Please input a minimum of 6 digit characters.');
            } else if (this.newPassword.getDataValue() != this.retypePassword.getDataValue()) {
                alert('Your password input does not match.');
            } else {
                this.app.serviceUpdatePassword.input.data.password = this.newPassword.getDataValue();
                this.app.serviceUpdatePassword.input.data.id = app.userIdVar.data.dataValue;
                this.app.serviceUpdatePassword.update();
                alert('Your password has been changed. Please login again.');
                this.templateLogoutVar.update();
            }

        } catch (e) {
            console.error('ERROR IN UpdatePasswordClick: ' + e);
        }
    },
    UpdateUsernameClick: function(inSender) {
        try {
            if (this.username.getDataValue().length < 6) {
                alert('Please input a minimum of 6 digit characters.');
            } else {
                this.app.serviceUpdateUsername.input.data.username = this.username.getDataValue();
                this.app.serviceUpdateUsername.input.data.id = app.userIdVar.data.dataValue;
                this.app.serviceUpdateUsername.update();
                alert('Your username has been changed. Please login again.');
                this.templateLogoutVar.update();
            }


        } catch (e) {
            console.error('ERROR IN UpdateUsernameClick: ' + e);
        }
    },
    searchProductNameEnterKeyPress: function(inSender) {
        try {
            this.serviceAmazonItemSearch.input.data.page = 1 * 1;
            this.serviceAmazonItemSearch.update();
        } catch (e) {
            console.error('ERROR IN searchProductNameEnterKeyPress: ' + e);
        }
    },
    PrevWSClick: function(inSender) {
        try {
            var currPage = this.serviceAmazonItemSearch.input.data.page * 1;
            this.serviceAmazonItemSearch.input.data.page = currPage * 1 - 1;
            this.serviceAmazonItemSearch.update();
        } catch (e) {
            console.error('ERROR IN PrevWSClick: ' + e);
        }
    },
    NextWSClick: function(inSender) {
        try {
            var currPage = this.serviceAmazonItemSearch.input.data.page;
            this.serviceAmazonItemSearch.input.data.page = currPage * 1 + 1;
            this.serviceAmazonItemSearch.update();
        } catch (e) {
            console.error('ERROR IN NextWSClick: ' + e);
        }
    },

    FirstWSClick: function(inSender) {
      try {
            this.serviceAmazonItemSearch.input.data.page = 1;
            this.serviceAmazonItemSearch.update();

      } catch(e) {
          console.error('ERROR IN FirstWSClick: ' + e); 
      } 
  },
  LastWSClick: function(inSender) {
      try {
        var currPage = this.serviceAmazonItemSearch.input.data.page;
        this.serviceAmazonItemSearch.input.data.page = 5;
        this.serviceAmazonItemSearch.update();
      } catch(e) {
          console.error('ERROR IN LastWSClick: ' + e); 
      } 
  },
 
    loginVariable1Success: function(inSender, inDeprecated) {
    var currentTime = new Date();
    console.log('loginVariableSuccess ' + currentTime);
      this.updateTimestamp.input.setValue("id", 2);
      this.updateTimestamp.input.setValue("timestamp", currentTime);
      this.hqlServiceVar.update();
      
        
    },
    _end: 0
});