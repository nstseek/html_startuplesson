(window["webpackJsonpesquadrao-anti-praga"]=window["webpackJsonpesquadrao-anti-praga"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(10),r=a.n(o),i=(a(55),a(9)),c=a(11),u=a(6),l=a(12),d=a(13),g=a(14),p=(a(56),a(23)),m=a.n(p),h=a(26),f=a(21),E=a(22),b=a(118),O=a(119),v=(a(63),s.a.createElement("div",{className:"loading-fader"},s.a.createElement("div",{className:"loading-icon-container"},s.a.createElement(f.a,{icon:E.d,className:"loading-icon fa-spin"})))),S=function(e){return"https://us1.locationiq.com/v1/search.php?key=".concat(encodeURIComponent("d6514e1895bd6c"),"&q=").concat(encodeURIComponent(e),"&format=json&addressdetails=1")},C="http://10.32.223.68:8000/web",D=C+"/epidemias",y=function(e,t){return C+"/doencas-coord/".concat(e,"/").concat(t)},j=C+"/doencas",w=C+"/registra-medico",N=C+"/inclui",M=a(27),T=a.n(M),P=a(43),R=a.n(P);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).updateAddressList=Object(h.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.fieldEdited){e.next=8;break}return e.next=3,fetch("".concat(S(a.state.enderecoField)));case 3:return t=e.sent,e.next=6,t.json();case 6:(t=e.sent).error||(n=[],t.forEach((function(e){n.push(e.display_name)})),a.setState(k({},a.state,{enderecosCorrespondentes:t,fieldEdited:!1,sugestoes:n})));case 8:setTimeout(a.updateAddressList,1e3);case 9:case"end":return e.stop()}}),e)}))),a.fieldEdited=function(e){if(e&&"suggestion-selected"===e.reason){var t=a.state.enderecosCorrespondentes.find((function(t){return!(e.value!==t.display_name)}));a.setState(k({},a.state,{enderecoField:e.value,enderecoSelecionado:t,fieldEdited:!1,autosuggestThemeLocal:k({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container-hide"})})),a.props.setMapCoords({mapCoords:{lat:t.lat,lng:t.lon}})}else e&&e.value&&e.value.length>10&&"input-changed"===e.reason?a.setState(k({},a.state,{enderecoField:e.value,fieldEdited:!0,autosuggestThemeLocal:k({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container"})})):e.value&&e.value.length<=10?a.setState(k({},a.state,{enderecoField:e.value,sugestoes:[],autosuggestThemeLocal:k({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container-hide"})})):e.value||"input-changed"!==e.reason?e&&e.value&&a.setState(k({},a.state,{enderecoField:e.value})):a.setState(k({},a.state,{enderecoField:"",sugestoes:[],autosuggestThemeLocal:k({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container-hide"})}))},a.updateSenha=function(e){a.setState(k({},a.state,{usuario:k({},a.state.usuario,{senha:e})}))},a.updateNome=function(e){a.setState(k({},a.state,{usuario:k({},a.state.usuario,{nome:e})}))},a.updateCREMERS=function(e){a.setState(k({},a.state,{usuario:k({},a.state.usuario,{CREMERS:e})}))},a.cadastrar=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState(k({},a.state,{isLoading:!0})),e.next=3,fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({medico:{id:null,cremers:a.state.usuario.CREMERS,nome:a.state.usuario.nome,senha:a.state.usuario.senha}})});case 3:a.setState(k({},a.state,{isLoading:!1})),a.closeModal();case 5:case"end":return e.stop()}}),e)}))),a.setSearchField=function(e){a.setState(k({},a.state,{searchField:e.target.value}))},a.search=function(){a.props.setMapCoords({mapCoords:{lat:Number(a.state.enderecoSelecionado.lat),lng:Number(a.state.enderecoSelecionado.lon)}})},a.openModal=function(){a.setState(k({},a.state,{isModalOpen:!0}))},a.closeModal=function(){a.setState(k({},a.state,{isModalOpen:!1}))},a.state={searchField:"",isModalOpen:!1,isLoading:!1,usuario:{nome:"",CREMERS:"",senha:""},fieldEdited:!1,enderecoField:"",enderecosCorrespondentes:[],enderecoSelecionado:null,sugestoes:[],autosuggestThemeLocal:{input:"autosuggest-input-header",container:"autosuggest-container",suggestionsContainer:"autosuggest-suggest-container-hide",suggestion:"autosuggest-suggestion"}},a.updateAddressList(),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("."+this.state.autosuggestThemeLocal.input),t=document.createAttribute("placeholder");t.value="Digite um endere\xe7o",e&&e.setAttributeNode(t)}},{key:"render",value:function(){var e=this;return s.a.createElement("nav",{className:"header"},s.a.createElement("div",{className:"logo-container"},s.a.createElement("img",{className:"logo",src:R.a}),s.a.createElement("span",{className:"title"},"ASMEE")),s.a.createElement("div",{className:"search-bar-container"},s.a.createElement(T.a,{alwaysRenderSuggestions:!0,suggestions:this.state.sugestoes,onSuggestionsFetchRequested:this.fieldEdited,getSuggestionValue:function(e){return e},renderSuggestion:function(e){return s.a.createElement("span",null,e)},inputProps:{value:this.state.enderecoField,onChange:this.fieldEdited},id:"1",theme:this.state.autosuggestThemeLocal}),s.a.createElement("div",{onClick:this.search,className:"icon-container"},s.a.createElement(f.a,{icon:E.c,className:"icon search-icon"}))),s.a.createElement("div",{className:"login-container"},s.a.createElement("button",{className:"login-button",onClick:this.openModal},"Voc\xea \xe9 m\xe9dico? Clique aqui"),s.a.createElement(b.a,{"aria-labelledby":"Login","aria-describedby":"Login para credenciados",open:this.state.isModalOpen,onClose:this.closeModal,className:"modal-container"},s.a.createElement("div",{className:"modal-card"},s.a.createElement("div",null,s.a.createElement("span",null,"Crie sua conta")),s.a.createElement("div",{className:"margin-top-clear"},s.a.createElement("span",null,"CREMERS"),s.a.createElement(O.a,{placeholder:"Digite seu n\xfamero do CREMERS aqui",onChange:function(t){return e.updateCREMERS(t.target.value)},className:"input"}),s.a.createElement("span",null,"Nome"),s.a.createElement(O.a,{placeholder:"Digite seu nome",onChange:function(t){return e.updateNome(t.target.value)},className:"input"}),s.a.createElement("span",null,"Senha"),s.a.createElement(O.a,{className:"input",placeholder:"Crie uma senha",onChange:function(t){return e.updateSenha(t.target.value)},type:"password"})),this.state.isLoading?s.a.createElement(f.a,{icon:E.d,className:"loading-icon-signup fa-spin"}):"",s.a.createElement("button",{className:"modal-button margin-top-clear",onClick:this.cadastrar},"Cadastrar")))))}}]),t}(s.a.Component),I=a(46),A=a.n(I),U=(a(96),a(97),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).props.radius?a.state={radius:a.props.radius*a.props.radius}:a.state={radius:25},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{width:10,height:10,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:5,backgroundColor:"red",opacity:.5,transform:"scale(".concat(this.props.radius,")")}},s.a.createElement("span",{style:{margin:0,fontSize:2.5,color:"white"}},this.props.text))}}]),t}(s.a.Component));function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z,J={key:"AIzaSyByfiJMAWWpKRXV7rzbVdGpncPEcmHQsbY",language:"br",region:"br"},_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).lat=void 0,a.lng=void 0,a.mapDidMove=void 0,a.tempData=void 0,a.componentDidMount=function(){a.getEpidemias()},a.translateId=function(e){return a.props.doencas.find((function(t){return e.id===t.idDoenca})).nome},a.updateLatLng=function(e,t){a.lat=e,a.lng=t,a.mapDidMove=!0,a.setState(q({},a.state,{lat:a.lat,lng:a.lng}))},a.getEpidemias=function(){a.mapDidMove&&(console.log("to no epidemias"),console.log(a.lat,a.lng),a.props.setMapCoords({mapCoords:{lat:a.lat,lng:a.lng}}),fetch(D).then((function(e){return e.json()})).then((function(e){console.log(e),a.props.setDoencasEpidemias(e),a.setState(q({},a.state,{epidemias:e}))}))),setTimeout(a.getEpidemias,5e3)},a.lat=a.props.mapCoords.lat,a.lng=a.props.mapCoords.lng,a.mapDidMove=!0,a.state={epidemias:[],doencas:[],isLoading:!1,lat:a.lat,lng:a.lng},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.epidemias.map((function(t){return s.a.createElement(U,{lat:t.lat,lng:t.lng,text:e.translateId(t),radius:15+Math.random()})})),a=this.state.doencas.map((function(t){return s.a.createElement(U,{lat:t.lat,lng:t.lng,text:e.translateId(t),radius:1})})),n=this.state.isLoading?v:"";return s.a.createElement("div",{style:{height:"90vh",width:"100%"}},s.a.createElement(A.a,{bootstrapURLKeys:J,defaultZoom:15,defaultCenter:{lat:this.lat,lng:this.lng},center:{lat:this.props.mapCoords.lat,lng:this.props.mapCoords.lng},onDrag:function(t){e.updateLatLng(t.center.lat(),t.center.lng())}},a,t),n)}}]),t}(s.a.Component),V=(a(98),a(117));function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}!function(e){e[e.MEDICO=0]="MEDICO",e[e.OMS=1]="OMS"}(z||(z={}));var K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).sendData=function(){switch(a.state.tipoUsuario){case z.MEDICO:console.log(JSON.stringify({cremers:a.state.CREMERS,id_org:null,numeroEpidemia:null,senha:a.state.senha,idDoenca:a.state.doencasData.doencaSelecionada.idDoenca,lat:a.state.enderecoSelecionado.lat,lng:a.state.enderecoSelecionado.lon})),fetch(N,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cremers:a.state.CREMERS,id_org:null,numeroEpidemia:null,senha:a.state.senha,idDoenca:a.state.doencasData.doencaSelecionada.idDoenca,lat:a.state.enderecoSelecionado.lat,lng:a.state.enderecoSelecionado.lon})});break;case z.OMS:console.log(JSON.stringify({cremers:null,id_org:a.state.id,numeroEpidemia:Number(a.state.threshold),senha:a.state.senha,idDoenca:a.state.doencasData.doencaSelecionada.idDoenca,lat:null,lng:null})),fetch(N,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cremers:null,id_org:a.state.id,numeroEpidemia:Number(a.state.threshold),senha:a.state.senha,idDoenca:a.state.doencasData.doencaSelecionada.idDoenca,lat:null,lng:null})});break;default:throw new Error("USER NOT DEFINED")}},a.getSugestoesDoenca=function(e){if("input-changed"!==e.reason||e.value&&0!==e.value.length){if(!e.value&&e.value&&0===e.value.length)a.setState(B({},a.state,{doencasData:B({},a.state.doencasData,{sugestoes:[],doencasField:e.value})}));else if("suggestion-selected"===e.reason)a.setState(B({},a.state,{doencasData:B({},a.state.doencasData,{sugestoes:[],doencasField:e.value,doencaSelecionada:a.state.doencasData.doencas.find((function(t){return!(t.nome!==e.value)})),autosuggestTheme:B({},a.state.doencasData.autosuggestTheme,{suggestionsContainer:"autosuggest-suggest-container-hide"})})}));else if("input-changed"===e.reason){var t=a.state.doencasData.doencas.filter((function(t){return-1!==t.nome.indexOf(e.value)}));t=t.map((function(e){return e.nome})),a.setState(B({},a.state,{doencasData:B({},a.state.doencasData,{sugestoes:t,doencasField:e.value,autosuggestTheme:B({},a.state.doencasData.autosuggestTheme,{suggestionsContainer:"autosuggest-suggest-container"})})}))}}else a.setState(B({},a.state,{doencasData:B({},a.state.doencasData,{sugestoes:[],doencasField:e.value,autosuggestTheme:B({},a.state.doencasData.autosuggestTheme,{suggestionsContainer:"autosuggest-suggest-container-hide"})})}))},a.getDoencas=function(){fetch(j).then((function(e){return e.json()})).then((function(e){a.props.setTipoDoenca(e),a.setState(B({},a.state,{doencasData:B({},a.state.doencasData,{doencas:e,sugestoes:e.map((function(e){return e.nome}))})}))}))},a.updateThreshold=function(e){a.setState(B({},a.state,{threshold:e}))},a.updateUser=function(e){a.setState(B({},a.state,{tipoUsuario:e}))},a.fieldsComponent=function(){switch(a.state.tipoUsuario){case z.MEDICO:return"";case z.OMS:return s.a.createElement("div",{className:"input-field-auth"},s.a.createElement("span",null,"Limiar de epidemia"),s.a.createElement(O.a,{placeholder:"Insira o n\xfamero de casos para tornar-se uma epidemia",onChange:function(e){return a.updateThreshold(e.target.value)},className:"input-field"}));default:throw new Error("USER NOT DEFINED")}},a.authComponent=function(){switch(a.state.tipoUsuario){case z.MEDICO:return s.a.createElement("div",{className:"input-field-auth margin-top-clear"},s.a.createElement("span",null,"CREMERS"),s.a.createElement(O.a,{placeholder:"Digite seu n\xfamero de registro no CREMERS",onChange:a.updateCREMERS,className:"input-auth"}),s.a.createElement("span",null,"Senha"),s.a.createElement(O.a,{placeholder:"Digite sua senha",onChange:a.updateSenha,className:"input-auth",type:"password"}));case z.OMS:return s.a.createElement("div",{className:"input-field-auth margin-top-clear"},s.a.createElement("span",null,"ID"),s.a.createElement(O.a,{placeholder:"Digite seu ID de organiza\xe7\xe3o",onChange:a.updateId,className:"input-auth"}),s.a.createElement("span",null,"Senha"),s.a.createElement(O.a,{placeholder:"Digite sua senha",onChange:a.updateSenha,className:"input-auth"}));default:throw new Error("USER NOT DEFINED")}},a.updateSenha=function(e){a.setState(B({},a.state,{senha:e.target.value}))},a.updateId=function(e){a.setState(B({},a.state,{id:e.target.value}))},a.updateCREMERS=function(e){a.setState(B({},a.state,{CREMERS:e.target.value}))},a.fieldEdited=function(e){if(e&&"suggestion-selected"===e.reason){var t=a.state.enderecosCorrespondentes.find((function(t){return!(e.value!==t.display_name)}));a.setState(B({},a.state,{enderecoField:e.value,enderecoSelecionado:t,fieldEdited:!1,autosuggestThemeLocal:B({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container-hide"})}))}else e&&e.value&&e.value.length>10&&"input-changed"===e.reason?a.setState(B({},a.state,{enderecoField:e.value,fieldEdited:!0,autosuggestThemeLocal:B({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container"})})):e.value&&e.value.length<=10?a.setState(B({},a.state,{enderecoField:e.value,sugestoes:[],autosuggestThemeLocal:B({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container-hide"})})):e.value||"input-changed"!==e.reason?e&&e.value&&a.setState(B({},a.state,{enderecoField:e.value})):a.setState(B({},a.state,{enderecoField:"",sugestoes:[],autosuggestThemeLocal:B({},a.state.autosuggestThemeLocal,{suggestionsContainer:"autosuggest-suggest-container-hide"})}))},a.updateAddressList=Object(h.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.fieldEdited){e.next=8;break}return e.next=3,fetch("".concat(S(a.state.enderecoField)));case 3:return t=e.sent,e.next=6,t.json();case 6:(t=e.sent).error||(n=[],t.forEach((function(e){n.push(e.display_name)})),a.setState(B({},a.state,{enderecosCorrespondentes:t,fieldEdited:!1,sugestoes:n})));case 8:setTimeout(a.updateAddressList,1e3);case 9:case"end":return e.stop()}}),e)}))),a.state={fieldEdited:!1,enderecoField:"",enderecosCorrespondentes:[],enderecoSelecionado:null,sugestoes:[],autosuggestThemeLocal:{input:"autosuggest-input localizacao-input",container:"autosuggest-container",suggestionsContainer:"autosuggest-suggest-container-hide",suggestion:"autosuggest-suggestion"},tipoUsuario:z.MEDICO,senha:"",id:"",CREMERS:"",closed:!1,doencasData:{doencaSelecionada:null,doencas:[{idDoenca:0,nome:""}],sugestoes:[],doencasField:"",autosuggestTheme:{input:"autosuggest-input doenca-input",container:"autosuggest-container autosuggest-container-doenca",suggestionsContainer:"autosuggest-suggest-container-hide",suggestion:"autosuggest-suggestion"}},threshold:0},a.getDoencas(),a.updateAddressList(),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".doenca-input"),t=document.querySelector(".localizacao-input"),a=document.createAttribute("placeholder"),n=document.createAttribute("placeholder");a.value="Digite uma doen\xe7a para cadastro",n.value="Digite sua localiza\xe7\xe3o",e&&e.setAttributeNode(a),t&&t.setAttributeNode(n)}},{key:"componentDidUpdate",value:function(){var e=document.querySelector(".doenca-input"),t=document.querySelector(".localizacao-input"),a=document.createAttribute("placeholder"),n=document.createAttribute("placeholder");a.value="Digite uma doen\xe7a para cadastro",n.value="Digite sua localiza\xe7\xe3o",e&&e.setAttributeNode(a),t&&t.setAttributeNode(n)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"input-card-container ".concat(this.state.closed?"input-card-hidden":"")},this.state.closed?s.a.createElement("div",{className:"arrow",onClick:function(){return e.setState(B({},e.state,{closed:!1}))}},s.a.createElement(f.a,{icon:E.b})):s.a.createElement("div",{className:"arrow",onClick:function(){return e.setState(B({},e.state,{closed:!0}))}},s.a.createElement(f.a,{icon:E.a})),s.a.createElement("span",{className:"input-card-title"},"Insira seus dados e sintomas abaixo para adicionar ao mapa"),s.a.createElement("div",{className:"input-field"},s.a.createElement("span",null,"Voc\xea \xe9:"),s.a.createElement("div",{className:"radio-button-container"},s.a.createElement("span",null,"M\xe9dico"),s.a.createElement(V.a,{className:"radio-button",checked:this.state.tipoUsuario===z.MEDICO,onChange:function(t){t.target.checked&&e.updateUser(z.MEDICO)}})),s.a.createElement("div",{className:"radio-button-container"},s.a.createElement("span",null,"OMS"),s.a.createElement(V.a,{className:"radio-button",checked:this.state.tipoUsuario===z.OMS,onChange:function(t){t.target.checked&&e.updateUser(z.OMS)}})),this.authComponent(),this.state.tipoUsuario===z.MEDICO?s.a.createElement("span",null,"Localiza\xe7\xe3o"):"",this.state.tipoUsuario===z.MEDICO?s.a.createElement(T.a,{alwaysRenderSuggestions:!0,suggestions:this.state.sugestoes,onSuggestionsFetchRequested:this.fieldEdited,getSuggestionValue:function(e){return e},renderSuggestion:function(e){return s.a.createElement("span",null,e)},inputProps:{value:this.state.enderecoField,onChange:this.fieldEdited},id:"1",theme:this.state.autosuggestThemeLocal}):"",s.a.createElement("span",null,"Doen\xe7a"),s.a.createElement(T.a,{alwaysRenderSuggestions:!0,suggestions:this.state.doencasData.sugestoes,onSuggestionsFetchRequested:this.getSugestoesDoenca,getSuggestionValue:function(e){return e},renderSuggestion:function(e){return s.a.createElement("span",null,e)},inputProps:{value:this.state.doencasData.doencasField,onChange:this.getSugestoesDoenca},id:"1",theme:this.state.doencasData.autosuggestTheme}),this.fieldsComponent(),s.a.createElement("button",{onClick:this.sendData,className:"send-button"},"Enviar")))}}]),t}(s.a.Component);a(99);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).updateDoencas=function(){console.log(a.props.mapCoords.lat),console.log(a.props.mapCoords.lng),fetch(y(a.props.mapCoords.lat,a.props.mapCoords.lng)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state,{doencasArea:e}))})),setTimeout(a.updateDoencas,5e3)},a.state={doencasArea:null},a.updateDoencas(),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state);return s.a.createElement("div",{className:"info-card-container"},s.a.createElement("span",null,"Doen\xe7as registradas na sua \xe1rea"),s.a.createElement("ul",{className:"lista"},e.state.doencasArea?e.state.doencasArea.map((function(e){return s.a.createElement("li",{style:e.isEpidemia?{backgroundColor:"red",color:"white"}:{backgroundColor:"transparent",color:"black"}},e.nome," - ",e.quantidade," caso(s)")})):""))}}]),t}(s.a.Component);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y={lat:-30.056185,lng:-51.172118},Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).setTipoDoenca=function(e){a.setState(X({},a.state,{doencas:e}))},a.setDoencasEpidemias=function(e){console.log(e),a.setState(X({},a.state,{doencasEpidemias:e}))},a.setMapCoords=function(e){a.setState(e)},a.state={mapCoords:{lat:Y.lat,lng:Y.lng},doencasEpidemias:null,doencas:null},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(F,{setMapCoords:this.setMapCoords}),s.a.createElement(_,{setMapCoords:this.setMapCoords,mapCoords:this.state.mapCoords,setDoencasEpidemias:this.setDoencasEpidemias,doencas:this.state.doencas}),s.a.createElement(K,{setTipoDoenca:this.setTipoDoenca}),s.a.createElement(H,{mapCoords:this.state.mapCoords,doencas:this.state.doencas,doencasEpidemias:this.state.doencasEpidemias}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,a){e.exports=a.p+"static/media/Logo.f937cbfa.png"},50:function(e,t,a){e.exports=a(100)},55:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.0ae9ac2f.chunk.js.map