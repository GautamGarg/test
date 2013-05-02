Ext.define( 'ValuesFinder.view.History',{
	extend: 'Ext.navigation.View',
    xtype:'myHistoryDetails',
	alias: 'widget.myHistoryDetails' ,
    id:'myHistoryDetails',
	requires: [
			'ValuesFinder.controller.HistoryController',		
			'Ext.dataview.List',
    		'Ext.NestedList',
			'Ext.data.Store',
			'ValuesFinder.util.Config'
			],
	
	config: {
		//id: 'myHistory',
		//styleHtmlContent:true,
		fullScreen:true,
		showAnimation: 'fade',
		//scrollable:true,
		layout: 'card',
		items: [	
			{
				xtype: 'toptitlebar',
				title: 'History'
			},
			{				
				/*xtype: 'list',
				id: 'historyDateList',	
				data: ValuesFinder.app.tempHistArray,		//data provider for list							
				itemTpl: '{histDate}',
				onItemDisclosure: true,
				scrollable: true*/
				xtype:'list',
				id:'list1',
				itemId:'list1',
				store:'Task',
				simpleSelect: true,	
				emptyText:"EMPTY LIST",			
				//mode: 'MULTI',
				allowDeselect:true,
				itemTpl:'<div style="history">{tid} {createdate} {iscompleted}</div>',
				listeners:{
					selectionchange: function (list, records) {
						//console.log('this is final time inside listener');
						//var count = Number(list.selected.tid);
						//console.log(list.selected.items);
						
				                },
				                itemtap: function(dv, ix, e, item) {
				                	console.log('itemtap');
				                	//console.log(dv);
				                	//console.log(ix);
				                	/*console.log(item.data.tid);
				                	console.log(item.data.area1id);
				                	console.log(item.data.area2id);
				                	console.log(item.data.area3id);
				                	console.log(item.data.step1);
				                	console.log(item.data.step2);
				                	console.log(item.data.step3);
				                	console.log(item.data.step4);
				                	console.log(item.data.step5);
				                	console.log(item.data.step6);
				                	console.log(item.data.notes1);
				                	console.log(item.data.notes2);
				                	console.log(item.data.notes3);*/
				                	ValuesFinder.util.Config.setHistoryTaskid(item.data.tid);
				                	//console.log('this is the get history '+ValuesFinder.util.Config.getHistoryTaskid());
				                	//console.log(e);
				                	//Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.HistoryRecord'));
				                	
            // Clear the selection soon
            //setTimeout(function(){dv.deselect(ix);},100);
        }
				}
				
			},
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
