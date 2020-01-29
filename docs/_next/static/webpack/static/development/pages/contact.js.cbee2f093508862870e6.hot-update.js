webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jiridolinski/work/cernocky-fond-app/src/components/Nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var links = [{
  href: "/",
  label: "Home"
}, {
  href: "/investment-philosophy",
  label: "Investment Philosophy"
}, // { href: "/investor-letters", label: "Investor Leters" },
{
  href: "/contact",
  label: "Contact"
}];
var Nav = function Nav() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx("nav", {
    className: "flex f6 f5-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, links.map(function (_ref, index) {
    var href = _ref.href,
        label = _ref.label;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: href,
      key: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(["db black no-underline pb2 pb0-ns navbar-link", href === router.asPath && "active", index === links.length - 1 ? "mr0" : "mr3 mr4-ns"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, label));
  }));
};

/***/ })

})
//# sourceMappingURL=contact.js.cbee2f093508862870e6.hot-update.js.map