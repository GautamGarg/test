Ext.define('ValuesFinder.controller.HistoryController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	HDList: '#historyDateList' ,
        	choose15View:'#choose15',
        	choose5View:'#choose5',  
        	topicsView:'#topicsView',
        	vidView:'#vidView'  ,
        	homepanelView:'#homepanel', 
        	list150:'#list150',
        	historyDateList:'#historyDateList',
        	history5DataList:'#history5DataList',
        	textLabel1:'#label1',
        	resumeTask: '#resumeTask'
        },
        control: {
        		
        	list150:{
        		show15ViewCommand:'show15View'
        	}  ,
        	vidView:{
        		showTopicsCommand:'showTopics'
        	},
        	choose15View:{
        		show5ViewCommand:'show5Data'
        	} ,
        	choose5View:{
        		showbarCommand:'iconData'
        	}   , 
        	historyDateList:{
        		show5ViewCommand:'show5Data'
        	},
        	label1:{
        		showlabel1Command:'showlabel1'
        	},
        	resumeTask: {
        		tap: 'createResumeTask'
        	},
        }
    },
     // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },
    showTopics:function()
    {
    	console.log('showTopics');
    	var homepanelView = this.getHomepanelView(),
        topicsView = this.getTopicsView();
        homepanelView.setMasked(false);
        
        //console.log(topicsView);

        Ext.Viewport.animateActiveItem(topicsView, this.getSlideLeftTransition());
    },
    show15View:function()
    {
    	console.log('show15View');
    	var topicsView = this.getTopicsView(),
        choose15View = this.getChoose15View(),
        historyDateList = this.getHistoryDateList();
        topicsView.setMasked(false);
        
        console.log('this is start of the store..!')
        	
        	var store = Ext.getStore('FifteenValues');    	
    	store.add([{
	        tid:ValuesFinder.util.Config.getTaskid(), v1:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[0]), v2:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[1]), 
	        v3:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[2]), v4:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[3]),
	         v5:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[4]), v6:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[5]), 
	         v7:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[6]), v8:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[7]), 
	         v9:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[8]), v10:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[9]), 
	         v11:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[10]), v12:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[11]), 
	         v13:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[12]), v14:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[13]), 
	         v15:Ext.encode(ValuesFinder.util.Config.getTop15Arr()[14]) 
	     }]);
	     store.sync();
	     
	     	//this is to increment the last page column of Task table
							console.log('this is create new ');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','3');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
	     
		//console.log(historyDateList.getData());
		historyDateList.setData(ValuesFinder.util.Config.getTop15Arr());
        Ext.Viewport.animateActiveItem(choose15View, this.getSlideLeftTransition());
        
    },
    show5Data:function()
    {
    	console.log('show5View');
    	var choose15View = this.getChoose15View(),
        choose5View = this.getChoose5View(),
        history5DataList = this.getHistory5DataList();
        choose15View.setMasked(false);
        
        console.log('this is start of the store..!')
        var store = Ext.getStore('FiveValues');    	
    	store.add([{
	        tid:ValuesFinder.util.Config.getTaskid(), v1:Ext.encode(ValuesFinder.util.Config.getTop5Arr()[0]), v2:Ext.encode(ValuesFinder.util.Config.getTop5Arr()[1]), 
	        v3:Ext.encode(ValuesFinder.util.Config.getTop5Arr()[2]), v4:Ext.encode(ValuesFinder.util.Config.getTop5Arr()[3]),
	         v5:Ext.encode(ValuesFinder.util.Config.getTop5Arr()[4])
	     }]);
	     store.sync();
	     console.log('this is end of the store..!')
        
        
        //this is to increment the last page column of Task table
							console.log('this is create new ');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','4');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
        
		
		history5DataList.setData(ValuesFinder.util.Config.getTop5Arr());
		console.log(ValuesFinder.util.Config.getTop5Arr());
		console.log(history5DataList.getData());
        Ext.Viewport.animateActiveItem(choose5View, this.getSlideLeftTransition());
        
    },createResumeTask: function(){
    	ValuesFinder.util.Config.setCheckResume('1');
    	console.log('Inside the resume listener')
    	
    	var store = Ext.getStore('Task');
			store.load(function(records, operation, success) {
			
			var numRecs = this.getCount();
		  		console.log('page for loop')
			  	var item1 = this.findRecord('tid',numRecs);
			  	this.sync();
			  	console.log(item1.data.iscompleted)
			  	console.log(item1.data.tid)
			  	console.log(item1.data.lastpage)
		  		if(item1.data.iscompleted=='false')
		  		{
		  			if(item1.data.lastpage==1){
		  				console.log('inside 1')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.TopicPanel'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('topicpanel'));
		  			}
		  			if(item1.data.lastpage==3){
		  				console.log('inside 2')
		  				//Populate Data saved in the DB
		  				
		  				var store5 = Ext.getStore('FifteenValues');   
		  				store5.load(function(records, operation, success) {
		  					console.log(ValuesFinder.util.Config.getTaskid());
		  					var item = this.findRecord('tid',ValuesFinder.util.Config.getResumeTaskId());
		  					console.log('this is the decode check for 15 values');
		  						 
		  					var arr15 = new Array(); 		
		  					arr15[0] = Ext.decode(item.data.v1);		
		  					arr15[1] = Ext.decode(item.data.v2);		
		  					arr15[2] = Ext.decode(item.data.v3);		
		  					arr15[3] = Ext.decode(item.data.v4);		
		  					arr15[4] = Ext.decode(item.data.v5);
		  					arr15[5] = Ext.decode(item.data.v6);		
		  					arr15[6] = Ext.decode(item.data.v7);		
		  					arr15[7] = Ext.decode(item.data.v8);		
		  					arr15[8] = Ext.decode(item.data.v9);		
		  					arr15[9] = Ext.decode(item.data.v10);
		  					arr15[10] = Ext.decode(item.data.v11);		
		  					arr15[11] = Ext.decode(item.data.v12);		
		  					arr15[12] = Ext.decode(item.data.v13);		
		  					arr15[13] = Ext.decode(item.data.v14);		
		  					arr15[14] = Ext.decode(item.data.v15);	
		  					ValuesFinder.util.Config.setTop15Arr(arr15);		
		  					
		  					ValuesFinder.app.getController('HistoryController').populateChoose15();
		  					//console.log(ValuesFinder.app.getController('HistoryController').populateChoose5());
		  					
		  					//var history5DataList = Ext.getCmp('history5DataList');
		  					//console.log(item.data)
		  					//var decoded = Ext.decode(item.data);
		  					
		  					//ValuesFinder.util.Config.setTop5Arr(item.data);
		  					//history5DataList.setData(ValuesFinder.util.Config.getTop5Arr());
		  					//Ext.getCmp('history5DataList').setData(item.data);
		  					//history5DataList.setData(item.data);
		  					
		  					//history5DataList.setData(item.data);
							//console.log(ValuesFinder.util.Config.getTop5Arr());
							//console.log(history5DataList.getData());
		  					
		  					});
		  				
		  				
		  				
		  				Ext.Viewport.setActiveItem(Ext.ComponentManager.get('choose15'));
		  				
		  				
		  				
		  			}
		  			if(item1.data.lastpage==4){
		  				console.log('inside 3')
		  				
		  				/*var store5 = Ext.getStore('FiveValues');   
		  				store5.load(function(records, operation, success) {
		  					console.log(ValuesFinder.util.Config.getTaskid());
		  					var item = this.findRecord('tid',ValuesFinder.util.Config.getResumeTaskId());
		  					console.log('this is the decode check for 5 values');
		  					//console.log(Ext.decode(item.data));
		  					console.log(item.data);
		  					//ValuesFinder.util.Config.setTop5Arr(item.data.v1,item.data.v2,item.data.v3,item.data.v4,item.data.v5);
		  					//history5DataList = this.getHistory5DataList();
		  					//history5DataList.setData(item.data);
		  					console.log('finish heloo')
		  					
		  				});*/
		  				
					    	//var choose15View = this.getChoose15View(),
					       // choose5View = this.getChoose5View(),
					        //history5DataList = this.getHistory5DataList();
					        //choose15View.setMasked(false);
					        
					        var store5 = Ext.getStore('FiveValues');   
		  				store5.load(function(records, operation, success) {
		  					console.log(ValuesFinder.util.Config.getTaskid());
		  					var item = this.findRecord('tid',ValuesFinder.util.Config.getResumeTaskId());
		  					console.log('this is the decode check for 5 values');
		  						 
		  					var arr = new Array(); 		
		  					arr[0] = Ext.decode(item.data.v1);		
		  					arr[1] = Ext.decode(item.data.v2);		
		  					arr[2] = Ext.decode(item.data.v3);		
		  					arr[3] = Ext.decode(item.data.v4);		
		  					arr[4] = Ext.decode(item.data.v5);	
		  					ValuesFinder.util.Config.setTop5Arr(arr);		
		  					
		  					ValuesFinder.app.getController('HistoryController').populateChoose5();
		  					//console.log(ValuesFinder.app.getController('HistoryController').populateChoose5());
		  					
		  					//var history5DataList = Ext.getCmp('history5DataList');
		  					//console.log(item.data)
		  					//var decoded = Ext.decode(item.data);
		  					
		  					//ValuesFinder.util.Config.setTop5Arr(item.data);
		  					//history5DataList.setData(ValuesFinder.util.Config.getTop5Arr());
		  					//Ext.getCmp('history5DataList').setData(item.data);
		  					//history5DataList.setData(item.data);
		  					
		  					//history5DataList.setData(item.data);
							//console.log(ValuesFinder.util.Config.getTop5Arr());
							//console.log(history5DataList.getData());
		  					
		  					});
					        
							
							
		  				
		  				Ext.Viewport.setActiveItem(Ext.ComponentManager.get('choose5'));
		  			}
		  			if(item1.data.lastpage==5){
		  				console.log('inside 4')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.IconBar'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('iconBar'));
		  			}
		  			if(item1.data.lastpage==6){
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHealthPanel'));
		  				console.log('inside 5')
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('questionhealthpanel'));
		  			}
		  			if(item1.data.lastpage==7){
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionHealthPanel'));
		  				console.log('inside 6')
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('questionhealthpanel'));
		  			}
		  			if(item1.data.lastpage==8){
		  				console.log('inside 7')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionRelationshipsPanel'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('questionrelationshipspanel'));
		  			}
		  			if(item1.data.lastpage==9){
		  				console.log('inside 8')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionRelationshipsPanel'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('questionrelationshipspanel'));
		  			}
		  			if(item1.data.lastpage==10){
		  				console.log('inside 9')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionCareerPanel'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('questioncareerpanel'));
		  			}
		  			if(item1.data.lastpage==11){
		  				console.log('inside 10')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.QuestionCareerPanel'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('questioncareerpanel'));
		  			}
		  			if(item1.data.lastpage==12){
		  				console.log('inside 11')
		  				Ext.Viewport.setActiveItem(Ext.create('ValuesFinder.view.CompletionPanel'));
		  				//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('CompletionPanel'));
		  			}
		  		}
		  	 
	     	console.log('The task is finished..!')
	  });
    	
    //historyDateList.select(ValuesFinder.util.Config.getTop15Arr()[0]);
    console.log('Resume Finished..!')
    //Ext.Viewport.animateActiveItem(topicpanelView, this.getSlideLeftTransition());
    },
    populateChoose5:function()
    {
    	//console.log(ValuesFinder.util.Config.getTop5Arr());
    	this.getHistory5DataList().setData(ValuesFinder.util.Config.getTop5Arr());
    },
    populateChoose15:function()
    {
    	//console.log(ValuesFinder.util.Config.getTop5Arr());
    	this.getHistoryDateList().setData(ValuesFinder.util.Config.getTop15Arr());
    },
    showlabel1:function()
    {
    	console.log('Inside show label1 func');
        
    },
    showHistoryRecord: function(list, index, element, record){
    	//alert(0);
		console.log("in history controller");	
		
		/*	
		Ext.ComponentManager.get('myHistory').push({
			styleHtmlContent: true,
			title: "test title",	//record.data.catName,
			html: "test content"	//record.data.questName
		})
    	*/
    }

});