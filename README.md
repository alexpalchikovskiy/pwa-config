# pwa-config
The most actual config for progressive web application. All meta tags and manifest. Useful list of icons and splash screens.

[Also try Gulp solution](https://www.npmjs.com/package/gulp-pwa)

## Install

```
npm i pwa-config --save
```

## How to use?

```javascript
const Config = require( 'pwa-config' );

let options = {
  srcDir: 'images/pwa',
  name: 'My Application',
  theme_color: '#9cff03'
}

const _config = new Config( options );

console.log( _config.tags ); // String
console.log( _config.manifest ); // Object

console.log( _config.icons ); // Array of objects
console.log( _config.splashscreens ); // Array of objects
```

## Options

**srcDir** - directory or url to icons and splashscreens images

**name** - name of your web application

**theme_color** - statusbar color (only Android)

**background_color** - background color when launching app (only Android, because iOS use splashscreen image)

**start_url** - home page of your app, by default */?utm_source=standalone&utm_medium=pwa*, utm_source and utm_medium using for tracking by analytics services

**orientation** - can be *any* *natural*, *landscape*, *landscape-primary*, *landscape-secondary*, *portrait*, *portrait-primary*, *portrait-secondary*, by default *any*

**display** - by default *standalone*, [more about display](https://developer.mozilla.org/en-US/docs/Web/Manifest/display)

[All Web App Manifest options](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## [Icons](#anchors-in-markdown)

You need only 3 icons for all devices:

**icon-540x540.png** - all iOS devices

**icon-192x192.png** - part of Android devices

**icon-512x512.png** - another part of Android devices:)

## [Splashscreens](#splashscreens)

You need splashscreens only for iOS devices, because Android using *background_color* option and icon for display splashscreen.
    
**splashscreen-1242x2688.png** - for iPhone Xs Max, 11 Pro Max
    
**splashscreen-828x1792.png** - for iPhone Xr, 11
    
**splashscreen-1125x2436.png** - for iPhone X, Xs, 11 Pro
    
**splashscreen-1242x2208.png** - for iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus
    
**splashscreen-750x1334.png** - for iPhone 8, 7, 6s, 6
    
**splashscreen-640x1136.png** - for iPhone 5, 5s, SE
    
**splashscreen-1620x2160.png** - for iPad
    
**splashscreen-2048x2732.png** - for iPad Pro 12.9
    
**splashscreen-1668x2388.png** - for iPad Pro 11
    
**splashscreen-1668x2224.png** - for iPad Pro 10.5
    
**splashscreen-1536x2048.png** - for iPad Mini, Air
