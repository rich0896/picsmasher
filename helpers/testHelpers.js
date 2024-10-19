/* eslint-disable no-undef */
// __tests__/testHelpers.js

/**
 * Applies an effect and returns the serialized ImageData.
 * @param {Effect} effect - The effect instance to apply.
 * @param {CanvasRenderingContext2D} ctx - The canvas context.
 * @param {HTMLCanvasElement} canvas - The canvas element.
 * @returns {Object} Serialized ImageData.
 */
function applyEffectAndGetImageData(effect, ctx, canvas) {
    effect.apply(ctx, canvas);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // Serialize ImageData by converting the Uint8ClampedArray to a regular array
    return {
        width: imageData.width,
        height: imageData.height,
        data: Array.from(imageData.data),
    };
}

module.exports = { applyEffectAndGetImageData };
