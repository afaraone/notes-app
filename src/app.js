import BakersBoy from './bakersBoy.js';
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

(async () => {
  let bakersBoy = new BakersBoy();
  let model = new Model(bakersBoy);
  let view = new View();
  let controller = new Controller(model, view);
  controller.initialise();
})();
