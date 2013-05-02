Ext.define("ValuesFinder.view.CompletionPanel", {
	extend: 'Ext.form.Panel',
	xtype: 'CompletionPanel',
	//id: 'CompletionPanel',	
	requires: [
		'Ext.field.Email',
		'Ext.field.Password',
		'Ext.form.FieldSet',
		'Ext.Label',
		'Ext.field.Toggle','ValuesFinder.model.Task','ValuesFinder.store.Task'
	],
	config: {
		styleHtmlContent:true,
		showAnimation: 'fade',
		scrollable: true,
		items: [
    		{
				xtype: 'toptitlebar',
				title: 'Completion'
			},
    		{
    			xtype: 'fieldset',
    			items: [
    				{
    					xtype: 'checkboxfield',
    					value: '',
    					label: 'Email yourself a copy',
    				},
    				{
    					xtype: 'textfield',
    					id: 'name',
    					name: 'signUpName',
    					label: 'Name:',
    					type: 'string'
    				},
    				{
    					xtype: 'togglefield',
    					id: 'password',
    					name: 'signUpPassword',
    					label: 'Store in history:'
    				},
    				{
    					xtype: 'checkboxfield',
    					//id: 'name',
    					value: '',
    					label: 'Share with Friends',
    					//type: 'string'
    				},
    				{
    					xtype: 'emailfield',
    					id: 'email',
    					name: 'signUpEmail',
    					label: 'Email:',
    					placeHolder: 'you@domain.com',
    					type: 'string'
    				},
    				{
    					xtype: 'checkboxfield',
    					value: '',
    					label: 'Facebook',
    				},
    				{
    					xtype: 'checkboxfield',
    					value: '',
    					label: 'contact with a Member',

    				},
    				{
    					xtype: 'checkboxfield',
    					value: '',
    					label: 'Contact',
    					
    				}		      

    			]
    		},
			 {
				xtype:'button',
				//layout:'fit',
				
				pack: 'center',
				text:'Finish',
				width:100,
				height:30,
				style:'margin:20px auto 20px;align:center',
				align:'center',
				//ui:'plain',
				id:'completeTask',
				handler: function ()
    						{
    							
    						}
			  },
   			{
				xtype: 'bottomtoolbar'
			},
    		]
    	}
});