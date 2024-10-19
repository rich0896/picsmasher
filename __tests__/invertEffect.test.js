// __tests__/invertEffect.test.js

const { InvertEffect } = require('../effects.js'); // Adjust the path as needed
const { applyEffectAndGetImageData } = require('../helpers/testHelpers.js');

describe('InvertEffect', () => {
    let ctx, canvas;

    beforeEach(() => {
        // Create a canvas element using the global document provided by jsdom
        canvas = document.createElement('canvas');
        canvas.width = 10;
        canvas.height = 10;
        ctx = canvas.getContext('2d');

        // Fill the canvas with a solid color (e.g., rgb(100, 150, 200))
        ctx.fillStyle = 'rgb(100, 150, 200)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    test('should invert colors correctly at 100% intensity', () => {
        const effect = new InvertEffect({ intensity: 100 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should invert colors correctly at 50% intensity', () => {
        const effect = new InvertEffect({ intensity: 50 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });
});
