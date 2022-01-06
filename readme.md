# unicode-word-regex

> A big regex to match unicode words.

Published as a library so to reduce duplication when several other libraries use this same hack. This library has zero dependencies and the regex weighs 7kB.

Ideally, we could just use modern RegExp Unicode Property Names such as `/\p{Letter}+/u`, which is supported in modern browsers and all Node.js LTS versions. However, [nodejs-mobile](https://github.com/janeasystems/nodejs-mobile) and [Hermes](https://hermesengine.dev) are important runtimes to support. So, unfortunately, we have to expand all possible character ranges. Nodejs-mobile is compiled with `--with-intl=none` https://github.com/JaneaSystems/nodejs-mobile/issues/82 which means that Unicode Property Names are not supported.

The regex in the source code is generated from the script `./generate-regex.js`.

## Install

```
npm install unicode-word-regex
```

## Example

This library exports a function that _generates_ the regex for you.

```js
const getUnicodeWordRegex = require('unicode-word-regex');

const regex = getUnicodeWordRegex();
console.log(regex.test('elämä')); // true
```

## License

Unlicense
