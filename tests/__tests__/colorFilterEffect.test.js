const { ColorFilterEffect } = require('../effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('ColorFilterEffect', () => {
    test('should apply color filter correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new ColorFilterEffect({
            red: 100,
            green: 50,
            blue: 0,
            intensity: 50,
        });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Color Filter Effect');
        consoleSpy.mockRestore();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toMatchSnapshot();
    });
});
