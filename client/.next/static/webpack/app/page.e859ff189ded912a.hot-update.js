/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const navigateToLogin = ()=>{\n        router.push(\"/login\");\n    };\n    const navigateToSignup = ()=>{\n        router.push(\"/signup\");\n    };\n    const navigateToOtherPage = ()=>{\n        // Replace '/other' with the path of the other page you want to navigate to\n        router.push(\"/other\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to My App\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"primary\",\n                onClick: navigateToLogin,\n                children: \"Go to Login\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"primary\",\n                onClick: navigateToSignup,\n                children: \"Go to Signup\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"primary\",\n                onClick: navigateToOtherPage,\n                children: \"Go to Other Page\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhCO0FBQ2M7QUFFN0IsU0FBU0U7O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUV4QixNQUFNRyxrQkFBa0I7UUFDdEJELE9BQU9FLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCSCxPQUFPRSxJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1FLHNCQUFzQjtRQUMxQiwyRUFBMkU7UUFDM0VKLE9BQU9FLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFJSiw4REFBQ1QsMEVBQU1BO2dCQUFDVSxNQUFLO2dCQUFVQyxTQUFTUDswQkFBaUI7Ozs7OzswQkFHakQsOERBQUNKLDBFQUFNQTtnQkFBQ1UsTUFBSztnQkFBVUMsU0FBU0w7MEJBQWtCOzs7Ozs7MEJBR2xELDhEQUFDTiwwRUFBTUE7Z0JBQUNVLE1BQUs7Z0JBQVVDLFNBQVNKOzBCQUFxQjs7Ozs7Ozs7Ozs7O0FBSzNEO0dBakN3Qkw7O1FBQ1BELHNEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbmF2aWdhdGVUb0xvZ2luID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgfTtcblxuICBjb25zdCBuYXZpZ2F0ZVRvU2lnbnVwID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH07XG5cbiAgY29uc3QgbmF2aWdhdGVUb090aGVyUGFnZSA9ICgpID0+IHtcbiAgICAvLyBSZXBsYWNlICcvb3RoZXInIHdpdGggdGhlIHBhdGggb2YgdGhlIG90aGVyIHBhZ2UgeW91IHdhbnQgdG8gbmF2aWdhdGUgdG9cbiAgICByb3V0ZXIucHVzaCgnL290aGVyJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPldlbGNvbWUgdG8gTXkgQXBwPC9oMT5cbiAgICBcblxuICAgICAgey8qIEJ1dHRvbnMgdG8gbmF2aWdhdGUgKi99XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17bmF2aWdhdGVUb0xvZ2lufT5cbiAgICAgICAgR28gdG8gTG9naW5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e25hdmlnYXRlVG9TaWdudXB9PlxuICAgICAgICBHbyB0byBTaWdudXBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e25hdmlnYXRlVG9PdGhlclBhZ2V9PlxuICAgICAgICBHbyB0byBPdGhlciBQYWdlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJIb21lIiwicm91dGVyIiwibmF2aWdhdGVUb0xvZ2luIiwicHVzaCIsIm5hdmlnYXRlVG9TaWdudXAiLCJuYXZpZ2F0ZVRvT3RoZXJQYWdlIiwiZGl2IiwiaDEiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQUEsK0pBQStEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanM/ZDhiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/navigation.js\n"));

/***/ })

});