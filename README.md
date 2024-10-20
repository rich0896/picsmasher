# Pic Smasher

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/7VJc5FtHhWBiASGtuqkyuh/5Sx8HPimX6AD7jDSUS29on/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/7VJc5FtHhWBiASGtuqkyuh/5Sx8HPimX6AD7jDSUS29on/tree/main)

## 🎨 Overview

**Pic Smasher** is a powerful and intuitive web application that allows users to apply a variety of effects to their images. Whether you're looking to enhance your photos, create memes, or add artistic flair, Pic Smasher provides a modular and user-friendly interface to transform your images quickly and effortlessly.

## 🚀 Features

- **Image Upload**: Easily upload images with or without transparency.
- **Modular Effects**: Add, remove, and rearrange a wide range of image effects.
- **Real-Time Editing**: See changes instantly as you adjust effect parameters.
- **Preserve Transparency**: Supports images with transparent backgrounds and maintains transparency upon saving.
- **Download & Copy**: Save your edited images as PNG files or copy them directly to your clipboard.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Extensible Architecture**: Easily add new effects without modifying existing code.

## 🌐 Live Demo

Check out the live application [here](https://rich0896.github.io/picsmasher/).

## 📦 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rich0896/picsmasher.git
   ```

2. **Navigate to the Project Directory**

    ```bash
    cd pic-smasher
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Run the Application Locally**

    ```bash
    npm start
    ```

This will start a local development server accessible at http://localhost:8080.

## 💡 Usage

1. **Upload an Image**
    - Click on the file input to select an image from your device.
2. **Add Effects**
    - Navigate to the "Add Effects" section and click on any effect button to add it to the queue.
3. **Adjust Effect Parameters**
    - Click on the "Settings" button next to each effect in the queue to tweak its parameters.
4. **Rearrange Effects**
    - Drag and drop effects in the queue to change their application order.
5. **Apply Effects**
    - Effects are applied in real-time. Adjust parameters and see changes instantly.
6. **Download or Copy**
    - Use the "Download Image" button to save your edited image or "Copy to Clipboard" to copy it directly.

## 🧪 Testing

Run the following command to execute tests:

```bash
npm test
```

The test suite uses snapshots to compare test results. If an error occurs after modifying an effect, try:

```bash
npm test -- -u
```

This will clear the snapshots.

## 🧰 Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6+)**: Functionality and interactivity.
- **Webpack**: Module bundler.
- **Jest**: Testing framework.
- **SortableJS**: Drag-and-drop functionality for the effect queue.
- **Google Fonts**: Custom fonts for enhanced aesthetics.

## 🤝 Contributing

Wanna add your own effect, or something else entirely? We welcome contributions from the community! Please check out our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 🐛 Reporting Issues

If you encounter any issues or bugs, please [open an issue](https://github.com/rich0896/picsmasher/issues).

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

---

### **Happy Editing! 🎉**
