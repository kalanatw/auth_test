"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const router = useRouter();\n    const navigateToLogin = ()=>{\n        router.push(\"/login\");\n    };\n    const navigateToSignup = ()=>{\n        router.push(\"/signup\");\n    };\n    const navigateToOtherPage = ()=>{\n        // Replace '/other' with the path of the other page you want to navigate to\n        router.push(\"/other\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to My App\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: \"primary\",\n                onClick: navigateToLogin,\n                children: \"Go to Login\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: \"primary\",\n                onClick: navigateToSignup,\n                children: \"Go to Signup\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: \"primary\",\n                onClick: navigateToOtherPage,\n                children: \"Go to Other Page\"\n            }, void 0, false, {\n                fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thathsarakalana/Downloads/super_auth-main/client/app/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", true);\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM4QjtBQUVmLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTQztJQUVmLE1BQU1DLGtCQUFrQjtRQUN0QkYsT0FBT0csSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkJKLE9BQU9HLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUUsc0JBQXNCO1FBQzFCLDJFQUEyRTtRQUMzRUwsT0FBT0csSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUlKLDhEQUFDVCwwRUFBTUE7Z0JBQUNVLE1BQUs7Z0JBQVVDLFNBQVNQOzBCQUFpQjs7Ozs7OzBCQUdqRCw4REFBQ0osMEVBQU1BO2dCQUFDVSxNQUFLO2dCQUFVQyxTQUFTTDswQkFBa0I7Ozs7OzswQkFHbEQsOERBQUNOLDBFQUFNQTtnQkFBQ1UsTUFBSztnQkFBVUMsU0FBU0o7MEJBQXFCOzs7Ozs7Ozs7Ozs7QUFLM0Q7R0FqQ3dCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG5hdmlnYXRlVG9Mb2dpbiA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH07XG5cbiAgY29uc3QgbmF2aWdhdGVUb1NpZ251cCA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xuICB9O1xuXG4gIGNvbnN0IG5hdmlnYXRlVG9PdGhlclBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gUmVwbGFjZSAnL290aGVyJyB3aXRoIHRoZSBwYXRoIG9mIHRoZSBvdGhlciBwYWdlIHlvdSB3YW50IHRvIG5hdmlnYXRlIHRvXG4gICAgcm91dGVyLnB1c2goJy9vdGhlcicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIE15IEFwcDwvaDE+XG4gICAgXG5cbiAgICAgIHsvKiBCdXR0b25zIHRvIG5hdmlnYXRlICovfVxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e25hdmlnYXRlVG9Mb2dpbn0+XG4gICAgICAgIEdvIHRvIExvZ2luXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtuYXZpZ2F0ZVRvU2lnbnVwfT5cbiAgICAgICAgR28gdG8gU2lnbnVwXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtuYXZpZ2F0ZVRvT3RoZXJQYWdlfT5cbiAgICAgICAgR28gdG8gT3RoZXIgUGFnZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hdmlnYXRlVG9Mb2dpbiIsInB1c2giLCJuYXZpZ2F0ZVRvU2lnbnVwIiwibmF2aWdhdGVUb090aGVyUGFnZSIsImRpdiIsImgxIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});