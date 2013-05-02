Ext.define("PhonegapPerry.view.AboutPanel", {
	extend: 'Ext.Panel',
	alias: 'widget.aboutpanel',
    xtype:'aboutpanel',
    requires:[],
    config:{
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				title:'About',
				docked:'top',
				items:[{
		    				xtype:'button',
		    				itemId:'backToAbout',
		    				text:'Back',
		    				ui:'back'
    					}]
			},
			{
				xtype:'container',
				style:'padding:10px',
   				layout:'card',
   				scrollable:'vertical',
   				html: [
                    "<p><b>With this app you will identify powerful coaching questions for 15 common management challenges. </p><br>",
                    "<p>Remember that connection and relationship are paramount with a coaching approach. You are facilitating THEIR learning and development. You are NOT doing the work for them or providing answers. </p><br>",
                    "<p>In the meeting ask your team member what they are thinking. Allow time for the other person to explore the issue. Talk LESS! Use these coaching questions as part of your approach to managing. Ask your team member what it is they are taking away to put into action. Set up a follow up time to check in with how they are going.</b></p>"
                    
                ].join("")
			},
			{
				xtype:'bottomtoolbar'
			}
			],
			listeners: [
    				
   					{
				        delegate: "#backToAbout",
				        event: "tap",
				        fn: "onbackToAbout"
					}					
   				]
		},
		onbackToAbout: function () {			                

		        
		        if(Ext.getCmp('infoPanel')){        

	        		Ext.Viewport.setActiveItem('infoPanel');
		        }else{    
  
		        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.InfoPanel'));
		        }
		        		        
			}
});