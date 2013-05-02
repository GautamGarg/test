Ext.define('ValuesFinder.store.QuestionCareer', {
	extend: 'Ext.data.Store',
    requires: ['ValuesFinder.model.QtextModel'],
    config: {
     model: 'ValuesFinder.model.QtextModel',
     autoLoad: true,
     sorters: ['continent','region','name'],
     //defaultRootProperty: 'items',
            data: [
                {text: 'What would enable you to feel more excited about your work?'},
			    {text: 'What are the things that excited you about your work over the last month?'},
			    {text: 'What bought you to your role at the beginning?'},
			    {text: 'What did you always imagine your fulfilling work could be?'},
			    {text: 'When do you feel your most creative?'}
				
            ]
    }
});
