Ext.define("SlideView.view.Main", {
    extend: 'Ext.tab.Panel',
    
    requires: [
        'Ext.dataview.List',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
		'Ext.field.Search',
        'Ext.ux.slide.View',
        'Ext.device.Toast'
    ],
    
    config: {
        fullscreen: true,
        xtype: 'tabpanel',
        tabBarPosition: 'bottom',
        layout: {
            type: 'card',
            animation: {
                type: 'fade',
                direction: 'left'
            }
        },

        items: [{
            xtype: 'slideview',
            title: 'Slide View',
            iconMask: true,
            iconCls: 'look',
            containerSlideDelay: 5,
            slideDuration: 500,
			items: [
				{
					xtype: 'toolbar',
					docked: 'top',
					items: [
						{
							xtype:'button',
							iconCls: 'list',
							handler: function(){
                Ext.device.Toast.shortshow('这是toast.');
							}
						},
						{
							xtype:'component',
							flex: 1
						},
						{
							xtype:'searchfield'
						},
						{
							xtype:'button',
							iconCls: 'search'
						},
						{
							xtype:'component',
							flex: 1
						},
						{
							xtype:'button',
							iconCls: 'list',
							handler: function(){
                Toast.longshow('这是toast.');
							}
						}
					]
				}
			],
            container: {
                items: [{
                    xtype: 'list',
                    itemTpl: '{name}',
                    data: [{
                        name: 'Item 1'
                    },{
                        name: 'Item 2'
                    },{
                        name: 'Item 3'
                    },{
                        name: 'Item 4'
                    },{
                        name: 'Item 5'
                    },{
                        name: 'Item 6'
                    },{
                        name: 'Item 7'
                    },{
                        name: 'Item 8'
                    },{
                        name: 'Item 9'
                    },{
                        name: 'Item 10'
                    }],
                    items: {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Item 4',
                        layout: {
                            pack: 'right'
                        }
                    }
                },{
                    xclass: 'SlideView.view.Item',
                    name:   'Item 1'
                },{
                    xtype: 'container',
                    layout: 'fit',
                    items: [{
                        xtype: 'toolbar',
                        docked: 'top',
                        title:  'Item 2',
                        ui:     'light'
                    },{
                        xclass: 'SlideView.view.CoverList'
                    }]
                },{
                    xclass: 'SlideView.view.Item',
                    name:   'Item 3'
                },{
                    xclass: 'SlideView.view.Item',
                    name:   'Item 5'
                },{
                    xclass: 'SlideView.view.Item',
                    name:   'Item 6'
                }]
            },

            leftContainer: {
                xtype: 'list',
                width: 200,
                data: [{
                    name: 'Item 1'
                },{
                    name: 'Item 2'
                },{
                    name: 'Item 3'
                },{
                    name: 'Item 4'
                },{
                    name: 'Item 5'
                },{
                    name: 'Item 6'
                }],
                itemTpl: '{name}',
                items: [{
                    xtype: 'toolbar',
                    docked: 'top',
                    title: 'Left Menu'
                }],
                listeners: {
                    itemtap: function(list, index) {
                        var slideview   = list.getParent(),
                            container   = slideview.getContainer();

                        container.setActiveItem(index);
                        Ext.defer(slideview.closeContainer, 200, slideview);
                    },
                    initialize: function(list) {
                        list.select(0);
						this.setWidth(document.body.clientWidth * 0.35);
                    }
                }
            },
            
            rightContainer: {
                xtype: 'formpanel',
                width: 200,
                items: [{
                    xtype: 'fieldset',
                    items: [
                      {
                        xtype: 'datepickerfield',
                        label: '日期从'
                      },
                      {
                        xtype: 'datepickerfield',
                        label: '日期到'
                      }
                    ]
                },
                {
                  xtype: 'button',
                  text:'确定'
                }],
				listeners: {
					initialize: function(){
						this.setWidth(document.body.clientWidth * 0.7);
					}
				}
            }

        }]
    }
});
