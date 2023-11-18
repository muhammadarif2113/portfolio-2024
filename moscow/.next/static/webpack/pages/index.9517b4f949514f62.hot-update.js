"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/Switcher.js":
/*!********************************!*\
  !*** ./src/layout/Switcher.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar colors = [\n    {\n        name: \"blue\",\n        colorImg: \"images/styleswitcher/blue.png\"\n    },\n    {\n        name: \"red\",\n        colorImg: \"images/styleswitcher/red.png\"\n    },\n    {\n        name: \"goldrenrod\",\n        colorImg: \"images/styleswitcher/goldenrod.png\"\n    },\n    {\n        name: \"magenta\",\n        colorImg: \"images/styleswitcher/magenta.png\"\n    },\n    {\n        name: \"yellowgreen\",\n        colorImg: \"images/styleswitcher/yellowgreen.png\"\n    },\n    {\n        name: \"orange\",\n        colorImg: \"images/styleswitcher/orange.png\"\n    },\n    {\n        name: \"green\",\n        colorImg: \"images/styleswitcher/green.png\"\n    },\n    {\n        name: \"yellow\",\n        colorImg: \"images/styleswitcher/yellow.png\"\n    },\n    {\n        name: \"purple\",\n        colorImg: \"images/styleswitcher/purple.png\"\n    },\n    {\n        name: \"blueviolet\",\n        colorImg: \"images/styleswitcher/blueviolet.png\"\n    }, \n];\nvar Switcher = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), dark = ref1[0], setDark = ref1[1];\n    var colorChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.Context).colorChange;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setDark(document.querySelector(\"body\").classList.contains(\"dark\"));\n    }, []);\n    var toggleState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            toggle: toggle,\n            setToggle: setToggle\n        };\n    }, [\n        toggle\n    ]);\n    var themeToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            dark: dark,\n            setDark: setDark\n        };\n    }, [\n        dark\n    ]);\n    var moodChange = function(value) {\n        if (value === \"dark\") {\n            document.querySelector(\"body\").classList.add(\"dark\");\n            document.querySelector(\"body\").classList.remove(\"light\");\n        } else {\n            document.querySelector(\"body\").classList.add(\"light\");\n            document.querySelector(\"body\").classList.remove(\"dark\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"switcher\",\n                style: {\n                    display: toggle ? \"block\" : \"none\"\n                },\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"content-switcher\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"STYLE SWITCHER\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: colors.map(function(color, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        title: color.name,\n                                        className: \"color\",\n                                        onClick: function() {\n                                            return colorChange(color.name);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: color.colorImg,\n                                            alt: color.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, i, false, {\n                                        fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, i, false, {\n                                    fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"BODY SKIN\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"dark_switch\",\n                                    type: \"radio\",\n                                    name: \"color_style\",\n                                    id: \"is_light\",\n                                    defaultValue: \"light\",\n                                    defaultChecked: !themeToggle.dark ? \"checked\" : \"\",\n                                    onClick: function() {\n                                        return moodChange(\"light\");\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this),\n                                \" \",\n                                \"Light\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"dark_switch\",\n                                    type: \"radio\",\n                                    name: \"color_style\",\n                                    id: \"is_dark\",\n                                    defaultChecked: themeToggle.dark ? \"checked\" : \"\",\n                                    onClick: function() {\n                                        return moodChange(\"dark\");\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this),\n                                \" \",\n                                \"Dark\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            className: \"waves-effect waves-light btn font-weight-700 purchase hoverable\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-shopping-cart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, _this),\n                                \" Purchase\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"hideSwitcher\",\n                            onClick: function() {\n                                return toggleState.setToggle(false);\n                            },\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"showSwitcher\",\n                className: \"styleSecondColor\",\n                // style={{ display: `${!toggleState.toggle ? \"block\" : \"none\"}` }}\n                style: {\n                    display: \"none\"\n                },\n                onClick: function() {\n                    return toggleState.setToggle(!toggleState.toggle);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fa fa-cog fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saim/web-projects/portfolio-2024/moscow/src/layout/Switcher.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(Switcher, \"a2hap6BqKWJCrGdOT//tf9fd1tQ=\");\n_c = Switcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Switcher));\nvar _c, _c1;\n$RefreshReg$(_c, \"Switcher\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO29CQUFDTCxTQUFTLEVBQUMsbUJBQW1COzs7Ozt5QkFBRzs7Ozs7cUJBQy9COzs7Ozs7YUFDRyxDQUNYO0NBQ0g7R0FwR0twQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFxR2QsNEVBQWVULE1BQUFBLDJDQUFJLENBQUNTLFFBQVEsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvU3dpdGNoZXIuanM/ZmNjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZyYWdtZW50LFxyXG4gIG1lbW8sXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlTWVtbyxcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IFtcclxuICB7IG5hbWU6IFwiYmx1ZVwiLCBjb2xvckltZzogXCJpbWFnZXMvc3R5bGVzd2l0Y2hlci9ibHVlLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcInJlZFwiLCBjb2xvckltZzogXCJpbWFnZXMvc3R5bGVzd2l0Y2hlci9yZWQucG5nXCIgfSxcclxuICB7IG5hbWU6IFwiZ29sZHJlbnJvZFwiLCBjb2xvckltZzogXCJpbWFnZXMvc3R5bGVzd2l0Y2hlci9nb2xkZW5yb2QucG5nXCIgfSxcclxuICB7IG5hbWU6IFwibWFnZW50YVwiLCBjb2xvckltZzogXCJpbWFnZXMvc3R5bGVzd2l0Y2hlci9tYWdlbnRhLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcInllbGxvd2dyZWVuXCIsIGNvbG9ySW1nOiBcImltYWdlcy9zdHlsZXN3aXRjaGVyL3llbGxvd2dyZWVuLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIm9yYW5nZVwiLCBjb2xvckltZzogXCJpbWFnZXMvc3R5bGVzd2l0Y2hlci9vcmFuZ2UucG5nXCIgfSxcclxuICB7IG5hbWU6IFwiZ3JlZW5cIiwgY29sb3JJbWc6IFwiaW1hZ2VzL3N0eWxlc3dpdGNoZXIvZ3JlZW4ucG5nXCIgfSxcclxuICB7IG5hbWU6IFwieWVsbG93XCIsIGNvbG9ySW1nOiBcImltYWdlcy9zdHlsZXN3aXRjaGVyL3llbGxvdy5wbmdcIiB9LFxyXG4gIHsgbmFtZTogXCJwdXJwbGVcIiwgY29sb3JJbWc6IFwiaW1hZ2VzL3N0eWxlc3dpdGNoZXIvcHVycGxlLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcImJsdWV2aW9sZXRcIiwgY29sb3JJbWc6IFwiaW1hZ2VzL3N0eWxlc3dpdGNoZXIvYmx1ZXZpb2xldC5wbmdcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgU3dpdGNoZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBjb2xvckNoYW5nZSB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGFyayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgdG9nZ2xlU3RhdGUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgdG9nZ2xlLFxyXG4gICAgICBzZXRUb2dnbGUsXHJcbiAgICB9KSxcclxuICAgIFt0b2dnbGVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdGhlbWVUb2dnbGUgPSB1c2VNZW1vKCgpID0+ICh7IGRhcmssIHNldERhcmsgfSksIFtkYXJrXSk7XHJcblxyXG4gIGNvbnN0IG1vb2RDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwic3dpdGNoZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zd2l0Y2hlclwiPlxyXG4gICAgICAgICAgPGg0PlNUWUxFIFNXSVRDSEVSPC9oND5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb2xvci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29sb3JDaGFuZ2UoY29sb3IubmFtZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb2xvci5jb2xvckltZ30gYWx0PXtjb2xvci5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxoND5CT0RZIFNLSU48L2g0PlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcmtfc3dpdGNoXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb2xvcl9zdHlsZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpc19saWdodFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXshdGhlbWVUb2dnbGUuZGFyayA/IFwiY2hlY2tlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb29kQ2hhbmdlKFwibGlnaHRcIil9XHJcbiAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICBMaWdodFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrX3N3aXRjaFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29sb3Jfc3R5bGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaXNfZGFya1wiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoZW1lVG9nZ2xlLmRhcmsgPyBcImNoZWNrZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW9vZENoYW5nZShcImRhcmtcIil9XHJcbiAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICBEYXJrXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBmb250LXdlaWdodC03MDAgcHVyY2hhc2UgaG92ZXJhYmxlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiIC8+IFB1cmNoYXNlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGlkZVN3aXRjaGVyXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlU3RhdGUuc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIMOXXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cInNob3dTd2l0Y2hlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic3R5bGVTZWNvbmRDb2xvclwiXHJcbiAgICAgICAgLy8gc3R5bGU9e3sgZGlzcGxheTogYCR7IXRvZ2dsZVN0YXRlLnRvZ2dsZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifWAgfX1cclxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU3RhdGUuc2V0VG9nZ2xlKCF0b2dnbGVTdGF0ZS50b2dnbGUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLXNwaW5cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTd2l0Y2hlcik7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIm1lbW8iLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQ29udGV4dCIsImNvbG9ycyIsIm5hbWUiLCJjb2xvckltZyIsIlN3aXRjaGVyIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiZGFyayIsInNldERhcmsiLCJjb2xvckNoYW5nZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlU3RhdGUiLCJ0aGVtZVRvZ2dsZSIsIm1vb2RDaGFuZ2UiLCJ2YWx1ZSIsImFkZCIsInJlbW92ZSIsImRpdiIsImlkIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwiaDQiLCJ1bCIsIm1hcCIsImNvbG9yIiwiaSIsImxpIiwiYSIsImhyZWYiLCJ0aXRsZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHRDaGVja2VkIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Switcher.js\n"));

/***/ })

});