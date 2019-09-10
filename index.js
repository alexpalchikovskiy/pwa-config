//Useful pages:
//https://developers.google.com/web/fundamentals/web-app-manifest/
//https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/#app-icon-sizes
//https://developer.mozilla.org/en-US/docs/Web/Manifest

// need to use getter

const _icons = require( './lib/icons' );
const _devices = require( './lib/devices' );

class Config{
    
        constructor( options ){
    
            if( !options || typeof options !== 'object' ){
                options = {};
            }
    
            options.icons_href = options.icons_href || 'img/icon-';
            options.splashscreens_href = options.splashscreens_href || 'img/splashscreen-';
    
            const icons = _icons.map( icon => {
                return {
                    src: `img/icon-${icon.size}x${icon.size}.png`,
                    sizes: `${icon.size}x${icon.size}`,
                    type: 'image/png'
                }
            } );
    
            const meta = [
                {
                    name: 'mobile-web-app-capable',
                    content: 'yes'
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: options.name || 'App'
                },
                {
                    name: 'apple-mobile-web-app-capable',
                    content: 'yes'
                }
            ].map( tag => `<meta name="${tag.name}" content="${tag.content}" />` );
    
            const link = [
                {
                    rel: 'apple-touch-icon',
                    href: `${options.icons_href}${this.icons[0].size}x${this.icons[0].size}.png`
                },
                {
                    rel: 'manifest',
                    href: 'manifest.json'
                }
            ].map( tag => `<link rel="${tag.rel}" href="${tag.href}" />` );
    
            const devices = _devices.map( device => `<link rel="apple-touch-startup-image" 
                            media="(device-width: ${device.width/device.ratio}px) and 
                                   (device-height: ${device.height/device.ratio}px) and 
                                   (-webkit-device-pixel-ratio: ${device.ratio})" 
                            href="${options.splashscreens_href}${device.width}x${device.height}.png" />` );
    
            this.icons = _icons;
            this.devices = _devices;
            this.tags = meta.concat( link, devices ).join('');
            this.manifest = {
                name: options.name || 'App',
                short_name: options.short_name || options.name || 'App',
                icons: icons,
                gcm_sender_id: '',
                gcm_user_visible_only: true,
                start_url: options.start_url || '/?utm_source=standalone&utm_medium=pwa',
                permissions: [
                    'gcm'
                ],
                orientation: options.orientation || 'any',
                display: options.display || 'standalone',
                theme_color: options.theme_color || 'black',
                background_color: options.background_color || options.theme_color || 'black'
            };
    
        }
    
    }
    
    module.exports = Config;