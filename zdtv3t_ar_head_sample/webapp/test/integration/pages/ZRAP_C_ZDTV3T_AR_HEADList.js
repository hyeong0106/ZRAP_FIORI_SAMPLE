sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zdtv3tarheadsample',
            componentId: 'ZRAP_C_ZDTV3T_AR_HEADList',
            contextPath: '/ZRAP_C_ZDTV3T_AR_HEAD'
        },
        CustomPageDefinitions
    );
});