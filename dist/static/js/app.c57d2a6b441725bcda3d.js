webpackJsonp([1],Array(18).concat([function(t,e,n){"use strict";var o=n(48),a=n(51),s=n(21);e.a={name:"app",components:{PurchaseNav:o.a,TopNav:a.a},data:function(){return{products:[{name:"Arabica",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",img:"http://fixationcoffee.co.nz/wp-content/uploads/Best-Price-ROASTED-ARABICA-COFFEE-BEANS.jpg",price:100,count:0},{name:"Robusta",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",img:"https://enjoyjava.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg",price:150,count:0},{name:"Liberian coffee",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",img:"https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1",price:200,count:0}]}},mounted:function(){var t=this;s.a.$on("change-product-count",function(e,n){t.products[e].count=t.products[e].count+n})},computed:{priceDetails:function(){for(var t=0,e=0,n=0;n<this.products.length;n++)t+=this.products[n].count,e+=this.products[n].count*this.products[n].price;return{totalProducts:t,totalPrice:e}}}}},function(t,e,n){"use strict";e.a={name:"hello",props:["priceDetails"],data:function(){return{}},methods:{},computed:{}}},function(t,e,n){"use strict";e.a={name:"hello",props:[],data:function(){return{}},methods:{},computed:{}}},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n(9),a=new o.a},function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,n){"use strict";var o=n(21);e.a={name:"hello",props:["products","priceDetails"],data:function(){return{}},methods:{changeProductCount:function(t,e){o.a.$emit("change-product-count",t,e)}},computed:{selectedProducts:function(){return this.products.filter(function(t){return t.count>0})}}}},function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{coffeeCount:1}}}},function(t,e,n){"use strict";var o=n(71);e.a={name:"hello",components:{VueGoogleAutocomplete:o.a},data:function(){return{}},methods:{getAddressData:function(t,e){this.$emit("address-selected",e.formatted_address)}}}},function(t,e,n){"use strict";var o=n(72),a=n.n(o),s=n(97),i=n.n(s),r={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",administrative_area_level_2:"county",country:"long_name",postal_code:"short_name"},c=["locality","administrative_area_level_3"],l=["locality","sublocality","postal_code","country","administrative_area_level_1","administrative_area_level_2"];e.a={name:"VueGoogleAutocomplete",props:{id:{type:String,required:!0},classname:String,placeholder:{type:String,default:"Start typing"},types:{type:String,default:"address"},country:{type:[String,Array],default:null},enableGeolocation:{type:Boolean,default:!1},geolocationOptions:{type:Object,default:null}},data:function(){return{autocomplete:null,autocompleteText:"",geolocation:{geocoder:null,loc:null,position:null}}},watch:{autocompleteText:function(t,e){this.$emit("inputChange",{newVal:t,oldVal:e},this.id)},country:function(t,e){this.autocomplete.setComponentRestrictions({country:null===this.country?[]:this.country})}},mounted:function(){var t={};this.types&&(t.types=[this.types]),this.country&&(t.componentRestrictions={country:this.country}),this.autocomplete=new google.maps.places.Autocomplete(document.getElementById(this.id),t),this.autocomplete.addListener("place_changed",this.onPlaceChanged)},methods:{onPlaceChanged:function(){var t=this.autocomplete.getPlace();if(!t.geometry)return void this.$emit("no-results-found",t,this.id);void 0!==t.address_components&&(this.$emit("placechanged",this.formatResult(t),t,this.id),this.autocompleteText=document.getElementById(this.id).value,this.onChange())},onFocus:function(){this.biasAutocompleteLocation(),this.$emit("focus")},onBlur:function(){this.$emit("blur")},onChange:function(){this.$emit("change",this.autocompleteText)},onKeyPress:function(t){this.$emit("keypress",t)},onKeyUp:function(t){this.$emit("keyup",t)},clear:function(){this.autocompleteText=""},focus:function(){this.$refs.autocomplete.focus()},blur:function(){this.$refs.autocomplete.blur()},update:function(t){this.autocompleteText=t},updateCoordinates:function(t){var e=this;(t||t.lat||t.lng)&&(this.geolocation.geocoder||(this.geolocation.geocoder=new google.maps.Geocoder),this.geolocation.geocoder.geocode({location:t},function(t,n){"OK"===n?(t=e.filterGeocodeResultTypes(t),t[0]?(e.$emit("placechanged",e.formatResult(t[0]),t[0],e.id),e.update(t[0].formatted_address)):e.$emit("error","no result for provided coordinates")):e.$emit("error","error getting address from coords")}))},geolocate:function(){var t=this;this.updateGeolocation(function(e,n){t.updateCoordinates(e)})},updateGeolocation:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(navigator.geolocation){var n={};this.geolocationOptions&&i()(n,this.geolocationOptions),navigator.geolocation.getCurrentPosition(function(n){var o={lat:n.coords.latitude,lng:n.coords.longitude};t.geolocation.loc=o,t.geolocation.position=n,e&&e(o,n)},function(e){t.$emit("error","Cannot get Coordinates from navigator",e)},n)}},biasAutocompleteLocation:function(){var t=this;this.enableGeolocation&&this.updateGeolocation(function(e,n){var o=new google.maps.Circle({center:e,radius:n.coords.accuracy});t.autocomplete.setBounds(o.getBounds())})},formatResult:function(t){for(var e={},n=0;n<t.address_components.length;n++){var o=t.address_components[n].types[0];if(r[o]){var a=t.address_components[n][r[o]];e[o]=a}}return e.latitude=t.geometry.location.lat(),e.longitude=t.geometry.location.lng(),e},filterGeocodeResultTypes:function(t){if(!t||!this.types)return t;var e=[],n=[this.types];n.includes("(cities)")&&(n=n.concat(c)),n.includes("(regions)")&&(n=n.concat(l));var o=!0,s=!1,i=void 0;try{for(var r,u=a()(t);!(o=(r=u.next()).done);o=!0){var d=r.value,f=!0,p=!1,v=void 0;try{for(var m,h=a()(d.types);!(f=(m=h.next()).done);f=!0){var g=m.value;if(n.includes(g)){e.push(d);break}}}catch(t){p=!0,v=t}finally{try{!f&&h.return&&h.return()}finally{if(p)throw v}}}}catch(t){s=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(s)throw i}}return e}}}},,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"EventBus",function(){return c});var o=n(9),a=n(45),s=n(55),i=n(105),r=n.n(i),c=new o.a;o.a.use(r.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},,,,function(t,e,n){"use strict";function o(t){n(46)}var a=n(18),s=n(54),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";function o(t){n(49)}var a=n(19),s=n(50),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed pin-b pin-r w-full bg-coffee-dark py-2 px-4 flex items-center justify-between border-t border-coffee purchase-nav-bar",class:{active:t.priceDetails.totalProducts&&t.priceDetails.totalProducts>0},staticStyle:{height:"62px"}},[n("div",[n("p",{staticClass:"m-0 text-xs"},[t._v(t._s(t.priceDetails.totalProducts)+" item(s) selected")]),t._v(" "),n("p",{staticClass:"text-lg font-semibold m-0"},[t._v("$"+t._s(t.priceDetails.totalPrice)+" "),n("span",{staticClass:"text-xs font-light"},[t._v("AUD")])])]),t._v(" "),"Payment"===t.$route.name?n("button",{staticClass:"btn"},[t._v("\n    Purchase\n  ")]):n("router-link",{staticClass:"btn",attrs:{tag:"button",to:"/payment"}},[t._v("\n    NEXT\n  ")])],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function o(t){n(52)}var a=n(20),s=n(53),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-full p-2 bg-coffee text-white flex justify-between fixed pin-t pin-l z-50"},[n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"w-6 mr-2"},[n("svg",{staticStyle:{"enable-background":"new 0 0 326.05 326.05"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",height:"auto",viewBox:"0 0 326.05 326.05","xml:space":"preserve"}},[n("g",[n("path",{attrs:{fill:"white",d:"M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16\n          c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z\n           M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8\n          C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169\n          C322.479,191.585,343.526,103.869,310.81,48.75z"}})])])]),t._v(" "),n("h2",{staticClass:"font-bold"},[t._v("CAPP")])]),t._v(" "),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"text-xl text-white"},[n("i",{staticClass:"fas fa-bars"})])}],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full min-h-full font-sans text-coffee-light bg-pattern leading-normal font-light overflow-y-auto overflow-hidden",attrs:{id:"app"}},[n("transition",{attrs:{name:"top-nav",mode:"out-in"}},[t.$route.meta.showTopNav?n("top-nav",{staticClass:"top-nav"}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"page",mode:"out-in"}},[n("router-view",{attrs:{products:t.products,priceDetails:t.priceDetails}})],1),t._v(" "),t.$route.meta.showBotNav?n("purchase-nav",{attrs:{priceDetails:t.priceDetails}}):t._e()],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var o=n(9),a=n(56),s=n(57),i=n(60),r=n(63),c=n(66),l=n(69);o.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Splash",component:s.a},{path:"/register",name:"Register",component:r.a},{path:"/onboarding",name:"Onboarding",component:c.a},{path:"/products",name:"ProductIndex",component:i.a,meta:{showTopNav:!0,showBotNav:!0}},{path:"/payment",name:"Payment",component:l.a,meta:{showTopNav:!0,showBotNav:!0}}]})},,function(t,e,n){"use strict";function o(t){n(58)}var a=n(22),s=n(59),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-full flex items-center justify-center p-4"},[n("div",{staticClass:"w-full flex flex-col items-center justify-center"},[n("div",{staticClass:"w-10 mb-8"},[n("svg",{staticStyle:{"enable-background":"new 0 0 326.05 326.05"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",height:"auto",viewBox:"0 0 326.05 326.05","xml:space":"preserve"}},[n("g",[n("path",{attrs:{fill:"#f2dfc0",d:"M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16\n          c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z\n           M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8\n          C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169\n          C322.479,191.585,343.526,103.869,310.81,48.75z"}})])])]),t._v(" "),t._m(0),t._v(" "),n("h1",{staticClass:"font-bold",staticStyle:{"font-size":"5em"}},[t._v("CAPP")]),t._v(" "),n("router-link",{staticClass:"btn",attrs:{tag:"btn",to:"/register"}},[t._v("\n      Enter\n    ")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"m-0"},[t._v("Get beautifully roasted"),n("br"),t._v("coffee to you door with")])}],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function o(t){n(61)}var a=n(23),s=n(62),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-full",staticStyle:{padding:"45px 0"}},[n("div",{staticClass:"p-4"},t._l(t.products,function(e,o){return n("div",{staticClass:"my-2 product-button"},[n("div",{staticClass:"rounded bg-coffee-lighter text-coffee-dark flex"},[n("div",{staticClass:"w-1/3 flex-none bg-cover bg-center",style:{backgroundImage:"url('"+e.img+"')"}}),t._v(" "),n("div",{staticClass:"p-2 text-left"},[n("h3",{staticClass:"text-base"},[t._v(t._s(e.name))]),t._v(" "),n("h4",{staticClass:"font-light text-lg"},[t._v("$"+t._s(e.price)+" "),n("span",{staticClass:"text-xs"},[t._v("each")])]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"m-0 text-sm"},[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"py-2 flex flex-col items-start justify-center"},[n("p",{staticClass:"text-xs uppercase tracking-wide text-coffee m-0 inline"},[t._v("Quantity")]),t._v(" "),n("div",{staticClass:"border-coffee border rounded-full inline-flex items-center justify-between"},[n("button",{staticClass:"px-2 text-coffee product-count-button",attrs:{disabled:0===e.count},on:{click:function(e){t.changeProductCount(o,-1)}}},[n("i",{staticClass:"text-xs fal fa-chevron-left"})]),t._v(" "),n("p",{staticClass:"w-6 text-center m-0"},[t._v("\n                "+t._s(e.count)+"\n              ")]),t._v(" "),n("button",{staticClass:"px-2 text-coffee",on:{click:function(e){t.changeProductCount(o,1)}}},[n("i",{staticClass:"text-xs fal fa-chevron-right"})])])])])])])}))])},a=[],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function o(t){n(64)}var a=n(24),s=n(65),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full flex items-center p-4"},[n("div",{staticClass:"w-full"},[n("h1",[t._v("Register")]),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Email")]),n("br"),t._v(" "),n("input",{attrs:{type:"text",id:"email",name:""}}),t._v(" "),n("label",{attrs:{for:"password"}},[t._v("Password")]),n("br"),t._v(" "),n("input",{attrs:{type:"text",id:"password",name:""}}),t._v(" "),n("router-link",{staticClass:"btn",attrs:{tag:"btn",to:"/onboarding"}},[t._v("\n      Let's go\n    ")])],1)])},a=[],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function o(t){n(67)}var a=n(25),s=n(68),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full flex items-center p-4"},[n("div",{staticClass:"w-full"},[n("h1",[t._v("Quick question!")]),t._v(" "),n("p",[t._v("How many cups of coffee does your household drink each day?")]),t._v(" "),n("div",{staticStyle:{"min-height":"4.5em"}},[n("transition-group",{staticClass:"text-center flex flex-wrap justify-center",attrs:{name:"list-complete",tag:"div"}},t._l(t.coffeeCount,function(t){return n("div",{key:t+"test",staticClass:"list-complete-item text-xl"},[n("i",{staticClass:"fas fa-coffee"})])}))],1),t._v(" "),n("div",{staticClass:"flex justify-center"},[n("button",{staticClass:"flex justify-center text-coffee text-lg w-10 h-8 border-coffee rounded-l-full border-r border-t border-l border-b focus:outline-none",on:{click:function(e){t.coffeeCount--}}},[n("i",{staticClass:"fal fa-minus"})]),t._v(" "),n("button",{staticClass:"flex justify-center text-coffee text-lg w-10 h-8 border-coffee rounded-r-full border-r border-t border-b focus:outline-none",on:{click:function(e){t.coffeeCount++}}},[n("i",{staticClass:"fal fa-plus"})])]),t._v(" "),n("div",{staticClass:"pt-8 text-right"},[n("router-link",{staticClass:"btn",attrs:{tag:"button",to:"/products"}},[t._v("\n        Next\n      ")])],1)])])},a=[],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function o(t){n(70)}var a=n(26),s=n(104),i=n(0),r=o,c=i(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=n(27),a=n(103),s=n(0),i=s(o.a,a.a,!1,null,null,null);e.a=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.autocompleteText,expression:"autocompleteText"}],ref:"autocomplete",class:t.classname,attrs:{type:"text",id:t.id,placeholder:t.placeholder},domProps:{value:t.autocompleteText},on:{focus:function(e){t.onFocus()},blur:function(e){t.onBlur()},change:t.onChange,keypress:t.onKeyPress,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.autocompleteText=e.target.value)}}})},a=[],s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-full flex justify-between items-center",staticStyle:{padding:"45px 0"}},[n("div",{staticClass:"min-h-full  p-4"},[n("div",[n("h1",[t._v("Complete Order")]),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Delivery Address")]),n("br"),t._v(" "),n("vue-google-autocomplete",{attrs:{id:"map",classname:"form-control",placeholder:"Start typing",country:["nz"]},on:{placechanged:t.getAddressData}}),t._v(" "),n("label",{attrs:{for:"password"}},[t._v("Delivery Frequency")]),n("br"),t._v(" "),t._m(0),t._v(" "),n("label",{attrs:{for:"password"}},[t._v("Payment Type")]),n("br"),t._v(" "),t._m(1)],1)]),t._v(" "),n("modal",{attrs:{name:"order-complete",width:"90%"}},[n("div",{staticClass:"p-4"},[n("div",{staticClass:"rounded-full text-5xl bg-primary h-16 w-16 flex justify-center items-center text-white mx-auto mb-4"},[n("i",{staticClass:"fal fa-check"})]),t._v(" "),n("h2",[t._v("Order Complete")]),t._v(" "),n("p",[t._v("Your order has been placed. You'll receive an email confirming your order and your invoice.")]),t._v(" "),n("p",[t._v("Enjoy your coffee and thank you for using CAPP.")])])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",[n("option",{attrs:{value:"1"}},[t._v("Weekly")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Monthly")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("Fortnightly")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",[n("option",{attrs:{value:"1"}},[t._v("Credit Card")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Paypal")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("Apple Pay")])])}],s={render:o,staticRenderFns:a};e.a=s}]),[41]);
//# sourceMappingURL=app.c57d2a6b441725bcda3d.js.map