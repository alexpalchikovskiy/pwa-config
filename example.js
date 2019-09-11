const Config = require( './index' );

const _config = new Config( {
    name: 'My Application',
    srcDir: 'images/pwa'
} );

let result = _config.splashcreens.map( d => `**splashscreen-${d.width}x${d.height}.png** - for ${d.name}
    
` ).join('');

console.log( result );
