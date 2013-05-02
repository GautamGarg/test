Ext.define("PhonegapPerry.view.InfoPanel", {
    extend: 'Ext.Panel',
    
    xtype:'infoPanel',
    requires:['Ext.dataview.List','PhonegapPerry.store.ContactStore','PhonegapPerry.model.ContactInfoModel'],
    config:{
        
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
					onItemDisclosure:false,
					emptyText:"EMPTY LIST",					
					itemTpl:'{text}',
					store:'cStore',
					listeners:{
			            itemtap: function(record, index){               
			            //ListDemo.detailPanel.update(record.data);
			            if(index==0)
			            {
			            	Ext.Viewport.setActiveItem('aboutpanel');
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
				/*{
				xtype:'nestedlist',
				title:'Information',
				store:'ContactStore',
				displayField:'text',
				onItemDisclosure:'true',
				useTitleAsBackText: false,
				backText: 'Back',
				
				detailCard:{
					
				xtype:'container',
				style:'padding:10px',
   				layout:'fit',
   				html: [
                    "lorem inspum for some text by client and lorem inspum for some text by client.lorem inspum for some text by client",
                    "lorem inspum for some text by client ",
                    "lorem inspum for some text by client ",
                    "lorem inspum for some text by client ",
                    "lorem inspum for some text by client"
                ].join("")
			
				}
			},*/
			{
				xtype:'bottomtoolbar'
			}
			
		]
    }
});