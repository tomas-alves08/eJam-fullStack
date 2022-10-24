"use strict";
(globalThis["webpackChunkboilerplate_react_knex"] = globalThis["webpackChunkboilerplate_react_knex"] || []).push([["client_components_Form_jsx"],{

/***/ "./client/components/Form.jsx":
/*!************************************!*\
  !*** ./client/components/Form.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funcs.js */ "./client/funcs.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");





const Form = () => {
  let formFields = {
    venue: '',
    location: '',
    city: '',
    frequency: '',
    day: '',
    week: '',
    date: '',
    start_time: '',
    finish_time: '',
    instrument_one: '',
    instrument_two: '',
    instrument_three: '',
    instrument_four: '',
    instrument_five: '',
    instrument_six: '',
    auth_token: ''
  };
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  // AUTH
  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.authReducer);

  // Update Redux Store State
  let displayUpdate = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.updateReducer);
  const formDataId = displayUpdate.id;

  // OpenMics Redux Store State
  const selectedOpenMic = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.oneOpenMicRed);
  if (displayUpdate.status === true) {
    formFields = {
      ...selectedOpenMic
    };
  }
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formFields);

  // FUNCTIONS
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (displayUpdate.status) {
      setFormData({
        ...selectedOpenMic,
        auth_token: token,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        auth_token: token,
        [name]: value
      });
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.createOpenMic)(formData));
    setFormData(formFields);
    navigate('/');
    navigate(0);
  };
  const handleUpdate = async e => {
    e.preventDefault();
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.changeOpenMic)(formDataId, {
      ...formData,
      id: formDataId
    }));
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.showUpdate)(false, formDataId));
    setFormData(formFields);
    displayUpdate.status = false;
    navigate(`/`);

    // this command refreshes the page
    navigate(0);
  };
  const handleCancel = () => {
    if (displayUpdate.status) navigate(`/openMics/${formDataId}`);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.showUpdate)(false, formDataId));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: displayUpdate.status ? handleUpdate : handleSubmit,
    className: "register-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "form-lable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "region"
  }, "Region:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "form-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "region",
    name: "region",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.region) || formData.region || '' : formData.region || '',
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Select"
  }, "Select your Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "North Island"
  }, "North Island"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "South Island"
  }, "South Island")))), formData.region && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "city"
  }, "City:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "city",
    name: "city",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? (selectedOpenMic === null || selectedOpenMic === void 0 ? void 0 : selectedOpenMic.city) || formData.city || '' : formData.city || '',
    onChange: handleChange
  }, formData.region === 'North Island' && _funcs_js__WEBPACK_IMPORTED_MODULE_2__.citiesNorthIsland.map(city => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: city.id,
    value: `${city.city}`
  }, `${city.city}`)), formData.region === 'South Island' && _funcs_js__WEBPACK_IMPORTED_MODULE_2__.citiesSouthIsland.map(city => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: city.id,
    value: `${city.city}`
  }, `${city.city}`))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "pub"
  }, "Venue:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    id: "pub",
    name: "venue",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.venue || formData.venue || '' : formData.venue || '',
    onChange: handleChange,
    placeholder: "Insert venue"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "location"
  }, "Adderss:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "location",
    type: "text",
    name: "location",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.location || formData.location || '' : formData.location || '',
    onChange: handleChange,
    placeholder: "Insert address"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "frequency"
  }, "Frequency:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "frequency",
    name: "frequency",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.frequency || formData.frequency || '' : formData.frequency || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.frequencyArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`))))), formData.frequency === 'Monthly' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "week-month"
  }, "Week of the Month:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "week-month",
    name: "week",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.week || formData.week || '' : formData.week || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.weekOfTheMonthArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`))))), formData.frequency !== 'One-Off' && formData.frequency !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "day"
  }, "Day Of The Week:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "day",
    name: "day",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.day || formData.day || '' : formData.day || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.weekdayArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`))))), formData.frequency === 'One-Off' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "date"
  }, "One-Off Date:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    id: "date",
    name: "date",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.date || formData.date || '' : formData.date || '',
    onChange: handleChange,
    placeholder: "Insert Start Time"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "start_time"
  }, "Start Time:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "time",
    id: "start_time",
    name: "start_time",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.start_time || formData.start_time || '' : formData.start_time || '',
    onChange: handleChange,
    placeholder: "Insert Start Time"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "finish_time"
  }, "Finish Time:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "time",
    id: "finish_time",
    name: "finish_time",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.finish_time || formData.finish_time || '' : formData.finish_time || '',
    onChange: handleChange,
    placeholder: "Insert End Time"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Instruments:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "instrument_one",
    name: "instrument_one",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.instrument_one || formData.instrument_one || '' : formData.instrument_one || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.instrumentsArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`)))), formData.instrument_one && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "2."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "instrument_two",
    name: "instrument_two",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.instrument_two || formData.instrument_two || '' : formData.instrument_two || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.instrumentsArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`)))), formData.instrument_two && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "3."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "instrument_three",
    name: "instrument_three",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.instrument_three || formData.instrument_three || '' : formData.instrument_three || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.instrumentsArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`)))), formData.instrument_three && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "instrument_four",
    name: "instrument_four",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.instrument_four || formData.instrument_four || '' : formData.instrument_four || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.instrumentsArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: `${el}`
  }, `${el}`)))), formData.instrument_four && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "5."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "instrument_five",
    name: "instrument_five",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.instrument_five || formData.instrument_five || '' : formData.instrument_five || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.instrumentsArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`)))), formData.instrument_five && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "6."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "instrument_six",
    name: "instrument_six",
    defaultValue: displayUpdate !== null && displayUpdate !== void 0 && displayUpdate.status ? selectedOpenMic.instrument_six || formData.instrument_six || '' : formData.instrument_six || '',
    onChange: handleChange
  }, _funcs_js__WEBPACK_IMPORTED_MODULE_2__.instrumentsArr.map(el => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: el.id,
    value: `${el}`
  }, `${el}`))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "button",
    role: "button"
  }, displayUpdate.status ? 'Update' : 'Add'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "button",
    role: "button",
    onClick: handleCancel
  }, "Cancel")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

}]);
//# sourceMappingURL=client_components_Form_jsx.bundle.js.map