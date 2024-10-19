// script.js

// Get DOM elements
const imageUpload = document.getElementById('imageUpload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const resetButton = document.getElementById('resetButton');
const downloadButton = document.getElementById('downloadButton');
const effectQueue = document.getElementById('effectQueue');

const effectsGrid = document.querySelector('.effects-grid');

let originalImage = null;
let imageLoaded = false;
let effectsQueue = [];
let effectIdCounter = 0; // Unique ID counter for effects

// Initialize Sortable.js on the effectQueue
let sortable = new Sortable(effectQueue, {
    animation: 150,
    handle: '.drag-handle',
    onEnd: function (evt) {
        console.log('Sortable onEnd event triggered');
        // Update the effectsQueue array based on the new order
        const newOrderIds = sortable.toArray();
        console.log('New order of IDs:', newOrderIds);

        const effectsQueueCopy = [...effectsQueue];
        effectsQueue = newOrderIds.map(id => {
            const item = effectsQueueCopy.find(effectItem => effectItem.id === id);
            if (!item) {
                console.error(`Effect with ID ${id} not found in effectsQueueCopy`);
            }
            return item;
        }).filter(item => item !== undefined);

        updateEffectQueueUI();
        applyEffects();
    }
});

// Function to generate effect buttons dynamically
function generateEffectButtons() {
    const effects = effectManager.getEffects();
    effects.forEach(effectClass => {
        const effectKey = Object.keys(effectManager.effectsRegistry).find(key => effectManager.effectsRegistry[key] === effectClass);
        const displayName = effectClass.getName();

        const button = document.createElement('button');
        button.classList.add('add-effect-button');
        button.textContent = displayName;
        button.dataset.effect = effectKey;

        button.addEventListener('click', () => {
            console.log(`Adding effect to queue: ${effectKey}`);
            const defaultParameters = effectClass.getDefaultParameters();
            const effectInstance = effectManager.createEffect(effectKey, defaultParameters);
            if (!effectInstance) {
                alert(`Effect "${effectKey}" is not available.`);
                return;
            }

            const effectId = 'effect-' + (effectIdCounter++).toString();
            effectsQueue.push({ id: effectId, effect: effectInstance });
            updateEffectQueueUI();

            if (imageLoaded) {
                applyEffects();
            }
        });

        effectsGrid.appendChild(button);
    });
}

// Call generateEffectButtons when the page loads
generateEffectButtons();

// Event listener for image upload
imageUpload.addEventListener('change', (e) => {
    console.log('Image uploaded');
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        console.log('FileReader onload event');
        const img = new Image();
        img.onload = function() {
            console.log('Image onload event');

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
            ctx.drawImage(img, 0, 0, width, height);
            originalImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
            imageLoaded = true;
            applyEffects(); // Apply any effects in the queue
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
});

// Function to update the effect queue UI
function updateEffectQueueUI() {
    console.log('Updating effect queue UI');
    const effectQueue = document.getElementById('effectQueue');
    if (!effectQueue) {
        console.error('Effect queue element not found');
        return;
    }

    effectQueue.innerHTML = '';
    effectsQueue.forEach((item, index) => {
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

        // Effect number
        const effectNumber = document.createElement('span');
        effectNumber.classList.add('effect-number');
        effectNumber.textContent = `${index + 1}.`;
        effectHeader.appendChild(effectNumber);

        const effectLabel = document.createElement('span');
        const effectDisplayName = effect.constructor.getName();
        effectLabel.textContent = `${effectDisplayName}`;
        effectHeader.appendChild(effectLabel);

        // Drag handle
        const dragHandle = document.createElement('span');
        dragHandle.classList.add('drag-handle');
        dragHandle.textContent = '☰';
        effectHeader.appendChild(dragHandle);

        const removeButton = document.createElement('button');
        removeButton.textContent = '✖';
        removeButton.addEventListener('click', () => {
            // Find the index of the effect to remove
            const effectIndex = effectsQueue.findIndex(e => e.id === item.id);
            if (effectIndex > -1) {
                effectsQueue.splice(effectIndex, 1);
                updateEffectQueueUI();
                if (imageLoaded) {
                    applyEffects();
                }
            }
        });
        effectHeader.appendChild(removeButton);

        li.appendChild(effectHeader);

        // Toggle button for effect controls
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Show/Hide Controls';
        toggleButton.addEventListener('click', () => {
            const controlsContainer = document.getElementById(`${item.id}-controls`);
            controlsContainer.style.display = controlsContainer.style.display === 'none' ? 'block' : 'none';
        });
        effectHeader.appendChild(toggleButton);

        // Effect controls (dynamically generated based on effect parameters)
        const effectControls = document.createElement('div');
        effectControls.classList.add('effect-controls');
        effectControls.id = `${item.id}-controls`;
        effectControls.style.display = 'none'; // Initially hidden

        const controls = effect.constructor.getControls();
        controls.forEach(control => {
            const param = control.param;
            const paramValue = effect.parameters[param];
            const controlContainer = document.createElement('div');
            controlContainer.classList.add('control-container');

            const label = document.createElement('label');
            label.textContent = control.label || param.charAt(0).toUpperCase() + param.slice(1);
            controlContainer.appendChild(label);

            let input;

            switch (control.type) {
                case 'range':
                case 'number':
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
                        effect.parameters[param] = input.value;
                        if (imageLoaded) {
                            applyEffects();
                        }
                    });

                    numberInput.addEventListener('input', () => {
                        input.value = numberInput.value;
                        effect.parameters[param] = numberInput.value;
                        if (imageLoaded) {
                            applyEffects();
                        }
                    });

                    controlContainer.appendChild(input);
                    controlContainer.appendChild(numberInput);
                    break;
                case 'color':
                    input = document.createElement('input');
                    input.type = 'color';
                    input.value = paramValue;
                    input.addEventListener('input', () => {
                        effect.parameters[param] = input.value;
                        if (imageLoaded) {
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
                        if (imageLoaded) {
                            applyEffects();
                        }
                    });
                    controlContainer.appendChild(input);
                    break;
                case 'select':
                    input = document.createElement('select');
                    control.options.forEach(optionValue => {
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
                        if (imageLoaded) {
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
                        if (imageLoaded) {
                            applyEffects();
                        }
                    });
                    controlContainer.appendChild(input);
                    break;
                case 'button':
                    input = document.createElement('button');
                    input.textContent = control.label;
                    input.addEventListener('click', () => {
                        control.action(effect);
                        if (imageLoaded) {
                            applyEffects();
                        }
                    });
                    controlContainer.appendChild(input);
                    break;
                case 'emoji':
                    input = document.createElement('div');
                    input.classList.add('emoji-picker-container');
                    const selectedEmoji = document.createElement('div');
                    selectedEmoji.classList.add('selected-emoji');
                    selectedEmoji.textContent = paramValue || '😀'; // Default emoji if none selected
                    input.appendChild(selectedEmoji);

                    const emojiPicker = document.createElement('div');
                    emojiPicker.classList.add('emoji-picker');
                    emojiPicker.style.display = 'none'; // Initially hidden

                    // Populate emoji picker with a grid of emojis
                    const emojis = EmojiEffect.getControls()[0].options;
                    emojis.forEach(emoji => {
                        const emojiItem = document.createElement('div');
                        emojiItem.classList.add('emoji-item');
                        emojiItem.textContent = emoji;
                        emojiItem.addEventListener('click', () => {
                            selectedEmoji.textContent = emoji;
                            effect.parameters[param] = emoji;
                            emojiPicker.style.display = 'none';
                            if (imageLoaded) {
                                applyEffects();
                            }
                        });
                        emojiPicker.appendChild(emojiItem);
                    });

                    input.appendChild(emojiPicker);

                    selectedEmoji.addEventListener('click', () => {
                        emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'grid' : 'none';
                    });

                    controlContainer.appendChild(input);
                    break;
                // Add other input types as needed
                default:
                    console.error(`Unknown control type: ${control.type}`);
            }

            effectControls.appendChild(controlContainer);
        });

        if (effectControls.childNodes.length > 0) {
            li.appendChild(effectControls);
        }

        effectQueue.appendChild(li);
    });

    // Update Sortable.js with the new list
    sortable.sort(effectsQueue.map(item => item.id));
}

// Function to apply effects from the queue
function applyEffects() {
    if (!imageLoaded) {
        console.log('No image loaded. Effects will be applied once an image is uploaded.');
        return;
    }
    console.log('Applying effects from queue');
    // Reset to original image before applying effects
    ctx.putImageData(originalImage, 0, 0);

    // Clear any canvas filters
    ctx.filter = 'none';

    effectsQueue.forEach(item => {
        const effect = item.effect;
        if (!effect) {
            console.error(`Cannot apply effect: Effect is null for item with ID ${item.id}`);
            return;
        }
        console.log(`Applying effect: ${effect.constructor.getName()}, parameters:`, effect.parameters);
        effect.apply(ctx, canvas);
    });
}

// Copy image to clipboard
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', async () => {
    if (!imageLoaded) {
        console.log('No image loaded');
        return;
    }
    canvas.toBlob(async (blob) => {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ]);
            console.log('Image copied to clipboard');
        } catch (err) {
            console.error('Failed to copy image to clipboard', err);
        }
    });
});

// Download image as PNG
downloadButton.addEventListener('click', () => {
    if (!imageLoaded) {
        console.log('No image loaded');
        return;
    }
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

// Reset image to original
resetButton.addEventListener('click', () => {
    console.log('Reset button clicked');
    if (!originalImage) return;
    ctx.putImageData(originalImage, 0, 0);
    // Clear the effects queue
    effectsQueue = [];
    updateEffectQueueUI();
    // Clear any canvas filters
    ctx.filter = 'none';
});
