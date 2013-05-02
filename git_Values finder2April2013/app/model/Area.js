Ext.define("ValuesFinder.model.Area", {
    xtype:'amodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	{name:'aid',type: 'string'},
        				{name:'value',type: 'string'},
            			{name:'symbol',type: 'string'}
        		],
        		proxy: {
		            type: 'rest',
		            url : 'data/users',
		            reader: {
		                type: 'json',
		                rootProperty: 'users'
		            }
		        },
        
    }
});