# pwa-config
The most actual config for progressive web application. All meta tags and manifest. Useful list of icons and splash screens.

## Install

```
npm i pwa-config --save
```

## How to use?

```
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

## Icons

#### iOS

**540x540** - one icon for all iOS devices

#### Android

**192x192** and **512x512** - two icons for all Android devices
