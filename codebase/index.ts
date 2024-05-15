import * as cowsay from "cowsay";
export function test(text: string) {
  console.log(cowsay.say({ text }));
}
