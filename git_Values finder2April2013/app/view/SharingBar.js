Ext.define('ValuesFinder.view.SharingBar',{
	extend: 'Ext.TitleBar',
	xtype: 'shareIconbar',
	requires: [
		'ValuesFinder.model.Task','ValuesFinder.store.Task'
	],
	
	config: {
		title: '',
		//docked: 'top',
		items: [
        {
        	xtype:'button',
            //iconCls: 'action',
            iconMask: true,
            align: 'left',
            text:'Share'
        },
        {
        	xtype:'button',
            //iconCls: 'home',
            iconMask: true,
            align: 'right',
            text:'Next',
            handler: function ()
    						{
    							/*console.log('this is create new of your 5 under sharing');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','5');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
							  */
    							
    							//this.fireEvent('showlabel1Command');
								if(Ext.getCmp('iconBar')){        
						        	Ext.Viewport.setActiveItem('iconBar');
					        	}else{        
						        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.IconBar'));
					        	}
				        	}
        },
        ]
	}

});