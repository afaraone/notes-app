"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class bakersBoy {
  constructor() {
    this.request = new XMLHttpRequest();
  }

  createNode(element) {
    return document.createElement(element);
  }

}

exports.default = bakersBoy;