(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{279:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(4),l=a(0),s=a.n(l);function o(e,t,a,r,n,i,l){try{var s=e[i](l),o=s.value}catch(e){return void a(e)}s.done?t(o):Promise.resolve(o).then(r,n)}var c={data:function(){return{raffle:{imagens:[]},file:null,modal:{title:"Cadastro de Rifa",loadingTitle:"",size:"lg",loading:!0,operating:!1,success:!1},editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{align:[]}],["clean"]]}}}},methods:{saveRaflle:function(){var e,t=this;return(e=n.a.mark((function e(){var a,r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.modal.operating=!0,(a=new FormData).append("title",t.raffle.title),a.append("tickets",t.raffle.tickets),a.append("price",t.raffle.price),a.append("description",t.raffle.description),a.append("draw_day",s()(t.raffle.draw_day).format("YYYY-MM-DD")),a.append("banner",t.file),r=0;r<t.raffle.imagens.length;r++)l=t.raffle.imagens[r],a.append("imagens["+r+"]",l);return e.next=11,i.d.store(a).then((function(){t.isSuccess=!0,t.modal.operating=!1}));case 11:t.$emit("update"),t.close();case 13:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function l(e){o(i,r,n,l,s,"next",e)}function s(e){o(i,r,n,l,s,"throw",e)}l(void 0)}))})()},handleFilesUpload:function(){for(var e=this.$refs.imagens.files,t=0;t<e.length;t++)this.raffle.imagens.push(e[t])},removeFile:function(e){this.raffle.imagens.splice(e,1)},show:function(){this.$refs.registemodal.show()},close:function(){this.raffle={},this.file=null,this.$refs.registemodal.hide()}},computed:{imgPreview:function(){return this.file?URL.createObjectURL(this.file):null},imgsPreview:function(){this.raffle.imagens}}},f=a(3),d=Object(f.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"registemodal",staticClass:"p-2",attrs:{size:e.modal.size,scrollable:"","title-html":"<h4><b>"+e.modal.title+"</b></h4>","hide-footer":""}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.saveRaflle(t)}}},[a("b-row",[a("b-col",{attrs:{sm:"12"}},[null!=e.file?a("div",[a("span",[e._v("Previsão do Banner:")]),e._v(" "),a("img",{staticStyle:{width:"100%",height:"20%"},attrs:{src:e.imgPreview,alt:"Previsão"}})]):e._e()]),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Titulo","label-size":"sm"}},[a("b-input",{attrs:{type:"text",name:"title",size:"sm"},model:{value:e.raffle.title,callback:function(t){e.$set(e.raffle,"title",t)},expression:"raffle.title"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Numero de tickets","label-size":"sm"}},[a("b-input",{attrs:{type:"number",name:"tickets",min:"200",max:"1000",step:"1",size:"sm"},model:{value:e.raffle.tickets,callback:function(t){e.$set(e.raffle,"tickets",t)},expression:"raffle.tickets"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Preço do ticket","label-size":"sm"}},[a("b-input",{attrs:{type:"number",name:"price",min:"0",max:"9999.99",step:"0.01",size:"sm"},model:{value:e.raffle.price,callback:function(t){e.$set(e.raffle,"price",t)},expression:"raffle.price"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Data do Sorteio","label-size":"sm"}},[a("vc-date-picker",{attrs:{mode:"single","min-date":new Date,"input-props":{class:"form-control"}},model:{value:e.raffle.draw_day,callback:function(t){e.$set(e.raffle,"draw_day",t)},expression:"raffle.draw_day"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Banner",description:"utilize imagem com 1365x404, para evitar distorção  ","label-size":"sm"}},[a("b-form-file",{ref:"banner",attrs:{placeholder:"Escolha um arquivo ou solte-o aqui ...","drop-placeholder":"solte-o aqui...",type:"file",size:"sm",name:"banner",accept:"image/png, image/jpeg"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Imagens","label-size":"sm"}},[a("b-form-file",{ref:"imagens",attrs:{placeholder:"Escolha um arquivo ou solte-o aqui ...","drop-placeholder":"solte-o aqui...",type:"file",name:"imagens",multiple:"",size:"sm",accept:"image/png, image/jpeg",plain:""},model:{value:e.raffle.imagens,callback:function(t){e.$set(e.raffle,"imagens",t)},expression:"raffle.imagens"}})],1)],1),e._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"12"}},e._l(e.raffle.imagens,(function(t,r){return a("div",{key:"idx-"+r},[a("b-row",[a("b-col",{attrs:{md:"10"}},[a("p",[e._v(e._s(t.name))])]),e._v(" "),a("b-col",{attrs:{md:"2"}},[a("b-button",{attrs:{size:"sm"},on:{click:function(t){return e.removeFile(r)}}},[e._v("remover")])],1)],1)],1)})),0),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Descrição","label-size":"sm"}},[a("quill-editor",{attrs:{options:e.editorOption},model:{value:e.raffle.description,callback:function(t){e.$set(e.raffle,"description",t)},expression:"raffle.description"}})],1)],1)],1),e._v(" "),a("b-row",{staticClass:"d-flex justify-content-end"},[a("b-col",{staticClass:"d-flex justify-content-end",attrs:{sm:"6"}},[a("b-button",{staticClass:"mt-4 mr-2",attrs:{type:"button",squared:""},on:{click:e.close}},[a("b",[e._v("CANCELAR")])]),e._v(" "),a("b-button",{staticClass:"mt-4",class:{"show-success":!e.modal.operating&&e.modal.success},attrs:{type:"submit",variant:"primary",squared:""}},[e.modal.operating?a("b-spinner",{attrs:{variant:"light",small:""}}):a("b",[e._v("CADASTRAR")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,u=a(28);function m(e,t,a,r,n,i,l){try{var s=e[i](l),o=s.value}catch(e){return void a(e)}s.done?t(o):Promise.resolve(o).then(r,n)}var p={data:function(){return{id:-1,modal:{title:"Apagar rifa",loadingTitle:"",size:"md",loading:!1,operating:!1,success:!1}}},methods:{remove:function(){var e,t=this;return(e=n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.modal.operating=!0,e.next=3,i.d.delete(t.id).then((function(e){t.modal.operating=!1,t.$emit("update"),t.close()}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function l(e){m(i,r,n,l,s,"next",e)}function s(e){m(i,r,n,l,s,"throw",e)}l(void 0)}))})()},show:function(e){this.id=e,this.$refs.modal.show()},close:function(){this.$refs.modal.hide()}}},b=Object(f.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"modal",attrs:{centered:"",size:e.modal.size,"title-html":"<h4><b>"+e.modal.title+"</b></h4>","hide-footer":""}},[e._v("\n  Você tem certeza disso?\n  "),a("b-row",{staticClass:"d-flex justify-content-end"},[a("b-col",{staticClass:"d-flex justify-content-end"},[a("b-button",{staticClass:"mt-4 mr-2",attrs:{type:"button",squared:""},on:{click:e.close}},[a("b",[e._v("CANCELAR")])]),e._v(" "),a("b-button",{staticClass:"mt-4",class:{"show-success":!e.modal.operating&&e.modal.success},attrs:{type:"button",squared:"",variant:"primary"},on:{click:e.remove}},[e.modal.operating?a("b-spinner",{attrs:{variant:"light",small:""}}):a("b",[e._v("APAGAR")])],1)],1)],1)],1)}),[],!1,null,null,null).exports;function v(e,t,a,r,n,i,l){try{var s=e[i](l),o=s.value}catch(e){return void a(e)}s.done?t(o):Promise.resolve(o).then(r,n)}var h={components:{"registe-modal":d,"edit-modal":u.a,"delete-modal":b},data:function(){return{page:1,perPage:10,total:0,lastPage:0,isBusy:!1,fields:[{key:"title",label:"Titulo",sortable:!0},{key:"tickets",label:"Numero de tickets",sortable:!0},{key:"created_at",label:"Data de Cadastro",sortable:!0},{key:"draw_day",label:"Dia sorteio",sortable:!0},{key:"action",label:"Opções",sortable:!0}]}},methods:{fetchRaffle:function(e){var t,a=this;return(t=n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.isBusy=!0,r=[],t.next=4,i.d.list(e.currentPage,e.perPage).then((function(t){a.total=t.data.total,r=t.data.data,a.perPage=e.perPage,a.page=e.currentPage,a.lastPage=t.data.last_page})).catch((function(){r=[]}));case 4:return a.isBusy=!1,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function l(e){v(i,r,n,l,s,"next",e)}function s(e){v(i,r,n,l,s,"throw",e)}l(void 0)}))})()},remove:function(e){this.$refs.delete.show(e)},updateTable:function(){this.$refs.tableRaffle.refresh()}}},g=Object(f.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("edit-modal",{ref:"edit",on:{update:e.updateTable}}),e._v(" "),a("registe-modal",{ref:"registe",on:{update:e.updateTable}}),e._v(" "),a("delete-modal",{ref:"delete",on:{update:e.updateTable}}),e._v(" "),a("b-col",{attrs:{sm:"6"}},[a("h4",{staticClass:"text-uppercase"},[e._v("Rifas")])]),e._v(" "),a("b-col",{staticClass:"d-flex justify-content-end mb-2",attrs:{sm:"6"}},[a("b-button",{attrs:{variant:"info"},on:{click:function(t){return e.$refs.registe.show()}}},[a("b",[e._v("CADASTRA")])])],1),e._v(" "),a("b-col",{attrs:{xl:"12"}},[a("b-table",{ref:"tableRaffle",attrs:{responsive:"",items:e.fetchRaffle,fields:e.fields,hover:"","per-page":e.perPage,"current-page":e.page,"no-provider-sorting":"",small:"",fixed:"",striped:"",busy:e.isBusy,"empty-text":"Não há rifas para mostra","show-empty":""},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-success my-2"},[a("b-spinner",{staticClass:"align-middle"}),e._v(" "),a("strong",[e._v("Carregando...")])],1)]},proxy:!0},{key:"cell(created_at)",fn:function(t){return[e._v("\n        "+e._s(e._f("moment")(t.item.created_at,"DD/MM/YYYY HH:mm"))+"\n      ")]}},{key:"cell(draw_day)",fn:function(t){return[e._v("\n        "+e._s(e._f("moment")(t.item.draw_day,"DD/MM/YYYY"))+"\n      ")]}},{key:"cell(action)",fn:function(t){return[a("b-button",{attrs:{pill:"",to:"/draw/show/"+t.item.id,size:"sm"}},[a("font-awesome-icon",{attrs:{icon:["fa","eye"]}})],1),e._v(" "),a("b-button",{attrs:{pill:"",variant:"info",size:"sm"},on:{click:function(a){return e.$refs.edit.show(t.item.id)}}},[a("font-awesome-icon",{attrs:{icon:["fa","edit"]}})],1),e._v(" "),a("b-button",{attrs:{pill:"",variant:"danger",size:"sm"},on:{click:function(a){return e.$refs.delete.show(t.item.id)}}},[a("font-awesome-icon",{attrs:{icon:["fa","trash"]}})],1)]}}])})],1),e._v(" "),e.lastPage>1?a("b-col",{staticClass:"d-flex justify-content-center align-items-center",attrs:{xl:"12"}},[a("b-pagination",{attrs:{"total-rows":e.total,"per-page":e.perPage,align:"center"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()],1)}),[],!1,null,null,null);t.default=g.exports},28:function(e,t,a){"use strict";var r=a(1),n=a.n(r),i=a(4),l=a(0),s=a.n(l);function o(e,t,a,r,n,i,l){try{var s=e[i](l),o=s.value}catch(e){return void a(e)}s.done?t(o):Promise.resolve(o).then(r,n)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function l(e){o(i,r,n,l,s,"next",e)}function s(e){o(i,r,n,l,s,"throw",e)}l(void 0)}))}}var f={data:function(){return{id:-1,raffle:{title:"",tickets:"",price:"",description:"",draw_day:"",banner:"",winner:"",winning_ticket:""},ondlRiffle:{},file:null,modal:{title:"Editar Rifa",loadingTitle:"",size:"lg",loading:!0,operating:!1,success:!1},editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{align:[]}],["clean"]]}}}},methods:{fetchRaffle:function(e){var t=this;return c(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.d.show(e).then((function(e){var a=e.data;Object.assign(t.raffle,{title:a.title,tickets:Number(a.tickets),price:Number(a.price),description:a.description,draw_day:new Date(a.draw_day.replace("-","/")),banner:a.url_banner}),t.ondlRiffle.draw_day=s()(t.raffle.draw_day).format("YYYY-MM-DD"),t.ondlRiffle.winner=a.winner,t.modal.loading=!1}));case 2:case"end":return a.stop()}}),a)})))()},saveRaflle:function(){var e=this;return c(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new FormData,e.modal.operating=!0,a.append("title",e.raffle.title),a.append("tickets",e.raffle.tickets),a.append("price",e.raffle.price),a.append("description",e.raffle.description),a.append("winner",e.raffle.winner),a.append("winning_ticket",e.raffle.winning_ticket),e.ondlRiffle.draw_day!==s()(e.raffle.draw_day).format("YYYY-MM-DD")&&a.append("draw_day",s()(e.raffle.draw_day).format("YYYY-MM-DD")),"string"!=typeof e.raffle.banner&&a.append("banner",e.file),a.append("_method","PUT"),e.ondlRiffle.winner!==e.raffle.winner&&a.append("status","concluded"),t.next=14,i.d.update(e.id,a).then((function(){e.isSuccess=!0,e.modal.operating=!1}));case 14:e.$emit("update"),e.raffle={},e.close();case 17:case"end":return t.stop()}}),t)})))()},handleFileUpload:function(){this.file=this.$refs.banner.files[0]},show:function(e){this.id=e,this.modal.loading=!0,this.fetchRaffle(e),this.$refs.editmodal.show()},close:function(){this.raffle={},this.file=null,this.$refs.editmodal.hide()}},computed:{imgPreview:function(){return this.file?URL.createObjectURL(this.file):null}}},d=a(3),u=Object(d.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"editmodal",staticClass:"p-2",attrs:{size:e.modal.size,scrollable:"","title-html":"<h1><b>"+e.modal.title+"</b></h1>","hide-footer":""}},[e.modal.loading?a("b-row",{staticClass:"d-flex justify-content-center"},[a("b-spinner",{attrs:{size:"md",variant:"primary"}}),e._v(" "+e._s(e.modal.loadingTitle)+"\n  ")],1):e._e(),e._v(" "),e.modal.loading||-1==e.id?e._e():a("b-form",{on:{submit:function(t){return t.preventDefault(),e.saveRaflle(t)}}},[a("b-row",[a("b-col",{attrs:{sm:"12"}},[null!=e.raffle.banner?a("div",[a("span",[e._v("Previsão do Banner:")]),e._v(" "),a("b-img",{staticStyle:{width:"100%",height:"337px"},attrs:{src:e.imgPreview||e.raffle.banner,fluid:"",alt:"Previsão"}})],1):e._e()]),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Banner",description:"utilize imagem com 1365x404, para evitar distorção  "}},[a("b-form-file",{ref:"banner",attrs:{name:"banner",placeholder:"Escolha um arquivo ou solte-o aqui ...","drop-placeholder":"olte-o aqui...",type:"file"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Titulo"}},[a("b-form-input",{attrs:{name:"title",type:"text"},model:{value:e.raffle.title,callback:function(t){e.$set(e.raffle,"title",t)},expression:"raffle.title"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Numero de tickets"}},[a("b-form-input",{attrs:{name:"ticket",type:"number",min:"100",max:"1000",step:"1"},model:{value:e.raffle.tickets,callback:function(t){e.$set(e.raffle,"tickets",t)},expression:"raffle.tickets"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Preço do ticket"}},[a("b-form-input",{attrs:{name:"price",type:"number",min:"0",max:"9999.99",step:"0.01"},model:{value:e.raffle.price,callback:function(t){e.$set(e.raffle,"price",t)},expression:"raffle.price"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Ticket vencendor"}},[a("b-form-input",{attrs:{name:"winnerTicket",type:"number",min:"0",max:"1000",step:"1"},model:{value:e.raffle.winning_ticket,callback:function(t){e.$set(e.raffle,"winning_ticket",t)},expression:"raffle.winning_ticket"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Nome do ganhador"}},[a("b-form-input",{attrs:{name:"winner",type:"text"},model:{value:e.raffle.winner,callback:function(t){e.$set(e.raffle,"winner",t)},expression:"raffle.winner"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Data do Sorteio"}},[a("vc-date-picker",{attrs:{mode:"single","min-date":new Date,"input-props":{class:"form-control"}},model:{value:e.raffle.draw_day,callback:function(t){e.$set(e.raffle,"draw_day",t)},expression:"raffle.draw_day"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Descrição"}},[a("quill-editor",{attrs:{value:e.raffle.description,options:e.editorOption},model:{value:e.raffle.description,callback:function(t){e.$set(e.raffle,"description",t)},expression:"raffle.description"}})],1)],1)],1),e._v(" "),a("b-row",{staticClass:"d-flex justify-content-end"},[a("b-col",{staticClass:"d-flex justify-content-end",attrs:{sm:"6"}},[a("b-button",{staticClass:"mt-4 mr-2",attrs:{type:"button",squared:""},on:{click:e.close}},[a("b",[e._v("CANCELAR")])]),e._v(" "),a("b-button",{staticClass:"mt-4",class:{"show-success":!e.modal.operating&&e.modal.success},attrs:{type:"submit",variant:"primary",squared:""}},[e.modal.operating?a("b-spinner",{attrs:{variant:"light",small:""}}):a("b",[e._v("CADASTRAR")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.a=u.exports}}]);