Ext.define("ValuesFinder.model.FifteenValues", {
    xtype:'FifteenValues',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	
            			{name:'tid',type: 'string'},
        				{name:'v1',type: 'string'},
            			{name:'v2',type: 'string'},
            			{name:'v3',type: 'string'},
        				{name:'v4',type: 'string'},
            			{name:'v5',type: 'string'},
        				{name:'v6',type: 'string'},
            			{name:'v7',type: 'string'},
            			{name:'v8',type: 'string'},
        				{name:'v9',type: 'string'},
            			{name:'v10',type: 'string'},
        				{name:'v11',type: 'string'},
            			{name:'v12',type: 'string'},
            			{name:'v13',type: 'string'},
        				{name:'v14',type: 'string'},
            			{name:'v15',type: 'string'}
        		],
        		proxy: {
		            type: 'sql',
		             database : "ValueFinder"
		        },
        
    }
});