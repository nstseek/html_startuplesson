(window.webpackJsonpredux_thunk_react=window.webpackJsonpredux_thunk_react||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r,s=a(0),n=a.n(s),c=a(5),o=a.n(c),u=(a(26),a(3)),l=a(12),i=a(13),p=a(19),d=a(14),m=a(20),g=a(15),E=a.n(g),S=(a(27),a(6));!function(e){e.SAVE_MESSAGE="messages/SAVE_MESSAGE",e.CLEAR_MESSAGES="messages/CLEAR_MESSAGES",e.GET_ADDRESS_PENDING="messages/GET_ADDRESS_PENDING",e.GET_ADDRESS_SUCCESS="messages/GET_ADDRESS_SUCCESS",e.GET_ADDRESS_FAILED="messages/GET_ADDRESS_FAILED"}(r||(r={}));var f=r;function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h,D={messages:{}},b={addresses:{}};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}!function(e){e[e.message=0]="message",e[e.user=1]="user",e[e.cep=2]="cep",e[e.image=3]="image"}(h||(h={}));var _=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).parseAddress=function(e,t){var r=a.props.addressStore.addresses[t].address;return e.cep?n.a.createElement("div",{key:"".concat(t," address"),className:"address-data"},n.a.createElement("span",{className:"address-text",key:"".concat(t," street")},"".concat(r.logradouro,", ").concat(r.bairro)),n.a.createElement("span",{className:"address-text",key:"".concat(t," state")},"".concat(r.localidade," - ").concat(r.uf)),n.a.createElement("span",{className:"address-text",key:"".concat(t," country")},"Brasil")):n.a.createElement("span",{className:"address-data"},e.errorMsg)},a.saveUser=function(){a.props.saveMessage(a.state.user,a.state.message,a.state.image),a.props.getAddress(a.state.user,a.state.cep)},a.updateInput=function(e,t){switch(t){case h.user:return void a.setState((function(t){return A({},t,{user:e})}));case h.message:return void a.setState((function(t){return A({},t,{message:e})}));case h.cep:return void a.setState((function(t){return A({},t,{cep:e})}));case h.image:return void a.setState((function(t){return A({},t,{image:e})}));default:return}},a.state={message:"",user:"",cep:"",image:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.messagesStore.messages).map((function(t){return n.a.createElement("li",{className:"list-item",key:"".concat(t," list container")},n.a.createElement("div",{className:"item-container",key:"".concat(t," container")},n.a.createElement("img",{alt:"".concat(t," profile pic"),key:"".concat(t," profile pic"),src:e.props.messagesStore.messages[t].image,className:"profile-pic"}),n.a.createElement("div",{key:"".concat(t," data"),className:"user-data"},n.a.createElement("span",{className:"user-text",key:"".concat(t," username}")},t),n.a.createElement("span",{className:"user-text status",key:"".concat(t," status")},e.props.messagesStore.messages[t].message)),e.parseAddress(e.props.addressStore.addresses[t].address,t)))}));return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),n.a.createElement("h3",null,"Sistema de status e endereco usando Redux, Redux-Thunk e TypeScript"),n.a.createElement("div",null,n.a.createElement("span",{style:{margin:20}},"Digite seu usu\xe1rio"),n.a.createElement("input",{placeholder:"Digite um usu\xe1rio...",type:"text",value:this.state.user,onChange:function(t){return e.updateInput(t.target.value,h.user)}})),n.a.createElement("div",null,n.a.createElement("span",{style:{margin:20}},"Digite uma mensagem"),n.a.createElement("input",{placeholder:"Digite sua mensagem...",type:"text",value:this.state.message,onChange:function(t){return e.updateInput(t.target.value,h.message)}})),n.a.createElement("div",null,n.a.createElement("span",{style:{margin:20}},"Digite uma URI para sua foto de perfil"),n.a.createElement("input",{placeholder:"Digite a URI...",type:"text",value:this.state.image,onChange:function(t){return e.updateInput(t.target.value,h.image)}})),n.a.createElement("div",null,n.a.createElement("span",{style:{margin:20}},"Digite seu cep"),n.a.createElement("input",{placeholder:"Digite seu cep...",type:"text",value:this.state.cep,onChange:function(t){return e.updateInput(t.target.value,h.cep)}})),n.a.createElement("div",null,n.a.createElement("button",{style:{margin:20},onClick:this.saveUser},"Send"),n.a.createElement("button",{style:{margin:20},onClick:this.props.clearMessages},"Clear")),n.a.createElement("ul",null,t)))}}]),t}(n.a.Component),j=Object(S.b)((function(e){return{messagesStore:e.messagesReducer,addressStore:e.addressReducer}}),(function(e){return{saveMessage:function(t,a,r){return e(function(e,t,a){return{type:f.SAVE_MESSAGE,payload:{user:e,message:t,image:a}}}(t,a,r))},clearMessages:function(){return e({type:f.CLEAR_MESSAGES,payload:null})},getAddress:function(t,a){return function(e,t,a){e({type:f.GET_ADDRESS_PENDING,payload:{cep:null,logradouro:null,complemento:null,bairro:null,localidade:null,uf:null,unidade:null,ibge:null,gia:null,user:t,errorMsg:"Loading..."}}),fetch("https://viacep.com.br/ws/".concat(a,"/json/")).then((function(e){return e.json()})).then((function(a){e({type:f.GET_ADDRESS_SUCCESS,payload:Object.assign(a,{user:t})})})).catch((function(){e({type:f.GET_ADDRESS_FAILED,payload:{cep:null,logradouro:null,complemento:null,bairro:null,localidade:null,uf:null,unidade:null,ibge:null,gia:null,user:t,errorMsg:"Failed to fetch address"}})}))}(e,t,a)}}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(4),G=a(17),R=a(18),k=a.n(R),N=w.c({messagesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SAVE_MESSAGE:return{messages:v({},e.messages,Object(u.a)({},t.payload.user,{message:t.payload.message,image:t.payload.image}))};case f.CLEAR_MESSAGES:return D;default:return e}},addressReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.GET_ADDRESS_PENDING:case f.GET_ADDRESS_SUCCESS:case f.GET_ADDRESS_FAILED:return{addresses:v({},e.addresses,Object(u.a)({},t.payload.user,{address:t.payload}))};default:return e}}}),C=w.d(N,w.a(G.a,k.a)),P=n.a.createElement(S.a,{store:C},n.a.createElement(j,null));o.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.38b87dc7.chunk.js.map