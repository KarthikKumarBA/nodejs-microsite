const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("microsite contains required components", () => {
  const html = fs.readFileSync(
    path.join(__dirname, "../src/index.html"),
    "utf8",
  );

  const dom = new JSDOM(html);
  const document = dom.window.document;

  expect(document.querySelector("main")).not.toBeNull();
  expect(document.querySelector("h1")).not.toBeNull();
  expect(document.querySelector("#status")).not.toBeNull();
});
