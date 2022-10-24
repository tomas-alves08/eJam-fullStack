"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_OpenMics_jsx"],{

/***/ "./client/components/OpenMics.jsx":
/*!****************************************!*\
  !*** ./client/components/OpenMics.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../funcs */ "./client/funcs.js");





const OpenMics = () => {
  const searchData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.searchReducer);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const city = searchData.city;
  const openMicArr = searchData.foundData;
  const handleLoad = async () => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.fetchOpenMics)());
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.showUpdate)(false, ''));
  };

  // SORT OPEN MICS BY WEEK DAY
  const sortedOpenMics = openMicArr === null || openMicArr === void 0 ? void 0 : openMicArr.sort(function sortByDay(a, b) {
    let day1 = a.day;
    let day2 = b.day;
    return _funcs__WEBPACK_IMPORTED_MODULE_3__.sorter[day1] - _funcs__WEBPACK_IMPORTED_MODULE_3__.sorter[day2];
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleLoad();
  }, [openMicArr]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "openMics-container"
  }, (city === null || city === void 0 ? void 0 : city.length) === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-title"
  }, "Sorry! City not found.") : (openMicArr === null || openMicArr === void 0 ? void 0 : openMicArr.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-title"
  }, "Open Mics Found in ", city) : city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-title"
  }, "No Open Mic Found in ", city), city === '' ? null : openMicArr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "openMics-card-container"
  }, openMicArr === null || openMicArr === void 0 ? void 0 : openMicArr.map(openMic => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: openMic.id,
    className: "openMic-card"
  }, (openMic === null || openMic === void 0 ? void 0 : openMic.venue) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: `/openMics/${openMic === null || openMic === void 0 ? void 0 : openMic.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "openMic-venue",
    key: openMic === null || openMic === void 0 ? void 0 : openMic.id
  }, openMic === null || openMic === void 0 ? void 0 : openMic.venue)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "openMic-info"
  }, (openMic === null || openMic === void 0 ? void 0 : openMic.city) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-city"
  }, "City: ", openMic === null || openMic === void 0 ? void 0 : openMic.city), (openMic === null || openMic === void 0 ? void 0 : openMic.frequency) && ((openMic === null || openMic === void 0 ? void 0 : openMic.frequency) === 'Weekly' || (openMic === null || openMic === void 0 ? void 0 : openMic.frequency) === 'Fortnightly' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-day"
  }, openMic === null || openMic === void 0 ? void 0 : openMic.frequency, " on ", openMic === null || openMic === void 0 ? void 0 : openMic.day, "s") : (openMic === null || openMic === void 0 ? void 0 : openMic.frequency) === 'Monthly' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-day"
  }, "Every ", openMic === null || openMic === void 0 ? void 0 : openMic.week, " ", openMic === null || openMic === void 0 ? void 0 : openMic.day, " of the Month") : (openMic === null || openMic === void 0 ? void 0 : openMic.frequency) === 'One-Off' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openMic-day"
  }, "One-Off Event on ", openMic === null || openMic === void 0 ? void 0 : openMic.date))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenMics);

/***/ })

}]);
//# sourceMappingURL=client_components_OpenMics_jsx.bundle.js.map