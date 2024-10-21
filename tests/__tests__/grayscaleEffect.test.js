const { GrayscaleEffect } = require('../../src/effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('GrayscaleEffect', () => {
    test('should apply grayscale effect correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new GrayscaleEffect({ intensity: 100 });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Grayscale Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });
});
