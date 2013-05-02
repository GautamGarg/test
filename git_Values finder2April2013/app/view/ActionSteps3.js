Ext.define( 'ValuesFinder.view.ActionSteps3',{
	extend: 'Ext.form.Panel',
	xtype:'ActionSteps3',
	//id:'ActionSteps3',
    requires:['Ext.Title','Ext.Video','Ext.Container','Ext.TabPanel','Ext.form.FieldSet','ValuesFinder.util.Config','ValuesFinder.controller.ActionController3'],	
	alias : 'widget.ActionSteps3',
	config: {
		styleHtmlContent:true,
		items: [
			{
				xtype: 'toptitlebar',
				title: 'Action Steps for Career'
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
		    					id: 'actionStep31'	    					
		    				}
		    			]
		    		},
		    		{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step 2',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStep32'	    					
		    				}
		    			]
		    		},
		    		{
		    			xtype: 'fieldset',    			
		    			title: 'Action Step Note',
		    			items: [
		    				{
		    					xtype: 'textareafield',
		    					id: 'actionStepNote3'	    					
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
		   				id:'newActionBtn3',
		   				handler: function ()
    						{
    							console.log('inside the listener to NEXT button');
    							Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.CompletionPanel'));
								/*if(Ext.getCmp('completionpanel')){        
						        	Ext.Viewport.setActiveItem('completionpanel');
					        	}else{        
						        	Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.CompletionPanel'));
					        	}*/
				        	}
   				   },
			{
				xtype: 'bottomtoolbar'
			}    		
			],
			listeners:{
	          /*   painted: function() {
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStep31').setValue('This is override Step 1'));
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStep32').setValue('This is override Step 2'));
            console.log('Foo painted');
            console.log(Ext.getCmp('actionStepNote3').setValue('This is override Note 1'));
            },*/
        	}
	}
	/*initialize: function()
	{
		console.log("ActionSteps");
		this.callParent(arguments);	
	}*/
});
