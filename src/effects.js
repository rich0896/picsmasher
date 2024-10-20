// effects.js

/**
 * Manages the registration and creation of effects.
 */
export class EffectManager {
    constructor() {
        this.effectsRegistry = {};
        this.effectList = [];
    }

    /**
     * Registers an effect class with a unique key.
     * @param {string} effectName - Unique key for the effect.
     * @param {class} effectClass - The effect class to register.
     */
    registerEffect(effectName, effectClass) {
        this.effectsRegistry[effectName] = effectClass;
        this.effectList.push(effectClass);
        // Sort effects alphabetically by name
        this.effectList.sort((a, b) => a.getName().localeCompare(b.getName()));
    }

    /**
     * Creates an instance of a registered effect.
     * @param {string} effectName - The key of the effect to create.
     * @param {object} parameters - Parameters for the effect instance.
     * @returns {Effect|null} - An instance of the effect or null if not found.
     */
    createEffect(effectName, parameters) {
        const EffectClass = this.effectsRegistry[effectName];
        if (EffectClass) {
            return new EffectClass(parameters);
        } else {
            console.error(`Effect "${effectName}" not found in registry.`);
            return null;
        }
    }

    /**
     * Retrieves the list of registered effects.
     * @returns {Array} - List of effect classes.
     */
    getEffects() {
        return this.effectList;
    }
}

/**
 * Base class for all effects.
 */
export class Effect {
    static getName() {
        return 'Base Effect';
    }

    static getDefaultParameters() {
        return {};
    }

    static getControls() {
        return [];
    }

    constructor(parameters = {}) {
        this.parameters = parameters;
    }

    apply(ctx, canvas) {
        // To be implemented by subclasses
    }
}

/* Define individual effect classes */

export class InvertEffect extends Effect {
    static getName() {
        return 'Invert Colors';
    }

    static getDefaultParameters() {
        return {
            intensity: 100, // Percentage (0-100)
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Invert Effect');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const intensity = parseFloat(this.parameters.intensity) || 100;
        const factor = intensity / 100;

        for (let i = 0; i < data.length; i += 4) {
            // Invert each color channel based on intensity
            data[i] = Math.min(255, data[i] + factor * (255 - 2 * data[i])); // Red
            data[i + 1] = Math.min(
                255,
                data[i + 1] + factor * (255 - 2 * data[i + 1])
            ); // Green
            data[i + 2] = Math.min(
                255,
                data[i + 2] + factor * (255 - 2 * data[i + 2])
            ); // Blue
            // Alpha channel remains unchanged
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class GrayscaleEffect extends Effect {
    static getName() {
        return 'Grayscale';
    }

    static getDefaultParameters() {
        return {
            intensity: 100,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Grayscale Effect');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const intensity = parseFloat(this.parameters.intensity) || 100;
        const factor = intensity / 100;

        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = data[i] + factor * (avg - data[i]); // Red
            data[i + 1] = data[i + 1] + factor * (avg - data[i + 1]); // Green
            data[i + 2] = data[i + 2] + factor * (avg - data[i + 2]); // Blue
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class SepiaEffect extends Effect {
    static getName() {
        return 'Sepia';
    }

    static getDefaultParameters() {
        return {
            intensity: 100,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Sepia Effect');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const intensity = parseFloat(this.parameters.intensity) || 100;
        const factor = intensity / 100;

        for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];

            data[i] =
                red +
                factor *
                    (Math.min(0.393 * red + 0.769 * green + 0.189 * blue, 255) -
                        red);
            data[i + 1] =
                green +
                factor *
                    (Math.min(0.349 * red + 0.686 * green + 0.168 * blue, 255) -
                        green);
            data[i + 2] =
                blue +
                factor *
                    (Math.min(0.272 * red + 0.534 * green + 0.131 * blue, 255) -
                        blue);
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class BrightnessContrastEffect extends Effect {
    static getName() {
        return 'Brightness/Contrast';
    }

    static getDefaultParameters() {
        return {
            brightness: 0, // Range: -100 to +100
            contrast: 0, // Range: -100 to +100
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'brightness',
                label: 'Brightness',
                min: -100,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'contrast',
                label: 'Contrast',
                min: -100,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Brightness/Contrast Effect');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let { brightness, contrast } = this.parameters;

        // Normalize brightness and contrast
        brightness = parseFloat(brightness) || 0;
        contrast = parseFloat(contrast) || 0;

        // Calculate contrast factor
        const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

        for (let i = 0; i < data.length; i += 4) {
            // Apply brightness and contrast
            data[i] = factor * (data[i] - 128) + 128 + brightness; // Red
            data[i + 1] = factor * (data[i + 1] - 128) + 128 + brightness; // Green
            data[i + 2] = factor * (data[i + 2] - 128) + 128 + brightness; // Blue

            // Clamp values between 0 and 255
            data[i] = Math.min(255, Math.max(0, data[i]));
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1]));
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2]));
            // Alpha channel remains unchanged
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class OverlayTextEffect extends Effect {
    static getName() {
        return 'Overlay Text';
    }

    static getDefaultParameters() {
        return {
            text: 'Text',
            fontSize: 60,
            fontFamily: 'Arial',
            color: '#ff0000',
            x: 50,
            y: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'text',
                param: 'text',
                label: 'Text',
            },
            {
                type: 'number',
                param: 'fontSize',
                label: 'Font Size',
                min: 10,
                max: 200,
                step: 1,
            },
            {
                type: 'select',
                param: 'fontFamily',
                label: 'Font Family',
                options: [
                    'Impact, sans-serif',
                    'Arial',
                    'Verdana',
                    'Times New Roman',
                    'Courier New',
                    'Georgia',
                    'Palatino',
                    'Garamond',
                    'Comic Sans MS',
                    'Trebuchet MS',
                    'Arial Black',
                    'Tahoma',
                    'Lucida Console',
                ],
            },
            {
                type: 'color',
                param: 'color',
                label: 'Color',
            },
            {
                type: 'range',
                param: 'x',
                label: 'X Position (%)',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'y',
                label: 'Y Position (%)',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Overlay Text Effect');
        const text = this.parameters.text || 'BRAINROT';
        const fontSize = parseInt(this.parameters.fontSize) || 60;
        const fontFamily =
            this.parameters.fontFamily || 'Permanent Marker, cursive';
        const color = this.parameters.color || '#ff0000';
        const x = parseFloat(this.parameters.x) || 50; // Percentage
        const y = parseFloat(this.parameters.y) || 50;

        ctx.font = `bold ${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, (x / 100) * canvas.width, (y / 100) * canvas.height);
    }
}

export class ColorFilterEffect extends Effect {
    static getName() {
        return 'Color Filter';
    }

    static getDefaultParameters() {
        return {
            red: 0,
            green: 0,
            blue: 0,
            intensity: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'red',
                label: 'Red',
                min: 0,
                max: 255,
                step: 1,
            },
            {
                type: 'range',
                param: 'green',
                label: 'Green',
                min: 0,
                max: 255,
                step: 1,
            },
            {
                type: 'range',
                param: 'blue',
                label: 'Blue',
                min: 0,
                max: 255,
                step: 1,
            },
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Color Filter Effect');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const red = parseFloat(this.parameters.red) || 0;
        const green = parseFloat(this.parameters.green) || 0;
        const blue = parseFloat(this.parameters.blue) || 0;
        const intensity = parseFloat(this.parameters.intensity) || 100;
        const factor = intensity / 100;

        for (let i = 0; i < data.length; i += 4) {
            data[i] = data[i] + factor * (red - data[i]); // Red
            data[i + 1] = data[i + 1] + factor * (green - data[i + 1]); // Green
            data[i + 2] = data[i + 2] + factor * (blue - data[i + 2]); // Blue
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class BlurEffect extends Effect {
    static getName() {
        return 'Blur';
    }

    static getDefaultParameters() {
        return {
            radius: 5,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'radius',
                label: 'Radius',
                min: 0,
                max: 10,
                step: 0.1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Blur Effect');
        if (typeof ctx.filter !== 'undefined') {
            // Browser environment
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tempCtx = tempCanvas.getContext('2d');

            tempCtx.filter = `blur(${this.parameters.radius}px)`;
            tempCtx.drawImage(canvas, 0, 0);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(tempCanvas, 0, 0);
        } else {
            // Node.js environment
            // Implement an alternative blur algorithm or skip the effect
            console.warn('Blur effect is not supported in this environment.');
        }
    }
}

export class HueRotateEffect extends Effect {
    static getName() {
        return 'Hue Rotate';
    }

    static getDefaultParameters() {
        return {
            angle: 0,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'angle',
                label: 'Angle',
                min: 0,
                max: 360,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Hue Rotate Effect');
        ctx.filter = `hue-rotate(${this.parameters.angle}deg)`;
        ctx.drawImage(canvas, 0, 0);
        ctx.filter = 'none';
    }
}

export class PixelateEffect extends Effect {
    static getName() {
        return 'Pixelate';
    }

    static getDefaultParameters() {
        return {
            size: 10,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'size',
                label: 'Pixel Size',
                min: 1,
                max: 50,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Pixelate Effect');
        const size = this.parameters.size;
        const width = canvas.width;
        const height = canvas.height;
        ctx.drawImage(canvas, 0, 0, width / size, height / size);
        ctx.drawImage(
            canvas,
            0,
            0,
            width / size,
            height / size,
            0,
            0,
            width,
            height
        );
    }
}

export class JpegArtifactEffect extends Effect {
    static getName() {
        return 'JPEG Artifact';
    }

    static getDefaultParameters() {
        return {
            quality: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'quality',
                label: 'Quality',
                min: 1,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying JPEG Artifact Effect');
        const quality = this.parameters.quality / 100;

        // Create a temporary canvas to preserve the alpha channel
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        // Draw the original image on the temporary canvas
        tempCtx.drawImage(canvas, 0, 0);

        // Get the image data from the temporary canvas
        const imageData = tempCtx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
        const alphaData = new Uint8ClampedArray(imageData.data.length);

        // Copy the alpha channel data
        for (let i = 3; i < imageData.data.length; i += 4) {
            alphaData[i] = imageData.data[i];
        }

        // Convert the temporary canvas to a JPEG data URL
        const dataUrl = tempCanvas.toDataURL('image/jpeg', quality);
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
            // Draw the JPEG image back onto the temporary canvas
            tempCtx.clearRect(0, 0, canvas.width, canvas.height);
            tempCtx.drawImage(img, 0, 0);

            // Get the image data from the temporary canvas
            const jpegImageData = tempCtx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            // Restore the alpha channel data
            for (let i = 3; i < jpegImageData.data.length; i += 4) {
                jpegImageData.data[i] = alphaData[i];
            }

            // Put the modified image data back onto the original canvas
            ctx.putImageData(jpegImageData, 0, 0);
        };
    }
}

export class NoiseEffect extends Effect {
    static getName() {
        return 'Noise';
    }

    static getDefaultParameters() {
        return {
            intensity: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Noise Effect');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const intensity = this.parameters.intensity;

        for (let i = 0; i < data.length; i += 4) {
            const noise = (Math.random() - 0.5) * intensity;
            data[i] += noise;
            data[i + 1] += noise;
            data[i + 2] += noise;
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class AspectRatioEffect extends Effect {
    static getName() {
        return 'Aspect Crusher';
    }

    static getDefaultParameters() {
        return {
            width: 1,
            height: 1,
        };
    }

    static getControls() {
        return [
            {
                type: 'number',
                param: 'width',
                label: 'Vertical Ratio',
                min: 1,
                max: 100,
                step: 1,
            },
            {
                type: 'number',
                param: 'height',
                label: 'Horizontal Ratio',
                min: 1,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Aspect Ratio Effect');
        let widthRatio = this.parameters.width;
        let heightRatio = this.parameters.height;

        if (widthRatio === 0 || heightRatio === 0) {
            widthRatio = canvas.width;
            heightRatio = canvas.height;
        }

        const aspectRatio = widthRatio / heightRatio;

        let newWidth, newHeight;

        if (canvas.width / canvas.height > aspectRatio) {
            newHeight = canvas.height;
            newWidth = newHeight * aspectRatio;
        } else {
            newWidth = canvas.width;
            newHeight = newWidth / aspectRatio;
        }

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = newWidth;
        tempCanvas.height = newHeight;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(canvas, 0, 0, newWidth, newHeight);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }
}

export class EmojiEffect extends Effect {
    static getName() {
        return 'Emoji Spam';
    }

    static getDefaultParameters() {
        return {
            emoji: '🤣',
            count: 25,
            size: 30,
            positions: [],
        };
    }

    static getControls() {
        return [
            {
                type: 'emoji',
                param: 'emoji',
                label: 'Emoji',
                options: [
                    '😀',
                    '😃',
                    '😄',
                    '😁',
                    '😆',
                    '😅',
                    '😂',
                    '🤣',
                    '😊',
                    '😇',
                    '🙂',
                    '🙃',
                    '😉',
                    '😌',
                    '😍',
                    '🥰',
                    '😘',
                    '😗',
                    '😙',
                    '😚',
                    '😋',
                    '😛',
                    '😝',
                    '😜',
                    '🤪',
                    '🤨',
                    '🧐',
                    '🤓',
                    '😎',
                    '🥳',
                    '🤯',
                    '😳',
                    '🥺',
                    '😢',
                    '😭',
                    '😤',
                    '😠',
                    '😡',
                    '🤬',
                    '🤢',
                    '🤮',
                    '🤧',
                    '😷',
                    '🤒',
                    '🤕',
                    '🤑',
                    '🤠',
                    '😈',
                    '👿',
                    '👹',
                    '👺',
                    '🤡',
                    '💩',
                    '👻',
                    '💀',
                    '☠️',
                    '👽',
                    '👾',
                    '🤖',
                    '🎃',
                    '😺',
                    '😸',
                    '😹',
                    '😻',
                    '😼',
                    '😽',
                    '🙀',
                    '😿',
                    '😾',
                    '👋',
                    '🤚',
                    '🖐',
                    '✋',
                    '🖖',
                    '👌',
                    '🤌',
                    '🤏',
                    '✌️',
                    '🤞',
                    '🤟',
                    '🤘',
                    '🤙',
                    '👈',
                    '👉',
                    '👆',
                    '🖕',
                    '👇',
                    '☝️',
                    '👍',
                    '👎',
                    '✊',
                    '👊',
                    '🤛',
                    '🤜',
                    '👏',
                    '🙌',
                    '👐',
                    '🤲',
                    '🤝',
                    '🙏',
                    '✍️',
                    '💅',
                    '🤳',
                    '💪',
                    '🦾',
                    '🦿',
                    '🦵',
                    '🦶',
                    '👂',
                    '🦻',
                    '👃',
                    '🧠',
                    '🫀',
                    '🫁',
                    '🦷',
                    '🦴',
                    '👀',
                    '👁',
                    '👅',
                    '👄',
                    '🫦',
                    '👶',
                    '🧒',
                    '👦',
                    '👧',
                    '🧑',
                    '👱',
                    '👨',
                    '🧔',
                    '👩',
                    '🧓',
                    '👴',
                    '👵',
                    '🙍',
                    '🙎',
                    '🙅',
                    '🙆',
                    '💁',
                    '🙋',
                    '🧏',
                    '🙇',
                    '🤦',
                    '🤷',
                    '👨‍⚕️',
                    '👩‍⚕️',
                    '👨‍🎓',
                    '👩‍🎓',
                    '👨‍🏫',
                    '👩‍🏫',
                    '👨‍⚖️',
                    '👩‍⚖️',
                    '👨‍🌾',
                    '👩‍🌾',
                    '👨‍🍳',
                    '👩‍🍳',
                    '👨‍🔧',
                    '👩‍🔧',
                    '👨‍🏭',
                    '👩‍🏭',
                    '👨‍💼',
                    '👩‍💼',
                    '👨‍🔬',
                    '👩‍🔬',
                    '👨‍💻',
                    '👩‍💻',
                    '👨‍🎤',
                    '👩‍🎤',
                    '👨‍🎨',
                    '👩‍🎨',
                    '👨‍✈️',
                    '👩‍✈️',
                    '👨‍🚀',
                    '👩‍🚀',
                    '👨‍🚒',
                    '👩‍🚒',
                    '👮',
                    '🕵️',
                    '💂',
                    '👷',
                    '🤴',
                    '👸',
                    '👳',
                    '👲',
                    '🧕',
                    '🤵',
                    '👰',
                    '🤰',
                    '🤱',
                    '👩‍🍼',
                    '👼',
                    '🎅',
                    '🤶',
                    '🦸',
                    '🦹',
                    '🧙',
                    '🧚',
                    '🧛',
                    '🧜',
                    '🧝',
                    '🧞',
                    '🧟',
                    '🧌',
                    '🫅',
                    '🫃',
                    '🫄',
                    '🐶',
                    '🐱',
                    '🐭',
                    '🐹',
                    '🐰',
                    '🦊',
                    '🦝',
                    '🐻',
                    '🐼',
                    '🦘',
                    '🦡',
                    '🐨',
                    '🐯',
                    '🦁',
                    '🐮',
                    '🐷',
                    '🐽',
                    '🐸',
                    '🐵',
                    '🙈',
                    '🙉',
                    '🙊',
                    '🐒',
                    '🐔',
                    '🐧',
                    '🐦',
                    '🐤',
                    '🐣',
                    '🐥',
                    '🦆',
                    '🦅',
                    '🦉',
                    '🦇',
                    '🐺',
                    '🐗',
                    '🐴',
                    '🦄',
                    '🐝',
                    '🪲',
                    '🐛',
                    '🦋',
                    '🐌',
                    '🐞',
                    '🐜',
                    '🪳',
                    '🪰',
                    '🪱',
                    '🐢',
                    '🐍',
                    '🦎',
                    '🦖',
                    '🦕',
                    '🐙',
                    '🦑',
                    '🦐',
                    '🦞',
                    '🦀',
                    '🐡',
                    '🐠',
                    '🐟',
                    '🐬',
                    '🐳',
                    '🐋',
                    '🦈',
                    '🐊',
                    '🐅',
                    '🐆',
                    '🦓',
                    '🦍',
                    '🦧',
                    '🦣',
                    '🐘',
                    '🦛',
                    '🦏',
                    '🐪',
                    '🐫',
                    '🦒',
                    '🦘',
                    '🦬',
                    '🐃',
                    '🐂',
                    '🐄',
                    '🐎',
                    '🐖',
                    '🐏',
                    '🐑',
                    '🦙',
                    '🐐',
                    '🦌',
                    '🐕',
                    '🐩',
                    '🦮',
                    '🐕‍🦺',
                    '🐈',
                    '🐈‍⬛',
                    '🪶',
                    '🐓',
                    '🦃',
                    '🦤',
                    '🦚',
                    '🦜',
                    '🦢',
                    '🦩',
                    '🕊',
                    '🐇',
                    '🦝',
                    '🦨',
                    '🦡',
                    '🦫',
                    '🦦',
                    '🦥',
                    '🐁',
                    '🐀',
                    '🐿',
                    '🦔',
                    '❤️',
                    '🧡',
                    '💛',
                    '💚',
                    '💙',
                    '💜',
                    '🖤',
                    '🤍',
                    '🤎',
                    '💔',
                    '❣️',
                    '💕',
                    '💞',
                    '💓',
                    '💗',
                    '💖',
                    '💘',
                    '💝',
                    '💟',
                    '☮️',
                    '✝️',
                    '☪️',
                    '🕉',
                    '☸️',
                    '✡️',
                    '🔯',
                    '🕎',
                    '☯️',
                    '☦️',
                    '🛐',
                    '⛎',
                    '♈',
                    '♉',
                    '♊',
                    '♋',
                    '♌',
                    '♍',
                    '♎',
                    '♏',
                    '♐',
                    '♑',
                    '♒',
                    '♓',
                    '🆔',
                    '⚛️',
                    '🉑',
                    '☢️',
                    '☣️',
                    '📴',
                    '📳',
                    '🈶',
                    '🈚',
                    '🈸',
                    '🈺',
                    '🈷️',
                    '✴️',
                    '🆚',
                    '💮',
                    '🉐',
                    '㊙️',
                    '㊗️',
                    '🈴',
                    '🈵',
                    '🈹',
                    '🈲',
                    '🅰️',
                    '🅱️',
                    '🆎',
                    '🆑',
                    '🅾️',
                    '🆘',
                    '❌',
                    '⭕',
                    '🛑',
                    '⛔',
                    '📛',
                    '🚫',
                    '💯',
                    '💢',
                    '♨️',
                    '🚷',
                    '🚯',
                    '🚳',
                    '🚱',
                    '🔞',
                    '📵',
                    '🚭',
                    '❗',
                    '❕',
                    '❓',
                    '❔',
                    '‼️',
                    '⁉️',
                    '🔅',
                    '🔆',
                    '〽️',
                    '⚠️',
                    '🚸',
                    '🔱',
                    '⚜️',
                    '🔰',
                    '♻️',
                    '✅',
                    '🈯',
                    '💹',
                    '❇️',
                    '✳️',
                    '❎',
                    '🌐',
                    '💠',
                    'Ⓜ️',
                    '🌀',
                    '💤',
                    '🏧',
                    '🚾',
                    '♿',
                    '🅿️',
                    '🛗',
                    '🈳',
                    '🈂️',
                    '🛂',
                    '🛃',
                    '🛄',
                    '🛅',
                    '🚹',
                    '🚺',
                    '🚼',
                    '⚧️',
                    '🚻',
                    '🚮',
                    '🎦',
                    '📶',
                    '🈁',
                    '🔣',
                    'ℹ️',
                    '🔤',
                    '🔡',
                    '🔠',
                    '🆖',
                    '🆗',
                    '🆙',
                    '🆒',
                    '🆕',
                    '🆓',
                    '0️⃣',
                    '1️⃣',
                    '2️⃣',
                    '3️⃣',
                    '4️⃣',
                    '5️⃣',
                    '6️⃣',
                    '7️⃣',
                    '8️⃣',
                    '9️⃣',
                    '🔟',
                    '🔢',
                    '#️⃣',
                    '*️⃣',
                    '⏏️',
                    '▶️',
                    '⏸',
                    '⏯',
                    '⏹',
                    '⏺',
                    '⏭',
                    '⏮',
                    '⏩',
                    '⏪',
                    '⏫',
                    '⏬',
                    '◀️',
                    '🔼',
                    '🔽',
                    '➡️',
                    '⬅️',
                    '⬆️',
                    '⬇️',
                    '↗️',
                    '↘️',
                    '↙️',
                    '↖️',
                    '↕️',
                    '↔️',
                    '↪️',
                    '↩️',
                    '⤴️',
                    '⤵️',
                    '🔀',
                    '🔁',
                    '🔂',
                    '🔄',
                    '🔃',
                    '🎵',
                    '🎶',
                    '➕',
                    '➖',
                    '➗',
                    '✖️',
                    '💲',
                    '💱',
                    '™️',
                    '©️',
                    '®️',
                    '〰️',
                    '➰',
                    '➿',
                    '🔚',
                    '🔙',
                    '🔛',
                    '🔝',
                    '🔜',
                    '✔️',
                    '☑️',
                    '🔘',
                    '⚪',
                    '⚫',
                    '🔴',
                    '🔵',
                    '🟠',
                    '🟡',
                    '🟢',
                    '🟣',
                    '🟤',
                    '🟥',
                    '🟧',
                    '🟨',
                    '🟩',
                    '🟦',
                    '🟪',
                    '🟫',
                    '⬛',
                    '⬜',
                    '◼️',
                    '◻️',
                    '◾',
                    '◽',
                    '▪️',
                    '▫️',
                    '🔺',
                    '🔻',
                    '🔸',
                    '🔹',
                    '🔶',
                    '🔷',
                    '🔳',
                    '🔲',
                ],
            },
            {
                type: 'number',
                param: 'count',
                label: 'Count',
                min: 1,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'size',
                label: 'Size',
                min: 10,
                max: 100,
                step: 1,
            },
            {
                type: 'button',
                param: 'shuffle',
                label: 'Shuffle Positions',
                action: (effect) => {
                    effect.shufflePositions();
                },
            },
        ];
    }

    constructor(parameters = {}) {
        super(parameters);
        this.positions = this.generatePositions();
    }

    generatePositions() {
        const positions = [];
        for (let i = 0; i < this.parameters.count; i++) {
            positions.push({
                x: Math.random() * 100,
                y: Math.random() * 100,
            });
        }
        return positions;
    }

    shufflePositions() {
        this.positions = this.generatePositions();
    }

    apply(ctx, canvas) {
        console.log('Applying Emoji Overlay Effect');
        const emoji = this.parameters.emoji;
        const size = this.parameters.size;

        // Regenerate positions if count has changed
        if (this.positions.length !== this.parameters.count) {
            this.positions = this.generatePositions();
        }

        this.positions.forEach((pos) => {
            const x = (pos.x / 100) * canvas.width;
            const y = (pos.y / 100) * canvas.height;
            const fontSize = Math.random() * size + 10;

            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(emoji, x, y);
        });
    }
}

export class CropEffect extends Effect {
    static getName() {
        return "Squash n' Stretch";
    }

    static getDefaultParameters() {
        return {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'x',
                label: 'X Position (%)',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'y',
                label: 'Y Position (%)',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'width',
                label: 'Width (%)',
                min: 1,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'height',
                label: 'Height (%)',
                min: 1,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Crop Effect');
        const x = (parseFloat(this.parameters.x) / 100) * canvas.width;
        const y = (parseFloat(this.parameters.y) / 100) * canvas.height;
        const width = (parseFloat(this.parameters.width) / 100) * canvas.width;
        const height =
            (parseFloat(this.parameters.height) / 100) * canvas.height;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }
}

export class SuperimposeImageEffect extends Effect {
    static getName() {
        return 'Superimpose Image';
    }

    static getDefaultParameters() {
        return {
            imageUrl: '',
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            opacity: 1,
        };
    }

    static getControls() {
        return [
            {
                type: 'text',
                param: 'imageUrl',
                label: 'Image URL',
            },
            {
                type: 'range',
                param: 'x',
                label: 'X Position (%)',
                min: -100,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'y',
                label: 'Y Position (%)',
                min: -100,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'width',
                label: 'Width (%)',
                min: 1,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'height',
                label: 'Height (%)',
                min: 1,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'opacity',
                label: 'Opacity',
                min: 0,
                max: 1,
                step: 0.01,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Superimpose Image Effect');
        const imageUrl = this.parameters.imageUrl;
        const x = (parseFloat(this.parameters.x) / 100) * canvas.width;
        const y = (parseFloat(this.parameters.y) / 100) * canvas.height;
        const width = (parseFloat(this.parameters.width) / 100) * canvas.width;
        const height =
            (parseFloat(this.parameters.height) / 100) * canvas.height;
        const opacity = parseFloat(this.parameters.opacity);

        if (imageUrl) {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // This line is added to handle CORS issues
            img.src = imageUrl;
            img.onload = () => {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                const tempCtx = tempCanvas.getContext('2d');

                tempCtx.drawImage(canvas, 0, 0);
                tempCtx.globalAlpha = opacity;
                tempCtx.drawImage(img, x, y, width, height);
                tempCtx.globalAlpha = 1;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(tempCanvas, 0, 0);
            };
            img.onerror = () => {
                console.error(
                    'Failed to load image for Superimpose Image Effect.'
                );
            };
        } else {
            console.error(
                'No image URL provided for Superimpose Image Effect.'
            );
        }
    }
}

export class MemeTopTextEffect extends Effect {
    static getName() {
        return 'Meme Top Text';
    }

    static getDefaultParameters() {
        return {
            text: 'TOP TEXT',
            fontSize: 40,
            fontFamily: 'Impact, sans-serif',
            color: '#000000',
            backgroundColor: '#ffffff',
            height: 50,
            wrapText: false,
        };
    }

    static getControls() {
        return [
            {
                type: 'text',
                param: 'text',
                label: 'Text',
            },
            {
                type: 'number',
                param: 'fontSize',
                label: 'Font Size',
                min: 10,
                max: 200,
                step: 1,
            },
            {
                type: 'select',
                param: 'fontFamily',
                label: 'Font Family',
                options: [
                    'Impact, sans-serif',
                    'Arial',
                    'Verdana',
                    'Times New Roman',
                    'Courier New',
                    'Georgia',
                    'Palatino',
                    'Garamond',
                    'Comic Sans MS',
                    'Trebuchet MS',
                    'Arial Black',
                    'Tahoma',
                    'Lucida Console',
                ],
            },
            {
                type: 'color',
                param: 'color',
                label: 'Text Color',
            },
            {
                type: 'color',
                param: 'backgroundColor',
                label: 'Background Color',
            },
            {
                type: 'number',
                param: 'height',
                label: 'Height',
                min: 10,
                max: canvas.height,
                step: 1,
            },
            {
                type: 'checkbox',
                param: 'wrapText',
                label: 'Wrap Text',
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Meme Top Text Effect');
        const text = this.parameters.text || 'TOP TEXT';
        const fontSize = parseInt(this.parameters.fontSize) || 40;
        const fontFamily = this.parameters.fontFamily || 'Impact, sans-serif';
        const color = this.parameters.color || '#ffffff';
        const backgroundColor = this.parameters.backgroundColor || '#000000';
        const height = parseInt(this.parameters.height) || 50;
        const wrapText = this.parameters.wrapText;

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, height);

        ctx.fillStyle = color;

        if (wrapText) {
            const words = text.split(' ');
            let line = '';
            const lines = [];
            const maxWidth = canvas.width - 20; // Padding

            for (let i = 0; i < words.length; i++) {
                const testLine = line + words[i] + ' ';
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width;

                if (testWidth > maxWidth && i > 0) {
                    lines.push(line);
                    line = words[i] + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line);

            const lineHeight = fontSize * 1.2;
            const totalHeight = lines.length * lineHeight;
            const startY = (height - totalHeight) / 2 + lineHeight / 2;

            for (let j = 0; j < lines.length; j++) {
                ctx.fillText(
                    lines[j],
                    canvas.width / 2,
                    startY + j * lineHeight
                );
            }
        } else {
            ctx.fillText(text, canvas.width / 2, height / 2);
        }
    }
}

export class ReplaceColorEffect extends Effect {
    static getName() {
        return 'Replace Color';
    }

    static getDefaultParameters() {
        return {
            targetColor: '#ffffff',
            replacementColor: '#000000',
            tolerance: 0,
        };
    }

    static getControls() {
        return [
            {
                type: 'color',
                param: 'targetColor',
                label: 'Target Color',
            },
            {
                type: 'color',
                param: 'replacementColor',
                label: 'Replacement Color',
            },
            {
                type: 'range',
                param: 'tolerance',
                label: 'Tolerance',
                min: 0,
                max: 100,
                step: 0.1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Replace Color Effect');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const targetColor = this.hexToRgb(this.parameters.targetColor);
        const replacementColor = this.hexToRgb(
            this.parameters.replacementColor
        );
        const tolerance = parseFloat(this.parameters.tolerance) || 0;

        for (let i = 0; i < data.length; i += 4) {
            if (this.colorMatch(data, i, targetColor, tolerance)) {
                data[i] = replacementColor.r;
                data[i + 1] = replacementColor.g;
                data[i + 2] = replacementColor.b;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
        };
    }

    colorMatch(data, index, targetColor, tolerance) {
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        return (
            Math.abs(r - targetColor.r) <= tolerance &&
            Math.abs(g - targetColor.g) <= tolerance &&
            Math.abs(b - targetColor.b) <= tolerance
        );
    }
}

export class FlipEffect extends Effect {
    static getName() {
        return 'Flip';
    }

    static getDefaultParameters() {
        return {
            direction: 'horizontal', // or 'vertical'
        };
    }

    static getControls() {
        return [
            {
                type: 'select',
                param: 'direction',
                label: 'Direction',
                options: ['horizontal', 'vertical'],
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Flip Effect');
        const direction = this.parameters.direction;

        ctx.save();
        if (direction === 'horizontal') {
            ctx.scale(-1, 1);
            ctx.drawImage(canvas, -canvas.width, 0);
        } else if (direction === 'vertical') {
            ctx.scale(1, -1);
            ctx.drawImage(canvas, 0, -canvas.height);
        }
        ctx.restore();
    }
}

export class VignetteEffect extends Effect {
    static getName() {
        return 'Vignette';
    }

    static getDefaultParameters() {
        return {
            intensity: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Vignette Effect');
        const intensity = parseFloat(this.parameters.intensity) || 50;
        const gradient = ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            Math.max(canvas.width, canvas.height) / 2
        );

        gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
        gradient.addColorStop(1, `rgba(0, 0, 0, ${intensity / 100})`);

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
    }
}

export class SharpenEffect extends Effect {
    static getName() {
        return 'Sharpen';
    }

    static getDefaultParameters() {
        return {
            intensity: 1, // Multiplier for the sharpening effect
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'intensity',
                label: 'Intensity',
                min: 1,
                max: 5,
                step: 1,
            },
        ];
    }

    apply(ctx, canvas) {
        console.log('Applying Sharpen Effect');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const intensity = parseFloat(this.parameters.intensity) || 1;

        // Define a simple sharpening kernel
        const kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];

        const side = Math.round(Math.sqrt(kernel.length));
        const halfSide = Math.floor(side / 2);

        const src = imageData.data;
        const sw = imageData.width;
        const sh = imageData.height;
        const w = sw;
        const h = sh;

        const output = ctx.createImageData(w, h);
        const dst = output.data;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let r = 0,
                    g = 0,
                    b = 0;
                for (let cy = 0; cy < side; cy++) {
                    for (let cx = 0; cx < side; cx++) {
                        const scy = y + cy - halfSide;
                        const scx = x + cx - halfSide;
                        if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                            const srcOffset = (scy * sw + scx) * 4;
                            const wt = kernel[cy * side + cx];
                            r += src[srcOffset] * wt;
                            g += src[srcOffset + 1] * wt;
                            b += src[srcOffset + 2] * wt;
                        }
                    }
                }
                const dstOffset = (y * w + x) * 4;
                dst[dstOffset] = Math.min(255, Math.max(0, r * intensity));
                dst[dstOffset + 1] = Math.min(255, Math.max(0, g * intensity));
                dst[dstOffset + 2] = Math.min(255, Math.max(0, b * intensity));
                dst[dstOffset + 3] = src[(y * sw + x) * 4 + 3]; // Alpha remains unchanged
            }
        }

        ctx.putImageData(output, 0, 0);
    }
}

/* Register all effects */

const effectManager = new EffectManager();

effectManager.registerEffect('invert', InvertEffect);
effectManager.registerEffect('grayscale', GrayscaleEffect);
effectManager.registerEffect('sepia', SepiaEffect);
effectManager.registerEffect('brightnessContrast', BrightnessContrastEffect);
effectManager.registerEffect('overlayText', OverlayTextEffect);
effectManager.registerEffect('colorFilter', ColorFilterEffect);
effectManager.registerEffect('blur', BlurEffect);
effectManager.registerEffect('hueRotate', HueRotateEffect);
effectManager.registerEffect('pixelate', PixelateEffect);
effectManager.registerEffect('jpegArtifact', JpegArtifactEffect);
effectManager.registerEffect('noise', NoiseEffect);
effectManager.registerEffect('aspectRatio', AspectRatioEffect);
effectManager.registerEffect('emoji', EmojiEffect);
effectManager.registerEffect('crop', CropEffect);
effectManager.registerEffect('superimposeImage', SuperimposeImageEffect);
effectManager.registerEffect('memeTopText', MemeTopTextEffect);
effectManager.registerEffect('replaceColor', ReplaceColorEffect);
effectManager.registerEffect('flip', FlipEffect);
effectManager.registerEffect('vignette', VignetteEffect);
effectManager.registerEffect('sharpen', SharpenEffect);

// Export an array of effects
export const registeredEffects = [
    { key: 'invert', effectClass: InvertEffect },
    { key: 'grayscale', effectClass: GrayscaleEffect },
    { key: 'sepia', effectClass: SepiaEffect },
    { key: 'brightnessContrast', effectClass: BrightnessContrastEffect },
    { key: 'overlayText', effectClass: OverlayTextEffect },
    { key: 'colorFilter', effectClass: ColorFilterEffect },
    { key: 'blur', effectClass: BlurEffect },
    { key: 'hueRotate', effectClass: HueRotateEffect },
    { key: 'pixelate', effectClass: PixelateEffect },
    { key: 'jpegArtifact', effectClass: JpegArtifactEffect },
    { key: 'noise', effectClass: NoiseEffect },
    { key: 'aspectRatio', effectClass: AspectRatioEffect },
    { key: 'emoji', effectClass: EmojiEffect },
    { key: 'crop', effectClass: CropEffect },
    { key: 'superimposeImage', effectClass: SuperimposeImageEffect },
    { key: 'memeTopText', effectClass: MemeTopTextEffect },
    { key: 'replaceColor', effectClass: ReplaceColorEffect },
    { key: 'flip', effectClass: FlipEffect },
    { key: 'vignette', effectClass: VignetteEffect },
    { key: 'sharpen', effectClass: SharpenEffect },
];
