"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_OpenMic_jsx"],{

/***/ "./client/components/OpenMic.jsx":
/*!***************************************!*\
  !*** ./client/components/OpenMic.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-config */ "./client/firebase-config.js");






const OpenMic = () => {
  const [authorization, setAuthorization] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    openMicId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  // AUTH
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.auth, currentUser => {
    setUser(currentUser);
  });
  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.authReducer);

  // REDUX
  const openMicResp = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.openMicRed);
  let selectedOpenMic = openMicResp.length > 1 ? openMicResp === null || openMicResp === void 0 ? void 0 : openMicResp.find(openMic => openMic.id == openMicId) : openMicResp[0];

  // FUNCTIONS
  const handleDelete = async id => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.removeOpenMic)(openMicId));
    alert('Open Deleted');
    navigate('/');
    navigate(0);
  };
  const handleUpdate = async (status, id) => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.fetchOneOpenMic)(openMicId));
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.showUpdate)(true, openMicId));
    navigate(`/openMics/${openMicId}/update`);
  };

  // USE EFFECT
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('Selected OpenMic Auth: ', selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.auth_token);
    console.log('Token: ', token);
    if ((selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.auth_token) === token || (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.auth_token) == (user === null || user === void 0 ? void 0 : user.uid)) setAuthorization(true);
    window.scrollTo(0, 0);
  }, [selectedOpenMic]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "display-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "openmic-page"
  }, (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.venue) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-venue"
  }, selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.venue), (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.city) && (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.location) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-info"
  }, "Address: ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.location, " - ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.city), (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.frequency) === 'Weekly' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-info"
  }, "Every ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.day, " from ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.start_time, " to", ' ', selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.finish_time) : (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.frequency) === 'Fortnightly' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-info"
  }, "Every Second ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.day, " from", ' ', selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.start_time, " to ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.finish_time) : (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.frequency) === 'Monthly' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-info"
  }, "Every ", selectedOpenMic.week, " ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.day, " from", ' ', selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.start_time, " to ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.finish_time) : (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.frequency) === 'One-Off' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-info"
  }, "Event will happen on ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.date, " from", ' ', selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.start_time, " to ", selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.finish_time), (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_one) !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "openmic-page-info"
  }, `Available Instruments: ${selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_one}`, (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_two) && `, ${selectedOpenMic.instrument_two}`, (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_three) && `, ${selectedOpenMic.instrument_three}`, (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_four) && `, ${selectedOpenMic.instrument_four}`, (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_five) && `, ${selectedOpenMic.instrument_five}`, (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.instrument_six) && `, ${selectedOpenMic.instrument_six}`), authorization && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, selectedOpenMic !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "button",
    onClick: handleUpdate
  }, "Update"), selectedOpenMic !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "button",
    onClick: () => handleDelete(selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.id)
  }, "Delete")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenMic);

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
//# sourceMappingURL=client_components_OpenMic_jsx.bundle.js.map