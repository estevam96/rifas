(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(4),s=a(11),l=a(0),o=a.n(l);function c(e,t,a,r,n,i,s){try{var l=e[i](s),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(r,n)}var f=a(19),d=f.required,u=(f.minValue,f.maxValue,f.withParams,new Date),m={data:function(){return{currentDate:new Date,raffle:{banner:null,title:"",tickets:200,price:void 0,draw_day:"",imagens:[]},file:null,modal:{title:"Cadastro de Rifa",loadingTitle:"",size:"lg",loading:!0,operating:!1,success:!1},editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{align:[]}],["clean"]]}}}},mixins:[s.validationMixin],validations:{raffle:{banner:{required:d},title:{required:d},tickets:{required:d,minValue:200,maxValue:1e3},price:{required:d},draw_day:{minDate:function(e){return e>=u.getTime()+864e5}}}},methods:{saveRaflle:function(){var e,t=this;return(e=n.a.mark((function e(){var a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$error){e.next=15;break}for(t.modal.operating=!0,(a=new FormData).append("title",t.raffle.title),a.append("tickets",t.raffle.tickets),a.append("price",t.raffle.price),a.append("description",t.raffle.description),a.append("draw_day",o()(t.raffle.draw_day).format("YYYY-MM-DD")),a.append("banner",t.raffle.banner),r=0;r<t.raffle.imagens.length;r++)s=t.raffle.imagens[r],a.append("imagens["+r+"]",s);return e.next=13,i.d.store(a).then((function(){t.isSuccess=!0,t.modal.operating=!1,t.$notify("success","Sucesso!","Rifa cadastrada",{duration:3e3,permanent:!1})})).catch((function(e){t.$notify("error","Error!","Não foi cadastra a rifa",{duration:3e3,permanent:!1})}));case 13:t.$emit("update"),t.close();case 15:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function s(e){c(i,r,n,s,l,"next",e)}function l(e){c(i,r,n,s,l,"throw",e)}s(void 0)}))})()},handleFilesUpload:function(){for(var e=this.$refs.imagens.files,t=0;t<e.length;t++)this.raffle.imagens.push(e[t])},removeFile:function(e){this.raffle.imagens.splice(e,1)},show:function(){this.$refs.registemodal.show()},close:function(){this.raffle={},this.file=null,this.$v.$reset(),this.$refs.registemodal.hide()}},computed:{imgPreview:function(){return this.raffle.banner?URL.createObjectURL(this.raffle.banner):null},imgsPreview:function(){this.raffle.imagens}}},p=a(3),v=Object(p.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"registemodal",staticClass:"p-2",attrs:{size:e.modal.size,scrollable:"","title-html":"<h4><b>"+e.modal.title+"</b></h4>","hide-footer":""}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.saveRaflle(t)}}},[a("b-row",[a("b-col",{attrs:{sm:"12"}},[null!=e.raffle.banner?a("div",[a("span",[e._v("Previsão do Banner:")]),e._v(" "),a("img",{staticStyle:{width:"100%",height:"20%"},attrs:{src:e.imgPreview,alt:"Previsão"}})]):e._e()]),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Título","label-size":"sm"}},[a("b-input",{attrs:{type:"text",name:"raffle.title",state:!e.$v.raffle.title.$error&&null,size:"sm"},model:{value:e.$v.raffle.title.$model,callback:function(t){e.$set(e.$v.raffle.title,"$model",t)},expression:"$v.raffle.title.$model"}}),e._v(" "),e.$v.raffle.title.required?e._e():a("b-form-invalid-feedback",[e._v("\n            Você deve informar o título para a rifa\n          ")])],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Numero de tickets","label-size":"sm"}},[a("b-input",{attrs:{type:"number",name:"raffle.tickets",state:!e.$v.raffle.tickets.$error&&null,min:"200",max:"1000",step:"1",size:"sm"},model:{value:e.$v.raffle.tickets.$model,callback:function(t){e.$set(e.$v.raffle.tickets,"$model",t)},expression:"$v.raffle.tickets.$model"}}),e._v(" "),e.$v.raffle.tickets.required?e._e():a("b-form-invalid-feedback",[e._v("\n            Você deve informar a quantidade de tickets\n          ")])],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Preço do ticket","label-size":"sm"}},[a("b-input",{attrs:{type:"number",name:"raffle.price",state:!e.$v.raffle.price.$error&&null,min:"0",max:"9999.99",step:"0.01",size:"sm"},model:{value:e.$v.raffle.price.$model,callback:function(t){e.$set(e.$v.raffle.price,"$model",t)},expression:"$v.raffle.price.$model"}}),e._v(" "),e.$v.raffle.price.required?e._e():a("b-form-invalid-feedback",[e._v("\n            Você deve informar o valor dos tickets\n          ")])],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Data do Sorteio","label-size":"sm"}},[a("vc-date-picker",{attrs:{mode:"single","min-date":e.currentDate.getTime()+864e5,"input-props":{class:"form-control"}},model:{value:e.$v.raffle.draw_day.$model,callback:function(t){e.$set(e.$v.raffle.draw_day,"$model",t)},expression:"$v.raffle.draw_day.$model"}}),e._v(" "),e.$v.raffle.draw_day.minDate?e._e():a("b-form-invalid-feedback",[e._v("\n            Você deve informar o valor dos tickets\n          ")])],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Banner",description:"Utilize imagem com 1365x404, para evitar distorção. formatos aceitos jpg, jpeg e png  ","label-size":"sm"}},[a("b-form-file",{ref:"banner",attrs:{state:!e.$v.raffle.banner.$error&&null,placeholder:"Escolha um arquivo ou solte-o aqui ...","drop-placeholder":"solte-o aqui...",type:"file",size:"sm",name:"banner",accept:"image/png, image/jpeg"},model:{value:e.$v.raffle.banner.$model,callback:function(t){e.$set(e.$v.raffle.banner,"$model",t)},expression:"$v.raffle.banner.$model"}}),e._v(" "),e.$v.raffle.banner.required?e._e():a("b-form-invalid-feedback",[e._v("\n            Você deve adicionar uma imagem como banner\n          ")])],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Imagens","label-size":"sm"}},[a("b-form-file",{ref:"imagens",attrs:{placeholder:"Escolha um arquivo ou solte-o aqui ...","drop-placeholder":"solte-o aqui...",type:"file",name:"imagens",multiple:"",size:"sm",accept:"image/png, image/jpeg",plain:""},model:{value:e.raffle.imagens,callback:function(t){e.$set(e.raffle,"imagens",t)},expression:"raffle.imagens"}})],1)],1),e._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"12"}},e._l(e.raffle.imagens,(function(t,r){return a("div",{key:"idx-"+r},[a("b-row",[a("b-col",{attrs:{md:"10"}},[a("p",[e._v(e._s(t.name))])]),e._v(" "),a("b-col",{attrs:{md:"2"}},[a("b-button",{attrs:{size:"sm"},on:{click:function(t){return e.removeFile(r)}}},[e._v("remover")])],1)],1)],1)})),0),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Descrição","label-size":"sm"}},[a("quill-editor",{attrs:{options:e.editorOption},model:{value:e.raffle.description,callback:function(t){e.$set(e.raffle,"description",t)},expression:"raffle.description"}})],1)],1)],1),e._v(" "),a("b-row",{staticClass:"d-flex justify-content-end"},[a("b-col",{staticClass:"d-flex justify-content-end",attrs:{sm:"6"}},[a("b-button",{staticClass:"mt-4 mr-2",attrs:{type:"button",squared:""},on:{click:e.close}},[a("b",[e._v("CANCELAR")])]),e._v(" "),a("b-button",{staticClass:"mt-4",class:{"show-success":!e.modal.operating&&e.modal.success},attrs:{type:"submit",variant:"primary",squared:""}},[e.modal.operating?a("b-spinner",{attrs:{variant:"light",small:""}}):a("b",[e._v("CADASTRAR")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,b=a(33);function g(e,t,a,r,n,i,s){try{var l=e[i](s),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(r,n)}var h={data:function(){return{id:-1,modal:{title:"Apagar rifa",loadingTitle:"",size:"md",loading:!1,operating:!1,success:!1}}},methods:{remove:function(){var e,t=this;return(e=n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.modal.operating=!0,e.next=3,i.d.delete(t.id).then((function(e){t.modal.operating=!1,t.$emit("update"),t.close()}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function s(e){g(i,r,n,s,l,"next",e)}function l(e){g(i,r,n,s,l,"throw",e)}s(void 0)}))})()},show:function(e){this.id=e,this.$refs.modal.show()},close:function(){this.$refs.modal.hide()}}},_=Object(p.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"modal",attrs:{centered:"",size:e.modal.size,"title-html":"<h4><b>"+e.modal.title+"</b></h4>","hide-footer":""}},[e._v("\n  Você tem certeza disso?\n  "),a("b-row",{staticClass:"d-flex justify-content-end"},[a("b-col",{staticClass:"d-flex justify-content-end"},[a("b-button",{staticClass:"mt-4 mr-2",attrs:{type:"button",squared:""},on:{click:e.close}},[a("b",[e._v("CANCELAR")])]),e._v(" "),a("b-button",{staticClass:"mt-4",class:{"show-success":!e.modal.operating&&e.modal.success},attrs:{type:"button",squared:"",variant:"primary"},on:{click:e.remove}},[e.modal.operating?a("b-spinner",{attrs:{variant:"light",small:""}}):a("b",[e._v("APAGAR")])],1)],1)],1)],1)}),[],!1,null,null,null).exports;function $(e,t,a,r,n,i,s){try{var l=e[i](s),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(r,n)}var w={components:{"registe-modal":v,"edit-modal":b.a,"delete-modal":_},data:function(){return{page:1,perPage:10,total:0,lastPage:0,isBusy:!1,fields:[{key:"title",label:"Titulo",sortable:!0},{key:"tickets",label:"Numero de tickets",sortable:!0},{key:"created_at",label:"Data de Cadastro",sortable:!0},{key:"draw_day",label:"Dia sorteio",sortable:!0},{key:"action",label:"Opções",sortable:!0}]}},methods:{fetchRaffle:function(e){var t,a=this;return(t=n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.isBusy=!0,r=[],t.next=4,i.d.list(e.currentPage,e.perPage).then((function(t){a.total=t.data.total,r=t.data.data,a.perPage=e.perPage,a.page=e.currentPage,a.lastPage=t.data.last_page})).catch((function(){r=[]}));case 4:return a.isBusy=!1,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function s(e){$(i,r,n,s,l,"next",e)}function l(e){$(i,r,n,s,l,"throw",e)}s(void 0)}))})()},remove:function(e){this.$refs.delete.show(e)},updateTable:function(){this.$refs.tableRaffle.refresh()}}},y=Object(p.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("edit-modal",{ref:"edit",on:{update:e.updateTable}}),e._v(" "),a("registe-modal",{ref:"registe",on:{update:e.updateTable}}),e._v(" "),a("delete-modal",{ref:"delete",on:{update:e.updateTable}}),e._v(" "),a("b-col",{attrs:{sm:"6"}},[a("h4",{staticClass:"text-uppercase"},[e._v("Rifas")])]),e._v(" "),a("b-col",{staticClass:"d-flex justify-content-end mb-2",attrs:{sm:"6"}},[a("b-button",{attrs:{variant:"info"},on:{click:function(t){return e.$refs.registe.show()}}},[a("b",[e._v("CADASTRA")])])],1),e._v(" "),a("b-col",{attrs:{xl:"12"}},[a("b-table",{ref:"tableRaffle",attrs:{responsive:"",items:e.fetchRaffle,fields:e.fields,hover:"","per-page":e.perPage,"current-page":e.page,"no-provider-sorting":"",small:"",fixed:"",striped:"",busy:e.isBusy,"empty-text":"Não há rifas para mostra","show-empty":""},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-success my-2"},[a("b-spinner",{staticClass:"align-middle"}),e._v(" "),a("strong",[e._v("Carregando...")])],1)]},proxy:!0},{key:"cell(created_at)",fn:function(t){return[e._v("\n        "+e._s(e._f("moment")(t.item.created_at,"DD/MM/YYYY HH:mm"))+"\n      ")]}},{key:"cell(draw_day)",fn:function(t){return[e._v("\n        "+e._s(e._f("moment")(t.item.draw_day,"DD/MM/YYYY"))+"\n      ")]}},{key:"cell(action)",fn:function(t){return[a("b-button",{attrs:{pill:"",to:"/draw/show/"+t.item.id,size:"sm"}},[a("font-awesome-icon",{attrs:{icon:["fa","eye"]}})],1),e._v(" "),a("b-button",{attrs:{pill:"",variant:"info",size:"sm"},on:{click:function(a){return e.$refs.edit.show(t.item.id)}}},[a("font-awesome-icon",{attrs:{icon:["fa","edit"]}})],1),e._v(" "),a("b-button",{attrs:{pill:"",variant:"danger",size:"sm"},on:{click:function(a){return e.$refs.delete.show(t.item.id)}}},[a("font-awesome-icon",{attrs:{icon:["fa","trash"]}})],1)]}}])})],1),e._v(" "),e.lastPage>1?a("b-col",{staticClass:"d-flex justify-content-center align-items-center",attrs:{xl:"12"}},[a("b-pagination",{attrs:{"total-rows":e.total,"per-page":e.perPage,align:"center"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()],1)}),[],!1,null,null,null);t.default=y.exports}}]);