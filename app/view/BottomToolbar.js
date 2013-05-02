Ext.define("PhonegapPerry.view.BottomToolbar", {
	extend: 'Ext.Toolbar',
	xtype: 'bottomtoolbar',
	//alias: 'widget.bottomtoolbar',
	config: {
		
		//style: 'background:#66CDAA',
		layout: {
			pack: 'center',
			//type:'fit'
		},
		docked: 'bottom',
	
			items: [
				{
					xtype: 'button',
					//styleHtmlContent:true,
					width: 50,					
					cls: 'home_btn',
					iconMask: 'true',
					iconCls: 'home',    				
					itemId: 'HomeButton',
					text: 'Home',
					align: 'center'
					
        		},				
				{
					xtype: 'button',
					//styleHtmlContent:true,
					width: 60,
					iconMask: 'true',
					iconCls: 'bookmarks' ,
    				cls: 'history_btn',
					//itemId: 'aboutButton',
					text: 'Shortlists',
					align: 'center',
					itemId:'ShortlistQuestion',
		   			//id:'ShortlistQuestion'
        		},		
				{
					xtype: 'button',
					//styleHtmlContent:true,
					width: 50,
					iconMask: 'true',
					iconCls: 'info' ,
					cls: 'info_btn',
					itemId: 'infoButton' , 
					text: 'Info',
					align: 'center'
					//textAlign: 'center',
					//iconAlign:'center',
					//padding:0  					    				
				}
			],
			listeners: [
    		
				{
			        delegate: "#HomeButton",
			        event: "tap",
			        fn: "onHomeButtonTap"
				},
				{
			        delegate: "#ShortlistQuestion",
			        event: "tap",
			        fn: "onaboutButtonTap",
			        autoLoad: true,
				},
				{
			        delegate: "#infoButton",
			        event: "tap",
			        fn: "oninfoButtonTap"
				}
		    ]     		
		
	},
	onHomeButtonTap: function () {
        console.log("onHomeButtonTap");
		if(Ext.getCmp('homepanel')){        
        	Ext.Viewport.setActiveItem('homepanel');
        }else{        
        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.HomePanel'));
        }
	},
	onaboutButtonTap: function () {
        console.log("onaboutButtonTap");
        //Ext.Msg.alert("This section is under progress!");
        if(Ext.getCmp('shortlistpanel')){        
			        	Ext.Viewport.setActiveItem('shortlistpanel');
			        }else{        
			        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.MyShortlists'));
			        }
	},
	oninfoButtonTap: function () {
		
        console.log("oninfoButtonTap");
		if(Ext.getCmp('infoPanel')){        
        	Ext.Viewport.setActiveItem('infoPanel');
        }else{        
        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.InfoPanel'));
        }
	}
});