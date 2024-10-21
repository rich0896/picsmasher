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

    static getCategory() {
        return 'Uncategorized';
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

    static getCategory() {
        return 'Filters';
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

    static getCategory() {
        return 'Filters';
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

    static getCategory() {
        return 'Filters';
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

    static getCategory() {
        return 'Basic';
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

    static getCategory() {
        return 'Overlays';
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

    static getCategory() {
        return 'Filters';
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

    static getCategory() {
        return 'Artistic';
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

    static getCategory() {
        return 'Basic';
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

    static getCategory() {
        return 'Artistic';
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

    static getCategory() {
        return 'Artistic';
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

    static getCategory() {
        return 'Artistic';
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

    static getCategory() {
        return 'Transformations';
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
                options: EmojiEffect.getEmojiOptions(),
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
                action: 'shufflePositions',
            },
        ];
    }

    static getCategory() {
        return 'Overlays';
    }

    static getEmojiOptions() {
        return {
            smileys: [
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
            ],
            people: [
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
            ],
            animals: [
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
            ],
            food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐'],
            symbols: [
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
        };
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
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
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

    static getCategory() {
        return 'Transformations';
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

    static getCategory() {
        return 'Overlays';
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

    static getCategory() {
        return 'Overlays';
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

    static getCategory() {
        return 'Artistic';
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

    static getCategory() {
        return 'Transformations';
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

    static getCategory() {
        return 'Filters';
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

    static getCategory() {
        return 'Artistic';
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

export class SlicedGlitchEffect extends Effect {
    static getName() {
        return 'Sliced Glitch';
    }

    static getDefaultParameters() {
        return {
            sliceThickness: 10,
            displacementAmount: 20,
            glitchFrequency: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'sliceThickness',
                label: 'Slice Thickness',
                min: 1,
                max: 50,
                step: 1,
            },
            {
                type: 'range',
                param: 'displacementAmount',
                label: 'Displacement Amount',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'glitchFrequency',
                label: 'Glitch Frequency',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Sliced Glitch Effect');
        const { sliceThickness, displacementAmount, glitchFrequency } =
            this.parameters;
        const sliceCount = Math.ceil(canvas.height / sliceThickness);

        for (let i = 0; i < sliceCount; i++) {
            if (Math.random() * 100 < glitchFrequency) {
                const y = i * sliceThickness;
                const displacement =
                    (Math.random() - 0.5) * 2 * displacementAmount;
                ctx.drawImage(
                    canvas,
                    0,
                    y,
                    canvas.width,
                    sliceThickness,
                    displacement,
                    y,
                    canvas.width,
                    sliceThickness
                );
            }
        }
    }
}

export class GhostTrailEffect extends Effect {
    static getName() {
        return 'Ghost Trail';
    }

    static getDefaultParameters() {
        return {
            trailLength: 10,
            trailOpacity: 50,
            motionDirection: 'horizontal',
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'trailLength',
                label: 'Trail Length',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'trailOpacity',
                label: 'Trail Opacity',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'select',
                param: 'motionDirection',
                label: 'Motion Direction',
                options: ['horizontal', 'vertical', 'random'],
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Ghost Trail Effect');
        const { trailLength, trailOpacity, motionDirection } = this.parameters;
        const opacityStep = trailOpacity / 100 / trailLength;
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        for (let i = 0; i < trailLength; i++) {
            tempCtx.clearRect(0, 0, canvas.width, canvas.height);
            tempCtx.globalAlpha = 1 - i * opacityStep;
            let offsetX = 0;
            let offsetY = 0;

            if (motionDirection === 'horizontal') {
                offsetX = i * (canvas.width / trailLength);
            } else if (motionDirection === 'vertical') {
                offsetY = i * (canvas.height / trailLength);
            } else if (motionDirection === 'random') {
                offsetX = Math.random() * canvas.width;
                offsetY = Math.random() * canvas.height;
            }

            tempCtx.drawImage(canvas, offsetX, offsetY);
            ctx.drawImage(tempCanvas, 0, 0);
        }
    }
}

export class ChromaticShatterEffect extends Effect {
    static getName() {
        return 'Chromatic Shatter';
    }

    static getDefaultParameters() {
        return {
            shardSize: 10,
            colorSpread: 50,
            fragmentRotation: 45,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'shardSize',
                label: 'Shard Size',
                min: 1,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'colorSpread',
                label: 'Color Spread',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'fragmentRotation',
                label: 'Fragment Rotation',
                min: 0,
                max: 360,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Chromatic Shatter Effect');
        const { shardSize, colorSpread, fragmentRotation } = this.parameters;
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        for (let y = 0; y < canvas.height; y += shardSize) {
            for (let x = 0; x < canvas.width; x += shardSize) {
                const angle = (Math.random() - 0.5) * 2 * fragmentRotation;
                const colorOffset = (Math.random() - 0.5) * 2 * colorSpread;

                tempCtx.save();
                tempCtx.translate(x + shardSize / 2, y + shardSize / 2);
                tempCtx.rotate((angle * Math.PI) / 180);
                tempCtx.translate(-(x + shardSize / 2), -(y + shardSize / 2));
                tempCtx.globalCompositeOperation = 'source-over';

                tempCtx.drawImage(
                    canvas,
                    x,
                    y,
                    shardSize,
                    shardSize,
                    x + colorOffset,
                    y + colorOffset,
                    shardSize,
                    shardSize
                );

                tempCtx.restore();
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempCanvas, 0, 0);
    }
}

export class NeonGlowEffect extends Effect {
    static getName() {
        return 'Neon Glow';
    }

    static getDefaultParameters() {
        return {
            thickness: 10,
            color: '#00ff00',
            intensity: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'thickness',
                label: 'Glow Thickness',
                min: 1,
                max: 20,
                step: 1,
            },
            {
                type: 'color',
                param: 'color',
                label: 'Glow Color',
            },
            {
                type: 'range',
                param: 'intensity',
                label: 'Glow Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Neon Glow Effect');
        const { thickness, color, intensity } = this.parameters;

        // Create a temporary canvas for edge detection
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        // Draw the original image on the temporary canvas
        tempCtx.drawImage(canvas, 0, 0);

        // Get the image data for edge detection
        const imageData = tempCtx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
        const data = imageData.data;

        // Apply a simple edge detection filter (Sobel operator)
        const sobelData = this.sobelFilter(data, canvas.width, canvas.height);

        // Draw the edges on the original canvas with neon glow
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imageData, 0, 0);

        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.shadowBlur = thickness * (intensity / 100);
        ctx.shadowColor = color;

        ctx.beginPath();
        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const index = (y * canvas.width + x) * 4;
                if (sobelData[index] > 128) {
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 1, y + 1);
                }
            }
        }
        ctx.stroke();
    }

    sobelFilter(data, width, height) {
        const kernelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
        const kernelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];

        const sobelData = new Uint8ClampedArray(data.length);
        const grayscaleData = new Uint8ClampedArray(data.length / 4);

        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            grayscaleData[i / 4] = avg;
        }

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const pixelX =
                    kernelX[0] *
                        this.getPixel(grayscaleData, x - 1, y - 1, width) +
                    kernelX[1] * this.getPixel(grayscaleData, x, y - 1, width) +
                    kernelX[2] *
                        this.getPixel(grayscaleData, x + 1, y - 1, width) +
                    kernelX[3] * this.getPixel(grayscaleData, x - 1, y, width) +
                    kernelX[4] * this.getPixel(grayscaleData, x, y, width) +
                    kernelX[5] * this.getPixel(grayscaleData, x + 1, y, width) +
                    kernelX[6] *
                        this.getPixel(grayscaleData, x - 1, y + 1, width) +
                    kernelX[7] * this.getPixel(grayscaleData, x, y + 1, width) +
                    kernelX[8] *
                        this.getPixel(grayscaleData, x + 1, y + 1, width);

                const pixelY =
                    kernelY[0] *
                        this.getPixel(grayscaleData, x - 1, y - 1, width) +
                    kernelY[1] * this.getPixel(grayscaleData, x, y - 1, width) +
                    kernelY[2] *
                        this.getPixel(grayscaleData, x + 1, y - 1, width) +
                    kernelY[3] * this.getPixel(grayscaleData, x - 1, y, width) +
                    kernelY[4] * this.getPixel(grayscaleData, x, y, width) +
                    kernelY[5] * this.getPixel(grayscaleData, x + 1, y, width) +
                    kernelY[6] *
                        this.getPixel(grayscaleData, x - 1, y + 1, width) +
                    kernelY[7] * this.getPixel(grayscaleData, x, y + 1, width) +
                    kernelY[8] *
                        this.getPixel(grayscaleData, x + 1, y + 1, width);

                const magnitude =
                    Math.sqrt(pixelX * pixelX + pixelY * pixelY) >>> 0;

                const index = (y * width + x) * 4;
                sobelData[index] = magnitude;
                sobelData[index + 1] = magnitude;
                sobelData[index + 2] = magnitude;
                sobelData[index + 3] = 255;
            }
        }

        return sobelData;
    }

    getPixel(data, x, y, width) {
        if (x < 0 || x >= width || y < 0 || y >= width) {
            return 0;
        }
        return data[y * width + x];
    }
}

export class CrystallineRefractionEffect extends Effect {
    static getName() {
        return 'Crystalline Refraction';
    }

    static getDefaultParameters() {
        return {
            crystalSize: 20,
            refractionAngle: 45,
            colorDispersion: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'crystalSize',
                label: 'Crystal Size',
                min: 5,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'refractionAngle',
                label: 'Refraction Angle',
                min: 0,
                max: 360,
                step: 1,
            },
            {
                type: 'range',
                param: 'colorDispersion',
                label: 'Color Dispersion',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Crystalline Refraction Effect');
        const { crystalSize, refractionAngle, colorDispersion } =
            this.parameters;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.putImageData(imageData, 0, 0);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let y = 0; y < canvas.height; y += crystalSize) {
            for (let x = 0; x < canvas.width; x += crystalSize) {
                this.drawCrystal(
                    tempCtx,
                    ctx,
                    x,
                    y,
                    crystalSize,
                    refractionAngle,
                    colorDispersion
                );
            }
        }
    }

    drawCrystal(srcCtx, destCtx, x, y, size, angle, dispersion) {
        const halfSize = size / 2;
        const centerX = x + halfSize;
        const centerY = y + halfSize;

        destCtx.save();
        destCtx.beginPath();
        destCtx.moveTo(x, y);
        destCtx.lineTo(x + size, y);
        destCtx.lineTo(x + size, y + size);
        destCtx.lineTo(x, y + size);
        destCtx.closePath();
        destCtx.clip();

        destCtx.translate(centerX, centerY);
        destCtx.rotate((angle * Math.PI) / 180);
        destCtx.translate(-centerX, -centerY);

        const offsetX = (Math.random() - 0.5) * dispersion;
        const offsetY = (Math.random() - 0.5) * dispersion;

        destCtx.drawImage(
            srcCtx.canvas,
            x + offsetX,
            y + offsetY,
            size,
            size,
            x,
            y,
            size,
            size
        );
        destCtx.restore();
    }
}

export class PixelDriftEffect extends Effect {
    static getName() {
        return 'Pixel Drift';
    }

    static getDefaultParameters() {
        return {
            driftSpeed: 50,
            driftDistance: 25,
            waveFrequency: 50,
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'driftSpeed',
                label: 'Drift Speed',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'driftDistance',
                label: 'Drift Distance',
                min: 0,
                max: 50,
                step: 1,
            },
            {
                type: 'range',
                param: 'waveFrequency',
                label: 'Wave Frequency',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Pixel Drift Effect');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const { driftSpeed, driftDistance, waveFrequency } = this.parameters;

        const speedFactor = driftSpeed / 100;
        const distanceFactor = driftDistance;
        const frequencyFactor = waveFrequency / 100;

        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const index = (y * canvas.width + x) * 4;
                const drift =
                    Math.sin((x + y) * frequencyFactor) *
                    distanceFactor *
                    speedFactor;

                const newX = Math.round(x + drift);
                const newY = y;

                if (newX >= 0 && newX < canvas.width) {
                    const newIndex = (newY * canvas.width + newX) * 4;
                    data[newIndex] = data[index];
                    data[newIndex + 1] = data[index + 1];
                    data[newIndex + 2] = data[index + 2];
                    data[newIndex + 3] = data[index + 3];
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

export class RetroPosterizationEffect extends Effect {
    static getName() {
        return 'Retro Posterization';
    }

    static getDefaultParameters() {
        return {
            colorDepth: 8, // Number of colors per channel
            contrastBoost: 50, // Percentage (0-100)
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'colorDepth',
                label: 'Color Depth',
                min: 2,
                max: 32,
                step: 1,
            },
            {
                type: 'range',
                param: 'contrastBoost',
                label: 'Contrast Boost',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Artistic';
    }

    apply(ctx, canvas) {
        console.log('Applying Retro Posterization Effect');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const { colorDepth, contrastBoost } = this.parameters;

        const levels = Math.max(2, Math.min(32, colorDepth));
        const contrastFactor =
            (259 * (contrastBoost + 255)) / (255 * (259 - contrastBoost));

        for (let i = 0; i < data.length; i += 4) {
            data[i] = this.posterize(data[i], levels, contrastFactor); // Red
            data[i + 1] = this.posterize(data[i + 1], levels, contrastFactor); // Green
            data[i + 2] = this.posterize(data[i + 2], levels, contrastFactor); // Blue
            // Alpha channel remains unchanged
        }

        ctx.putImageData(imageData, 0, 0);
    }

    posterize(value, levels, contrastFactor) {
        const step = 255 / (levels - 1);
        const newValue = Math.round(value / step) * step;
        return Math.min(
            255,
            Math.max(0, contrastFactor * (newValue - 128) + 128)
        );
    }
}

export class BlackHoleTwistEffect extends Effect {
    static getName() {
        return 'Black Hole Twist';
    }

    static getDefaultParameters() {
        return {
            twistRadius: 250,
            twistIntensity: 50,
            centerX: 50, // Percentage
            centerY: 50, // Percentage
        };
    }

    static getControls() {
        return [
            {
                type: 'range',
                param: 'twistRadius',
                label: 'Twist Radius',
                min: 0,
                max: 500,
                step: 1,
            },
            {
                type: 'range',
                param: 'twistIntensity',
                label: 'Twist Intensity',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'centerX',
                label: 'Center X (%)',
                min: 0,
                max: 100,
                step: 1,
            },
            {
                type: 'range',
                param: 'centerY',
                label: 'Center Y (%)',
                min: 0,
                max: 100,
                step: 1,
            },
        ];
    }

    static getCategory() {
        return 'Transformations';
    }

    apply(ctx, canvas) {
        console.log('Applying Black Hole Twist Effect');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const { twistRadius, twistIntensity, centerX, centerY } =
            this.parameters;

        const centerXPixel = (centerX / 100) * canvas.width;
        const centerYPixel = (centerY / 100) * canvas.height;
        const radius = parseFloat(twistRadius);
        const intensity = parseFloat(twistIntensity) / 100;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.putImageData(imageData, 0, 0);

        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const dx = x - centerXPixel;
                const dy = y - centerYPixel;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < radius) {
                    const angle = Math.atan2(dy, dx);
                    const twistAmount =
                        ((radius - distance) / radius) * intensity * Math.PI;
                    const newAngle = angle + twistAmount;

                    const newX = Math.cos(newAngle) * distance + centerXPixel;
                    const newY = Math.sin(newAngle) * distance + centerYPixel;

                    const srcX = Math.round(newX);
                    const srcY = Math.round(newY);

                    if (
                        srcX >= 0 &&
                        srcX < canvas.width &&
                        srcY >= 0 &&
                        srcY < canvas.height
                    ) {
                        const srcIndex = (srcY * canvas.width + srcX) * 4;
                        const destIndex = (y * canvas.width + x) * 4;

                        data[destIndex] = tempCtx.getImageData(
                            srcX,
                            srcY,
                            1,
                            1
                        ).data[0];
                        data[destIndex + 1] = tempCtx.getImageData(
                            srcX,
                            srcY,
                            1,
                            1
                        ).data[1];
                        data[destIndex + 2] = tempCtx.getImageData(
                            srcX,
                            srcY,
                            1,
                            1
                        ).data[2];
                        data[destIndex + 3] = tempCtx.getImageData(
                            srcX,
                            srcY,
                            1,
                            1
                        ).data[3];
                    }
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }
}

/* Register all effects */

const effectManager = new EffectManager();

// effectManager.registerEffect('invert', InvertEffect);
// effectManager.registerEffect('grayscale', GrayscaleEffect);
// effectManager.registerEffect('sepia', SepiaEffect);
// effectManager.registerEffect('brightnessContrast', BrightnessContrastEffect);
// effectManager.registerEffect('overlayText', OverlayTextEffect);
// effectManager.registerEffect('colorFilter', ColorFilterEffect);
// effectManager.registerEffect('blur', BlurEffect);
// effectManager.registerEffect('hueRotate', HueRotateEffect);
// effectManager.registerEffect('pixelate', PixelateEffect);
// effectManager.registerEffect('jpegArtifact', JpegArtifactEffect);
// effectManager.registerEffect('noise', NoiseEffect);
// effectManager.registerEffect('aspectRatio', AspectRatioEffect);
// effectManager.registerEffect('emoji', EmojiEffect);
// effectManager.registerEffect('crop', CropEffect);
// effectManager.registerEffect('superimposeImage', SuperimposeImageEffect);
// effectManager.registerEffect('memeTopText', MemeTopTextEffect);
// effectManager.registerEffect('replaceColor', ReplaceColorEffect);
// effectManager.registerEffect('flip', FlipEffect);
// effectManager.registerEffect('vignette', VignetteEffect);
// effectManager.registerEffect('sharpen', SharpenEffect);
// effectManager.registerEffect('slicedGlitch', SlicedGlitchEffect);
// effectManager.registerEffect('ghostTrail', GhostTrailEffect);
// effectManager.registerEffect('chromaticShatter', ChromaticShatterEffect);
// effectManager.registerEffect('neonGlow', NeonGlowEffect);
// effectManager.registerEffect(
//     'crystallineRefraction',
//     CrystallineRefractionEffect
// );
// effectManager.registerEffect('pixelDrift', PixelDriftEffect);
// effectManager.registerEffect('retroPosterization', RetroPosterizationEffect);
// effectManager.registerEffect('blackHoleTwist', BlackHoleTwistEffect);

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
    { key: 'slicedGlitch', effectClass: SlicedGlitchEffect },
    { key: 'ghostTrail', effectClass: GhostTrailEffect },
    { key: 'chromaticShatter', effectClass: ChromaticShatterEffect },
    { key: 'neonGlow', effectClass: NeonGlowEffect },
    { key: 'crystallineRefraction', effectClass: CrystallineRefractionEffect },
    { key: 'pixelDrift', effectClass: PixelDriftEffect },
    { key: 'retroPosterization', effectClass: RetroPosterizationEffect },
    { key: 'blackHoleTwist', effectClass: BlackHoleTwistEffect },
];
