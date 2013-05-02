Ext.define( 'ValuesFinder.view.ActionSteps',{
	extend: 'Ext.form.Panel',
    xtype:'ActionSteps',
    //id:'ActionSteps',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel','Ext.form.FieldSet','ValuesFinder.util.Config','ValuesFinder.controller.ActionController'],	
	alias: 'widget.ActionSteps',
	requires: [
		'ValuesFinder.util.Config'
	],
	config: {
		styleHtmlContent:true,
		items: [
			{
				xtype: 'toptitlebar',
				title: 'Action Steps For Health'
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
		    					id: 'actionStep1',
		    				}
		    			]
		    		},
		    		{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step 2',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStep2',	    
		    				}
		    			]
		    		},
		    		{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step Note',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStepNote',	
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
		   				id:'newActionBtn',
		   				handler: function ()
    						{
    							
    							console.log('inside the listener to NEXT button');
    							Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionRelationshipsPanel'));
    							
							/*if(ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[0]||ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[1]||ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[2])
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
							}
							if((ValuesFinder.util.Config.getCount()[3]==ValuesFinder.util.Config.getPoints()[0]||ValuesFinder.util.Config.getCount()[3]==ValuesFinder.util.Config.getPoints()[1]||ValuesFinder.util.Config.getCount()[3]==ValuesFinder.util.Config.getPoints()[2]))
							{
								console.log('Minimum three is Home');
					        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHomePanel'));
					        	ValuesFinder.util.Config.setTransfer(1);
							}*/
    							
				        	}
		   		},
		   			
			{
				xtype: 'bottomtoolbar'
			}    		
			]
		/*	,
			listeners:{
	            painted: function() {
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStep1').setValue('This is override Step 1'));
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStep2').setValue('This is override Step 2'));
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStepNote').setValue('This is override Note 1'));
            }
        	}*/
	}
	/*initialize: function()
	{
		console.log("ActionSteps");
		this.callParent(arguments);	
	}*/
});
