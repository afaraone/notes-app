"use strict";

var _bakersBoyModule = _interopRequireDefault(require("./bakersBoy.module.js"));

var _model = _interopRequireDefault(require("./model.js"));

var _view = _interopRequireDefault(require("./view.js"));

var _controller = _interopRequireDefault(require("./controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  let bakersBoy = new _bakersBoyModule.default();
  let model = new _model.default(bakersBoy);
  let view = new _view.default();
  let controller = new _controller.default(model, view);
  controller.initialise();
})();