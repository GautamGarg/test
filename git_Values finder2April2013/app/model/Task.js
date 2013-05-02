Ext.define('ValuesFinder.model.Task', {
    extend: 'Ext.data.Model',
	requires: [
        'ValuesFinder.util.InitSQLite'
    ],
    config: {
        fields: [
        {name:'tid',type: 'string'},
		{name:'createdate',type: 'string'},
		{name:'lastupdateddate',type: 'string'},
		{name:'iscompleted',type: 'string'},
		{name:'lastpage',type: 'string'}
        ],
        proxy: {
		            type: 'sql',
		            database : "ValueFinder"
		        },

    }
    
});