Ext.define('html5_app.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'html5_app.view.Carousel',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home page'
                },
                
                html: [
                       '<h1>Welcome to My Sencha Touch Home Work App...</h1>',
                       '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
                       
                       
                       "<p><strong>This app includes<strong></p>",
                       "<p><strong>1.A tab bar with 3 icons at the bottom.</strong></p>",
                       "<p><strong>2.Each icon in the tab bar leads to a view with a different UI component.<strong></p>"
                       
                       

                       
                   ].join(""),
                   style: 'background-color:#c4e9f7; text-align:center',
              
            },
            {
                title: 'Carousel',
                iconCls: 'action',
                xtype: 'caro'

            },
            
            {
                xtype: 'nestedlist',
                title: 'Blog',
                iconCls: 'star',
                displayField: 'title',
                

                store: {
                    type: 'tree',

                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],

                    root: {
                        leaf: false
                    },

                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/softwareassociates.in',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },

                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },

                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                        this.getDetailCard().setHtml(post.get('content'));
                    }
                }
            },
            
            {
                title: 'Video',
                iconCls: 'info',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Inspirational Video'
                    },
                    {
                        xtype: 'video',
                        url: 'http://www.youtube.com/watch?v=dePmC_mE-b4'
                        
                    }
                ]
            }
            
            
            
            
            
            
            
        ]
    }
});
