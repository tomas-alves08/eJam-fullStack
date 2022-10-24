"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_Nav_jsx"],{

/***/ "./client/components/Nav.jsx":
/*!***********************************!*\
  !*** ./client/components/Nav.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-config */ "./client/firebase-config.js");










const Nav = () => {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.authReducer);
  token && console.log(token);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.auth, currentUser => {
    setUser(currentUser);
  });
  const logout = async () => {
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.auth);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.setUserToken)(''));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Open Mic NZ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    className: "icon-guitar",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGuitar
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faHome
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEnvelope
  }))), user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onClick: logout
  }, "Log Out"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/signin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Sign In")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./client/firebase-config.js":
/*!***********************************!*\
  !*** ./client/firebase-config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


const firebaseConfig = {
  apiKey: "AIzaSyBYbfvKPCQECyK0z7gl-Uj1jhPsFWRNSMs",
  authDomain: "ejam-72a4c.firebaseapp.com",
  projectId: "ejam-72a4c",
  storageBucket: "ejam-72a4c.appspot.com",
  messagingSenderId: "614681326173",
  appId: "1:614681326173:web:d0b2110ad0c004d930d3b4",
  measurementId: "G-QRT2K06FR1"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

/***/ })

}]);
//# sourceMappingURL=client_components_Nav_jsx.bundle.js.map