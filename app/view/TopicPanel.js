Ext.define("PhonegapPerry.view.TopicPanel", {
	extend: 'Ext.Container',
    xtype:'topicpanel',
    alias: 'widget.nestedList',
    requires:['PhonegapPerry.util.Config','Ext.dataview.List','PhonegapPerry.store.QuestionStore','PhonegapPerry.model.QuestionModel',
    		'PhonegapPerry.controller.MainControler','Ext.NestedList','PhonegapPerry.view.MyShortlists'],
    config:{
    	//id:'questionPanel',
        //title:'Information',
		//iconCls:'info',
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				title:'Topics',
				docked:'top'
			},
			{
				xtype:'container',
   				style:'padding:10px;',
   				layout:'vbox',
   				docked:'top',
   				html: [
                    "Discover and learn powerful coaching questions to overcome these managerial challenges. "
                ].join(""),
                /*items:[
                	{
		   				xtype:'button',
		   				layout:'card',
		   				pack: 'center',
		   				text:'My Shortlists',
		   				width:200,
		   				style:'margin:0 auto;align:center;',
		   				align:'center',
		   				ui:'action',
		   				itemId:'ShortlistQuestion',
		   				id:'ShortlistQuestion'		   				
		   			},
                ],*/
                
			},
			{
				xtype:'nestedlist',
				itemId:'ShowlistTap',
				store:'QuestionStore',
				style:'border:none;',
				//simpleSelect: true,				
				simpleSelect: true,				
				mode: 'MULTI',
				allowDeselect:true,
				
				//itemTpl:'{text}',
				displayField: 'text',
				//onItemDisclosure:'false',			
				//isSelected: false,
				listeners:{
					
					leafitemtap:function(me,list,index,item,record)
					{
						var col_item = item.getId();
						var lid = list.getId();
						console.log('thiiiiiissssssssssssssssssssssssssssssssss')
					document.getElementById(col_item).style.background="#154c98";
						var flag =0;
						
						//Ext.Msg.alert("Message","You have successfully shortlisted an item.");					
						var isDuplicate = false;
						var itemIndex = 0;
						var itemArr = PhonegapPerry.util.Config.getSlarr();
						for(var i=0;i<itemArr.length;i++)
						{
							if(itemArr[i].catName == me.getTitle())
							{
								itemIndex = i;
								isDuplicate = true;
							}
						}
						
						if(isDuplicate == true)
						{
								console.log('this is the duplicate click')
							var tmpItem = itemArr[itemIndex];
							var isDup = false;
							var iIndex = 0;
							
							for(var i=0;i<tmpItem.questNames.length;i++)
							{
								if(tmpItem.questNames[i].text == record.get("text"))
								{
										//console.log('idddddddddddd')
										console.log(col_item)
									
									console.log('666666666666666666')
									flag=1;
									iIndex = i;
									isDup = true;
									console.log('thisis the quest name')
									tmpItem.questNames.splice(i, 1);
								}
								else{
									console.log('this is ccccccccccccccc')
									//document.getElementById(col_item).style.background="#154c98";
									//Ext.Msg.alert("Message","You have successfully shortlisted an item.");
								}
							}
							
							if(isDup == false)
							{
								console.log('this is list')
								
								list.Selected=true;
								console.log(list.getId())
								tmpItem.questNames.push({text:record.get("text")});
								
							}
							console.log('this is if if if')
							/*if(flag==0)
							{
								document.getElementById(col_item).style.background="#154c98";
							}
							else{
								document.getElementById(col_item).style.background="#fff";
								document.getElementById(lid).style.background="#fff !important";
							}*/
							
							//document.getElementById(col_item).style.background="#fff !important";
						}
						else{
								//Ext.Msg.alert("Message","You have successfully shortlisted an item.");
							var obj = new Object();
							obj.catName = me.getTitle();
							obj.questNames = [];
							obj.questNames.push({text:record.get("text")}) ;
							itemArr.push(obj);
							console.log('this is else else else')
						}
									
						//var obj = new Object();
						//obj.catName = me.getTitle();
						//obj.questName = record.get("text");
						//SLArray.push(obj);
						//PhonegapPerry.app.SLArray.push(obj);
						//PhonegapPerry.app.pushVal(obj);
						PhonegapPerry.util.Config.setSlarr(itemArr);
						console.log(PhonegapPerry.util.Config.getSlarr());
						
						var store = Ext.getStore('QStore');
                        store.removeAll();
                        
                        for(var i = 0;i<itemArr.length;i++)
                        {
                            store.add(itemArr[i]);
                        }
                        
						//Ext.Msg.alert((APP.app.SLArray[0]).questName+" : ");
					//	Ext.Class('x-list-item').on('tap', function(){
							//Ext.Msg.alert(record.get("text")+"<<");
					//	})											
					
					if(flag==1)
                        {
                        	
                        	console.log('fffffffffffffffffffffffffffffffff')
                        	document.getElementById(col_item).style.background="#fff";
							document.getElementById(lid).style.background="#fff !important";
							
                        }
                        var loginScreen = Ext.getCmp('nestedlist').item;
 								loginScreen.doLayout();
					}	
				},
					
			},
			
			{
				xtype:'bottomtoolbar'
			}
			
		],
		listeners: [
   					/*{
				        delegate: "#ShortlistQuestion",
				        event: "tap",
				        fn: "onShortlistQuestion"
					}*/
   				],
},
/*onShortlistQuestion: function () {
			        console.log("shortpanel");
			       
					if(Ext.getCmp('shortlistpanel')){        
			        	Ext.Viewport.setActiveItem('shortlistpanel');
			        }else{        
			        	Ext.Viewport.setActiveItem(Ext.create('PhonegapPerry.view.MyShortlists'));
			        }
			       
				}*/
});