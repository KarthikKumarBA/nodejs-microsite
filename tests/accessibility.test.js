const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const { axe } = require("jest-axe");

test("microsite has no accessibility violations", async () => {
  const html = fs.readFileSync(
    path.join(__dirname, "../src/index.html"),
    "utf8",
  );

  const dom = new JSDOM(html);

  global.window = dom.window;
  global.document = dom.window.document;

  const results = await axe(dom.window.document.body);

  expect(results.violations).toHaveLength(0);

  dom.window.close();
});
