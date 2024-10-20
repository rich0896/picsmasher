const { InvertEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('InvertEffect', () => {
    test('should invert colors correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new InvertEffect({ intensity: 100 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Invert Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });

    test('should invert colors correctly at 50% intensity', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new InvertEffect({ intensity: 50 });

        effect.apply(ctx, canvas);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });

    test('should handle zero intensity without changes', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new InvertEffect({ intensity: 0 });

        effect.apply(ctx, canvas);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // Compare with original image data
        const originalImageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
        expect(imageData.data).toEqual(originalImageData.data);
    });
});
