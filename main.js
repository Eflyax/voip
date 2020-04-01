const { app, BrowserWindow, ipcRenderer } = require('electron');
const path = require('path');
const YAML = require('yaml');
const fs = require('fs');
const https = require('https');
const express = require('express');

let mainWindow;
function createWindow() {

  let configRaw = fs.readFileSync(__dirname + '/config.yml', 'utf8');
  let config = YAML.parse(configRaw);

  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    minHeight: 600,
    minWidth: 400,
    // maxHeight: 600,
    // maxWidth: 400,
    webPreferences: {
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      webSecurity: false,
      allowDisplayingInsecureContent: true,
      allowRunningInsecureContent: true
    }
  });
  mainWindow.loadFile(path.join('client/src/index.html'));
  //mainWindow.webContents.openDevTools();

  mainWindow.setMenu(null);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

};

app.on('ready', createWindow);

app.on('certificate-error', function (event, webContents, url, error, certificate, callback) {
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
