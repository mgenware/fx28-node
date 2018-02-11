# fx28-node

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://travis-ci.org/mgenware/fx28-node.svg?branch=master)](http://travis-ci.org/mgenware/fx28-node)
[![npm version](https://badge.fury.io/js/fx28-node.svg)](https://badge.fury.io/js/fx28-node)
[![Node.js Version](http://img.shields.io/node/v/fx28-node.svg)](https://nodejs.org/en/)

Base64 without padding.

## Installation
```sh
yarn add fx28-node
```

## Run tests
```sh
yarn test
```

## Usage
import:
```js
import * as fx28 from 'fx28-node';
// or Node.js style: const fx28 = require('fx28-node');
```

### API
`encodeURIComponent` and Base64 are used during encoding, an optional `xor` parameter can be applied to add obfuscation.

```typescript
function encode(bytes: Buffer): string;
function decode(str: string): Buffer;
```

### Example
```js
const fx28 = require('fx28-node');

const bytes = Buffer.from('abcd', 'utf8');
console.log('original bytes: ', bytes);

const base64Encoded = bytes.toString('base64');
const fx28Encoded = fx28.encode(bytes);
console.log('base64 encoded: ', base64Encoded);
console.log('fx28 encoded: ', fx28Encoded);

console.log('base64 decoded: ', Buffer.from(base64Encoded, 'base64'));
console.log('fx28 decoded: ', fx28.decode(fx28Encoded));
```

Output:
```
original bytes:  <Buffer 61 62 63 64>
base64 encoded:  YWJjZA==
fx28 encoded:  YWJjZA
base64 decoded:  <Buffer 61 62 63 64>
fx28 decoded:  <Buffer 61 62 63 64>
```