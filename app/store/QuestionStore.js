Ext.define('PhonegapPerry.store.QuestionStore', {
    extend: 'Ext.data.TreeStore',    
    xtype:'qstnStore', 
   
    //requires:['Ext.tree.Panel'],  
    //defaultRootProperty: 'items',
    //root: 'Questions',
    config: {
     model: 'PhonegapPerry.model.QuestionModel',
     autoLoad: true,
     sorters: ['questions'],
    proxy:{
    		type: 'ajax',
        	url : 'data/care.json',
        	method:'get',
        	timeout :100000,
	        reader: {
	        	type: 'json',
            	rootProperty: 'items'
        	}
    }
    }
});