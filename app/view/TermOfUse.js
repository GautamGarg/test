Ext.define("PhonegapPerry.view.TermOfUse", {
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
				title:'Terms Of Use',
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
                    "<p><b>The Coaching Mentoring Centre</p><br>",
                    "<p>The CMC provides customised coaching solutions for building great cultures,</p> ",
                     "<p>strong teams and better mangers and leaders at all levels of your organisation.</p> ",
                    "<p>Our team are globally recognised as experts in</p><br>",
                    "<p>Executive and Leadership coaching</p>",
                    "<p>Peer coaching</p>",
                    "<p>Manager as Coach training </p>",
                    "<p>Coaching programme design</b></p><br/>",
                    "<p>Building a coaching culture has become critical to success for those who want to attract and retain the best people. <a href='http://www.coachingmentoring.co.nz/node/207'> Our clients</a> are those who want to be more strategic in how they use mentoring and coaching to enhance effectiveness and leadership. </p><br/>",
                    "<p><b>Established in 2001 we have experience working with a diverse range of client organisations around the world, providing programme consultancy and training for mentors, mentees and coordinators.</b>  </p>"
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
		        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.InfoPanel'));
		        }
		        		        
			}
});