const { app, BrowserWindow, ipcMain, screen } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    const iconPath = path.join(__dirname, 'build', 'icons', 'icon.png')
    const win = new BrowserWindow({
        width: width,
        height: height,
        icon: iconPath,
        // fullscreen: true,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        // }
    })
    // win.maximize();
    // win.setFullScreen(true)
    // win.webContents.openDevTools()
    win.loadFile('app/index.html')
}

app.whenReady().then(() => {
    // ipcMain.handle('ping', () => 'pong')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
