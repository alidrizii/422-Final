// this is a test unit for parser.js
const parser = require('../src/parser');

describe('Parser Module', () => {
    test('should parse valid data correctly', () => {
        const input = 'test,data';
        const result = parser.parse(input);
        expect(result).toBeDefined();
    });

    test('should handle invalid data', () => {
        const input = null;
        expect(() => parser.parse(input)).toThrow();
    });
});
