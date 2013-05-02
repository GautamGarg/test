Ext.define("ValuesFinder.model.User", {
    xtype:'umodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	{name:'Uid',type: 'string'},
        				{name:'isTrial',type: 'string'},
            			{name:'lastUsed',type: 'string'},
            			{name:'isComplete',type: 'string'}
        		],
        		proxy: {
		            type: 'sql',
		             database : "ValueFinder"
		        }
    }
});