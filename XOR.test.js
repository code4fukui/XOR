import * as t from "https://deno.land/std/testing/asserts.ts";
import { XOR } from "./XOR.js";

Deno.test("simple", () => {
	const data = new TextEncoder().encode("ABCDEFGあいうえお");
	const pass = new Uint8Array([1, 3, 5]);
	const enc = XOR.convert(data, pass);
	//console.log(new TextDecoder().decode(enc));
	const dec = XOR.convert(data, pass);
	t.assertEquals(data, dec);
});
