(function(t){function s(s){for(var e,i,c=s[0],r=s[1],d=s[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);l&&l(s);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,s=0;s<o.length;s++){for(var a=o[s],e=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(e=!1)}e&&(o.splice(s--,1),t=i(i.s=a[0]))}return t}var e={},n={app:0},o=[];function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,s,a){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)i.d(a,e,function(s){return t[s]}.bind(null,e));return a},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var d=0;d<c.length;d++)s(c[d]);var l=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"00e2":function(t,s,a){},"096a":function(t,s,a){"use strict";a("f815")},"26a2":function(t,s,a){},4678:function(t,s,a){var e={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var s=o(t);return a(s)}function o(t){if(!a.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=o,t.exports=n,n.id="4678"},"506a":function(t,s,a){"use strict";a("a23c")},"527a":function(t,s,a){"use strict";a("6971")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Drawer")],1)},o=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-container"},[e("md-app",[e("md-app-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"2"}},[t.menuVisible?t._e():e("md-button",{staticClass:"md-icon-button",on:{click:t.toggleMenu}},[e("md-icon",[t._v("menu")])],1),e("span",{staticClass:"md-title",attrs:{id:"title"}},[e("img",{staticClass:"img",attrs:{src:a("8803")}}),t._v(" Pack Tarefas")])],1),e("md-app-drawer",{attrs:{"md-active":t.menuVisible,"md-persistent":"mini"},on:{"update:mdActive":function(s){t.menuVisible=s},"update:md-active":function(s){t.menuVisible=s}}},[e("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[e("md-icon",[t._v("menu_open")]),e("span",{staticClass:"md-headline"},[t._v("Menu")]),e("div",{staticClass:"md-toolbar-section-end"},[e("md-button",{staticClass:"md-icon-button md-dense",on:{click:t.toggleMenu}},[e("md-icon",[t._v("keyboard_arrow_left")])],1)],1)],1),e("md-list",[e("router-link",{attrs:{to:"/"}},[e("md-list-item",{staticClass:"link"},[e("md-icon",[t._v("wysiwyg")]),e("span",{staticClass:"md-list-item-text"},[t._v("Todas Tarefas")])],1)],1),e("router-link",{attrs:{to:"/tarefas"}},[e("md-list-item",{staticClass:"link"},[e("md-icon",[t._v("how_to_reg")]),e("span",{staticClass:"md-list-item-text"},[t._v("Minhas Tarefas")])],1)],1),e("md-list-item",{staticClass:"link"},[e("md-icon",[t._v("settings")]),e("span",{staticClass:"md-list-item-text"},[t._v("Configuração")])],1),e("md-list-item",{staticClass:"link"},[e("md-icon",[t._v("error")]),e("span",{staticClass:"md-list-item-text"},[t._v("Ajuda")])],1),e("md-list-item",{staticClass:"link"},[e("md-icon",[t._v("exit_to_app")]),e("span",{staticClass:"md-list-item-text"},[t._v("Sair")])],1)],1)],1),e("md-app-content",[e("router-view")],1)],1)],1)},c=[],r={name:"PersistentMini",data:function(){return{menuVisible:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible}}},d=r,l=(a("eb1c"),a("2877")),u=Object(l["a"])(d,i,c,!1,null,"149cb50c",null),m=u.exports,f={components:{Drawer:m}},b=f,p=(a("5c0b"),Object(l["a"])(b,n,o,!1,null,null,null)),h=p.exports,v=a("43f9"),k=a.n(v),j=(a("51de"),a("944d"),a("8c4f")),_=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-container"},[t.render?a("md-progress-spinner",{attrs:{"md-diameter":400,"md-stroke":90,"md-mode":"indeterminate"}}):a("md-app",[a("md-app-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[this.loading?a("md-progress-spinner",{attrs:{"md-diameter":40,"md-stroke":10,"md-mode":"indeterminate"}}):a("span",{staticClass:"md-display-2"},[t._v(" "+t._s(this.userTasksPending)+" ")]),t._v(" "),a("br"),a("span",{staticClass:"md-headline"},[t._v("Tarefas pedentes")])],1),a("div",{staticClass:"md-layout-item"},[this.loading?a("md-progress-spinner",{attrs:{"md-diameter":40,"md-stroke":10,"md-mode":"indeterminate"}}):a("span",{staticClass:"md-display-2"},[t._v(" "+t._s(this.userIncludeTasks)+" ")]),t._v(" "),a("br"),a("span",{staticClass:"md-headline"},[t._v("Tarefas que faço parte")])],1),a("div",{staticClass:"md-layout-item"},[this.loading?a("md-progress-spinner",{attrs:{"md-diameter":40,"md-stroke":10,"md-mode":"indeterminate"}}):a("span",{staticClass:"md-display-2"},[t._v(" "+t._s(this.userTasksRequester)+" ")]),t._v(" "),a("br"),a("span",{staticClass:"md-headline"},[t._v("Tarefas que solicitei")])],1)])])],1),a("div",{staticClass:"btn-task"},[a("NewTasks",{attrs:{reload:t.searchAllTasks}})],1),a("div",{staticClass:"md-layout"},[a("TableTasks",{attrs:{tasks:this.tasks.te}}),a("div",{staticClass:"chart"},[a("div",{staticClass:"md-headline title-chart"},[t._v(" Resumo por status "),a("md-icon",[t._v("add_task")])],1),a("ChartContainer",{staticClass:"chat-component",attrs:{tasks:this.tasks}})],1)],1)],1)},g=[],C=(a("d81d"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[t.loading?a("md-progress-spinner",{attrs:{"md-diameter":400,"md-stroke":90,"md-mode":"indeterminate"}}):a("md-table",{attrs:{"md-sort":"name","md-sort-order":"asc","md-card":"","md-fixed-header":""},scopedSlots:t._u([{key:"md-table-row",fn:function(s){var e=s.item;return a("md-table-row",{},[a("md-table-cell",{attrs:{"md-label":"Usuário","md-sort-by":"usuario"}},[a("md-avatar",[a("img",{attrs:{src:e.photo}})])],1),a("md-table-cell",{staticClass:"left",attrs:{"md-label":"Nome","md-sort-by":"name"}},[a("span",{staticClass:"md-body-2"},[t._v(" "+t._s(e.name)+" ")])]),a("md-table-cell",{staticClass:"left",attrs:{"md-label":"Ocorrência","md-sort-by":"ocorrencia"}},[a("span",{staticClass:"md-body-2 text-bold"},[t._v(" "+t._s(e.task)+" ")]),a("br"),a("span",{staticClass:"md-caption"},[a("p",[t._v(" Solicitante: "+t._s(e.requester)+" ")])])]),a("md-table-cell",{attrs:{"md-label":"Prazo","md-sort-by":"prazo"}},[a("span",{staticClass:"md-body-2"},[t._v(" "+t._s(e.term.split("-").reverse().join("/"))+" ")])]),a("md-table-cell",{staticClass:"left",attrs:{"md-label":"Status","md-sort-by":"status"}},[a("span",{staticClass:"md-body-2"},[t._v(" "+t._s(e.status)+" ")])])],1)}}]),model:{value:t.searched,callback:function(s){t.searched=s},expression:"searched"}},[a("md-table-toolbar",[a("div",{staticClass:"md-toolbar-section-start"},[a("span",{staticClass:"md-headline"},[t._v("Tarefas")])]),a("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[a("md-input",{attrs:{placeholder:"Procurar por tarefa"},on:{input:t.searchOnTable},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}})],1)],1),a("md-table-empty-state",{attrs:{"md-label":"Tarefa não encontrada","md-description":"Nenhuma tarefa encontrada com o termo '"+t.search+"'. Tente novamente ou crie um nova tarefa"}},[a("NewTasks")],1)],1)],1)}),y=[],T=(a("4de4"),a("caad"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("841c"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(s){t.showDialog=s},"update:md-active":function(s){t.showDialog=s}}},[a("md-dialog-title",[t._v("Nova tarefa")]),a("md-tabs",{attrs:{"md-dynamic-height":""}},[a("md-tab",{attrs:{"md-label":"Cadastro"}},[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",[a("label",{attrs:{for:"task-name"}},[t._v("Nome da tarefa")]),a("md-input",{attrs:{name:"task-name",id:"task-name",autocomplete:"given-name",disabled:t.sending},model:{value:t.task,callback:function(s){t.task=s},expression:"task"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",[a("label",{attrs:{for:"movie"}},[t._v("Usuarios")]),a("md-select",{model:{value:t.requester,callback:function(s){t.requester=s},expression:"requester"}},t._l(t.users,(function(s){return a("md-option",{key:s.id_user,attrs:{value:s.id_user}},[t._v(t._s(s.name))])})),1)],1)],1)]),a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",[a("label",{attrs:{for:"movie"}},[t._v("Tipo")]),a("md-select",{attrs:{name:"movie",id:"movie"},model:{value:t.type,callback:function(s){t.type=s},expression:"type"}},[a("md-option",{attrs:{value:"Relatório"}},[t._v("Relatório")]),a("md-option",{attrs:{value:"Interno"}},[t._v("Interno")]),a("md-option",{attrs:{value:"Externo"}},[t._v("Externo")]),a("md-option",{attrs:{value:"Emergencial"}},[t._v("Emergencial")]),a("md-option",{attrs:{value:"Financeiro"}},[t._v("Financeiro")])],1)],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-datepicker",{model:{value:t.term,callback:function(s){t.term=s},expression:"term"}})],1),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",[a("label",{attrs:{for:"movie"}},[t._v("Status")]),a("md-select",{attrs:{name:"movie",id:"movie"},model:{value:t.status,callback:function(s){t.status=s},expression:"status"}},[a("md-option",{attrs:{value:"Pendente"}},[t._v("Pendente")]),a("md-option",{attrs:{value:"Em andamento"}},[t._v("Em andamento")]),a("md-option",{attrs:{value:"Concluido"}},[t._v("Concluido")])],1)],1)],1)])])],1),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(s){return t.handleClose()}}},[t._v("Cancelar")]),a("md-button",{staticClass:"md-primary",on:{click:t.handleSaveTask}},[t._v("Salvar")])],1)],1),a("button",{staticClass:"btn-task",on:{click:function(s){t.showDialog=!0}}},[t._v(" Nova tarefa "),a("md-icon",[t._v("add_task")])],1),a("md-dialog-alert",{attrs:{"md-active":t.second,"md-title":"Concludo","md-content":"Tarefa cadastrada com sucesso"},on:{"update:mdActive":function(s){t.second=s},"update:md-active":function(s){t.second=s}}})],1)}),w=[],x=a("bc3a"),O=a.n(x),P={name:"DialogCustom",data:function(){return{showDialog:!1,users:[],task:"",requester:"",type:"",term:"",status:"",second:!1}},methods:{handleClose:function(){this.showDialog=!1,this.$router.go(0)},handleSaveTask:function(){var t=this,s={user:this.requester,task:this.task,type:this.type,term:this.term,status:this.status,requester:"Gabriel Carreiro"};O.a.post("".concat("http://localhost:3333","/tasks"),s).then((function(s){console.log(s,"success"),t.second=!0,t.task="",t.requester="",t.type="",t.term="",t.status="",t.reload()})).catch((function(t){console.log(t)}))}},props:{reload:Function},created:function(){var t=this;O.a.get("".concat("http://localhost:3333","/users")).then((function(s){t.users=s.data})).catch((function(t){console.log(t)}))}},z=P,U=(a("527a"),Object(l["a"])(z,T,w,!1,null,"3eb1c73a",null)),E=U.exports,S=function(t){return t.toString().toLowerCase()},A=function(t,s){return s?t.filter((function(t){return S(t.task).includes(S(s))})):t},D={name:"TableSearch",data:function(){return{search:null,searched:[],loading:!0}},props:{tasks:Array},methods:{newUser:function(){window.alert("Noop")},searchOnTable:function(){this.searched=A(this.tasks,this.search)}},created:function(){var t=this;setTimeout((function(){t.searched=t.tasks,t.loading=!1}),1e3)},components:{NewTasks:E}},q=D,M=(a("85d0"),Object(l["a"])(q,C,y,!1,null,"1346fc58",null)),N=M.exports,$=a("1fca"),R={extends:$["a"],data:function(){return{chartdata:{labels:["Concluido","Em andamento","Pendente"],datasets:[{label:"Data One",backgroundColor:["#1ab3f0","#3ec762","#a63d4a"],data:[]}]},options:{responsive:!0,maintainAspectRatio:!1}}},props:{tasks:Array},mounted:function(){var t=this;O.a.get("".concat("http://localhost:3333","/tasks")).then((function(s){var a=0,e=0,n=0;s.data.map((function(t){"Concluido"===t.status&&(a+=1),"Em andamento"===t.status&&(e+=1),"Pendente"===t.status&&(n+=1)})),t.chartdata.datasets[0].data.push(a,e,n)})).catch((function(t){console.log(t)})),setTimeout((function(){t.renderChart(t.chartdata,t.options)}),1e3)}},I={name:"TableBasic",data:function(){return{tasks:[],loading:!1,userIncludeTasks:0,userTasksRequester:0,userTasksPending:0,render:!0}},created:function(){this.searchAllTasks()},methods:{searchAllTasks:function(){var t=this;this.render=!0,this.loading=!0,O.a.get("".concat("http://localhost:3333","/tasks")).then((function(s){e["default"].set(t.tasks,"te",s.data),t.filtersTask(),t.render=!1})).catch((function(t){console.log(t)}))},filtersTask:function(){var t=this;this.tasks.te.map((function(s){1===s.user_id&&(t.userIncludeTasks+=1),"Gabriel Carreiro"===s.requester&&(t.userTasksRequester+=1),1===s.user_id&&"Pendente"===s.status&&(t.userTasksPending+=1)})),this.loading=!1}},components:{TableTasks:N,ChartContainer:R,NewTasks:E}},V=I,L=(a("506a"),Object(l["a"])(V,_,g,!1,null,"3b23750c",null)),F=L.exports,G=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.loading?a("md-progress-spinner",{attrs:{"md-diameter":200,"md-stroke":20,"md-mode":"indeterminate"}}):a("div",{staticClass:"container"},[a("md-table",{staticStyle:{width:"950px"},attrs:{"md-card":"","md-fixed-header":""},on:{"md-selected":t.onSelect},scopedSlots:t._u([{key:"md-table-alternate-header",fn:function(s){var e=s.count;return a("md-table-toolbar",{attrs:{id:"tr"}},[a("div",{staticClass:"md-toolbar-section-start"},[t._v(t._s(t.getAlternateLabel(e)))]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button",on:{click:t.DeleteAllTasks}},[a("md-icon",[t._v("delete")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:t.UpdateAllTasksCompleted}},[a("md-icon",[t._v("check_circle_outline")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:t.UpdateAllTasksPending}},[a("md-icon",[t._v("panorama_fish_eye")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:t.UpdateAllTasksProgress}},[a("md-icon",[t._v("running_with_errors")])],1)],1)])}},{key:"md-table-row",fn:function(s){var e=s.item;return a("md-table-row",{staticStyle:{width:"950px"},attrs:{id:"rows","md-selectable":"multiple"}},[a("md-table-cell",{staticClass:"left",attrs:{id:"rows","md-sort-by":"name","md-label":"Ocorrência"}},[t._v(t._s(e.task))]),a("md-table-cell",{staticClass:"left",attrs:{id:"rows","md-label":"Solicitante","md-sort-by":"solicitante"}},[t._v(t._s(e.requester))]),a("md-table-cell",{staticClass:"left",attrs:{id:"rows","md-label":"Tipo","md-sort-by":"type"}},[t._v(t._s(e.type))]),a("md-table-cell",{staticClass:"left",attrs:{id:"rows","md-label":"Prazo","md-sort-by":"prazo"}},[t._v(t._s(e.term.split("-").reverse().join("/")))]),a("md-table-cell",{staticClass:"left",attrs:{id:"rows","md-label":"Status","md-sort-by":"status"}},[t._v(t._s(e.status))]),a("md-table-cell",{staticClass:"left",attrs:{id:"rows","md-label":"Ações","md-sort-by":"acoes"}},["Concluido"===e.status?a("span",[a("button",{staticClass:"btn-action",on:{click:function(s){return t.UpdateTasksPending(e)}}},[a("md-icon",[t._v("check_circle_outline")])],1),a("button",{staticClass:"btn-action",on:{click:function(s){return t.DeleteTaks(e)}}},[a("md-icon",[t._v("delete_forever")])],1)]):"Em andamento"===e.status?a("span",[a("button",{staticClass:"btn-action",on:{click:function(s){return t.UpdateTasksCompleted(e)}}},[a("md-icon",[t._v("running_with_errors")])],1)]):a("span",[a("button",{staticClass:"btn-action",on:{click:function(s){return t.UpdateTasksProgress(e)}}},[a("md-icon",[t._v("panorama_fish_eye")])],1)])])],1)}}]),model:{value:t.tasks,callback:function(s){t.tasks=s},expression:"tasks"}},[a("md-table-toolbar",[a("h1",{staticClass:"md-display-1 title"},[t._v("Minhas Tarefas")]),a("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[a("md-input",{attrs:{placeholder:"Procurar por tarefa"},on:{input:t.searchOnTable},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}})],1)],1)],1),a("InfoCard",{key:t.teste})],1)],1)},J=[],B=(a("99af"),a("5530")),H=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"container"}},[a("div",{staticClass:"md-title",attrs:{id:"title"}},[t._v("Resumo minhas tarefas "),a("md-icon",[t._v("bubble_chart")])],1),a("div",{attrs:{id:"chart"}},[a("Pie")],1),t._m(0),a("div",{staticClass:"info-text"},[a("span",{staticClass:"md-subheading color"},[t._v(" Total de tarefas")]),a("span",{staticClass:"md-subheading color total"},[t._v(" "+t._s(t.total)+" ")])]),a("div",{staticClass:"info-text"},[a("span",{staticClass:"md-subheading color"},[t._v(" Tarefas concluidas")]),a("span",{staticClass:"md-subheading color total"},[t._v(" "+t._s(t.completed))])]),a("div",{staticClass:"info-text"},[a("span",{staticClass:"md-subheading color"},[t._v(" Tarefas pendentes")]),a("span",{staticClass:"md-subheading color total"},[t._v(" "+t._s(t.pending))])]),a("div",{staticClass:"info-text"},[a("span",{staticClass:"md-subheading color"},[t._v(" Tarefas em andamento")]),a("span",{staticClass:"md-subheading color total"},[t._v(" "+t._s(t.progress))])])])},K=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info-text"},[a("span",{staticClass:"md-title color"},[t._v(" Descrição")]),a("span",{staticClass:"md-subheading color"},[t._v(" Total ")])])}],Q={extends:$["b"],data:function(){return{chartdata:{labels:["Concluido","Em andamento","Pendente"],datasets:[{label:"Data One",backgroundColor:["#1ab3f0","#3ec762","#a63d4a"],data:[]}]},options:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){var t=this;O.a.get("".concat("http://localhost:3333","/tasks/1")).then((function(s){var a=0,e=0,n=0;s.data.map((function(t){"Concluido"===t.status&&(a+=1),"Em andamento"===t.status&&(e+=1),"Pendente"===t.status&&(n+=1)})),t.chartdata.datasets[0].data.push(a,e,n)})).catch((function(t){console.log(t)})),setTimeout((function(){t.renderChart(t.chartdata,t.options)}),1e3)}},W={name:"InfoCard",data:function(){return{tasks:[],completed:0,pending:0,progress:0,total:0}},created:function(){var t=this;O.a.get("".concat("http://localhost:3333","/tasks/1")).then((function(s){e["default"].set(t.tasks,"data",s.data),t.filterTasks()})).catch((function(t){console.log(t)}))},methods:{filterTasks:function(){var t=this;this.tasks.data.map((function(s){"Concluido"===s.status&&(t.completed+=1),"Em andamento"===s.status&&(t.progress+=1),"Pendente"===s.status&&(t.pending+=1)})),this.total=this.tasks.data.length}},components:{Pie:Q}},X=W,Y=(a("8312"),Object(l["a"])(X,H,K,!1,null,"0657f1fc",null)),Z=Y.exports,tt=void 0,st=function(t){return t.toString().toLowerCase()},at=function(t,s){return s?tt.tasks.filter((function(t){return st(t.task).includes(st(s))})):t},et={name:"TableMultiple",data:function(){return{selected:[],tasks:[],loading:!1,teste:0}},methods:{onSelect:function(t){this.selected=t},searchOnTable:function(){this.searched=at(this.tasks,this.search)},getAlternateLabel:function(t){var s="";return t>1&&(s="s"),"".concat(t," user").concat(s," selected")},UpdateTasksCompleted:function(t){var s=Object(B["a"])(Object(B["a"])({},t),{},{status:"Concluido"});this.loading=!0,O.a.put("".concat("http://localhost:3333","/tasks/").concat(t.id),s),this.UpdateTasks()},UpdateTasksPending:function(t){var s=Object(B["a"])(Object(B["a"])({},t),{},{status:"Pendente"});this.loading=!0,O.a.put("".concat("http://localhost:3333","/tasks/").concat(t.id),s),this.UpdateTasks()},UpdateTasksProgress:function(t){var s=Object(B["a"])(Object(B["a"])({},t),{},{status:"Em andamento"});this.loading=!0,O.a.put("".concat("http://localhost:3333","/tasks/").concat(t.id),s),this.UpdateTasks()},UpdateAllTasksPending:function(){var t=this;this.loading=!0,O.a.put("".concat("http://localhost:3333","/tasks/all/pending"),this.selected).then((function(){setTimeout((function(){t.UpdateTasks()}),2e3)}))},UpdateAllTasksProgress:function(){var t=this;this.loading=!0,O.a.put("".concat("http://localhost:3333","/tasks/all/progress"),this.selected).then((function(){setTimeout((function(){t.UpdateTasks()}),2e3)}))},UpdateAllTasksCompleted:function(){var t=this;this.loading=!0,O.a.put("".concat("http://localhost:3333","/tasks/all/completed"),this.selected).then((function(){setTimeout((function(){t.UpdateTasks()}),2e3)}))},DeleteTaks:function(t){this.loading=!0,O.a.delete("".concat("http://localhost:3333","/tasks/delete/").concat(t.id)),this.UpdateTasks()},DeleteAllTasks:function(){var t=this;this.loading=!0,O.a.post("".concat("http://localhost:3333","/tasks/delete/all"),this.selected).then((function(){setTimeout((function(){t.UpdateTasks()}),2e3)}))},UpdateTasks:function(){var t=this;setTimeout((function(){O.a.get("".concat("http://localhost:3333","/tasks/1")).then((function(s){t.loading=!1,t.tasks=s.data,t.reload()}))}),1e3)},reload:function(){this.teste+=1}},created:function(){var t=this;O.a.get("".concat("http://localhost:3333","/tasks/1")).then((function(s){t.tasks=s.data})).catch((function(t){console.log(t)}))},components:{InfoCard:Z}},nt=et,ot=(a("096a"),Object(l["a"])(nt,G,J,!1,null,"65268d0d",null)),it=ot.exports,ct=[{path:"/",name:"Tarefas",component:F},{path:"/tarefas",name:"Tarefas Usuario",component:it}],rt=ct;e["default"].use(j["a"]);var dt=new j["a"]({mode:"history",routes:rt}),lt=dt;e["default"].config.productionTip=!1,e["default"].use(k.a),new e["default"]({router:lt,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";a("9c0c")},6971:function(t,s,a){},8312:function(t,s,a){"use strict";a("26a2")},"85d0":function(t,s,a){"use strict";a("00e2")},8803:function(t,s,a){t.exports=a.p+"img/icon-pack.3cff795f.png"},"944d":function(t,s,a){},"9c0c":function(t,s,a){},a23c:function(t,s,a){},c14e:function(t,s,a){},eb1c:function(t,s,a){"use strict";a("c14e")},f815:function(t,s,a){}});
//# sourceMappingURL=app.67807c93.js.map