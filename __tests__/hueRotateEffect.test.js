const { HueRotateEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('HueRotateEffect', () => {
    test('should apply hue rotate effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new HueRotateEffect({ angle: 90 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        // Similar to BlurEffect, we might need to mock the filter effect
        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Hue Rotate Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toBeDefined();
    });
});
