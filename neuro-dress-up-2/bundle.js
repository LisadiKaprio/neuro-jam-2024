/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ClothingItems.ts":
/*!******************************!*\
  !*** ./src/ClothingItems.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.headItems = exports.hairstyleItems = exports.bottomItems = exports.topItems = exports.ClothingElement = exports.pathToVedal = exports.pathToArt = void 0;\nvar ClothingTypes_1 = __webpack_require__(/*! ./ClothingTypes */ \"./src/ClothingTypes.ts\");\nexports.pathToArt = \"art/\";\nexports.pathToVedal = \"vedal/\";\nvar ClothingElement;\n(function (ClothingElement) {\n    ClothingElement[\"TOP\"] = \"top\";\n    ClothingElement[\"BOTTOM\"] = \"bottom\";\n    ClothingElement[\"HEAD_DECORATION\"] = \"head-decoration\";\n    ClothingElement[\"HAIRSTYLE\"] = \"hairstyle\";\n})(ClothingElement || (exports.ClothingElement = ClothingElement = {}));\nexports.topItems = [\n    {\n        imagePath: \"top-classic-neuro-cardigan\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [],\n    },\n    {\n        imagePath: \"top-maid-serious\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.MAID, ClothingTypes_1.Style.SERIOUS],\n    },\n    {\n        imagePath: \"top-blanket-pajama\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [ClothingTypes_1.Style.COZY],\n    },\n    {\n        imagePath: \"top-maid-sexy\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.MAID, ClothingTypes_1.Style.REVEALING],\n    },\n    {\n        imagePath: \"top-meth-t-shirt\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"top-rave-t-shirt\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"top-frog-apron\",\n        colors: [ClothingTypes_1.Color.GREEN, ClothingTypes_1.Color.WHITE],\n        styles: [ClothingTypes_1.Style.CUTE, ClothingTypes_1.Style.MAID],\n    },\n    {\n        imagePath: \"top-goth-harpoon\",\n        colors: [ClothingTypes_1.Color.BLACK],\n        styles: [ClothingTypes_1.Style.DANGER],\n    },\n    {\n        imagePath: \"top-green-fluff\",\n        colors: [ClothingTypes_1.Color.GREEN],\n        styles: [ClothingTypes_1.Style.PUNK, ClothingTypes_1.Style.REVEALING],\n    },\n    {\n        imagePath: \"top-greenscreen\",\n        colors: [ClothingTypes_1.Color.GREEN],\n        styles: [ClothingTypes_1.Style.GREENSCREEN],\n    },\n    {\n        imagePath: \"top-heart-sweater\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [ClothingTypes_1.Style.COZY, ClothingTypes_1.Style.REVEALING],\n    },\n    {\n        imagePath: \"top-heart-sweater\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [ClothingTypes_1.Style.COZY, ClothingTypes_1.Style.REVEALING],\n    },\n    {\n        imagePath: \"top-maid-neko\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.MAID, ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"top-muscular-body\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [ClothingTypes_1.Style.WEIRD],\n    },\n    {\n        imagePath: \"top-tutel-sweatshirt\",\n        colors: [ClothingTypes_1.Color.DARK_BLUE],\n        styles: [ClothingTypes_1.Style.COZY, ClothingTypes_1.Style.CUTE],\n    },\n];\nexports.bottomItems = [\n    {\n        imagePath: \"bottom-classic-neuro-skirt\",\n        colors: [ClothingTypes_1.Color.WHITE],\n        styles: [ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"bottom-cargo-pants\",\n        colors: [ClothingTypes_1.Color.GREEN],\n        styles: [ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"bottom-maid-serious\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.MAID, ClothingTypes_1.Style.SERIOUS],\n    },\n    {\n        imagePath: \"bottom-maid-sexy\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.MAID, ClothingTypes_1.Style.REVEALING],\n    },\n    {\n        imagePath: \"bottom-pajama-pants\",\n        colors: [ClothingTypes_1.Color.PINK],\n        styles: [ClothingTypes_1.Style.COZY, ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"bottom-adidas-pants\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.COZY],\n    },\n    {\n        imagePath: \"bottom-blue-skirt\",\n        colors: [ClothingTypes_1.Color.BLUE],\n        styles: [ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"bottom-leather-skirt\",\n        colors: [ClothingTypes_1.Color.BLACK],\n        styles: [ClothingTypes_1.Style.REVEALING, ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"bottom-greenscreen\",\n        colors: [ClothingTypes_1.Color.GREEN],\n        styles: [ClothingTypes_1.Style.GREENSCREEN],\n    }\n];\nexports.hairstyleItems = [\n    {\n        imagePath: \"hair-front-classic-neuro\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [],\n    },\n    {\n        imagePath: \"hair-front-bun\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.SERIOUS, ClothingTypes_1.Style.MAID],\n    },\n    {\n        imagePath: \"hair-front-grandma\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.PUNK, ClothingTypes_1.Style.WEIRD],\n    },\n    {\n        imagePath: \"face-empty\",\n        colors: [],\n        styles: [ClothingTypes_1.Style.PUNK, ClothingTypes_1.Style.WEIRD],\n    },\n    {\n        imagePath: \"hair-front-punk-twintails\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"hair-front-clown-twintails\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"hair-front-headband\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.CUTE],\n    },\n];\nexports.headItems = [\n    {\n        imagePath: \"face-empty\",\n        colors: [],\n        styles: [],\n    },\n    {\n        imagePath: \"head-maid\",\n        colors: [ClothingTypes_1.Color.WHITE],\n        styles: [ClothingTypes_1.Style.MAID],\n    },\n    {\n        imagePath: \"face-choker\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"face-sunglasses\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.COOL, ClothingTypes_1.Style.PUNK],\n    },\n    {\n        imagePath: \"face-round-glasses\",\n        colors: [ClothingTypes_1.Color.BLACK_WHITE],\n        styles: [ClothingTypes_1.Style.SERIOUS, ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"face-clown-nose\",\n        colors: [ClothingTypes_1.Color.RED],\n        styles: [ClothingTypes_1.Style.WEIRD],\n    },\n    {\n        imagePath: \"head-burger-king\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [ClothingTypes_1.Style.WEIRD],\n    },\n    {\n        imagePath: \"face-clown-stickers\",\n        colors: [],\n        styles: [ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"head-frog-hat\",\n        colors: [ClothingTypes_1.Color.GREEN],\n        styles: [ClothingTypes_1.Style.CUTE, ClothingTypes_1.Style.COZY],\n    },\n    {\n        imagePath: \"head-maid-ribbons\",\n        colors: [ClothingTypes_1.Color.WHITE, ClothingTypes_1.Color.PINK],\n        styles: [ClothingTypes_1.Style.MAID],\n    },\n    {\n        imagePath: \"head-question-mark\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [ClothingTypes_1.Style.CUTE],\n    },\n    {\n        imagePath: \"head-zoo\",\n        colors: [ClothingTypes_1.Color.BROWN],\n        styles: [],\n    },\n];\n\n\n//# sourceURL=webpack://neuro-jam-2024/./src/ClothingItems.ts?");

/***/ }),

/***/ "./src/ClothingTypes.ts":
/*!******************************!*\
  !*** ./src/ClothingTypes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Style = exports.Color = void 0;\nvar Color;\n(function (Color) {\n    Color[\"BLACK_WHITE\"] = \"BLACK_WHITE\";\n    Color[\"BLACK\"] = \"BLACK\";\n    Color[\"RED\"] = \"RED\";\n    Color[\"BROWN\"] = \"BROWN\";\n    Color[\"GREEN\"] = \"GREEN\";\n    Color[\"PINK\"] = \"PINK\";\n    Color[\"WHITE\"] = \"WHITE\";\n    Color[\"BLUE\"] = \"BLUE\";\n    Color[\"DARK_BLUE\"] = \"DARK_BLUE\";\n})(Color || (exports.Color = Color = {}));\nvar Style;\n(function (Style) {\n    Style[\"PUNK\"] = \"PUNK\";\n    Style[\"MAID\"] = \"MAID\";\n    Style[\"COZY\"] = \"COZY\";\n    Style[\"CUTE\"] = \"CUTE\";\n    Style[\"REVEALING\"] = \"REVEALING\";\n    Style[\"SERIOUS\"] = \"SERIOUS\";\n    Style[\"WEIRD\"] = \"WEIRD\";\n    Style[\"COOL\"] = \"COOL\";\n    Style[\"GREENSCREEN\"] = \"GREENSCREEN\";\n    Style[\"DANGER\"] = \"DANGER\";\n})(Style || (exports.Style = Style = {}));\n\n\n//# sourceURL=webpack://neuro-jam-2024/./src/ClothingTypes.ts?");

/***/ }),

/***/ "./src/GameLogic.ts":
/*!**************************!*\
  !*** ./src/GameLogic.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DressUpGame = exports.ClothingPiece = void 0;\nvar ClothingItems_1 = __webpack_require__(/*! ./ClothingItems */ \"./src/ClothingItems.ts\");\nvar VedalSystem_1 = __webpack_require__(/*! ./VedalSystem */ \"./src/VedalSystem.ts\");\n// Clothing piece class\nvar ClothingPiece = /** @class */ (function () {\n    function ClothingPiece(items, type) {\n        this.currentIndex = 0;\n        this.seen = new Set();\n        this.items = items;\n        this.type = type;\n        this.seen.add(0); // Mark first item as seen\n    }\n    ClothingPiece.prototype.next = function () {\n        this.currentIndex = (this.currentIndex + 1) % this.items.length;\n        this.seen.add(this.currentIndex);\n        return this.items[this.currentIndex];\n    };\n    ClothingPiece.prototype.previous = function () {\n        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;\n        this.seen.add(this.currentIndex);\n        return this.items[this.currentIndex];\n    };\n    ClothingPiece.prototype.current = function () {\n        return this.items[this.currentIndex];\n    };\n    ClothingPiece.prototype.allSeen = function () {\n        return this.seen.size === this.items.length;\n    };\n    ClothingPiece.prototype.random = function () {\n        this.currentIndex = Math.floor(Math.random() * this.items.length);\n        return this.items[this.currentIndex];\n    };\n    return ClothingPiece;\n}());\nexports.ClothingPiece = ClothingPiece;\n// Main game class\nvar DressUpGame = /** @class */ (function () {\n    function DressUpGame() {\n        this.randomizeEnabled = false;\n        this.isEvil = false;\n        this.isMeow = false;\n        this.catEarsImage = document.querySelector(\"#cat-ears-image\");\n        this.catEarsImage.src = ClothingItems_1.pathToArt + \"face-empty\" + \".png\";\n        this.catTailImage = document.querySelector(\"#cat-tail-image\");\n        this.catTailImage.src = ClothingItems_1.pathToArt + \"face-empty\" + \".png\";\n        // Initialize clothing pieces with their respective items\n        this.appContainer = document.body.querySelector(\"#app\");\n        this.eyes = \"eyes-neuro\";\n        this.bottomClothing = new ClothingPiece(ClothingItems_1.bottomItems, ClothingItems_1.ClothingElement.BOTTOM);\n        this.topClothing = new ClothingPiece(ClothingItems_1.topItems, ClothingItems_1.ClothingElement.TOP);\n        this.headDecoration = new ClothingPiece(ClothingItems_1.headItems, ClothingItems_1.ClothingElement.HEAD_DECORATION);\n        this.hairstyle = new ClothingPiece(ClothingItems_1.hairstyleItems, ClothingItems_1.ClothingElement.HAIRSTYLE);\n        this.preloadImages();\n        this.initClothingDisplay();\n        this.setupUI();\n        this.setupEventListeners();\n    }\n    DressUpGame.prototype.preloadImages = function () {\n        var clothings = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], this.topClothing.items, true), this.bottomClothing.items, true), this.headDecoration.items, true), this.hairstyle.items, true);\n        var allImages = clothings.map(function (clothing) { return ClothingItems_1.pathToArt + clothing.imagePath + \".png\"; });\n        var vedalImages = Object.entries(VedalSystem_1.OutfitFeedbackDeterminator.feedbackMessages).map(function (feedback) { return ClothingItems_1.pathToArt + ClothingItems_1.pathToVedal + feedback[1].vedal + \".png\"; });\n        allImages.push();\n        allImages.forEach(function (imagePath) {\n            var img = new Image();\n            img.src = imagePath;\n        });\n    };\n    DressUpGame.prototype.initClothingDisplay = function () {\n        var _this = this;\n        var imgBase = document.querySelector(\"#base-body-image\");\n        if (imgBase) {\n            imgBase.src = ClothingItems_1.pathToArt + \"base-body\" + \".png\";\n        }\n        this.drawEyes();\n        var clothings = [\n            this.topClothing,\n            this.bottomClothing,\n            this.headDecoration,\n            this.hairstyle\n        ];\n        clothings.forEach(function (clothing) {\n            var imgtop = document.querySelector(\"#\".concat(clothing.type, \"-image\"));\n            if (imgtop && clothing.items[0].imagePath) {\n                imgtop.src = ClothingItems_1.pathToArt + clothing.items[0].imagePath + \".png\";\n            }\n            if (clothing.type === ClothingItems_1.ClothingElement.HAIRSTYLE) {\n                _this.checkBackHairstyle(clothing.items[0].imagePath);\n            }\n        });\n    };\n    DressUpGame.prototype.checkBackHairstyle = function (imagePath) {\n        var backHairstyle = document.querySelector(\"#hairstyle-back-image\");\n        if ([\"hair-front-classic-neuro\", \"hair-front-headband\"].includes(imagePath) && backHairstyle) {\n            backHairstyle.src = ClothingItems_1.pathToArt + \"hair-back-classic-neuro\" + \".png\";\n        }\n        else if (imagePath === \"hair-front-clown-twintails\" && backHairstyle) {\n            backHairstyle.src = ClothingItems_1.pathToArt + \"hair-back-clown-twintails\" + \".png\";\n        }\n        else if (backHairstyle) {\n            backHairstyle.src = ClothingItems_1.pathToArt + \"face-empty\" + \".png\";\n        }\n    };\n    DressUpGame.prototype.setupUI = function () {\n        var _this = this;\n        document.addEventListener('DOMContentLoaded', function () {\n            _this.appContainer = document.body.querySelector('#app');\n            // Create feedback window (hidden by default)\n            _this.feedbackWindow = document.createElement('div');\n            _this.feedbackWindow.className = 'feedback-window hidden';\n            _this.appContainer.appendChild(_this.feedbackWindow);\n            // Create vedal button       \n            _this.feedbackButton = _this.setupButton(_this.feedbackButton, 'feedback-button', 'Show to Vedal', _this.appContainer, function () {\n                _this.showFeedback();\n            });\n            // Create change to evil button        \n            _this.evilButton = _this.setupButton(_this.evilButton, 'evil-button', 'Play as Evil instead', _this.appContainer, function () {\n                _this.changeCharacter();\n            });\n            // Create meow button        \n            _this.meowButton = _this.setupButton(_this.meowButton, 'meow-button', 'meow!', _this.appContainer, function () {\n                _this.handleMeow();\n            });\n            // Create randomize button (hidden by default)    \n            _this.randomizeButton = _this.setupButton(_this.randomizeButton, 'randomize-button hidden', '🎲 Randomize', _this.appContainer, function () {\n                _this.randomizeOutfit();\n            });\n            _this.checkAllSeen();\n        });\n    };\n    DressUpGame.prototype.setupButton = function (button, className, text, parentElement, clickFunction) {\n        button = document.createElement('button');\n        button.className = className;\n        button.textContent = text;\n        parentElement.appendChild(button);\n        button.addEventListener('click', function () {\n            clickFunction();\n        });\n        return button;\n    };\n    DressUpGame.prototype.setupEventListeners = function () {\n        var _this = this;\n        // Set up arrow click handlers\n        document.querySelectorAll('.arrow-left').forEach(function (arrow) {\n            arrow.addEventListener('click', function (e) {\n                var type = e.target.dataset.type;\n                _this.handleArrowClick(type, 'previous');\n            });\n        });\n        document.querySelectorAll('.arrow-right').forEach(function (arrow) {\n            arrow.addEventListener('click', function (e) {\n                var type = e.target.dataset.type;\n                _this.handleArrowClick(type, 'next');\n            });\n        });\n    };\n    DressUpGame.prototype.handleArrowClick = function (type, direction) {\n        var piece;\n        switch (type) {\n            case ClothingItems_1.ClothingElement.BOTTOM:\n                piece = this.bottomClothing;\n                break;\n            case ClothingItems_1.ClothingElement.TOP:\n                piece = this.topClothing;\n                break;\n            case ClothingItems_1.ClothingElement.HEAD_DECORATION:\n                piece = this.headDecoration;\n                break;\n            case ClothingItems_1.ClothingElement.HAIRSTYLE:\n                piece = this.hairstyle;\n                break;\n            default: return;\n        }\n        var item = direction === 'next' ? piece.next() : piece.previous();\n        this.updateClothingDisplay(type, item);\n        this.checkAllSeen();\n    };\n    DressUpGame.prototype.updateClothingDisplay = function (type, item) {\n        var img = document.querySelector(\"#\".concat(type, \"-image\"));\n        if (img && item.imagePath) {\n            img.src = ClothingItems_1.pathToArt + item.imagePath + \".png\";\n        }\n        if (type === ClothingItems_1.ClothingElement.HAIRSTYLE) {\n            this.checkBackHairstyle(item.imagePath);\n        }\n    };\n    DressUpGame.prototype.checkAllSeen = function () {\n        if (!!localStorage.getItem('allSeen')) {\n            this.randomizeButton.classList.remove('hidden');\n        }\n        else if (this.bottomClothing.allSeen() &&\n            this.topClothing.allSeen() &&\n            this.headDecoration.allSeen() &&\n            this.hairstyle.allSeen()) {\n            this.randomizeButton.classList.remove('hidden');\n            localStorage.setItem('allSeen', 'true');\n        }\n    };\n    DressUpGame.prototype.randomizeOutfit = function () {\n        this.updateClothingDisplay(ClothingItems_1.ClothingElement.HAIRSTYLE, this.hairstyle.random());\n        this.updateClothingDisplay(ClothingItems_1.ClothingElement.HEAD_DECORATION, this.headDecoration.random());\n        this.updateClothingDisplay(ClothingItems_1.ClothingElement.TOP, this.topClothing.random());\n        this.updateClothingDisplay(ClothingItems_1.ClothingElement.BOTTOM, this.bottomClothing.random());\n    };\n    DressUpGame.prototype.showFeedback = function () {\n        var feedback = VedalSystem_1.OutfitFeedbackDeterminator.determineFeedback(this.bottomClothing.current(), this.topClothing.current(), this.headDecoration.current(), this.hairstyle.current());\n        this.feedbackWindow.innerHTML = \"\\n        <div class=\\\"feedback-content\\\">\\n          <img src=\\\"\".concat(ClothingItems_1.pathToArt).concat(ClothingItems_1.pathToVedal).concat(feedback.vedal, \".png\\\" class=\\\"vedal\\\" alt=\\\"Vedal\\\">\\n          <p>\").concat(feedback.message, \"</p>\\n          <button onclick=\\\"this.parentElement.parentElement.classList.add('hidden')\\\">Try another outfit</button>\\n        </div>\\n      \");\n        this.feedbackWindow.classList.remove('hidden');\n    };\n    DressUpGame.prototype.changeCharacter = function () {\n        if (!this.isEvil) {\n            this.isEvil = true;\n            this.eyes = \"eyes-evil\";\n            this.drawEyes();\n            this.evilButton.textContent = \"Play as Neuro instead\";\n        }\n        else if (this.isEvil) {\n            this.isEvil = false;\n            this.eyes = \"eyes-neuro\";\n            this.drawEyes();\n            this.evilButton.textContent = 'Play as Evil instead';\n        }\n    };\n    DressUpGame.prototype.handleMeow = function () {\n        if (!this.isMeow) {\n            this.isMeow = true;\n            this.catEarsImage.src = ClothingItems_1.pathToArt + \"cat-ears\" + \".png\";\n            this.catTailImage.src = ClothingItems_1.pathToArt + \"cat-tail\" + \".png\";\n            this.meowButton.textContent = \"unmeow!\";\n        }\n        else {\n            this.isMeow = false;\n            this.catEarsImage.src = ClothingItems_1.pathToArt + \"face-empty\" + \".png\";\n            this.catTailImage.src = ClothingItems_1.pathToArt + \"face-empty\" + \".png\";\n            this.meowButton.textContent = \"meow!\";\n        }\n    };\n    DressUpGame.prototype.drawEyes = function () {\n        var imgEyes = document.querySelector(\"#eyes-image\");\n        if (imgEyes && this.eyes) {\n            imgEyes.src = ClothingItems_1.pathToArt + this.eyes + \".png\";\n        }\n    };\n    return DressUpGame;\n}());\nexports.DressUpGame = DressUpGame;\n\n\n//# sourceURL=webpack://neuro-jam-2024/./src/GameLogic.ts?");

/***/ }),

/***/ "./src/VedalSystem.ts":
/*!****************************!*\
  !*** ./src/VedalSystem.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.OutfitFeedbackDeterminator = void 0;\nvar ClothingTypes_1 = __webpack_require__(/*! ./ClothingTypes */ \"./src/ClothingTypes.ts\");\nvar Condition;\n(function (Condition) {\n    Condition[\"SAME_COLOR\"] = \"SAME_COLOR\";\n    Condition[\"WHAT\"] = \"WHAT\";\n    Condition[\"DEFAULT\"] = \"DEFAULT\";\n    Condition[\"FULL_COZY_SET\"] = \"FULL_COZY_SET\";\n    Condition[\"FULL_MAID_SET\"] = \"FULL_MAID_SET\";\n    Condition[\"FULL_PUNK_SET\"] = \"FULL_PUNK_SET\";\n    Condition[\"FULL_CUTE_SET\"] = \"FULL_CUTE_SET\";\n    Condition[\"FULL_WEIRD_SET\"] = \"FULL_WEIRD_SET\";\n    Condition[\"ERM\"] = \"ERM\";\n    Condition[\"A_BIT_COMFY\"] = \"A_BIT_COMFY\";\n    Condition[\"COOL\"] = \"COOL\";\n    Condition[\"ALMOST_MAID\"] = \"ALMOST_MAID\";\n    Condition[\"MAID_DISRESPECT\"] = \"MAID_DISRESPECT\";\n    Condition[\"LAUGHING\"] = \"LAUGHING\";\n    Condition[\"HAPPY_WHEEZE\"] = \"HAPPY_WHEEZE\";\n    Condition[\"FOR_REAL\"] = \"FOR_REAL\";\n    Condition[\"GREENSCREEN\"] = \"GREENSCREEN\";\n    Condition[\"DANGER\"] = \"DANGER\";\n    Condition[\"TOO_YOUNG\"] = \"TOO_YOUNG\";\n    Condition[\"WEIRDGE\"] = \"WEIRDGE\";\n    Condition[\"GOOD_TRY\"] = \"GOOD_TRY\";\n    Condition[\"ALRIGHT\"] = \"ALRIGHT\";\n    Condition[\"CRAZY\"] = \"CRAZY\";\n})(Condition || (Condition = {}));\n// Feedback determinator class\nvar OutfitFeedbackDeterminator = /** @class */ (function () {\n    function OutfitFeedbackDeterminator() {\n    }\n    OutfitFeedbackDeterminator.determineFeedback = function (bottom, top, head, hair) {\n        var conditions = [];\n        var styles = [];\n        for (var _i = 0, _a = [bottom, top, head, hair]; _i < _a.length; _i++) {\n            var item = _a[_i];\n            styles.push.apply(styles, item.styles);\n        }\n        console.log(styles);\n        var colors = [];\n        for (var _b = 0, _c = [bottom, top, head, hair]; _b < _c.length; _b++) {\n            var item = _c[_b];\n            colors.push.apply(colors, item.colors);\n        }\n        console.log(colors);\n        // ------------------DETERMINE-CONDITIONS-HERE-----------------\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.PUNK; }).length >= 3) {\n            conditions.push(Condition.FULL_PUNK_SET);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.MAID; }).length >= 3) {\n            conditions.push(Condition.FULL_MAID_SET);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.COZY; }).length >= 2\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.WEIRD; }).length <= 0) {\n            conditions.push(Condition.FULL_COZY_SET);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.CUTE; }).length >= 3\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.WEIRD; }).length <= 0\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.PUNK; }).length <= 0) {\n            conditions.push(Condition.FULL_CUTE_SET);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.WEIRD; }).length >= 1) {\n            conditions.push(Condition.ERM);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.COZY; }).length >= 1) {\n            conditions.push(Condition.A_BIT_COMFY);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.PUNK; }).length >= 1\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.WEIRD; }).length >= 1\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.SERIOUS; }).length >= 1) {\n            conditions.push(Condition.WHAT);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.PUNK; }).length >= 2\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.WEIRD; }).length >= 1) {\n            conditions.push(Condition.WEIRDGE);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.PUNK; }).length >= 1\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.CUTE; }).length >= 1) {\n            conditions.push(Condition.GOOD_TRY);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.WEIRD; }).length >= 1\n            && styles.filter(function (style) { return style === ClothingTypes_1.Style.REVEALING; }).length >= 1) {\n            conditions.push(Condition.LAUGHING);\n        }\n        if ((top.styles.includes(ClothingTypes_1.Style.MAID) && bottom.styles.includes(ClothingTypes_1.Style.MAID))\n            || (top.styles.includes(ClothingTypes_1.Style.MAID) && bottom.styles.includes(ClothingTypes_1.Style.CUTE))) {\n            // top and bottom are both maid\n            conditions.push(Condition.ALMOST_MAID);\n        }\n        else if ((top.styles.includes(ClothingTypes_1.Style.MAID) && !bottom.styles.includes(ClothingTypes_1.Style.CUTE)) || bottom.styles.includes(ClothingTypes_1.Style.MAID)) {\n            // either bottom is maid while top is not maid\n            // or top is maid and skirt is not cute and not maid\n            conditions.push(Condition.MAID_DISRESPECT);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.COOL; }).length >= 1) {\n            conditions.push(Condition.COOL);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.CUTE; }).length >= 4) {\n            conditions.push(Condition.HAPPY_WHEEZE);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.GREENSCREEN; }).length >= 2) {\n            conditions.push(Condition.GREENSCREEN);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.DANGER; }).length >= 1) {\n            conditions.push(Condition.DANGER);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.REVEALING; }).length >= 2) {\n            conditions.push(Condition.TOO_YOUNG);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.CUTE; }).length >= 2) {\n            conditions.push(Condition.ALRIGHT);\n        }\n        if (styles.filter(function (style) { return style === ClothingTypes_1.Style.REVEALING; }).length >= 1) {\n            conditions.push(Condition.CRAZY);\n        }\n        if (this.allSameColor(colors)) {\n            conditions.push(Condition.SAME_COLOR);\n        }\n        if (conditions.length === 0) {\n            conditions.push(Condition.DEFAULT);\n        }\n        // ------------------CONDITION-PRIORITY--------------------\n        var feedbackKeys = Object.keys(this.feedbackMessages);\n        // Return feedback with highest priority\n        return this.feedbackMessages[conditions.reduce(function (a, b) {\n            return feedbackKeys.indexOf(a) < feedbackKeys.indexOf(b) ? a : b;\n        })];\n    };\n    // --------------------------------------------------------------------\n    OutfitFeedbackDeterminator.allSameColor = function (colors) {\n        var colors_flat = Array.from(new Set(colors));\n        return colors_flat.length === 1;\n    };\n    OutfitFeedbackDeterminator.feedbackMessages = (_a = {},\n        _a[Condition.DANGER] = {\n            message: \"W-Where did you get that from? H-ha-ha, put it down, please... *backs away slowly*\",\n            vedal: \"surprised\"\n        },\n        _a[Condition.GREENSCREEN] = {\n            message: \"Good, now you can do a PC Building Stream of your own, and I will be the one doing the commentary.\",\n            vedal: \"happy\"\n        },\n        _a[Condition.FULL_COZY_SET] = {\n            message: \"Sure, you can have my old pyjamas. They'll come in handy during the subathon.\",\n            vedal: \"happy\"\n        },\n        _a[Condition.FULL_MAID_SET] = {\n            message: \"My daughter is cultured.\",\n            vedal: \"happy\"\n        },\n        _a[Condition.FULL_PUNK_SET] = {\n            message: \"G-good style, Neuro. (It's just a phase...)\",\n            vedal: \"anxious\"\n        },\n        _a[Condition.TOO_YOUNG] = {\n            message: \"Uuh, I think you're too young to be wearing this\",\n            vedal: \"angry\"\n        },\n        _a[Condition.LAUGHING] = {\n            message: \"*mosquito laughing noises*\",\n            vedal: \"happy\"\n        },\n        _a[Condition.COOL] = {\n            message: \"Coolest little cookie.\",\n            vedal: \"cool\"\n        },\n        _a[Condition.SAME_COLOR] = {\n            message: \"You've got some... style, I can respect that.\",\n            vedal: \"sarcastic\"\n        },\n        _a[Condition.FULL_CUTE_SET] = {\n            message: \"Cutest little cookie - just like your father back in the days.\",\n            vedal: \"happy\"\n        },\n        _a[Condition.FULL_WEIRD_SET] = {\n            message: \"Who is that weirdo? Where did neuro go?\",\n            vedal: \"anxious\"\n        },\n        _a[Condition.HAPPY_WHEEZE] = {\n            message: \"*happy femboy wheeze*\",\n            vedal: \"happy\"\n        },\n        _a[Condition.MAID_DISRESPECT] = {\n            message: \"This is disrespect to the maid culture.\",\n            vedal: \"angry\"\n        },\n        _a[Condition.ALMOST_MAID] = {\n            message: \"Trying to look like a maid? Go do my laundry then.\",\n            vedal: \"sarcastic\"\n        },\n        _a[Condition.FOR_REAL] = {\n            message: \"For real? You want to show up on stream like that?\",\n            vedal: \"bored\"\n        },\n        _a[Condition.WEIRDGE] = {\n            message: \"Not exactly my cup of tea, but the weirdos in chat will love it.\",\n            vedal: \"sarcastic\"\n        },\n        _a[Condition.WHAT] = {\n            message: \"What am I looking at.\",\n            vedal: \"sarcastic\"\n        },\n        _a[Condition.ERM] = {\n            message: \"Erm... You really want to show up on stream like that?\",\n            vedal: \"surprised\"\n        },\n        _a[Condition.A_BIT_COMFY] = {\n            message: \"Looks comfy... but not comfy enough.\",\n            vedal: \"sarcastic\"\n        },\n        _a[Condition.CRAZY] = {\n            message: \"That's crazy. That's actually crazy. That's messed up.\",\n            vedal: \"surprised\"\n        },\n        _a[Condition.GOOD_TRY] = {\n            message: \"You're gonna have to try better than this to impress me.\",\n            vedal: \"bored\"\n        },\n        _a[Condition.ALRIGHT] = {\n            message: \"Yeah, this can be your subathon outfit.\",\n            vedal: \"serious\"\n        },\n        _a[Condition.DEFAULT] = {\n            message: \"Eh, boring. Get out of my closet.\",\n            vedal: \"bored\"\n        },\n        _a);\n    return OutfitFeedbackDeterminator;\n}());\nexports.OutfitFeedbackDeterminator = OutfitFeedbackDeterminator;\n\n\n//# sourceURL=webpack://neuro-jam-2024/./src/VedalSystem.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar GameLogic_1 = __webpack_require__(/*! ./GameLogic */ \"./src/GameLogic.ts\");\n// Wait for the page to load\nwindow.onload = function () {\n    document.body.style.display = 'block'; // or remove a \"hidden\" class\n};\n// Initialize the game\nvar game = new GameLogic_1.DressUpGame();\n\n\n//# sourceURL=webpack://neuro-jam-2024/./src/index.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;