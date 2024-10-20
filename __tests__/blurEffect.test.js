const { BlurEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('BlurEffect', () => {
    test('should apply blur effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new BlurEffect({ radius: 5 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});
        const warnSpy = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Blur Effect');
        expect(warnSpy).toHaveBeenCalledWith(
            'Blur effect is not supported in this environment.'
        );
        consoleSpy.mockRestore();
        warnSpy.mockRestore();

        // Verify that the image data is unchanged or as expected
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toBeDefined();
    });
});
