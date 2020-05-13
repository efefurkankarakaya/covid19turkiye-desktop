const electron = require("electron"); 

const {app, BrowserWindow} = electron; 

const createWindow = () => {
    let window = new BrowserWindow({
        width: 1366,
        height: 720,
        frame: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.setResizable(false);
    window.removeMenu();
    // window.setMenu(null);
    window.loadFile("index.html");
}

app.whenReady().then(createWindow);
