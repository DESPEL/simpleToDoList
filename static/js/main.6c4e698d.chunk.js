(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{73:function(e,t,a){e.exports=a(88)},78:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},80:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),l=(a(78),a(79),a(64)),i=a(126),s=a(127),m=a(38),u=a(10),d=(a(80),a(27)),p=a(32),g=a(117),f=a(4),E=a(128),b=a(121),h=a(122),v=a(129),O=a(130),S=a(120),k=a(132),x=a(123),N=a(124);function j(e){var t=Object(u.e)(),a=Object(u.f)().id,c=JSON.parse(localStorage.getItem("note-".concat(a))),r=Object(n.useState)(c.title),l=Object(d.a)(r,2),i=l[0],s=l[1],m=Object(n.useState)(c.content),j=Object(d.a)(m,2),y=j[0],w=j[1],I=Object(p.a)(),J=Object(g.a)({arrowBack:{color:I.palette.text.primary},deleteButton:{color:I.palette.error.main},contentInput:{backgroundColor:I.palette.background.paper,borderRadius:20,width:"100%",padding:8}}),C=Object(n.useState)(Object(f.a)({root:{width:"100%","& label.Mui-focused":{color:I.palette.background.paper},"& label":{color:I.palette.background.paper},"& .MuiOutlinedInput-root":{"& fieldset":{color:I.palette.background.white,borderColor:I.palette.background.paper},"&.Mui-focused fieldset":{color:I.palette.background.paper,borderColor:I.palette.background.paper}}}})(E.a)),B=Object(d.a)(C,1)[0],M=J();return o.a.createElement(b.a,null,o.a.createElement(h.a,{container:!0,spacing:3},o.a.createElement(h.a,{item:!0,xs:6},o.a.createElement(v.a,{display:"flex",flexDirection:"row"},o.a.createElement(O.a,{onClick:function(){return t.goBack()}},o.a.createElement(x.a,{className:M.arrowBack})))),o.a.createElement(h.a,{item:!0,xs:6},o.a.createElement(v.a,{display:"flex",flexDirection:"row-reverse"},o.a.createElement(O.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("note-ids"));e=e.filter((function(e){return e!==a})),localStorage.setItem("note-ids",JSON.stringify(e)),localStorage.removeItem("note-".concat(a)),t.goBack()}},o.a.createElement(N.a,{className:M.deleteButton})))),o.a.createElement(h.a,{item:!0,xs:12},o.a.createElement(B,{id:"title-".concat(a),label:"Title",variant:"outlined",value:i,onChange:function(e){c.title=e.target.value,localStorage.setItem("note-".concat(a),JSON.stringify(c)),s(e.target.value)}})),o.a.createElement(h.a,{item:!0,xs:12},o.a.createElement(S.a,{className:M.contentInput},o.a.createElement(k.a,{className:M.contentInput,value:y,onChange:function(e){c.content=e.target.value,localStorage.setItem("note-".concat(a),JSON.stringify(c)),w(e.target.value)},placeholder:"Write something...",inputProps:{"aria-label":"naked"},multiline:!0,rows:15,rowsMax:15})))))}var y=a(125),w=a(39),I=a.n(w),J=a(63),C=a.n(J),B=a(131),M=a(52),A=a.n(M),D=Object(g.a)({root:{height:48},content:{height:"100%",alignItems:"center"},text:{textAlign:"left",paddingLeft:4}}),P=Object(f.a)({root:{color:A.a[800],"&$checked":{color:I.a[500]}},checked:{}})((function(e){return o.a.createElement(B.a,Object.assign({onClick:function(e){e.stopPropagation()},color:"default"},e))}));function T(e){var t=D(),a=void 0===e.title?"untitled":e.title,c=e.id,r=Object(n.useState)(e.completed),l=Object(d.a)(r,2),i=l[0],s=l[1],m=i,p=Object(u.e)();return o.a.createElement(h.a,{item:!0,xs:12},o.a.createElement(S.a,{className:t.root,onClick:function(){p.push("/edit/".concat(c))}},o.a.createElement(h.a,{className:t.content,container:!0,spacing:1},o.a.createElement(h.a,{item:!0,xs:1},o.a.createElement(P,{className:t.checkbox,checked:m,onClick:function(t){t.stopPropagation();var a=JSON.parse(localStorage.getItem("note-".concat(c)));a.completed=!i,localStorage.setItem("note-".concat(c),JSON.stringify(a)),s(!i),e.update("".concat(c,",").concat(!i))}})),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(v.a,{className:t.text,textOverflow:"ellipsis",overflow:"hidden"},a)))))}var W=Object(g.a)({root:{height:48},content:{height:"100%",alignItems:"center"},text:{textAlign:"left"}});function L(){var e=W(),t=Object(u.e)();return o.a.createElement(h.a,{item:!0,xs:12},o.a.createElement(S.a,{className:e.root,onClick:function(e){var a=JSON.parse(localStorage.getItem("last-id"));null===a&&(a=-1);var n=JSON.parse(localStorage.getItem("note-ids"));null===n&&(n=[]);var o=a+1;n.push(o),localStorage.setItem("last-id",JSON.stringify(o)),localStorage.setItem("note-ids",JSON.stringify(n)),localStorage.setItem("note-".concat(o),JSON.stringify({title:"",content:"",completed:!1})),t.push("/edit/".concat(o))}},o.a.createElement(h.a,{className:e.content,container:!0},o.a.createElement(h.a,{item:!0,xs:1},"+"),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(v.a,{className:e.text,textOverflow:"ellipsis",overflow:"hidden"},"Create new note")))))}var R=Object(g.a)({content:{marginTop:"5vh"}});function $(e){var t=R(),a=Object(n.useState)("."),c=Object(d.a)(a,2)[1];return o.a.createElement("div",null,o.a.createElement(b.a,{className:t.content},o.a.createElement(v.a,{display:"flex",justifyContent:"center"},o.a.createElement(C.a,{style:{fontSize:100,color:I.a[400]}})),o.a.createElement(v.a,{display:"flex",justifyContent:"center"},o.a.createElement(y.a,{variant:"h3"},"To Do List")),o.a.createElement(h.a,{className:t.content,container:!0,spacing:1},o.a.createElement(L,null),function(e){var t=JSON.parse(localStorage.getItem("note-ids")).reverse();if(null!==t){var a=[];return t.forEach((function(t){var n=JSON.parse(localStorage.getItem("note-".concat(t)));n.completed||a.push(o.a.createElement(T,{id:t,title:n.title,completed:n.completed,update:e,key:t}))})),t.forEach((function(t){var n=JSON.parse(localStorage.getItem("note-".concat(t)));n.completed&&a.push(o.a.createElement(T,{id:t,title:n.title,completed:n.completed,update:e,key:t}))})),a}}(c))))}var z=Object(l.a)({palette:{background:{paper:"#222",default:"#000"},text:{primary:"#fff"},common:{black:"#fff",white:"#000"}},typography:{fontFamily:["Varela Round","sans-serif"].join(",")}});var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,{theme:z},o.a.createElement(s.a,null),o.a.createElement(m.a,{basename:"/"},o.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return o.a.createElement($,Object.assign({},e,{key:1}))}}),o.a.createElement(u.a,{exact:!0,path:"/edit/:id",render:function(e){return o.a.createElement(j,Object.assign({},e,{key:2}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.6c4e698d.chunk.js.map