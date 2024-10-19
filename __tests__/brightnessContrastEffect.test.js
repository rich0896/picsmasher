/* eslint-disable no-undef */
// __tests__/brightnessContrastEffect.test.js

const { BrightnessContrastEffect } = require('../effects.js'); // Adjust the path as needed
const { applyEffectAndGetImageData } = require('../helpers/testHelpers.js');

describe('BrightnessContrastEffect', () => {
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

    test('should increase brightness correctly', () => {
        const effect = new BrightnessContrastEffect({ brightness: 50, contrast: 0 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should decrease brightness correctly', () => {
        const effect = new BrightnessContrastEffect({ brightness: -50, contrast: 0 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should increase contrast correctly', () => {
        const effect = new BrightnessContrastEffect({ brightness: 0, contrast: 50 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });

    test('should handle combined brightness and contrast correctly', () => {
        const effect = new BrightnessContrastEffect({ brightness: 20, contrast: -30 });
        const serializedImageData = applyEffectAndGetImageData(effect, ctx, canvas);

        expect(serializedImageData).toMatchSnapshot();
    });
});
