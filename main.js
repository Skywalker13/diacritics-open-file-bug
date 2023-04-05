const { app, BrowserWindow } = require("electron");
const fs = require("fs");

app.on("open-file", (ev, file) => {
  console.log(`Open file ${file}`);
  const data = fs.readFileSync(file, "utf-8");
  console.log(data);
});

/* wait forever */
app.whenReady().then(() => {
  setInterval(() => {}, 1000);
});
