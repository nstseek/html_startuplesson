(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},16:function(e,a,n){},18:function(e,a,n){},22:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),o=n.n(i),c=(n(14),n(1)),l=n(2),s=n(4),m=n(3),u=n(5),h=(n(16),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for robots here",onChange:this.props.eventFunc}))}}]),a}(r.a.Component)),d=(n(18),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"Profile pic",src:"https://robohash.org/".concat(this.props.id,"lulzaodob")}),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.name),r.a.createElement("h2",null,this.props.email)))}}]),a}(t.Component)),b=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"createCard",value:function(e){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email})}},{key:"render",value:function(){var e=this.props.arrayObjs.map(this.createCard);return r.a.createElement("div",null,e)}}]),a}(r.a.Component),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={objList:p,searchField:""},e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state.objList.filter(function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(h,{eventFunc:this.onSearchChange}),r.a.createElement("hr",null),r.a.createElement(b,{arrayObjs:a}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20);o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.7855d5ac.chunk.js.map