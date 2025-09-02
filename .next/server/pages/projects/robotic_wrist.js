"use strict";
(() => {
var exports = {};
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 5511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _components_chakra__WEBPACK_IMPORTED_MODULE_5__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3581);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1565);
/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6556);
/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_project__WEBPACK_IMPORTED_MODULE_2__, _components_paragraph__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__, _components_chakra__WEBPACK_IMPORTED_MODULE_5__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_project__WEBPACK_IMPORTED_MODULE_2__, _components_paragraph__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__, _components_chakra__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Project = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_article__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "robotic_wrist",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_project__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
                    children: [
                        "High-Frequency Shape-Drawing Robotic Wrist ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                            children: "2024"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: "Developed a 2 Degree-of-Freedom (DOF) robotic wrist equipped with a laser pointer as the end effector, capable of drawing complex shapes at high frequencies."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: "Engineered a sophisticated control system to govern the movement of the robotic wrist. Incorporated PID logic for real-time adjustments, enhancing the accuracy of shape drawing."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: "Integrated various sensors to detect and respond to environmental changes. Implemented Fault Detection and Diagnostics (FDD) with Weighted Sum Filters for enhanced sensor data accuracy and reliability."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: "Wrote and optimized Interrupt Service Routine (ISR) code for STM microcontrollers in C, achieving efficient handling of high-frequency tasks and sensor inputs."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: "Successfully integrated mechanical and electronic components, demonstrating a fully functional prototype. Conducted rigorous testing to validate the design, control logic, and overall system performance."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: "Integrated Bluetooth via ESP32 for remote control and implemented an ultrasonic sensor to detect wall distances, enabling precise manual and automatic adjustments of the shape's proportion."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
                    ml: 4,
                    my: 4,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_project__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
                                    children: "Demo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                    width: "320",
                                    height: "240",
                                    controls: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: "/videos/robotic_wrist_demo.mov",
                                        type: "video/quicktime"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_project__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
                                    children: "Location"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Vancouver, Canada"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_project__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
                                    children: "Duration"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Feb 2024 – April 2024"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_project__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
                                    children: "Stack"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Embedded C, STM32 Microcontrollers, ESP32, PID Control, Bluetooth, Ultrasonic Sensors, Circuit Design"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_project__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
                                    children: "Documentation"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/docs/robotic_wrist_slideshow.pdf",
                                            target: "_blank",
                                            style: {
                                                color: "#319795",
                                                textDecoration: "underline"
                                            },
                                            children: "Slideshow"
                                        }),
                                        " •",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/docs/robotic_wrist_report.pdf",
                                            target: "_blank",
                                            style: {
                                                color: "#319795",
                                                textDecoration: "underline"
                                            },
                                            children: "Systems Report"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6134:
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 149:
/***/ ((module) => {

module.exports = import("@chakra-ui/theme-tools");;

/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ 4115:
/***/ ((module) => {

module.exports = import("@emotion/styled");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,556,71,799], () => (__webpack_exec__(5511)));
module.exports = __webpack_exports__;

})();