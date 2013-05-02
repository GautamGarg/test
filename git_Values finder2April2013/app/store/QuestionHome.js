Ext.define('ValuesFinder.store.QuestionHome', {
	extend: 'Ext.data.Store',
    requires: ['ValuesFinder.model.QtextModel'],
    config: {
     model: 'ValuesFinder.model.QtextModel',
     autoLoad: true,
     sorters: ['continent','region','name'],
     //defaultRootProperty: 'items',
            data: [
                {text: 'Are you investing time in actions that will enable you to develop a wonderful home for yourself and your family?'},
			    {text: 'What is the balance of time you spend at home and at work?'},
			    {text: 'What would make your home environment welcoming and uplifting to return to? '},
			    {text: 'What is required to make your home life feel convivial and warm?'},
			    {text: 'What would make the biggest difference to bring harmony to your home?'}
				
            ]
    }
});

