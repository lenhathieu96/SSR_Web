(this.webpackJsonpSSR_Web=this.webpackJsonpSSR_Web||[]).push([[0],{277:function(e,a,t){e.exports=t.p+"static/media/loginLogo.bfc023d6.png"},294:function(e,a,t){e.exports=t.p+"static/media/logo.207b38f9.png"},341:function(e,a,t){e.exports=t(603)},380:function(e,a){},384:function(e,a,t){},402:function(e,a,t){},404:function(e,a,t){},405:function(e,a,t){},407:function(e,a,t){},408:function(e,a,t){},409:function(e,a,t){},410:function(e,a,t){},598:function(e,a,t){},599:function(e,a,t){},600:function(e,a,t){},601:function(e,a,t){},602:function(e,a,t){},603:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=t(71),o=t(297),s=t(655),u=t(295),m=t(140),d=t(86),E=t(57),p=t(9),f=t(636),h=t(14),b=t(16),v=t(270),g="https://ssrestaurant.herokuapp.com",y=t.n(v)()(g),O=t(2),N=t.n(O),C=t(632),_=t(271),T=t.n(_);t(383);function j(e){var a=e.billID,t=e.item,n=e.table,l=e.createTime,c=e.isDone,i=e.onDone_one,o=e.onDone_all,s=e.onServed_all,u=e.onServed_one;return r.a.createElement("div",{className:"Order-container"},r.a.createElement("div",{className:"Order-subContainer"},r.a.createElement("p",{className:"Order-subContainer__name"},t.name),r.a.createElement("p",{className:"Order-subContainer__note"},t.note)),r.a.createElement(T.a,{className:"Order-subContainer__time",locale:"vi",fromNow:!0,interval:1e3},l),r.a.createElement("div",{className:"Order-subContainer"},0===n?r.a.createElement("p",{style:{fontWeight:"bold"}},"Mang V\u1ec1 ","HD1231231231"," "):r.a.createElement("div",null,r.a.createElement("p",{style:{fontWeight:"bold"}},"B\xe0n: ",n)),r.a.createElement("p",{style:{fontWeight:"bold"}},"S\u1ed1 L\u01b0\u1ee3ng: ",c?t.done-t.served:t.quantity-t.done)),r.a.createElement("div",{className:"Order-btnContainer"},r.a.createElement(C.a,{className:"btn-one",onClick:function(){return c?u(a,t._id):i(a,t._id)}},r.a.createElement(b.a,{icon:h.b,size:"lg"})),r.a.createElement(C.a,{className:"btn-all",onClick:function(){return c?s(a,t._id):o(a,t._id)}},r.a.createElement(b.a,{icon:h.a,size:"lg"}))))}j.PropsType={item:N.a.object.isRequired,table:N.a.string.isRequired,billID:N.a.string.isRequired,createTime:N.a.string.isRequired,isDone:N.a.bool.isRequired,onDone_single:N.a.func,onDone_all:N.a.func,onFinish_all:N.a.func,onFinish_single:N.a.func};var k=j,w={primary:"#283593",secondary:"#e78200",green:"#00b551",red:"red"},S=(t(384),[]);var D=function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(S),i=Object(p.a)(c,2),o=i[0],s=i[1];Object(n.useEffect)((function(){y.emit("allBill"),y.on("allBillResult",(function(e){s(e)}))}),[]);var u=function(e,a){y.emit("oneDone",e,a)},m=function(e,a){y.emit("allDone",e,a)},d=function(e,a){y.emit("oneServed",e,a)},E=function(e,a){y.emit("allServed",e,a)};return r.a.createElement("div",{className:"Kitchen-container"},r.a.createElement("div",{className:"Kitchen-container__body"},r.a.createElement(f.a,{item:!0,xs:6,className:"process-container"},r.a.createElement("div",{className:"process-container__header",style:{backgroundColor:w.primary}},r.a.createElement(b.a,{icon:h.n,size:"lg",className:"icon"}),r.a.createElement("h4",null,"Ch\u1edd Ch\u1ebf Bi\u1ebfn"),r.a.createElement(b.a,{icon:t?h.r:h.s,size:"2x",className:"icon",style:{cursor:"pointer"},onClick:function(){return l(!t)}})),r.a.createElement("div",{className:"process-container__body"},r.a.createElement("div",{className:"wrapper"},o.map((function(e,a){return r.a.createElement("div",{key:a},e.Orders.filter((function(e){return e.done<e.quantity&&0===e.served})).map((function(a,t){return r.a.createElement(k,{item:a,billID:e.ID,table:e.Table,createTime:e.Created,key:t,isDone:!1,onDone_one:u,onDone_all:m})})))}))))),r.a.createElement(f.a,{xs:6,className:"process-container"},r.a.createElement("div",{className:"process-container__header",style:{backgroundColor:"#00b551"}},r.a.createElement(b.a,{icon:h.g,size:"lg",className:"icon"}),r.a.createElement("h4",null,"M\xf3n \u0110\xe3 Xong/Ch\u1edd Ph\u1ee5c V\u1ee5"),r.a.createElement(b.a,{icon:h.m,size:"2x",className:"icon",style:{cursor:"pointer"}})),r.a.createElement("div",{className:"process-container__body",style:{borderColor:"#00b551"}},r.a.createElement("div",{className:"wrapper"},o.map((function(e,a){return r.a.createElement("div",{key:a},e.Orders.filter((function(e){return e.done>0&&e.served<e.quantity})).map((function(a,t){return r.a.createElement(k,{item:a,billID:e.ID,table:e.Table,createTime:e.Created,key:t,isDone:!0,onServed_one:d,onServed_all:E})})))})))))))},B=t(659),R=t(641),x=t(642),M=t(643),I=t(637),P=t(43),q=t(22),L=t.n(q),z=t(660);var W=function(e){var a=e.field,t=e.label,n=e.placeholder,l=e.type,c=e.disabled;return r.a.createElement(I.a,{style:{marginBottom:20}},r.a.createElement(z.a,Object.assign({},a,{disabled:c,label:t,placeholder:n,type:l})))},A=t(277),F=t.n(A);t(402);var H=function(){var e=Object(E.g)();return r.a.createElement(f.a,{className:"login-container"},r.a.createElement(B.a,{open:!0,style:{borderRadius:20,padding:10}},r.a.createElement(R.a,null,r.a.createElement("img",{src:F.a,alt:"logo"})),r.a.createElement(x.a,null,r.a.createElement(P.c,{initialValues:{username:"",password:""},enableReinitialize:!0,onSubmit:function(a){return t=a.username,n=a.password,void L.a.post(g,{name:t,password:n}).then((function(a){if(200===a.status){localStorage.setItem("token","1234");var n=("bep"===t.slice(0,3)?{from:{pathname:"/".concat(t.slice(4),"/Kitchen")}}:{from:{pathname:"/".concat(t.slice(4),"/Dashboard")}}).from;e.replace(n)}})).catch((function(e){console.log(e)}));var t,n}},(function(){return r.a.createElement("div",null,r.a.createElement(P.b,{style:{display:"flex",flexDirection:"column"}},r.a.createElement(M.a,{className:"input-container"},r.a.createElement(P.a,{name:"username",component:W,label:"T\xean \u0110\u0103ng Nh\u1eadp",type:"text"}),r.a.createElement(P.a,{name:"password",component:W,label:"M\u1eadt Kh\u1ea9u",type:"password"})),r.a.createElement(I.a,{style:{marginTop:20}},r.a.createElement(C.a,{type:"submit",style:{backgroundColor:"#00b551",color:"white"}},"\u0110\u0103ng Nh\u1eadp"))))})))))},V=t(23),G=t(35),K=t(32),U=function(e){return{type:"GET_TABLE",payload:e}},X=t(59),Q=t(644);var J=function(e){var a=e.isLoading;return r.a.createElement(B.a,{open:a},r.a.createElement(x.a,{style:{alignItems:"center",display:"flex",flexDirection:"column"}},r.a.createElement(Q.a,null),r.a.createElement("p",null,"\u0110ang T\u1ea3i D\u1eef Li\u1ec7u, Vui L\xf2ng Ch\u1edd")))};t(404);var $=function(e){var a=e.listTable,t=e.getCurrentTable,l=a.filter((function(e){return Object.keys(e).length>1})).length,c=Object(n.useState)(0),i=Object(p.a)(c,2),o=i[0],s=i[1],u=Object(n.useState)(15),m=Object(p.a)(u,2),d=m[0],E=m[1],f=Object(n.useState)([]),v=Object(p.a)(f,2),g=v[0],y=v[1];return Object(n.useEffect)((function(){y(a.slice(o,d))}),[a,o,d]),r.a.createElement("div",{className:"tableList-container"},r.a.createElement("div",{className:"tableList-container__selection"},r.a.createElement(C.a,null,"T\u1ea5t C\u1ea3")),r.a.createElement("div",{className:"tableList-container__detail"},r.a.createElement("div",{className:"arrow-wrapper"},0!==o?r.a.createElement(b.a,{icon:h.h,size:"2x",color:"white",className:"table-icon",style:{cursor:"pointer"},onClick:function(){E(o),s(0>o-15?0:o-15)}}):null),r.a.createElement("div",{className:"list-wrapper"},g.map((function(e,a){return r.a.createElement(C.a,{className:Object.keys(e).length>1?"served ":"",key:a,onClick:function(){return t(e.Table)}},r.a.createElement("div",{className:"table-item"},r.a.createElement(b.a,{icon:h.q,size:"3x",className:"icon"}),r.a.createElement("p",null,"B\xe0n ",e.Table)))}))),r.a.createElement("div",{className:"arrow-wrapper"},d!==a.length?r.a.createElement(b.a,{icon:h.i,size:"2x",color:"white",className:"icon",style:{cursor:"pointer"},onClick:function(){s(d),a.length<d+15?E(a.length):E(d+15)}}):null)),r.a.createElement("div",{className:"tableList-container__config"},"S\u1ed1 B\xe0n \u0110ang Ph\u1ee5c V\u1ee5: ",l,"/",a.length))},Y=t(640),Z=t(645),ee=t(646),ae=t(647),te=t(648),ne=t(649),re=t(650),le=t(658),ce=t(652),ie=(t(405),[{id:"name",label:"T\xean M\xf3n",minWidth:300},{id:"price",label:"Gi\xe1 Ti\u1ec1n",minWidth:170,align:"right",format:function(e){return e.toLocaleString("vi-VN")}}]);var oe=function(e){var a=e.onSelectFood,t=e.data,l=se(),c=Object(n.useState)(0),i=Object(p.a)(c,2),o=i[0],s=i[1];return r.a.createElement(Y.a,{classes:{rounded:l.rounded,root:l.root}},r.a.createElement(Z.a,{className:"menu__container"},r.a.createElement(ee.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(ae.a,null,r.a.createElement(te.a,null,ie.map((function(e){return r.a.createElement(ne.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(re.a,null,t.slice(10*o,10*o+10).map((function(e){return r.a.createElement(te.a,{className:"table-row",hover:!0,role:"checkbox",tabIndex:-1,key:e._id,onClick:function(t){return function(e,t){a(t)}(0,e)}},ie.map((function(a){var t=e[a.id];return r.a.createElement(ne.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.a.createElement(le.a,{classes:{root:l.pagination__root},rowsPerPageOptions:[],component:"div",count:t.length,rowsPerPage:10,page:o,onChangePage:function(e,a){s(a)}}))},se=Object(ce.a)({root:{display:"flex",flexDirection:"column",flexGrow:1,height:0,overflow:"auto",padding:10},rounded:{borderRadius:20},pagination__root:{overflow:"hidden"}});var ue=function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(b.a,{icon:h.d,size:"5x",style:{color:"#283593",marginBottom:20}}),r.a.createElement("p",{style:{fontWeight:"bold",color:"#283593"}},"Ch\u01b0a C\xf3 B\xe0n N\xe0o \u0110\u01b0\u1ee3c Ch\u1ecdn"))},me=t(651),de=t(137),Ee=t.n(de),pe=t(136),fe=t.n(pe),he=t(279),be=t.n(he),ve=t(280),ge=t.n(ve),ye=t(653);var Oe=function(e){var a=e.showModal,t=e.handleCloseModal,l=e.handleSubmitNote,c=Object(n.useState)(""),i=Object(p.a)(c,2),o=i[0],s=i[1];return r.a.createElement(B.a,{open:a,onClose:t,fullWidth:!0},r.a.createElement(R.a,{id:"form-dialog-title"},"Ghi Ch\xfa"),r.a.createElement(x.a,null,r.a.createElement(z.a,{fullWidth:!0,onChange:function(e){s(e.target.value)},value:o})),r.a.createElement(ye.a,null,r.a.createElement(C.a,{onClick:function(){return t()},color:"primary"},"H\u1ee7y"),r.a.createElement(C.a,{onClick:function(){return l(o)},color:"primary"},"Th\xeam")))};var Ne=function(e){var a=e.order,t=e.index,l=Object(i.b)(),c=Object(n.useState)(!1),o=Object(p.a)(c,2),s=o[0],u=o[1],m=function(){u(!1)};return r.a.createElement("div",null,r.a.createElement("div",{className:"OrderDetail-container"},r.a.createElement("div",{className:"OrderDetail-container__index"},r.a.createElement("p",{className:a.served===a.quantity?"order--done":""},t,".")),r.a.createElement("div",{className:"OrderDetail-container__name"},r.a.createElement("p",{className:a.served===a.quantity?"order--done":""},a.name)),r.a.createElement("div",{className:"OrderDetail-container__quantity"},r.a.createElement(me.a,{"aria-label":"minus-one",style:{marginBottom:10},disabled:!(a.quantity>1),onClick:function(){a.done<a.quantity&&function(e){var a={type:"DECREASE_ORDER",payload:e};l(a)}(a._id)}},r.a.createElement(be.a,null)),r.a.createElement("p",{className:a.served===a.quantity?"order--done":""},a.quantity),r.a.createElement(me.a,{"aria-label":"plus-one",onClick:function(){!function(e){var a={type:"INCREASE_ORDER",payload:e};l(a)}(a._id)}},r.a.createElement(fe.a,null))),r.a.createElement("div",{className:"OrderDetail-container__price"},r.a.createElement("p",{className:a.served===a.quantity?"order--done":""},a.totalPrice.toLocaleString())),r.a.createElement("div",{className:"OrderDetail-container__buttons"},0===a.served&&0===a.done?r.a.createElement(me.a,{"aria-label":"delete",onClick:function(){return function(e){var a={type:"DELETE_ORDER",payload:e};l(a)}(a._id)}},r.a.createElement(Ee.a,null)):null,0===a.served&&0===a.done?r.a.createElement(me.a,{"aria-label":"edit",onClick:function(){u(!0)}},r.a.createElement(ge.a,null)):null)),r.a.createElement("div",{className:"OrderNote-container"},a.note),r.a.createElement(Oe,{showModal:s,handleSubmitNote:function(e){!function(e,a){var t={type:"NOTE_ORDER",payload:{orderId:e,textNote:a}};l(t)}(a._id,e),m()},handleCloseModal:m}))},Ce=t(654);var _e=function(e){var a=e.isOpen,t=e.handleCloseModal,n=e.handleAccept;return r.a.createElement(B.a,{open:a,onClose:t},r.a.createElement(R.a,{id:"alert-dialog-title"},"X\xe1c Nh\u1eadn"),r.a.createElement(x.a,null,r.a.createElement(Ce.a,{id:"alert-dialog-description"},"B\u1ea1n C\xf3 Ch\u1eafc Ch\u1eafn Mu\u1ed1n Xo\xe1 Ch\u1ee9 ?")),r.a.createElement(ye.a,null,r.a.createElement(C.a,{onClick:t,color:"primary"},"Kh\xf4ng"),r.a.createElement(C.a,{onClick:n,color:"primary",autoFocus:!0},"C\xf3")))},Te=t(656),je=t(663),ke=t(662),we=(t(407),Object(ce.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)}}})));var Se=function(e){var a=we(),t=Object(n.useState)(""),l=Object(p.a)(t,2),c=l[0],i=l[1],o=e.isOpen,s=e.currentTable,u=e.emptyTables,m=e.handleCloseModal,d=e.handleSwitchTable;return r.a.createElement(B.a,{open:o,onClose:m},r.a.createElement(R.a,{style:{color:w.primary}},"Ch\u1ecdn B\xe0n C\u1ea7n Chuy\u1ec3n t\u1edbi"),r.a.createElement(x.a,null,r.a.createElement("div",{className:"SwitchTable-container"},r.a.createElement(I.a,{variant:"outlined",className:a.formControl},r.a.createElement(ke.a,null,"B\xe0n ",s),r.a.createElement(Te.a,{disabled:!0,label:"B\xe0n",value:""})),r.a.createElement(b.a,{icon:h.c,size:"2x",color:w.secondary,className:"icon"}),r.a.createElement(I.a,{variant:"outlined",className:a.formControl},r.a.createElement(ke.a,null,"B\xe0n"),r.a.createElement(Te.a,{value:c,onChange:function(e){i(e.target.value)},label:"B\xe0n"},u.map((function(e){return r.a.createElement(je.a,{key:e.Table,value:e.Table.toString()},"B\xe0n ",e.Table)})))))),r.a.createElement(ye.a,null,r.a.createElement(C.a,{onClick:function(){return m()},color:"primary"},"Hu\u1ef7"),r.a.createElement(C.a,{onClick:function(){return d(c)},color:"primary",autoFocus:!0},"Chuy\u1ec3n")))};t(408);var De=function(e){var a=e.currentTable,t=e.emptyTables,l=e.createBill,c=e.chargeBill,i=e.updateBill,o=e.deleteBill,s=e.switchTable,u=Object(n.useState)(!1),m=Object(p.a)(u,2),d=m[0],E=m[1],f=Object(n.useState)(!1),h=Object(p.a)(f,2),b=h[0],v=h[1],g=Object.keys(a).length>1?a.Orders.reduce((function(e,a){return e+a.totalPrice}),0):0,y=function(){E(!1)},O=function(){v(!1)};return r.a.createElement("div",{className:"tableDetail-container"},r.a.createElement("div",{className:"tableDetail-container__info"},Object.keys(a).length<=1||0===a.Orders.length?r.a.createElement("div",{className:"order-null"},r.a.createElement("p",null,"B\xe0n Tr\u1ed1ng")):a.Orders.map((function(e,a){return r.a.createElement(Ne,{key:e._id,index:a+1,order:e})}))),Object.keys(a).length>1&&0!==a.Orders.length?r.a.createElement("div",{className:"tableDetail-container__tools"},r.a.createElement("div",{className:"total-price"},r.a.createElement("p",null,"T\u1ed5ng Ti\u1ec1n"),r.a.createElement("p",{style:{textAlign:"right",color:w.secondary}},g.toLocaleString())),r.a.createElement("div",{className:"button-wrapper"},a.hasOwnProperty("Created")?r.a.createElement(C.a,{style:{background:w.green},onClick:function(){i(a.ID,a.Orders)}},r.a.createElement("span",null,"C\u1eadp Nh\u1eadp")):null,a.hasOwnProperty("Created")?r.a.createElement(C.a,{style:{background:w.secondary},onClick:function(){return v(!0)}},r.a.createElement("span",null,"Chuy\u1ec3n B\xe0n")):null,r.a.createElement(C.a,{className:a.hasOwnProperty("Created")?"btn-charge":"btn-add",onClick:function(){return a.hasOwnProperty("Created")?c(a.ID):l({Table:a.Table,Orders:a.Orders,TotalPrice:g})}},a.hasOwnProperty("Created")?"Thanh To\xe1n":"T\u1ea1o \u0110\u01a1n"),a.hasOwnProperty("Created")?r.a.createElement(C.a,{style:{background:w.red},onClick:function(){return E(!0)}},r.a.createElement("span",null,"Hu\u1ef7 \u0110\u01a1n")):null)):null,r.a.createElement(_e,{isOpen:d,handleCloseModal:y,handleAccept:function(){o(a._id),y()}}),r.a.createElement(Se,{isOpen:b,currentTable:a.Table,emptyTables:t,handleSwitchTable:function(e){s(a.ID,e),O()},handleCloseModal:O}))};t(409);var Be=function(){var e=Object(i.b)(),a=g+"/food",t=Object(i.c)((function(e){return e.currentTable})),l=Object(n.useState)([]),c=Object(p.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)([]),m=Object(p.a)(u,2),d=m[0],E=m[1],f=Object(n.useState)(!1),v=Object(p.a)(f,2),O=v[0],N=v[1],_=Object(n.useState)(!0),T=Object(p.a)(_,2),j=T[0],k=T[1];Object(n.useEffect)((function(){var e=L.a.CancelToken.source();!function(){try{L.a.get(a,{cancelToken:e.token}).then((function(e){200===e.status&&E(e.data)}))}catch(t){if(!L.a.isCancel(t))throw t;console.log("cancelled")}}();var t=new Array(30).fill({}).map((function(e,a){return Object(K.a)({},e,{Table:a+1})}));return y.emit("allBill"),y.on("allBillResult",(function(e){var a=Object(G.a)(t);if(e.length>0){var n,r=Object(V.a)(e);try{for(r.s();!(n=r.n()).done;){var l=n.value,c=l.Table-1;a[c]=Object(K.a)({},a[c],{},l)}}catch(i){r.e(i)}finally{r.f()}}s(a),k(!1)})),function(){e.cancel()}}),[a]);var w=function(e,a){X.a.clearWaitingQueue(),a?X.a.success(e):X.a.error(e)},S=function(){var a=U({});e(a)};return r.a.createElement("div",{className:"Cashier-container"},r.a.createElement("div",{className:"left-container"},r.a.createElement("div",{className:"header"},r.a.createElement(C.a,{className:O?"":"--active",onClick:function(){return N(!1)}},"B\xe0n"),r.a.createElement(C.a,{className:O?"--active":"",onClick:function(){return N(!0)}},"Th\u1ef1c \u0110\u01a1n")),r.a.createElement("div",{className:"body ".concat(O?"":"first-content")},O?r.a.createElement(oe,{onSelectFood:function(a){var t=function(e){return{type:"ADD_ORDER",payload:e}}(a);e(t)},data:d}):r.a.createElement($,{listTable:o,getCurrentTable:function(a){var t=o.find((function(e){return e.Table===a})),n=U(t);e(n)}}))),r.a.createElement("div",{className:"right-container"},r.a.createElement("div",{className:"header"},t.hasOwnProperty("Table")?r.a.createElement("div",{className:"header__title"},"B\xe0n ",t.Table,r.a.createElement(b.a,{icon:h.o,size:"lg",style:{color:"white",marginLeft:100},onClick:function(){return S()}})):null),r.a.createElement("div",{className:"body ".concat(t.hasOwnProperty("Table")?"haveTable":""," ")},t.hasOwnProperty("Table")?r.a.createElement(De,{currentTable:t,emptyTables:o.filter((function(e){return 1===Object.keys(e).length})),createBill:function(e){k(!0),y.emit("createBill",e),y.on("createBillResult",(function(e){S(),N(!1),k(!1),e?w("T\u1ea1o \u0110\u01a1n H\xe0ng Th\xe0nh C\xf4ng",!0):w("T\u1ea1o \u0110\u01a1n H\xe0ng Th\u1ea5t B\u1ea1i",!1)}))},chargeBill:function(e){k(!0),y.emit("chargeBill",e),y.on("chargeBillResult",(function(e){S(),k(!1),e?w("Thanh To\xe1n Th\xe0nh C\xf4ng",!0):w("Thanh To\xe1n Th\u1ea5t B\u1ea1i",!1)}))},updateBill:function(e,a){k(!0),y.emit("updateBill",e,a),y.on("updateBillResult",(function(e){S(),k(!1),e?w("C\u1eadp Nh\u1eadp Th\xe0nh C\xf4ng",!0):w("C\u1eadp Nh\u1eadp Th\u1ea5t B\u1ea1i",!1)}))},deleteBill:function(e){k(!0),y.emit("deleteBill",e),y.on("deleteBillResult",(function(e){S(),k(!1),e?w("Xo\xe1 \u0110\u01a1n Th\xe0nh C\xf4ng",!0):w("Xo\xe1 \u0110\u01a1n Th\u1ea5t B\u1ea1i",!1)}))},switchTable:function(e,a){k(!0),y.emit("switchTable",e,a),y.on("switchTableResult",(function(e){S(),k(!1),e?w("Chuy\u1ec3n B\xe0n Th\xe0nh C\xf4ng",!0):w("Chuy\u1ec3n B\xe0n Th\u1ea5t B\u1ea1i",!1)}))}}):r.a.createElement(ue,null))),r.a.createElement(J,{isLoading:j}))},Re=t(638),xe=t(299),Me=t(281);var Ie=function(e){var a=e.field,t=e.label,n=e.placeholder,l=e.type,c=e.disabled;return r.a.createElement(I.a,{style:{marginBottom:20}},r.a.createElement(z.a,Object.assign({},a,{disabled:c,label:t,placeholder:n,type:l,InputProps:{inputComponent:Pe}})))};function Pe(e){var a=e.inputRef,t=e.onChange,n=Object(m.a)(e,["inputRef","onChange"]);return r.a.createElement(Me.a,Object.assign({},n,{getInputRef:a,onValueChange:function(a){t({target:{name:e.name,value:a.value}})},thousandSeparator:!0,isNumericString:!0}))}var qe=t(283),Le=t.n(qe),ze=t(282),We=t.n(ze);var Ae=function(e){var a=e.selectedFood,t=e.onAddNew,l=e.onUpdate,c=e.onDelete,i=e.onCancelSelect,o=Object(n.useState)(!1),s=Object(p.a)(o,2),u=s[0],m=s[1],d={name:a.name,price:a.price},E=function(){m(!1)};return r.a.createElement("div",{className:"EditMenu-wrapper"},r.a.createElement(xe.a,{variant:"h4",component:"h4"},"Thi\u1ebft L\u1eadp M\xf3n"),r.a.createElement(P.c,{initialValues:d,enableReinitialize:!0,onSubmit:function(e){""===a.name?t(e):l(a._id,e)}},(function(){return r.a.createElement(P.b,null,r.a.createElement(M.a,{className:"input-wrapper"},r.a.createElement(P.a,{name:"name",component:W,label:"T\xean M\xf3n",placeholder:"Nh\u1eadp T\xean M\xf3n",type:"text"}),r.a.createElement(P.a,{name:"price",component:Ie,label:"Gi\xe1 Ti\u1ec1n",placeholder:"Nh\u1eadp Gi\xe1 Ti\u1ec1n",type:"text"})),r.a.createElement(I.a,{className:"btn-wrapper"},r.a.createElement(C.a,{type:"submit",startIcon:""!==a.name?r.a.createElement(We.a,null):r.a.createElement(fe.a,null),className:"btn ".concat(""!==a.name?"btn--update":"btn--add")},""!==a.name?"Ch\u1ec9nh S\u1eeda":"Th\xeam M\u1edbi"),""!==a.name?r.a.createElement(C.a,{startIcon:r.a.createElement(Ee.a,null),className:"btn--del",onClick:function(){return m(!0)}},"X\xf3a"):null,r.a.createElement(C.a,{className:"btn",type:"reset",startIcon:r.a.createElement(Le.a,null),onClick:function(){return i()}},"H\u1ee7y B\u1ecf")))})),r.a.createElement(_e,{isOpen:u,handleCloseModal:E,handleAccept:function(){c(a._id),E()}}))};t(410);var Fe=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(p.a)(c,2),o=i[0],s=i[1],u=Object(n.useState)({name:"",price:""}),m=Object(p.a)(u,2),d=m[0],E=m[1],f=Object(n.useState)(!1),h=Object(p.a)(f,2),b=h[0],v=h[1],y=g+"/food";Object(n.useEffect)((function(){v(!0);var e=L.a.CancelToken.source();return function(){try{L.a.get(y,{cancelToken:e.token}).then((function(e){if(200===e.status){var a=e.data;l(a),s(a),v(!1)}}))}catch(a){if(!L.a.isCancel(a))throw a;console.log("cancelled")}}(),function(){e.cancel()}}),[y]);var O=function(e,a){X.a.clearWaitingQueue(),a?X.a.success(e):X.a.error(e)};return r.a.createElement("div",{className:"MenuManager-container"},r.a.createElement("div",{className:"MenuManager-container__detail"},r.a.createElement("div",{className:"Menu-wrapper"},r.a.createElement(oe,{onSelectFood:E,data:o})),r.a.createElement(Ae,{selectedFood:d,onAddNew:function(e){L.a.post(y+"/addFood",e).then((function(a){if(v(!0),200===a.status){var n=Object(G.a)(t);n.push(e),l(n),s(n),v(!1)}})).catch((function(e){O(e.response.data,!1),v(!1)}))},onUpdate:function(e,a){v(!0),L.a.post(y+"/updateFood",{id:e,food:a}).then((function(n){if(200===n.status){var r=Object(G.a)(t),c=r.findIndex((function(a){return a._id===e}));a.price=parseInt(a.price),r[c]=Object(K.a)({},a),l(r),s(r),O("Ch\u1ec9nh S\u1eeda Th\xe0nh C\xf4ng",!0),v(!1)}})).catch((function(e){O(e.response.data,!1),v(!1)}))},onDelete:function(e){v(!0),L.a.post(y+"/deleteFood",e).then((function(a){if(200===a.status){var n=Object(G.a)(t).filter((function(a){return a._id!==e}));l(n),s(n),O("Ch\u1ec9nh S\u1eeda Th\xe0nh C\xf4ng",!0),v(!1)}})).catch((function(e){O(e.response.data,!1),v(!1)}))},onCancelSelect:function(){E({name:"",price:""})}})),r.a.createElement("div",{className:"MenuManager-container__tools"},r.a.createElement(Re.a,{placeholder:"Nh\u1eadp T\xean S\u1ea3n Ph\u1ea9m",onChange:function(e){!function(e){if(""!==e){var a=t.filter((function(a){var t=a.name.toUpperCase(),n=e.toUpperCase();return t.indexOf(n)>-1}));s(a)}else s(t)}(e.target.value)}})),r.a.createElement(J,{isLoading:b}))},He=t(91),Ve=t.n(He),Ge=t(284),Ke=t(105);t(598);var Ue=function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(p.a)(c,2),o=i[0],s=i[1],u=Object(n.useState)(0),m=Object(p.a)(u,2),d=m[0],E=m[1];return Object(n.useEffect)((function(){l(!0),function(){var e=Object(Ge.a)(Ve.a.mark((function e(){var a,t;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.a.get("https://ssrestaurant.herokuapp.com/analytic/weekRevenue"),t=L.a.get("https://ssrestaurant.herokuapp.com/analytic/revenueByMonth"),e.next=4,L.a.all([a,t]).then(L.a.spread((function(){var e=arguments.length<=0?void 0:arguments[0];if(200===e.status){var a=e.data;s(a)}var t=arguments.length<=1?void 0:arguments[1];200===t.status&&E(t.data.revenue),l(!1)}))).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),["https://ssrestaurant.herokuapp.com/analytic/weekRevenue","https://ssrestaurant.herokuapp.com/analytic/revenueByMonth"]),r.a.createElement("div",{className:"Analytic-container"},r.a.createElement("div",{className:"blockInfo-container"},r.a.createElement("div",{className:"blockRevenue"},r.a.createElement("p",null,"Doanh Thu H\xf4m Nay"),r.a.createElement("div",{className:"blockRevenue__body"},r.a.createElement(b.a,{icon:h.k,className:"icon",size:"4x",color:w.primary}),r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,o.length>0?o[0].revenue.toLocaleString():0," VN\u0110")),r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",{style:{fontSize:"medium",color:"black",fontWeight:"normal"}},o.length>0?o[0].billQuantity:0," \u0110\u01a1n H\xe0ng \u0110\xe3 Ho\xe0n Th\xe0nh"))))),r.a.createElement("div",{className:"blockRevenue"},r.a.createElement("p",null,"Doanh Thu Th\xe1ng N\xe0y"),r.a.createElement("div",{className:"blockRevenue__body"},r.a.createElement(b.a,{icon:h.l,className:"icon",size:"4x",color:w.primary}),r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,d.toLocaleString()," VN\u0110")))))),r.a.createElement("div",{className:"chart-container"},r.a.createElement("p",null,"Doanh Thu 7 Ng\xe0y G\u1ea7n \u0110\xe2y"),o.length>0?r.a.createElement(Ke.b,{width:.85*window.innerWidth,height:350,data:o,className:"chart"},r.a.createElement(Ke.c,{dataKey:"day"}),r.a.createElement(Ke.d,{tickFormatter:function(e){return 0===e?e:"".concat(e/1e6," tr")}}),r.a.createElement(Ke.a,{dataKey:"revenue",barSize:40,fill:"#e78200"})):null),r.a.createElement(J,{isLoading:t}))};t(599);var Xe=function(){var e=Object(n.useState)(1),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"Manager"},r.a.createElement("div",{className:"left-menu"},r.a.createElement(C.a,{onClick:function(){return l(1)},className:1===t?"active":""},r.a.createElement(b.a,{icon:h.j,size:"3x",className:"nav-icon"}),"Th\u1ef1c \u0110\u01a1n"),r.a.createElement(C.a,{onClick:function(){return l(2)},className:2===t?"active":""},r.a.createElement(b.a,{icon:h.f,size:"3x",className:"nav-icon"}),"Th\u1ed1ng K\xea")),r.a.createElement("div",{className:"content ".concat(1===t?"first-content":"")},function(){switch(t){case 2:return r.a.createElement(Ue,null);default:return r.a.createElement(Fe,null)}}()))},Qe=t(294),Je=t.n(Qe);t(600);var $e=function(){var e=Object(E.h)().url;return r.a.createElement(f.a,{style:{height:"100%"}},r.a.createElement("div",{className:"Admin__header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:Je.a,alt:"logo"})),r.a.createElement("div",{className:"navbar"},r.a.createElement(d.b,{to:"".concat(e,"/Cashier"),className:"navbar__link",activeClassName:"navbar__link--active"},r.a.createElement("div",{className:"nav-item__wrapper"},r.a.createElement(b.a,{icon:h.e,size:"2x",className:"icon"}),r.a.createElement("p",null,"THU NG\xc2N"))),r.a.createElement(d.b,{to:"".concat(e,"/Manager"),className:"navbar__link",activeClassName:"navbar__link--active"},r.a.createElement("div",{className:"nav-item__wrapper"},r.a.createElement(b.a,{icon:h.p,size:"2x",className:"icon"}),r.a.createElement("p",null,"QU\u1ea2N L\xdd"))))),r.a.createElement("div",{className:"Admin__body"},r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"".concat(e,"/Cashier"),children:r.a.createElement(Be,null)}),r.a.createElement(E.b,{path:"".concat(e,"/Manager"),children:r.a.createElement(Xe,null)}),r.a.createElement(E.b,{path:e,render:function(){return r.a.createElement(E.a,{to:{pathname:"".concat(e,"/Cashier")}})}}))))};function Ye(){return r.a.createElement(d.a,null,r.a.createElement(E.d,null,r.a.createElement(Ze,{path:"/:name/Dashboard",children:r.a.createElement($e,null)}),r.a.createElement(Ze,{path:"/:name/Kitchen",children:r.a.createElement(D,null)}),r.a.createElement(E.b,{path:"/",children:r.a.createElement(H,null)})))}function Ze(e){var a=e.children,t=Object(m.a)(e,["children"]);return r.a.createElement(E.b,Object.assign({},t,{render:function(e){var t=e.location;return localStorage.getItem("token")?a:r.a.createElement(E.a,{to:{pathname:"/",state:{from:t}}})}}))}t(601);var ea=Object(o.a)({palette:{primary:{main:"#283593"},secondary:{main:"#e78200"},tertiary:{main:"rgba(0, 0, 1, 0.151)"}},overrides:{MuiButton:{root:{borderRadius:20,color:"gray",background:"white",outline:"none",boxShadow:"none"}}}},u.viVN);var aa=function(){return r.a.createElement(s.a,{theme:ea},r.a.createElement(Ye,null))},ta=t(66),na=t(296),ra=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_TABLE":return e=Object(K.a)({},a.payload);case"ADD_ORDER":var t=Object(K.a)({},e),n=a.payload;if(t.hasOwnProperty("Orders")){var r=t.Orders;if(r.find((function(e){return e._id===n._id}))){var l=r.findIndex((function(e){return e._id===n._id}));r[l].quantity+=1,r[l].totalPrice=r[l].price*r[l].quantity}else n.done=0,n.quantity=1,n.served=0,n.totalPrice=n.price,n.note="",r.push(n)}else n.done=0,n.quantity=1,n.served=0,n.totalPrice=n.price,n.note="",t.Orders=[n];return t;case"INCREASE_ORDER":var c=Object(G.a)(e.Orders),i=a.payload,o=c.findIndex((function(e){return e._id===i}));return c[o].quantity+=1,c[o].totalPrice=c[o].price*c[o].quantity,Object(K.a)({},e,{Orders:c});case"DECREASE_ORDER":var s=Object(G.a)(e.Orders),u=a.payload,m=s.findIndex((function(e){return e._id===u}));return s[m].quantity-=1,s[m].totalPrice=s[m].price*s[m].quantity,Object(K.a)({},e,{Orders:s});case"DELETE_ORDER":var d=Object(G.a)(e.Orders),E=a.payload,p=d.filter((function(e){return e._id!==E}));return Object(K.a)({},e,{Orders:p});case"NOTE_ORDER":var f=Object(G.a)(e.Orders),h=a.payload.orderId,b=f.findIndex((function(e){return e._id===h}));return b>=0&&(f[b].note=a.payload.textNote),Object(K.a)({},e,{Orders:f});default:return e}},la=Object(ta.combineReducers)({currentTable:ra}),ca=Object(ta.createStore)(la,Object(na.composeWithDevTools)());t(602),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:ca},r.a.createElement(r.a.StrictMode,null,r.a.createElement(aa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[341,1,2]]]);
//# sourceMappingURL=main.e51aa3ff.chunk.js.map