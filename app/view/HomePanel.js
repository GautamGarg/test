Ext.define("PhonegapPerry.view.HomePanel", {
    extend: 'Ext.Panel',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel',],
    //layout: 'fit', 
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
  		/*items: 
   		[
   		{
   			

   			items:[
   			{
   				xtype:'toptitlebar'
   			},
   			{
   				xtype:'container',
	   			//height:500,
	   			layout:{
	   			//pack: 'center',
	   			scrollable:'verticle',
	   			height:'100%',
	   			style:'border:5px #f0f0f0 solid;',
	   			//fullscreen: true,	
   				},
	   			//scrollable:'verticle',
	   			items:[
	   				{
		   				xtype:'container',
		   				style:'padding:10px',
		   				//layout:'card',
		   				//text:'This app provides instant access to powerful questions for the 14 most common management challenges and your secret to success.Smart managers build their teams through coaching.Having the right questions at hand will help you avoid common managerial traps and get results quickly.'
		   				html: [
		                    "This app provides instant access to powerful questions for the 14 most common management challenges and your secret to success.",
		                    "Smart managers build their teams through coaching.",
		                    "Having the right questions at hand will help you avoid common managerial traps and get results quickly."
		                ].join("")
		   			},
   			{
   				xtype: 'container',
   				style:'margin:0 auto;',
				width: 200,
				height: 150,
				align:'center',
				layout:{
	   			type:'vbox',
	   			scrollable:'verticle',
	   			fullscreen: true,	
   			},
				
				style:'margin:0 auto; margin-bottom:20px!important',						
				items: [
				  {
			            xtype:'video',
		   				width:200,
		   				height:150,
		   				style:'margin:0 auto; margin-bottom:20px!important',
		   				align:'center',
		   				url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
		                posterUrl: 'resources/icons/video.png',
		                //style:'width:100px;'	            
			      },
			      
			       ],
			      
			      },
			       {
		   				xtype:'button',
		   				//layout:'fit',
		   				pack: 'center',
		   				text:'Powerfull Coaching Question',
		   				width:200,
		   				style:'margin:0 auto;align:center',
		   				align:'center',
		   				ui:'action',
		   				itemId:'CoachingQuestion',
   				   }
	   			]
   			}
   			
			       ],
   				listeners: [
   					{
				        delegate: "#CoachingQuestion",
				        event: "tap",
				        fn: "onCoachingQuestionTap"
					}
   				],
   			onCoachingQuestionTap: function () {
			        console.log("topicpanel");
					if(Ext.getCmp('topicpanel')){        
			        	Ext.Viewport.setActiveItem('topicpanel');
			        }else{        
			        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.TopicPanel'));
			        }
				}
   			},
   			{
				xtype:'bottomtoolbar'
			}
   			
   		]	*/
   	},
   	
});