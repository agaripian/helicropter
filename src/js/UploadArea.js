import $ from 'jquery';
import CloudUploader from 'BeFF/Component/CloudUploader';
import View from 'BeFF/View';

import template from '../templates/upload-area.mustache';

const Uploader = CloudUploader.extend({
  init($uploadBtn, options) {
    let config = {};

    if (!options) {
      options = $uploadBtn;
      $uploadBtn = null;
    }
    else {
      config.button = $uploadBtn;
    }

    $.extend(config, {
      cors: {
        expected: true,
        sendCredentials: true
      },
      validation: {
        sizeLimit: 8388608,
        allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'],
        image: {
          minHeight: 316,
          minWidth: 404
        },
        acceptFiles: 'image/*'
      }
    }, options);

    return this._super(config);
  }
});

export default View.extend({
  mustache: template,

  init(options) {
    this._requestOptions = options;

    this._super();
  },

  rendered() {
    this._uploader = new Uploader(this.$view[0], this._requestOptions);
  }
});

