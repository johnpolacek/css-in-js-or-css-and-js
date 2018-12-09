webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head.js");
/* harmony import */ var _src_components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Body */ "./src/components/Body.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button.js");
/* harmony import */ var styled_system_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system-html */ "./node_modules/styled-system-html/dist/index.js");
/* harmony import */ var styled_system_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system_html__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/johnpolacek/Sites/localhost-MAMP/css-in-js-or-css-and-js/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var frameCSS = {
  transition: 'height .5s cubic-bezier(0.075, 0.82, 0.165, 1)'
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));
    _this.state = {
      view: 'split'
    };
    _this.getFrameHeight = _this.getFrameHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "getFrameHeight",
    value: function getFrameHeight(frame) {
      if (this.state.view == 'split') {
        return ['33vh', '40vh'];
      } else if (this.state.view == frame) {
        return ['66vh', '80vh'];
      } else {
        return 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Body__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Div"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Div"], {
        css: frameCSS,
        width: 1,
        height: this.getFrameHeight('in'),
        position: "relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "./in/",
        height: "100%",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "absolute",
        bottom: "0",
        right: "0",
        id: "buttonIn",
        onClick: function onClick(e) {
          e.currentTarget.blur();

          _this2.setState({
            view: _this2.state.view == 'in' ? 'split' : 'in'
          });
        },
        mb: -1,
        mr: 4,
        pr: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Span"], {
        pr: 1,
        display: "inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "view ", this.state.view == 'in' ? 'less' : 'more'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Img"], {
        width: 19,
        src: './static/' + (this.state.view == 'in' ? 'up' : 'down') + '-arrow.svg',
        position: "absolute",
        css: {
          top: '6px',
          right: '8px'
        },
        opacity: ".33",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Div"], {
        css: frameCSS,
        width: 1,
        height: ['34vh', '20vh'],
        textAlign: "center",
        position: "relative",
        zIndex: "999",
        bg: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["H1"], {
        px: 3,
        pt: ['4vh', '2.5vh', '2.5vh', '4vh'],
        fontSize: this.state.view == 'split' ? ['6vh', '6vh', '7vh', '8vh'] : '4vh',
        color: "blue",
        lineHeight: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Span"], {
        display: ['block', 'inline'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "CSS-in-JS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Span"], {
        display: ['block', 'inline-block'],
        px: [0, 2, 3],
        fontSize: this.state.view == 'split' ? ['4vh', '3vh', '4vh'] : '2vh',
        position: "relative",
        top: [0, '-1.2vh', '-1.5vh'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, " or "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Span"], {
        display: ['block', 'inline'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "CSS-and-JS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["H2"], {
        pt: ['1vh', 0],
        fontSize: ['2.5vh', '2.5vh', '2.5vh', '3vh'],
        fontWeight: [400, 400, 400, 200],
        color: "gray9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "( Can we all just get along? )"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        display: this.state.view == 'split' ? 'inline-block' : ['none', 'inline-block'],
        fontSize: 0,
        is: "a",
        bg: "rgba(0,0,0,.33)",
        color: "white",
        href: "https://github.com/johnpolacek/css-in-js-or-css-and-js/",
        target: "_blank",
        position: ['static', 'static', 'static', 'absolute'],
        top: "0",
        right: "0",
        mt: [3, 2, 2, '50px'],
        mr: [0, 4],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "View on Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Div"], {
        css: frameCSS,
        width: 1,
        height: this.getFrameHeight('and'),
        position: "relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "absolute",
        top: "0",
        right: "0",
        id: "buttonAnd",
        onClick: function onClick(e) {
          e.currentTarget.blur();

          _this2.setState({
            view: _this2.state.view == 'and' ? 'split' : 'and'
          });
        },
        mt: -1,
        mr: 4,
        pr: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Span"], {
        pr: 1,
        display: "inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "view ", this.state.view == 'and' ? 'less' : 'more'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_system_html__WEBPACK_IMPORTED_MODULE_4__["Img"], {
        width: 19,
        src: './static/' + (this.state.view == 'and' ? 'down' : 'up') + '-arrow.svg',
        position: "absolute",
        css: {
          top: '6px',
          right: '8px'
        },
        opacity: ".33",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "./static/and/index.html",
        height: "100%",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.9d096d2652a1c668c59e.hot-update.js.map