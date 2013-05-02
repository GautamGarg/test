Ext.define("ValuesFinder.view.AboutPanel", {
	extend: 'Ext.Panel',
	alias: 'widget.InfoAbout',
    xtype:'InfoAbout',
    id:'aboutpanel',
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
                    "<p><b>WThe Coaching Mentoring Centre</p><br>",
                    "<p>The CMC provides customised coaching solutions for building great cultures, strong teams and better mangers & leaders at all levels of your organisation.</p><br>",
                    "<p>Our team are globally recognised as experts in <br/> Executive and Leadership coaching.<br/> Peer coaching<br/> Manager as Coach training <br/>Coaching programme design</b></p><br/>",
                    "<p>Building a coaching culture has become critical to success for those who want to attract and retain the best people. <a href='http://www.coachingmentoring.co.nz/node/207'> Our clients</a> are those who want to be more strategic in how they use mentoring and coaching to enhance effectiveness and leadership. </p><br/>",
                    "<p><b>Established in 2001 we have experience working with a diverse range of client organizations around the world, providing programme consultancy and training for mentors, mentees and coordinators. </p><br>"
                    
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

		        console.log('onbackToAbout');
		        if(Ext.getCmp('infoPanel')){        

	        		Ext.Viewport.setActiveItem('infoPanel');
		        }else{    
  
		        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.InfoPanel'));
		        }
		        		        
			}
});