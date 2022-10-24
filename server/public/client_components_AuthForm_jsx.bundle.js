"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_AuthForm_jsx"],{

/***/ "./client/components/AuthForm.jsx":
/*!****************************************!*\
  !*** ./client/components/AuthForm.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-config */ "./client/firebase-config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");






const AuthForm = () => {
  const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const [registerEmail, setRegisterEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [registerPassword, setRegisterPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loginEmail, setLoginEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loginPassword, setLoginPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const register = async e => {
    e.preventDefault();
    try {
      const user = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth, registerEmail, registerPassword);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.setUserToken)(user.user.uid));
      alert(`user ${registerEmail} created successfully`);
      navigate('/');
    } catch (err) {
      alert('Register Error: ', err);
    }
  };
  const login = async e => {
    e.preventDefault();
    try {
      const user = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth, loginEmail, loginPassword);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.setUserToken)(user.user.uid));
      navigate('/');
    } catch (err) {
      alert('Register Error: ', err);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "signup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "auth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, isLogin ? 'Login' : 'Sign Up'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "email"
  }, "Your Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    id: "email",
    onChange: isLogin ? e => setLoginEmail(e.target.value) : e => setRegisterEmail(e.target.value),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "password"
  }, "Your Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    id: "password",
    onChange: isLogin ? e => setLoginPassword(e.target.value) : e => setRegisterPassword(e.target.value),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: isLogin ? login : register
  }, isLogin ? 'Login' : 'Create Account'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "toggle",
    onClick: switchAuthModeHandler
  }, isLogin ? 'Create new account' : 'Login with existing account')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForm);

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
//# sourceMappingURL=client_components_AuthForm_jsx.bundle.js.map