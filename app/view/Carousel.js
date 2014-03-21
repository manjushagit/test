// JavaScript Document
/**
 * Demonstrates how use an Ext.Carousel in vertical and horizontal configurations
 */
Ext.define('html5_app.view.Carousel', {
    extend: 'Ext.Container',
    xtype: 'caro',

    requires: [
        'Ext.carousel.Carousel'
    ],

    config: {
        cls: 'cards',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [
		{
	            docked: 'top',
		    xtype: 'titlebar',
                    title: 'Horizontal Carousel UI'
},
		{
            xtype: 'carousel',
	     ui: 'light',
           
            items: [{
            	html: [
                       '<h1>Slide 1</h1>',
                       '<br />',
                       '<img height=260 src="http://docs.sencha.com/touch/2.3.1/touch-build/examples/carousel/resources/photos/Food/1.jpg" />',
                      ].join(""),
                style: 'background-color:#2ea2cc;color:white;font-size:20px; padding: 30px',
                cls: 'card'
            },
            {
            	html: [
                       '<h1>Slide 2</h1>',
                       '<br />',
                       '<img height=260 src="http://docs.sencha.com/touch/2.3.1/touch-build/examples/carousel/resources/photos/Food/2.jpg" />',
                      ].join(""),
                style: 'background-color:#f07e9e;color:white;font-size:20x;padding: 30px',
                cls: 'card'
            },
            {
            	html: [
                       '<h1>Slide 3</h1>',
                       '<br />',
                       '<img height=260 src="http://docs.sencha.com/touch/2.3.1/touch-build/examples/carousel/resources/photos/Food/3.jpg" />',
                      ].join(""),
                style: 'background-color:#7e7ef0;color:white;font-size:20px;padding: 30px',
                cls: 'card'
            },
            {
            	html: [
                       '<h1>Slide 5</h1>',
                       '<br />',
                       '<img height=260 src="http://docs.sencha.com/touch/2.3.1/touch-build/examples/carousel/resources/photos/Food/3.jpg" />',
                      ].join(""),
                style: 'background-color:#2ea2cc;color:white;font-size:20px;padding: 30px',
                cls: 'card'
            }
            
            ]
        }]
    }
});