const fs = require("fs");
const path = require("path");

test("built microsite contains required deployment files", () => {
  const dist = path.join(__dirname, "../dist");

  expect(fs.existsSync(path.join(dist, "index.html"))).toBe(true);
  expect(fs.existsSync(path.join(dist, "style.css"))).toBe(true);
  expect(fs.existsSync(path.join(dist, "app.js"))).toBe(true);

  const html = fs.readFileSync(path.join(dist, "index.html"), "utf8");

  expect(html).toContain("GitHub Actions CI/CD");
});
