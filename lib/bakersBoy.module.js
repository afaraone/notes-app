'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
console.log('IMPORTED!');

class bakersBoy {
  constructor() {
    this.request = new XMLHttpRequest();
  }

  get(url) {
    fetch(url).then(response => response.json()).then(function (data) {
      console.log(data);
    }).catch(error => {
      if (err) {
        console.log('Error!');
      }
    });
  }

}

exports.default = bakersBoy;