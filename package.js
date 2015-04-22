Package.describe({
  name: 'q42:autoform-markdown',
  version: '0.0.1',
  summary: 'A simple markdown textarea with preview using perak:markdown',
  git: 'https://github.com/Q42/meteor-autoform-markdown',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['templating', 'ui', 'blaze'], 'client');
  api.use(['perak:markdown', 'aldeed:autoform'], 'client');
  api.addFiles([
    'markdown.html',
    'markdown.css',
    'jquery.selection.js',
    'markdown.js'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('q42:autoform-markdown');
});
