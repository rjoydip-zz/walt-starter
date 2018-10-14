import Benchmark from 'benchmark';
import makeCounter from './src/counter.walt';
import nativeCounter from './src/counter';

const suite = new Benchmark.Suite;

suite.add('wasmModule', function() {
    makeCounter().then(wasmModule => {
        wasmModule.instance.exports.increment();
        wasmModule.instance.exports.increment();
        wasmModule.instance.exports.decrement();
    })
    .add('nativeModule', function() {
        nativeModule.increment();
        nativeModule.increment();
        nativeModule.decrement();
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true })
});