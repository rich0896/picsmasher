// script.js

import './styles.css';
import { EffectManager, registeredEffects, EmojiEffect } from './effects.js';
import Sortable from 'sortablejs';

const appState = {
    effectsQueue: [],
    imageLoaded: false,
    originalImage: null,
    effectIdCounter: 0,
};

export function init() {
    // Get DOM elements
    const imageUpload = document.getElementById('imageUpload');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const resetButton = document.getElementById('resetButton');
    const downloadButton = document.getElementById('downloadButton');
    const copyButton = document.getElementById('copyButton');
    const effectsGrid = document.querySelector('.effects-grid');
    const effectQueueElement = document.getElementById('effectQueue');
    const headerH1 = document.querySelector('header h1');
    const dropArea = document.getElementById('dropArea');

    // Initialize variables
    // let effectsQueue = [];
    // let imageLoaded = false;
    // let originalImage = null;
    // let effectIdCounter = 0; // Unique ID counter for effects

    // Initialize effectManager
    const effectManager = new EffectManager();

    // Register effects
    registeredEffects.forEach(({ key, effectClass }) => {
        effectManager.registerEffect(key, effectClass);
    });

    // Initialize Sortable
    const sortable = new Sortable(effectQueueElement, {
        animation: 150,
        handle: '.drag-handle',
        onEnd: function () {
            // Update the effectsQueue array based on the new order
            const newOrderIds = sortable.toArray();
            const effectsQueueCopy = [...appState.effectsQueue];
            appState.effectsQueue = newOrderIds
                .map((id) => {
                    const item = effectsQueueCopy.find(
                        (effectItem) => effectItem.id === id
                    );
                    if (!item) {
                        console.error(
                            `Effect with ID ${id} not found in effectsQueueCopy`
                        );
                    }
                    return item;
                })
                .filter((item) => item !== undefined);

            updateEffectQueueUI();
            applyEffects();
        },
    });

    // Event listeners for header gradient effect
    if (headerH1) {
        headerH1.addEventListener('mousemove', function (e) {
            const rect = headerH1.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const xPercent = (x / rect.width) * 100;
            headerH1.style.backgroundPosition = `${xPercent}% center`;
        });

        headerH1.addEventListener('mouseleave', function () {
            headerH1.style.backgroundPosition = 'center center';
        });
    } else {
        console.warn('header h1 element not found');
    }

    // Function to generate effect buttons
    function generateEffectButtons() {
        const effects = effectManager.getEffects();
        effects.forEach((effectClass) => {
            // Find the effect key associated with the effect class
            const effectKey = Object.keys(effectManager.effectsRegistry).find(
                (key) => effectManager.effectsRegistry[key] === effectClass
            );

            // Get the display name and category from the effect class
            const displayName = effectClass.getName();
            const category =
                effectClass.getCategory().toLowerCase() || 'uncategorized';

            // Create the effect button
            const button = document.createElement('button');
            button.classList.add('add-effect-button');
            button.textContent = displayName;
            button.dataset.effect = effectKey;

            // Add click event listener to the button
            button.addEventListener('click', () => {
                const defaultParameters = effectClass.getDefaultParameters();
                const effectInstance = effectManager.createEffect(
                    effectKey,
                    defaultParameters
                );
                if (!effectInstance) {
                    alert(`Effect "${effectKey}" is not available.`);
                    return;
                }

                const effectId = 'effect-' + appState.effectIdCounter++;
                appState.effectsQueue.push({
                    id: effectId,
                    effect: effectInstance,
                });
                updateEffectQueueUI();

                if (appState.imageLoaded) {
                    applyEffects();
                }
            });

            // Find the effects-grid for the category
            const effectsGrid = document.querySelector(
                `.effects-grid[data-category="${category}"]`
            );
            if (effectsGrid) {
                effectsGrid.appendChild(button);
            } else {
                console.warn(`No effects grid found for category: ${category}`);
            }
        });
    }

    generateEffectButtons();

    /**
     * Updates the effect queue UI.
     */
    function updateEffectQueueUI() {
        if (!effectQueueElement) {
            console.error('Effect queue element not found');
            return;
        }

        effectQueueElement.innerHTML = '';
        appState.effectsQueue.forEach((item, index) => {
            const effect = item.effect;

            if (!effect) {
                console.error(`Effect is null for item with ID ${item.id}`);
                return;
            }

            const li = document.createElement('li');
            li.setAttribute('data-id', item.id); // Set data-id for Sortable.js

            // Effect header with remove button
            const effectHeader = document.createElement('div');
            effectHeader.classList.add('effect-header');

            // Container for drag handle and effect number
            const handleContainer = document.createElement('div');
            handleContainer.classList.add('handle-container');

            // Drag handle
            const dragHandle = document.createElement('span');
            dragHandle.classList.add('drag-handle');
            dragHandle.textContent = '☰';
            handleContainer.appendChild(dragHandle);

            // Effect number
            const effectNumber = document.createElement('span');
            effectNumber.classList.add('effect-number');
            effectNumber.textContent = `${index + 1}.`;
            handleContainer.appendChild(effectNumber);

            effectHeader.appendChild(handleContainer);

            // Effect name
            const effectLabel = document.createElement('span');
            effectLabel.classList.add('effect-name'); // Add this line
            const effectDisplayName = effect.constructor.getName();
            effectLabel.textContent = effectDisplayName;
            effectHeader.appendChild(effectLabel);

            // Container for toggle and remove buttons
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');

            // Toggle button for effect controls
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Settings';
            toggleButton.addEventListener('click', () => {
                const controlsContainer = document.getElementById(
                    `${item.id}-controls`
                );
                controlsContainer.style.display =
                    controlsContainer.style.display === 'none'
                        ? 'block'
                        : 'none';
            });
            buttonContainer.appendChild(toggleButton);

            // Remove button
            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-effect-button');
            removeButton.textContent = '✖';
            removeButton.addEventListener('click', () => {
                const effectIndex = appState.effectsQueue.findIndex(
                    (e) => e.id === item.id
                );
                if (effectIndex > -1) {
                    appState.effectsQueue.splice(effectIndex, 1);
                    updateEffectQueueUI();
                    if (appState.imageLoaded) {
                        applyEffects();
                    }
                }
            });
            buttonContainer.appendChild(removeButton);

            effectHeader.appendChild(buttonContainer);
            li.appendChild(effectHeader);

            // Effect controls (dynamically generated based on effect parameters)
            const effectControls = document.createElement('div');
            effectControls.classList.add('effect-controls');
            effectControls.id = `${item.id}-controls`;
            effectControls.style.display = 'none'; // Initially hidden

            const controls = effect.constructor.getControls();
            controls.forEach((control) => {
                const param = control.param;
                const paramValue = effect.parameters[param];
                const controlContainer = document.createElement('div');
                controlContainer.classList.add('control-container');

                if (control.type !== 'button') {
                    const label = document.createElement('label');
                    label.textContent =
                        control.label ||
                        param.charAt(0).toUpperCase() + param.slice(1);
                    controlContainer.appendChild(label);
                }

                let input;

                switch (control.type) {
                    case 'range':
                    case 'number': {
                        input = document.createElement('input');
                        input.type = 'range';
                        input.min = control.min;
                        input.max = control.max;
                        input.step = control.step;
                        input.value = paramValue;

                        // Create a number input for direct value entry
                        const numberInput = document.createElement('input');
                        numberInput.type = 'number';
                        numberInput.min = control.min;
                        numberInput.max = control.max;
                        numberInput.step = control.step;
                        numberInput.value = paramValue;

                        // Sync range and number inputs
                        input.addEventListener('input', () => {
                            numberInput.value = input.value;
                            effect.parameters[param] = parseFloat(input.value);
                            if (appState.imageLoaded) {
                                applyEffects();
                            }
                        });

                        numberInput.addEventListener('input', () => {
                            input.value = numberInput.value;
                            effect.parameters[param] = parseFloat(
                                numberInput.value
                            );
                            if (appState.imageLoaded) {
                                applyEffects();
                            }
                        });

                        controlContainer.appendChild(input);
                        controlContainer.appendChild(numberInput);
                        break;
                    }
                    case 'color':
                        input = document.createElement('input');
                        input.type = 'color';
                        input.value = paramValue;
                        input.addEventListener('input', () => {
                            effect.parameters[param] = input.value;
                            if (appState.imageLoaded) {
                                applyEffects();
                            }
                        });
                        controlContainer.appendChild(input);
                        break;
                    case 'text':
                        input = document.createElement('input');
                        input.type = 'text';
                        input.value = paramValue;
                        input.addEventListener('input', () => {
                            effect.parameters[param] = input.value;
                            if (appState.imageLoaded) {
                                applyEffects();
                            }
                        });
                        controlContainer.appendChild(input);
                        break;
                    case 'select':
                        input = document.createElement('select');
                        control.options.forEach((optionValue) => {
                            const option = document.createElement('option');
                            option.value = optionValue;
                            option.textContent = optionValue;
                            if (optionValue === paramValue) {
                                option.selected = true;
                            }
                            input.appendChild(option);
                        });
                        input.addEventListener('input', () => {
                            effect.parameters[param] = input.value;
                            if (appState.imageLoaded) {
                                applyEffects();
                            }
                        });
                        controlContainer.appendChild(input);
                        break;
                    case 'checkbox':
                        input = document.createElement('input');
                        input.type = 'checkbox';
                        input.checked = paramValue;
                        input.addEventListener('input', () => {
                            effect.parameters[param] = input.checked;
                            if (appState.imageLoaded) {
                                applyEffects();
                            }
                        });
                        controlContainer.appendChild(input);
                        break;
                    case 'button':
                        input = document.createElement('button');
                        input.textContent =
                            control.label ||
                            param.charAt(0).toUpperCase() + param.slice(1);
                        input.addEventListener('click', () => {
                            if (typeof effect[control.action] === 'function') {
                                effect[control.action]();
                                if (appState.imageLoaded) {
                                    applyEffects();
                                }
                            }
                        });
                        controlContainer.appendChild(input);
                        break;
                    case 'emoji':
                        input = document.createElement('div');
                        input.classList.add('emoji-picker');
                        const selectedEmoji = document.createElement('span');
                        selectedEmoji.textContent = paramValue;
                        selectedEmoji.classList.add('selected-emoji');
                        input.appendChild(selectedEmoji);

                        const emojiTabs = document.createElement('div');
                        emojiTabs.classList.add('emoji-tabs');
                        const categories = Object.keys(
                            EmojiEffect.getEmojiOptions()
                        );
                        categories.forEach((category) => {
                            const tabButton = document.createElement('button');
                            tabButton.classList.add('emoji-tab');
                            tabButton.textContent =
                                category.charAt(0).toUpperCase() +
                                category.slice(1);
                            tabButton.dataset.category = category;
                            if (category === 'smileys') {
                                tabButton.classList.add('active');
                            }
                            emojiTabs.appendChild(tabButton);
                        });
                        input.appendChild(emojiTabs);

                        const emojiGrids = {};
                        categories.forEach((category) => {
                            const emojiGrid = document.createElement('div');
                            emojiGrid.classList.add('emoji-grid');
                            emojiGrid.id = `emoji-grid-${category}`;
                            if (category !== 'smileys') {
                                emojiGrid.style.display = 'none';
                            }
                            emojiGrids[category] = emojiGrid;
                            input.appendChild(emojiGrid);
                        });

                        const emojiOptions = EmojiEffect.getEmojiOptions();
                        Object.keys(emojiOptions).forEach((category) => {
                            emojiOptions[category].forEach((emoji) => {
                                const emojiOption =
                                    document.createElement('span');
                                emojiOption.textContent = emoji;
                                emojiOption.classList.add('emoji-option');
                                emojiOption.addEventListener('click', () => {
                                    effect.parameters[param] = emoji;
                                    selectedEmoji.textContent = emoji;
                                    Object.values(emojiGrids).forEach(
                                        (grid) => (grid.style.display = 'none')
                                    );
                                    emojiTabs.style.display = 'none'; // Hide the tabs
                                    if (appState.imageLoaded) {
                                        applyEffects();
                                    }
                                });
                                emojiGrids[category].appendChild(emojiOption);
                            });
                        });

                        selectedEmoji.addEventListener('click', () => {
                            const isPickerVisible =
                                emojiTabs.style.display === 'flex';
                            if (isPickerVisible) {
                                emojiTabs.style.display = 'none';
                                Object.values(emojiGrids).forEach((grid) => {
                                    grid.style.display = 'none';
                                });
                            } else {
                                emojiTabs.style.display = 'flex';
                                emojiGrids.smileys.style.display = 'grid'; // Show the Smileys grid by default
                            }
                        });

                        emojiTabs.addEventListener('click', (event) => {
                            if (event.target.classList.contains('emoji-tab')) {
                                const category = event.target.dataset.category;
                                Object.values(emojiGrids).forEach(
                                    (grid) => (grid.style.display = 'none')
                                );
                                emojiGrids[category].style.display = 'grid';
                                document
                                    .querySelectorAll('.emoji-tab')
                                    .forEach((tab) =>
                                        tab.classList.remove('active')
                                    );
                                event.target.classList.add('active');
                            }
                        });

                        controlContainer.appendChild(input);
                        break;
                    // Add other control types as needed
                    default:
                        console.error(`Unknown control type: ${control.type}`);
                }

                effectControls.appendChild(controlContainer);
            });

            if (effectControls.childNodes.length > 0) {
                li.appendChild(effectControls);
            }

            effectQueueElement.appendChild(li);
        });

        // Update Sortable.js with the new list
        sortable.sort(appState.effectsQueue.map((item) => item.id));
    }

    /**
     * Applies effects from the queue to the image.
     */
    function applyEffects() {
        if (!appState.imageLoaded) {
            console.log(
                'No image loaded. Effects will be applied once an image is uploaded.'
            );
            return;
        }
        console.log('Applying effects from queue');
        console.log('appState.originalImage:', appState.originalImage);

        if (!(appState.originalImage instanceof ImageData)) {
            console.error('Original image data is missing or invalid.');
            return;
        }

        // Reset to original image before applying effects
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(appState.originalImage, 0, 0);

        // Apply each effect in the queue
        appState.effectsQueue.forEach((item) => {
            const effect = item.effect;
            if (!effect) {
                console.error(
                    `Cannot apply effect: Effect is null for item with ID ${item.id}`
                );
                return;
            }
            console.log(
                `Applying effect: ${effect.constructor.getName()}, parameters:`,
                effect.parameters
            );
            effect.apply(ctx, canvas);
        });
    }

    // **Define Event Handler Functions Before Using Them**

    /**
     * Handles image upload and draws the image on the canvas.
     */
    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                // Calculate scaling to fit within max dimensions
                const maxWidth = 800;
                const maxHeight = 600;
                let width = img.width;
                let height = img.height;

                // Maintain aspect ratio
                if (width > maxWidth || height > maxHeight) {
                    const widthRatio = maxWidth / width;
                    const heightRatio = maxHeight / height;
                    const ratio = Math.min(widthRatio, heightRatio);
                    width = width * ratio;
                    height = height * ratio;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, width, height);
                appState.originalImage = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                appState.imageLoaded = true;
                applyEffects(); // Apply any effects in the queue
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    /**
     * Handles the copy button click event to copy the image to the clipboard.
     */
    function handleCopyButtonClick() {
        if (!appState.imageLoaded) {
            console.log('No image loaded');
            return;
        }
        canvas.toBlob(async (blob) => {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'image/png': blob,
                    }),
                ]);
                console.log('Image copied to clipboard');
            } catch (err) {
                console.error('Failed to copy image to clipboard', err);
            }
        }, 'image/png');
    }

    /**
     * Handles the download button click event to download the image.
     */
    function handleDownloadButtonClick() {
        if (!appState.imageLoaded) {
            console.log('No image loaded');
            return;
        }

        const fileTypeSelect = document.getElementById('fileType');
        const fileType = fileTypeSelect.value;

        const link = document.createElement('a');
        link.download = `edited-image.${fileType.split('/')[1]}`;
        link.href = canvas.toDataURL(fileType);
        link.click();
    }

    /**
     * Handles the reset button click event to reset the canvas and effects queue.
     */
    function handleResetButtonClick() {
        console.log('Reset button clicked');
        appState.effectsQueue = [];
        updateEffectQueueUI();
        if (appState.imageLoaded) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.putImageData(appState.originalImage, 0, 0);
        } else {
            console.log('No image loaded');
        }
    }

    // Tab Switching Logic
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach((tabLink) => {
        tabLink.addEventListener('click', () => {
            const targetTab = tabLink.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabLinks.forEach((link) => link.classList.remove('active'));
            tabContents.forEach((content) =>
                content.classList.remove('active')
            );

            // Add active class to the clicked tab and corresponding content
            tabLink.classList.add('active');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach((eventName) => {
        dropArea.addEventListener(
            eventName,
            () => dropArea.classList.add('active'),
            false
        );
    });

    ['dragleave', 'drop'].forEach((eventName) => {
        dropArea.addEventListener(
            eventName,
            () => dropArea.classList.remove('active'),
            false
        );
    });

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        const url = dt.getData('text/uri-list');
        console.log('Dropped files:', files);

        if (files.length) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                const img = new Image();
                img.onload = function () {
                    loadImageToCanvas(img);
                    dropArea.style.display = 'none';
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        } else if (url) {
            console.log('Dropped URL:', url);
            const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(url)}`;
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Handle CORS
            img.onload = function () {
                loadImageToCanvas(img);
            };
            img.onerror = function () {
                console.error('Failed to load image from URL');
            };
            img.src = proxyUrl;
        }
    }

    function loadImageToCanvas(img) {
        // Calculate scaling to fit within max dimensions
        const maxWidth = 800;
        const maxHeight = 600;
        let width = img.width;
        let height = img.height;

        // Maintain aspect ratio
        if (width > maxWidth || height > maxHeight) {
            const widthRatio = maxWidth / width;
            const heightRatio = maxHeight / height;
            const ratio = Math.min(widthRatio, heightRatio);
            width = width * ratio;
            height = height * ratio;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
        appState.originalImage = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
        appState.imageLoaded = true;
        applyEffects(); // Apply any effects in the queue
    }

    // Show drop area when dragging files over the window
    window.addEventListener(
        'dragenter',
        () => (dropArea.style.display = 'block'),
        true
    );
    window.addEventListener(
        'dragleave',
        () => (dropArea.style.display = 'none'),
        false
    );
    window.addEventListener(
        'drop',
        () => (dropArea.style.display = 'none'),
        false
    );

    // **Attach Event Listeners**
    imageUpload.addEventListener('change', handleImageUpload);
    copyButton.addEventListener('click', handleCopyButtonClick);
    downloadButton.addEventListener('click', handleDownloadButtonClick);
    resetButton.addEventListener('click', handleResetButtonClick);

    // Expose effectsQueue for debugging
    if (typeof window !== 'undefined') {
        window.effectsQueue = appState.effectsQueue;
    }

    return {
        applyEffects,
        updateEffectQueueUI,
        // effectsQueue,
        // imageLoaded,
        // originalImage,
        // Include any other variables or functions you need
    };
}

// Automatically initialize when the DOM is fully loaded
if (typeof window !== 'undefined') {
    // window.effectsQueue = effectsQueue;
    window.addEventListener('DOMContentLoaded', init);
}

export { appState };

export function resetAppState() {
    appState.effectsQueue = [];
    appState.imageLoaded = false;
    appState.originalImage = null;
    appState.effectIdCounter = 0;
}
