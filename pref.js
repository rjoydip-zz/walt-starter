const Benchmark = require('benchmark');
const chalk = require('chalk');
import wasmCounter from './src/counter.walt';
import nativeCounter from './src/counter';

const log = console.log;
const suite = new Benchmark.Suite;

log(chalk.blue('\nPref started ...'));

suite.add('wasmModule', () => {
    wasmCounter().then(wasmModule => {
        wasmModule.instance.exports.increment();
        wasmModule.instance.exports.increment();
        wasmModule.instance.exports.decrement();
    });
})
.add('nativeModule', () => {
    nativeCounter.increment();
    nativeCounter.increment();
    nativeCounter.decrement();
})
.on('complete', function () {
    log('Fastest is ' + chalk.green(this.filter('fastest').map('name')));
})
.run({ 'async': true }); // don't run it synchronously it will run out of memory