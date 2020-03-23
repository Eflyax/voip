const {app, BrowserWindow} = require('electron');
const path = require('path');
const YAML = require('yaml');
const fs = require('fs');

let mainWindow;

function createWindow() {

  let configRaw = fs.readFileSync(__dirname + '/config.yml', 'utf8');
  let config = YAML.parse(configRaw);

  mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    minHeight: 600,
    minWidth: 300,
    maxHeight: 600,
    maxWidth: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL(config.url);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  event.preventDefault();
  callback(true);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
