const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const watcher = require('./watcher');

const exitHandler = require('./exitHandler');

exitHandler.setSafeExits();

// Getting full paths for all three directories
const watched = path.join(__dirname, config.watched);
const output = path.join(__dirname, config.output);
const processed = path.join(__dirname, config.processed);

console.info('Initializing service...');

// Create necessary directories if missing
if (!fs.existsSync(watched)) {
    fs.mkdirSync(watched);
    console.info(`Created watched directory: ${watched}`);
}

if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
    console.info(`Created output directory: ${output}`);
}

if (!fs.existsSync(processed)) {
    fs.mkdirSync(processed);
    console.info(`Created processed directory: ${processed}`);
}

console.info('All directories are set up. Starting watcher...');

watcher.watch(watched, output, processed);
