(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{473:function(n,t,e){},479:function(n,t,e){"use strict";e(473)},485:function(n,t,e){"use strict";e.r(t);e(78),e(107);var s={name:"TopNavBar",data:function(){return{show:!1}},computed:{menuList:function(){return[{name:"首页",source:"el-icon-s-home",path:"/home"}].map((function(n){return n.background="",n}))}},watch:{},created:function(){},methods:{toPage:function(n){window.location.href=window.origin+(process.env.PRO_NAME?"/"+process.env.PRO_NAME:"")+"/#/login"}}},o=(e(479),e(43)),a=Object(o.a)(s,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"top-nav-bar"},[t("div",{staticClass:"nav-btn",on:{mouseenter:function(t){n.show=!0},mouseleave:function(t){n.show=!1}}},[t("div",{staticClass:"active-menu menu-item-title",style:{background:n.show?"#008CE5":""}},[n._m(0)]),n._v(" "),t("transition",{attrs:{name:"el-fade-in-linear"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],staticClass:"menu-wrapper"},n._l(n.menuList,(function(e,s){return t("div",{key:s,staticClass:"menu-item menu-item-box",style:{background:"url(".concat(e.background,")")},on:{click:function(t){return n.toPage(e)}}},[t("i",{class:e.source}),n._v(" "),t("span",{attrs:{title:e.name}},[n._v(n._s(e.name))])])})),0)])],1)])}),[function(){var n=this._self._c;return n("span",[this._v("\n        基础运维系统\n        "),n("i",{staticClass:"el-icon-arrow-down"})])}],!1,null,"4b05192f",null);t.default=a.exports}}]);