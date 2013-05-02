Ext.define( 'ValuesFinder.view.ActionSteps2',{
	extend: 'Ext.form.Panel',
	xtype:'ActionSteps2',
	//id:'ActionSteps2',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel','Ext.form.FieldSet','ValuesFinder.util.Config','ValuesFinder.controller.ActionController2'],	
	alias: 'widget.ActionSteps2',
	
	config: {
		styleHtmlContent:true,
		items: [
			{
				xtype: 'toptitlebar',
				title: 'Action Steps for Relationships'
			},
			{
				xtype: 'label',
				html: "<h4>Add Two Daily Action Steps</h4>"
			},
			{
				xtype: 'container',				
				layout: 'vbox',
				items: [
					{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step 1',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStep21'	    					
		    				}
		    			]
		    		},
		    		{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step 2',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStep22'	    					
		    				}
		    			]
		    		},
		    		{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step Note',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStepNote2'	    					
		    				}
		    			]
		    		}				
				]
			},
			{
		   				xtype:'button',
		   				//layout:'fit',
		   				pack: 'center',
		   				text:'Next',
		   				width:100,
		   				height:25,
		   				style:'margin:20px auto 20px;align:center',
		   				align:'center',
		   				id:'newActionBtn2',
		   				handler: function ()
    						{
    							console.log('inside the listener to NEXT button');
    							Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionCareerPanel'));
							/*	if(ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[0]||ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[1]||ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[2])
							{
								console.log('Minimum three is Health ');
					        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHealthPanel'));
							}
							if(ValuesFinder.util.Config.getCount()[1]==ValuesFinder.util.Config.getPoints()[0]||ValuesFinder.util.Config.getCount()[1]==ValuesFinder.util.Config.getPoints()[1]||ValuesFinder.util.Config.getCount()[1]==ValuesFinder.util.Config.getPoints()[2])
							{
								console.log('Minimum three is Relationships');
					        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionRelationshipsPanel'));
							}
							if(ValuesFinder.util.Config.getCount()[2]==ValuesFinder.util.Config.getPoints()[0]||ValuesFinder.util.Config.getCount()[2]==ValuesFinder.util.Config.getPoints()[1]||ValuesFinder.util.Config.getCount()[2]==ValuesFinder.util.Config.getPoints()[2])
							{
								console.log('Minimum three is Career');
					        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionCareerPanel'));
					        	ValuesFinder.util.Config.setTransfer(2);
							}*/
							
				        	}
   				   },
			{
				xtype: 'bottomtoolbar'
			}    		
			],
			listeners:{
				
	          /*  painted: function() {
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStep21').setValue('This is override Step 1'));
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStep22').setValue('This is override Step 2'));
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStepNote2').setValue('This is override Note 1'));
            },*/
        	}
	}
	/*initialize: function()
	{
		console.log("ActionSteps");
		this.callParent(arguments);	
	}*/
});
