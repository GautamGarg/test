Ext.define('PhonegapPerry.store.ContactStore', {
	extend: 'Ext.data.Store',
    //type:'tree',
    
    config: {
     model: 'PhonegapPerry.model.ContactInfoModel',
     storeId:'cStore',
     autoLoad: true,
     sorters: ['continent','region','name'],
     defaultRootProperty: 'items',
            data:[ {
          text: 'About',
          //subtext:'With this app you will identify powerful coaching questions for 15 common management challenges. Remember that connection and relationship are paramount with a coaching approach. You are facilitating THEIR learning and development. You are NOT doing the work for them or providing answers.In the meeting ask your team member what they are thinking. Allow time for the other person to explore the issue. Talk LESS! Use these coaching questions as part of your approach to managing. Ask your team member what it is they are taking away to put into action. Set up a follow up time to check in with how they are going.'
     }, {
         text: 'Contact',
         //subtext: 'Loretta Brown: Lead Coach Info@coachingmentoringcentre.com www.coachingmentoringcentre.com'
     }, {
         text: 'Terms of Use',
         //subtext: 'The Coaching Mentoring Centre The CMC provides customised coaching solutions for building great cultures, strong teams and better mangers and leaders at all levels of your organisation.Our team are globally recognised as experts in Executive and Leadership coaching Peer coaching Manager as Coach training Coaching programme design Building a coaching culture has become critical to success for those who want to attract and retain the best people. Our clients are those who want to be more strategic in how they use mentoring and coaching to enhance effectiveness and leadership. Established in 2001 we have experience working with a diverse range of client organisations around the world, providing programme consultancy and training for mentors, mentees and coordinators.'
     }]
    }
});