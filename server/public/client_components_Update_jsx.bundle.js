"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_Update_jsx"],{

/***/ "./client/components/Update.jsx":
/*!**************************************!*\
  !*** ./client/components/Update.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./client/components/Form.jsx");



const Update = () => {
  const displayUpdate = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.updateReducer);
  const updatedOpenMic = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.oneOpenMicRed);
  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.authReducer);

  // Authorization
  const [authorization, setAuthorization] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const authorize = () => {
    if ((updatedOpenMic === null || updatedOpenMic === void 0 ? void 0 : updatedOpenMic.auth_token) === token) setAuthorization(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    authorize();
    window.scrollTo(0, 0);
  }, [updatedOpenMic]);
  console.log(displayUpdate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "update-page-container"
  }, authorization && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "register-title"
  }, "Update ", updatedOpenMic === null || updatedOpenMic === void 0 ? void 0 : updatedOpenMic.venue, " OpenMic's details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "openmic-page-form"
  }, displayUpdate.status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Update);

/***/ })

}]);
//# sourceMappingURL=client_components_Update_jsx.bundle.js.map