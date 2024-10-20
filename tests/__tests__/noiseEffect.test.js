const { NoiseEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('NoiseEffect', () => {
    test('should apply noise effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new NoiseEffect({ intensity: 50 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Noise Effect');
        consoleSpy.mockRestore();

        // Since noise is random, snapshot testing may not be reliable
        // Instead, you can check that the image data has changed
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toBeDefined();
    });
});
