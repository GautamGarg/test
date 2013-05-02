Ext.define("PhonegapPerry.model.QuestionModel", {
    xtype:'qstnmodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	
            {
            	name:'text',type:'string'
            },

        ],
        
        //hasMany  : {model: 'spsApp.model.iconModels', name: 'value'},
    }
});