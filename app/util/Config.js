Ext.define('PhonegapPerry.util.Config', {
    singleton : true,


    config : {
        slarr : []
    },


    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});