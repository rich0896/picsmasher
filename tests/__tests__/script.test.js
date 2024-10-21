/* eslint-disable no-undef */
// __tests__/script.test.js

// Polyfill TextEncoder if necessary
if (typeof TextEncoder === 'undefined') {
    global.TextEncoder = require('util').TextEncoder;
}

import { init, appState, resetAppState } from '../../src/script.js';
import { InvertEffect, GrayscaleEffect } from '../../src/effects.js';

// Mock sortablejs
jest.mock('sortablejs', () => {
    return jest.fn().mockImplementation(() => ({
        sort: jest.fn(),
        destroy: jest.fn(),
    }));
});

// Mock DataTransfer
class DataTransfer {
    constructor() {
        this.items = [];
    }
    get files() {
        return this.items.map((item) => item.getAsFile());
    }
    get types() {
        return [];
    }
    getData() {}
    setData() {}
    clearData() {}
}

Object.defineProperty(global, 'DataTransfer', {
    value: DataTransfer,
});

// Mock ImageData
global.ImageData = class ImageData {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8ClampedArray(width * height * 4);
    }
};

describe('script.js', () => {
    let app;
    let canvas, ctx;

    beforeEach(() => {
        document.body.innerHTML = `
            <header>
                <h1>Pic Smasher</h1>
            </header>
            <main>
                <div class="container">
                    <!-- Left Panel -->
                    <div class="left-panel">
                        <div class="upload-section">
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                aria-label="Upload an image"
                            />
                            <div id="dropArea" class="drop-area">
                                <p>Drag and drop an image here</p>
                            </div>
                        </div>
                        <div class="canvas-section">
                            <canvas id="canvas"></canvas>
                        </div>
                        <div class="buttons-container">
                            <div class="actions-container">
                                <button
                                    id="resetButton"
                                    aria-label="Reset the image"
                                >
                                    Reset Image
                                </button>
                                <button
                                    id="copyButton"
                                    aria-label="Copy image to clipboard"
                                >
                                    Copy to Clipboard
                                </button>
                            </div>
                            <div class="download-container">
                                <label for="fileType">Choose file type:</label>
                                <select id="fileType">
                                    <option value="image/png">PNG</option>
                                    <option value="image/jpeg">JPEG</option>
                                    <option value="image/webp">WEBP</option>
                                    <option value="image/bmp">BMP</option>
                                </select>

                                <button
                                    id="downloadButton"
                                    aria-label="Download the image"
                                >
                                    Download Image
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Right Panel -->
                    <div class="right-panel">
                        <!-- Controls Section -->
                        <div class="controls-section">
                            <h2>Add Effects</h2>
                            <!-- Tabs Navigation -->
                            <div class="tabs">
                                <button class="tab-link active" data-tab="basic">
                                    Basic Adjustments
                                </button>
                                <button class="tab-link" data-tab="filters">
                                    Filters
                                </button>
                                <button class="tab-link" data-tab="transformations">
                                    Transformations
                                </button>
                                <button class="tab-link" data-tab="artistic">
                                    Artistic
                                </button>
                                <button class="tab-link" data-tab="overlays">
                                    Overlays
                                </button>
                            </div>
                            <!-- Tabs Content -->
                            <div class="tabs-content">
                                <!-- Basic Adjustments -->
                                <div class="tab-content active" id="tab-basic">
                                    <div class="effects-grid" data-category="basic">
                                        <!-- Effect buttons for Basic Adjustments will be injected here -->
                                    </div>
                                </div>
                                <!-- Filters -->
                                <div class="tab-content" id="tab-filters">
                                    <div
                                        class="effects-grid"
                                        data-category="filters"
                                    >
                                        <!-- Effect buttons for Filters will be injected here -->
                                    </div>
                                </div>
                                <!-- Transformations -->
                                <div class="tab-content" id="tab-transformations">
                                    <div
                                        class="effects-grid"
                                        data-category="transformations"
                                    >
                                        <!-- Effect buttons for Transformations will be injected here -->
                                    </div>
                                </div>
                                <!-- Artistic Effects -->
                                <div class="tab-content" id="tab-artistic">
                                    <div
                                        class="effects-grid"
                                        data-category="artistic"
                                    >
                                        <!-- Effect buttons for Artistic Effects will be injected here -->
                                    </div>
                                </div>
                                <!-- Overlays -->
                                <div class="tab-content" id="tab-overlays">
                                    <div
                                        class="effects-grid"
                                        data-category="overlays"
                                    >
                                        <!-- Effect buttons for Overlays will be injected here -->
                                    </div>
                                </div>
                            </div>
                            <h2>Effect Queue</h2>
                            <ul id="effectQueue"></ul>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 Camden Richter</p>
            </footer>
        `;
        app = init();
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        // Mock navigator.clipboard
        Object.defineProperty(navigator, 'clipboard', {
            value: {
                write: jest.fn().mockResolvedValue(),
            },
            writable: true,
        });

        // Access the appState
        // appState = require('../script.js').appState;

        // Reset the state before each test
        resetAppState();
    });

    afterEach(() => {
        jest.restoreAllMocks();
        // Clean up any global mocks
        delete global.ClipboardItem;
    });

    test('should initialize without errors', () => {
        // If init throws, this test will fail.
        expect(true).toBe(true);
    });

    test('should generate effect buttons', () => {
        const buttons = document.querySelectorAll('.add-effect-button');
        expect(buttons.length).toBeGreaterThan(0);

        // Check for specific effect buttons
        const invertButton = Array.from(buttons).find(
            (btn) => btn.textContent === 'Invert Colors'
        );
        expect(invertButton).not.toBeNull();
    });

    test('should add effect to queue when effect button is clicked', () => {
        const invertButton = document.querySelector(
            '.add-effect-button[data-effect="invert"]'
        );
        invertButton.click();

        // Check that the effect is added to the effects queue
        const effectQueueItems = document.querySelectorAll('#effectQueue li');
        expect(effectQueueItems.length).toBe(1);

        // Check the effect name
        const effectNameElement =
            effectQueueItems[0].querySelector('.effect-name');
        expect(effectNameElement).not.toBeNull();

        const effectName = effectNameElement.textContent;
        expect(effectName).toBe('Invert Colors');
    });

    test('should load image when image is uploaded', (done) => {
        const imageUpload = document.getElementById('imageUpload');

        // Spy on ctx.drawImage
        const drawImageSpy = jest
            .spyOn(ctx, 'drawImage')
            .mockImplementation(() => {});

        // Simulate file selection
        const file = new File(['dummy content'], 'test.png', {
            type: 'image/png',
        });
        const fileList = {
            0: file,
            length: 1,
            item: (index) => file,
        };
        Object.defineProperty(imageUpload, 'files', {
            value: fileList,
        });

        // Mock FileReader
        jest.spyOn(window, 'FileReader').mockImplementation(() => {
            return {
                readAsDataURL: function () {
                    this.onload({
                        target: { result: 'data:image/png;base64,dummydata' },
                    });
                },
            };
        });

        // Mock Image
        jest.spyOn(window, 'Image').mockImplementation(() => {
            return {
                set src(value) {
                    this.onload();
                },
                onload: null,
                width: 100,
                height: 100,
            };
        });

        imageUpload.dispatchEvent(new Event('change'));

        // Allow the event loop to process the onload handlers
        setTimeout(() => {
            // Assert that the image is drawn on the canvas
            expect(drawImageSpy).toHaveBeenCalled();

            drawImageSpy.mockRestore();
            done();
        }, 0);
    });

    test('should apply effects to the canvas', () => {
        const invertButton = document.querySelector(
            '.add-effect-button[data-effect="invert"]'
        );
        expect(invertButton).not.toBeNull();

        invertButton.click();

        // Mock imageLoaded and originalImage
        appState.imageLoaded = true;
        appState.originalImage = new ImageData(100, 100);

        // Spy on InvertEffect's apply method
        const invertEffectInstance = appState.effectsQueue[0].effect;
        expect(invertEffectInstance).toBeDefined();

        const applySpy = jest.spyOn(invertEffectInstance, 'apply');

        // Call applyEffects
        app.applyEffects();

        // Verify that the effect's apply method was called
        expect(applySpy).toHaveBeenCalledWith(ctx, canvas);

        applySpy.mockRestore();
    });

    test('should reset effects queue and canvas when reset button is clicked', () => {
        const resetButton = document.getElementById('resetButton');

        // Mock effectsQueue and originalImage
        appState.effectsQueue.push({ id: 'effect-1', effect: {} });
        appState.originalImage = new ImageData(100, 100);
        appState.imageLoaded = true;

        // Spy on ctx methods
        const clearRectSpy = jest.spyOn(ctx, 'clearRect');
        const putImageDataSpy = jest.spyOn(ctx, 'putImageData');

        resetButton.click();

        // Assert that the effects queue is cleared
        expect(appState.effectsQueue.length).toBe(0);

        // Assert that canvas is reset
        expect(clearRectSpy).toHaveBeenCalled();
        expect(putImageDataSpy).toHaveBeenCalledWith(
            appState.originalImage,
            0,
            0
        );
    });

    test('should trigger download when download button is clicked', () => {
        appState.imageLoaded = true;

        const downloadButton = document.getElementById('downloadButton');
        const toDataURLSpy = jest
            .spyOn(canvas, 'toDataURL')
            .mockReturnValue('data:image/png;base64,dummydata');

        // Mock createElement only for the link element
        const clickMock = jest.fn();
        const originalCreateElement = document.createElement.bind(document);
        jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
            if (tagName === 'a') {
                return {
                    click: clickMock,
                    href: '',
                    download: '',
                };
            }
            return originalCreateElement(tagName);
        });

        downloadButton.click();

        expect(toDataURLSpy).toHaveBeenCalled();
        expect(clickMock).toHaveBeenCalled();

        document.createElement.mockRestore();
    });

    test('should copy image to clipboard when copy button is clicked', async () => {
        appState.imageLoaded = true;

        const copyButton = document.getElementById('copyButton');

        // Mock canvas.toBlob
        jest.spyOn(canvas, 'toBlob').mockImplementation((callback) => {
            callback(new Blob(['dummy content'], { type: 'image/png' }));
        });

        // Spy on navigator.clipboard.write
        const clipboardWriteSpy = jest.spyOn(navigator.clipboard, 'write');

        // Mock ClipboardItem
        global.ClipboardItem = function (data) {
            return data;
        };

        copyButton.click();

        // Wait for any promises to resolve
        await Promise.resolve();

        expect(clipboardWriteSpy).toHaveBeenCalled();
    });

    test('should update effect parameters when controls are changed', () => {
        const invertButton = document.querySelector(
            '.add-effect-button[data-effect="invert"]'
        );
        invertButton.click();

        // Find the effect's control input
        const intensityInput = document.querySelector(
            '#effectQueue input[type="range"]'
        );
        expect(intensityInput).not.toBeNull();

        // Change the input value
        intensityInput.value = 50;
        intensityInput.dispatchEvent(new Event('input'));

        // Verify that the effect's parameters have been updated
        const effectInstance = appState.effectsQueue[0].effect;
        expect(effectInstance).toBeDefined();
        expect(effectInstance.parameters.intensity).toBe(50);
    });

    test('should apply all effects in the queue', () => {
        appState.imageLoaded = true; // Add this line
        appState.originalImage = new ImageData(100, 100);

        // Add effects to the queue
        const invertEffect = new InvertEffect({ intensity: 100 });
        const grayscaleEffect = new GrayscaleEffect({ intensity: 100 });

        appState.effectsQueue.push({ id: 'effect-1', effect: invertEffect });
        appState.effectsQueue.push({ id: 'effect-2', effect: grayscaleEffect });

        // Spy on the apply methods
        const invertSpy = jest.spyOn(invertEffect, 'apply');
        const grayscaleSpy = jest.spyOn(grayscaleEffect, 'apply');

        // Call applyEffects
        app.applyEffects();

        expect(invertSpy).toHaveBeenCalledWith(ctx, canvas);
        expect(grayscaleSpy).toHaveBeenCalledWith(ctx, canvas);
    });

    test('should update the effect queue UI', () => {
        // Add effects to the queue
        appState.effectsQueue.push({
            id: 'effect-1',
            effect: new InvertEffect({ intensity: 100 }),
        });
        appState.effectsQueue.push({
            id: 'effect-2',
            effect: new GrayscaleEffect({ intensity: 100 }),
        });

        // Call updateEffectQueueUI
        app.updateEffectQueueUI();

        const effectQueueItems = document.querySelectorAll('#effectQueue li');
        expect(effectQueueItems.length).toBe(2);

        const effectNames = Array.from(effectQueueItems).map(
            (item) => item.querySelector('.effect-name').textContent
        );
        expect(effectNames).toEqual(['Invert Colors', 'Grayscale']);
    });

    test('should remove effect from queue when remove button is clicked', () => {
        // Add an effect
        const invertButton = document.querySelector(
            '.add-effect-button[data-effect="invert"]'
        );
        invertButton.click();

        // Find the remove button
        const removeButton = document.querySelector(
            '#effectQueue .remove-effect-button'
        );
        expect(removeButton).not.toBeNull();

        removeButton.click();

        // Check that the effects queue is empty
        const effectQueueItems = document.querySelectorAll('#effectQueue li');
        expect(effectQueueItems.length).toBe(0);

        // Verify that effectsQueue array is empty
        expect(appState.effectsQueue.length).toBe(0);
    });

    test('should load image and draw it on the canvas when an image is uploaded', () => {
        const imageUpload = document.getElementById('imageUpload');

        // Spy on ctx.drawImage
        const drawImageSpy = jest
            .spyOn(ctx, 'drawImage')
            .mockImplementation(() => {});

        // Mock FileReader
        jest.spyOn(window, 'FileReader').mockImplementation(() => {
            return {
                readAsDataURL: jest.fn(function () {
                    this.onload({
                        target: { result: 'data:image/png;base64,dummydata' },
                    });
                }),
            };
        });

        // Mock Image
        const imageMock = {
            onload: null,
            src: '',
            width: 100,
            height: 100,
        };
        jest.spyOn(window, 'Image').mockImplementation(() => imageMock);

        // Simulate file selection
        const file = new File(['dummy content'], 'test.png', {
            type: 'image/png',
        });
        Object.defineProperty(imageUpload, 'files', {
            value: [file],
        });
        imageUpload.dispatchEvent(new Event('change'));

        // Simulate image load
        imageMock.onload();

        // Assert that the image is drawn on the canvas
        expect(drawImageSpy).toHaveBeenCalledWith(
            imageMock,
            0,
            0,
            canvas.width,
            canvas.height
        );
    });

    test('should not apply effects when no image is loaded', () => {
        // Assume imageLoaded is false
        appState.imageLoaded = false;

        // Spy on console.log and console.error
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        // Try to apply effects
        app.applyEffects();

        expect(consoleSpy).toHaveBeenCalledWith(
            'No image loaded. Effects will be applied once an image is uploaded.'
        );
        expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    test('should log an error when originalImage is missing', () => {
        // Set imageLoaded to true but originalImage to null
        appState.imageLoaded = true;
        appState.originalImage = null;

        // Spy on console.error
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        // Try to apply effects
        app.applyEffects();

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Original image data is missing or invalid.'
        );
    });

    test('should log an error when effect is null in effectsQueue', () => {
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        // Add an item with null effect
        appState.effectsQueue.push({ id: 'effect-1', effect: null });

        // Ensure image is loaded and originalImage is set
        appState.imageLoaded = true;
        appState.originalImage = new ImageData(100, 100);

        app.applyEffects();

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Cannot apply effect: Effect is null for item with ID effect-1'
        );
    });
});
