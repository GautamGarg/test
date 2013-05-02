Ext.define('ValuesFinder.model.ActionStepsTable', {
    extend: 'Ext.data.Model',
	requires: [
        'ValuesFinder.util.InitSQLite'
    ],
    config: {
        fields: [
		{name:'tid',type: 'string'}, 
        {name:'area1id',type: 'string'},
        {name:'area2id',type: 'string'},
        {name:'area3id',type: 'string'},
		{name:'step1',type: 'string'},
		{name:'step2',type: 'string'},
		{name:'notes1',type: 'string'},
		{name:'step3',type: 'string'},
		{name:'step4',type: 'string'},
		{name:'notes2',type: 'string'},
		{name:'step5',type: 'string'},
		{name:'step6',type: 'string'},
		{name:'notes3',type: 'string'}
        ],
        proxy: {
		            type: 'sql',
		             database : "ValueFinder"
		        },

    }
    
});