(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),c=e(5),u=e(6),i=e(3),a=e.n(i),s=e(1),d=(e(12),e(0)),f=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){return l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)}))},j=function(){return l().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=function(){var t=Object(s.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1],r=function(){var t=Object(c.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return r(l)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return r(b)},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return r(j)},children:"Load red goods"}),Object(d.jsx)(f,{goods:e})]})};r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.08a2d828.chunk.js.map