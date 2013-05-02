Ext.define('ValuesFinder.store.QuestionSelf', {
	extend: 'Ext.data.Store',
    requires: ['ValuesFinder.model.QtextModel'],
    config: {
     model: 'ValuesFinder.model.QtextModel',
     autoLoad: true,
     sorters: ['continent','region','name'],
     //defaultRootProperty: 'items',
            data: [
                {text: 'When do you have time just for yourself?'},
			    {text: 'What are the activities that are not work or family that bring you enjoyment?'},
			    {text: 'If you had more time what things would you do just for your own delight?'},
			    {text: 'What makes you feel most alive?'},
			    {text: 'When did you last have a quiet half an hour in solitude?'}
				
            ]
    }
});

