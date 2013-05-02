Ext.define('PhonegapPerry.controller.MyShortlists2Controller', {
    extend: 'Ext.app.Controller',
    
    requires: [
		'PhonegapPerry.util.Config'
	],
    
    config: {
        refs: {
        	cList: '#categoryNames',        	
        	cfList: '#categoryNameLeaf',
        	cButton: '#ShortlistQuestion',
        	bButton: '#backToTopic'
            
        },
        control: {
					'cList' : {
					itemtap: 'showQuest'
					},
		    		'cButton' : {
		    		tap: 'shortlistTap'
		    		},
		    		'bButton' : {
		    		tap: 'onBackButton'
		    		}            
        }
    },
    showQuest: function(list, index, element, record){    
		
    	var tHtml = '<ul>';
    	
    	for(var i=0;i<record.data.questNames.length;i++)
    	{
    		tHtml += '<li>'+record.data.questNames[i].text+'</li>'
    	}
    	tHtml += '</ul>';
    	
		Ext.ComponentManager.get('shortlistpanel').push({
			styleHtmlContent: true,
			title: record.data.catName,
			html:tHtml
		}) 	
    },
    shortlistTap: function(){ 
    	  	       
    	  	       
    	 Ext.Viewport.setActiveItem(this.getShortlistpanel());
       	/*Ext.Viewport.setActiveItem('shortlistpanel');
       	
       	console.log("PP: "+PhonegapPerry.util.Config.getSlarr());      	
        var cList = this.getCList(); 
      
    	var arr = PhonegapPerry.util.Config.getSlarr();
    	console.log("arr: "+arr);
    	cList.refreshHeightOnUpdate  = true;   	
    
    	cList.refresh();
		cList.setData(arr);
		console.log("cList getData>>>: "+cList.getData());
		cList.refresh();    	
    	console.log("cList getData>>>: "+cList.getData());
    	
    	//cList.update(arr);    	
    	
    	cList.refresh();
    	console.log("cList length>>>: "+cList.getStore().getCount());
    	
    	//cList.hide();
    	//cList.show();
    	 
    	
    	
    	//console.log(cList.getData());
    	//console.log(cList);
    	
    	
    	//Ext.ComponentManager.get('myShortlist').refresh();
    	
    	//console.log(cList.itemtap);
    	/*if(!cList.itemtap)
    	{
    		cList:{
	    		itemtap: 'showQuest'
	    	}
    	}*/
    	
		//Ext.Viewport.setActiveItem('shortlistpanel');
		
		 //cfList = this.getCfList();
    	
		 //cfList.setData([]);
    	
    	//console.log(cList.getData());
    },
   /* onBackButton: function(){
    	var ccList = this.getCList();
    	console.log("Back Button clicked");
    	//console.log("length>>>: "+ccList.getStore().getCount());
    	/*
    	var tArray = new Array();
    	tArray = PhonegapPerry.util.Config.getSlarr();
    	console.log("tArray before: "+tArray);
    	
    	PhonegapPerry.util.Config.getSlarr().length = 0;
    	tArray = PhonegapPerry.util.Config.getSlarr();
    	console.log("tArray after: "+tArray);
    	
    	Ext.Viewport.setActiveItem('topicpanel');    
    }*/

});