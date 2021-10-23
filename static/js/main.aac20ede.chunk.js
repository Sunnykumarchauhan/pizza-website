(this["webpackJsonpreact-cart"]=this["webpackJsonpreact-cart"]||[]).push([[0],{16:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c(18),n=c.n(l),a=(c(16),c(8)),i=c(4),r=c(2),b=c(9),j=Object(s.createContext)(null),m=c(0),d=function(e){var t=Object(s.useState)(!1),c=Object(a.a)(t,2),l=c[0],n=c[1],r=Object(s.useContext)(j),d=r.cart,o=r.setCart,x=e.product;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(i.b,{to:"/products/".concat(x.id),children:Object(m.jsxs)("div",{className:"flex flex-col justify-between items-center lg:block",children:[Object(m.jsx)("img",{className:"w-2/3 lg:w-full",src:x.img,alt:"product"}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h2",{className:"mt-4 mb-4 text-lg py-2 font-bold",children:x.name}),Object(m.jsx)("span",{className:"bg-gray-200 py-1 rounded-full px-4 text-sm",children:x.size})]}),Object(m.jsxs)("div",{className:"w-3/5 lg:w-full flex items-center justify-between mt-4",children:[Object(m.jsxs)("span",{className:"font-bold",children:["\u20b9 ",x.price]}),Object(m.jsxs)("button",{disabled:l,onClick:function(e){!function(e,t){e.preventDefault();var c=Object(b.a)({},d);c.items||(c.items={}),c.items[t.id]?c.items[t.id]+=1:c.items[t.id]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,o(c),n(!0),setTimeout((function(){n(!1)}),1e3)}(e,x)},className:"".concat(l?"bg-green-500":"bg-yellow-500","\n                         bg-yellow-500 py-1 px-4 rounded-full font-bold"),children:["Add",l?"ed":""]})]})]})})})},o=[{id:"7b623b62-6f1b-4817-bae1-97e5ec4a7a4c",name:"Havana special",size:"small",price:599,img:"/images/pizza.png"},{id:"542ea94c-b5a4-461b-8cd8-d3221fd9988b",name:"Margerita",size:"large",price:699,img:"/images/pizza.png"},{id:"4704a7da-8547-41f0-a439-407fb1877189",name:"Peperoni",size:"small",price:399,img:"/images/pizza.png"},{id:"24f9d7cc-ea98-490f-b369-4ab5ccb44bc9",name:"Havan Special",size:"medium",price:549,img:"/images/pizza.png"},{id:"3f47ef7b-0940-4302-b3cb-53c03f0213eb",name:"Margerita",size:"small",price:499,img:"/images/pizza.png"},{id:"22fec6f8-09c9-4079-8367-17181de63b64",name:"peperoni",size:"large",price:799,img:"/images/pizza.png"},{id:"b58d32f4-213a-4baf-be8b-8d55dd232e68",name:"Havan Special",size:"medium",price:549,img:"/images/pizza.png"},{id:"22fec6f8-06c9-4279-8363-17181de63b64",name:"peperoni",size:"large",price:799,img:"/images/pizza.png"},{id:"b58d31f4-219a-4baf-be8b-8d55fd282e68",name:"Havan Special",size:"medium",price:549,img:"/images/pizza.png"}],x=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){l(o)}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-11/12 lg:w-10/12 mx-auto pb-24",children:[Object(m.jsx)("h1",{className:"text-2xl lg:text-lg font-bold my-4 lg:my-8",children:"Products"}),Object(m.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-8 gap-24 ",children:c.map((function(e){return Object(m.jsx)(d,{product:e},e.id)}))})]})})},u=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"bg-gray-200 lg:bg-white hero py-16",children:Object(m.jsxs)("div",{className:" w-11/12 lg:w-10/12 mx-auto flex flex-col-reverse items-center justify-between lg:flex-row",children:[Object(m.jsxs)("div",{className:"w-11/12 mt-16 lg:mt-0 lg:w-1/2",children:[Object(m.jsx)("h6",{className:"text-lg ",children:Object(m.jsx)("em",{children:"Are you hungry?"})}),Object(m.jsx)("h1",{className:"text-5xl lg:text-6xl font-bold text-yellow-800",children:"Don't wait!"}),Object(m.jsx)(i.b,{to:"/products",children:Object(m.jsx)("button",{className:"px-6 py-2 text-white rounded-full mt-4 font-bold bg-yellow-500 hover:bg-yellow-600",children:"Order Now"})})]}),Object(m.jsx)("div",{className:"w-11/12 lg:w-1/2",children:Object(m.jsx)("img",{className:"w-full lg:w-4/5",src:"images/pizza.png",alt:"pizza"})})]})}),Object(m.jsx)("div",{className:"pb-12 lg:pb-24",children:Object(m.jsx)(x,{})})]})},g=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"mt-16 mb-28 w-4/5 mx-auto flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between ",children:[Object(m.jsxs)("div",{className:" md:w-2/3 lg:w-1/2",children:[Object(m.jsx)("h1",{className:"text-6xl font-bold text-yellow-800 mb-4",children:"About Us"}),Object(m.jsxs)("h2",{className:"text-2xl my-2 font-semibold",children:["Hey !",Object(m.jsx)("br",{})," My name is Sunny Chauhan"]}),Object(m.jsxs)("h3",{className:"text-xl",children:["I am a ",Object(m.jsx)("span",{className:"text-green-600",children:"Frontend Web Developer"})]}),Object(m.jsxs)("ul",{className:"flex items-center justify-between w-2/3 lg:w-1/3 mt-6 rounded-md",children:[Object(m.jsx)("li",{className:"bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ",children:Object(m.jsx)("img",{className:"w-4",src:"/images/facebook.png",alt:"links"})})}),Object(m.jsx)("li",{className:"bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://twitter.com/SunnyCh95881681",children:Object(m.jsx)("img",{src:"/images/twitter.png",alt:"links"})})}),Object(m.jsx)("li",{className:"bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://www.instagram.com/sunny674195/",children:Object(m.jsx)("img",{src:"/images/instagram.png",alt:"links"})})}),Object(m.jsx)("li",{className:"bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ",children:Object(m.jsx)("img",{src:"/images/youtube.png",alt:"links"})})})]})]}),Object(m.jsx)("div",{className:"mb-20 lg:mb-0 flex justify-center",children:Object(m.jsx)("img",{className:"w-full lg:w-3/4",src:"/images/about.svg",alt:"About us"})})]})})},h=function(){var e=Object(s.useContext)(j).cart;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{className:"w-11/12 lg:w-10/12 mx-auto flex justify-between items-center py-4",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("img",{style:{height:45},src:"/images/logo.png",alt:"logo"})}),Object(m.jsxs)("ul",{className:"flex items-center",children:[Object(m.jsx)("li",{className:"hover:text-red-700 hidden lg:block",children:Object(m.jsx)(i.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{className:"ml-6 hover:text-red-700 hidden lg:block",children:Object(m.jsx)(i.b,{to:"/products",children:"Product"})}),Object(m.jsx)("li",{className:"ml-6 hover:text-red-700 hidden lg:block",children:Object(m.jsx)(i.b,{to:"/about",children:"About"})}),Object(m.jsx)("li",{className:"ml-6",children:Object(m.jsx)(i.b,{to:"/cart",children:Object(m.jsxs)("div",{className:"bg-yellow-500 rounded-full py-1 px-3 flex items-center hover:bg-yellow-600",children:[Object(m.jsx)("span",{className:"text-white font-bold",children:e.totalItems?e.totalItems:0}),Object(m.jsx)("img",{className:"ml-4",src:"/images/cart.png",alt:"cart"})]})})})]})]})})},f=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(x,{})})},O=c(21),p=function(){var e=0,t=Object(s.useState)([]),c=Object(a.a)(t,2),l=c[0],n=c[1],r=Object(s.useContext)(j),d=r.cart,x=r.setCart;Object(O.useEffect)((function(){if(d.items){var e=Object.keys(d.items),t=o.filter((function(t){return-1!==e.indexOf(t.id)}));n(t)}}),[d]);var u=function(e){return d.items[e]},g=function(t,c){var s=c*u(t);return e+=s,s};return l.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-10/12 mx-auto lg:w-1/2 pb-24",children:[Object(m.jsx)("h1",{className:"my-12 font-bold",children:"Cart Items"}),Object(m.jsx)("ul",{children:l.map((function(e){return Object(m.jsx)("li",{className:"mb-12",children:Object(m.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between lg:items-center",children:[Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("img",{className:"h-16",src:e.img,alt:"pizza"}),Object(m.jsx)("span",{className:"font-bold ml-4 w-48",children:e.name})]}),Object(m.jsxs)("div",{className:"mt-4 lg:mt-0",children:[Object(m.jsx)("button",{onClick:function(){!function(e){var t=d.items[e];if(1!==t){var c=Object(b.a)({},d);c.items[e]=t-1,c.totalItems-=1,x(c)}}(e.id)},className:"bg-yellow-500 px-4 py-2 rounded-full leading-none",children:"-"}),Object(m.jsx)("b",{className:"px-4",children:u(e.id)}),Object(m.jsx)("button",{onClick:function(){!function(e){var t=d.items[e],c=Object(b.a)({},d);c.items[e]=t+1,c.totalItems+=1,x(c)}(e.id)},className:"bg-yellow-500 px-4 py-2 rounded-full leading-none",children:"+"})]}),Object(m.jsxs)("span",{className:"font-bold mt-6 mb-6 lg:mt-0 lg:mb-0",children:["\u20b9 ",g(e.id,e.price)]}),Object(m.jsx)("button",{onClick:function(){!function(e){var t=Object(b.a)({},d),c=t.items[e];delete t.items[e],t.totalItems-=c,x(t),n(l.filter((function(t){return t.id!==e})))}(e.id)},className:"w-1/2 lg:w-1/5 bg-red-500 px-4 py-2 rounded-full leading-none text-white hover:bg-red-600",children:"Delete"})]})},e.id)}))}),Object(m.jsx)("hr",{className:"my-6"}),Object(m.jsx)("div",{className:"text-right",children:Object(m.jsxs)("b",{children:["Grand Total: \u20b9 ",e]})}),Object(m.jsx)("div",{className:"text-right mt-6",children:Object(m.jsx)("button",{onClick:function(){window.alert("Order placed succesfully!"),n([]),x([])},className:"font-bold bg-yellow-500 py-2 px-4 rounded-full leading-none hover:bg-yellow-600",children:"Order now"})})]})}):Object(m.jsxs)("div",{className:"mb-40 lg:mb-32 flex flex-col items-center justify-between",children:[Object(m.jsx)("h1",{className:"font-bold text-3xl text-red-600 text-center",children:"Cart empty !"}),Object(m.jsx)("img",{className:"mx-auto w-1/2 lg:w-1/3 mt-12",src:"/images/empty-cart.png",alt:"empty cart"}),Object(m.jsx)(i.b,{to:"/products",children:Object(m.jsx)("button",{className:" mt-16 text-center font-bold bg-yellow-500 py-2 px-4 rounded-full w-28 leading-none hover:bg-yellow-600",children:"Go Back"})})]})},w=c(15),y=function(){var e=Object(s.useState)({}),t=Object(a.a)(e,2),c=t[0],l=t[1],n=Object(w.useParams)(),i=Object(w.useHistory)(),r=Object(s.useState)(!1),d=Object(a.a)(r,2),x=d[0],u=d[1],g=Object(s.useContext)(j),h=g.cart,f=g.setCart;Object(s.useEffect)((function(){var e=o.find((function(e){return e.id===n._id}));l(e)}),[n._id]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-10/12 mx-auto mt-12 mb-40 lg:mb-10",children:[Object(m.jsx)("button",{className:"mb-12 font-bold",onClick:function(){i.goBack()},children:"Back"}),Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("img",{className:"w-1/3 lg:w-1/6",src:c.img,alt:"pizza"}),Object(m.jsxs)("div",{className:"ml-16",children:[Object(m.jsx)("h1",{className:"text-xl font-bold",children:c.name}),Object(m.jsx)("div",{className:"font-bold text-gray-700 text-md",children:c.size}),Object(m.jsxs)("div",{className:"font-bold mt-2",children:["\u20b9 ",c.price]}),Object(m.jsx)("button",{className:"".concat(x?"bg-green-500":"bg-yellow-500","\n                         bg-yellow-500 py-2 mt-6 px-4 rounded-full font-bold"),onClick:function(e){!function(e,t){e.preventDefault();var c=Object(b.a)({},h);c.items||(c.items={}),c.items[t.id]?c.items[t.id]+=1:c.items[t.id]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,f(c),u(!0),setTimeout((function(){u(!1)}),1e3)}(e,c)},children:x?"Added":"Add to cart"})]})]})]})})},N=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"bg-gray-200 w-full py-6",children:Object(m.jsxs)("div",{className:"w-10/12 mx-auto flex flex-col jusitify-center items-center",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/images/logo.png",alt:"logo"})}),Object(m.jsxs)("ul",{className:"flex jusify-between mt-6",children:[Object(m.jsx)(i.b,{to:"/about",children:Object(m.jsx)("li",{className:"font-bold text-gray-700 ",children:"About"})}),Object(m.jsx)("li",{className:"font-bold text-gray-700 ml-5 lg:ml-8",children:"Contact"}),Object(m.jsx)("li",{className:"font-bold text-gray-700 ml-5 lg:ml-8",children:"FAQ"}),Object(m.jsx)(i.b,{to:"/products",children:Object(m.jsx)("li",{className:"font-bold text-gray-700 ml-5 lg:ml-8",children:"Products"})}),Object(m.jsx)("li",{className:"font-bold text-gray-700 ml-5 lg:ml-8",children:"Legal"})]}),Object(m.jsx)("h1",{className:"mt-8 text-xl font-bold",children:"Stay in touch"}),Object(m.jsxs)("ul",{className:"flex items-center justify-around mt-6 mb-8 rounded-md",children:[Object(m.jsx)("li",{className:"bg-red-400 hover:bg-red-500 flex items-center justify-center  p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ",children:Object(m.jsx)("img",{className:"w-4",src:"/images/facebook.png",alt:"links"})})}),Object(m.jsx)("li",{className:"bg-green-400 hover:bg-green-500 flex items-center justify-center  ml-5 p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://twitter.com/SunnyCh95881681",children:Object(m.jsx)("img",{src:"/images/twitter.png",alt:"links"})})}),Object(m.jsx)("li",{className:"bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center  ml-5 p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://www.instagram.com/sunny674195/",children:Object(m.jsx)("img",{src:"/images/instagram.png",alt:"links"})})}),Object(m.jsx)("li",{className:"bg-indigo-400 hover:bg-indigo-500 flex items-center justify-center  ml-5 p-2 rounded-full",children:Object(m.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ",children:Object(m.jsx)("img",{src:"/images/youtube.png",alt:"links"})})})]}),Object(m.jsx)("p",{className:"font-semibold text-gray-500",children:"\xa92021 Pizza. All Rights Reserved."})]})})})},v=function(){var e=Object(s.useState)({}),t=Object(a.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){var e=window.localStorage.getItem("cart");l(JSON.parse(e))}),[]),Object(s.useEffect)((function(){window.localStorage.setItem("cart",JSON.stringify(c))}),[c]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(j.Provider,{value:{cart:c,setCart:l},children:[Object(m.jsx)(h,{}),Object(m.jsxs)(r.Switch,{children:[Object(m.jsx)(r.Route,{path:"/",exact:!0,component:u}),Object(m.jsx)(r.Route,{path:"/products",exact:!0,component:f}),Object(m.jsx)(r.Route,{path:"/products/:_id",component:y}),Object(m.jsx)(r.Route,{path:"/about",component:g}),Object(m.jsx)(r.Route,{path:"/cart",component:p})]}),Object(m.jsx)(N,{})]})})})};n.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.aac20ede.chunk.js.map