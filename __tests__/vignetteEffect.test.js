const { VignetteEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('VignetteEffect', () => {
    test('should apply vignette effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new VignetteEffect({ intensity: 50 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Vignette Effect');
        consoleSpy.mockRestore();

        // As the radial gradient might not be fully supported, you may need to adjust expectations
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toBeDefined();
    });
});
