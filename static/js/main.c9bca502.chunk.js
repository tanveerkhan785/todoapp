(this.webpackJsonptodoreacts=this.webpackJsonptodoreacts||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),i=n.n(a),l=(n(13),n(14),n(8)),r=n(6),o=n(3),d=n.p+"static/media/todo.6e89c9bd.png",j=n(0),u=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(function(){var e=localStorage.getItem("lists");return console.log(e),e?JSON.parse(localStorage.getItem("lists")):[]}()),i=Object(o.a)(a,2),u=i[0],b=i[1],f=Object(c.useState)(!0),m=Object(o.a)(f,2),O=m[0],h=m[1],x=Object(c.useState)(null),g=Object(o.a)(x,2),v=g[0],p=g[1],I=function(){if(n)if(n&&!O)b(u.map((function(e){return e.id===v?Object(r.a)(Object(r.a)({},e),{},{name:n}):e}))),h(!0),s(""),p(null);else{var e={id:(new Date).getTime().toString(),name:n};b([].concat(Object(l.a)(u),[e])),s("")}else alert("plz fill the data")};return Object(c.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(u))}),[u]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:d,alt:"todologo"}),Object(j.jsx)("figcaption",{children:"Add Your List Here \ud83e\udd1e"})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u270d Add Items...",value:n,onChange:function(e){return s(e.target.value)}}),O?Object(j.jsx)("i",{class:"fa fa-plus add-btn",title:"Add Item",onClick:I}):Object(j.jsx)("i",{class:"fa fa-pencil-square-o add-btn",title:"Edit Item",onClick:I})]}),Object(j.jsx)("div",{className:"showItems",children:u.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"fa fa-pencil-square-o add-btn",title:"Edit Item",onClick:function(){return function(e){var t=u.find((function(t){return t.id===e}));console.log(t),h(!1),s(t.name),p(e)}(e.id)}}),Object(j.jsx)("i",{className:"fa fa-trash add-btn",title:"Delete Item",onClick:function(){return function(e){var t=u.filter((function(t){return e!==t.id}));b(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:[" ",Object(j.jsx)("span",{children:" CHECK LIST "})," "]})})]})})})},b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h3",{className:"footer",children:"Designed and Developed By Tanveer @ 2021"})})},f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.c9bca502.chunk.js.map