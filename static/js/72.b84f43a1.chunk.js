(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[72],{1739:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1072:function(e,n,t){"use strict";t.r(n),t.d(n,{I18nContext:function(){return B},I18nextProvider:function(){return q},Trans:function(){return K},TransWithoutContext:function(){return z},Translation:function(){return M},composeInitialProps:function(){return V},date:function(){return J},getDefaults:function(){return S},getI18n:function(){return C},getInitialProps:function(){return F},initReactI18next:function(){return A},number:function(){return Q},plural:function(){return _},select:function(){return X},selectOrdinal:function(){return ee},setDefaults:function(){return I},setI18n:function(){return j},time:function(){return G},useSSR:function(){return Y},useTranslation:function(){return H},withSSR:function(){return Z},withTranslation:function(){return W}});var r=t(2747),i=t(7462),s=t(1739),o=t.n(s),a=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function c(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(o()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(a),s=null;null!==(s=i.exec(e));)if(s[0].trim())if(s[1]){var c=s[1].trim(),u=[c,""];c.indexOf("=")>-1&&(u=c.split("=")),n.attrs[u[0]]=u[1],i.lastIndex--}else s[2]&&(n.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return n}var u=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,l=/^\s*$/,p=Object.create(null);function f(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(f,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var d={parse:function(e,n){n||(n={}),n.components||(n.components=p);var t,r=[],i=[],s=-1,o=!1;if(0!==e.indexOf("<")){var a=e.indexOf("<");r.push({type:"text",content:-1===a?e:e.substring(0,a)})}return e.replace(u,(function(a,u){if(o){if(a!=="</"+t.name+">")return;o=!1}var p,f="/"!==a.charAt(1),d=a.startsWith("\x3c!--"),g=u+a.length,h=e.charAt(g);if(d){var m=c(a);return s<0?(r.push(m),r):((p=i[s]).children.push(m),r)}if(f&&(s++,"tag"===(t=c(a)).type&&n.components[t.name]&&(t.type="component",o=!0),t.voidElement||o||!h||"<"===h||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===s&&r.push(t),(p=i[s-1])&&p.children.push(t),i[s]=t),(!f||t.voidElement)&&(s>-1&&(t.voidElement||t.name===a.slice(2,-1))&&(s--,t=-1===s?r:i[s]),!o&&"<"!==h&&h)){p=-1===s?r:i[s].children;var y=e.indexOf("<",g),v=e.slice(g,-1===y?void 0:y);l.test(v)&&(v=" "),(y>-1&&s+p.length>=0||" "!==v)&&p.push({type:"text",content:v})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+f("",n)}),"")}},g=d;function h(){if(console&&console.warn){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}const m={};function y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&m[n[0]]||("string"==typeof n[0]&&(m[n[0]]=new Date),h(...n))}const v=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}};function b(e,n,t){e.loadNamespaces(n,v(e,t))}function x(e,n,t,r){"string"==typeof t&&(t=[t]),t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,v(e,r))}function N(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}const E=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,$={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},w=e=>$[e];let O,k={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(E,w)};function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k={...k,...e}}function S(){return k}function j(e){O=e}function C(){return O}function R(e,n){if(!e)return!1;const t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function L(e){if(!e)return[];const n=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?T(n):n}function T(e){return Array.isArray(e)?e:[e]}function P(e,n){if(!e)return"";let t="";const i=T(e),s=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return i.forEach(((e,i)=>{if("string"==typeof e)t+=`${e}`;else if((0,r.isValidElement)(e)){const r=Object.keys(e.props).length,o=s.indexOf(e.type)>-1,a=e.props.children;if(!a&&o&&0===r)t+=`<${e.type}/>`;else if(a||o&&0===r)if(e.props.i18nIsDynamicList)t+=`<${i}></${i}>`;else if(o&&1===r&&"string"==typeof a)t+=`<${e.type}>${a}</${e.type}>`;else{const e=P(a,n);t+=`<${i}>${e}</${i}>`}else t+=`<${i}></${i}>`}else if(null===e)h("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"==typeof e){const{format:n,...r}=e,i=Object.keys(r);if(1===i.length){const e=n?`${i[0]}, ${n}`:i[0];t+=`{{${e}}}`}else h("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else h("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function z(e){let{children:n,count:t,parent:s,i18nKey:o,context:a,tOptions:c={},values:u,defaults:l,components:p,ns:f,i18n:d,t:h,shouldUnescape:m,...v}=e;const b=d||C();if(!b)return y("You will need to pass in an i18next instance by using i18nextReactModule"),n;const x=h||b.t.bind(b)||(e=>e);a&&(c.context=a);const N={...S(),...b.options&&b.options.react};let E=f||x.ns||b.options&&b.options.defaultNS;E="string"==typeof E?[E]:E||["translation"];const $=P(n,N),w=l||$||N.transEmptyNodeValue||o,{hashTransKey:O}=N,k=o||(O?O($||w):$||w),I=u?c.interpolation:{interpolation:{...c.interpolation,prefix:"#$?",suffix:"?$#"}},j={...c,count:t,...u,...I,defaultValue:w,ns:E},z=function(e,n,t,s,o,a){if(""===n)return[];const c=s.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(c.map((e=>`<${e}`)).join("|")).test(n);if(!e&&!u&&!a)return[n];const l={};!function e(n){T(n).forEach((n=>{"string"!=typeof n&&(R(n)?e(L(n)):"object"!=typeof n||(0,r.isValidElement)(n)||Object.assign(l,n))}))}(e);const p=g.parse(`<0>${n}</0>`),f={...l,...o};function d(e,n,t){const i=L(e),s=m(i,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((e=>(0,r.isValidElement)(e)))}(i)&&0===s.length||e.props&&e.props.i18nIsDynamicList?i:s}function h(e,n,t,s,o){e.dummy?(e.children=n,t.push((0,r.cloneElement)(e,{key:s},o?void 0:n))):t.push(...r.Children.map([e],(e=>{const t={...e.props};return delete t.i18nIsDynamicList,r.createElement(e.type,(0,i.Z)({},t,{key:s,ref:e.ref},o?{}:{children:n}))})))}function m(n,i,o){const l=T(n);return T(i).reduce(((n,i,p)=>{const g=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){let a=l[parseInt(i.name,10)];1!==o.length||a||(a=o[0][i.name]),a||(a={});const y=0!==Object.keys(i.attrs).length?function(e,n){const t={...n};return t.props=Object.assign(e.props,n.props),t}({props:i.attrs},a):a,v=(0,r.isValidElement)(y),b=v&&R(i,!0)&&!i.voidElement,x=u&&"object"==typeof y&&y.dummy&&!v,N="object"==typeof e&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof y){const e=t.services.interpolator.interpolate(y,f,t.language);n.push(e)}else if(R(y)||b)h(y,d(y,i,o),n,p);else if(x)h(y,m(l,i.children,o),n,p);else if(Number.isNaN(parseFloat(i.name)))if(N)h(y,d(y,i,o),n,p,i.voidElement);else if(s.transSupportBasicHtmlNodes&&c.indexOf(i.name)>-1)if(i.voidElement)n.push((0,r.createElement)(i.name,{key:`${i.name}-${p}`}));else{const e=m(l,i.children,o);n.push((0,r.createElement)(i.name,{key:`${i.name}-${p}`},e))}else if(i.voidElement)n.push(`<${i.name} />`);else{const e=m(l,i.children,o);n.push(`<${i.name}>${e}</${i.name}>`)}else if("object"!=typeof y||v)h(y,g,n,p,1!==i.children.length||!g);else{const e=i.children[0]?g:null;e&&n.push(e)}}else if("text"===i.type){const e=s.transWrapTextNodes,o=a?s.unescape(t.services.interpolator.interpolate(i.content,f,t.language)):t.services.interpolator.interpolate(i.content,f,t.language);e?n.push((0,r.createElement)(e,{key:`${i.name}-${p}`},o)):n.push(o)}return n}),[])}return L(m([{dummy:!0,children:e||[]}],p,T(e||[]))[0])}(p||n,k?x(k,j):w,b,N,j,m),A=void 0!==s?s:N.defaultTransParent;return A?(0,r.createElement)(A,v,z):z}const A={type:"3rdParty",init(e){I(e.options.react),j(e)}},B=(0,r.createContext)();class U{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function V(e){return n=>new Promise((t=>{const r=F();e.getInitialProps?e.getInitialProps(n).then((e=>{t({...e,...r})})):t(r)}))}function F(){const e=C(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((t=>{r[t]={},n.forEach((n=>{r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function K(e){let{children:n,count:t,parent:i,i18nKey:s,context:o,tOptions:a={},values:c,defaults:u,components:l,ns:p,i18n:f,t:d,shouldUnescape:g,...h}=e;const{i18n:m,defaultNS:y}=(0,r.useContext)(B)||{},v=f||m||C(),b=d||v&&v.t.bind(v);return z({children:n,count:t,parent:i,i18nKey:s,context:o,tOptions:a,values:c,defaults:u,components:l,ns:p||b&&b.ns||y||v&&v.options&&v.options.defaultNS,i18n:v,t:d,shouldUnescape:g,...h})}const D=(e,n)=>{const t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current=n?t.current:e}),[e,n]),t.current};function H(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:t}=n,{i18n:i,defaultNS:s}=(0,r.useContext)(B)||{},o=t||i||C();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new U),!o){y("You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>"string"==typeof n?n:n&&"object"==typeof n&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}o.options.react&&void 0!==o.options.react.wait&&y("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...S(),...o.options.react,...n},{useSuspense:c,keyPrefix:u}=a;let l=e||s||o.options&&o.options.defaultNS;l="string"==typeof l?[l]:l||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(l);const p=(o.isInitialized||o.initializedStoreOnce)&&l.every((e=>function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,r)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=n.languages[0],i=!!n.options&&n.options.fallbackLng,s=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;const o=(e,t)=>{const r=n.services.backendConnector.state[`${e}|${t}`];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!o(r,e)||i&&!o(s,e)))}(e,n,t):(y("i18n.languages were undefined or empty",n.languages),!0)}(e,o,a)));function f(){return o.getFixedT(n.lng||null,"fallback"===a.nsMode?l:l[0],u)}const[d,g]=(0,r.useState)(f);let h=l.join();n.lng&&(h=`${n.lng}${h}`);const m=D(h),v=(0,r.useRef)(!0);(0,r.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=a;function r(){v.current&&g(f)}return v.current=!0,p||c||(n.lng?x(o,n.lng,l,(()=>{v.current&&g(f)})):b(o,l,(()=>{v.current&&g(f)}))),p&&m&&m!==h&&v.current&&g(f),e&&o&&o.on(e,r),t&&o&&o.store.on(t,r),()=>{v.current=!1,e&&o&&e.split(" ").forEach((e=>o.off(e,r))),t&&o&&t.split(" ").forEach((e=>o.store.off(e,r)))}}),[o,h]);const N=(0,r.useRef)(!0);(0,r.useEffect)((()=>{v.current&&!N.current&&g(f),N.current=!1}),[o,u]);const E=[d,o,p];if(E.t=d,E.i18n=o,E.ready=p,p)return E;if(!p&&!c)return E;throw new Promise((e=>{n.lng?x(o,n.lng,l,(()=>e())):b(o,l,(()=>e()))}))}function W(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function i(i){let{forwardedRef:s,...o}=i;const[a,c,u]=H(e,{...o,keyPrefix:n.keyPrefix}),l={...o,t:a,i18n:c,tReady:u};return n.withRef&&s?l.ref=s:!n.withRef&&s&&(l.forwardedRef=s),(0,r.createElement)(t,l)}return i.displayName=`withI18nextTranslation(${N(t)})`,i.WrappedComponent=t,n.withRef?(0,r.forwardRef)(((e,n)=>(0,r.createElement)(i,Object.assign({},e,{forwardedRef:n})))):i}}function M(e){const{ns:n,children:t,...r}=e,[i,s,o]=H(n,r);return t(i,{i18n:s,lng:s.language},o)}function q(e){let{i18n:n,defaultNS:t,children:i}=e;const s=(0,r.useMemo)((()=>({i18n:n,defaultNS:t})),[n,t]);return(0,r.createElement)(B.Provider,{value:s},i)}function Y(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{i18n:i}=t,{i18n:s}=(0,r.useContext)(B)||{},o=i||s||C();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce(((e,n)=>(Object.keys(n).forEach((n=>{e.indexOf(n)<0&&e.push(n)})),e)),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}function Z(){return function(e){function n(n){let{initialI18nStore:t,initialLanguage:i,...s}=n;return Y(t,i),(0,r.createElement)(e,{...s})}return n.getInitialProps=V(e),n.displayName=`withI18nextSSR(${N(e)})`,n.WrappedComponent=e,n}}const J=()=>"",G=()=>"",Q=()=>"",X=()=>"",_=()=>"",ee=()=>""}}]);
//# sourceMappingURL=72.b84f43a1.chunk.js.map