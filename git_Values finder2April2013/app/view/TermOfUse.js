Ext.define("ValuesFinder.view.TermOfUse", {
	extend: 'Ext.Panel',
	alias: 'widget.termofuse',
    xtype:'termofuse',
    requires:[],
    config:{
        //title:'Information',
		//iconCls:'info',
		layout:{type:'card',
	   			scrollable:'verticle',
	   			height:'100%'},
		//scrollable:'vertical',
		items:[
			{
				xtype:'titlebar',
				title:'Term Of Use',
				docked:'top',
				items:[{
		    				xtype:'button',
		    				//id:'backToTopic',
		    				itemId:'backList',
		    				text:'Back',
		    				ui:'back'
    					}]
			},
			{
				xtype:'container',
				style:'padding:10px',
   				layout:'card',
   				scrollable:'vertical',
   				//height:550,
   				html: [
                    "<p></p>"
                ].join("")
			},
			{
				xtype:'bottomtoolbar'
			}
			],
			listeners: [
    				
   					{
				        delegate: "#backList",
				        event: "tap",
				        fn: "onbackList"
					}					
   				]
		},
	onbackList: function () {			                
		      //  Ext.Viewport.setActiveItem('topicpanel');	
		        
		        if(Ext.getCmp('infoPanel')){        
		        	//console.log("IM here");
	        		Ext.Viewport.setActiveItem('infoPanel');
		        }else{    
		        	//console.log("IM NOT");    
		        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.InfoPanel'));
		        }
		        		        
			}
});