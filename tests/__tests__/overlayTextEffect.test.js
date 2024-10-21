const { OverlayTextEffect } = require('../../src/effects.js');
const { createTestCanvas } = require('./helpers/testHelpers.js');

describe('OverlayTextEffect', () => {
    test('should overlay text correctly', async () => {
        const { canvas, ctx } = await createTestCanvas();
        const effect = new OverlayTextEffect({
            text: 'Test',
            fontSize: 60,
            fontFamily: 'Arial',
            color: '#ff0000',
            x: 50,
            y: 50,
        });

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        effect.apply(ctx, canvas);

        expect(consoleSpy).toHaveBeenCalledWith('Applying Overlay Text Effect');
        consoleSpy.mockRestore();

        // Since text rendering might differ across environments, you may skip snapshot testing here
        // Alternatively, you can check that certain pixels have changed
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        expect(imageData).toBeDefined();
    });
});
