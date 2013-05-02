Ext.define("ValuesFinder.view.BottomToolbar", {
	extend: 'Ext.Toolbar',
	xtype: 'bottomtoolbar',
	requires: [
		
	],
	
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
					cls: 'home_btn',
					iconMask: 'true',
					iconCls: 'home',    				
					itemId: 'HomeButton',
					text: 'Home',
					width:40
        		},				
				{
					xtype: 'button',
					iconMask: 'true',
					iconCls: 'bookmarks' ,
    				cls: 'history_btn',
					itemId: 'aboutButton',
					text: 'History',
					width:45
        		},		
				{
					xtype: 'button',
					iconMask: 'true',
					iconCls: 'info' ,
					cls: 'info_btn',
					itemId: 'infoButton' , 
					text: 'Info' ,
					width:40
					    				
				}
			],
			listeners: [
    		
				{
			        delegate: "#HomeButton",
			        event: "tap",
			        fn: "onHomeButtonTap",
			        //tap:function(){this.ui="red"}
				},
				{
			        delegate: "#aboutButton",
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
        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.HomePanel'));

        	
        }
	},
	onaboutButtonTap: function () {
        console.log("onaboutButtonTap");
        //Ext.Msg.alert("This section is under progress!");
        if(Ext.getCmp('myHistoryDetails')){        
        	Ext.Viewport.setActiveItem('myHistoryDetails');
        }else{        
        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.History'));
        }
	},
	oninfoButtonTap: function () {
		
        console.log("oninfoButtonTap");
		if(Ext.getCmp('infoPanel')){        
        	Ext.Viewport.setActiveItem('infoPanel');

        }else{        
        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.InfoPanel'));

        }
	}
});