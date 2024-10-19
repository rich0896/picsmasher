/* eslint-disable no-undef */
// __tests__/sharpenEffect.test.js

const { SharpenEffect } = require('../effects.js'); // Adjust the path as needed
const { applyEffectAndGetImageData } = require('../helpers/testHelpers.js'); // Adjust path if different

describe('SharpenEffect', () => {
    let ctx, canvas;

    beforeEach(() => {
        // Create a canvas element using the global document provided by jsdom
        canvas = document.createElement('canvas');
        canvas.width = 10; // Reduced size for smaller snapshots
        canvas.height = 10;
        ctx = canvas.getContext('2d');

        // Fill the canvas with a solid color (e.g., rgb(100, 150, 200))
        ctx.fillStyle = 'rgb(100, 150, 200)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    test('should apply sharpen correctly at intensity 1', () => {
        const effect = new SharpenEffect({ intensity: 1 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should apply sharpen correctly at intensity 3', () => {
        const effect = new SharpenEffect({ intensity: 3 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should handle zero intensity without changes', () => {
        const effect = new SharpenEffect({ intensity: 0 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });
});
