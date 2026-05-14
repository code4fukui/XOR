# XOR

排他的論理和 (XOR) を用いたシンプルな暗号化ESモジュール。

## 使い方

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

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
