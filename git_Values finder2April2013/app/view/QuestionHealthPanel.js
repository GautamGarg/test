Ext.define("ValuesFinder.view.QuestionHealthPanel", {
	extend: 'Ext.Container',
    xtype:'questionhealthpanel',
    //id:'questionhealthpanel',
    alias: 'widget.QuestionHealthPanel',
    requires:['Ext.dataview.List','ValuesFinder.model.Task','ValuesFinder.store.Task'],
    config:{
    	//id:'questionPanel',
        //title:'Information',
		//iconCls:'info',
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				title:'AREA LACKING YOUR CORE VALUE [Health]',
				docked:'top'
			},
			{
				xtype:'container',
   				style:'padding:10px;',
   				layout:'vbox',
   				docked:'top',
   				html: [
                    "Discover and learn powerful coaching questions to overcome these managerial challenges. Discover and learn powerful coaching questions to overcome these managerial challenges. Discover and learn powerful coaching questions to overcome these managerial challenges. "
                ].join(""),

			},
			{
				xtype: 'container',
				layout: 'fit',
				flex: 3,
				items: [
					{				
						xtype: 'list',
						//id: 'historyDateList',	
						store:'QuestionHealth',							
						itemTpl: '{text}',
						allowDeselect:true,
						scrollable: true,						
					},
			{
		   				xtype:'button',
		   				//layout:'fit',
		   				docked:'bottom',
		   				pack: 'center',
		   				text:'Next',
		   				width:100,
		   				height:25,
		   				style:'margin:20px auto 20px;align:center',
		   				align:'center',
		   				itemId:'nextQuestion',
		   				handler: function ()
    						{
    							//this is to increment the last page column of Task table
							console.log('this is create new ');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','6');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
							  
    							console.log('inside the listener to NEXT button');
						        Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.ActionSteps'));
								this.destroy();
				        	}
   				   }
				]
			},
			
			
			{
				xtype:'bottomtoolbar'
			}
			
		],

},
});