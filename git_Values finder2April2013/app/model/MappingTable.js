Ext.define("ValuesFinder.model.MappingTable", {
    xtype:'mtmodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	{name:'mtid',type: 'string'},
        				{name:'areaid',type: 'string'},
            			{name:'valueid',type: 'string'}
        		],
        		proxy: {
		            type: 'sql',
		             database : "ValueFinder"
		        },
        
    }
});