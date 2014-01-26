/**
 * @private
 */
Ext.define('Ext.device.toast.Cordova', {
    alternateClassName: 'Ext.device.toast.PhoneGap',
    extend: 'Ext.device.toast.Abstract',
	
    shortshow: function(content) {
        /*var t = toast;
        if(t == undefined)
          toast = cordova.require("org.apache.cordova.toast.toast");*/
        Toast.shortshow(content);
    },

    longshow: function(config) {
      /*var t = toast;
        if(t == undefined)
          toast = cordova.require("org.apache.cordova.toast.toast");*/
      Toast.longshow(content);
    }
});
