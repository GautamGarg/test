Ext.define("ValuesFinder.model.QtextModel", {
    xtype:'qtextModel',
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	
            {
            	name:'text',
            	type: 'string'
            },

        ],
        
        //hasMany  : {model: 'spsApp.model.iconModels', name: 'value'},
    }
});