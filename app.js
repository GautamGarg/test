//<debug>
//var SLArray=[];
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'PhonegapPerry': 'app'
});
//</debug>

Ext.application({
    name: 'PhonegapPerry',	
    requires: [
        'Ext.MessageBox','PhonegapPerry.util.Config'
    ],
   // SLArray:[],
	stores:['QuestionStore','ContactStore','QStore'],
	models:['QuestionModel','ContactInfoModel','QModel'],
    views: ['HomePanel','TopTitle','InfoPanel','TopicPanel','BottomToolbar','VideoContainer','MyShortlists','AboutPanel','TermOfUse','ContactPanel'],
	controllers:['MyShortlists2Controller'],
    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    startupImage: {
        '320x460': 'resources/loading/Default.png',        
        '768x1004': 'resources/loading/Default-Portrait~ipad.png'        
    },
    phoneStartupScreen: 'resources/loading/Default.png',
    tabletStartupScreen: 'resources/loading/Default-Portrait~ipad.png',
    
    /*pushVal: function(arg) {
        PhonegapPerry.app.SLArray.push(arg);
    },
    getVal: function() {
        return PhonegapPerry.app.SLArray;
    },*/
    
    launch: function() {
        // Destroy the #appLoadingIndicator element
        console.log(PhonegapPerry.util.Config.getSlarr());
        //this.SLArray=[];
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        Ext.Viewport.add({xtype:'homepanel'},{xtype:'topicpanel'},{xtype:'shortlistpanel'});
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
