import wasmCounter from './counter.walt';

/**
 * Wat (wasm) way
 */
wasmCounter().then(wasmModule => {
  console.log('▁▂▃▄ wasmModule dynamic import ▄▃▂▁');
  console.log('wasmModule dynamic import', wasmModule.instance.exports.increment()); // 1
  console.log('wasmModule dynamic import', wasmModule.instance.exports.increment()); // 2
  console.log('wasmModule dynamic import', wasmModule.instance.exports.decrement()); // 1
});

(async () => {
  const wasmModule = await wasmCounter();
  console.log('▁▂▃▄ wasmModule async ▄▃▂▁');
  console.log('wasmModule async', wasmModule.instance.exports.increment()); // 1
  console.log('wasmModule async', wasmModule.instance.exports.increment()); // 2
  console.log('wasmModule async', wasmModule.instance.exports.decrement()); // 1
})();

/**
 * Native way
 */
import('./counter.js').then(nativeModule => {
  console.log('▁▂▃▄ nativeModule dynamic import ▄▃▂▁');
  console.log('nativeModule dynamic import', nativeModule.increment()); // 1
  console.log('nativeModule dynamic import', nativeModule.increment()); // 2
  console.log('nativeModule dynamic import', nativeModule.decrement()); // 1
});

(async () => {
  const nativeModule = await import('./counter.js');
  console.log('▁▂▃▄ nativeModule async ▄▃▂▁');
  console.log('nativeModule async', nativeModule.increment()); // 1
  console.log('nativeModule async', nativeModule.increment()); // 2
  console.log('nativeModule async', nativeModule.decrement()); // 1
})();
