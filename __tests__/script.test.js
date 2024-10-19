/* eslint-disable no-undef */
// __tests__/script.test.js

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { InvertEffect, BlurEffect } = require('../effects.js'); // Import necessary effects
const { applyEffectAndGetImageData } = require('../helpers/testUtils'); // Adjust path if different

// Assuming script.js exports necessary functions
const script = require('../script.js');

describe('script.js', () => {
    let dom, container, canvas, ctx;

    beforeEach(() => {
        // Load the HTML file (assuming you have an index.html)
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
        container = dom.window.document.body;

        // Mock the canvas and context
        canvas = dom.window.document.createElement('canvas');
        canvas.width = 10;
        canvas.height = 10;
        ctx = canvas.getContext('2d');
        container.appendChild(canvas);

        // Initialize script.js functions if necessary
        if (script.init) {
            script.init(canvas);
        }
    });

    test('should initialize canvas correctly', () => {
        // Verify that canvas is set up properly
        expect(canvas).toBeDefined();
        expect(ctx).toBeDefined();
    });

    test('should apply InvertEffect when invert button is clicked', () => {
        // Assuming there's a button with id 'invert-button'
        const invertButton = dom.window.document.createElement('button');
        invertButton.id = 'invert-button';
        container.appendChild(invertButton);

        // Mock the click event
        invertButton.addEventListener('click', () => {
            const effect = new InvertEffect({ intensity: 100 });
            effect.apply(ctx, canvas);
        });

        // Fill canvas with initial color
        ctx.fillStyle = 'rgb(100, 150, 200)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Simulate button click
        invertButton.click();

        // Get the ImageData after inversion
        const serializedImageData = applyEffectAndGetImageData(new InvertEffect({ intensity: 100 }), ctx, canvas);

        // Verify using snapshot
        expect(serializedImageData).toMatchSnapshot();
    });

    test('should apply BlurEffect when blur slider is adjusted', () => {
        // Assuming there's a slider with id 'blur-slider'
        const blurSlider = dom.window.document.createElement('input');
        blurSlider.type = 'range';
        blurSlider.id = 'blur-slider';
        blurSlider.min = 0;
        blurSlider.max = 20;
        blurSlider.value = 5;
        container.appendChild(blurSlider);

        // Mock the input event
        blurSlider.addEventListener('input', (event) => {
            const intensity = parseInt(event.target.value, 10);
            const effect = new BlurEffect({ intensity });
            effect.apply(ctx, canvas);
        });

        // Fill canvas with initial color
        ctx.fillStyle = 'rgb(50, 100, 150)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Simulate slider adjustment
        blurSlider.value = 5;
        const event = new dom.window.Event('input');
        blurSlider.dispatchEvent(event);

        // Get the ImageData after blur
        const serializedImageData = applyEffectAndGetImageData(new BlurEffect({ intensity: 5 }), ctx, canvas);

        // Verify using snapshot
        expect(serializedImageData).toMatchSnapshot();
    });

    // Add more tests for other interactions and effects as needed
});
