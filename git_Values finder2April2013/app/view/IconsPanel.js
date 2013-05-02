Ext.define("ValuesFinder.view.IconsPanel", {
	extend: 'Ext.Toolbar',
	alias: 'widget.iconsPanel',
	//alias: 'widget.iconsPanel',
	xtype: 'iconsPanel',
	config:{
		
		layout:'card',
		//scrollable:'vertical',
		/*defaults:{
			iconMask:true,
			ui:'plan'
		},*/
		items:[
		{
			xtype:'titlebar',
			title:'Nature Values and Areas',
			docked:'top',
		},
		{
			xtype:'container',
			//layout:'hbox',
			//width:200,
			//docked:'top',
			scrollable: true,
			cls:'w100_uni',
					items:[
						{
							xtype:'iconBar'
						}
						]
			
		},
		{
			xtype:'bottomtoolbar',
			docked:'bottom'
		}
			
		]
		
	}
});