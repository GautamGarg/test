Ext.define('ValuesFinder.controller.ActionController2', {
    extend: 'Ext.app.Controller',
    requires:['ValuesFinder.util.Config'],
    
    config: {
        refs: {
        	newActionBtn2: '#newActionBtn2'    ,
        	actionStepsView:'#actionSteps2',
        	actionStep1:'#actionStep21',
        	actionStep2:'#actionStep22',
        	actionStep3:'#actionStepNote2'
        },
        control: {
        		newActionBtn2 : {
        		tap: 'createNewTask'
        	},  
        	actionStepsView:{
        		actionStep1Command:'createNewTask'
        	}
        }
    },
    createNewTask : function(){
    	
    	//this is to increment the last page column of Task table
							console.log('this is create new in action step 2');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','9');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
    	
    	//alert(0);
		console.log("createNewTaskr ValuesFinder.util.Config.getStep1val() = "+ValuesFinder.util.Config.getStep1val());
    							console.log('inside the listener to submit button');
    							console.log('This is the task id '+ValuesFinder.util.Config.getTaskid())
    							var st1 = this.getActionStep1().getValue();
    							var st2 = this.getActionStep2().getValue();
    							var nt1 = this.getActionStep3().getValue();
    							console.log('this is var '+ st1)
    							console.log('this is var '+ st2)
    							console.log('this is var '+ nt1)
    							ValuesFinder.util.Config.setStep3(st1);
    							ValuesFinder.util.Config.setStep4(st2);
    							ValuesFinder.util.Config.setNotes2(nt1);
    							
    							console.log(ValuesFinder.util.Config.getStep3())
								console.log(ValuesFinder.util.Config.getStep4())
								console.log(ValuesFinder.util.Config.getNotes2())
					    							
    							
    							// add a Record
							    /* Ext.getStore('ActionTable').add([{ 
							        areaid:'2',tid:ValuesFinder.util.Config.getTaskid(),step1:this.getActionStep1().getValue(),step2:this.getActionStep2().getValue(),notes:this.getActionStep3().getValue() 
							     }]);
							 
							     // write the record to disk
							     Ext.getStore('ActionTable').sync();*/
							     console.log('this is create new ');
		   						var store = Ext.getStore('ActionTable');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('area2id','2');
								  item.set('step3',st1);
								  item.set('step4',st2);
								  item.set('notes2',nt1);
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
    							
    }

});