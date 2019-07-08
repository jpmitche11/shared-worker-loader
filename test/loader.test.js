import compiler from './compiler.js';

test('Should run the loader', (cb) => {
  compiler('./worker.js')
    .then(stats => {
      const output = stats.toJson().modules[0].source;

      console.log('output: ', output);
    })
    .catch(e => {
      console.error('loader exception', e);
    })
    .finally(cb);
});
