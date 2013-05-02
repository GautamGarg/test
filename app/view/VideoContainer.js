Ext.define("PhonegapPerry.view.VideoContainer", {
	extend: 'Ext.Panel',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel','PhonegapPerry.view.MyShortlists'],
    xtype:'videoContainer',
    config: {
    	items:[
    		{
    		
   				xtype:'container',
	   			height:500,
	   			layout:{
	   			scrollable:'verticle',
	   			},
	   			items:[
	   				{
		   				xtype:'container',
		   				style:'padding:10px',
		   				html: [
		                    "Managers can bring out the best in their people by adopting a coaching approach. Coaching develops your people through asking powerful questions and talking less!  Here are 15 common management challenges. What would you like to address today?"
		                ].join("")
		   			},
		   			{
		   				xtype: 'container',
		   				style:'margin:0 auto;',
						width: 300,
						align:'center',
						style:'margin:0 auto; margin-bottom:20px!important',						
						items: [
						  {
					            xtype:'video',
				   				width:300,
				   				height:200,
				   				align:'center',
				   				url: 'resources/video/Managers_as_coaches_App.mov',
				                posterUrl: 'resources/icons/video.png',
					      }
				       ]
					      
				    },
					     {
				   				xtype:'button',
				   				pack: 'center',
				   				text:'Powerful Coaching Questions',
				   				width:300,
				   				height:40,
				   				style:'margin:0 auto;align:center;top:50px',
				   				align:'center',
				   				ui:'action',
				   				itemId:'CoachingQuestion'
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
   				]
   		},
   			onCoachingQuestionTap: function () {
			        console.log("topicpanel");
			        Ext.Viewport.setActiveItem('topicpanel');
				}
   			

})