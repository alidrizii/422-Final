// this is a test unit for watcher.js
const watcher = require('../src/watcher');

describe('Watcher Module', () => {
    test('should initialize and start watching', () => {
        expect(typeof watcher.startWatching).toBe('function');
    });

    test('should stop watching', () => {
        expect(typeof watcher.stopWatching).toBe('function');
    });
});