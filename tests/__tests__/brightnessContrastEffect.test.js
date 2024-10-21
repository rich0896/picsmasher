const { BrightnessContrastEffect } = require('../../src/effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('BrightnessContrastEffect', () => {
    test('should apply brightness and contrast effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new BrightnessContrastEffect({
            brightness: 20,
            contrast: 30,
        });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith(
            'Applying Brightness/Contrast Effect'
        );
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });
});
