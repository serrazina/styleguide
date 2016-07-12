(function() {
  'use strict';

  require('harp').server(__dirname, { port: process.env.PORT || 5000 }, function() {});

})();
