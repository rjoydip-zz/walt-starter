import makeCounter from './counter.walt';

makeCounter().then(wasmModule => {
  console.log('wasmModule', wasmModule.instance.exports.increment()) // 1
  console.log('wasmModule', wasmModule.instance.exports.increment()) // 2
  console.log('wasmModule', wasmModule.instance.exports.decrement()) // 1
});


import('./counter.js').then(nativeModule => {
  console.log('nativeModule', nativeModule.increment()) // 1
  console.log('nativeModule', nativeModule.increment()) // 2
  console.log('nativeModule', nativeModule.decrement()) // 1
});

