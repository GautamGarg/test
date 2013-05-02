Ext.define('ValuesFinder.controller.ActionController3', {
    extend: 'Ext.app.Controller',
    requires:['ValuesFinder.util.Config','ValuesFinder.model.ActionStepsTable','ValuesFinder.store.ActionStepsTable'],
    
    config: {
        refs: {
        	newActionBtn3: '#newActionBtn3'    ,
        	actionStepsView:'#actionSteps3',
        	actionStep1:'#actionStep31',
        	actionStep2:'#actionStep32',
        	actionStep3:'#actionStepNote3'
        },
        control: {
        		newActionBtn3 : {
        		tap: 'createNewTask'
        	},  
        	actionStepsView:{
        		actionStep1Command:'createNewTask'
        	}
        }
    },
    createNewTask : function(){
    	
    	//this is to increment the last page column of Task table
							console.log('this is create new in action step 3');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','11');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
    	
    	//alert(0);
		console.log("createNewTaskr ValuesFinder.util.Config.getStep1val() = "+ValuesFinder.util.Config.getStep1val());
			console.log('inside the listener to submit button Action Controller 3');
			console.log('This is the task id '+ValuesFinder.util.Config.getTaskid())
			// add a Record  
			var st1 = this.getActionStep1().getValue();
			var st2 = this.getActionStep2().getValue();
			var nt1 = this.getActionStep3().getValue();
			ValuesFinder.util.Config.setStep5(this.getActionStep1().getValue());
			ValuesFinder.util.Config.setStep6(this.getActionStep2().getValue());
			ValuesFinder.util.Config.setNotes3(this.getActionStep3().getValue());
			
			
			/*Ext.getStore('ActionTable').add({tid:ValuesFinder.util.Config.getTaskid(),area1id:'1',area2id:'2',area3id:'3',step1:ValuesFinder.util.Config.getStep1(),step2:ValuesFinder.util.Config.getStep2(),notes1:ValuesFinder.util.Config.getNotes1(),step3:ValuesFinder.util.Config.getStep3(),step4:ValuesFinder.util.Config.getStep4(),notes2:ValuesFinder.util.Config.getNotes2(),step5:ValuesFinder.util.Config.getStep5(),step6:ValuesFinder.util.Config.getStep6(),notes3:ValuesFinder.util.Config.getNotes3() 
		     });
							 
							     // write the record to disk
							     Ext.getStore('ActionTable').sync();*/
							    
			    console.log('this is create new ');
				var store = Ext.getStore('ActionTable');
					store.load(function(records, operation, success) {
				  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
				  item.set('area3id','3');
				  item.set('step5',st1);
				  item.set('step6',st2);
				  item.set('notes3',nt1);
				   this.sync();
				   console.log('this is update ');
			    
			     console.log('The task is finished..!')
			  });
							    
    }

});