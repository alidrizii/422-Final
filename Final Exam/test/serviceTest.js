// this is a test unit for service.js
const service = require('../src/service');

describe('Service Module', () => {
    test('should have a start function', () => {
        expect(typeof service.start).toBe('function');
    });

    test('should have a stop function', () => {
        expect(typeof service.stop).toBe('function');
    });

    test('should start without throwing errors', async () => {
        await expect(service.start()).resolves.not.toThrow();
    });
});