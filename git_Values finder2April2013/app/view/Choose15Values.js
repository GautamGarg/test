Ext.define( 'ValuesFinder.view.Choose15Values',{
	extend: 'Ext.Panel',	
	requires: [
			'Ext.dataview.List',
			'Ext.Label',
			'ValuesFinder.util.Config','ValuesFinder.model.Task','ValuesFinder.store.Task', 'ValuesFinder.controller.HistoryController'
			],
	xtype:'choose15',
	id:'choose15',
	alias:'widget.choose15',
	config: {
		//id: 'choose15',
		layout: 'vbox',
		items: [	
			{
				xtype: 'toptitlebar',
				title: 'Choose 5 Values',
				items: [
						{
							xtype:'button',
							id: 'badgeButton5',
							align: 'right',							
							text:'Count',
							iconMask:true,
							ui:'plain',
							style: 'font-size:14px'
						}
				]
			},
			{
				xtype: 'container',				
				flex: 1,
				items: [
			        {				
						xtype: 'label',
						html: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					}
				]
			},
			{
				xtype: 'container',
				layout: 'fit',
				flex: 3,
				items: [
					{				
						xtype: 'list',
						id: 'historyDateList',	
						//data: ValuesFinder.util.Config.getTop15Arr(),		//data provider for list							
						itemTpl: '{text}',
						mode: 'MULTI',
						onItemDisclosure: true,
						scrollable: true,	
						listeners:{
							selectionchange: function (list, records) {
								console.log(Number(ValuesFinder.util.Config.getTop5Arr().length));								
								var count = Number(list.selected.items.length);
									
									if(count<1)
		                   			{		                   				
		                   				Ext.getCmp('badgeButton5').hide();
		                   			}else if(count>=1)
		                   			{
		                   				Ext.getCmp('badgeButton5').show();
		                   			}
		                   			
		                   			if(count==5)
		                   			{
					                   var names = ValuesFinder.util.Config.getTop5Arr(); 
					                    Ext.Array.each(list.selected.items, function (item) {
					                    	console.log(item);
					                    	names.push(item.data);
					                    });
					                   this.fireEvent('show5ViewCommand');
		                   			}
		                   			else if(count>5){
		                   				//Ext.Msg.alert("your values are greater than 5")
		                   			}
									Ext.getCmp('badgeButton5').setBadgeText(count);
		                   			// each()
				                    //Ext.Msg.alert('You selected ' + records.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
				                },
				                itemtap: function(dv, ix, item, e) {
				                	
            // Clear the selection soon
        }
				               
					 }					
					}
				]
			},
			{
				xtype: 'bottomtoolbar'
			} 
		]
	}/*,
	initialize: function()
	{
		console.log("Choose15Values");
		this.callParent(arguments);	
	}*/
});
