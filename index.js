//Useful pages:
//https://developers.google.com/web/fundamentals/web-app-manifest/
//https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/#app-icon-sizes
//https://developer.mozilla.org/en-US/docs/Web/Manifest

const _icons = require( './lib/icons' );
const _devices = require( './lib/devices' );
const _manifest = require( './lib/manifest' );

class Config{

    constructor( options ){

        if( !options || typeof options !== 'object' ){
            options = {};
        }

        this.srcDir = options.srcDir || '';
        delete options.srcDir;

        this.o = options;

        _manifest.icons = _icons.map( icon => {
            return {
                src: `${this.srcDir}/icon-${icon.size}x${icon.size}.png`,
                sizes: `${icon.size}x${icon.size}`,
                type: 'image/png'
            }
        } );

    }

    get icons(){
        return _icons;
    }

    get splashcreens(){
        return _devices;
    }

    get metaTags(){
        return [
            {
                name: 'mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'apple-mobile-web-app-title',
                content: this.o.name || 'WebApp'
            },
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            }
        ].map( tag => `<meta name="${tag.name}" content="${tag.content}" />` );
    }

    get linkTags(){
        return [
            {
                rel: 'apple-touch-icon',
                href: `${this.srcDir}/icon-${_icons[0].size}x${_icons[0].size}.png`
            },
            {
                rel: 'manifest',
                href: 'manifest.json'
            }
        ].map( tag => `<link rel="${tag.rel}" href="${tag.href}" />` );
    }

    get splashscreenTags(){
        return _devices.map( device => `<link rel="apple-touch-startup-image" media="(device-width: ${device.width/device.ratio}px) and (device-height: ${device.height/device.ratio}px) and (-webkit-device-pixel-ratio: ${device.ratio})" href="${this.srcDir}/splashscreen-${device.width}x${device.height}.png" />` );
    }

    get tags(){
        return this.metaTags.concat( this.linkTags, this.splashscreenTags ).join('');
    }

    get manifest(){
        return Object.assign( {}, _manifest, this.o );
    }

}

module.exports = Config;
