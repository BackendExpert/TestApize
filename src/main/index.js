import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';
import fs from 'fs';
import path from 'path';

// File path for saving collections data
const filePath = path.join('C:/TestAPIze', 'collection.json');

// Ensure directory exists
function ensureDirectoryExistence(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Save collections to file
function saveToFile(data) {
  ensureDirectoryExistence(filePath);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Load collections from file
function loadFromFile() {
  if (fs.existsSync(filePath)) {
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
      console.error('Error reading collections file:', error);
      return []; // Return empty array if parsing fails
    }
  }
  return []; // Return empty array if file doesn't exist
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    show: false,
    resizable: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'), // Ensure this points to the correct preload file
      sandbox: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // IPC for handling save, load, and add operations for collections
  ipcMain.handle('save-collections', (_, data) => {
    try {
      saveToFile(data); // Save collection data
      return { success: true };
    } catch (error) {
      console.error('Error saving collections:', error);
      return { success: false, message: 'Failed to save collections' };
    }
  });

  ipcMain.handle('load-collections', () => {
    try {
      return { success: true, collections: loadFromFile() };
    } catch (error) {
      console.error('Error loading collections:', error);
      return { success: false, message: 'Failed to load collections' };
    }
  });

  ipcMain.handle('add-api-to-collection', async (event, apiData) => {
    try {
      const collections = loadFromFile();

      collections.push(apiData); // Add new API data to the collection array

      saveToFile(collections); // Save the updated collections

      return { success: true, collection: collections };
    } catch (error) {
      console.error('Error adding API to collection:', error);
      return { success: false, message: 'Failed to add API to collection' };
    }
  });

  // HMR for renderer based on electron-vite CLI.
  // Load the remote URL for development or the local HTML file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model ID for Windows
  electronApp.setAppUserModelId('com.electron');

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // See https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on('activate', function () {
    // On macOS, it's common to re-create a window when the dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
