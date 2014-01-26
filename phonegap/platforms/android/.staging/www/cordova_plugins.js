cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.toast/www/toast.js",
        "id": "org.apache.cordova.toast.ToastPlugin",
        "clobbers": [
            "Toast"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.toast": "0.3.5",
    "org.apache.cordova.device": "0.2.7"
}
// BOTTOM OF METADATA
});