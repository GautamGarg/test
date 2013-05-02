Ext.define('ValuesFinder.store.QuestionRelationships', {
	extend: 'Ext.data.Store',
    requires: ['ValuesFinder.model.QtextModel'],
    config: {
     model: 'ValuesFinder.model.QtextModel',
     autoLoad: true,
     sorters: ['continent','region','name'],
     //defaultRootProperty: 'items',
            data: [
                {text: 'Have you been investing time building connections and friendships?'},
			    {text: 'Do you engage in activities that are purely social?'},
			    {text: 'When do you feel most connected to others outside of work?'},
			    {text: 'Are you making space in your life for a significant relationship?'},
			    {text: 'Are you treating yourself kindly and investing time in actions that will enable you to be interesting and attractive to others?'},
			    {text: 'What is one extra activity beyond work that you can get involved in with others?'}
				
            ]
    }
});