require.config({
  paths: {
    helicropter: '../dist/js/helicropter',
    jquery: '../node_modules/jquery/dist/jquery',
    BeFF: '../node_modules/BeFF',
    nbd: '../node_modules/BeFF/bower_components/nbd',
    fineuploader: '../node_modules/BeFF/bower_components/fineuploader/dist'
  }
});

define([
  'jquery',
  'helicropter'
], function($, Helicropter) {
  'use strict';

  var cropper = new Helicropter({
    canvasSize: {
      width: 432,
      height: 300
    },
    cropSize: {
      width: 320,
      height: 250
    }
  });
  cropper.render($('.js-cropper'));
});
