Ext.define("ValuesFinder.model.PrimaryValue", {
    xtype:'pvmodel',
    extend: 'Ext.data.Model',
    config: {
        fields: [     	{name:'pvid',type: 'string'},
        				{name:'value',type: 'string'}
        		],
        		
    }
});