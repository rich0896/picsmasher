# Contributing to Pic Smasher

First off, thank you for considering contributing to **Pic Smasher**! 🎉 Your efforts are greatly appreciated.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
- [Setup](#setup)
- [Additional Notes](#additional-notes)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expectations for behavior.

## How Can I Contribute?

### Reporting Bugs

If you find a bug in Pic Smasher, please open an issue:

1. Go to the [Issues](https://github.com/yourusername/pic-smasher/issues) page.
2. Click on the "New Issue" button.
3. Provide a clear and descriptive title.
4. Describe the bug in detail, including steps to reproduce it.
5. Mention any relevant information, such as screenshots or error messages.

### Suggesting Enhancements

We love new ideas! To suggest an enhancement:

1. Navigate to the [Issues](https://github.com/yourusername/pic-smasher/issues) page.
2. Click on "New Issue".
3. Use the "Feature Request" template.
4. Clearly describe the feature you’d like to see.

### Pull Requests

Contributions via pull requests are welcome! Here's how to get started:

1. **Fork the Repository**
   - Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/yourusername/pic-smasher.git

### Adding Your Own Effect

Pic Smasher is designed with a modular architecture, making it easy to add new effects. Follow these steps to add your own effect:

1. **Create a New Effect Class**
    - Open the `effects.js` file.
    - Define a new class for your effect that extends the `Effect` base class.

    ```javascript
    // effects.js
    class MyNewEffect extends Effect {
        static getName() {
            return 'My New Effect'; // The name of your effect as it will be displayed on the page
        }

        static getDefaultParameters() {
            return {
                // Default parameters for your effect
            };
        }

        static getControls() {
            return [
                // Controls for your effect
            ];
        }

        constructor(parameters = {}) {
            super(parameters);
            // Initialization code
        }

        apply(ctx, canvas) {
            // Your effect logic here
            // ctx is the rendering context for the canvas element, which provides the methods and properties to draw and manipulate graphics on the canvas.
            // canvas is the HTML canvas element where the effect will be applied.
        }
    }
    ```

2. **Register Your Effect**
    - Locate the `EffectManager` class within the `effects.js` file.
    - Register your new effect by adding it to the `effectsRegistry`.

    ```javascript
    // effects.js

    // ... All other effects defined here ...

    //const effectManager = new EffectManager();
    effectManager.registerEffect('myNewEffect', MyNewEffect); // registerEffect(effect id, effect class)
    ```

3. **Test Your Effect**
    - Run the application and apply your new effect to ensure it works as expected.
    - Write tests for your effect if applicable.

By following these steps, you can easily extend Pic Smasher with new and exciting effects. Happy coding!