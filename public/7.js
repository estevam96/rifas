(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{16:function(t,a,n){var e=n(43);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(6)(e,s);e.locals&&(t.exports=e.locals)},20:function(t,a,n){var e=n(53);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(6)(e,s);e.locals&&(t.exports=e.locals)},25:function(t,a,n){"use strict";var e={props:["data"]},s=(n(42),n(1)),i=Object(s.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-card",{staticClass:"mb-1",attrs:{"bg-variant":"dark","img-src":t.data.image,"img-alt":t.data.id,"img-top":""}},[n("div",{staticClass:"bank-description"},[n("h6",{staticClass:"text-white"},[t._v(t._s(t.data.bank))]),t._v(" "),n("p",{staticClass:"text-white"},[t._v("Titular: "+t._s(t.data.holder))]),t._v(" "),n("p",{staticClass:"text-white"},[t._v("Agência: "+t._s(t.data.agency))]),t._v(" "),n("p",{staticClass:"text-white"},[t._v("Conta: "+t._s(t.data.account))]),t._v(" "),n("p",{staticClass:"text-white"},[t._v("Tipo: "+t._s(t.data.type))])])])}),[],!1,null,null,null);a.a=i.exports},42:function(t,a,n){"use strict";var e=n(16);n.n(e).a},43:function(t,a,n){(t.exports=n(5)(!1)).push([t.i,"\n.bank-description p {\n  font-size: 14px ;\n  line-height: 1;\n}\n",""])},52:function(t,a,n){"use strict";var e=n(20);n.n(e).a},53:function(t,a,n){(t.exports=n(5)(!1)).push([t.i,"\n.separator{\n  border-bottom: 1px solid #fff;\n}\n",""])},92:function(t,a,n){"use strict";n.r(a);var e={components:{"bank-card":n(25).a},data:function(){return{item:[{image:"https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",bank:"Nubank",holder:"Nome Do titular",agency:"123",account:"123459-9",type:" Conta Corrente"},{image:"https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",bank:"Nubank",holder:"Nome Do titular",agency:"123",account:"123459-9",type:" Conta Corrente"},{image:"https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",bank:"Nubank",holder:"Nome Do titular",agency:"123",account:"123459-9",type:" Conta Corrente"},{image:"https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",bank:"Nubank",holder:"Nome Do titular",agency:"123",account:"123459-9",type:" Conta Corrente"}]}}},s=(n(52),n(1)),i=Object(s.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container mt-4"},[a("h3",{staticClass:"text-uppercase text-white mb-4"},[this._v("Dados para pagamento via transferência")]),this._v(" "),a("h5",{staticClass:"text-white text-center"},[this._v("* Para realizar seu pagamento você deve efetivar transferência para uma de nossas contas.")]),this._v(" "),a("div",{staticClass:"separator mb-5"}),this._v(" "),a("b-row",{staticClass:"mb-5"},this._l(this.item,(function(t,n){return a("b-col",{key:"id -"+n,attrs:{md:"3"}},[a("bank-card",{attrs:{data:t}})],1)})),1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);