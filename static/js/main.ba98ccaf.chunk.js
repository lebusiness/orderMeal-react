(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9","invalid-inp":"Checkout_invalid-inp__25kB6"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t","lds-ring":"Cart_lds-ring__2F05W"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={meals:"MealsList_meals__1AclI","meals-appear":"MealsList_meals-appear__AH5jF","lds-ring":"MealsList_lds-ring__3pfMN",error:"MealsList_error__2N6fM"}},function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),s=n(1),i=n.n(s),o=n(6),l=n(12),d=n(5),u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(13),m=n.n(j),b=n(10),O=n.n(b),p=n(0),x=function(e){var t=e.onHideCart;return Object(p.jsx)("div",{className:m.a.backdrop,onClick:t})},h=function(e){var t=e.children;return Object(p.jsx)("div",{className:m.a.modal,children:Object(p.jsx)("div",{className:m.a.content,children:t})})},f=document.getElementById("overlays"),_=function(e){var t=e.children,n=e.onHideCart;return Object(p.jsxs)(p.Fragment,{children:[O.a.createPortal(Object(p.jsx)(x,{onHideCart:n}),f),O.a.createPortal(Object(p.jsx)(h,{children:t}),f)]})},v=n(7),C=n.n(v),N=function(e){var t=e.name,n=e.price,c=e.amount,a=e.onRemove,r=e.onAdd;return Object(p.jsxs)("li",{className:C.a["cart-item"],children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t}),Object(p.jsxs)("div",{className:C.a.summary,children:[Object(p.jsxs)("span",{className:C.a.price,children:[n,"\u20bd"]}),Object(p.jsxs)("span",{className:C.a.amount,children:["x ",c]})]})]}),Object(p.jsxs)("div",{className:C.a.actions,children:[Object(p.jsx)("button",{onClick:a,children:"\u2212"}),Object(p.jsx)("button",{onClick:r,children:"+"})]})]})},g=n(4),k=n.n(g),w=n(3),y=n.n(w),I=function(e){return""===e.trim()},M=function(e){var t=e.onCancel,n=e.onSumbitOrder,c=Object(s.useState)({address:!0,number:!0}),a=Object(r.a)(c,2),i=a[0],o=a[1],l=Object(s.useRef)(),d=Object(s.useRef)();return Object(p.jsxs)("form",{className:y.a.form,onSubmit:function(e){e.preventDefault();var t=l.current.value,c=d.current.value,a=!I(t),r=!I(c),s=a&&r;o({address:a,number:r}),s&&n({address:t,number:c})},children:[Object(p.jsxs)("div",{className:"".concat(y.a.control," ").concat(i.address?"":y.a.invalid),children:[Object(p.jsx)("label",{htmlFor:"address",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(p.jsx)("input",{type:"text",id:"address",ref:l,placeholder:"Moscow, 129090"}),!i.address&&Object(p.jsx)("p",{className:y.a["invalid-inp"],placeholder:"Moscow, 129090",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"})]}),Object(p.jsxs)("div",{className:"".concat(y.a.control," ").concat(i.number?"":y.a.invalid),children:[Object(p.jsx)("label",{htmlFor:"number",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(p.jsx)("input",{type:"text",id:"number",ref:d,placeholder:"89655543990"}),!i.number&&Object(p.jsx)("p",{className:y.a["invalid-inp"],children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440"})]}),Object(p.jsxs)("div",{className:y.a.actions,children:[Object(p.jsx)("button",{type:"button",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(p.jsx)("button",{className:y.a.submit,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})},A=function(e){var t=e.onHideCart,n=Object(s.useState)(!1),c=Object(r.a)(n,2),a=c[0],i=c[1],j=Object(s.useState)(!1),m=Object(r.a)(j,2),b=m[0],O=m[1],x=Object(s.useState)(!1),h=Object(r.a)(x,2),f=h[0],v=h[1],C=Object(s.useContext)(u),g=C.items.length>0,w=function(e){C.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},y=function(e){C.removeItem(e)},I=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://ordermeal-c0474-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:C.items})});case 3:O(!1),v(!0),C.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(p.jsx)("ul",{className:k.a["cart-items"],children:C.items.map((function(e){return Object(p.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onAdd:w.bind(null,e),onRemove:y.bind(null,e.id)},e.key)}))}),S=Object(p.jsxs)("div",{className:k.a.actions,children:[Object(p.jsx)("button",{className:k.a["button--alt"],onClick:t,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),g&&Object(p.jsx)("button",{className:k.a.button,onClick:function(){i(!0)},children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]}),H=Object(p.jsxs)("div",{className:k.a["lds-ring"],children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]}),F=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d, \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442 \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0443\u0442\u044c\u0441\u044f."}),Object(p.jsx)("div",{className:k.a.actions,children:Object(p.jsx)("button",{className:k.a.button,onClick:t,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]});return Object(p.jsxs)(_,{onHideCart:t,children:[!b&&!f&&Object(p.jsxs)(p.Fragment,{children:[A,Object(p.jsxs)("div",{className:k.a.total,children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0447\u0435\u0442"}),Object(p.jsxs)("span",{children:[C.totalAmount,"\u20bd"]})]}),a&&Object(p.jsx)(M,{onSumbitOrder:I,onCancel:t}),!a&&S]}),b&&H,!b&&f&&F]})},S=n.p+"orderMeal-react/static/media/meals.2971f633.jpg",H=n(16),F=n.n(H),E=function(){return Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},R=n(9),B=n.n(R),D=function(e){var t=e.onClick,n=Object(s.useContext)(u),c=Object(s.useState)(!1),a=Object(r.a)(c,2),i=a[0],o=a[1],l=n.items;Object(s.useEffect)((function(){0!==l.length&&(o(!0),setTimeout((function(){o(!1)}),200))}),[l]);var d=l.reduce((function(e,t){return e+t.amount}),0),j="".concat(B.a.button," ").concat(i?B.a.bump:"");return Object(p.jsxs)("button",{className:j,onClick:t,children:[Object(p.jsx)("span",{className:B.a.icon,children:Object(p.jsx)(E,{})}),Object(p.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(p.jsx)("span",{className:B.a.badge,children:d})]})},L=function(e){var t=e.onShowCart;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:F.a.header,children:[Object(p.jsx)("h1",{children:"orderMeal.ru"}),Object(p.jsx)(D,{onClick:t})]}),Object(p.jsx)("div",{className:F.a["main-image"],children:Object(p.jsx)("img",{src:S,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0441\u0442\u043e\u043b\u0430 \u0435\u0434\u044b"})})]})},P=n(20),T=n.n(P),z=function(e){return Object(p.jsx)("div",{className:T.a.card,children:e.children})},J=n(21),U=n.n(J),V=i.a.forwardRef((function(e,t){var n=e.input,c=e.label;return Object(p.jsxs)("div",{className:U.a.input,children:[Object(p.jsx)("label",{htmlFor:n.id,children:c}),Object(p.jsx)("input",Object(d.a)({ref:t},n))]})})),Q=n(22),X=n.n(Q),Z=function(e){var t=e.id,n=e.onAddToCart,c=e.amount,a=Object(s.useRef)();return Object(p.jsxs)("form",{className:X.a.form,onSubmit:function(e){e.preventDefault();var t=+a.current.value;t<1||t>5||0===t.length||n(t)},children:[Object(p.jsx)(V,{ref:a,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",input:{id:"amount_".concat(t),type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(p.jsx)("button",{children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(p.jsxs)("p",{children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e: ",c,"\u0448\u0442."]})]})},q=n(14),W=n.n(q),G=function(e){var t,n,c=e.name,a=e.description,r=e.price,i=e.id,o=Object(s.useContext)(u),l=o.items.findIndex((function(e){return e.id===i})),d=null!==(t=null===(n=o.items[l])||void 0===n?void 0:n.amount)&&void 0!==t?t:0;return Object(p.jsxs)("li",{className:W.a.meal,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:c}),Object(p.jsx)("p",{className:W.a.description,children:a}),Object(p.jsxs)("span",{className:W.a.price,children:[r,"\u20bd"]})]}),Object(p.jsx)(Z,{id:i,onAddToCart:function(e){o.addItem({key:i,id:i,name:c,amount:e,price:r})},amount:d})]})},K=n(15),Y=n.n(K),$=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),i=Object(r.a)(a,2),d=i[0],u=i[1];Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ordermeal-c0474-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(e.message)}))}),[]);var j=n.map((function(e){return Object(p.jsx)(G,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return d?Object(p.jsx)("p",{className:Y.a.error,children:d}):Object(p.jsxs)(p.Fragment,{children:[0===n.length&&Object(p.jsxs)("div",{className:Y.a["lds-ring"],children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]}),0!==n.length&&Object(p.jsx)("section",{className:Y.a.meals,children:Object(p.jsx)(z,{children:Object(p.jsx)("ul",{children:j})})})]})},ee=n(23),te=n.n(ee),ne=function(){return Object(p.jsxs)("section",{className:te.a.summary,children:[Object(p.jsx)("h2",{children:"\u0412\u043a\u0443\u0441\u043d\u0430\u044f \u0435\u0434\u0430, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u044f\u043c\u043e \u043a \u0412\u0430\u043c"}),Object(p.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0435 \u0431\u043b\u044e\u0434\u043e \u0438\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u0431\u043b\u044e\u0434 \u0438 \u043d\u0430\u0441\u043b\u0430\u0434\u0438\u0442\u0435\u0441\u044c \u0432\u043a\u0443\u0441\u043d\u044b\u043c \u043e\u0431\u0435\u0434\u043e\u043c \u0438\u043b\u0438 \u0443\u0436\u0438\u043d\u043e\u043c \u0434\u043e\u043c\u0430. \u0412\u0441\u0435 \u043d\u0430\u0448\u0438 \u0431\u043b\u044e\u0434\u0430 \u0433\u043e\u0442\u043e\u0432\u044f\u0442\u0441\u044f \u0438\u0437 \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u043e\u0432, \u0442\u043e\u0447\u043d\u043e \u0432 \u0441\u0440\u043e\u043a \u0438, \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435, \u043e\u043f\u044b\u0442\u043d\u044b\u043c\u0438 \u043f\u043e\u0432\u0430\u0440\u0430\u043c\u0438!"})]})},ce=function(){return Object(p.jsxs)("main",{children:[Object(p.jsx)(ne,{}),Object(p.jsx)($,{})]})},ae=n(17),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n=e.items.findIndex((function(e){return e.id===t.item.id})),c=Object(ae.a)(e.items);return-1!==n?c[n].amount+=t.item.amount:c.push(t.item),{items:c,totalAmount:e.totalAmount+t.item.price*t.item.amount}}if("REMOVE"===t.type){var a,r=e.items.findIndex((function(e){return e.id===t.id})),s=e.items[r];if(1===s.amount)a=e.items.filter((function(e){return e.id!==t.id}));else{var i=Object(d.a)(Object(d.a)({},s),{},{amount:--s.amount});(a=Object(ae.a)(e.items))[r]=i}return{items:a,totalAmount:e.totalAmount-s.price}}return t.type,re},ie=function(e){var t=e.children,n=Object(s.useReducer)(se,re),c=Object(r.a)(n,2),a=c[0],i=c[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})},clearCart:function(e){i({type:"CLEAR"})}};return Object(p.jsx)(u.Provider,{value:o,children:t})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)(ie,{children:[n&&Object(p.jsx)(A,{onHideCart:function(e){c(!1)}}),Object(p.jsx)(L,{onShowCart:function(e){c(!0)}}),Object(p.jsx)(ce,{})]})};a.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.ba98ccaf.chunk.js.map