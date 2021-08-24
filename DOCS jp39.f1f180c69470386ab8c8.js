(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[251],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/message-box.md?vue&type=template&id=2b055dfe

var message_boxvue_type_template_id_2b055dfe_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("メッセージボックス ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "システムのメッセージボックスをシミュレートしたモーダルボックスのセットで、主にアラート情報、オペレーション確認、プロンプトメッセージを表示します。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("メッセージボックスはシステムの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のシミュレーションを提供するように設計されていますので、内容はシンプルなものになっています。より複雑な内容の場合は、ダイアログを使ってください。")])], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("アラート ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "アラートは、ユーザーが確認するまでユーザーの操作を中断します。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メソッドを呼び出してアラートを開きます。これはシステムの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" をシミュレートしたものであり、ESCを押したりボックスの外をクリックしたりして閉じることはできません。この例では、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の2つのパラメータを受け取っている。ボックスが閉じられると "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" オブジェクトが返され、さらなる処理が行われます。ターゲットブラウザが "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" をサポートしているかどうかわからない場合は、この例のようにサードパーティのポリフィルをインポートするか、コールバックを使用してください。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("確認 ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "確認は、ユーザーに確認を求めるために使用します。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("メソッドを呼び出すと、システムの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" をシミュレートしてconfirmを開くことができる。また、リテラルオブジェクトである第三の属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を渡すことで、メッセージボックスを高度にカスタマイズすることができます。属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" はメッセージの種類を示し、その値には "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を指定することができる。2番目の属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" でなければならず、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の場合は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" として扱われることに注意してください。ここでは、さらなる処理を行うために "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を用いる。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\nimport { ElMessageBox } from 'element-plus';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        type: 'warning',\n      }).then(() => {\n        ElMessage({\n          type: 'success',\n          message: 'Delete completed',\n        });\n      }).catch(() => {\n        ElMessage({\n          type: 'info',\n          message: 'Delete canceled',\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("プロンプト ");

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "プロンプトは、ユーザーの入力が必要な場合に使用されます。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("プロンプトを開くために "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メソッドを呼び出すと、システムの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" をシミュレートする。パラメータ "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を使って独自の RegExp パターンを指定することができる。バリデーションの方法を指定するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を使い、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を返します。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を返す場合は検証に失敗したことを意味し、返された文字列が "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" として使用されます。さらに、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" パラメータで入力ボックスのプレースホルダをカスタマイズすることもできます。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: 'Your email is:' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Input canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            ElMessage({\n              type: 'success',\n              message: `Your email is:${value}`,\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Input canceled',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("カスタマイズ ");

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "様々なコンテンツを表示するようにカスタマイズ可能", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("上記の3つのメソッドは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メソッドのリパッケージです。この例では、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を使って "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メソッドを直接呼び出しています。また、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を使ってカスタムスタイルを追加したり、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を使ってボタンのテキストをカスタマイズしたりすることもできます (確認ボタンにもこれらのフィールドがあります。) この例では "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性も使用しています。これはメソッドであり、MessageBoxインスタンスが閉じられるときにトリガされ、その実行によってインスタンスの閉じを停止します。このメソッドには3つのパラメータがあります。パラメータは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の3つです。これを使うことで、閉じる前にインスタンスを操作することができます。例えば、確認ボタンの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を有効にしたり、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メソッドを呼び出して MessageBox インスタンスを閉じたりすることができます ("), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 内で "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" が呼び出されなかった場合、インスタンスは閉じられません)。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Loading...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });\n      },\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, h } from 'vue';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox({\n        title: 'Message',\n        message: h('p', null, [\n          h('span', null, 'Message can be '),\n          h('i', { style: 'color: teal' }, 'VNode'),\n        ]),\n        showCancelButton: true,\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        beforeClose: (action, instance, done) => {\n          if (action === 'confirm') {\n            instance.confirmButtonLoading = true;\n            instance.confirmButtonText = 'Loading...';\n            setTimeout(() => {\n              done();\n              setTimeout(() => {\n                instance.confirmButtonLoading = false;\n              }, 300);\n            }, 3000);\n          } else {\n            done();\n          }\n        },\n      }).then((action) => {\n        ElMessage({\n          type: 'info',\n          message: `action: ${action}`,\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_21 = {
  class: "tip"
};

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("MessageBoxの内容は ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" にすることができ、カスタムコンポーネントを渡すことができます。MessageBoxを開くとき、Vueは新しい ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と古い ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を比較し、UIを効率的に更新する方法を考え出します。この場合、MessageBoxが開くたびに ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に一意のキーを追加することができます。");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("例");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("HTML文字列を使用する ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は HTML 文字列をサポートしています。")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を true に設定すると、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は HTML 文字列として扱われます。")])], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>proxy is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_37 = {
  class: "warning"
};

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("プロパティはHTML文字列をサポートしていますが、任意のHTMLを動的にレンダリングすると");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("XSS攻撃");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("につながりやすく、非常に危険です。したがって、");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("がオンの場合は、");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("の内容が信頼できるものであることを確認し、");

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "決して", -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ユーザが提供したコンテンツに");

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を代入しないようにしてください。");

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("キャンセルとクローズを区別する ");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "場合によっては、キャンセルボタンをクリックするのと閉じるボタンをクリックするのでは意味が異なる場合があります。", -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("デフォルトでは、ユーザがメッセージボックスをキャンセル(キャンセルボタンをクリック)して閉じる(閉じるボタンまたはマスクレイヤーをクリック、ESCキーを押す)と、Promiseのリジェクトコールバックと "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のパラメータは 'cancel' になります。distinguishCancelAndClose` が true に設定されている場合、上記の二つの操作のパラメータはそれぞれ 'cancel' と 'close' である。")])], -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route'\n            })\n          });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\nimport { ElMessageBox } from 'element-plus';\nimport { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const open = () => {\n        ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("中央に配置されたコンテンツ ");

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "メッセージボックスの内容を中央揃えにすることができます。", -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に設定すると、コンテンツを中央に配置します。")])], -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const open = () => {\n        ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Delete completed',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Delete canceled',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("グローバルメソッド ");

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Element Plusが完全にインポートされている場合、Vue.prototypeに以下のグローバルメソッドが追加されます。Vue.prototypeには、<code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code>, <code>$prompt</code> というグローバルメソッドが追加されます。そのため、Vueのインスタンスでは、このページで行ったように <code>MessageBox</code> を呼び出すことができます。パラメータは以下の通りです。</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> もしくは <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> もしくは <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> もしくは <code>$prompt(message, options)</code></li></ul>", 2);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ローカルインポート ");

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>オンデマンドで <code>MessageBox</code> をインポートしたい場合:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code><span class=\"lang-mark\">js</span></pre><p>対応するメソッドは以下の通り: 対応するメソッドは <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code>, <code>ElMessageBox.prompt</code> である。パラメータは上記と同じである。</p>", 3);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("オプション ");

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>メッセージボックスのタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>メッセージボックスの内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td><code>message</code> を HTML 文字列として扱うかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>アイコン表示に使用されるメッセージタイプ</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>カスタムアイコンのクラス、 <code>type</code> をオーバーライドします。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>メッセージボックスのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>Promise を好まない場合、メッセージボックス を閉じるコールバック</td><td>function(action), where action can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;, and <code>instance</code> is the MessageBox instance. You can access to that instance&#39;s attributes and methods</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>メッセージボックスのクローズアイコンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>コールバックは メッセージボックスコンポーネントを閉じる前に呼び出され、メッセージボックスコンポーネントが閉じるのを防ぎます。</td><td>function(action, instance, done), where <code>action</code> can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;; <code>instance</code> is the MessageBox instance, and you can access to that instance&#39;s attributes and methods; <code>done</code> is for closing the instance</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>メッセージボックスのキャンセルと終了を区別するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>メッセージボックスがプロンプトを出したときにボディスクロールをロックするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>キャンセルボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>false (true when called with confirm and prompt)</td></tr><tr><td>showConfirmButton</td><td>確認ボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>キャンセルボタンのテキスト内容</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>確認ボタンのテキスト内容</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>キャンセルボタンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>確認ボタンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>マスクをクリックしてメッセージボックスを閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnPressEscape</td><td>ESC を押してメッセージボックスを閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnHashChange</td><td>ハッシュが変更された場合にメッセージボックスを閉じるかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>インプットを表示するかどうか</td><td>boolean</td><td>—</td><td>false (true when called with prompt)</td></tr><tr><td>inputPlaceholder</td><td>インプットのプレースホルダー</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>インプットのタイプ</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>インプット初期値</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>インプットの正規表現</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>インプットの検証関数です。ブール値か文字列を返す必要があります。文字列が返された場合、それは inputErrorMessage に代入されます。</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>バリデーション失敗時のエラーメッセージ</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>コンテンツを中央に配置するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>丸いボタンを使うかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 1);

function message_boxvue_type_template_id_2b055dfe_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", message_boxvue_type_template_id_2b055dfe_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "metusezibotukusu",
    content: "メッセージボックス",
    href: "#metusezibotukusu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#metusezibotukusu"
      })];
    }),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "arato",
    content: "アラート",
    href: "#arato",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#arato"
      })];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "que-ren",
    content: "確認",
    href: "#que-ren",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#que-ren"
      })];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "puronputo",
    content: "プロンプト",
    href: "#puronputo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#puronputo"
      })];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "kasutamaizu",
    content: "カスタマイズ",
    href: "#kasutamaizu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#kasutamaizu"
      })];
    }),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_21, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://jsfiddle.net/zhiyang/ezmhq2ef"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_32])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "html-wen-zi-liewo-shi-yongsuru",
    content: "HTML文字列を使用する",
    href: "#html-wen-zi-liewo-shi-yongsuru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#html-wen-zi-liewo-shi-yongsuru"
      })];
    }),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_37, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_38, _hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "kiyanserutokurozuwo-qu-biesuru",
    content: "キャンセルとクローズを区別する",
    href: "#kiyanserutokurozuwo-qu-biesuru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#kiyanserutokurozuwo-qu-biesuru"
      })];
    }),
    _: 1
  }), _hoisted_51, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_52];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zhong-yangni-pei-zhisaretakontentu",
    content: "中央に配置されたコンテンツ",
    href: "#zhong-yangni-pei-zhisaretakontentu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_54, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zhong-yangni-pei-zhisaretakontentu"
      })];
    }),
    _: 1
  }), _hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_57];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_56];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "gurobarumesotudo",
    content: "グローバルメソッド",
    href: "#gurobarumesotudo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#gurobarumesotudo"
      })];
    }),
    _: 1
  }), _hoisted_59, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "rokaruinpoto",
    content: "ローカルインポート",
    href: "#rokaruinpoto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_61, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#rokaruinpoto"
      })];
    }),
    _: 1
  }), _hoisted_62, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "opusiyon",
    content: "オプション",
    href: "#opusiyon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_65, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#opusiyon"
      })];
    }),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/message-box.md?vue&type=template&id=2b055dfe

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/message-box.md?vue&type=script&lang=ts


/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this = this;

            this.$alert('This is a message', 'Title', {
              confirmButtonText: 'OK',
              callback: function callback(action) {
                _this.$message({
                  type: 'info',
                  message: "action: " + action
                });
              }
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this2 = this;

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(function () {
              _this2.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this2.$message({
                type: 'info',
                message: 'Delete canceled'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this3 = this;

            this.$prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            }).then(function (_ref) {
              var value = _ref.value;

              _this3.$message({
                type: 'success',
                message: 'Your email is:' + value
              });
            }).catch(function () {
              _this3.$message({
                type: 'info',
                message: 'Input canceled'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser_prod["t" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            var _this4 = this;

            this.$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: function beforeClose(action, instance, done) {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
                  setTimeout(function () {
                    done();
                    setTimeout(function () {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            }).then(function (action) {
              _this4.$message({
                type: 'info',
                message: 'action: ' + action
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
              dangerouslyUseHTMLString: true
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this5 = this;

            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Save',
              cancelButtonText: 'Discard Changes'
            }).then(function () {
              _this5.$message({
                type: 'info',
                message: 'Changes saved. Proceeding to a new route.'
              });
            }).catch(function (action) {
              _this5.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this6 = this;

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
              center: true
            }).then(function () {
              _this6.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this6.$message({
                type: 'info',
                message: 'Delete canceled'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_2b055dfe_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);