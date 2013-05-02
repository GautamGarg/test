Ext.define("ValuesFinder.view.QuestionCareerPanel", {
	extend: 'Ext.Container',
    xtype:'questioncareerpanel',
    //id:'questioncareerpanel',
    alias: 'widget.QuestionCareerPanel',
    requires:['Ext.dataview.List','ValuesFinder.model.Task','ValuesFinder.store.Task'],
    config:{
    	//id:'questionPanel',
        //title:'Information',
		//iconCls:'info',
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				title:'AREA LACKING YOUR CORE VALUE [Career]',
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
						store:'QuestionCareer',							
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
							console.log('this is create new in Career');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','10');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
    							
    							console.log('inside the listener to NEXT button');
    							Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.ActionSteps3'));
								this.destroy();
								/*if(ValuesFinder.util.Config.getTransfer()==0)
									{
										Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.ActionSteps'));
									}
									else
									{
										if(ValuesFinder.util.Config.getTransfer()==1){
											Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.ActionSteps2'));
										}else
									{
										Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.ActionSteps3'));
									}
										
									}*/
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