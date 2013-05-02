Ext.define('ValuesFinder.store.FiveValues', {
  
  extend: 'Ext.data.Store',
  
  requires: ['ValuesFinder.model.FiveValues'],
  
  config: {
    model: 'ValuesFinder.model.FiveValues',
    autoLoad: true,
    storeId: 'FiveValues',
    pageSize: 1000
  }
});