/**
 * @private
 */
Ext.define('Ext.device.toast.Sencha', {
    extend: 'Ext.device.toast.Abstract',
	
	requires: [
		'Ext.Anim',
		'Ext.draw.TextMeasurer'
	],
	
	config: {
		timeoutId: 0
	},
	
	_show: function(content, duration){
		if ( ! content ){
			return false;
		}
		clearTimeout( this.getTimeoutId() );

		var previous_toast = Ext.fly("android_toast_container");
		if ( previous_toast ){
			previous_toast.destroy();
		}
		
		var toast_container = Ext.DomHelper.append(document.body, {
			tag: 'div', 
			id: 'android_toast_container'
		});
		var toast = Ext.DomHelper.append(toast_container, {
			tag: 'div',
			id: 'android_toast',
			html: content
		});
		
		Ext.Anim.run(toast_container, 'fade', {out: false, duration: 500, autoClear: false});

		this.setTimeoutId(Ext.defer(this._hide, duration, this));
		
		return true;
	},
	
	_hide: function(){
		var toast_container = Ext.fly("android_toast_container");

		if ( ! toast_container ){
			return false;
		}

		clearTimeout( this.getTimeoutId() );
		
		Ext.Anim.run(toast_container, 'fade', { 
			out: true, 
			duration: 500, 
			autoClear: false, 
			after: function(){ 
				toast_container.destroy();
			} 
		});
		return true;
	},
	
    shortshow: function(content){
		return this._show(content, 1500);
	},
	
    longshow: function(content){
		return this._show(content, 3000);
	}
});
