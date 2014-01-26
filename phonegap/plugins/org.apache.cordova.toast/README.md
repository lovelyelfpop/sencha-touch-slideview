## PhoneGap Toast Plugin

+ Author: Bastien Diederichs (Original : munnadroid, giver)
+ License: The MIT License
+ Tested on PhoneGap/Cordova 3.1.0


## Installation Instruction

1. Copy **\plugins\org.apache.cordova.toast\www\toast.js** to **\assets\www\** folder 

1. Copy **ToastPlugin.java** to your src folder in package **org.apache.cordova.toast** or add all \org\apache\cordova\plugin\ToastPlugin.java if you don't already have the folders created.

1. Edit res\xml\config.xml (or wherever your config.xml is), add 
``` xml
<feature name="ToastPlugin">
    <param name="android-package" value="org.apache.cordova.toast.ToastPlugin" />
</feature>
```
at the end of the file, before `</widget>``

1. Edit assets\www\cordova_plugins.js, add
``` javascript
{
    "file": "plugins/org.apache.cordova.toast/www/toast.js",
    "id": "org.apache.cordova.toast.ToastPlugin",
    "runs": true
}
```
as an element of the array `module.exports`

## How To Use

1. Use Toast.longshow

``` javascript
Toast.longshow(Message [,SuccessCallback, FailureCallback]);
```

2. Use Toast.shortshow

``` javascript
Toast.shortshow(Message [,SuccessCallback, FailureCallback]);
```

## Contributors

Original work by [@munnadroid](https://github.com/munnadroid).
Forked from [@giver](https://github.com/giver).

## Example

``` javascript
Toast.longshow("Hello, I am long Toast");
Toast.shortshow("Hello, I am short Toast");
```
