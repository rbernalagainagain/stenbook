;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    1307: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'my_component', function () {
          return MyComponent
        })
      __webpack_require__(42)
      var _index_9274cddb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        279,
      )
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor)
      }
      var MyComponent = (function () {
        function MyComponent(hostRef) {
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function')
          })(this, MyComponent),
            Object(_index_9274cddb_js__WEBPACK_IMPORTED_MODULE_1__.g)(
              this,
              hostRef,
            )
        }
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Constructor
            )
          })(MyComponent, [
            {
              key: 'getText',
              value: function getText() {
                return (function format(first, middle, last) {
                  return (
                    (first || '') +
                    (middle ? ' '.concat(middle) : '') +
                    (last ? ' '.concat(last) : '')
                  )
                })(this.first, this.middle, this.last)
              },
            },
            {
              key: 'render',
              value: function render() {
                return Object(
                  _index_9274cddb_js__WEBPACK_IMPORTED_MODULE_1__.f,
                )('div', null, "Hello, World! I'm ", this.getText())
              },
            },
          ]),
          MyComponent
        )
      })()
      MyComponent.style = ':host{display:block}'
    },
  },
])
//# sourceMappingURL=6.768082304755968f3f95.bundle.js.map
