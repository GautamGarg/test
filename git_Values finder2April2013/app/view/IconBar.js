var flag1= 0;var flag2= 0;var flag3= 0;var flag4= 0;var flag5= 0;
var flag6= 0;var flag7= 0;var flag8= 0;var flag9= 0;var flag10= 0;
var flag11= 0;var flag12= 0;var flag13= 0;var flag14= 0;var flag15= 0;
var flag16= 0;var flag17= 0;var flag18= 0;var flag19= 0;var flag20= 0;
var flag21= 0;var flag22= 0;var flag23= 0;var flag24= 0;var flag25= 0;
var count1=0; var count2=0; var count3=0; var count4=0; var count5=0;var count6=0;
							
Ext.define("ValuesFinder.view.IconBar", {
	extend: 'Ext.Panel',
	xtype: 'iconBar',
	requires: [
		'ValuesFinder.util.Config'
	],
	
	config: {
				xtype:'container',
				//scrollable:'vertical',
				style:'margin:0 auto',
				layout:'vbox',
				//id:'iconBarV',
				items:[
						{
				xtype:'container',
				//scrollable:'vertical',
				style:'margin:0 auto',
				layout:'fit',
				//id:'iconBarV',
				items:[
						{ 
							xtype:'container',
							layout:'hbox',
							style:'margin:0 auto',
							//style:'margin:0 auto',
							items:[
								{
									xtype:'container',
									cls:'cont_label',
									//layout:'vbox',
									//height:100,
									items:[
										{
											xtype:'label',
											//width:200,
											height:93,
											layout:'fill',
											style:'background:#f7f7f7;padding:40px 20px 20px 20px;color:#242424;text-align:center;',
											docked:'top',
											itemId:'label1',
											html: [
											  "Value1:" // ValuesFinder.util.Config.getTop5Arr()[0].text
											].join("")
										}
									]
									
								},
								{
									xtype:'container',
									//layout:'vbox',
									cls:'w100_uni',
									//height:110,
									items:[
										{
							
									xtype:'container',
									cls:'w100_uni',
									//height:52,
									//docked:'top',
									items:[
									{
										xtype:'toolbar',
										cls:'list_icon_label_bg',
										//layout:'fit',
										//width:265,
										defaults:{
											//iconMask:true,
										},
										items: 
										[
										//start of home icon
											{
												
												
												xtype: 'button',
												cls:'home_list_icon',
												handler:function(){
														var id1 = this.getId();
													if(flag1==0){
														count1++;
														flag1=1;
														document.getElementById(id1).className = "home_list_icon_checked"
													}
													else
													{
														count1--;
														flag1=0;
														document.getElementById(id1).className = "home_list_icon"
													}
												}
											},//end of home icon
											
											
											
											{
												xtype: 'button',
												cls:'relationship_icon',
												handler:function(){
														var id2 = this.getId();
													if(flag2==0){
														count2++;
														flag2=1;
															document.getElementById(id2).className = "rel_icon_checked"
													}
													else
													{
														count2--;
														flag2=0;
														document.getElementById(id2).className = "relationship_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'career_icon',
												handler:function(){
														var id3 = this.getId();
													if(flag3==0){
														count3++;
														flag3=1;
														document.getElementById(id3).className = "career_icon_checked"
													}
													else
													{
														count3--;
														flag3=0;
														document.getElementById(id3).className = "career_icon"
													}
												}
											},
											
										]
									}
									]			
								},
								{
									xtype:'container',
									//layout:'hbox',
									//width:200,
									//docked:'top',
									cls:'w100_uni',
									items:[
										{
											xtype:'toolbar',
											cls:'list_icon_label_bg',
											//ui:'neutral',
											//layout:'fit',
											//width:265,
											defaults:{
												iconMask:true,
											},
											items:
											[
												
												
												{
													
													xtype: 'button',
													cls:'heart_icon',
													handler:function(){
														var id4 = this.getId();
														if(flag4==0){
															count4++;
															flag4=1;
															document.getElementById(id4).className = "heart_icon_checked"
														}
														else
														{
															count4--;
															flag4=0;
															document.getElementById(id4).className = "heart_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'fulfil_icon',
													handler:function(){
														var id5 = this.getId();
														if(flag6==0){
															count5++;
															flag6=1;
															document.getElementById(id5).className = "fulfil_icon_checked"
														}
														else
														{
															count5--;
															flag6=0;
															document.getElementById(id5).className = "fulfil_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'finance_icon',
													handler:function(){
														var id6 = this.getId();
														if(flag5==0){
															count6++;
															flag5=1;
															document.getElementById(id6).className = "finance_icon_checked"
														}
														else
														{
															count6--;
															flag5=0;
															document.getElementById(id6).className = "finance_icon"
														}
													}
												}
											]
										}
									]
								}
									]
								}
								
							]
						},
						{ 
							xtype:'container',
							layout:'hbox',
							style:'margin:0 auto',
							//style:'margin:0 auto',
							items:[
								{
									xtype:'container',
									cls:'cont_label',
									//layout:'vbox',
									//height:100,
									items:[
										{
											xtype:'label',
											//width:100,
											height:93,
											style:'background:#f7f7f7;padding:40px 20px 20px 20px;color:#242424;text-align:center;',
											docked:'top',
											itemId:'label1',
											html: [
											  "Value2:" // ValuesFinder.util.Config.getTop5Arr()[0].text
											].join("")
										}
									]
									
								},
								{
									xtype:'container',
										cls:'w100_uni',
								//	layout:'vbox',
									items:[
										{
							
									xtype:'container',
										cls:'w100_uni',
									//layout:'hbox',
									
									
									items:[
									{
										xtype:'toolbar',
											cls:'list_icon_label_bg',
										
										
										items:
										[
											{
												xtype: 'button',
												cls:'home_list_icon',
												handler:function(){
														var id7 = this.getId();
													if(flag7==0){
														count1++;
														flag7=1;
														document.getElementById(id7).className = "home_list_icon_checked"
													}
													else
													{
														count1--;
														flag7=0;
														document.getElementById(id7).className = "home_list_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'relationship_icon',
												handler:function(){
														var id8 = this.getId();
													if(flag8==0){
														count2++;
														flag8=1;
														document.getElementById(id8).className = "rel_icon_checked"
													}
													else
													{
														count2--;
														flag8=0;
														document.getElementById(id8).className = "relationship_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'career_icon',
												handler:function(){
														var id9 = this.getId();
													if(flag9==0){
														count3++;
														flag9=1;
														document.getElementById(id9).className = "career_icon_checked"
													}
													else
													{
														count3--;
														flag9=0;
														document.getElementById(id9).className = "career_icon"
													}
												}
											},
											
										]
									}
									]			
								},
								{
									xtype:'container',
									//layout:'hbox',
									//width:200,
									cls:'w100_uni',
									items:[
										{
											xtype:'toolbar',
											//ui:'neutral',
											//layout:'fit',
											//width:265,
											cls:'list_icon_label_bg',
											defaults:{
												iconMask:true,
											},
											items:
											[
												
												
												{
														xtype: 'button',
													cls:'heart_icon',
													itemId:'change10',
													handler:function(){
														var id10 = this.getId();
														if(flag10==0){
															count4++;
															flag10=1;
															document.getElementById(id10).className = "heart_icon_checked"
														}
														else
														{
															coun4--;
															flag10=0;
															document.getElementById(id10).className = "heart_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'fulfil_icon',
													itemId:'change11',
													handler:function(){
														var id11 = this.getId();
														if(flag11==0){
															count5++;
															flag11=1;
															document.getElementById(id11).className = "fulfil_icon_checked"
														}
														else
														{
															count5--;
															flag11=0;
															document.getElementById(id11).className = "fulfil_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'finance_icon',
													itemId:'change12',
													handler:function(){
														var id12 = this.getId();
														if(flag12==0){
															count6++;
															flag12=1;
															document.getElementById(id12).className = "finance_icon_checked"
														}
														else
														{
															count6--;
															flag12=0;
															document.getElementById(id12).className = "finance_icon"
														}
													}
												}
											]
										}
									]
								}
									]
								}
								
							]
						},
						{ 
							xtype:'container',
							layout:'hbox',
							style:'margin:0 auto',
							//style:'margin:0 auto',
							items:[
								{
									xtype:'container',
									cls:'cont_label',
									//layout:'vbox',
									//height:100,
									items:[
										{
											xtype:'label',
											//width:100,
											height:93,
											style:'background:#f7f7f7;padding:40px 20px 20px 20px;color:#242424;text-align:center;',
											docked:'top',
											itemId:'label1',
											html: [
											  "Value3:" // ValuesFinder.util.Config.getTop5Arr()[0].text
											].join("")
										}
									]
									
								},
								{
									xtype:'container',		
										cls:'w100_uni',							
									items:[
										{
							
									xtype:'container',
									//layout:'hbox',
									//height:52,
									cls:'w100_uni',
									//docked:'top',
									items:[
									{
										xtype:'toolbar',
										cls:'list_icon_label_bg',
										
										//width:265,
										defaults:{
											iconMask:true,
										},
										items:
										[
											{
												xtype: 'button',
												cls:'home_list_icon',
												handler:function(){
														var id13 = this.getId();
													if(flag13==0){
														count1++;
														flag13=1;
														document.getElementById(id13).className = "home_list_icon_checked"
													}
													else
													{
														count1--;
														flag13=0;
														document.getElementById(id13).className = "home_list_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'relationship_icon',
												handler:function(){
														var id14 = this.getId();
													if(flag14==0){
														count2++;
														flag14=1;
														document.getElementById(id14).className = "rel_icon_checked"
													}
													else
													{
														count2--;
														flag14=0;
														document.getElementById(id14).className = "relationship_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'career_icon',
												handler:function(){
														var id15 = this.getId();
													if(flag15==0){
														count3++;
														flag15=1;
														document.getElementById(id15).className = "career_icon_checked"
													}
													else
													{
														count3--;
														flag15=0;
														document.getElementById(id15).className = "career_icon"
													}
												}
											},
											
										]
									}
									]			
								},
								{
									xtype:'container',
									cls:'w100_uni',
									
									items:[
										{
											xtype:'toolbar',
											cls:'list_icon_label_bg',
											defaults:{
												iconMask:true,
											},
											items:
											[
												
												
												{
														xtype: 'button',
													cls:'heart_icon',
													handler:function(){
														var id16 = this.getId();
														if(flag16==0){
															count4++;
															flag16=1;
															document.getElementById(id16).className = "heart_icon_checked"
														}
														else
														{
															count4--;
															flag17=0;
															document.getElementById(id16).className = "heart_icon"
														}
													}
												},
												{
														xtype: 'button',
													cls:'fulfil_icon',
													itemId:'change17',
													handler:function(){
														var id17 = this.getId();
														if(flag17==0){
															count5++;
															flag17=1;
															document.getElementById(id17).className = "fulfil_icon_checked"
														}
														else
														{
															count5--;
															flag17=0;
															document.getElementById(id17).className = "fulfil_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'finance_icon',
													itemId:'change18',
													handler:function(){
														var id18 = this.getId();
														if(flag18==0){
															count6++;
															flag18=1;
															document.getElementById(id18).className = "finance_icon_checked"
														}
														else
														{
															count6--;
															flag18=0;
															document.getElementById(id18).className = "finance_icon"
														}
													}
												}
											]
										}
									]
								}
									]
								}
								
							]
						},
						{ 
							xtype:'container',
							layout:'hbox',
							style:'margin:0 auto',
							//cls:'w100_uni',
							//style:'margin:0 auto',
							items:[
								{
									xtype:'container',
									cls:'cont_label',
									//layout:'vbox',
								//	height:100,
									items:[
										{
											xtype:'label',
											//width:100,
											height:93,
											style:'background:#f7f7f7;padding:40px 20px 20px 20px;color:#242424;text-align:center;',
											docked:'top',
											itemId:'label1',
											html: [
											  "Value4:" // ValuesFinder.util.Config.getTop5Arr()[0].text
											].join("")
										}
									]
									
								},
								{
									xtype:'container',
									//layout:'vbox',
									cls:'w100_uni',
									//height:110,
									items:[
										{
							
									xtype:'container',
									//layout:'hbox',
									//height:52,
									cls:'w100_uni',
									//docked:'top',
									items:[
									{
										xtype:'toolbar',
									cls:'list_icon_label_bg',
										//layout:'fit',
										//width:265,
										defaults:{
											iconMask:true,
										},
										items:
										[
											{
												xtype: 'button',
												cls:'home_list_icon',
												handler:function(){
													if(flag19==0){
														var id19 = this.getId();
														count1++;
														flag19=1;
														document.getElementById(id19).className = "home_list_icon_checked"
													}
													else
													{
														count1--;
														flag19=0;
														document.getElementById(id19).className = "home_list_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'relationship_icon',
												itemId:'change20',
												handler:function(){
														var id20 = this.getId();
													if(flag20==0){
														count2++;
														flag20=1;
														document.getElementById(id20).className = "rel_icon_checked"
													}
													else
													{
														count2--;
														flag20=0;
														document.getElementById(id20).className = "relationship_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'career_icon',
												handler:function(){
														var id21 = this.getId();
													if(flag21==0){
														count3++;
														flag21=1;
														document.getElementById(id21).className = "career_icon_checked"
													}
													else
													{
														count3--;
														flag21=0;
														document.getElementById(id21).className = "career_icon"
													}
												}
											},
											
										]
									}
									]			
								},
								{
									xtype:'container',
									//layout:'hbox',
									//width:200,
									//docked:'top',
									cls:'w100_uni',
									items:[
										{
											xtype:'toolbar',
											cls:'list_icon_label_bg',
											//layout:'fit',
											//width:265,
											defaults:{
												iconMask:true,
											},
											items:
											[
												
												
												{
													xtype: 'button',
													cls:'heart_icon',
													handler:function(){
														var id22 = this.getId();
														if(flag22==0){
															count4++;
															flag22=1;
															document.getElementById(id22).className = "heart_icon_checked"
														}
														else
														{
															count4--;
															flag22=0;
															document.getElementById(id22).className = "heart_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'fulfil_icon',
													handler:function(){
														var id23 = this.getId();
														if(flag23==0){
															count5++;
															flag23=1;
															document.getElementById(id23).className = "fulfil_icon_checked"
														}
														else
														{
															count5--;
															flag23=0;
															document.getElementById(id23).className = "fulfil_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'finance_icon',
													handler:function(){
														var id24 = this.getId();
														if(flag24==0){
															count6++;
															flag24=1;
															document.getElementById(id24).className = "finance_icon_checked"
														}
														else
														{
															count6--;
															flag24=0;
															document.getElementById(id24).className = "finance_icon"
														}
													}
												}
											]
										}
									]
								}
									]
								}
								
							]
						},
						{ 
							xtype:'container',
							layout:'hbox',
							style:'margin:0 auto',
							//cls:'w100_uni',
							//style:'margin:0 auto',
							items:[
								{
									xtype:'container',
									cls:'cont_label',
									//layout:'vbox',
								//	height:100,
									items:[
										{
											xtype:'label',
											//width:100,
											height:93,
											style:'background:#f7f7f7;padding:40px 20px 20px 20px;color:#242424;text-align:center;',
											docked:'top',
											itemId:'label1',
											html: [
											  "Value5:" // ValuesFinder.util.Config.getTop5Arr()[0].text
											].join("")
										}
									]
									
								},
								{
									xtype:'container',
									//layout:'vbox',
									cls:'w100_uni',
									//height:110,
									items:[
										{
							
									xtype:'container',
									//layout:'hbox',
									//height:52,
									cls:'w100_uni',
									//docked:'top',
									items:[
									{
										xtype:'toolbar',
									cls:'list_icon_label_bg',
										//layout:'fit',
										//width:265,
										defaults:{
											iconMask:true,
										},
										items:
										[
											{
												xtype: 'button',
												cls:'home_list_icon',
												itemId:'change25',
												handler:function(){
														var id25 = this.getId();
													if(flag19==0){
														count1++;
														flag19=1;
														document.getElementById(id25).className = "home_list_icon_checked"
													}
													else
													{
														count1--;
														flag19=0;
														document.getElementById(id25).className = "home_list_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'relationship_icon',
												itemId:'change26',
												handler:function(){
														var id26 = this.getId();
													if(flag20==0){
														count2++;
														flag20=1;
														document.getElementById(id26).className = "rel_icon_checked"
													}
													else
													{
														count2--;
														flag20=0;
														document.getElementById(id26).className = "relationship_icon"
													}
												}
											},
											{
												xtype: 'button',
												cls:'career_icon',
												handler:function(){
														var id27 = this.getId();
													if(flag21==0){
														count3++;
														flag21=1;
														document.getElementById(id27).className = "career_icon_checked"
													}
													else
													{
														count3--;
														flag21=0;
														document.getElementById(id27).className = "career_icon"
													}
												}
											},
											
										]
									}
									]			
								},
								{
									xtype:'container',
									//layout:'hbox',
									//width:200,
									//docked:'top',
									cls:'w100_uni',
									items:[
										{
											xtype:'toolbar',
											cls:'list_icon_label_bg',
											//layout:'fit',
											//width:265,
											defaults:{
												iconMask:true,
											},
											items:
											[
												
												
												{
													xtype: 'button',
													cls:'heart_icon',
													handler:function(){
														var id28 = this.getId();
														if(flag22==0){
															count4++;
															flag22=1;
															document.getElementById(id28).className = "heart_icon_checked"
														}
														else
														{
															count4--;
															flag22=0;
															document.getElementById(id28).className = "heart_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'fulfil_icon',
													handler:function(){
														var id29 = this.getId();
														if(flag23==0){
															count5++;
															flag23=1;
															document.getElementById(id29).className = "fulfil_icon_checked"
														}
														else
														{
															count5--;
															flag23=0;
															document.getElementById(id29).className = "fulfil_icon"
														}
													}
												},
												{
													xtype: 'button',
													cls:'finance_icon',
													handler:function(){
														var id30 = this.getId();
														if(flag24==0){
															count6++;
															flag24=1;
															document.getElementById(id30).className = "finance_icon_checked"
														}
														else
														{
															count6--;
															flag24=0;
															document.getElementById(id30).className = "finance_icon"
														}
													}
												}
											]
										}
									]
								}
									]
								}
								
							]
						},
						{
	   				xtype:'button',
	   				//layout:'fit',
					
	   				pack: 'center',
	   				text:'NEXT',
	   				//docked:'bottom',
		   				width:100,
		   				height:30,
		   				style:'margin:20px auto 20px;align:center;background:grey;',
		   				align:'center',
	   				itemId:'nextQuestion',
	   				handler: function ()
						{
							
							//this is to increment the last page column of Task table
							console.log('this is create new saving the page in icon bar');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','5');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
							  
							  
							  //Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHealthPanel'));
							//ValuesFinder.util.Config.setTransfer(1);
							var sortpoints = [count1,count2,count3,count4,count5,count6];
							ValuesFinder.util.Config.setCount(sortpoints);
							console.log('This is the sorted number '+sortpoints.sort(function(a,b){return a-b}));
							ValuesFinder.util.Config.setPoints(sortpoints);
							console.log('this is the min three index wise number '+ValuesFinder.util.Config.getPoints()[0], ValuesFinder.util.Config.getPoints()[1], ValuesFinder.util.Config.getPoints()[2])
							if(ValuesFinder.util.Config.getCount()[0]==ValuesFinder.util.Config.getPoints()[0])
							{
								ValuesFinder.util.Config.setQue1('1');
								Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHealthPanel'));
							}
							if(ValuesFinder.util.Config.getCount()[1]==ValuesFinder.util.Config.getPoints()[0])
							{
								ValuesFinder.util.Config.setQue1('2');
								Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionRelationshipsPanel'));
							}
							if(ValuesFinder.util.Config.getCount()[2]==ValuesFinder.util.Config.getPoints()[0])
							{
								ValuesFinder.util.Config.setQue1('3');
								Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionCareerPanel'));
							}
							if(ValuesFinder.util.Config.getCount()[3]==ValuesFinder.util.Config.getPoints()[0])
							{
								ValuesFinder.util.Config.setQue1('4');
								Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHomePanel'));
							}
							if(ValuesFinder.util.Config.getCount()[4]==ValuesFinder.util.Config.getPoints()[0])
							{
								ValuesFinder.util.Config.setQue1('5');
								Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionSelfPanel'));
							}
							if(ValuesFinder.util.Config.getCount()[5]==ValuesFinder.util.Config.getPoints()[0])
							{
								ValuesFinder.util.Config.setQue1('6');
								Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionFinancesPanel'));
							}
							
			        	}
			   }
				
					]			
			}
			]
			}
				
		
});
		
