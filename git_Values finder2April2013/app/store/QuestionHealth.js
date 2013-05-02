Ext.define('ValuesFinder.store.QuestionHealth', {
	extend: 'Ext.data.Store',
    requires: ['ValuesFinder.model.QtextModel'],
    config: {
     model: 'ValuesFinder.model.QtextModel',
     autoLoad: true,
     sorters: ['continent','region','name'],
     //defaultRootProperty: 'items',
            data: [
                {text: 'What could change in your current health that would further support the life you want?'},
			    {text: 'How much time a week do you invest in health maintenance and fitness?'},
			    {text: 'If you had more time what activities would build more health into your life?'},
			    {text: 'Which part of your health needs the most attention?'},
			    {text: 'What is the one thing you could do this week that would make the biggest difference to your health?'}
				
            ]
    }
});
