Ext.define("ValuesFinder.view.InfoPanel", {
    extend: 'Ext.Panel',
    alias: 'widget.aboutpanel',
    xtype:'infoPanel',
    requires:['Ext.dataview.NestedList','ValuesFinder.store.ContactStore','ValuesFinder.model.ContactInfoModel'],
    config:{
       // title:'Information',
		iconCls:'info',
		layout:'fit',
		items:[
				{
					xtype:'titlebar',
					title:'Information',
					docked:'top'
				},
				{
    				xtype:'list',	
    				//id:'infoItems',
    				title:'Information',
    				scrollable: true,		
    				//data:PhonegapPerry.util.Config.getSlarr(),    				
					onItemDisclosure:true,
					emptyText:"EMPTY LIST",					
					itemTpl:'{text}',
					store:'cStore',
					listeners:{
			            itemtap: function(record, index){               
			            //ListDemo.detailPanel.update(record.data);
			            if(index==0)
			            {
			            	Ext.Viewport.setActiveItem('InfoAbout');
			            	//console.log(index);
			            }
			            else if(index==1)
			            {
			            	Ext.Viewport.setActiveItem('contactpanel');
			            }
			             else if(index==2)
			             {
			             	Ext.Viewport.setActiveItem('termofuse');
			             }
			            
			            }
			        }       
					
					
    	},
			{
				xtype:'bottomtoolbar'
			}
			
		]
    }
});