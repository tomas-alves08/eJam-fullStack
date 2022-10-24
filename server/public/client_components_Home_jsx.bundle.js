"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_Home_jsx"],{

/***/ "./client/components/Home.jsx":
/*!************************************!*\
  !*** ./client/components/Home.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./client/components/Search.jsx");
/* harmony import */ var _OpenMics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenMics */ "./client/components/OpenMics.jsx");
/* harmony import */ var _HomeDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeDescription */ "./client/components/HomeDescription.jsx");




const Home = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "home-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HomeDescription__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "display-one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Search__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenMics__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./client/components/HomeDescription.jsx":
/*!***********************************************!*\
  !*** ./client/components/HomeDescription.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-config */ "./client/firebase-config.js");




const HomeDescription = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth, currentUser => {
    setUser(currentUser);
  });
  const handleClick = () => {
    navigate('/register');
  };
  window.scrollTo(0, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "description-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "title"
  }, "eJam")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "icons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "instrument-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    id: "Guitar-icon",
    src: "./img/Guitar.png",
    alt: "Guitar-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "instrument-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    id: "Keyboard-icon",
    src: "./img/Keyboard.png",
    alt: "Keyboard-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "instrument-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    id: "Congas-icon",
    src: "./img/Congas.png",
    alt: "congas-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "instrument-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    id: "Mic-icon",
    src: "./img/Mic.png",
    alt: "mic-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "instrument-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    id: "Saxophone-icon",
    src: "./img/Saxophone.png",
    alt: "saxophone-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "subtitle-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "subtitle"
  }, "FIND AN OPEN MIC CLOSE TO YOU")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text"
  }, "All open mic enthusiasts are welcome whether you are:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "bullet-points"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Looking for a place to perform or jam with other like minded people"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Trying to promote your venue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Just looking for live music")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "phrase-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "phrase"
  }, "Share your music, share your love!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "buttons-container"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleClick,
    className: "button register-button"
  }, "Register an Open Mic"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDescription);

/***/ }),

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

/***/ }),

/***/ "./client/components/Search.jsx":
/*!**************************************!*\
  !*** ./client/components/Search.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");
/* harmony import */ var _nz_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nz.json */ "./nz.json");




const Search = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  let city = '';
  const handleChange = e => {
    let value = e.target.value;
    if (value.length > 0) {
      city = value[0].toUpperCase() + value.slice(1).toLowerCase();
    } else {
      city = null;
    }
    setSearch(city);
  };
  if (search !== null) {
    city = _nz_json__WEBPACK_IMPORTED_MODULE_3__.filter(city => city.city.match(search));
  }
  const handleSearch = e => {
    var _city$, _city$2;
    e.preventDefault();
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.findOpenMics)((_city$ = city[0]) !== null && _city$ !== void 0 && _city$.city ? (_city$2 = city[0]) === null || _city$2 === void 0 ? void 0 : _city$2.city : ''));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSearch,
    className: "search-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "city",
    name: "city",
    value: search || '',
    placeholder: "  Insert City Name to Find Open Mics",
    onChange: handleChange,
    className: "search-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "button search-button"
  }, "Search"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

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
//# sourceMappingURL=client_components_Home_jsx.bundle.js.map