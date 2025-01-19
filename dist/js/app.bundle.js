/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation.js */ \"./src/js/components/navigation.js\");\n// Initialize map and event listeners\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n\tconsole.log('Netflify test');\r\n\r\n\t(0,_components_navigation_js__WEBPACK_IMPORTED_MODULE_0__.initMobileNav)();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUMyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0VBQWE7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLWRlbnZlci1saXN0LW5ldGxpZnkvLi9zcmMvanMvYXBwLmpzPzZlZTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5pdGlhbGl6ZSBtYXAgYW5kIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuaW1wb3J0IHsgaW5pdE1vYmlsZU5hdiB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc29sZS5sb2coJ05ldGZsaWZ5IHRlc3QnKTtcclxuXHJcblx0aW5pdE1vYmlsZU5hdigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/components/navigation.js":
/*!*****************************************!*\
  !*** ./src/js/components/navigation.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMobileNav: () => (/* binding */ initMobileNav)\n/* harmony export */ });\nfunction initMobileNav() {\r\n\tconst navContainer = document.querySelector('[data-mobile-nav]');\r\n\r\n\tif (!navContainer) {\r\n\t\tconsole.warn('Mobile navigation container not found');\r\n\t\treturn;\r\n\t}\r\n\r\n\tnavContainer.addEventListener('click', (event) => {\r\n\t\tconst button = event.target.closest('[data-mobile-button]');\r\n\r\n\t\tif (button) {\r\n\t\t\tconst buttonName = button.getAttribute('data-mobile-button');\r\n\r\n\t\t\t// Call the appropriate function based on button name\r\n\t\t\tif (buttonHandlers[buttonName]) {\r\n\t\t\t\tbuttonHandlers[buttonName]();\r\n\t\t\t} else {\r\n\t\t\t\tconsole.warn(`No handler found for button: ${buttonName}`);\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n}\r\n\r\n// Define separate functions for each button\r\nfunction handleFiltersClick() {\r\n\tconsole.log('Filters button clicked');\r\n\tconst filtersContainer = document.querySelector('[data-filters]');\r\n\tif (!filtersContainer) return;\r\n\r\n\tfiltersContainer.classList.toggle('active');\r\n\t// Add your logic here\r\n}\r\n\r\nfunction handleMenuClick() {\r\n\tconsole.log('Menu button clicked');\r\n\t// Add your logic here\r\n}\r\n\r\nfunction handleSettingsClick() {\r\n\tconsole.log('Settings button clicked');\r\n\t// Add your logic here\r\n}\r\n\r\nfunction handleInfoClick() {\r\n\tconsole.log('Info button clicked');\r\n\t// Add your logic here\r\n}\r\n\r\n// Mapping of button names to their respective functions\r\nconst buttonHandlers = {\r\n\tfilters: handleFiltersClick,\r\n\tmenu: handleMenuClick,\r\n\tsettings: handleSettingsClick,\r\n\tinto: handleInfoClick, // Assuming 'into' is intentional, not 'info'\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtZGVudmVyLWxpc3QtbmV0bGlmeS8uL3NyYy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24uanM/MDczMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaW5pdE1vYmlsZU5hdigpIHtcclxuXHRjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2JpbGUtbmF2XScpO1xyXG5cclxuXHRpZiAoIW5hdkNvbnRhaW5lcikge1xyXG5cdFx0Y29uc29sZS53YXJuKCdNb2JpbGUgbmF2aWdhdGlvbiBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRuYXZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tb2JpbGUtYnV0dG9uXScpO1xyXG5cclxuXHRcdGlmIChidXR0b24pIHtcclxuXHRcdFx0Y29uc3QgYnV0dG9uTmFtZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9iaWxlLWJ1dHRvbicpO1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCB0aGUgYXBwcm9wcmlhdGUgZnVuY3Rpb24gYmFzZWQgb24gYnV0dG9uIG5hbWVcclxuXHRcdFx0aWYgKGJ1dHRvbkhhbmRsZXJzW2J1dHRvbk5hbWVdKSB7XHJcblx0XHRcdFx0YnV0dG9uSGFuZGxlcnNbYnV0dG9uTmFtZV0oKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oYE5vIGhhbmRsZXIgZm91bmQgZm9yIGJ1dHRvbjogJHtidXR0b25OYW1lfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIERlZmluZSBzZXBhcmF0ZSBmdW5jdGlvbnMgZm9yIGVhY2ggYnV0dG9uXHJcbmZ1bmN0aW9uIGhhbmRsZUZpbHRlcnNDbGljaygpIHtcclxuXHRjb25zb2xlLmxvZygnRmlsdGVycyBidXR0b24gY2xpY2tlZCcpO1xyXG5cdGNvbnN0IGZpbHRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWx0ZXJzXScpO1xyXG5cdGlmICghZmlsdGVyc0NvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuXHRmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdC8vIEFkZCB5b3VyIGxvZ2ljIGhlcmVcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKCkge1xyXG5cdGNvbnNvbGUubG9nKCdNZW51IGJ1dHRvbiBjbGlja2VkJyk7XHJcblx0Ly8gQWRkIHlvdXIgbG9naWMgaGVyZVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTZXR0aW5nc0NsaWNrKCkge1xyXG5cdGNvbnNvbGUubG9nKCdTZXR0aW5ncyBidXR0b24gY2xpY2tlZCcpO1xyXG5cdC8vIEFkZCB5b3VyIGxvZ2ljIGhlcmVcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW5mb0NsaWNrKCkge1xyXG5cdGNvbnNvbGUubG9nKCdJbmZvIGJ1dHRvbiBjbGlja2VkJyk7XHJcblx0Ly8gQWRkIHlvdXIgbG9naWMgaGVyZVxyXG59XHJcblxyXG4vLyBNYXBwaW5nIG9mIGJ1dHRvbiBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIGZ1bmN0aW9uc1xyXG5jb25zdCBidXR0b25IYW5kbGVycyA9IHtcclxuXHRmaWx0ZXJzOiBoYW5kbGVGaWx0ZXJzQ2xpY2ssXHJcblx0bWVudTogaGFuZGxlTWVudUNsaWNrLFxyXG5cdHNldHRpbmdzOiBoYW5kbGVTZXR0aW5nc0NsaWNrLFxyXG5cdGludG86IGhhbmRsZUluZm9DbGljaywgLy8gQXNzdW1pbmcgJ2ludG8nIGlzIGludGVudGlvbmFsLCBub3QgJ2luZm8nXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/navigation.js\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;