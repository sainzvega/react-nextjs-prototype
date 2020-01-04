webpackHotUpdate("static/development/pages/blog/[id].js",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "/Users/humbertosainz/Projects/react/react-nextjs-gettingstarted/pages/blog/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function BlogPost(_ref) {
  var show = _ref.show;
  var name = show.name,
      summary = show.summary,
      image = show.image;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, name), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: image.medium,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, summary)));
}

BlogPost.getInitialProps = function _callee(context) {
  var id, res, show;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.tvmaze.com/shows/".concat(id)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          show = _context.sent;
          return _context.abrupt("return", {
            show: show
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=[id].js.1217aa36d3f0a76e337c.hot-update.js.map