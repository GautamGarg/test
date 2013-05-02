Ext.define('ValuesFinder.store.FifteenValues', {
  
  extend: 'Ext.data.Store',
  
  requires: ['ValuesFinder.model.FifteenValues'],
  
  config: {
    model: 'ValuesFinder.model.FifteenValues',
    autoLoad: true,
    storeId: 'FifteenValues',
    pageSize: 1000
  }
});