Ext.define("ValuesFinder.view.HomePanel", {
    extend: 'Ext.Panel',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel',],
    //layout: 'fit', 
    id: 'homepanel',
	alias:'widget.HomePanel',
    xtype:'homepanel',
   	config: {
   		layout:{
	   			//pack: 'center',
	   			type:'card',
	   			scrollable:'verticle',
	   			height:'100%',
	   			//style:'border:5px #f0f0f0 solid;',
	   			//fullscreen: true,	
   				},
   		cls:'card card1',
   		scrollable:'true',
   		items:[
   			{
   				xtype:'toptitlebar'
   			},
   			{
   				xtype:'panel',
   				fullscreen: true,
		        scrollable: true,
		        layout:{
	   			//pack: 'center',
	   			type:'card',
	   			scrollable:'verticle',
	   			height:'100%',
	   			style:'border:5px #f0f0f0 solid;',
	   			//fullscreen: true,	
   				},
   				items:[{
   					xtype:'videoContainer',
   					scrollable: true,
   					//height:500
   				}]
   				
		          
   			},
   			
   			{
				xtype:'bottomtoolbar',
				
			}
   		]
  		
   	},
   	
});