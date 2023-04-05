# This repository exposes a old bug on macOS and file names with diacritics

The bug appears with the macOS specific `open-file` app event. When a filename (or the path) contents diacritics, the event is not received.

1. Run and start electron

```
npm i
npm run start
```

> Note that a `postinstall` script edits the `Info.plist` file of the `Electron.app` app in order to add support of `.txt` files. Otherwise it's not possible to test the `open-file` event.

2. Drag and drop `works.txt` file on the electron app (dock)

It prints the filename and the content into the console.

3. Drag and drop `cassé.txt` file on the electron app (dock)

Nothing is print.
