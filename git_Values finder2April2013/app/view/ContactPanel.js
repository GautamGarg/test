Ext.define("ValuesFinder.view.ContactPanel", {
	extend: 'Ext.Panel',
	alias: 'widget.contactpanel',
    xtype:'contactpanel',
    requires:[],
    config:{
        //title:'Information',
		//iconCls:'info',
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				title:'Contact',
				docked:'top',
				items:[{
		    				xtype:'button',
		    				//id:'backToTopic',
		    				itemId:'cBack',
		    				text:'Back',
		    				ui:'back'
    					}]
			},
			{
				xtype:'container',
				style:'padding:10px',
   				layout:'fit',
   				html: [
                    "<p><b>Loretta Brown</b></p><br>",
                    "<p><a href='mailto:Info@coachingmentoringcentre.com'>Info@coachingmentoringcentre.com</a></p> ",
                    "<p><a href='www.coachingmentoringcentre.com'>www.coachingmentoringcentre.com</a></p>"
                ].join("")
			},
			{
				xtype:'bottomtoolbar'
			}
			],
			listeners: [
   					{
				        delegate: "#cBack",
				        event: "tap",
				        fn: "oncBack"
					}					
   				]
		},
		oncBack: function () {			                
		        if(Ext.getCmp('infoPanel')){        
	        		Ext.Viewport.setActiveItem('infoPanel');
		        }else{    
		        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.InfoPanel'));
		        }
			}
});