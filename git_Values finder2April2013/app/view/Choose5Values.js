Ext.define( 'ValuesFinder.view.Choose5Values',{
	extend: 'Ext.Panel',	
	requires: [
			'Ext.dataview.List',
			'Ext.Label','ValuesFinder.model.Task','ValuesFinder.store.Task'
			],
	id: 'choose5',
	xtype:'choose5',
	alias:'widget.choose5',
	config: {
		
		layout: 'vbox',
		items: [	
			{
				xtype: 'toptitlebar',
				title: 'Your top 5 Values Paid version'
			},
			{
				xtype: 'container',				
				flex: 1,
				docked:'top',
				items: [
			        {				
						xtype: 'label',
						html: "<div style:'padding:10px'><p>Indicate which part of your life the values are showing up. Click on each area of your life and mark each value.</p><p>This is your individualised values map.</p><p>You can email this map to yourself by clicking on SHARE.</p><p>Otherwise click NEXT</p></div>"
					}
				]
			},
			{
		            xtype:'video',
	   				width:300,
	   				height:200,
	   				style:'margin:0 auto;',
	   				align:'center',
	   				url: 'resources/video/Values_Finder_App_1 (1).mov',
	                posterUrl: 'resources/icons/video.png',
	                //style:'width:100px;'	            
		     },
			{
				xtype: 'container',
				layout: 'fit',
				flex: 3,
				items: [
					{				
						xtype: 'list',
						id: 'history5DataList',	
						//store: 'FiveValues',
						//data: ValuesFinder.app.tempHistArray,		//data provider for list							
						//itemTpl: '{text}',
						onItemDisclosure: true,
						scrollable: true,
					}
				]
			},
			
			{
				xtype: 'container',
				layout:'hbox',
				items:[
					{
						xtype:'button',
						text:'Share',
						width:100,
						docked:'left',
						style:'margin-bottom:5px;'
					},
					{
						xtype:'button',
						text:'Next',
						width:100,
						docked:'right',
						style:'margin-bottom:5px;',
						handler: function ()
    						{
    							//this.fireEvent('showlabel1Command');
								if(Ext.getCmp('iconsPanel')){        
						        	Ext.Viewport.setActiveItem('iconsPanel');
					        	}else{        
						        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.IconsPanel'));
					        	}
				        	}
					}
				]
			},
			{
				xtype: 'bottomtoolbar'
			} 
		]
	},

});
