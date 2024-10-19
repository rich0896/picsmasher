/* eslint-disable no-undef */
// __tests__/blurEffect.test.js

const { BlurEffect } = require('../effects.js'); // Adjust the path as needed
const { applyEffectAndGetImageData } = require('../helpers/testHelpers.js');

describe('BlurEffect', () => {
    let ctx, canvas;

    beforeEach(() => {
        canvas = document.createElement('canvas');
        canvas.width = 10;
        canvas.height = 10;
        ctx = canvas.getContext('2d');

        // Fill the canvas with a solid color (e.g., rgb(50, 100, 150))
        ctx.fillStyle = 'rgb(50, 100, 150)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    test('should apply blur correctly at intensity 5', () => {
        const effect = new BlurEffect({ intensity: 5 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should handle zero intensity without changes', () => {
        const effect = new BlurEffect({ intensity: 0 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });
});
