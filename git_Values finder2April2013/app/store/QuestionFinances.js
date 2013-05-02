Ext.define('ValuesFinder.store.QuestionFinances', {
	extend: 'Ext.data.Store',
    requires: ['ValuesFinder.model.QtextModel'],
    config: {
     model: 'ValuesFinder.model.QtextModel',
     autoLoad: true,
     sorters: ['continent','region','name'],
     //defaultRootProperty: 'items',
            data: [
                {text: 'What is your relationship with money? How does a conversation about money make you feel?'},
			    {text: 'Where could you focus first to bring more clarity to your financial situation?'},
			    {text: 'What would more money enable you to achieve more than you are now?'},
			    {text: 'If money were no object what would you like to do first?'},
			    {text: 'What steps are you taking to build financial health?'}
				
            ]
    }
});






