/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/effects.js":
/*!************************!*\
  !*** ./src/effects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AspectRatioEffect: () => (/* binding */ AspectRatioEffect),
/* harmony export */   BlackHoleTwistEffect: () => (/* binding */ BlackHoleTwistEffect),
/* harmony export */   BlurEffect: () => (/* binding */ BlurEffect),
/* harmony export */   BrightnessContrastEffect: () => (/* binding */ BrightnessContrastEffect),
/* harmony export */   ChromaticShatterEffect: () => (/* binding */ ChromaticShatterEffect),
/* harmony export */   ColorFilterEffect: () => (/* binding */ ColorFilterEffect),
/* harmony export */   CropEffect: () => (/* binding */ CropEffect),
/* harmony export */   CrystallineRefractionEffect: () => (/* binding */ CrystallineRefractionEffect),
/* harmony export */   Effect: () => (/* binding */ Effect),
/* harmony export */   EffectManager: () => (/* binding */ EffectManager),
/* harmony export */   EmojiEffect: () => (/* binding */ EmojiEffect),
/* harmony export */   FlipEffect: () => (/* binding */ FlipEffect),
/* harmony export */   GhostTrailEffect: () => (/* binding */ GhostTrailEffect),
/* harmony export */   GrayscaleEffect: () => (/* binding */ GrayscaleEffect),
/* harmony export */   HueRotateEffect: () => (/* binding */ HueRotateEffect),
/* harmony export */   InvertEffect: () => (/* binding */ InvertEffect),
/* harmony export */   JpegArtifactEffect: () => (/* binding */ JpegArtifactEffect),
/* harmony export */   MemeTopTextEffect: () => (/* binding */ MemeTopTextEffect),
/* harmony export */   NeonGlowEffect: () => (/* binding */ NeonGlowEffect),
/* harmony export */   NoiseEffect: () => (/* binding */ NoiseEffect),
/* harmony export */   OverlayTextEffect: () => (/* binding */ OverlayTextEffect),
/* harmony export */   PixelDriftEffect: () => (/* binding */ PixelDriftEffect),
/* harmony export */   PixelateEffect: () => (/* binding */ PixelateEffect),
/* harmony export */   ReplaceColorEffect: () => (/* binding */ ReplaceColorEffect),
/* harmony export */   RetroPosterizationEffect: () => (/* binding */ RetroPosterizationEffect),
/* harmony export */   SepiaEffect: () => (/* binding */ SepiaEffect),
/* harmony export */   SharpenEffect: () => (/* binding */ SharpenEffect),
/* harmony export */   SlicedGlitchEffect: () => (/* binding */ SlicedGlitchEffect),
/* harmony export */   SuperimposeImageEffect: () => (/* binding */ SuperimposeImageEffect),
/* harmony export */   VignetteEffect: () => (/* binding */ VignetteEffect),
/* harmony export */   registeredEffects: () => (/* binding */ registeredEffects)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// effects.js

/**
 * Manages the registration and creation of effects.
 */
var EffectManager = /*#__PURE__*/function () {
  function EffectManager() {
    _classCallCheck(this, EffectManager);
    this.effectsRegistry = {};
    this.effectList = [];
  }

  /**
   * Registers an effect class with a unique key.
   * @param {string} effectName - Unique key for the effect.
   * @param {class} effectClass - The effect class to register.
   */
  return _createClass(EffectManager, [{
    key: "registerEffect",
    value: function registerEffect(effectName, effectClass) {
      this.effectsRegistry[effectName] = effectClass;
      this.effectList.push(effectClass);
      // Sort effects alphabetically by name
      this.effectList.sort(function (a, b) {
        return a.getName().localeCompare(b.getName());
      });
    }

    /**
     * Creates an instance of a registered effect.
     * @param {string} effectName - The key of the effect to create.
     * @param {object} parameters - Parameters for the effect instance.
     * @returns {Effect|null} - An instance of the effect or null if not found.
     */
  }, {
    key: "createEffect",
    value: function createEffect(effectName, parameters) {
      var EffectClass = this.effectsRegistry[effectName];
      if (EffectClass) {
        return new EffectClass(parameters);
      } else {
        console.error("Effect \"".concat(effectName, "\" not found in registry."));
        return null;
      }
    }

    /**
     * Retrieves the list of registered effects.
     * @returns {Array} - List of effect classes.
     */
  }, {
    key: "getEffects",
    value: function getEffects() {
      return this.effectList;
    }
  }]);
}();

/**
 * Base class for all effects.
 */
var Effect = /*#__PURE__*/function () {
  function Effect() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Effect);
    this.parameters = parameters;
  }
  return _createClass(Effect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      // To be implemented by subclasses
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Base Effect';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {};
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Uncategorized';
    }
  }]);
}();

/* Define individual effect classes */

var InvertEffect = /*#__PURE__*/function (_Effect) {
  function InvertEffect() {
    _classCallCheck(this, InvertEffect);
    return _callSuper(this, InvertEffect, arguments);
  }
  _inherits(InvertEffect, _Effect);
  return _createClass(InvertEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Invert Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var intensity = parseFloat(this.parameters.intensity) || 100;
      var factor = intensity / 100;
      for (var i = 0; i < data.length; i += 4) {
        // Invert each color channel based on intensity
        data[i] = Math.min(255, data[i] + factor * (255 - 2 * data[i])); // Red
        data[i + 1] = Math.min(255, data[i + 1] + factor * (255 - 2 * data[i + 1])); // Green
        data[i + 2] = Math.min(255, data[i + 2] + factor * (255 - 2 * data[i + 2])); // Blue
        // Alpha channel remains unchanged
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Invert Colors';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        intensity: 100 // Percentage (0-100)
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Filters';
    }
  }]);
}(Effect);
var GrayscaleEffect = /*#__PURE__*/function (_Effect2) {
  function GrayscaleEffect() {
    _classCallCheck(this, GrayscaleEffect);
    return _callSuper(this, GrayscaleEffect, arguments);
  }
  _inherits(GrayscaleEffect, _Effect2);
  return _createClass(GrayscaleEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Grayscale Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var intensity = parseFloat(this.parameters.intensity) || 100;
      var factor = intensity / 100;
      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i] + factor * (avg - data[i]); // Red
        data[i + 1] = data[i + 1] + factor * (avg - data[i + 1]); // Green
        data[i + 2] = data[i + 2] + factor * (avg - data[i + 2]); // Blue
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Grayscale';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        intensity: 100
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Filters';
    }
  }]);
}(Effect);
var SepiaEffect = /*#__PURE__*/function (_Effect3) {
  function SepiaEffect() {
    _classCallCheck(this, SepiaEffect);
    return _callSuper(this, SepiaEffect, arguments);
  }
  _inherits(SepiaEffect, _Effect3);
  return _createClass(SepiaEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Sepia Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var intensity = parseFloat(this.parameters.intensity) || 100;
      var factor = intensity / 100;
      for (var i = 0; i < data.length; i += 4) {
        var red = data[i];
        var green = data[i + 1];
        var blue = data[i + 2];
        data[i] = red + factor * (Math.min(0.393 * red + 0.769 * green + 0.189 * blue, 255) - red);
        data[i + 1] = green + factor * (Math.min(0.349 * red + 0.686 * green + 0.168 * blue, 255) - green);
        data[i + 2] = blue + factor * (Math.min(0.272 * red + 0.534 * green + 0.131 * blue, 255) - blue);
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Sepia';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        intensity: 100
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Filters';
    }
  }]);
}(Effect);
var BrightnessContrastEffect = /*#__PURE__*/function (_Effect4) {
  function BrightnessContrastEffect() {
    _classCallCheck(this, BrightnessContrastEffect);
    return _callSuper(this, BrightnessContrastEffect, arguments);
  }
  _inherits(BrightnessContrastEffect, _Effect4);
  return _createClass(BrightnessContrastEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Brightness/Contrast Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var _this$parameters = this.parameters,
        brightness = _this$parameters.brightness,
        contrast = _this$parameters.contrast;

      // Normalize brightness and contrast
      brightness = parseFloat(brightness) || 0;
      contrast = parseFloat(contrast) || 0;

      // Calculate contrast factor
      var factor = 259 * (contrast + 255) / (255 * (259 - contrast));
      for (var i = 0; i < data.length; i += 4) {
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
  }], [{
    key: "getName",
    value: function getName() {
      return 'Brightness/Contrast';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        brightness: 0,
        // Range: -100 to +100
        contrast: 0 // Range: -100 to +100
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'brightness',
        label: 'Brightness',
        min: -100,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'contrast',
        label: 'Contrast',
        min: -100,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Basic';
    }
  }]);
}(Effect);
var OverlayTextEffect = /*#__PURE__*/function (_Effect5) {
  function OverlayTextEffect() {
    _classCallCheck(this, OverlayTextEffect);
    return _callSuper(this, OverlayTextEffect, arguments);
  }
  _inherits(OverlayTextEffect, _Effect5);
  return _createClass(OverlayTextEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Overlay Text Effect');
      var text = this.parameters.text || 'BRAINROT';
      var fontSize = parseInt(this.parameters.fontSize) || 60;
      var fontFamily = this.parameters.fontFamily || 'Permanent Marker, cursive';
      var color = this.parameters.color || '#ff0000';
      var x = parseFloat(this.parameters.x) || 50; // Percentage
      var y = parseFloat(this.parameters.y) || 50;
      ctx.font = "bold ".concat(fontSize, "px ").concat(fontFamily);
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x / 100 * canvas.width, y / 100 * canvas.height);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Overlay Text';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        text: 'Text',
        fontSize: 60,
        fontFamily: 'Arial',
        color: '#ff0000',
        x: 50,
        y: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'text',
        param: 'text',
        label: 'Text'
      }, {
        type: 'number',
        param: 'fontSize',
        label: 'Font Size',
        min: 10,
        max: 200,
        step: 1
      }, {
        type: 'select',
        param: 'fontFamily',
        label: 'Font Family',
        options: ['Impact, sans-serif', 'Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Tahoma', 'Lucida Console']
      }, {
        type: 'color',
        param: 'color',
        label: 'Color'
      }, {
        type: 'range',
        param: 'x',
        label: 'X Position (%)',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'y',
        label: 'Y Position (%)',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Overlays';
    }
  }]);
}(Effect);
var ColorFilterEffect = /*#__PURE__*/function (_Effect6) {
  function ColorFilterEffect() {
    _classCallCheck(this, ColorFilterEffect);
    return _callSuper(this, ColorFilterEffect, arguments);
  }
  _inherits(ColorFilterEffect, _Effect6);
  return _createClass(ColorFilterEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Color Filter Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var red = parseFloat(this.parameters.red) || 0;
      var green = parseFloat(this.parameters.green) || 0;
      var blue = parseFloat(this.parameters.blue) || 0;
      var intensity = parseFloat(this.parameters.intensity) || 100;
      var factor = intensity / 100;
      for (var i = 0; i < data.length; i += 4) {
        data[i] = data[i] + factor * (red - data[i]); // Red
        data[i + 1] = data[i + 1] + factor * (green - data[i + 1]); // Green
        data[i + 2] = data[i + 2] + factor * (blue - data[i + 2]); // Blue
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Color Filter';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        red: 0,
        green: 0,
        blue: 0,
        intensity: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'red',
        label: 'Red',
        min: 0,
        max: 255,
        step: 1
      }, {
        type: 'range',
        param: 'green',
        label: 'Green',
        min: 0,
        max: 255,
        step: 1
      }, {
        type: 'range',
        param: 'blue',
        label: 'Blue',
        min: 0,
        max: 255,
        step: 1
      }, {
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Filters';
    }
  }]);
}(Effect);
var BlurEffect = /*#__PURE__*/function (_Effect7) {
  function BlurEffect() {
    _classCallCheck(this, BlurEffect);
    return _callSuper(this, BlurEffect, arguments);
  }
  _inherits(BlurEffect, _Effect7);
  return _createClass(BlurEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Blur Effect');
      if (typeof ctx.filter !== 'undefined') {
        // Browser environment
        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        var tempCtx = tempCanvas.getContext('2d');
        tempCtx.filter = "blur(".concat(this.parameters.radius, "px)");
        tempCtx.drawImage(canvas, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempCanvas, 0, 0);
      } else {
        // Node.js environment
        // Implement an alternative blur algorithm or skip the effect
        console.warn('Blur effect is not supported in this environment.');
      }
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Blur';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        radius: 5
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'radius',
        label: 'Radius',
        min: 0,
        max: 10,
        step: 0.1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var HueRotateEffect = /*#__PURE__*/function (_Effect8) {
  function HueRotateEffect() {
    _classCallCheck(this, HueRotateEffect);
    return _callSuper(this, HueRotateEffect, arguments);
  }
  _inherits(HueRotateEffect, _Effect8);
  return _createClass(HueRotateEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Hue Rotate Effect');
      ctx.filter = "hue-rotate(".concat(this.parameters.angle, "deg)");
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Hue Rotate';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        angle: 0
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'angle',
        label: 'Angle',
        min: 0,
        max: 360,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Basic';
    }
  }]);
}(Effect);
var PixelateEffect = /*#__PURE__*/function (_Effect9) {
  function PixelateEffect() {
    _classCallCheck(this, PixelateEffect);
    return _callSuper(this, PixelateEffect, arguments);
  }
  _inherits(PixelateEffect, _Effect9);
  return _createClass(PixelateEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Pixelate Effect');
      var size = this.parameters.size;
      var width = canvas.width;
      var height = canvas.height;
      ctx.drawImage(canvas, 0, 0, width / size, height / size);
      ctx.drawImage(canvas, 0, 0, width / size, height / size, 0, 0, width, height);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Pixelate';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        size: 10
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'size',
        label: 'Pixel Size',
        min: 1,
        max: 50,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var JpegArtifactEffect = /*#__PURE__*/function (_Effect10) {
  function JpegArtifactEffect() {
    _classCallCheck(this, JpegArtifactEffect);
    return _callSuper(this, JpegArtifactEffect, arguments);
  }
  _inherits(JpegArtifactEffect, _Effect10);
  return _createClass(JpegArtifactEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying JPEG Artifact Effect');
      var quality = this.parameters.quality / 100;

      // Create a temporary canvas to preserve the alpha channel
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      var tempCtx = tempCanvas.getContext('2d');

      // Draw the original image on the temporary canvas
      tempCtx.drawImage(canvas, 0, 0);

      // Get the image data from the temporary canvas
      var imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
      var alphaData = new Uint8ClampedArray(imageData.data.length);

      // Copy the alpha channel data
      for (var i = 3; i < imageData.data.length; i += 4) {
        alphaData[i] = imageData.data[i];
      }

      // Convert the temporary canvas to a JPEG data URL
      var dataUrl = tempCanvas.toDataURL('image/jpeg', quality);
      var img = new Image();
      img.src = dataUrl;
      img.onload = function () {
        // Draw the JPEG image back onto the temporary canvas
        tempCtx.clearRect(0, 0, canvas.width, canvas.height);
        tempCtx.drawImage(img, 0, 0);

        // Get the image data from the temporary canvas
        var jpegImageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);

        // Restore the alpha channel data
        for (var _i = 3; _i < jpegImageData.data.length; _i += 4) {
          jpegImageData.data[_i] = alphaData[_i];
        }

        // Put the modified image data back onto the original canvas
        ctx.putImageData(jpegImageData, 0, 0);
      };
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'JPEG Artifact';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        quality: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'quality',
        label: 'Quality',
        min: 1,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var NoiseEffect = /*#__PURE__*/function (_Effect11) {
  function NoiseEffect() {
    _classCallCheck(this, NoiseEffect);
    return _callSuper(this, NoiseEffect, arguments);
  }
  _inherits(NoiseEffect, _Effect11);
  return _createClass(NoiseEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Noise Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var intensity = this.parameters.intensity;
      for (var i = 0; i < data.length; i += 4) {
        var noise = (Math.random() - 0.5) * intensity;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Noise';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        intensity: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var AspectRatioEffect = /*#__PURE__*/function (_Effect12) {
  function AspectRatioEffect() {
    _classCallCheck(this, AspectRatioEffect);
    return _callSuper(this, AspectRatioEffect, arguments);
  }
  _inherits(AspectRatioEffect, _Effect12);
  return _createClass(AspectRatioEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Aspect Ratio Effect');
      var widthRatio = this.parameters.width;
      var heightRatio = this.parameters.height;
      if (widthRatio === 0 || heightRatio === 0) {
        widthRatio = canvas.width;
        heightRatio = canvas.height;
      }
      var aspectRatio = widthRatio / heightRatio;
      var newWidth, newHeight;
      if (canvas.width / canvas.height > aspectRatio) {
        newHeight = canvas.height;
        newWidth = newHeight * aspectRatio;
      } else {
        newWidth = canvas.width;
        newHeight = newWidth / aspectRatio;
      }
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = newWidth;
      tempCanvas.height = newHeight;
      var tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, 0, 0, newWidth, newHeight);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Aspect Crusher';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        width: 1,
        height: 1
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'number',
        param: 'width',
        label: 'Vertical Ratio',
        min: 1,
        max: 100,
        step: 1
      }, {
        type: 'number',
        param: 'height',
        label: 'Horizontal Ratio',
        min: 1,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Transformations';
    }
  }]);
}(Effect);
var EmojiEffect = /*#__PURE__*/function (_Effect13) {
  function EmojiEffect() {
    var _this;
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EmojiEffect);
    _this = _callSuper(this, EmojiEffect, [parameters]);
    _this.positions = _this.generatePositions();
    return _this;
  }
  _inherits(EmojiEffect, _Effect13);
  return _createClass(EmojiEffect, [{
    key: "generatePositions",
    value: function generatePositions() {
      var positions = [];
      for (var i = 0; i < this.parameters.count; i++) {
        positions.push({
          x: Math.random() * 100,
          y: Math.random() * 100
        });
      }
      return positions;
    }
  }, {
    key: "shufflePositions",
    value: function shufflePositions() {
      this.positions = this.generatePositions();
    }
  }, {
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Emoji Overlay Effect');
      var emoji = this.parameters.emoji;
      var size = this.parameters.size;

      // Regenerate positions if count has changed
      if (this.positions.length !== this.parameters.count) {
        this.positions = this.generatePositions();
      }
      this.positions.forEach(function (pos) {
        var x = pos.x / 100 * canvas.width;
        var y = pos.y / 100 * canvas.height;
        var fontSize = Math.random() * size + 10;
        ctx.font = "".concat(fontSize, "px Arial");
        ctx.fillText(emoji, x, y);
      });
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Emoji Spam';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        emoji: '🤣',
        count: 25,
        size: 30,
        positions: []
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'emoji',
        param: 'emoji',
        label: 'Emoji',
        options: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥳', '🤯', '😳', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👋', '🤚', '🖐', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀', '👁', '👅', '👄', '🫦', '👶', '🧒', '👦', '👧', '🧑', '👱', '👨', '🧔', '👩', '🧓', '👴', '👵', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🧏', '🙇', '🤦', '🤷', '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍🏫', '👩‍🏫', '👨‍⚖️', '👩‍⚖️', '👨‍🌾', '👩‍🌾', '👨‍🍳', '👩‍🍳', '👨‍🔧', '👩‍🔧', '👨‍🏭', '👩‍🏭', '👨‍💼', '👩‍💼', '👨‍🔬', '👩‍🔬', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🎨', '👩‍🎨', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀', '👨‍🚒', '👩‍🚒', '👮', '🕵️', '💂', '👷', '🤴', '👸', '👳', '👲', '🧕', '🤵', '👰', '🤰', '🤱', '👩‍🍼', '👼', '🎅', '🤶', '🦸', '🦹', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '🧌', '🫅', '🫃', '🫄', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🦝', '🐻', '🐼', '🦘', '🦡', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪲', '🐛', '🦋', '🐌', '🐞', '🐜', '🪳', '🪰', '🪱', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛', '🪶', '🐓', '🦃', '🦤', '🦚', '🦜', '🦢', '🦩', '🕊', '🐇', '🦝', '🦨', '🦡', '🦫', '🦦', '🦥', '🐁', '🐀', '🐿', '🦔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️', '🆘', '❌', '⭕', '🛑', '⛔', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗', '❕', '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿', '🅿️', '🛗', '🈳', '🈂️', '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '⚧️', '🚻', '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣', '*️⃣', '⏏️', '▶️', '⏸', '⏯', '⏹', '⏺', '⏭', '⏮', '⏩', '⏪', '⏫', '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '🔄', '🔃', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '🔜', '✔️', '☑️', '🔘', '⚪', '⚫', '🔴', '🔵', '🟠', '🟡', '🟢', '🟣', '🟤', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫', '⬛', '⬜', '◼️', '◻️', '◾', '◽', '▪️', '▫️', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷', '🔳', '🔲']
      }, {
        type: 'number',
        param: 'count',
        label: 'Count',
        min: 1,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'size',
        label: 'Size',
        min: 10,
        max: 100,
        step: 1
      }, {
        type: 'button',
        param: 'shuffle',
        label: 'Shuffle Positions',
        action: function action(effect) {
          effect.shufflePositions();
        }
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Overlays';
    }
  }]);
}(Effect);
var CropEffect = /*#__PURE__*/function (_Effect14) {
  function CropEffect() {
    _classCallCheck(this, CropEffect);
    return _callSuper(this, CropEffect, arguments);
  }
  _inherits(CropEffect, _Effect14);
  return _createClass(CropEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Crop Effect');
      var x = parseFloat(this.parameters.x) / 100 * canvas.width;
      var y = parseFloat(this.parameters.y) / 100 * canvas.height;
      var width = parseFloat(this.parameters.width) / 100 * canvas.width;
      var height = parseFloat(this.parameters.height) / 100 * canvas.height;
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      var tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return "Squash n' Stretch";
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'x',
        label: 'X Position (%)',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'y',
        label: 'Y Position (%)',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'width',
        label: 'Width (%)',
        min: 1,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'height',
        label: 'Height (%)',
        min: 1,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Transformations';
    }
  }]);
}(Effect);
var SuperimposeImageEffect = /*#__PURE__*/function (_Effect15) {
  function SuperimposeImageEffect() {
    _classCallCheck(this, SuperimposeImageEffect);
    return _callSuper(this, SuperimposeImageEffect, arguments);
  }
  _inherits(SuperimposeImageEffect, _Effect15);
  return _createClass(SuperimposeImageEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Superimpose Image Effect');
      var imageUrl = this.parameters.imageUrl;
      var x = parseFloat(this.parameters.x) / 100 * canvas.width;
      var y = parseFloat(this.parameters.y) / 100 * canvas.height;
      var width = parseFloat(this.parameters.width) / 100 * canvas.width;
      var height = parseFloat(this.parameters.height) / 100 * canvas.height;
      var opacity = parseFloat(this.parameters.opacity);
      if (imageUrl) {
        var img = new Image();
        img.crossOrigin = 'Anonymous'; // This line is added to handle CORS issues
        img.src = imageUrl;
        img.onload = function () {
          var tempCanvas = document.createElement('canvas');
          tempCanvas.width = canvas.width;
          tempCanvas.height = canvas.height;
          var tempCtx = tempCanvas.getContext('2d');
          tempCtx.drawImage(canvas, 0, 0);
          tempCtx.globalAlpha = opacity;
          tempCtx.drawImage(img, x, y, width, height);
          tempCtx.globalAlpha = 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(tempCanvas, 0, 0);
        };
        img.onerror = function () {
          console.error('Failed to load image for Superimpose Image Effect.');
        };
      } else {
        console.error('No image URL provided for Superimpose Image Effect.');
      }
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Superimpose Image';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        imageUrl: '',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        opacity: 1
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'text',
        param: 'imageUrl',
        label: 'Image URL'
      }, {
        type: 'range',
        param: 'x',
        label: 'X Position (%)',
        min: -100,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'y',
        label: 'Y Position (%)',
        min: -100,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'width',
        label: 'Width (%)',
        min: 1,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'height',
        label: 'Height (%)',
        min: 1,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'opacity',
        label: 'Opacity',
        min: 0,
        max: 1,
        step: 0.01
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Overlays';
    }
  }]);
}(Effect);
var MemeTopTextEffect = /*#__PURE__*/function (_Effect16) {
  function MemeTopTextEffect() {
    _classCallCheck(this, MemeTopTextEffect);
    return _callSuper(this, MemeTopTextEffect, arguments);
  }
  _inherits(MemeTopTextEffect, _Effect16);
  return _createClass(MemeTopTextEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Meme Top Text Effect');
      var text = this.parameters.text || 'TOP TEXT';
      var fontSize = parseInt(this.parameters.fontSize) || 40;
      var fontFamily = this.parameters.fontFamily || 'Impact, sans-serif';
      var color = this.parameters.color || '#ffffff';
      var backgroundColor = this.parameters.backgroundColor || '#000000';
      var height = parseInt(this.parameters.height) || 50;
      var wrapText = this.parameters.wrapText;
      ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, height);
      ctx.fillStyle = color;
      if (wrapText) {
        var words = text.split(' ');
        var line = '';
        var lines = [];
        var maxWidth = canvas.width - 20; // Padding

        for (var i = 0; i < words.length; i++) {
          var testLine = line + words[i] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && i > 0) {
            lines.push(line);
            line = words[i] + ' ';
          } else {
            line = testLine;
          }
        }
        lines.push(line);
        var lineHeight = fontSize * 1.2;
        var totalHeight = lines.length * lineHeight;
        var startY = (height - totalHeight) / 2 + lineHeight / 2;
        for (var j = 0; j < lines.length; j++) {
          ctx.fillText(lines[j], canvas.width / 2, startY + j * lineHeight);
        }
      } else {
        ctx.fillText(text, canvas.width / 2, height / 2);
      }
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Meme Top Text';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        text: 'TOP TEXT',
        fontSize: 40,
        fontFamily: 'Impact, sans-serif',
        color: '#000000',
        backgroundColor: '#ffffff',
        height: 50,
        wrapText: false
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'text',
        param: 'text',
        label: 'Text'
      }, {
        type: 'number',
        param: 'fontSize',
        label: 'Font Size',
        min: 10,
        max: 200,
        step: 1
      }, {
        type: 'select',
        param: 'fontFamily',
        label: 'Font Family',
        options: ['Impact, sans-serif', 'Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Tahoma', 'Lucida Console']
      }, {
        type: 'color',
        param: 'color',
        label: 'Text Color'
      }, {
        type: 'color',
        param: 'backgroundColor',
        label: 'Background Color'
      }, {
        type: 'number',
        param: 'height',
        label: 'Height',
        min: 10,
        max: canvas.height,
        step: 1
      }, {
        type: 'checkbox',
        param: 'wrapText',
        label: 'Wrap Text'
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Overlays';
    }
  }]);
}(Effect);
var ReplaceColorEffect = /*#__PURE__*/function (_Effect17) {
  function ReplaceColorEffect() {
    _classCallCheck(this, ReplaceColorEffect);
    return _callSuper(this, ReplaceColorEffect, arguments);
  }
  _inherits(ReplaceColorEffect, _Effect17);
  return _createClass(ReplaceColorEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Replace Color Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var targetColor = this.hexToRgb(this.parameters.targetColor);
      var replacementColor = this.hexToRgb(this.parameters.replacementColor);
      var tolerance = parseFloat(this.parameters.tolerance) || 0;
      for (var i = 0; i < data.length; i += 4) {
        if (this.colorMatch(data, i, targetColor, tolerance)) {
          data[i] = replacementColor.r;
          data[i + 1] = replacementColor.g;
          data[i + 2] = replacementColor.b;
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var bigint = parseInt(hex.slice(1), 16);
      return {
        r: bigint >> 16 & 255,
        g: bigint >> 8 & 255,
        b: bigint & 255
      };
    }
  }, {
    key: "colorMatch",
    value: function colorMatch(data, index, targetColor, tolerance) {
      var r = data[index];
      var g = data[index + 1];
      var b = data[index + 2];
      return Math.abs(r - targetColor.r) <= tolerance && Math.abs(g - targetColor.g) <= tolerance && Math.abs(b - targetColor.b) <= tolerance;
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Replace Color';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        targetColor: '#ffffff',
        replacementColor: '#000000',
        tolerance: 0
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'color',
        param: 'targetColor',
        label: 'Target Color'
      }, {
        type: 'color',
        param: 'replacementColor',
        label: 'Replacement Color'
      }, {
        type: 'range',
        param: 'tolerance',
        label: 'Tolerance',
        min: 0,
        max: 100,
        step: 0.1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var FlipEffect = /*#__PURE__*/function (_Effect18) {
  function FlipEffect() {
    _classCallCheck(this, FlipEffect);
    return _callSuper(this, FlipEffect, arguments);
  }
  _inherits(FlipEffect, _Effect18);
  return _createClass(FlipEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Flip Effect');
      var direction = this.parameters.direction;
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
  }], [{
    key: "getName",
    value: function getName() {
      return 'Flip';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        direction: 'horizontal' // or 'vertical'
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'select',
        param: 'direction',
        label: 'Direction',
        options: ['horizontal', 'vertical']
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Transformations';
    }
  }]);
}(Effect);
var VignetteEffect = /*#__PURE__*/function (_Effect19) {
  function VignetteEffect() {
    _classCallCheck(this, VignetteEffect);
    return _callSuper(this, VignetteEffect, arguments);
  }
  _inherits(VignetteEffect, _Effect19);
  return _createClass(VignetteEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Vignette Effect');
      var intensity = parseFloat(this.parameters.intensity) || 50;
      var gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "rgba(0, 0, 0, ".concat(intensity / 100, ")"));
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Vignette';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        intensity: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Filters';
    }
  }]);
}(Effect);
var SharpenEffect = /*#__PURE__*/function (_Effect20) {
  function SharpenEffect() {
    _classCallCheck(this, SharpenEffect);
    return _callSuper(this, SharpenEffect, arguments);
  }
  _inherits(SharpenEffect, _Effect20);
  return _createClass(SharpenEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Sharpen Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var intensity = parseFloat(this.parameters.intensity) || 1;

      // Define a simple sharpening kernel
      var kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];
      var side = Math.round(Math.sqrt(kernel.length));
      var halfSide = Math.floor(side / 2);
      var src = imageData.data;
      var sw = imageData.width;
      var sh = imageData.height;
      var w = sw;
      var h = sh;
      var output = ctx.createImageData(w, h);
      var dst = output.data;
      for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
          var r = 0,
            g = 0,
            b = 0;
          for (var cy = 0; cy < side; cy++) {
            for (var cx = 0; cx < side; cx++) {
              var scy = y + cy - halfSide;
              var scx = x + cx - halfSide;
              if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                var srcOffset = (scy * sw + scx) * 4;
                var wt = kernel[cy * side + cx];
                r += src[srcOffset] * wt;
                g += src[srcOffset + 1] * wt;
                b += src[srcOffset + 2] * wt;
              }
            }
          }
          var dstOffset = (y * w + x) * 4;
          dst[dstOffset] = Math.min(255, Math.max(0, r * intensity));
          dst[dstOffset + 1] = Math.min(255, Math.max(0, g * intensity));
          dst[dstOffset + 2] = Math.min(255, Math.max(0, b * intensity));
          dst[dstOffset + 3] = src[(y * sw + x) * 4 + 3]; // Alpha remains unchanged
        }
      }
      ctx.putImageData(output, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Sharpen';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        intensity: 1 // Multiplier for the sharpening effect
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'intensity',
        label: 'Intensity',
        min: 1,
        max: 5,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var SlicedGlitchEffect = /*#__PURE__*/function (_Effect21) {
  function SlicedGlitchEffect() {
    _classCallCheck(this, SlicedGlitchEffect);
    return _callSuper(this, SlicedGlitchEffect, arguments);
  }
  _inherits(SlicedGlitchEffect, _Effect21);
  return _createClass(SlicedGlitchEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Sliced Glitch Effect');
      var _this$parameters2 = this.parameters,
        sliceThickness = _this$parameters2.sliceThickness,
        displacementAmount = _this$parameters2.displacementAmount,
        glitchFrequency = _this$parameters2.glitchFrequency;
      var sliceCount = Math.ceil(canvas.height / sliceThickness);
      for (var i = 0; i < sliceCount; i++) {
        if (Math.random() * 100 < glitchFrequency) {
          var y = i * sliceThickness;
          var displacement = (Math.random() - 0.5) * 2 * displacementAmount;
          ctx.drawImage(canvas, 0, y, canvas.width, sliceThickness, displacement, y, canvas.width, sliceThickness);
        }
      }
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Sliced Glitch';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        sliceThickness: 10,
        displacementAmount: 20,
        glitchFrequency: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'sliceThickness',
        label: 'Slice Thickness',
        min: 1,
        max: 50,
        step: 1
      }, {
        type: 'range',
        param: 'displacementAmount',
        label: 'Displacement Amount',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'glitchFrequency',
        label: 'Glitch Frequency',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var GhostTrailEffect = /*#__PURE__*/function (_Effect22) {
  function GhostTrailEffect() {
    _classCallCheck(this, GhostTrailEffect);
    return _callSuper(this, GhostTrailEffect, arguments);
  }
  _inherits(GhostTrailEffect, _Effect22);
  return _createClass(GhostTrailEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Ghost Trail Effect');
      var _this$parameters3 = this.parameters,
        trailLength = _this$parameters3.trailLength,
        trailOpacity = _this$parameters3.trailOpacity,
        motionDirection = _this$parameters3.motionDirection;
      var opacityStep = trailOpacity / 100 / trailLength;
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      var tempCtx = tempCanvas.getContext('2d');
      for (var i = 0; i < trailLength; i++) {
        tempCtx.clearRect(0, 0, canvas.width, canvas.height);
        tempCtx.globalAlpha = 1 - i * opacityStep;
        var offsetX = 0;
        var offsetY = 0;
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
  }], [{
    key: "getName",
    value: function getName() {
      return 'Ghost Trail';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        trailLength: 10,
        trailOpacity: 50,
        motionDirection: 'horizontal'
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'trailLength',
        label: 'Trail Length',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'trailOpacity',
        label: 'Trail Opacity',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'select',
        param: 'motionDirection',
        label: 'Motion Direction',
        options: ['horizontal', 'vertical', 'random']
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var ChromaticShatterEffect = /*#__PURE__*/function (_Effect23) {
  function ChromaticShatterEffect() {
    _classCallCheck(this, ChromaticShatterEffect);
    return _callSuper(this, ChromaticShatterEffect, arguments);
  }
  _inherits(ChromaticShatterEffect, _Effect23);
  return _createClass(ChromaticShatterEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Chromatic Shatter Effect');
      var _this$parameters4 = this.parameters,
        shardSize = _this$parameters4.shardSize,
        colorSpread = _this$parameters4.colorSpread,
        fragmentRotation = _this$parameters4.fragmentRotation;
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      var tempCtx = tempCanvas.getContext('2d');
      for (var y = 0; y < canvas.height; y += shardSize) {
        for (var x = 0; x < canvas.width; x += shardSize) {
          var angle = (Math.random() - 0.5) * 2 * fragmentRotation;
          var colorOffset = (Math.random() - 0.5) * 2 * colorSpread;
          tempCtx.save();
          tempCtx.translate(x + shardSize / 2, y + shardSize / 2);
          tempCtx.rotate(angle * Math.PI / 180);
          tempCtx.translate(-(x + shardSize / 2), -(y + shardSize / 2));
          tempCtx.globalCompositeOperation = 'source-over';
          tempCtx.drawImage(canvas, x, y, shardSize, shardSize, x + colorOffset, y + colorOffset, shardSize, shardSize);
          tempCtx.restore();
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tempCanvas, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Chromatic Shatter';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        shardSize: 10,
        colorSpread: 50,
        fragmentRotation: 45
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'shardSize',
        label: 'Shard Size',
        min: 1,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'colorSpread',
        label: 'Color Spread',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'fragmentRotation',
        label: 'Fragment Rotation',
        min: 0,
        max: 360,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var NeonGlowEffect = /*#__PURE__*/function (_Effect24) {
  function NeonGlowEffect() {
    _classCallCheck(this, NeonGlowEffect);
    return _callSuper(this, NeonGlowEffect, arguments);
  }
  _inherits(NeonGlowEffect, _Effect24);
  return _createClass(NeonGlowEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Neon Glow Effect');
      var _this$parameters5 = this.parameters,
        thickness = _this$parameters5.thickness,
        color = _this$parameters5.color,
        intensity = _this$parameters5.intensity;

      // Create a temporary canvas for edge detection
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      var tempCtx = tempCanvas.getContext('2d');

      // Draw the original image on the temporary canvas
      tempCtx.drawImage(canvas, 0, 0);

      // Get the image data for edge detection
      var imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      // Apply a simple edge detection filter (Sobel operator)
      var sobelData = this.sobelFilter(data, canvas.width, canvas.height);

      // Draw the edges on the original canvas with neon glow
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imageData, 0, 0);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = color;
      ctx.shadowBlur = thickness * (intensity / 100);
      ctx.shadowColor = color;
      ctx.beginPath();
      for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {
          var index = (y * canvas.width + x) * 4;
          if (sobelData[index] > 128) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + 1, y + 1);
          }
        }
      }
      ctx.stroke();
    }
  }, {
    key: "sobelFilter",
    value: function sobelFilter(data, width, height) {
      var kernelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
      var kernelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
      var sobelData = new Uint8ClampedArray(data.length);
      var grayscaleData = new Uint8ClampedArray(data.length / 4);
      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        grayscaleData[i / 4] = avg;
      }
      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var pixelX = kernelX[0] * this.getPixel(grayscaleData, x - 1, y - 1, width) + kernelX[1] * this.getPixel(grayscaleData, x, y - 1, width) + kernelX[2] * this.getPixel(grayscaleData, x + 1, y - 1, width) + kernelX[3] * this.getPixel(grayscaleData, x - 1, y, width) + kernelX[4] * this.getPixel(grayscaleData, x, y, width) + kernelX[5] * this.getPixel(grayscaleData, x + 1, y, width) + kernelX[6] * this.getPixel(grayscaleData, x - 1, y + 1, width) + kernelX[7] * this.getPixel(grayscaleData, x, y + 1, width) + kernelX[8] * this.getPixel(grayscaleData, x + 1, y + 1, width);
          var pixelY = kernelY[0] * this.getPixel(grayscaleData, x - 1, y - 1, width) + kernelY[1] * this.getPixel(grayscaleData, x, y - 1, width) + kernelY[2] * this.getPixel(grayscaleData, x + 1, y - 1, width) + kernelY[3] * this.getPixel(grayscaleData, x - 1, y, width) + kernelY[4] * this.getPixel(grayscaleData, x, y, width) + kernelY[5] * this.getPixel(grayscaleData, x + 1, y, width) + kernelY[6] * this.getPixel(grayscaleData, x - 1, y + 1, width) + kernelY[7] * this.getPixel(grayscaleData, x, y + 1, width) + kernelY[8] * this.getPixel(grayscaleData, x + 1, y + 1, width);
          var magnitude = Math.sqrt(pixelX * pixelX + pixelY * pixelY) >>> 0;
          var index = (y * width + x) * 4;
          sobelData[index] = magnitude;
          sobelData[index + 1] = magnitude;
          sobelData[index + 2] = magnitude;
          sobelData[index + 3] = 255;
        }
      }
      return sobelData;
    }
  }, {
    key: "getPixel",
    value: function getPixel(data, x, y, width) {
      if (x < 0 || x >= width || y < 0 || y >= width) {
        return 0;
      }
      return data[y * width + x];
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Neon Glow';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        thickness: 10,
        color: '#00ff00',
        intensity: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'thickness',
        label: 'Glow Thickness',
        min: 1,
        max: 20,
        step: 1
      }, {
        type: 'color',
        param: 'color',
        label: 'Glow Color'
      }, {
        type: 'range',
        param: 'intensity',
        label: 'Glow Intensity',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var CrystallineRefractionEffect = /*#__PURE__*/function (_Effect25) {
  function CrystallineRefractionEffect() {
    _classCallCheck(this, CrystallineRefractionEffect);
    return _callSuper(this, CrystallineRefractionEffect, arguments);
  }
  _inherits(CrystallineRefractionEffect, _Effect25);
  return _createClass(CrystallineRefractionEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Crystalline Refraction Effect');
      var _this$parameters6 = this.parameters,
        crystalSize = _this$parameters6.crystalSize,
        refractionAngle = _this$parameters6.refractionAngle,
        colorDispersion = _this$parameters6.colorDispersion;
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      var tempCtx = tempCanvas.getContext('2d');
      tempCtx.putImageData(imageData, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var y = 0; y < canvas.height; y += crystalSize) {
        for (var x = 0; x < canvas.width; x += crystalSize) {
          this.drawCrystal(tempCtx, ctx, x, y, crystalSize, refractionAngle, colorDispersion);
        }
      }
    }
  }, {
    key: "drawCrystal",
    value: function drawCrystal(srcCtx, destCtx, x, y, size, angle, dispersion) {
      var halfSize = size / 2;
      var centerX = x + halfSize;
      var centerY = y + halfSize;
      destCtx.save();
      destCtx.beginPath();
      destCtx.moveTo(x, y);
      destCtx.lineTo(x + size, y);
      destCtx.lineTo(x + size, y + size);
      destCtx.lineTo(x, y + size);
      destCtx.closePath();
      destCtx.clip();
      destCtx.translate(centerX, centerY);
      destCtx.rotate(angle * Math.PI / 180);
      destCtx.translate(-centerX, -centerY);
      var offsetX = (Math.random() - 0.5) * dispersion;
      var offsetY = (Math.random() - 0.5) * dispersion;
      destCtx.drawImage(srcCtx.canvas, x + offsetX, y + offsetY, size, size, x, y, size, size);
      destCtx.restore();
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Crystalline Refraction';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        crystalSize: 20,
        refractionAngle: 45,
        colorDispersion: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'crystalSize',
        label: 'Crystal Size',
        min: 5,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'refractionAngle',
        label: 'Refraction Angle',
        min: 0,
        max: 360,
        step: 1
      }, {
        type: 'range',
        param: 'colorDispersion',
        label: 'Color Dispersion',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var PixelDriftEffect = /*#__PURE__*/function (_Effect26) {
  function PixelDriftEffect() {
    _classCallCheck(this, PixelDriftEffect);
    return _callSuper(this, PixelDriftEffect, arguments);
  }
  _inherits(PixelDriftEffect, _Effect26);
  return _createClass(PixelDriftEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Pixel Drift Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var _this$parameters7 = this.parameters,
        driftSpeed = _this$parameters7.driftSpeed,
        driftDistance = _this$parameters7.driftDistance,
        waveFrequency = _this$parameters7.waveFrequency;
      var speedFactor = driftSpeed / 100;
      var distanceFactor = driftDistance;
      var frequencyFactor = waveFrequency / 100;
      for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {
          var index = (y * canvas.width + x) * 4;
          var drift = Math.sin((x + y) * frequencyFactor) * distanceFactor * speedFactor;
          var newX = Math.round(x + drift);
          var newY = y;
          if (newX >= 0 && newX < canvas.width) {
            var newIndex = (newY * canvas.width + newX) * 4;
            data[newIndex] = data[index];
            data[newIndex + 1] = data[index + 1];
            data[newIndex + 2] = data[index + 2];
            data[newIndex + 3] = data[index + 3];
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Pixel Drift';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        driftSpeed: 50,
        driftDistance: 25,
        waveFrequency: 50
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'driftSpeed',
        label: 'Drift Speed',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'driftDistance',
        label: 'Drift Distance',
        min: 0,
        max: 50,
        step: 1
      }, {
        type: 'range',
        param: 'waveFrequency',
        label: 'Wave Frequency',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var RetroPosterizationEffect = /*#__PURE__*/function (_Effect27) {
  function RetroPosterizationEffect() {
    _classCallCheck(this, RetroPosterizationEffect);
    return _callSuper(this, RetroPosterizationEffect, arguments);
  }
  _inherits(RetroPosterizationEffect, _Effect27);
  return _createClass(RetroPosterizationEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Retro Posterization Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var _this$parameters8 = this.parameters,
        colorDepth = _this$parameters8.colorDepth,
        contrastBoost = _this$parameters8.contrastBoost;
      var levels = Math.max(2, Math.min(32, colorDepth));
      var contrastFactor = 259 * (contrastBoost + 255) / (255 * (259 - contrastBoost));
      for (var i = 0; i < data.length; i += 4) {
        data[i] = this.posterize(data[i], levels, contrastFactor); // Red
        data[i + 1] = this.posterize(data[i + 1], levels, contrastFactor); // Green
        data[i + 2] = this.posterize(data[i + 2], levels, contrastFactor); // Blue
        // Alpha channel remains unchanged
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }, {
    key: "posterize",
    value: function posterize(value, levels, contrastFactor) {
      var step = 255 / (levels - 1);
      var newValue = Math.round(value / step) * step;
      return Math.min(255, Math.max(0, contrastFactor * (newValue - 128) + 128));
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Retro Posterization';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        colorDepth: 8,
        // Number of colors per channel
        contrastBoost: 50 // Percentage (0-100)
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'colorDepth',
        label: 'Color Depth',
        min: 2,
        max: 32,
        step: 1
      }, {
        type: 'range',
        param: 'contrastBoost',
        label: 'Contrast Boost',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Artistic';
    }
  }]);
}(Effect);
var BlackHoleTwistEffect = /*#__PURE__*/function (_Effect28) {
  function BlackHoleTwistEffect() {
    _classCallCheck(this, BlackHoleTwistEffect);
    return _callSuper(this, BlackHoleTwistEffect, arguments);
  }
  _inherits(BlackHoleTwistEffect, _Effect28);
  return _createClass(BlackHoleTwistEffect, [{
    key: "apply",
    value: function apply(ctx, canvas) {
      console.log('Applying Black Hole Twist Effect');
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var _this$parameters9 = this.parameters,
        twistRadius = _this$parameters9.twistRadius,
        twistIntensity = _this$parameters9.twistIntensity,
        centerX = _this$parameters9.centerX,
        centerY = _this$parameters9.centerY;
      var centerXPixel = centerX / 100 * canvas.width;
      var centerYPixel = centerY / 100 * canvas.height;
      var radius = parseFloat(twistRadius);
      var intensity = parseFloat(twistIntensity) / 100;
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      var tempCtx = tempCanvas.getContext('2d');
      tempCtx.putImageData(imageData, 0, 0);
      for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {
          var dx = x - centerXPixel;
          var dy = y - centerYPixel;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < radius) {
            var angle = Math.atan2(dy, dx);
            var twistAmount = (radius - distance) / radius * intensity * Math.PI;
            var newAngle = angle + twistAmount;
            var newX = Math.cos(newAngle) * distance + centerXPixel;
            var newY = Math.sin(newAngle) * distance + centerYPixel;
            var srcX = Math.round(newX);
            var srcY = Math.round(newY);
            if (srcX >= 0 && srcX < canvas.width && srcY >= 0 && srcY < canvas.height) {
              var srcIndex = (srcY * canvas.width + srcX) * 4;
              var destIndex = (y * canvas.width + x) * 4;
              data[destIndex] = tempCtx.getImageData(srcX, srcY, 1, 1).data[0];
              data[destIndex + 1] = tempCtx.getImageData(srcX, srcY, 1, 1).data[1];
              data[destIndex + 2] = tempCtx.getImageData(srcX, srcY, 1, 1).data[2];
              data[destIndex + 3] = tempCtx.getImageData(srcX, srcY, 1, 1).data[3];
            }
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'Black Hole Twist';
    }
  }, {
    key: "getDefaultParameters",
    value: function getDefaultParameters() {
      return {
        twistRadius: 250,
        twistIntensity: 50,
        centerX: 50,
        // Percentage
        centerY: 50 // Percentage
      };
    }
  }, {
    key: "getControls",
    value: function getControls() {
      return [{
        type: 'range',
        param: 'twistRadius',
        label: 'Twist Radius',
        min: 0,
        max: 500,
        step: 1
      }, {
        type: 'range',
        param: 'twistIntensity',
        label: 'Twist Intensity',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'centerX',
        label: 'Center X (%)',
        min: 0,
        max: 100,
        step: 1
      }, {
        type: 'range',
        param: 'centerY',
        label: 'Center Y (%)',
        min: 0,
        max: 100,
        step: 1
      }];
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return 'Transformations';
    }
  }]);
}(Effect);

/* Register all effects */

var effectManager = new EffectManager();

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
var registeredEffects = [{
  key: 'invert',
  effectClass: InvertEffect
}, {
  key: 'grayscale',
  effectClass: GrayscaleEffect
}, {
  key: 'sepia',
  effectClass: SepiaEffect
}, {
  key: 'brightnessContrast',
  effectClass: BrightnessContrastEffect
}, {
  key: 'overlayText',
  effectClass: OverlayTextEffect
}, {
  key: 'colorFilter',
  effectClass: ColorFilterEffect
}, {
  key: 'blur',
  effectClass: BlurEffect
}, {
  key: 'hueRotate',
  effectClass: HueRotateEffect
}, {
  key: 'pixelate',
  effectClass: PixelateEffect
}, {
  key: 'jpegArtifact',
  effectClass: JpegArtifactEffect
}, {
  key: 'noise',
  effectClass: NoiseEffect
}, {
  key: 'aspectRatio',
  effectClass: AspectRatioEffect
}, {
  key: 'emoji',
  effectClass: EmojiEffect
}, {
  key: 'crop',
  effectClass: CropEffect
}, {
  key: 'superimposeImage',
  effectClass: SuperimposeImageEffect
}, {
  key: 'memeTopText',
  effectClass: MemeTopTextEffect
}, {
  key: 'replaceColor',
  effectClass: ReplaceColorEffect
}, {
  key: 'flip',
  effectClass: FlipEffect
}, {
  key: 'vignette',
  effectClass: VignetteEffect
}, {
  key: 'sharpen',
  effectClass: SharpenEffect
}, {
  key: 'slicedGlitch',
  effectClass: SlicedGlitchEffect
}, {
  key: 'ghostTrail',
  effectClass: GhostTrailEffect
}, {
  key: 'chromaticShatter',
  effectClass: ChromaticShatterEffect
}, {
  key: 'neonGlow',
  effectClass: NeonGlowEffect
}, {
  key: 'crystallineRefraction',
  effectClass: CrystallineRefractionEffect
}, {
  key: 'pixelDrift',
  effectClass: PixelDriftEffect
}, {
  key: 'retroPosterization',
  effectClass: RetroPosterizationEffect
}, {
  key: 'blackHoleTwist',
  effectClass: BlackHoleTwistEffect
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Styles */
body {
    background-color: #0d0d0d;
    color: #ffffff;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    min-height: 100vh; /* Ensure body takes full height */
    display: flex;
    flex-direction: column;
}

header {
    background-color: #1a1a1a;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 32px;
    font-family: 'Press Start 2P', cursive;
    color: #7c7c7c;
    user-select: none;
    width: fit-content;
    color: transparent;
    background-image: linear-gradient(90deg, #ff7f50, #1e90ff, #32cd32);
    background-size: 600%;
    background-clip: text;
    -webkit-background-clip: text; /* For Safari compatibility */
    transition: background-position 0.1s;
    margin: 0 auto;
}

main {
    flex: 1; /* Allow main content to grow and fill available space */
    padding: 20px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

.left-panel,
.right-panel {
    flex: 1;
    max-width: 50%;
    padding: 10px;
}

.left-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.upload-section {
    margin-bottom: 20px;
}

.upload-section input[type='file'] {
    max-width: 300px;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
}

.drop-area {
    border: 2px dashed #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: #ccc;
    display: none;
}

.drop-area.active {
    border-color: #000;
    color: #000;
}

.canvas-section {
    position: relative;
    max-width: 100%;
}

#canvas {
    border: 2px solid #ffffff;
    border-radius: 10px;
    max-width: 100%;
    max-height: 80vh;
    width: auto;
    height: auto;
}

.controls-section {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
}

.controls-section h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 24px;
    margin-bottom: 10px;
    align-self: start;
}

/* Tabs Navigation */
.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.tab-link {
    background-color: #1a1a1a;
    color: #fff;
    padding: 10px 20px;
    border: none;
    margin: 0 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.tab-link:first-child {
    border-radius: 5px 0 0 5px;
}

.tab-link:last-child {
    border-radius: 0 5px 5px 0;
}

.tab-link:not(:first-child):not(:last-child) {
    border-radius: 0;
}

.tab-link.active,
.tab-link:hover {
    background-color: #fbff00;
    color: #000;
}

.tab-link:focus {
    outline: none;
}

/* Tabs Content */
.tabs-content {
    width: 100%;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.effects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.effects-grid .add-effect-button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    font-size: 14px;
    cursor: pointer;
    width: 150px;
    transition: background-color 0.3s ease;
}

.effects-grid .add-effect-button:hover {
    background-color: #0056b3;
}

#effectQueue {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 20px;
}

#effectQueue li {
    background-color: #1a1a1a;
    padding: 10px;
    margin-bottom: 5px;
    color: #fff;
    display: flex;
    flex-direction: column;
    cursor: move;
    border: 1px solid #333;
    border-radius: 5px;
}

#effectQueue li .effect-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding-left: 10px;
}

#effectQueue li .effect-controls {
    margin-top: 5px;
}

#effectQueue li input[type='range'],
#effectQueue li input[type='text'],
#effectQueue li input[type='number'],
#effectQueue li input[type='color'],
#effectQueue li select {
    width: 90%;
    margin-top: 5px;
    padding: 5px;
    font-size: 14px;
    background-color: #2a2a2a;
    color: #fff;
    border: 1px solid #444;
    border-radius: 3px;
}

.drag-handle {
    padding-right: 10px;
    cursor: grab;
}

.buttons-container {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    margin: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

button:focus,
input:focus {
    outline: 2px solid #0056b3;
}

.actions-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* margin-top: 20px; */
}

.download-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.ft-select {
    padding: 8px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    transition: background-color 0.3s ease;
}

#fileType {
    /* width: 90%; */
    /* margin-top: 5px; */
    /* padding: 5px; */
    font-size: 14px;
    background-color: #2a2a2a;
    color: #fff;
    border: 1px solid #444;
    border-radius: 3px;
}

#downloadButton {
    margin-left: 0;
    border-radius: 0 5px 5px 0;
}

footer {
    background-color: #1a1a1a;
    color: #888;
    text-align: center;
    padding: 10px;
    width: 100%;
}

footer p {
    margin: 0;
}

/* Sticky footer */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}

/* Styles for color pickers, additional sliders, etc. */
.effect-controls input[type='color'] {
    width: 100%;
    margin-top: 5px;
    padding: 2px;
    font-size: 14px;
}

.control-container {
    margin-bottom: 10px;
}

.control-container label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
}

.emoji-picker {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    width: 100%;
    margin-top: 5px;
    padding: 2px;
    font-size: 20px;
}

@media screen and (max-width: 900px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .left-panel,
    .right-panel {
        max-width: 100%;
    }

    .effects-grid .add-effect-button {
        width: 100%;
    }

    .controls-section h2 {
        align-self: center;
    }

    .tabs {
        flex-direction: column;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,yBAAyB;IACzB,cAAc;IACd,wCAAwC;IACxC,eAAe;IACf,SAAS;IACT,UAAU;IACV,iBAAiB,EAAE,kCAAkC;IACrD,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,sCAAsC;IACtC,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,mEAAmE;IACnE,qBAAqB;IACrB,qBAAqB;IACrB,6BAA6B,EAAE,6BAA6B;IAC5D,oCAAoC;IACpC,cAAc;AAClB;;AAEA;IACI,OAAO,EAAE,wDAAwD;IACjE,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,OAAO;IACP,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sCAAsC;IACtC,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA,iBAAiB;AACjB;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;;;;;IAKI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,0BAA0B;IAC1B,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,OAAO;AACX;;AAEA,uDAAuD;AACvD;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,WAAW;IACX,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;;QAEI,eAAe;IACnB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":["/* General Styles */\nbody {\n    background-color: #0d0d0d;\n    color: #ffffff;\n    font-family: 'Roboto', Arial, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh; /* Ensure body takes full height */\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: #1a1a1a;\n    padding: 20px;\n    text-align: center;\n}\n\nheader h1 {\n    margin: 0;\n    font-size: 32px;\n    font-family: 'Press Start 2P', cursive;\n    color: #7c7c7c;\n    user-select: none;\n    width: fit-content;\n    color: transparent;\n    background-image: linear-gradient(90deg, #ff7f50, #1e90ff, #32cd32);\n    background-size: 600%;\n    background-clip: text;\n    -webkit-background-clip: text; /* For Safari compatibility */\n    transition: background-position 0.1s;\n    margin: 0 auto;\n}\n\nmain {\n    flex: 1; /* Allow main content to grow and fill available space */\n    padding: 20px;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.left-panel,\n.right-panel {\n    flex: 1;\n    max-width: 50%;\n    padding: 10px;\n}\n\n.left-panel {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.right-panel {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.upload-section {\n    margin-bottom: 20px;\n}\n\n.upload-section input[type='file'] {\n    max-width: 300px;\n    overflow: hidden;\n    text-overflow: clip;\n    white-space: nowrap;\n}\n\n.drop-area {\n    border: 2px dashed #ccc;\n    border-radius: 10px;\n    padding: 20px;\n    text-align: center;\n    color: #ccc;\n    display: none;\n}\n\n.drop-area.active {\n    border-color: #000;\n    color: #000;\n}\n\n.canvas-section {\n    position: relative;\n    max-width: 100%;\n}\n\n#canvas {\n    border: 2px solid #ffffff;\n    border-radius: 10px;\n    max-width: 100%;\n    max-height: 80vh;\n    width: auto;\n    height: auto;\n}\n\n.controls-section {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.controls-section h2 {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 24px;\n    margin-bottom: 10px;\n    align-self: start;\n}\n\n/* Tabs Navigation */\n.tabs {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 20px;\n}\n\n.tab-link {\n    background-color: #1a1a1a;\n    color: #fff;\n    padding: 10px 20px;\n    border: none;\n    margin: 0 0;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n}\n\n.tab-link:first-child {\n    border-radius: 5px 0 0 5px;\n}\n\n.tab-link:last-child {\n    border-radius: 0 5px 5px 0;\n}\n\n.tab-link:not(:first-child):not(:last-child) {\n    border-radius: 0;\n}\n\n.tab-link.active,\n.tab-link:hover {\n    background-color: #fbff00;\n    color: #000;\n}\n\n.tab-link:focus {\n    outline: none;\n}\n\n/* Tabs Content */\n.tabs-content {\n    width: 100%;\n}\n\n.tab-content {\n    display: none;\n}\n\n.tab-content.active {\n    display: block;\n}\n\n.effects-grid {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 10px;\n    margin-bottom: 20px;\n}\n\n.effects-grid .add-effect-button {\n    padding: 10px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    font-size: 14px;\n    cursor: pointer;\n    width: 150px;\n    transition: background-color 0.3s ease;\n}\n\n.effects-grid .add-effect-button:hover {\n    background-color: #0056b3;\n}\n\n#effectQueue {\n    list-style-type: none;\n    padding: 0;\n    width: 100%;\n    max-width: 400px;\n    margin: 0 auto 20px;\n}\n\n#effectQueue li {\n    background-color: #1a1a1a;\n    padding: 10px;\n    margin-bottom: 5px;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    cursor: move;\n    border: 1px solid #333;\n    border-radius: 5px;\n}\n\n#effectQueue li .effect-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 14px;\n    padding-left: 10px;\n}\n\n#effectQueue li .effect-controls {\n    margin-top: 5px;\n}\n\n#effectQueue li input[type='range'],\n#effectQueue li input[type='text'],\n#effectQueue li input[type='number'],\n#effectQueue li input[type='color'],\n#effectQueue li select {\n    width: 90%;\n    margin-top: 5px;\n    padding: 5px;\n    font-size: 14px;\n    background-color: #2a2a2a;\n    color: #fff;\n    border: 1px solid #444;\n    border-radius: 3px;\n}\n\n.drag-handle {\n    padding-right: 10px;\n    cursor: grab;\n}\n\n.buttons-container {\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    padding: 10px 20px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    cursor: pointer;\n    margin: 5px;\n    transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n    background-color: #0056b3;\n}\n\nbutton:focus,\ninput:focus {\n    outline: 2px solid #0056b3;\n}\n\n.actions-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    /* margin-top: 20px; */\n}\n\n.download-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.ft-select {\n    padding: 8px 10px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    cursor: pointer;\n    border-radius: 5px 0 0 5px;\n    transition: background-color 0.3s ease;\n}\n\n#fileType {\n    /* width: 90%; */\n    /* margin-top: 5px; */\n    /* padding: 5px; */\n    font-size: 14px;\n    background-color: #2a2a2a;\n    color: #fff;\n    border: 1px solid #444;\n    border-radius: 3px;\n}\n\n#downloadButton {\n    margin-left: 0;\n    border-radius: 0 5px 5px 0;\n}\n\nfooter {\n    background-color: #1a1a1a;\n    color: #888;\n    text-align: center;\n    padding: 10px;\n    width: 100%;\n}\n\nfooter p {\n    margin: 0;\n}\n\n/* Sticky footer */\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nmain {\n    flex: 1;\n}\n\n/* Styles for color pickers, additional sliders, etc. */\n.effect-controls input[type='color'] {\n    width: 100%;\n    margin-top: 5px;\n    padding: 2px;\n    font-size: 14px;\n}\n\n.control-container {\n    margin-bottom: 10px;\n}\n\n.control-container label {\n    display: block;\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n\n.emoji-picker {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    width: 100%;\n    margin-top: 5px;\n    padding: 2px;\n    font-size: 20px;\n}\n\n@media screen and (max-width: 900px) {\n    .container {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .left-panel,\n    .right-panel {\n        max-width: 100%;\n    }\n\n    .effects-grid .add-effect-button {\n        width: 100%;\n    }\n\n    .controls-section h2 {\n        align-self: center;\n    }\n\n    .tabs {\n        flex-direction: column;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.15.3";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/el, /**String*/selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}

/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode;

    // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect();

          // Set relative to edges of padding box of container
          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}

/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];

  /* jshint boss:true */
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}

/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}

/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }

  /* jshint boss:true */
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}

/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */
function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}

/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
function getChildContainingRectFromElement(container, options, ghostEl) {
  var rect = {};
  Array.from(container.children).forEach(function (child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);

        // If animating: compensate for current animation
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }

        // if fromRect != toRect: animate
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return;
      // Fire global events if it exists in this sortable
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      }

      // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;

      // Add default options from plugin
      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return;

      // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)

  _silent = false,
  savedInputChecked = [];

/** @const */
var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  };

// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};

/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element
  this.options = options = _extends({}, options);

  // Export instance
  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults);

  // Set default options
  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options);

  // Bind all private methods
  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  }

  // Setup drag mode
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  }

  // Bind events
  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el);

  // Restore sorting
  options.store && options.store.get && this.sort(options.store.get(this) || []);

  // Add animation state manager
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el);

    // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    }

    // cancel dnd if original target is content editable
    if (originalTarget.isContentEditable) {
      return;
    }

    // Safari ignores further event handling after mousedown
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    }

    // Get the index of the dragged element within its parent
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);

    // Check filter
    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }

    // Prepare `dragstart`
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }

        // Bind the events: dragstart/dragend
        _this._triggerDragStart(evt, touch);

        // Drag start event
        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        });

        // Chosen item
        toggleClass(dragEl, options.chosenClass, true);
      };

      // Disable "draggable"
      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop);

      // Make dragEl draggable (must be before delay for FireFox)
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      });

      // Delay is impossible for native DnD in Edge or IE
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag
        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options;

      // Apply effect
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();

      // Drag start event
      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);

      // only set the status to dragging, when we are actually dragging
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options;

      // Position absolutely
      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);

      // Set transform-origin
      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }

    // #1143: IFrame support workaround
    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);

    // Set proper drop events
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this);

      // #1276 fix:
      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    }

    // Capture animation state
    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }

    // Return invocation when dragEl is inserted (or completed)
    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }

        // Animation
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }

      // Null lastTarget if it is not inside a previously swapped element
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }

      // no bubbling and not fallback
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);

        // Do not detect for empty insert if already inserted
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }

    // Call when dragEl has been inserted
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization
        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list

        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        }

        // if there is a last element, it is the target
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        }
        // If dragEl is already beside target: Do not insert
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }

          // Undo chrome's scroll adjustment (has no effect on other browsers)
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization

          // must be done before animation
          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/evt) {
    var el = this.el,
      options = this.options;

    // Get the index of the dragged element within its parent
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode;

    // Get again after plugin event
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);

    // Unbind events
    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = '';

        // Remove classes
        // ghostClass is added in dragStarted
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);

        // Drag stop event
        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            // Remove event
            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            });

            // drag from one list and drop into another
            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          });

          // Save sorting
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    }
    // Remove draggable attributes
    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return;

      // show clone at dragEl or original position
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal;
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}

/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}

// Fixed #973:
if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}

// Export utils
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild,
  expando: expando
};

/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */
Sortable.get = function (element) {
  return element[expando];
};

/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */
Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};

/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
Sortable.create = function (el, options) {
  return new Sortable(el, options);
};

// Export
Sortable.version = version;

var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;

      // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);

        // Listener for pointer element change
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          // Detect for pointer elem change, emulating native DnD behaviour
          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn;

  // New scroll root, set scrollEl
  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */
        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable,
        cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });

      // Sort multi-drag elements
      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM

        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        }

        // Remove all auxiliary multidrag items from el, if sorting enabled
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        // If leaving sort:false root, or already folding - Fold to new location
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute);

            // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        }

        // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);

            // Unfold animation for clones if showing from hidden
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children;

      // Multi-drag selection
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          });

          // Modifier activated, select from last to dragEl
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;
              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }
              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }

      // Multi-drag drop
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;

                  // Prepare unfold animation
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            }

            // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed
            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });

            // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.
            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
                dispatchSortableEvent('sort');
              }
            }
          }

          // Must be done after capturing individual rects (scroll bar)
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }

      // Remove clones if necessary
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return;

      // Only deselect if selection is in this sortable
      if (multiDragSortable !== this.sortable) return;

      // Only deselect if target is not item in this sortable
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;

      // Only deselect if left click
      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        });

        // multiDragElements will already be sorted if folding
        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}

/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */
function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appState: () => (/* binding */ appState),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   resetAppState: () => (/* binding */ resetAppState)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects.js */ "./src/effects.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// script.js




var appState = {
  effectsQueue: [],
  imageLoaded: false,
  originalImage: null,
  effectIdCounter: 0
};
function init() {
  // Get DOM elements
  var imageUpload = document.getElementById('imageUpload');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var resetButton = document.getElementById('resetButton');
  var downloadButton = document.getElementById('downloadButton');
  var copyButton = document.getElementById('copyButton');
  var effectsGrid = document.querySelector('.effects-grid');
  var effectQueueElement = document.getElementById('effectQueue');
  var headerH1 = document.querySelector('header h1');
  var dropArea = document.getElementById('dropArea');

  // Initialize variables
  // let effectsQueue = [];
  // let imageLoaded = false;
  // let originalImage = null;
  // let effectIdCounter = 0; // Unique ID counter for effects

  // Initialize effectManager
  var effectManager = new _effects_js__WEBPACK_IMPORTED_MODULE_1__.EffectManager();

  // Register effects
  _effects_js__WEBPACK_IMPORTED_MODULE_1__.registeredEffects.forEach(function (_ref) {
    var key = _ref.key,
      effectClass = _ref.effectClass;
    effectManager.registerEffect(key, effectClass);
  });

  // Initialize Sortable
  var sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_2__["default"](effectQueueElement, {
    animation: 150,
    handle: '.drag-handle',
    onEnd: function onEnd() {
      // Update the effectsQueue array based on the new order
      var newOrderIds = sortable.toArray();
      var effectsQueueCopy = _toConsumableArray(appState.effectsQueue);
      appState.effectsQueue = newOrderIds.map(function (id) {
        var item = effectsQueueCopy.find(function (effectItem) {
          return effectItem.id === id;
        });
        if (!item) {
          console.error("Effect with ID ".concat(id, " not found in effectsQueueCopy"));
        }
        return item;
      }).filter(function (item) {
        return item !== undefined;
      });
      updateEffectQueueUI();
      applyEffects();
    }
  });

  // Event listeners for header gradient effect
  if (headerH1) {
    headerH1.addEventListener('mousemove', function (e) {
      var rect = headerH1.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var xPercent = x / rect.width * 100;
      headerH1.style.backgroundPosition = "".concat(xPercent, "% center");
    });
    headerH1.addEventListener('mouseleave', function () {
      headerH1.style.backgroundPosition = 'center center';
    });
  } else {
    console.warn('header h1 element not found');
  }

  // Function to generate effect buttons
  function generateEffectButtons() {
    var effects = effectManager.getEffects();
    effects.forEach(function (effectClass) {
      // Find the effect key associated with the effect class
      var effectKey = Object.keys(effectManager.effectsRegistry).find(function (key) {
        return effectManager.effectsRegistry[key] === effectClass;
      });

      // Get the display name and category from the effect class
      var displayName = effectClass.getName();
      var category = effectClass.getCategory().toLowerCase() || 'uncategorized';

      // Create the effect button
      var button = document.createElement('button');
      button.classList.add('add-effect-button');
      button.textContent = displayName;
      button.dataset.effect = effectKey;

      // Add click event listener to the button
      button.addEventListener('click', function () {
        var defaultParameters = effectClass.getDefaultParameters();
        var effectInstance = effectManager.createEffect(effectKey, defaultParameters);
        if (!effectInstance) {
          alert("Effect \"".concat(effectKey, "\" is not available."));
          return;
        }
        var effectId = 'effect-' + appState.effectIdCounter++;
        appState.effectsQueue.push({
          id: effectId,
          effect: effectInstance
        });
        updateEffectQueueUI();
        if (appState.imageLoaded) {
          applyEffects();
        }
      });

      // Find the effects-grid for the category
      var effectsGrid = document.querySelector(".effects-grid[data-category=\"".concat(category, "\"]"));
      if (effectsGrid) {
        effectsGrid.appendChild(button);
      } else {
        console.warn("No effects grid found for category: ".concat(category));
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
    appState.effectsQueue.forEach(function (item, index) {
      var effect = item.effect;
      if (!effect) {
        console.error("Effect is null for item with ID ".concat(item.id));
        return;
      }
      var li = document.createElement('li');
      li.setAttribute('data-id', item.id); // Set data-id for Sortable.js

      // Effect header with remove button
      var effectHeader = document.createElement('div');
      effectHeader.classList.add('effect-header');

      // Container for drag handle and effect number
      var handleContainer = document.createElement('div');
      handleContainer.classList.add('handle-container');

      // Drag handle
      var dragHandle = document.createElement('span');
      dragHandle.classList.add('drag-handle');
      dragHandle.textContent = '☰';
      handleContainer.appendChild(dragHandle);

      // Effect number
      var effectNumber = document.createElement('span');
      effectNumber.classList.add('effect-number');
      effectNumber.textContent = "".concat(index + 1, ".");
      handleContainer.appendChild(effectNumber);
      effectHeader.appendChild(handleContainer);

      // Effect name
      var effectLabel = document.createElement('span');
      effectLabel.classList.add('effect-name'); // Add this line
      var effectDisplayName = effect.constructor.getName();
      effectLabel.textContent = effectDisplayName;
      effectHeader.appendChild(effectLabel);

      // Container for toggle and remove buttons
      var buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      // Toggle button for effect controls
      var toggleButton = document.createElement('button');
      toggleButton.textContent = 'Settings';
      toggleButton.addEventListener('click', function () {
        var controlsContainer = document.getElementById("".concat(item.id, "-controls"));
        controlsContainer.style.display = controlsContainer.style.display === 'none' ? 'block' : 'none';
      });
      buttonContainer.appendChild(toggleButton);

      // Remove button
      var removeButton = document.createElement('button');
      removeButton.classList.add('remove-effect-button');
      removeButton.textContent = '✖';
      removeButton.addEventListener('click', function () {
        var effectIndex = appState.effectsQueue.findIndex(function (e) {
          return e.id === item.id;
        });
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
      var effectControls = document.createElement('div');
      effectControls.classList.add('effect-controls');
      effectControls.id = "".concat(item.id, "-controls");
      effectControls.style.display = 'none'; // Initially hidden

      var controls = effect.constructor.getControls();
      controls.forEach(function (control) {
        var param = control.param;
        var paramValue = effect.parameters[param];
        var controlContainer = document.createElement('div');
        controlContainer.classList.add('control-container');
        if (control.type !== 'button') {
          var label = document.createElement('label');
          label.textContent = control.label || param.charAt(0).toUpperCase() + param.slice(1);
          controlContainer.appendChild(label);
        }
        var input;
        switch (control.type) {
          case 'range':
          case 'number':
            {
              input = document.createElement('input');
              input.type = 'range';
              input.min = control.min;
              input.max = control.max;
              input.step = control.step;
              input.value = paramValue;

              // Create a number input for direct value entry
              var numberInput = document.createElement('input');
              numberInput.type = 'number';
              numberInput.min = control.min;
              numberInput.max = control.max;
              numberInput.step = control.step;
              numberInput.value = paramValue;

              // Sync range and number inputs
              input.addEventListener('input', function () {
                numberInput.value = input.value;
                effect.parameters[param] = parseFloat(input.value);
                if (appState.imageLoaded) {
                  applyEffects();
                }
              });
              numberInput.addEventListener('input', function () {
                input.value = numberInput.value;
                effect.parameters[param] = parseFloat(numberInput.value);
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
            input.addEventListener('input', function () {
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
            input.addEventListener('input', function () {
              effect.parameters[param] = input.value;
              if (appState.imageLoaded) {
                applyEffects();
              }
            });
            controlContainer.appendChild(input);
            break;
          case 'select':
            input = document.createElement('select');
            control.options.forEach(function (optionValue) {
              var option = document.createElement('option');
              option.value = optionValue;
              option.textContent = optionValue;
              if (optionValue === paramValue) {
                option.selected = true;
              }
              input.appendChild(option);
            });
            input.addEventListener('input', function () {
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
            input.addEventListener('input', function () {
              effect.parameters[param] = input.checked;
              if (appState.imageLoaded) {
                applyEffects();
              }
            });
            controlContainer.appendChild(input);
            break;
          case 'button':
            input = document.createElement('button');
            input.textContent = control.label || param.charAt(0).toUpperCase() + param.slice(1);
            input.addEventListener('click', function () {
              if (typeof effect[control.param] === 'function') {
                effect[control.param]();
                if (appState.imageLoaded) {
                  applyEffects();
                }
              }
            });
            controlContainer.appendChild(input);
            break;
          // Add other control types as needed
          default:
            console.error("Unknown control type: ".concat(control.type));
        }
        effectControls.appendChild(controlContainer);
      });
      if (effectControls.childNodes.length > 0) {
        li.appendChild(effectControls);
      }
      effectQueueElement.appendChild(li);
    });

    // Update Sortable.js with the new list
    sortable.sort(appState.effectsQueue.map(function (item) {
      return item.id;
    }));
  }

  /**
   * Applies effects from the queue to the image.
   */
  function applyEffects() {
    if (!appState.imageLoaded) {
      console.log('No image loaded. Effects will be applied once an image is uploaded.');
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
    appState.effectsQueue.forEach(function (item) {
      var effect = item.effect;
      if (!effect) {
        console.error("Cannot apply effect: Effect is null for item with ID ".concat(item.id));
        return;
      }
      console.log("Applying effect: ".concat(effect.constructor.getName(), ", parameters:"), effect.parameters);
      effect.apply(ctx, canvas);
    });
  }

  // **Define Event Handler Functions Before Using Them**

  /**
   * Handles image upload and draws the image on the canvas.
   */
  function handleImageUpload(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        // Calculate scaling to fit within max dimensions
        var maxWidth = 800;
        var maxHeight = 600;
        var width = img.width;
        var height = img.height;

        // Maintain aspect ratio
        if (width > maxWidth || height > maxHeight) {
          var widthRatio = maxWidth / width;
          var heightRatio = maxHeight / height;
          var ratio = Math.min(widthRatio, heightRatio);
          width = width * ratio;
          height = height * ratio;
        }
        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
        appState.originalImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
    canvas.toBlob(/*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.write([new ClipboardItem({
                'image/png': blob
              })]);
            case 3:
              console.log('Image copied to clipboard');
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.error('Failed to copy image to clipboard', _context.t0);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), 'image/png');
  }

  /**
   * Handles the download button click event to download the image.
   */
  function handleDownloadButtonClick() {
    if (!appState.imageLoaded) {
      console.log('No image loaded');
      return;
    }
    var fileTypeSelect = document.getElementById('fileType');
    var fileType = fileTypeSelect.value;
    var link = document.createElement('a');
    link.download = "edited-image.".concat(fileType.split('/')[1]);
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
  var tabLinks = document.querySelectorAll('.tab-link');
  var tabContents = document.querySelectorAll('.tab-content');
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener('click', function () {
      var targetTab = tabLink.getAttribute('data-tab');

      // Remove active class from all tabs and contents
      tabLinks.forEach(function (link) {
        return link.classList.remove('active');
      });
      tabContents.forEach(function (content) {
        return content.classList.remove('active');
      });

      // Add active class to the clicked tab and corresponding content
      tabLink.classList.add('active');
      var targetContent = document.getElementById("tab-".concat(targetTab));
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Prevent default drag behaviors
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  // Highlight drop area when item is dragged over it
  ['dragenter', 'dragover'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, function () {
      return dropArea.classList.add('active');
    }, false);
  });
  ['dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, function () {
      return dropArea.classList.remove('active');
    }, false);
  });

  // Handle dropped files
  dropArea.addEventListener('drop', handleDrop, false);
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;
    var url = dt.getData('text/uri-list');
    console.log('Dropped files:', files);
    if (files.length) {
      var file = files[0];
      var reader = new FileReader();
      reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
          loadImageToCanvas(img);
          dropArea.style.display = 'none';
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (url) {
      console.log('Dropped URL:', url);
      var proxyUrl = "http://localhost:3000/proxy?url=".concat(encodeURIComponent(url));
      var img = new Image();
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
    var maxWidth = 800;
    var maxHeight = 600;
    var width = img.width;
    var height = img.height;

    // Maintain aspect ratio
    if (width > maxWidth || height > maxHeight) {
      var widthRatio = maxWidth / width;
      var heightRatio = maxHeight / height;
      var ratio = Math.min(widthRatio, heightRatio);
      width = width * ratio;
      height = height * ratio;
    }
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, width, height);
    appState.originalImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    appState.imageLoaded = true;
    applyEffects(); // Apply any effects in the queue
  }

  // Show drop area when dragging files over the window
  window.addEventListener('dragenter', function () {
    return dropArea.style.display = 'block';
  }, true);
  window.addEventListener('dragleave', function () {
    return dropArea.style.display = 'none';
  }, false);
  window.addEventListener('drop', function () {
    return dropArea.style.display = 'none';
  }, false);

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
    applyEffects: applyEffects,
    updateEffectQueueUI: updateEffectQueueUI
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

function resetAppState() {
  appState.effectsQueue = [];
  appState.imageLoaded = false;
  appState.originalImage = null;
  appState.effectIdCounter = 0;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map