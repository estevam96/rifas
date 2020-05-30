(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel-draw~painel-home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api */ "./resources/js/src/api/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: -1,
      raffle: {
        title: "",
        tickets: "",
        price: "",
        description: "",
        draw_day: "",
        banner: "",
        winner: "",
        winning_ticket: ""
      },
      ondlRiffle: {},
      file: null,
      modal: {
        title: "Editar Rifa",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      },
      editorOption: {
        modules: {
          toolbar: [["bold", "italic", "underline", "strike"], [{
            header: 1
          }, {
            header: 2
          }], [{
            list: "ordered"
          }, {
            list: "bullet"
          }], [{
            indent: "-1"
          }, {
            indent: "+1"
          }], [{
            direction: "rtl"
          }], [{
            size: ["small", false, "large", "huge"]
          }], [{
            header: [1, 2, 3, 4, 5, 6, false]
          }], [{
            font: []
          }], [{
            align: []
          }], ["clean"]]
        }
      }
    };
  },
  methods: {
    fetchRaffle: function fetchRaffle(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api__WEBPACK_IMPORTED_MODULE_1__["Raffle"].show(id).then(function (res) {
                  var raffle = res.data;
                  Object.assign(_this.raffle, {
                    title: raffle.title,
                    tickets: Number(raffle.tickets),
                    price: Number(raffle.price),
                    description: raffle.description,
                    draw_day: new Date(raffle.draw_day.replace("-", "/")),
                    banner: raffle.url_banner
                  });
                  _this.ondlRiffle.draw_day = moment__WEBPACK_IMPORTED_MODULE_2___default()(_this.raffle.draw_day).format("YYYY-MM-DD");
                  _this.ondlRiffle.winner = raffle.winner;
                  _this.modal.loading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveRaflle: function saveRaflle() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = new FormData();
                data.append("title", _this2.raffle.title);
                data.append("tickets", _this2.raffle.tickets);
                data.append("price", _this2.raffle.price);
                data.append("description", _this2.raffle.description);
                data.append("winner", _this2.raffle.winner);
                data.append("winning_ticket", _this2.raffle.winning_ticket);

                if (_this2.ondlRiffle.draw_day !== moment__WEBPACK_IMPORTED_MODULE_2___default()(_this2.raffle.draw_day).format("YYYY-MM-DD")) {
                  data.append("draw_day", moment__WEBPACK_IMPORTED_MODULE_2___default()(_this2.raffle.draw_day).format("YYYY-MM-DD"));
                }

                if (typeof _this2.raffle.banner != "string") data.append("banner", _this2.file);
                data.append("_method", "PUT");
                if (_this2.ondlRiffle.winner !== _this2.raffle.winner) data.append("status", "concluded");
                _context2.next = 13;
                return _api__WEBPACK_IMPORTED_MODULE_1__["Raffle"].update(_this2.id, data).then(function () {
                  _this2.isSuccess = true;
                });

              case 13:
                _this2.$emit("update");

                _this2.raffle = {};

                _this2.close();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.banner.files[0];
    },
    show: function show(id) {
      this.id = id;
      this.fetchRaffle(id);
      this.$refs.editmodal.show();
    },
    close: function close() {
      this.raffle = {};
      this.file = null;
      this.$refs.editmodal.hide();
    }
  },
  computed: {
    imgPreview: function imgPreview() {
      if (this.file) {
        return URL.createObjectURL(this.file);
      }

      return null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=template&id=46cc926e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=template&id=46cc926e& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      ref: "editmodal",
      staticClass: "p-2",
      attrs: {
        size: _vm.modal.size,
        scrollable: "",
        "title-html": "<h1><b>" + _vm.modal.title + "</b></h1>",
        "hide-footer": ""
      }
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveRaflle($event)
            }
          }
        },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { sm: "12" } }, [
                _vm.raffle.banner != null
                  ? _c(
                      "div",
                      [
                        _c("span", [_vm._v("Previsão do Banner:")]),
                        _vm._v(" "),
                        _c("b-img", {
                          staticStyle: { width: "100%", height: "337px" },
                          attrs: {
                            src: _vm.imgPreview || _vm.raffle.banner,
                            fluid: "",
                            alt: "Previsão"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Banner",
                        description:
                          "utilize imagem com 1365x404, para evitar distorção  "
                      }
                    },
                    [
                      _c("b-form-file", {
                        ref: "banner",
                        attrs: {
                          name: "banner",
                          placeholder: "Escolha um arquivo ou solte-o aqui ...",
                          "drop-placeholder": "olte-o aqui...",
                          type: "file"
                        },
                        model: {
                          value: _vm.file,
                          callback: function($$v) {
                            _vm.file = $$v
                          },
                          expression: "file"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Titulo" } },
                    [
                      _c("b-form-input", {
                        attrs: { name: "title", type: "text" },
                        model: {
                          value: _vm.raffle.title,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "title", $$v)
                          },
                          expression: "raffle.title"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Numero de tickets" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          name: "ticket",
                          type: "number",
                          min: "100",
                          max: "1000",
                          step: "1"
                        },
                        model: {
                          value: _vm.raffle.tickets,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "tickets", $$v)
                          },
                          expression: "raffle.tickets"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Preço do ticket" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          name: "price",
                          type: "number",
                          min: "0",
                          max: "9999.99",
                          step: "0.01"
                        },
                        model: {
                          value: _vm.raffle.price,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "price", $$v)
                          },
                          expression: "raffle.price"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Ticket vencendor" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          name: "winnerTicket",
                          type: "number",
                          min: "0",
                          max: "1000",
                          step: "1"
                        },
                        model: {
                          value: _vm.raffle.winning_ticket,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "winning_ticket", $$v)
                          },
                          expression: "raffle.winning_ticket"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Nome do ganhador" } },
                    [
                      _c("b-form-input", {
                        attrs: { name: "winner", type: "text" },
                        model: {
                          value: _vm.raffle.winner,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "winner", $$v)
                          },
                          expression: "raffle.winner"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Data do Sorteio" } },
                    [
                      _c("vc-date-picker", {
                        attrs: {
                          mode: "single",
                          "min-date": new Date(),
                          "input-props": {
                            class: "form-control"
                          }
                        },
                        model: {
                          value: _vm.raffle.draw_day,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "draw_day", $$v)
                          },
                          expression: "raffle.draw_day"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Descrição" } },
                    [
                      _c("quill-editor", {
                        attrs: {
                          value: _vm.raffle.description,
                          options: _vm.editorOption
                        },
                        model: {
                          value: _vm.raffle.description,
                          callback: function($$v) {
                            _vm.$set(_vm.raffle, "description", $$v)
                          },
                          expression: "raffle.description"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "d-flex justify-content-end" },
            [
              _c(
                "b-col",
                {
                  staticClass: "d-flex justify-content-end",
                  attrs: { sm: "6" }
                },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "mt-4 mr-2",
                      attrs: { type: "button", squared: "" },
                      on: { click: _vm.close }
                    },
                    [_c("b", [_vm._v("CANCELAR")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mt-4",
                      class: {
                        "show-success":
                          !_vm.modal.operating && _vm.modal.success
                      },
                      attrs: { type: "submit", variant: "primary", squared: "" }
                    },
                    [_c("b", [_vm._v("CADASTRAR")])]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Painel/Raffle/edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/Painel/Raffle/edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_46cc926e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=46cc926e& */ "./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=template&id=46cc926e&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_46cc926e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_46cc926e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Painel/Raffle/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=template&id=46cc926e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=template&id=46cc926e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_46cc926e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=46cc926e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Painel/Raffle/edit.vue?vue&type=template&id=46cc926e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_46cc926e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_46cc926e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);