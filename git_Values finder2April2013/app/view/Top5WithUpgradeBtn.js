Ext.define( 'ValuesFinder.view.Top5WithUpgradeBtn',{
	extend: 'Ext.Panel',	
	requires: [
			'Ext.dataview.List',
			'Ext.data.Store',
			'Ext.Label'		
			],
	
	config: {
		id: 'top5WithUpgrade',
		layout: 'vbox',
		items: [	
			{
				xtype: 'toptitlebar',
				title: 'Your Top Five'
			},
			{				
						xtype: 'label',
						html: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				xtype: 'container',
				layout: 'fit',
				flex: 1,
				items: [					
			       {
	               		xtype:'video',
						width:200,
						height:150,
						style:'margin:0 auto; margin-bottom:20px!important',
						align:'center',
						url: 'http://local.softprodigy.com/design/xflavour_html5/video/624x260.mp4',
						posterUrl: 'resources/images/video.png'		                              
		         	}	
				]
			},
			{
				xtype: 'container',
				layout: 'fit',
				flex: 2,
				items: [
					{				
						xtype: 'list',									
						data: ValuesFinder.app.tempHistArray,		//data provider for list							
						itemTpl: '{histDate}',
						onItemDisclosure: false,
						scrollable: true,				
					},
					{
					    xtype : 'toolbar',			            	            
					    docked: 'bottom',
					    items: [
					        {
					            xtype: 'button',
					            text : 'Share'
					        },
					        {
					            xtype: 'spacer'
					        },
					        {
					            xtype: 'button',
					            text : 'Upgrade'
					        }
					    ]
					}
				]
			},
			{
				xtype: 'bottomtoolbar'
			} 
		]
	},
	initialize: function()
	{
		console.log("Top5WithUpgradeBtn");
		this.callParent(arguments);	
	}
});
