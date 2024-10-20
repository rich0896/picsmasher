const { SepiaEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('SepiaEffect', () => {
    test('should apply sepia effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new SepiaEffect({ intensity: 100 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Sepia Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });
});
