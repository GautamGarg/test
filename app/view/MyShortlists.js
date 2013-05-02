	Ext.define( 'PhonegapPerry.view.MyShortlists',{
	extend: 'Ext.navigation.View',
    xtype:'shortlistpanel',
    alias: 'widget.shortlistpanel',
    id:'shortlistpanel',
    requires:[
    			'Ext.dataview.List',
    			'PhonegapPerry.controller.MainControler',
    			'Ext.NestedList',
    			'PhonegapPerry.controller.MyShortlists2Controller'
    			],
    config:{
    			
    			showAnimation: 'fade',
				layout: 'card',
    			items:[
    			{
    				xtype:'toptitlebar',
    				title:'My Shortlists',
    				ui:'light',
    				/*items:[
						{
		    				xtype:'button',
		    				id:'backToTopic',
		    				itemId:'backToTopic',
		    				text:'Back',
		    				ui:'back'
    					}
    				]*/
    			},    			
    			{
    				xtype:'list',	
    				id:'categoryNames',
    				name:'CN',
    				scrollable: true,		
    				//data:PhonegapPerry.util.Config.getSlarr(),    				
					onItemDisclosure:false,
					emptyText:"EMPTY LIST",					
					itemTpl:'{catName}',
					store:'QStore'       
					
					
    			}/*,
    			{
    				xtype:'list',	
    				id:'categoryNameLeaf',
    				scrollable: true,	
					onItemDisclosure:false,					
					itemTpl:'{text}'				
					
    			}*/,
    			{
    				xtype:'bottomtoolbar'
    			}
    			],
    			listeners: [
    				/*
   					{
				        delegate: "#backToTopic",
				        event: "tap",
				        fn: "onBackToTopic"
					},
					{
				        delegate: "#categoryNames",
				        event: "itemTap",
				        fn: "onTemp"
					}*/
   				],
				
			},			
			initialize: function(){
				console.log("init");
				this.callParent(arguments); 
				
				
			},
			/*onBackToTopic: function () {			                
		        Ext.Viewport.setActiveItem('topicpanel');	
		        
		        if(Ext.getCmp('shortlistpanel')){        
		        	console.log("IM here");
	        		//Ext.Viewport.setActiveItem('shortlistpanel');
		        }else{    
		        	console.log("IM NOT");    
		        	//Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.MyShortlists'));
		        }
		        		        
			},*/
			onTemp: function () {
		        console.log("IM here");
			}
    
})