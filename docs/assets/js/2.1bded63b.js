(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{362:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(31),n(91),n(363),n(117),n(369),n(202),n(90),n(120),n(10),n(121),n(41),n(122),n(195);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return s.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return a.test(r)?t:r+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return g(t);var o=s.sidebar||a.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=u.base,c=u.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return h(n,e,i);if(Array.isArray(e))return Object.assign(h(n,e[0],i),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(h(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},363:function(t,e,n){"use strict";var i=n(6),r=n(199),a=n(11),s=n(92),o=n(17),u=n(32),l=n(63),c=n(200),f=n(201);r("match",(function(t,e,n){return[function(e){var n=u(this),r=null==e?void 0:l(e,t);return r?i(r,e,n):new RegExp(e)[t](o(n))},function(t){var i=a(this),r=o(t),u=n(e,i,r);if(u.done)return u.value;if(!i.global)return f(i,r);var l=i.unicode;i.lastIndex=0;for(var p,h=[],d=0;null!==(p=f(i,r));){var g=o(p[0]);h[d]=g,""===g&&(i.lastIndex=c(r,s(i.lastIndex),l)),d++}return 0===d?null:h}]}))},364:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},368:function(t,e,n){"use strict";n(399),n(118),n(10),n(119);var i=n(362),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=n(62),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},369:function(t,e,n){"use strict";var i=n(42),r=n(6),a=n(3),s=n(199),o=n(197),u=n(11),l=n(32),c=n(125),f=n(200),p=n(92),h=n(17),d=n(63),g=n(204),v=n(201),m=n(94),b=n(196),k=n(2),x=b.UNSUPPORTED_Y,_=Math.min,C=[].push,y=a(/./.exec),L=a(C),$=a("".slice);s("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=h(l(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!o(t))return r(e,a,t,s);for(var u,c,f,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,d+"g");(u=r(m,b,a))&&!((c=b.lastIndex)>v&&(L(p,$(a,v,u.index)),u.length>1&&u.index<a.length&&i(C,p,g(u,1)),f=u[0].length,v=c,p.length>=s));)b.lastIndex===u.index&&b.lastIndex++;return v===a.length?!f&&y(b,"")||L(p,""):L(p,$(a,v)),p.length>s?g(p,0,s):p}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=l(this),s=null==e?void 0:d(e,t);return s?r(s,e,i,n):r(a,h(i),e,n)},function(t,i){var r=u(this),s=h(t),o=n(a,r,s,i,a!==e);if(o.done)return o.value;var l=c(r,RegExp),d=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(x?"g":"y"),m=new l(x?"^(?:"+r.source+")":r,g),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===s.length)return null===v(m,s)?[s]:[];for(var k=0,C=0,y=[];C<s.length;){m.lastIndex=x?0:C;var w,O=v(m,x?$(s,C):s);if(null===O||(w=_(p(m.lastIndex+(x?C:0)),s.length))===k)C=f(s,C,d);else{if(L(y,$(s,k,C)),y.length===b)return y;for(var I=1;I<=O.length-1;I++)if(L(y,O[I]),y.length===b)return y;C=k=w}}return L(y,$(s,k)),y}]}),!!k((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),x)},370:function(t,e,n){},371:function(t,e,n){var i=n(3),r=n(32),a=n(17),s=n(364),o=i("".replace),u="["+s+"]",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t){return function(e){var n=a(r(e));return 1&t&&(n=o(n,l,"")),2&t&&(n=o(n,c,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},372:function(t,e,n){"use strict";var i=n(1),r=n(371).trim;i({target:"String",proto:!0,forced:n(405)("trim")},{trim:function(){return r(this)}})},373:function(t,e,n){var i=n(8),r=n(0),a=n(3),s=n(124),o=n(208),u=n(19),l=n(64).f,c=n(34),f=n(197),p=n(17),h=n(374),d=n(196),g=n(207),v=n(14),m=n(2),b=n(9),k=n(33).enforce,x=n(203),_=n(5),C=n(198),y=n(206),L=_("match"),$=r.RegExp,w=$.prototype,O=r.SyntaxError,I=a(w.exec),E=a("".charAt),S=a("".replace),j=a("".indexOf),R=a("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,P=/a/g,T=/a/g,N=new $(P)!==P,D=d.MISSED_STICKY,U=d.UNSUPPORTED_Y,H=i&&(!N||D||C||y||m((function(){return T[L]=!1,$(P)!=P||$(T)==T||"/a/i"!=$(P,"i")})));if(s("RegExp",H)){for(var W=function(t,e){var n,i,r,a,s,l,d=c(w,this),g=f(t),v=void 0===e,m=[],x=t;if(!d&&g&&v&&t.constructor===W)return t;if((g||c(w,t))&&(t=t.source,v&&(e=h(x))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),x=t,C&&"dotAll"in P&&(i=!!e&&j(e,"s")>-1)&&(e=S(e,/s/g,"")),n=e,D&&"sticky"in P&&(r=!!e&&j(e,"y")>-1)&&U&&(e=S(e,/y/g,"")),y&&(t=(a=function(t){for(var e,n=t.length,i=0,r="",a=[],s={},o=!1,u=!1,l=0,c="";i<=n;i++){if("\\"===(e=E(t,i)))e+=E(t,++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:I(A,R(t,i+1))&&(i+=2,u=!0),r+=e,l++;continue;case">"===e&&u:if(""===c||b(s,c))throw new O("Invalid capture group name");s[c]=!0,a[a.length]=[c,l],u=!1,c="";continue}u?c+=e:r+=e}return[r,a]}(t))[0],m=a[1]),s=o($(t,e),d?this:w,W),(i||r||m.length)&&(l=k(s),i&&(l.dotAll=!0,l.raw=W(function(t){for(var e,n=t.length,i=0,r="",a=!1;i<=n;i++)"\\"!==(e=E(t,i))?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),r+=e):r+="[\\s\\S]":r+=e+E(t,++i);return r}(t),n)),r&&(l.sticky=!0),m.length&&(l.groups=m)),t!==x)try{u(s,"source",""===x?"(?:)":x)}catch(t){}return s},G=l($),B=0;G.length>B;)g(W,$,G[B++]);w.constructor=W,W.prototype=w,v(r,"RegExp",W)}x("RegExp")},374:function(t,e,n){var i=n(6),r=n(9),a=n(34),s=n(205),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||r(t,"flags")||!a(o,t)?e:i(s,t)}},375:function(t,e,n){var i=n(0),r=n(8),a=n(198),s=n(24),o=n(12).f,u=n(33).get,l=RegExp.prototype,c=i.TypeError;r&&a&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!u(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},376:function(t,e,n){var i=n(0),r=n(8),a=n(196).MISSED_STICKY,s=n(24),o=n(12).f,u=n(33).get,l=RegExp.prototype,c=i.TypeError;r&&a&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!u(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},377:function(t,e,n){"use strict";var i=n(93).PROPER,r=n(14),a=n(11),s=n(17),o=n(2),u=n(374),l=RegExp.prototype.toString,c=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=i&&"toString"!=l.name;(c||f)&&r(RegExp.prototype,"toString",(function(){var t=a(this);return"/"+s(t.source)+"/"+s(u(t))}),{unsafe:!0})},378:function(t,e,n){},379:function(t,e,n){},380:function(t,e,n){},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},384:function(t,e){t.exports=function(t){return null==t}},385:function(t,e,n){},386:function(t,e,n){},387:function(t,e,n){},388:function(t,e,n){},389:function(t,e,n){},390:function(t,e,n){},396:function(t,e,n){"use strict";n.r(e);n(118),n(10);var i=n(362),r={name:"SidebarGroup",components:{DropdownTransition:n(398).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(396).default},methods:{isActive:i.e}},a=(n(417),n(62)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(418),n(31),n(117),n(90);function o(t,e,n,i,r){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(a.style={"padding-left":r+"rem"}),t("RouterLink",a,n)}function u(t,e,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),u(t,e.children,n,r,a,s+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,l=n.$themeLocaleConfig,c=e.props,f=c.item,p=c.sidebarDepth,h=Object(i.e)(a,f.path),d="auto"===f.type?h||f.children.some((function(t){return Object(i.e)(a,f.basePath+"#"+t.slug)})):h,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),v=[r.frontmatter.sidebarDepth,p,l.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=l.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,a,v)]:(d||m)&&f.headers&&!i.d.test(f.path)?[g,u(t,Object(i.c)(f.headers),f.path,a,v)]:g}};n(419);function c(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?c(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var f={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(a.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},397:function(t,e,n){"use strict";var i=n(60),r=(n(119),n(90),n(31),n(91),n(118),n(10),n(211),n(117),n(363),n(373),n(375),n(376),n(377),n(368)),a=n(398),s=n(213),o=n.n(s),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:a.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(410),n(62)),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(362),p={name:"NavLinks",components:{NavLink:r.a,DropdownLink:c},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var s,o=e[i],u=a[i]&&a[i].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===s}))||(s=i)),{text:u,link:s}}))};return[].concat(Object(i.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.j)(t),{items:(t.items||[]).map(f.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},h=(n(411),Object(l.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=h.exports},398:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(409),n(62)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},399:function(t,e,n){"use strict";var i=n(1),r=n(400);i({target:"String",proto:!0,forced:n(401)("link")},{link:function(t){return r(this,"a","href",t)}})},400:function(t,e,n){var i=n(3),r=n(32),a=n(17),s=/"/g,o=i("".replace);t.exports=function(t,e,n,i){var u=a(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+o(a(i),s,"&quot;")+'"'),l+">"+u+"</"+e+">"}},401:function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},402:function(t,e,n){"use strict";n(370)},403:function(t,e,n){var i=n(1),r=n(404);i({global:!0,forced:parseInt!=r},{parseInt:r})},404:function(t,e,n){var i=n(0),r=n(2),a=n(3),s=n(17),o=n(371).trim,u=n(364),l=i.parseInt,c=i.Symbol,f=c&&c.iterator,p=/^[+-]?0x/i,h=a(p.exec),d=8!==l(u+"08")||22!==l(u+"0x16")||f&&!r((function(){l(Object(f))}));t.exports=d?function(t,e){var n=o(s(t));return l(n,e>>>0||(h(p,n)?16:10))}:l},405:function(t,e,n){var i=n(93).PROPER,r=n(2),a=n(364);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||i&&a[t].name!==t}))}},406:function(t,e,n){"use strict";var i,r=n(1),a=n(3),s=n(35).f,o=n(92),u=n(17),l=n(126),c=n(32),f=n(127),p=n(15),h=a("".endsWith),d=a("".slice),g=Math.min,v=f("endsWith");r({target:"String",proto:!0,forced:!!(p||v||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!v},{endsWith:function(t){var e=u(c(this));l(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:g(o(n),i),a=u(t);return h?h(e,a,r):d(e,r-a.length,r)===a}})},407:function(t,e,n){"use strict";n(378)},408:function(t,e,n){"use strict";n(379)},409:function(t,e,n){"use strict";n(380)},410:function(t,e,n){"use strict";n(381)},411:function(t,e,n){"use strict";n(382)},412:function(t,e,n){"use strict";n(383)},413:function(t,e,n){"use strict";n(385)},414:function(t,e,n){var i=n(44),r=n(20),a=n(36);t.exports=function(t){return"string"==typeof t||!r(t)&&a(t)&&"[object String]"==i(t)}},415:function(t,e,n){"use strict";n(386)},416:function(t,e,n){"use strict";n(387)},417:function(t,e,n){"use strict";n(388)},418:function(t,e,n){"use strict";var i=n(1),r=n(43).find,a=n(123),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},419:function(t,e,n){"use strict";n(389)},420:function(t,e,n){"use strict";n(390)},645:function(t,e,n){"use strict";n(403),n(372),n(195),n(122),n(41),n(10),n(31),n(363),n(209),n(210),n(202),n(91),n(373),n(375),n(376),n(377),n(90),n(369),n(117),n(406),n(118);var i=n(212),r=n.n(i),a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),s(t,i)},s=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var a=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||a?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],s=0;s<e.length&&!(r.length>=n);s++){var o=e[s];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(a(t,o))r.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(r.length>=n);u++){var l=o.headers[u];l.title&&a(t,o,l.title)&&r.push(Object.assign({},o,{path:o.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(407),n(62)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports;n(408);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={name:"Navbar",components:{SidebarButton:Object(u.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(397).a,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},p=(n(412),Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=p.exports},646:function(t,e,n){"use strict";n(31),n(117),n(91);var i=n(384),r=n.n(i),a=n(362),s={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,s=e.docsBranch,o=void 0===s?"master":s,u=e.docsRepo,l=void 0===u?n:u;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(a.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r:(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r}}},o=(n(413),n(62)),u=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,l=n(414),c=n.n(l),f={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return h(p.PREV,this)},next:function(){return h(p.NEXT,this)}}};var p={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function h(t,e){var n=e.$themeConfig,i=e.$page,s=e.$route,o=e.$site,u=e.sidebarItems,l=t.resolveLink,f=t.getThemeLinkConfig,p=t.getPageLinkConfig,h=f(n),d=p(i),g=r()(d)?h:d;return!1===g?void 0:c()(g)?Object(a.k)(o.pages,g,s.path):l(i,u)}function d(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var g=f,v=(n(415),{components:{PageEdit:u,PageNav:Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),m=(n(416),Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=m.exports},647:function(t,e,n){"use strict";var i={name:"Home",components:{NavLink:n(368).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(402),n(62)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):n("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null);e.a=a.exports},648:function(t,e,n){"use strict";var i=n(396),r=n(397),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},s=(n(420),n(62)),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports}}]);