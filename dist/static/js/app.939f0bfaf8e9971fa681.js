webpackJsonp([0],[,,,function(t,e,s){"use strict";e.a={name:"app"}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{products:[{name:"Coffee 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",img:"https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1",selected:!1},{name:"Coffee 2",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",img:"https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1",selected:!1},{name:"Coffee 3",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",img:"https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1",selected:!1}]}},computed:{selectedProducts:function(){return this.products.filter(function(t){return t.selected})}}}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s(13),i=s(17),r=s(34),o=s.n(r);n.a.use(o.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})},,,,function(t,e,s){"use strict";function n(t){s(14)}var a=s(3),i=s(16),r=s(0),o=n,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full min-h-full font-sans text-coffee-light bg-pattern leading-normal font-light",attrs:{id:"app"}},[s("router-view")],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";var n=s(2),a=s(18),i=s(19),r=s(22),o=s(25),c=s(28),l=s(31);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Splash",component:i.a},{path:"/register",name:"Register",component:o.a},{path:"/onboarding",name:"Onboarding",component:c.a},{path:"/products",name:"ProductIndex",component:r.a},{path:"/payment",name:"Payment",component:l.a}]})},,function(t,e,s){"use strict";function n(t){s(20)}var a=s(4),i=s(21),r=s(0),o=n,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-full flex items-center justify-center p-4"},[s("div",{staticClass:"w-full"},[t._m(0),t._v(" "),s("h1",{staticClass:"text-5xl font-bold"},[t._v("CAPP")]),t._v(" "),s("router-link",{staticClass:"btn",attrs:{tag:"btn",to:"/register"}},[t._v("\n      Enter\n    ")])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text-sm"},[t._v("Get beautifully roasted"),s("br"),t._v("coffee to you door with")])}],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";function n(t){s(23)}var a=s(5),i=s(24),r=s(0),o=n,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full"},[t._m(0),t._v(" "),s("div",{staticClass:"p-4"},t._l(t.products,function(e){return s("div",{staticClass:"my-2 rounded bg-white p-2 flex items-center"},[s("div",{staticClass:"h-12 w-12 rounded flex-none bg-cover bg-center",style:{backgroundImage:"url('"+e.img+"')"}}),t._v(" "),s("div",{staticClass:"px-2"},[s("h3",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v(t._s(e.description))])]),t._v(" "),s("div",{staticClass:"px-2"},[s("button",{staticClass:"opacity-25 text-primary",class:{"opacity-100":e.selected},on:{click:function(t){e.selected=!e.selected}}},[s("i",{staticClass:"far fa-check"})])])])})),t._v(" "),t.selectedProducts.length>0?s("div",{staticClass:"fixed pin-b pin-r w-full bg-white p-2 flex items-center justify-between"},[s("div",[s("p",[t._v(t._s(t.selectedProducts.length)+" items selected")]),t._v(" "),s("p",{staticClass:"font-bold"},[t._v("$"+t._s(500*t.selectedProducts.length)+" "),s("span",{staticClass:"text-xs font-light"},[t._v("AUD")])])]),t._v(" "),s("router-link",{staticClass:"btn",attrs:{tag:"btn",to:"/payment"}},[t._v("\n      BUY NOW\n    ")])],1):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"w-full p-2 bg-secondary-dark text-white flex justify-between"},[s("h2",[t._v("CAPP")]),t._v(" "),s("button",{staticClass:"text-xl text-white"},[s("i",{staticClass:"fas fa-bars"})])])}],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";function n(t){s(26)}var a=s(6),i=s(27),r=s(0),o=n,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full flex items-center p-4"},[s("div",{staticClass:"w-full"},[s("h1",[t._v("Register")]),t._v(" "),s("label",{attrs:{for:"email"}},[t._v("Email")]),s("br"),t._v(" "),s("input",{attrs:{type:"text",id:"email",name:""}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Password")]),s("br"),t._v(" "),s("input",{attrs:{type:"text",id:"password",name:""}}),t._v(" "),s("router-link",{staticClass:"btn",attrs:{tag:"btn",to:"/onboarding"}},[t._v("\n      Let's go\n    ")])],1)])},a=[],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";function n(t){s(29)}var a=s(7),i=s(30),r=s(0),o=n,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full flex items-center p-4"},[s("div",{staticClass:"w-full"},[s("h1",[t._v("Quick question!")]),t._v(" "),s("p",[t._v("How many cups of coffee does your household drink each day?")]),t._v(" "),s("input",{attrs:{type:"text",id:"coffeeCount",name:""}}),t._v(" "),s("router-link",{staticClass:"btn",attrs:{tag:"btn",to:"/products"}},[t._v("\n      Let's go\n    ")])],1)])},a=[],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";function n(t){s(32)}var a=s(8),i=s(33),r=s(0),o=n,c=r(a.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full flex flex-col justify-between"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"w-full bg-white p-2 flex items-center justify-between"},[t._m(2),t._v(" "),s("button",{staticClass:"btn",on:{click:function(e){t.$modal.show("order-complete")}}},[t._v("\n      ORDER\n    ")])]),t._v(" "),s("modal",{attrs:{name:"order-complete",width:"90%"}},[s("div",{staticClass:"p-4"},[s("div",{staticClass:"rounded-full text-5xl bg-primary h-16 w-16 flex justify-center items-center text-white mx-auto mb-4"},[s("i",{staticClass:"fal fa-check"})]),t._v(" "),s("h2",[t._v("Order Complete")]),t._v(" "),s("p",[t._v("Your order has been placed. You'll receive an email confirming your order and your invoice.")]),t._v(" "),s("p",[t._v("Enjoy your coffee and thank you for using CAPP.")])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"w-full p-2 bg-secondary-dark text-white flex justify-between"},[s("h2",[t._v("CAPP")]),t._v(" "),s("button",{staticClass:"text-xl text-white"},[s("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center p-4"},[s("div",{staticClass:"w-full text-white"},[s("h1",[t._v("Complete Order")]),t._v(" "),s("label",{attrs:{for:"email"}},[t._v("Delivery Address")]),s("br"),t._v(" "),s("input",{attrs:{type:"text",id:"email",name:""}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Delivery Frequency")]),s("br"),t._v(" "),s("select",[s("option",{attrs:{value:"1"}},[t._v("Option 1")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Option 2")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Option 3")])]),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Payment Type")]),s("br"),t._v(" "),s("select",[s("option",{attrs:{value:"1"}},[t._v("Option 1")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Option 2")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Option 3")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("1 items selected")]),t._v(" "),s("p",{staticClass:"font-bold"},[t._v("$500 "),s("span",{staticClass:"text-xs font-light"},[t._v("AUD")])])])}],i={render:n,staticRenderFns:a};e.a=i}],[9]);
//# sourceMappingURL=app.939f0bfaf8e9971fa681.js.map