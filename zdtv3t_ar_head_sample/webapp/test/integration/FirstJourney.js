sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZRAP_C_ZDTV3T_AR_HEADList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZRAP_C_ZDTV3T_AR_HEADList.onFilterBar().iExecuteSearch();
                
                Then.onTheZRAP_C_ZDTV3T_AR_HEADList.onTable().iCheckRows();

                When.onTheZRAP_C_ZDTV3T_AR_HEADList.onTable().iPressRow(0);
                Then.onTheZRAP_C_ZDTV3T_AR_HEADObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});