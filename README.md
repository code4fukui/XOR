# XOR

- a simple encryption ES module using exclusive or (XOR)
- XORを使ったシンプルな暗号化ESモジュールです

## Usage

```javascript
import { XOR } from "https://code4fukui.github.io/XOR/XOR.js";

const org = "ABCDEFGあいうえお";
console.log("org", org);
const data = new TextEncoder().encode(org);
const pass = new Uint8Array([1, 3, 5]);
const enc = XOR.convert(data, pass);
console.log("convert", new TextDecoder().decode(enc));
const dec = XOR.convert(data, pass);
console.log("convert", new TextDecoder().decode(dec));
```
