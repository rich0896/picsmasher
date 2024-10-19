// __tests__/grayscaleEffect.test.js

const { GrayscaleEffect } = require('../effects.js'); // Adjust the path as needed
const { applyEffectAndGetImageData } = require('../helpers/testHelpers.js');

describe('GrayscaleEffect', () => {
    let ctx, canvas;

    beforeEach(() => {
        canvas = document.createElement('canvas');
        canvas.width = 10;
        canvas.height = 10;
        ctx = canvas.getContext('2d');

        // Fill the canvas with a solid color (e.g., rgb(100, 150, 200))
        ctx.fillStyle = 'rgb(100, 150, 200)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    test('should apply grayscale correctly at 100% intensity', () => {
        const effect = new GrayscaleEffect({ intensity: 100 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should handle zero intensity without changes', () => {
        const effect = new GrayscaleEffect({ intensity: 0 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });
});
