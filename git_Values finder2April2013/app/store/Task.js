Ext.define('ValuesFinder.store.Task', {
  
  extend: 'Ext.data.Store',
  
  requires: ['ValuesFinder.model.Task'],
  
  config: {
    model: 'ValuesFinder.model.Task',
    autoLoad: true,
    storeId: 'Task',
    pageSize: 1000
  }
});