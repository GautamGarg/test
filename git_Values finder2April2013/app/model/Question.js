Ext.define("ValuesFinder.model.Question", {
    xtype:'qmodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	{name:'qid',type: 'string'},
        				{name:'areaid',type: 'string'},
            			{name:'valueid',type: 'string'}
        		],
        		proxy: {
		            type: 'sql',
		             database : "ValueFinder"
		        },
        
    }
});