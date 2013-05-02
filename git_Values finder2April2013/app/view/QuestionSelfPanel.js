Ext.define("ValuesFinder.view.QuestionSelfPanel", {
	extend: 'Ext.Container',
    xtype:'questionselfpanel',
    alias: 'widget.QuestionSelfPanel',
    requires:['Ext.dataview.List','ValuesFinder.model.Task','ValuesFinder.store.Task'],
    config:{
    	//id:'questionPanel',
        //title:'Information',
		//iconCls:'info',
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				title:'AREA LACKING YOUR CORE VALUE [Self]',
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
						store:'QuestionSelf',							
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
    							console.log('inside the listener to NEXT button');
    							Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.ActionSteps'));
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