import { test } from "../../../codebase/index.ts";
import * as cowsay from "cowsay";

export function main(x: string) {
  console.log(cowsay.say({ text: "XXXXXX" }));
  test(x);
  console.log("BAR");
}