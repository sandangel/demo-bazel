const div = document.querySelector("#bazel") as HTMLDivElement;

import { getText } from "./functions";
import { hello } from "./utils";

if (getText(div) === "Hello Bazel") {
  div.innerText = "Hello Angular VN";
  hello();
}
