Ext.define('ValuesFinder.util.Config', {
    singleton : true,

    config : {
        taskCount : 0,
        step1val : 0,
        step2val : 0,
        notesval : 0,
        taskid : 0,
        top15Arr: [],
        top5Arr:[],
        qstnArr:[],
        points:[],
        count:[],
        transfer : 0,
        step1 : 0,
        step2 : 0,
        notes1 : 0,
        step3 : 0,
        step4 : 0,
        notes2 : 0,
        step5 : 0,
        step6 : 0,
        notes3 : 0,
        historyTaskid : 0,
        rec1 :[],
        rec2 :[],
        rec3 :[],
        resumeTaskId:0,
        checkResume : 0,
        que1: 0,
        que2: 0,
        que3:0
    },

    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
        
        var qstnTmp = [];
    	for(var i=0;i<150;i++)
		{
			var obj = new Object();
			obj.qstnFirst = "Question: "+i;			
			qstnTmp.push(obj);	
		}
		this.setQstnArr(qstnTmp);
    }
});