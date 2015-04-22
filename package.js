Package.describe({
  name: 'q42:autoform-markdown',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['templating', 'ui', 'blaze'], 'client');
  api.use(['chuangbo:marked', 'aldeed:autoform'], 'client');
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
