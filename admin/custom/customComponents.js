var ConfigCustomBackItUpSet;(()=>{"use strict";var A={23009:(n,l,s)=>{var u={"./Components":()=>Promise.all([s.e("vendors-node_modules_react-icons_fa_index_mjs"),s.e("vendors-src_AdapterExist_jsx-src_BackupNow_jsx-src_CheckConfigInvisible_jsx-src_DetectConfig_-7de9ab"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585"),s.e("src_Components_jsx")]).then(()=>()=>s(20507))},f=(i,g)=>(s.R=g,g=s.o(u,i)?u[i]():Promise.resolve().then(()=>{throw new Error('Module "'+i+'" does not exist in container.')}),s.R=void 0,g),v=(i,g)=>{if(s.S){var m="default",j=s.S[m];if(j&&j!==i)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return s.S[m]=i,s.I(m,g)}};s.d(l,{get:()=>f,init:()=>v})}},O={};function e(n){var l=O[n];if(l!==void 0)return l.exports;var s=O[n]={id:n,loaded:!1,exports:{}};return A[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}e.m=A,e.c=O,e.amdD=function(){throw new Error("define cannot be used indirect")},e.n=n=>{var l=n&&n.__esModule?()=>n.default:()=>n;return e.d(l,{a:l}),l},e.d=(n,l)=>{for(var s in l)e.o(l,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:l[s]})},e.f={},e.e=n=>Promise.all(Object.keys(e.f).reduce((l,s)=>(e.f[s](n,l),l),[])),e.u=n=>"static/js/"+n+"."+{"vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a":"9ff86b1b","vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd":"a0499c41","vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f":"27ba5c92","vendors-node_modules_react-icons_fa_index_mjs":"8ca2b023","vendors-node_modules_iobroker_adapter-react-v5_Components_Loader_js-node_modules_iobroker_ada-6c96ca":"c5d88970","vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_d_ts-node_modules_io-1d9f06":"95ab1508",webpack_sharing_consume_default_react_react:"9749d585","webpack_sharing_consume_default_prop-types_prop-types":"0e28b347","webpack_sharing_consume_default_react-dom_react-dom":"1f2f2a35","webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585":"12628b28","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694110":"56f0526e","vendors-node_modules_mui_icons-material_esm_index_js":"baf6e6c7","vendors-node_modules_mui_material_index_js":"abe38e5c","vendors-node_modules_mui_styles_withStyles_withStyles_js":"a34a18ba","vendors-node_modules_mui_styles_index_js-node_modules_mui_utils_capitalize_capitalize_js-node-bfcaa8":"50db523c","node_modules_prop-types_index_js":"7e14cd38","vendors-node_modules_react-dom_index_js":"0e0a77e9",node_modules_react_index_js:"e90c6dbd","vendors-src_AdapterExist_jsx-src_BackupNow_jsx-src_CheckConfigInvisible_jsx-src_DetectConfig_-7de9ab":"6fa0aec3",src_Components_jsx:"aa78e959","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694111":"10cec9b6"}[n]+".chunk.js",e.miniCssF=n=>{},e.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(n){if(typeof window=="object")return window}}(),e.o=(n,l)=>Object.prototype.hasOwnProperty.call(n,l),(()=>{var n={},l="iobroker-admin-component-backitup:";e.l=(s,u,f,v)=>{if(n[s]){n[s].push(u);return}var i,g;if(f!==void 0)for(var m=document.getElementsByTagName("script"),j=0;j<m.length;j++){var p=m[j];if(p.getAttribute("src")==s||p.getAttribute("data-webpack")==l+f){i=p;break}}i||(g=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,e.nc&&i.setAttribute("nonce",e.nc),i.setAttribute("data-webpack",l+f),i.src=s),n[s]=[u];var b=(S,w)=>{i.onerror=i.onload=null,clearTimeout(y);var x=n[s];if(delete n[s],i.parentNode&&i.parentNode.removeChild(i),x&&x.forEach(h=>h(w)),S)return S(w)},y=setTimeout(b.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=b.bind(null,i.onerror),i.onload=b.bind(null,i.onload),g&&document.head.appendChild(i)}})(),e.r=n=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{e.S={};var n={},l={};e.I=(s,u)=>{u||(u=[]);var f=l[s];if(f||(f=l[s]={}),!(u.indexOf(f)>=0)){if(u.push(f),n[s])return n[s];e.o(e.S,s)||(e.S[s]={});var v=e.S[s],i=b=>{typeof console!="undefined"&&console.warn&&console.warn(b)},g="iobroker-admin-component-backitup",m=(b,y,S,w)=>{var x=v[b]=v[b]||{},h=x[y];(!h||!h.loaded&&(!w!=!h.eager?w:g>h.from))&&(x[y]={get:S,from:g,eager:!!w})},j=b=>{var y=h=>i("Initialization of sharing external failed: "+h);try{var S=e(b);if(!S)return;var w=h=>h&&h.init&&h.init(e.S[s],u);if(S.then)return p.push(S.then(w,y));var x=w(S);if(x&&x.then)return p.push(x.catch(y))}catch(h){y(h)}},p=[];switch(s){case"default":m("@iobroker/adapter-react-v5","4.13.11",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_react-icons_fa_index_mjs"),e.e("vendors-node_modules_iobroker_adapter-react-v5_Components_Loader_js-node_modules_iobroker_ada-6c96ca"),e.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_d_ts-node_modules_io-1d9f06"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom"),e.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585"),e.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694110")]).then(()=>()=>e(64620))),m("@mui/icons-material","5.15.15",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_icons-material_esm_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(58597))),m("@mui/material","5.14.14",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_mui_material_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(83709))),m("@mui/styles","5.14.14",()=>Promise.all([e.e("vendors-node_modules_mui_styles_withStyles_withStyles_js"),e.e("vendors-node_modules_mui_styles_index_js-node_modules_mui_utils_capitalize_capitalize_js-node-bfcaa8"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(92183))),m("prop-types","15.8.1",()=>e.e("node_modules_prop-types_index_js").then(()=>()=>e(75826))),m("react-dom","18.2.0",()=>Promise.all([e.e("vendors-node_modules_react-dom_index_js"),e.e("webpack_sharing_consume_default_react_react")]).then(()=>()=>e(22483))),m("react","18.2.0",()=>e.e("node_modules_react_index_js").then(()=>()=>e(77810)));break}return p.length?n[s]=Promise.all(p).then(()=>n[s]=1):n[s]=1}}})(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var l=e.g.document;if(!n&&l&&(l.currentScript&&(n=l.currentScript.src),!n)){var s=l.getElementsByTagName("script");if(s.length)for(var u=s.length-1;u>-1&&(!n||!/^http(s?):/.test(n));)n=s[u--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=t=>{var o=_=>_.split(".").map(d=>+d==d?+d:d),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),a=r[1]?o(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,o(r[2]))),r[3]&&(a.push([]),a.push.apply(a,o(r[3]))),a},l=(t,o)=>{t=n(t),o=n(o);for(var r=0;;){if(r>=t.length)return r<o.length&&(typeof o[r])[0]!="u";var a=t[r],_=(typeof a)[0];if(r>=o.length)return _=="u";var d=o[r],c=(typeof d)[0];if(_!=c)return _=="o"&&c=="n"||c=="s"||_=="u";if(_!="o"&&_!="u"&&a!=d)return a<d;r++}},s=t=>{var o=t[0],r="";if(t.length===1)return"*";if(o+.5){r+=o==0?">=":o==-1?"<":o==1?"^":o==2?"~":o>0?"=":"!=";for(var a=1,_=1;_<t.length;_++)a--,r+=(typeof(c=t[_]))[0]=="u"?"-":(a>0?".":"")+(a=2,c);return r}var d=[];for(_=1;_<t.length;_++){var c=t[_];d.push(c===0?"not("+k()+")":c===1?"("+k()+" || "+k()+")":c===2?d.pop()+" "+d.pop():s(c))}return k();function k(){return d.pop().replace(/^\((.+)\)$/,"$1")}},u=(t,o)=>{if(0 in t){o=n(o);var r=t[0],a=r<0;a&&(r=-r-1);for(var _=0,d=1,c=!0;;d++,_++){var k,B,P=d<t.length?(typeof t[d])[0]:"";if(_>=o.length||(B=(typeof(k=o[_]))[0])=="o")return!c||(P=="u"?d>r&&!a:P==""!=a);if(B=="u"){if(!c||P!="u")return!1}else if(c)if(P==B)if(d<=r){if(k!=t[d])return!1}else{if(a?k>t[d]:k<t[d])return!1;k!=t[d]&&(c=!1)}else if(P!="s"&&P!="n"){if(a||d<=r)return!1;c=!1,d--}else{if(d<=r||B<P!=a)return!1;c=!1}else P!="s"&&P!="n"&&(c=!1,d--)}}var z=[],V=z.pop.bind(z);for(_=1;_<t.length;_++){var M=t[_];z.push(M==1?V()|V():M==2?V()&V():M?u(M,o):!V())}return!!V()},f=(t,o)=>{var r=e.S[t];if(!r||!e.o(r,o))throw new Error("Shared module "+o+" doesn't exist in shared scope "+t);return r},v=(t,a)=>{var r=t[a],a=Object.keys(r).reduce((_,d)=>!_||l(_,d)?d:_,0);return a&&r[a]},i=(t,o)=>{var r=t[o];return Object.keys(r).reduce((a,_)=>!a||!r[a].loaded&&l(a,_)?_:a,0)},g=(t,o,r,a)=>"Unsatisfied version "+r+" from "+(r&&t[o][r].from)+" of shared singleton module "+o+" (required "+s(a)+")",m=(t,o,r,a)=>{var _=i(t,r);return h(t[r][_])},j=(t,o,r,a)=>{var _=i(t,r);return u(a,_)||w(g(t,r,_,a)),h(t[r][_])},p=(t,o,r,a)=>{var _=i(t,r);if(!u(a,_))throw new Error(g(t,r,_,a));return h(t[r][_])},b=(t,_,r)=>{var a=t[_],_=Object.keys(a).reduce((d,c)=>u(r,c)&&(!d||l(d,c))?c:d,0);return _&&a[_]},y=(t,o,r,a)=>{var _=t[r];return"No satisfying version ("+s(a)+") of shared module "+r+" found in shared scope "+o+`.
Available versions: `+Object.keys(_).map(d=>d+" from "+_[d].from).join(", ")},S=(t,o,r,a)=>{var _=b(t,r,a);if(_)return h(_);throw new Error(y(t,o,r,a))},w=t=>{typeof console!="undefined"&&console.warn&&console.warn(t)},x=(t,o,r,a)=>{w(y(t,o,r,a))},h=t=>(t.loaded=1,t.get()),C=t=>function(o,r,a,_){var d=e.I(o);return d&&d.then?d.then(t.bind(t,o,e.S[o],r,a,_)):t(o,e.S[o],r,a,_)},D=C((t,o,r)=>(f(t,r),h(v(o,r)))),U=C((t,o,r,a)=>o&&e.o(o,r)?h(v(o,r)):a()),G=C((t,o,r,a)=>(f(t,r),h(b(o,r,a)||x(o,t,r,a)||v(o,r)))),H=C((t,o,r)=>(f(t,r),m(o,t,r))),I=C((t,o,r,a)=>(f(t,r),j(o,t,r,a))),J=C((t,o,r,a)=>(f(t,r),S(o,t,r,a))),K=C((t,o,r,a)=>(f(t,r),p(o,t,r,a))),W=C((t,o,r,a,_)=>!o||!e.o(o,r)?_():h(b(o,r,a)||x(o,t,r,a)||v(o,r))),Q=C((t,o,r,a)=>!o||!e.o(o,r)?a():m(o,t,r)),E=C((t,o,r,a,_)=>!o||!e.o(o,r)?_():j(o,t,r,a)),R=C((t,o,r,a,_)=>{var d=o&&e.o(o,r)&&b(o,r,a);return d?h(d):_()}),X=C((t,o,r,a,_)=>!o||!e.o(o,r)?_():p(o,t,r,a)),T={},N={28437:()=>E("default","react",[0],()=>e.e("node_modules_react_index_js").then(()=>()=>e(77810))),95973:()=>E("default","prop-types",[0],()=>e.e("node_modules_prop-types_index_js").then(()=>()=>e(75826))),23479:()=>E("default","react-dom",[0],()=>e.e("vendors-node_modules_react-dom_index_js").then(()=>()=>e(22483))),67085:()=>E("default","@mui/material",[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_mui_material_index_js"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(83709))),21839:()=>E("default","@mui/icons-material",[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_icons-material_esm_index_js")]).then(()=>()=>e(58597))),70143:()=>E("default","@mui/styles",[0],()=>Promise.all([e.e("vendors-node_modules_mui_styles_withStyles_withStyles_js"),e.e("vendors-node_modules_mui_styles_index_js-node_modules_mui_utils_capitalize_capitalize_js-node-bfcaa8")]).then(()=>()=>e(92183))),37449:()=>E("default","@iobroker/adapter-react-v5",[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_iobroker_adapter-react-v5_Components_Loader_js-node_modules_iobroker_ada-6c96ca"),e.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_d_ts-node_modules_io-1d9f06"),e.e("webpack_sharing_consume_default_react-dom_react-dom"),e.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694111")]).then(()=>()=>e(64620)))},$={webpack_sharing_consume_default_react_react:[28437],"webpack_sharing_consume_default_prop-types_prop-types":[95973],"webpack_sharing_consume_default_react-dom_react-dom":[23479],"webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585":[67085,21839,70143,37449]},F={};e.f.consumes=(t,o)=>{e.o($,t)&&$[t].forEach(r=>{if(e.o(T,r))return o.push(T[r]);if(!F[r]){var a=c=>{T[r]=0,e.m[r]=k=>{delete e.c[r],k.exports=c()}};F[r]=!0;var _=c=>{delete T[r],e.m[r]=k=>{throw delete e.c[r],c}};try{var d=N[r]();d.then?o.push(T[r]=d.then(a).catch(_)):a(d)}catch(c){_(c)}}})}})(),(()=>{var n={ConfigCustomBackItUpSet:0};e.f.j=(u,f)=>{var v=e.o(n,u)?n[u]:void 0;if(v!==0)if(v)f.push(v[2]);else if(/^webpack_sharing_consume_default_(react(\-dom_react\-dom|_react)|iobroker_adapter\-react\-v5_iobroker_adapter\-react\-v5\-webpack_s\-344585|prop\-types_prop\-types)$/.test(u))n[u]=0;else{var i=new Promise((p,b)=>v=n[u]=[p,b]);f.push(v[2]=i);var g=e.p+e.u(u),m=new Error,j=p=>{if(e.o(n,u)&&(v=n[u],v!==0&&(n[u]=void 0),v)){var b=p&&(p.type==="load"?"missing":p.type),y=p&&p.target&&p.target.src;m.message="Loading chunk "+u+` failed.
(`+b+": "+y+")",m.name="ChunkLoadError",m.type=b,m.request=y,v[1](m)}};e.l(g,j,"chunk-"+u,u)}};var l=(u,f)=>{var v=f[0],i=f[1],g=f[2],m,j,p=0;if(v.some(y=>n[y]!==0)){for(m in i)e.o(i,m)&&(e.m[m]=i[m]);if(g)var b=g(e)}for(u&&u(f);p<v.length;p++)j=v[p],e.o(n,j)&&n[j]&&n[j][0](),n[j]=0},s=self.webpackChunkiobroker_admin_component_backitup=self.webpackChunkiobroker_admin_component_backitup||[];s.forEach(l.bind(null,0)),s.push=l.bind(null,s.push.bind(s))})(),e.nc=void 0;var L=e(23009);ConfigCustomBackItUpSet=L})();

//# sourceMappingURL=customComponents.js.map