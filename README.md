# electron-app

To build the binaries use:
```npm run make```

To build windows and linux binaries use Docker:
```
docker build -t linux-builder .
docker run -it -v ./out:/project/dist linux-builder npx electron-builder -wl
```
