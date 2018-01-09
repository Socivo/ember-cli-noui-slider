/* eslint-env node */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
module.exports = {
  name: 'ember-cli-noui-slider',
  included(app) {
    this._super(this, arguments);    

    app.import('vendor/nouislider.min.js');
    app.import('vendor/nouislider.min.css');
  },
  treeForVendor(tree) {
    let noUISliderJSPath = path.join(this.app.project.root, 'node_modules', 'nouislider', 'distribute');
    let vendorTree = new Funnel(noUISliderJSPath, {
      files: ['nouislider.min.js']
    });
    return vendorTree;
  },
  treeForStyles(tree) {
    let noUISliderCSSPath = path.join(this.app.project.root, 'node_modules', 'nouislider', 'distribute');
    let styleTree = new Funnel(noUISliderCSSPath, {
      include: ['*.min.css'],
      destDir: 'vendor'
      
    });
    return styleTree;
  },
  isDevelopingAddon() {
    return true;
  }
};
