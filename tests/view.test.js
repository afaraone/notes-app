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

batch('', () => {
  bag('', () => {
    bite(1).toTasteLike(1);
  });
});
