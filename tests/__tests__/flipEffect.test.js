const { FlipEffect } = require('../../src/effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('FlipEffect', () => {
    test('should flip the image horizontally', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new FlipEffect({ direction: 'horizontal' });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Flip Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });

    test('should flip the image vertically', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new FlipEffect({ direction: 'vertical' });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Flip Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });
});
