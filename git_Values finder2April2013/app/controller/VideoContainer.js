Ext.define('ValuesFinder.controller.VideoContainer', {
    extend: 'Ext.app.Controller',
    requires:['ValuesFinder.util.Config'],
	alias: 'widget.VideoContainer' ,
    
    config: {
        refs: {
        	newTaskBtn: '#newTaskBtn',
        	videoContainer:'#videoContainer',
        	topicpanelView:'#topicsView',
        	videoContainerView:'#videoContainer',
        	label1: '#label1',
        	list1: '#list1',
        	//iconBar: '#iconBar',
        	//choose5View:'#choose5',  
        	historyData:'#historyData',
        	myHistory: '#myHistory',
        	historyRecord: '#historyRecord',
        	healthHtml:'#healthHtml',
        	//resumeTask: '#resumeTask',
        	completeTask: '#completeTask',
        	//history5DataList:'#history5DataList',
        	//historyDataList:'#historyDataList',
        	////historyDateList:'#historyDateList',
        	//history5DataList:'#history5DataList'
        },
        control: {
        	completeTask: {
        		tap: 'createCompleteTask'
        	},
        	//resumeTask: {
        	//	tap: 'createResumeTask'
        	//},
        	"#list1": {
            itemtap: 'onListItemTap',
            showHistoryRecord:'ShowHistoryRecord'
            
        },
        	historyData : {
        		tap: 'createHistory'
        	},
        		newTaskBtn : {
        		tap: 'createNewTask'
        	}  ,
        	label1 : {
        		tap: 'createNewLabel'
        	},
        	videoContainer:{
        		onnNewTaskButtonTap:'createNewTask',
        		hideResumeCommand:'hideResume'
        	}   ,
        	//history5DataList: {
        	//	show5ViewCommand:'createResumeTask'
        	//}       
        }
    },
    hideResume: function(){
    	console.log('inside the the hideResume function')
    },
    createCompleteTask: function(){
    	console.log('this is create new ');
			var store = Ext.getStore('Task');
				store.load(function(records, operation, success) {
			  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
			  item.set('lastpage','12');
			  item.set('iscompleted','true');
			   this.sync();
			   console.log('this is update ');
		     console.log('The task is finished..!')
		Ext.Msg.alert("Your Task Finished Successfully..!");
		  });
    },
    
    /*ShowHistoryRecord:function(htmlData)
    {
    	//console.log(htmlData);
    	Ext.Viewport.animateActiveItem(this.getHistoryRecord(), this.getSlideLeftTransition());
    	this.getHealthHtml().setHtml(htmlData);
    },*/
    onListItemTap: function(dataview, index, target, record, e, options) {
    
    	console.log('this is record')
    	console.log(record);
    	if(record.data.iscompleted == "true")
         {
		//console.log('------start retrieve');
		var store = Ext.getStore('ActionTable');     	
    	store.load(function(records, operation, success) {
        
         //var numRecs = this.getCount();
         //console.log("numRecs --- "+numRecs);
         //console.log('this is from controller '+ValuesFinder.util.Config.getHistoryTaskid());
         var hid = ValuesFinder.util.Config.getHistoryTaskid();
         //console.log('this is the hid '+hid)
         var actionRecord = this.findRecord('tid',hid);
         console.log('this is action record')
         console.log(actionRecord)
         //console.log('this is the tid....'+record.data.tid);
         
         //var tids = actionRecord.data.tid;
		//	console.log('this is tid history check')
		//	console.log(actionRecord.data)
         //var tHtml = '<div style="height:300px; overflow-y:scroll">';
         var tHtml = '<ul>'
          
          if(actionRecord.data.area1id==1||actionRecord.data.area2id==1||actionRecord.data.area3id==1)
          {
          	//Health

				tHtml += '<li>'+'<h1>'+'Your actions for HOME'+'</h1>'+'</li>'
				
		      tHtml += '<li>'+'<h4>'+'What could change in your current health that would further support the life you want?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'How much time a week do you invest in health maintenance and fitness?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'If you had more time what activities would build more health into your life?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'Which part of your health needs the most attention?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'What is the one thing you could do this week that would make the biggest difference to your health?'+'</h4>'+'</li>'
          	
          		tHtml += '<li>'+'<h2>'+'Your Action Step 1'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.step1+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h2>'+'Your Action Step 2'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.step2+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h2>'+'Your Action Notes'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.notes1+'</h4>'+'</li>'
		      
		     // tHtml += '<label>'+''+'</label>'
		     // tHtml += '<label>'+''+'</label>'
		     // tHtml += '<label>'+''+'</label>'
          		
          }
		      
		  if(actionRecord.data.area1id==2||actionRecord.data.area2id==2||actionRecord.data.area3id==2)
          {

				tHtml += '<li>'+'<h1>'+'Your actions for RELATIONSHIP'+'</h1>'+'</li>'
				
		      // Relation
		      tHtml += '<li>'+'<h4>'+'Have you been investing time building connections and friendships?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'Do you engage in activities that are purely social?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'When do you feel most connected to others outside of work?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'Are you making space in your life for a significant relationship?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'Are you treating yourself kindly and investing time in actions that will enable you to be interesting and attractive to others?'+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'What is one extra activity beyond work that you can get involved in with others?'+'</h4>'+'</li>'
          	
          		tHtml += '<li>'+'<h2>'+'Your Action Step 1'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.step3+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h2>'+'Your Action Step 2'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.step4+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h2>'+'Your Action Notes'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.notes2+'</h4>'+'</li>'
          		
		     // tHtml += '<label>'+''+'</label>'
		     // tHtml += '<label>'+''+'</label>'
		     // tHtml += '<label>'+''+'</label>'
          }
		      
		  if(actionRecord.data.area1id==3||actionRecord.data.area2id==3||actionRecord.data.area3id==3)
          {

				tHtml += '<li>'+'<h1>'+'Your actions for CAREER'+'</h1>'+'</li>'
				
		      //Career

		      tHtml += '<li>'+'<h4>'+'What would enable you to feel more excited about your work?'+'</label>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'What are the things that excited you about your work over the last month?'+'</label>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'What bought you to your role at the beginning?'+'</label>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'What did you always imagine your fulfilling work could be?'+'</label>'+'</li>'
		      tHtml += '<li>'+'<h4>'+'When do you feel your most creative?'+'</label>'+'</li>'
          	
          		tHtml += '<li>'+'<h2>'+'Your Action Step 1'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.step5+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h2>'+'Your Action Step 2'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.step6+'</h4>'+'</li>'
		      tHtml += '<li>'+'<h2>'+'Your Action Notes'+'</h2>'+'</li>'
		      tHtml += '<li>'+'<h4>'+actionRecord.data.notes3+'</h4>'+'</li>'
          		
		     // tHtml += '<label>'+''+'</label>'
		     // tHtml += '<label>'+''+'</label>'
		     // tHtml += '<label>'+''+'</label>'
          }
		     		
		      
		    
		      
		      
		     tHtml += '</ul>';
		     console.log(Ext.ComponentManager.get('myHistoryDetails'))
		     //tHtml += '</div>';
		     //console.log(ValuesFinder.app.getController('VideoContainer').ShowHistoryRecord(tHtml));
		     
		  /**/
         //Ext.ComponentManager.get('historyRecord').setHtml(tHtml);
         //Ext.ComponentManager.get('historyRecord').styleHtmlContent = true;
         //Ext.ComponentManager.get('historyRecord').title = record.data.catName;
         
         	Ext.ComponentManager.get('myHistoryDetails').push({
         			scrollable:true,
				   styleHtmlContent: true,
				   title: 'History Details',
				   html:tHtml
		  });
         
         //Ext.Viewport.setActiveItem(Ext.ComponentManager.get('historyRecord'));         
         //Ext.getCmp('healthHtml').html = tHtml;
         //else{
         	//console.log(Ext.ComponentManager.get('historyRecord'));
         	//Ext.Viewport.setActiveItem(Ext.ComponentManager.get('historyRecord'));
         //}
        // console.log(record.data);
        // console.log(record.data.createdate);
         //console.log(this.find('uid','1243456'));
         //console.log(this.findRecord('uid','1243456'));
          
        });
        
		//this.getList1().fireEvent('showHistoryRecord',tHtml);
        //myHistoryRecord = this.getMyHistoryRecord();
		//Ext.Viewport.animateActiveItem(myHistoryRecord, this.getSlideRightTransition());
		//console.log('this is for the data from the list');
    	//var myHistory = this.getMyHistory();
        //choose15View = this.getChoose15View(),
        //historyDateList = this.getHistoryDateList();
       // myHistory.setMasked(false);
        
		//historyDateList.setData(ValuesFinder.util.Config.getTop15Arr());
        //ValuesFinder.util.Config.setTop15Arr(0);
        }
         else
         {
         	Ext.Msg.alert("Task is Incompleted");
         }
},
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },
    
		createAction : function(){
				console.log('this is the lucky test');		
		},
    
    createNewTask : function(){
    	ValuesFinder.util.Config.setCheckResume('0');
    	//alert(0);
		//console.log("createNewTaskr ValuesFinder.util.Config.getTaskCount() = "+ValuesFinder.util.Config.getTaskCount());
		console.log('start...');		
		var store = Ext.getStore('Task');
		store.load(function(records, operation, success) {
			var numRecs = this.getCount();
			ValuesFinder.util.Config.setTaskCount(numRecs);
			var currentDate = new Date();
			ValuesFinder.util.Config.setTaskid(numRecs+1);
			
			//console.log('start retrieve');
		//var store = Ext.getStore('Task');    	
    	//store.load(function(records, operation, success) {
    		//console.log('start fun');
        
         //var numRecs = this.getCount();
         //console.log("numRecs --- "+numRecs);
         //var record = this.findRecord('tid','46');
         //console.log(record);
         //console.log(record.data);
         //console.log(record.data.createdate);
         //console.log(this.find('uid','1243456'));
         //console.log(this.findRecord('uid','1243456'));
          
        //});
			
			
			console.log('this is the task id '+ValuesFinder.util.Config.getTaskid());
			this.add({
		        tid:numRecs+1,createdate:currentDate.toString(),completeddate:'completed',lastupdateddate: 'no',iscompleted:'false',lastpage:'1'
		   });
		   this.sync();
		  // console.log('this is create new ');
		   
		 // var item = this.findRecord('tid','86');
		 // item.set('lastpage','5');
		 //  this.sync();
		  // console.log('this is update ');
		   //console.log(ValuesFinder.app.getController('VideoContainer'));
		   ValuesFinder.app.getController('VideoContainer').showTopicsPanel();
		   
		});	
		
    },
    createHistory : function(){
		console.log('This is manish kumar');
		   
		},
    
    createNewLabel : function(){
    	//alert(0);
		//console.log("createNewTaskr ValuesFinder.util.Config.getTaskCount() = "+ValuesFinder.util.Config.getTaskCount());		
		console.log("manish");
		//console.log('showTopics');
    	  
		},
    showTopicsPanel:function()
    {
    	//console.log('showTopicsPanel.');
        var videoContainerView = this.getVideoContainerView();
        topicpanelView = this.getTopicpanelView();
        videoContainerView.setMasked(false);
		//console.log(topicpanelView);
        Ext.Viewport.animateActiveItem(topicpanelView, this.getSlideLeftTransition());
    }

});