
Ext.define('Ext.device.Toast', {
    singleton: true,

    requires: [
        'Ext.device.toast.Cordova',
        'Ext.device.toast.Sencha'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;
        if (browserEnv.WebView && browserEnv.Cordova && (navigator.userAgent.match(/Android/i)) == "Android") {
            return Ext.create('Ext.device.toast.Cordova');
        }

        return Ext.create('Ext.device.toast.Sencha');
    }
});
