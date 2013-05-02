Ext.define("ValuesFinder.model.FiveValues", {
    xtype:'fivevalmodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	{name:'tid',type: 'string'},
        				{name:'v1',type: 'string'},
            			{name:'v2',type: 'string'},
            			{name:'v3',type: 'string'},
        				{name:'v4',type: 'string'},
            			{name:'v5',type: 'string'}
        		],
        		proxy: {
		            type: 'sql',
		             database : "ValueFinder"
		        },
        
    }
});