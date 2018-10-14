# walt-starter

Walt(an alternative syntax for WebAssembly text format) project Starter

## What is Walt?

[Walt](https://github.com/ballercat/walt) is an alternative syntax for WebAssembly text format. It's an experiment for using JavaScript syntax to write to as `close to the metal` as possible. It's JavaScript with rules. .walt files compile directly to WebAssembly binary format.

## Locally installation

```
$ git clone https://github.com/rjoydip/walt-starter
$ cd walt-starter
$ npm install
$ npm start
```

## Basic use

- Dynamic import

```js
wasmCounter().then(wasmModule => {
  console.log('wasmModule', wasmModule.instance.exports.increment()) // 1
  console.log('wasmModule', wasmModule.instance.exports.increment()) // 2
  console.log('wasmModule', wasmModule.instance.exports.decrement()) // 1
});
```

- Asynchronus

```js
(async () => {
  const wasmModule = await wasmCounter();
  console.log('wasmModule', wasmModule.instance.exports.increment()) // 1
  console.log('wasmModule', wasmModule.instance.exports.increment()) // 2
  console.log('wasmModule', wasmModule.instance.exports.decrement()) // 1
})();
```

> Note: Fastest is wasmModule

## License

MIT © [Joydip Roy](https://raw.githubusercontent.com/rjoydip/walt-starter/master/license)