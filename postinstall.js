const fs = require("fs");
const path = require("path");

const location = path.join(
  __dirname,
  "node_modules/electron/dist/Electron.app/Contents/Info.plist"
);
const plist = fs.readFileSync(location, "utf-8").replace(
  "<string>Electron</string>",
  `<string>Electron</string>
<key>CFBundleDocumentTypes</key>
<array>
    <dict>
        <key>CFBundleTypeExtensions</key>
        <array>
            <string>txt</string>
        </array>
        <key>CFBundleTypeName</key>
        <string>txt</string>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>LSHandlerRank</key>
        <string>Default</string>
    </dict>
</array>`
);

fs.writeFileSync(location, plist);
