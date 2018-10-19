// Glossary:
//  Bagel = mock object,
//  batch = describe,
//  bag = it,
//  nobag = skip,
//  bite = expect,
//  preheatEach = beforeEach,
//  runEveryPreheatEach = beforeEach's function,
//  preheatAll = beforeAll,
//  cooldownAll = afterAll
// Matchers:
//   toTasteLike(outcome) = toEqual
//   toHaveBeenEaten() = toHaveBeenCalled

const Controller = require('../lib/controller').default;

const {
  bag,
  Bagel,
  batch,
  bite,
  cooldownAll,
  cooldownEach,
  nobag,
  preheatAll,
  preheatEach
} = require('pretzl');

batch('constructor', () => {
  let model;
  let view;
  let controller;

  model = new Bagel('model', [[]]);
  view = new Bagel('view', [['bind']]);
  controller = new Controller(model, view);

  preheatEach(() => {
    // model = new Bagel('model', [[]]);
    // view = new Bagel('view', [['bind']]);
    // controller = new Controller(model, view);
  });

  bag('should assign model and view', () => {
    bite(controller.model).toTasteLike(model);
    bite(controller.view).toTasteLike(view);
  });

  bag('should call view.bind()', () => {
    bite(view, 'bind').toHaveBeenEaten();
  });
});

batch('initialise', () => {
  let model;
  let view;
  let controller;

  model = new Bagel('model', [['loadNotes']]);
  view = new Bagel('view', [['bind'], ['renderNotes']]);
  controller = new Controller(model, view);
  controller.initialise();

  preheatEach(() => {
    // model = new Bagel('model', [[]]);
    // view = new Bagel('view', [['bind']]);
    // controller = new Controller(model, view);
  });

  bag('should call model.loadNotes()', () => {
    bite(model, 'loadNotes').toHaveBeenEaten();
  });

  bag('should call view.renderNotes()', () => {
    console.log(view);
    bite(view, 'renderNotes').toHaveBeenEaten();
  });
});
