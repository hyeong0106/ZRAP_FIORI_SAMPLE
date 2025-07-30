sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zdtv3tarheadsample',
            componentId: 'ZRAP_C_ZDTV3T_AR_HEADObjectPage',
            contextPath: '/ZRAP_C_ZDTV3T_AR_HEAD'
        },
        CustomPageDefinitions
    );
});