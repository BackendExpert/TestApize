import { contextBridge, ipcRenderer } from 'electron'

const api = {
  // Function to save collections to file
  saveCollections: (data) => ipcRenderer.invoke('save-collections', data),

  // Function to load collections from file
  loadCollections: () => ipcRenderer.invoke('load-collections'),

  // Function to add an API to the collection
  addApiToCollection: (apiData) =>
    ipcRenderer.invoke('add-api-to-collection', apiData),
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)  // Exposing API in isolated context
  } catch (error) {
    console.error('Error exposing API:', error)
  }
} else {
  window.api = api  // For non-isolated contexts
}
