const fs = require("fs");

const files = ["src/index.html", "src/style.css", "src/script.js"];
for (const f of files) {
  if (!fs.existsSync(f)) {
    console.error("FAIL: missing file " + f);
    process.exit(1);
  }
}

const html = fs.readFileSync("src/index.html", "utf8");
if (!html.includes("CI/CD Deployment Successful") || !html.includes("Version:")) {
  console.error("FAIL: index.html is missing required content");
  process.exit(1);
}

console.log("All tests passed");
