/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
/*
app.import({
  development: 'vendor/bootstrap/dist/css/bootstrap.css',
  production: 'vendor/bootstrap/dist/css/bootstrap.min.css'
});
*/

app.import('vendor/ember-data/ember-data.js');
app.import({
  development: 'vendor/bootstrap/dist/js/bootstrap.js',
  production: 'vendor/bootstrap/dist/js/bootstrap.min.js'
});

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});


module.exports = app.toTree();
