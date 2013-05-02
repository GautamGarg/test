Ext.define('ValuesFinder.controller.ActionController', {
    extend: 'Ext.app.Controller',
    requires:['ValuesFinder.util.Config'],
    
    config: {
        refs: {
        	newTaskBtn: '#newActionBtn',
        	actionStepsView:'#actionSteps',
        	actionStep1:'#actionStep1',
        	actionStep2:'#actionStep2',
        	actionStep3:'#actionStepNote'
        },
        control: {
        		newTaskBtn : {
        		tap: 'createNewTask'
        	},  
        	actionStepsView:{
        		actionStep1Command:'createNewTask'
        	}
        }
    },
    createNewTask : function(){
    	
    	//this is to increment the last page column of Task table
							console.log('this is create new in the action step 1');
								var store = Ext.getStore('Task');
									store.load(function(records, operation, success) {
								  var item = this.findRecord('tid',ValuesFinder.util.Config.getTaskid());
								  item.set('lastpage','7');
								   this.sync();
								   console.log('this is update ');
							    
							     console.log('The task is finished..!')
							  });
    	
    	//alert(0);
		console.log("createNewTaskr ValuesFinder.util.Config.getStep1val() = "+ValuesFinder.util.Config.getStep1val());
    							console.log('inside the listener to submit button');
    							console.log('This is the task id '+ValuesFinder.util.Config.getTaskid())
    							// add a Record
    							var st1 = this.getActionStep1().getValue();
    							var st2 = this.getActionStep2().getValue();
    							var nt1 = this.getActionStep3().getValue();
    							console.log('this is var '+ st1)
    							console.log('this is var '+ st2)
    							console.log('this is var '+ nt1)
    							ValuesFinder.util.Config.setStep1(st1);
    							ValuesFinder.util.Config.setStep2(st2);
    							ValuesFinder.util.Config.setNotes1(nt1);
    							
    							console.log(ValuesFinder.util.Config.getStep1());
								console.log(ValuesFinder.util.Config.getStep2());
								console.log(ValuesFinder.util.Config.getNotes1());
    							//console.log('this is the value check '+this.getActionStep1().getValue());
							     Ext.getStore('ActionTable').add([{ 
							        area1id:'1',tid:ValuesFinder.util.Config.getTaskid(),step1:this.getActionStep1().getValue(),step2:this.getActionStep2().getValue(),notes1:this.getActionStep3().getValue() 
							     }]);
							 
							     // write the record to disk
							     Ext.getStore('ActionTable').sync();
							     console.log('The task is finished..!')
    							
    }

});