Ext.define('ValuesFinder.util.InitSQLite', {
  singleton : true,

  requires: [
    'Ext.SqliteConnection',
    'Ext.data.proxy.SqliteProxy',
    'Ext.data.reader.Array'
  ],
  
  initDb: function() {
    Ext.ns('DbConnection');
    
    this.DbConnection = Ext.create('Ext.SqliteConnection', {
      dbName: 'ValuesFinder',
      dbDescription: 'Used to demo Sencha Touch 2 sqlite proxy'
    });
  },
  
  getConnection: function() {
    if(!Ext.isDefined(this.DbConnection)) this.initDb();
    return this.DbConnection;
  }
});
