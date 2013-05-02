Ext.define('PhonegapPerry.store.QStore', {
	extend: 'Ext.data.Store',
    type:'tree',
    config: {
     model: 'PhonegapPerry.model.QModel',
     autoLoad: true
     }
            
});