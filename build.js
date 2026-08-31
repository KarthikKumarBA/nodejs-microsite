const fs = require("fs");

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist", { recursive: true });

for (const file of fs.readdirSync("src")) {
  fs.copyFileSync(`src/${file}`, `dist/${file}`);
}

console.log("Build completed successfully.");
