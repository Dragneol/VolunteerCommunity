(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80227290"],{"11e9":function(t,e,r){var n=r("52a7"),a=r("4630"),i=r("6821"),o=r("6a99"),s=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=o(e,!0),c)try{return u(t,e)}catch(r){}if(s(t,e))return a(!n.f.call(t,e),t[e])}},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"5dbc":function(t,e,r){var n=r("d3f4"),a=r("8b97").set;t.exports=function(t,e,r){var i,o=e.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&n(i)&&a&&a(t,i),t}},8229:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":"",header:t.caption}},[r("div",{staticClass:"table-responsive"},[r("b-table",{attrs:{dark:t.dark,hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,responsive:"sm",items:t.items,fields:t.captions,"current-page":t.currentPage,"per-page":t.perPage},on:{"row-clicked":t.rowClicked},scopedSlots:t._u([{key:"status",fn:function(e){return[r("b-badge",{attrs:{variant:t.getBadge(e.item.status)}},[t._v(t._s(e.item.status))])]}},{key:"LockoutEnabled",fn:function(e){return[r("b-badge",{attrs:{variant:t.getBadge(e.item.LockoutEnabled)}},[t._v(t._s(e.item.LockoutEnabled))])]}}])})],1),r("nav",[r("b-pagination",{staticClass:"ml-3",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},a=[],i=r("a745"),o=r.n(i),s=(r("c5f6"),{name:"c-table",inheritAttrs:!1,props:{caption:{type:String,default:"Table"},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},tableData:{type:[Array,Function],default:function(){return[]}},fields:{type:[Array,Object],default:function(){return[]}},perPage:{type:Number,default:5},dark:{type:Boolean,default:!1},rowClicked:{type:Function,default:function(){}}},data:function(){return{currentPage:1}},computed:{items:function(){var t=this.tableData;return o()(t)?t:t()},totalRows:function(){return this.getRowCount()},captions:function(){return this.fields}},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},getRowCount:function(){return this.items.length}}}),c=s,u=(r("a668"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["a"]=l.exports},"8b97":function(t,e,r){var n=r("d3f4"),a=r("cb7c"),i=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},9093:function(t,e,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},a668:function(t,e,r){"use strict";var n=r("fb00"),a=r.n(n);a.a},a745:function(t,e,r){t.exports=r("f410")},aef8:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("div",[r("b-progress",{attrs:{value:t.loading?50:100,max:100,animated:""}})],1):t._e(),t.loading?t._e():r("b-row",{staticClass:"animated fadeIn"},[r("b-col",{attrs:{lg:12}},[r("b-button",{staticClass:"mb-2 mr-2",on:{click:t.refresh}},[t._v("Refresh")]),r("b-button",{staticClass:"mb-2",attrs:{variant:"primary"},on:{click:t.create}},[t._v("Add new configuration")])],1),r("b-col",{attrs:{lg:t.current?6:12}},[r("c-table",{attrs:{"table-data":t.items,hover:"",caption:"Configurations",rowClicked:t.rowClicked}})],1),t.current?r("b-col",{staticClass:"animated fadeIn",attrs:{lg:"6"}},[r("b-card",{staticClass:"card-accent-info",attrs:{header:"Detail of `"+t.current.Key+"`"}},[r("b-form",[r("b-form-group",[r("b-input-group",[r("b-input-group-prepend",[r("b-input-group-text",[t._v("Key")])],1),r("b-form-input",{attrs:{type:"text"},model:{value:t.current.Key,callback:function(e){t.$set(t.current,"Key",e)},expression:"current.Key"}})],1)],1),r("b-form-group",[r("b-input-group",[r("b-input-group-prepend",[r("b-input-group-text",[t._v("Value")])],1),r("b-form-input",{attrs:{type:"text"},model:{value:t.current.Value,callback:function(e){t.$set(t.current,"Value",e)},expression:"current.Value"}})],1)],1),r("b-form-group",[r("c-switch",{attrs:{color:"primary",variant:"3d"},model:{value:t.current.status,callback:function(e){t.$set(t.current,"status",e)},expression:"current.status"}})],1),t.detailMessage||0===t.current.ID?t._e():r("div",{staticClass:"btn-group form-actions animated fadeIn"},[r("b-button",{attrs:{type:"submit",variant:"outline-primary"},on:{click:t.update}},[t._v("Update")]),r("b-button",{attrs:{type:"reset",variant:"outline-danger"},on:{click:t.remove}},[t._v("Remove")])],1),t.detailMessage||0!==t.current.ID?t._e():r("div",{staticClass:"form-actions animated fadeIn"},[r("b-button",{attrs:{type:"submit",block:"",variant:"outline-primary"},on:{click:t.add}},[t._v("Add")])],1),t.detailMessage?r("div",[r("b-button",{attrs:{disabled:"",block:"",variant:"outline-warning"}},[t._v(t._s(t.detailMessage))])],1):t._e()],1)],1)],1):t._e()],1)],1)},a=[],i=r("8229"),o=r("f1fb"),s=r("9129"),c={name:"tables",components:{cTable:i["a"],cSwitch:o["o"]},data:function(){return{loading:!0,items:[],current:null,detailMessage:""}},mounted:function(){this.refresh()},methods:{refresh:function(){var t=this;this.loading=!0,this.current=null,Object(s["g"])(s["f"].GET,s["i"].CONFIGURATION).then(function(e){t.loading=!1,t.items=e})},rowClicked:function(t,e){this.current=t},hideSuccess:function(){var t=this;setTimeout(function(){t.detailMessage=""},1e3)},update:function(){var t=this;this.detailMessage="Updating...",Object(s["g"])(s["f"].PUT,s["i"].CONFIGURATION,this.current).then(function(e){t.detailMessage="Updated successfully!",t.hideSuccess()})},remove:function(){var t=this;this.detailMessage="Removing...",Object(s["g"])(s["f"].DELETE,s["i"].CONFIGURATION,this.current).then(function(e){t.detailMessage="Removed successfully!",t.items=t.items.filter(function(e){return e!==t.current}),t.current=null,t.hideSuccess()})},create:function(){this.current={ID:0,Key:""}},add:function(){var t=this;this.detailMessage="Adding...",Object(s["g"])(s["f"].POST,s["i"].CONFIGURATION,this.current).then(function(e){t.detailMessage="Added successfully!",t.items.push(e),t.current=e,t.hideSuccess()})}}},u=c,l=r("2877"),f=Object(l["a"])(u,n,a,!1,null,null,null);e["default"]=f.exports},c5f6:function(t,e,r){"use strict";var n=r("7726"),a=r("69a8"),i=r("2d95"),o=r("5dbc"),s=r("6a99"),c=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,d=r("aa77").trim,p="Number",b=n[p],g=b,v=b.prototype,m=i(r("2aeb")(v))==p,h="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():d(e,3);var r,n,a,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var o,c=e.slice(2),u=0,l=c.length;u<l;u++)if(o=c.charCodeAt(u),o<48||o>a)return NaN;return parseInt(c,n)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof b&&(m?c(function(){v.valueOf.call(r)}):i(r)!=p)?o(new g(y(e)),r,b):y(e)};for(var _,I=r("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)a(g,_=I[k])&&!a(b,_)&&f(b,_,l(g,_));b.prototype=v,v.constructor=b,r("2aba")(n,p,b)}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray},fb00:function(t,e,r){}}]);
//# sourceMappingURL=chunk-80227290.cd347cbe.js.map