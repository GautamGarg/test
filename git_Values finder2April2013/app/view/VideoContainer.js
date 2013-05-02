Ext.define("ValuesFinder.view.VideoContainer", {
	extend: 'Ext.Panel',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel'],
    xtype:'videoContainer',
    id:'videoContainer',
    config: {
    	items:[{
    		
   				xtype:'container',
	   			layout:{
	   			scrollable:'verticle',
	   			height:'100%',
   				},
	   			//scrollable:'verticle',
	   			items:[
	   				{
		   				xtype:'container',
		   				style:'padding:10px',
		   				//layout:'card',
		   				//text:'This app provides instant access to powerful questions for the 14 most common management challenges and your secret to success.Smart managers build their teams through coaching.Having the right questions at hand will help you avoid common managerial traps and get results quickly.'
		   				html: [
		                    "This App makes it easy to identify your core values so that you can enjoy life and work. Knowing what you value will help you make strong decisions and prioritise better."
		                ].join("")
		   			},
   			{
		   				xtype: 'container',
		   				style:'margin:0 auto;',
						width: 300,
						//height: 200,
						align:'center',
						/*layout:{
				   				type:'vbox',
					   			scrollable:'verticle',
					   			fullscreen: true,	
		   					},*/
						
						style:'margin:0 auto; margin-bottom:20px!important',						
						items: [
						  {
					            xtype:'video',
				   				width:300,
				   				height:200,
				   				//style:'margin:0 auto; margin-bottom:20px!important',
				   				align:'center',
				   				url: 'resources/video/Values_Finder_App_video_2_free.mp4',
				                posterUrl: 'resources/icons/video.png',
				                //style:'width:100px;'	            
					      }
					      
					       ]
					      
					      },
			       {
		   				xtype:'button',
		   				//layout:'fit',
		   				pack: 'center',
		   				text:'Resume',
		   				width:100,
		   				style:'margin:15px auto 15px;align:center',
		   				align:'center',
		   				ui:'action',
		   				id:'resumeTask',
   				   },
			       {
		   				xtype:'button',
		   				//layout:'fit',
		   				pack: 'center',
		   				text:'Start New',
		   				width:120,
		   				style:'margin:0 auto;align:center',
		   				align:'center',
		   				ui:'action',
		   				itemId:'newTaskBtn',
		   				
   				   }

   			
			       ],
			      }
			],
			listeners: [{
            delegate: '#newTaskBtn',
            event: 'tap',
            fn: 'onnNewTaskButtonTap'
        }]
   				
   		},
   		onnNewTaskButtonTap: function () {        
        this.fireEvent('onnNewTaskButtonTap');
    },
	initialize: function()
	{
		console.log("VideoContainer");
		this.callParent(arguments);	
		
		var store = Ext.getStore('Task');
		store.load(function(records, operation, success) {
			var numRecs = this.getCount();			
			var lastTask = this.last().data;
			console.log(String(lastTask.iscompleted));
			if(String(lastTask.iscompleted) == 'true')
			{
				console.log('Inside the initialization for the hide button function')
				//this.fireEvent('hideResumeCommand');
				Ext.getCmp('resumeTask').hide();
				
			}
			console.log('this is id '+lastTask.tid)
			ValuesFinder.util.Config.setResumeTaskId(lastTask.tid);
			ValuesFinder.util.Config.setTaskid(lastTask.tid);
			
			console.log('This is the resume task id'+ValuesFinder.util.Config.getResumeTaskId())
		});
	}
   			
   			

})