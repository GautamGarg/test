Ext.define('PhonegapPerry.controller.MainControler', {
    extend: 'Ext.app.Controller',
    
    requires: [
		
	],
    
    config: {
        refs: {
        	'ShowlistTap': '#ShowlistTap',
        },
        control: {

        	'ShowlistTap' : {
        		itemtap: 'showPost'
        	},
        }
    }
    
});