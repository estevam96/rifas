(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(t,e,n){"use strict";var a=n(24);n.n(a).a},219:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"\n.content-raffle {\n  min-height: 40vh;\n}\n.customCarousel {\n  height: auto;\n}\n.bannerBackground {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.banner {\n  height: 60vh;\n}\n@media only screen and (max-width: 600px) {\n.banner {\n    height: 23vh;\n}\n}\n.num {\n  color: white;\n  font-size: x-large;\n  font-weight: bold;\n}\n.number {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.instruction {\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n.instruction p {\n  text-align: justify;\n  font-size: 15px;\n}\n",""])},24:function(t,e,n){var a=n(219);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,s);a.locals&&(t.exports=a.locals)},283:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),o=n(14),i=n(16),r=(n(216),n(31)),c=n(4);function l(t,e,n,a,s,o,i){try{var r=t[o](i),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(a,s)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,s){var o=t.apply(e,n);function i(t){l(o,a,s,i,r,"next",t)}function r(t){l(o,a,s,i,r,"throw",t)}i(void 0)}))}}var u={components:{"vue-glide":o.Glide,"vue-glide-slide":o.GlideSlide,instruction:r.a,Hooper:i.a,Slide:i.d,HooperPagination:i.c,HooperNavigation:i.b},data:function(){return{slide:0,sliding:null,options:{gap:5,perView:3,type:"carousel",autoplay:3e3,breakpoints:{600:{perView:1},1400:{perView:3}}},lastRaffles:[],recentRaffles:[]}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},fetchLastRaffle:function(){var t=this;return d(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.last().then((function(e){t.lastRaffles=e.data}));case 2:case"end":return e.stop()}}),e)})))()},fetchRecentRaffle:function(){var t=this;return d(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.recent().then((function(e){t.recentRaffles=e.data}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchRecentRaffle(),this.fetchLastRaffle()}},f=(n(218),n(3)),v=Object(f.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("hooper",{staticClass:"customCarousel",attrs:{infiniteScroll:!0,mouseDrag:!1}},[t._l(t.recentRaffles,(function(e,a){return n("slide",{key:"id-"+a,attrs:{index:a}},[n("div",{staticClass:"bannerBackground",style:"background-image: url("+e.url_banner+")"},[n("div",{staticClass:"banner container "},[n("b-row",{staticClass:"h-100 d-flex align-items-center"},[n("b-col",{attrs:{cols:"6"}},[n("h3",{staticClass:"text-white text-uppercase",staticStyle:{"font-size":"5vw"}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("b-button",{attrs:{variant:"outline-light",to:"/draw/show/"+e.id}},[n("b",{staticClass:"text-uppercase"},[t._v("\n                    comprar rifa\n                  ")])])],1)],1)],1)])])})),t._v(" "),n("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t._v(" "),n("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1),t._v(" "),n("div",{staticClass:"container mt-1"},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("router-link",{staticClass:"btn btn-block",attrs:{to:"#"}},[n("font-awesome-icon",{style:{color:"#ffc107"},attrs:{icon:["fab","whatsapp"],size:"2x"}}),t._v(" "),n("p",{staticStyle:{color:"#ffc107"}},[t._v("\n            Envio de Comprovantes\n          ")])],1)],1),t._v(" "),n("b-col",{attrs:{md:"6"}},[n("router-link",{staticClass:"btn btn-block",attrs:{to:"#"}},[n("font-awesome-icon",{style:{color:"#28a745"},attrs:{icon:["fab","whatsapp"],size:"2x"}}),t._v(" "),n("p",{staticStyle:{color:"#28a745"}},[t._v("Duvidas: Entre para o grupo")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"container content-raffle mt-3"},[t.lastRaffles.length>0?n("div",{staticClass:"mt-4 mb-2"},[n("h4",[t._v("PROXIMOS SORTEIOS")])]):t._e(),t._v(" "),t.lastRaffles.length>0?n("b-row",t._l(t.lastRaffles,(function(e,a){return n("b-col",{key:"id-"+a,staticClass:"d-flex justify-content-center",attrs:{md:"4"}},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":e.url_banner,title:e.title,"img-alt":e.title,"img-top":"","border-variant":"secondary","title-tag":"h4"}},[n("b-card-text",[t._v("\n            Sorteio "+t._s(t._f("moment")(e.draw_day,"dddd, D MMMM  YYYY"))+"\n          ")]),t._v(" "),n("router-link",{staticClass:"btn btn-success btn-block rounded-pill",attrs:{to:"/draw/show/"+e.id}},[n("b",[t._v("COMPRAR RIFA")]),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","check"]}})],1)],1)],1)})),1):t._e()],1),t._v(" "),n("instruction")],1)}),[],!1,null,null,null);e.default=v.exports},31:function(t,e,n){"use strict";var a={},s=n(3),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary pt-5 pb-3"},[n("div",{staticClass:"container"},[n("b-row",[n("b-col",{attrs:{md:"3"}},[n("h5",{staticClass:"text-white mb-2"},[t._v("1º  ESCOLHA O SORTEIO")]),t._v(" "),n("div",{staticClass:"text-white-50"},[n("p",[t._v("Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos em caso de dúvidas entre em contato com o administrado")])])]),t._v(" "),n("b-col",{attrs:{md:"3"}},[n("h5",{staticClass:"text-white mb-2"},[t._v("2º  SELECIONE SEUS NÚMEROS")]),t._v(" "),n("div",{staticClass:"text-white-50"},[n("p",[t._v("Você pode escolher quantos números desejar! Mais números, mais chances de ganhar")])])]),t._v(" "),n("b-col",{attrs:{md:"3"}},[n("h5",{staticClass:"text-white mb-2"},[t._v("3º  FAÇA O PAGAMENTO")]),t._v(" "),n("div",{staticClass:"text-white-50"},[n("p",[t._v("Faça o pagamento em umas das contas exibidas. Envie o comprovante ao administrador via whatsapp.")])])]),t._v(" "),n("b-col",{attrs:{md:"3"}},[n("h5",{staticClass:"text-white mb-2"},[t._v("4º  AGUARDE O SORTEIO")]),t._v(" "),n("div",{staticClass:"text-white-50"},[n("p",[t._v("Aguarde o sorteio pela Loteria Federal Cruze os dedos Você pode ser o próximo sorteado")])])])],1)],1)])}),[],!1,null,null,null);e.a=o.exports}}]);