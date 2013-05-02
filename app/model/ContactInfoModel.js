Ext.define("PhonegapPerry.model.ContactInfoModel", {
    xtype:'contactmodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	
            {
            	name:'text',
            	type: 'string'
            },
            {
            	name:'subtext',
            	type: 'string'
            }

        ],
        
        //hasMany  : {model: 'spsApp.model.iconModels', name: 'value'},
    }
});
