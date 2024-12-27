// preload.js
import { contextBridge, ipcRenderer } from 'electron'

const api = {
  // Function to save collections to file
  saveCollections: (data) => ipcRenderer.invoke('save-collections', data),

  // Function to load collections from file
  loadCollections: () => ipcRenderer.invoke('load-collections')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.api = api
}
