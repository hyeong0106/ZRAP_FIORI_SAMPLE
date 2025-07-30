sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zdtv3tarheadsample/test/integration/FirstJourney',
		'zdtv3tarheadsample/test/integration/pages/ZRAP_C_ZDTV3T_AR_HEADList',
		'zdtv3tarheadsample/test/integration/pages/ZRAP_C_ZDTV3T_AR_HEADObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZRAP_C_ZDTV3T_AR_HEADList, ZRAP_C_ZDTV3T_AR_HEADObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zdtv3tarheadsample') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZRAP_C_ZDTV3T_AR_HEADList: ZRAP_C_ZDTV3T_AR_HEADList,
					onTheZRAP_C_ZDTV3T_AR_HEADObjectPage: ZRAP_C_ZDTV3T_AR_HEADObjectPage
                }
            },
            opaJourney.run
        );
    }
);