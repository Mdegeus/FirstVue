(function(t){function e(e){for(var n,l,a=e[0],c=e[1],i=e[2],u=0,p=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={app:0},s=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"39b2":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Create",{attrs:{todos:t.todos}}),o("Todos",{attrs:{todos:t.todos}})],1)},s=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e,todos:t.todos}})],1)})),0)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-completed":t.todo.completed}},[o("p",[o("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{change:t.markcomplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"remove",on:{click:t.removeMe}},[t._v("X")])])])},i=[],d=(o("a434"),{name:"todoItem",props:["todo","todos"],methods:{markcomplete:function(){var t="todos",e=JSON.parse(localStorage.getItem(t)),o=this.todos.indexOf(this.todo);this.todo.completed=!this.todo.completed,e[o].completed=this.todo.completed,localStorage.setItem(t,JSON.stringify(e))},removeMe:function(){var t="todos",e=JSON.parse(localStorage.getItem(t)),o=this.todos.indexOf(this.todo);0===o?(this.todos.shift(),e.shift()):(this.todos.splice(o,o),e.splice(o,o)),localStorage.setItem(t,JSON.stringify(e))}}}),u=d,p=(o("acd1"),o("2877")),f=Object(p["a"])(u,c,i,!1,null,"6f4d5e44",null),m=f.exports,h={name:"Todos",components:{TodoItem:m},props:["todos"]},v=h,g=Object(p["a"])(v,l,a,!1,null,"53b16d01",null),b=g.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{staticClass:"todoTitleEntry",attrs:{type:"text",placeholder:"Todo Title"}}),o("button",{on:{click:t.makeTodo}},[t._v("Add")])])},O=[],S={name:"createTodo",props:["todos"],methods:{makeTodo:function(){var t="todos",e=JSON.parse(localStorage.getItem(t)),o=document.querySelector(".todoTitleEntry");if(o.value){var n={id:this.todos.length+1,title:o.value,completed:!1};console.log(this.todos.length),this.todos.push(n),e.push(n),o.textContent="",localStorage.setItem(t,JSON.stringify(e))}}}},_=S,x=Object(p["a"])(_,y,O,!1,null,null,null),T=x.exports,j="todos",k=localStorage.getItem(j);k||localStorage.setItem(j,JSON.stringify([]));var I=JSON.parse(localStorage.getItem(j)),w={name:"App",components:{Todos:b,Create:T},data:function(){return{todos:I}}},J=w,N=(o("034f"),Object(p["a"])(J,r,s,!1,null,null,null)),C=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,o){},acd1:function(t,e,o){"use strict";o("39b2")}});
//# sourceMappingURL=app.92f5946e.js.map