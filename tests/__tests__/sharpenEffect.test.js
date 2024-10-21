const { SharpenEffect } = require('../../src/effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('SharpenEffect', () => {
    test('should apply sharpen effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new SharpenEffect({ intensity: 1 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Sharpen Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });
});
