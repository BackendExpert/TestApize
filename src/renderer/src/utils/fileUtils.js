// src/utils/fileUtils.js
const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join('C:/documents/TestAPIze', 'collection.json');

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
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return {}; // Return an empty object if the file doesn't exist
}

module.exports = { saveToFile, loadFromFile };
