Package.describe({
  name   : 'nitya:mdl',
  version: '1.0.0',
  summary: 'Google Material Design Lite v 1.0 (http://www.getmdl.io) packaged for Meteor',
  git    : '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(
  		['material.min.js','material.min.css'],
  		'client'
  );
});

