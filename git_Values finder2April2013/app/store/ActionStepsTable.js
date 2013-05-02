Ext.define('ValuesFinder.store.ActionStepsTable', {
  
  extend: 'Ext.data.Store',
  
  requires: ['ValuesFinder.model.ActionStepsTable'],
  
  config: {
    model: 'ValuesFinder.model.ActionStepsTable',
    autoLoad: true,
    storeId: 'ActionTable',
    pageSize: 1000
  }
});