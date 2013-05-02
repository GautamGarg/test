Ext.define("ValuesFinder.view.TopicPanel", {
	extend: 'Ext.Panel',
    xtype:'topicsView',    
    alias: 'widget.topicsView',    
    //alias: 'widget.nestedList',
    requires:['Ext.dataview.List','ValuesFinder.model.QtextModel','ValuesFinder.store.QtextStore','ValuesFinder.util.Config','ValuesFinder.model.Task','ValuesFinder.store.Task'],
    id:'topicsView',
    config:{
    	//id:'questionPanel',
        //title:'Information',
		//iconCls:'info',
		layout:'fit',
		items:[
			{
				xtype:'toptitlebar',
				title:'Choose 15 Values',				
				items: [
						{
							xtype:'button',
							id: 'badgeButton15',
							align: 'right',							
							text:'Count',
							iconMask:true,
							ui:'plain',
							hidden: true,
							style: 'font-size:14px'
						}
				]
			},
			{
				xtype:'container',
   				style:'padding:10px;',
   				layout:'vbox',
   				docked:'top',
   				html: [
                    "Discover and learn powerful coaching questions to overcome these managerial challenges. Discover and learn powerful coaching questions to overcome these managerial challenges. Discover and learn powerful coaching questions to overcome these managerial challenges. "
                ].join(""),

			},
			{
				xtype:'list',
				itemId:'list150',
				id:'list150',
				store:'QtextStore',
				//data: ValuesFinder.util.Config.getQstnArr(),
				simpleSelect: true,				
				mode: 'MULTI',
				allowDeselect:true,
				itemTpl:'{text}',
				listeners:{
					
					//this is to increment the last page column of Task table
					
							selectionchange: function (list, records) {
								var count = Number(list.selected.items.length);
									
									if(count<1)
		                   			{		                   				
		                   				Ext.getCmp('badgeButton15').hide();
		                   			}else if(count>=1)
		                   			{
		                   				Ext.getCmp('badgeButton15').show();
		                   			}
		                   			
		                   			if(count==15)
		                   			{
					                   var names = ValuesFinder.util.Config.getTop15Arr(); 
					                    Ext.Array.each(list.selected.items, function (item) {
					                    	console.log(item);
					                    	names.push(item.data);
					                    });
					                   this.fireEvent('show15ViewCommand');
		                   			}
		                   			else if(count>15){
		                   				//Ext.Msg.alert("your values are greater than 15")
		                   			}
		                   			//console.log(Number(ValuesFinder.util.Config.getTop15Arr().length));
		                   			Ext.getCmp('badgeButton15').setBadgeText(count);
				                }
				                
				               
					 }	
			},
			
			{
				xtype:'bottomtoolbar'
			}
			
		],
		
		show15values:function()
		{
			
			console.log(this);
			this.fireEvent('show15ViewCommand');
		}

},
});