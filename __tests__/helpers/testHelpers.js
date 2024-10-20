const { createCanvas, loadImage } = require('canvas');

exports.createTestCanvas = async (
    width = 200,
    height = 200,
    fillStyle = 'rgb(100, 150, 200)'
) => {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill the canvas with a solid color
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, width, height);

    return { canvas, ctx };
};

exports.loadTestImage = async (imagePath) => {
    const image = await loadImage(imagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    return { canvas, ctx };
};
