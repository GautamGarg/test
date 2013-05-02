Ext.define( 'ValuesFinder.view.HistoryRecord',{
	extend: 'Ext.navigation.View',	
	alias: 'widget.historyRecord' ,
		id: 'historyRecord',
		xtype:'historyRecord',
	requires: [
			'ValuesFinder.controller.HistoryController',		
			'Ext.dataview.List',
			'Ext.data.Store','ValuesFinder.util.Config'
			],
	
	config: {
		//styleHtmlContent:true,
		showAnimation: 'fade',
		layout: 'card',
		height:'100%',
		scrollable:true,
		items: [	
		
			{
				xtype: 'toptitlebar',
				title: 'Task Record'
			},
			{
				xtype: 'toptitlebar',
				title: 'Health'
			},
				//{
				/*xtype: 'container',
				layout: 'fit',
				docked:'top',
				flex: 1,
				items: [*/
					
					
					/*{				
						xtype: 'list',
						//id: 'historyDateList',	
						store:'QuestionHealth',							
						itemTpl: '{text}',
						allowDeselect:true,
						scrollable: true,
						items:[
							{
						xtype:'label',
						docked: 'bottom',
						itemId:'healthHtml',
						html:''
					}
						]						
					},
					/*
				]
			},*/
			
			{
				xtype: 'bottomtoolbar'
			} 
		]
	},
	initialize: function()
	{
		console.log("init");
		this.callParent(arguments);	
	}
});
