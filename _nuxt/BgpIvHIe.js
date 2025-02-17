var bt=Object.defineProperty;var ke=n=>{throw TypeError(n)};var Et=(n,e,t)=>e in n?bt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var _=(n,e,t)=>Et(n,typeof e!="symbol"?e+"":e,t),me=(n,e,t)=>e.has(n)||ke("Cannot "+t);var p=(n,e,t)=>(me(n,e,"read from private field"),t?t.call(n):e.get(n)),N=(n,e,t)=>e.has(n)?ke("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),S=(n,e,t,s)=>(me(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t),B=(n,e,t)=>(me(n,e,"access private method"),t);import{d as St,a as Tt,b as At,u as oe,r as _t,c as Ct,e as Xe,f as se,o as Rt,_ as $t,g as Ot,h as ee,i as ce,j as je,n as Mt,F as Nt,k as P,w as Ie,T as Le,l as De,m as te,t as Pt,p as kt,q as Ze,s as jt,v as We,x as Qe,y as It,z as Lt,A as Dt,B as Wt}from"./CN0JRevo.js";import{loadDatabaseAdapter as Z}from"./BsFitMuZ.js";import{r as zt}from"./CmUGqnUZ.js";const Ft={default:{type:"string",tags:["@previewInput string"]},string:{type:"string",tags:["@previewInput string"]},number:{type:"number",tags:["@previewInput number"]},boolean:{type:"boolean",tags:["@previewInput boolean"]},array:{type:"array",tags:["@previewInput array"]},object:{type:"object",tags:["@previewInput object"]},file:{type:"string",tags:["@previewInput file"]},media:{type:"string",tags:["@previewInput media"]},component:{type:"string",tags:["@previewInput component"]},icon:{type:"string",tags:["@previewInput icon"]}};function Bt(n){if(!n.type)throw new Error(`Missing type in schema ${JSON.stringify(n)}`);const e=JSON.parse(JSON.stringify(Ft[n.type])),t=St(e,n);return t.tags||(t.tags=[]),t.icon&&(t.tags.push(`@previewIcon ${t.icon}`),delete t.icon),{$schema:t}}function qt(n){const e={...n};e.icon&&(e.tags=[`@previewIcon ${e.icon}`],delete e.icon);const t={};if(e.fields){for(const s of Object.keys(e.fields))t[s]=e.fields[s];delete e.fields}return{$schema:e,...t}}const Vt=Tt({appConfig:{parent:qt({title:"Test",description:"This is a pure test",fields:{primo:Bt({title:"Questo è il primo",type:"string",description:"Questa è la descrizione del primo",default:"Ok"})}})}}),Ut={nuxt:{}},Ht=At(Vt,Ut);function Ye(){const n=oe();return n._appConfig||(n._appConfig=_t(Ht)),n._appConfig}const Kt={key:0},Gt={key:0},Jt={id:"__preview_loader"},Xt=Ct({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},api:{type:String,required:!0},initializePreview:{type:Function,required:!0}},setup(n){const e=n,t=["__nuxt_preview","__preview_enabled"],s=oe(),r=Xe(),i=se(!0),o=se(!1),a=se(!1),c=se("");let l;const h=async()=>{De("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await r.replace({query:{preview:void 0}}),window.location.reload()},d=async g=>{await e.initializePreview(g),De("previewToken").value&&(a.value=!0,await r.replace({query:{}}),s.callHook("nuxt-content:preview:ready"),window.parent&&window.self!==window.parent&&l.disconnect())};return Rt(async()=>{l=(await $t(()=>import("./RqoUCiIh.js"),[],import.meta.url)).connect(`${e.api}/preview`,{transports:["websocket","polling"],auth:{token:e.previewToken}});let m;l.on("connect",()=>{m=setTimeout(()=>{a.value||(m=setTimeout(()=>{c.value="Preview sync timed out",a.value=!1},3e4),l.emit("draft:requestSync"))},3e4)});const w=()=>{m&&(clearTimeout(m),m=null)};l.on("draft:sync",async u=>{if(w(),!u){try{l.once("draft:ready",()=>{l.emit("draft:requestSync")}),await $fetch("api/projects/preview/sync",{baseURL:e.api,method:"POST",params:{token:e.previewToken}})}catch(f){switch(w(),f.response.status){case 404:c.value="Preview draft not found",a.value=!1;break;default:c.value="An error occurred while syncing preview",a.value=!1}}return}d(u)}),l.on("draft:unauthorized",()=>{w(),c.value="Unauthorized preview",a.value=!1}),l.on("disconnect",()=>{w()}),document.body.classList.add(...t)}),Ot(()=>{document.body.classList.remove(...t)}),(g,m)=>(te(),ee("div",null,[i.value?(te(),ee("div",{key:0,id:"__nuxt_preview",class:Mt({__preview_ready:a.value,__preview_refreshing:o.value})},[a.value?(te(),ee(Nt,{key:0},[m[0]||(m[0]=P("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[P("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),m[1]||(m[1]=P("span",null,"Preview enabled",-1)),P("button",{onClick:h}," Close ")],64)):ce("",!0)],2)):ce("",!0),je(Le,{name:"preview-loading"},{default:Ie(()=>[i.value&&!a.value&&!c.value?(te(),ee("div",Kt,[m[4]||(m[4]=P("div",{id:"__preview_background"},null,-1)),P("div",{id:"__preview_loader"},[m[2]||(m[2]=P("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[P("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),m[3]||(m[3]=P("p",null,"Initializing the preview...",-1)),P("button",{onClick:h}," Cancel ")])])):ce("",!0)]),_:1}),je(Le,{name:"preview-loading"},{default:Ie(()=>[c.value?(te(),ee("div",Gt,[m[5]||(m[5]=P("div",{id:"__preview_background"},null,-1)),P("div",Jt,[P("p",null,Pt(c.value),1),P("button",{onClick:h}," Exit preview ")])])):ce("",!0)]),_:1})]))}}),Zt=kt(Xt,[["__scopeId","data-v-b820cd53"]]),Qt=/^[A-Za-z]:\//;function de(n=""){return n&&n.replace(/\\/g,"/").replace(Qt,e=>e.toUpperCase())}const Yt=/^[/\\]{2}/,en=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,et=/^[A-Za-z]:$/,tn=/.(\.[^./]+|\.)$/,nn=/^[/\\]|^[a-zA-Z]:[/\\]/,sn=function(n){if(n.length===0)return".";n=de(n);const e=n.match(Yt),t=Ee(n),s=n[n.length-1]==="/";return n=rn(n,!t),n.length===0?t?"/":s?"./":".":(s&&(n+="/"),et.test(n)&&(n+="/"),e?t?`//${n}`:`//./${n}`:t&&!Ee(n)?`/${n}`:n)},tt=function(...n){let e="";for(const t of n)if(t)if(e.length>0){const s=e[e.length-1]==="/",r=t[0]==="/";s&&r?e+=t.slice(1):e+=s||r?t:`/${t}`}else e+=t;return sn(e)};function rn(n,e){let t="",s=0,r=-1,i=0,o=null;for(let a=0;a<=n.length;++a){if(a<n.length)o=n[a];else{if(o==="/")break;o="/"}if(o==="/"){if(!(r===a-1||i===1))if(i===2){if(t.length<2||s!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",s=0):(t=t.slice(0,c),s=t.length-1-t.lastIndexOf("/")),r=a,i=0;continue}else if(t.length>0){t="",s=0,r=a,i=0;continue}}e&&(t+=t.length>0?"/..":"..",s=2)}else t.length>0?t+=`/${n.slice(r+1,a)}`:t=n.slice(r+1,a),s=a-r-1;r=a,i=0}else o==="."&&i!==-1?++i:i=-1}return t}const Ee=function(n){return en.test(n)},on=function(n){if(n==="..")return"";const e=tn.exec(de(n));return e&&e[1]||""},nt=function(n){const e=de(n).replace(/\/$/,"").split("/").slice(0,-1);return e.length===1&&et.test(e[0])&&(e[0]+="/"),e.join("/")||(Ee(n)?"/":".")},an=function(n,e){const t=de(n).split("/");let s="";for(let r=t.length-1;r>=0;r--){const i=t[r];if(i){s=i;break}}return e&&s.endsWith(e)?s.slice(0,-e.length):s},cn=function(n){var r,i;const e=((i=(r=nn.exec(n))==null?void 0:r[0])==null?void 0:i.replace(/\\/g,"/"))||"",t=an(n),s=on(t);return{root:e,dir:nt(n),base:t,ext:s,name:t.slice(0,t.length-s.length)}},F={appConfig:"app.config.ts",appConfigV4:"app/app.config.ts",nuxtConfig:"nuxt.config.ts"};function ue(n){return n!=null&&n.startsWith("content/")?n.split("/").slice(1).join("/"):Ze(n)}function we(n){const e=ue(n);return tt(nt(e),cn(e).name)}function ln(n=[],e,t){const s=[...e||[]],r=[...t||[]],i=JSON.parse(JSON.stringify(n));for(const a of s)if(a.new)i.push({path:a.path,parsed:a.parsed});else if(a.oldPath)if(r.splice(r.findIndex(l=>l.path===a.oldPath),1),s.find(l=>l.path===a.oldPath))i.push({path:a.path,parsed:a.parsed});else{const l=i.find(h=>h.path===a.oldPath);l&&(l.path=a.path,a.parsed?l.parsed=a.parsed:a.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{l.parsed[h]=a.pathMeta[h]}))}else{const c=i.find(l=>l.path===a.path);c?Object.assign(c,{path:a.path,parsed:a.parsed}):i.push({path:a.path,parsed:a.parsed})}for(const a of r)i.splice(i.findIndex(c=>c.path===a.path),1);const o=new Intl.Collator(void 0,{numeric:!0});return i.sort((a,c)=>o.compare(a.path,c.path)),i}const pn=jt((n,e,t)=>{if(Array.isArray(n[e])&&Array.isArray(t))return n[e]=t,!0}),un=n=>{let e;return t=>(e||(e=n()),e)};function st(n,e){for(const t in n){const s=e[t];t in e||delete n[t],s!==null&&typeof s=="object"&&st(n[t],e[t])}}function it(n,e){for(const t in e){const s=e[t];s!==null&&typeof s=="object"?Array.isArray(s)&&Array.isArray(n[t])?n[t]=s:(n[t]=n[t]||{},it(n[t],s)):n[t]=s}}function rt(n){const[e,...t]=n.include.includes("*")?n.include.split("*"):["",n.include];return{fixed:e||"",dynamic:"*"+t.join("*")}}const ot=(n,e,t)=>{const{fixed:s}=rt(t),r=n.parsed._path.substring(s.length),i=tt((t==null?void 0:t.prefix)||"",r),o={id:n.parsed._id,stem:n.parsed._stem,meta:{},extension:n.parsed._extension,path:i},a=e.schema.definitions[e.name].properties;return Object.keys(n.parsed).forEach(c=>{c in a?o[c]=n.parsed[c]:o.meta[c]=n.parsed[c]}),o};function hn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ve,ze;function fn(){if(ze)return ve;ze=1,ve=n;function n(s,r,i){s instanceof RegExp&&(s=e(s,i)),r instanceof RegExp&&(r=e(r,i));var o=t(s,r,i);return o&&{start:o[0],end:o[1],pre:i.slice(0,o[0]),body:i.slice(o[0]+s.length,o[1]),post:i.slice(o[1]+r.length)}}function e(s,r){var i=r.match(s);return i?i[0]:null}n.range=t;function t(s,r,i){var o,a,c,l,h,d=i.indexOf(s),g=i.indexOf(r,d+1),m=d;if(d>=0&&g>0){if(s===r)return[d,g];for(o=[],c=i.length;m>=0&&!h;)m==d?(o.push(m),d=i.indexOf(s,m+1)):o.length==1?h=[o.pop(),g]:(a=o.pop(),a<c&&(c=a,l=g),g=i.indexOf(r,m+1)),m=d<g&&d>=0?d:g;o.length&&(h=[c,l])}return h}return ve}var ye,Fe;function dn(){if(Fe)return ye;Fe=1;var n=fn();ye=h;var e="\0SLASH"+Math.random()+"\0",t="\0OPEN"+Math.random()+"\0",s="\0CLOSE"+Math.random()+"\0",r="\0COMMA"+Math.random()+"\0",i="\0PERIOD"+Math.random()+"\0";function o(f){return parseInt(f,10)==f?parseInt(f,10):f.charCodeAt(0)}function a(f){return f.split("\\\\").join(e).split("\\{").join(t).split("\\}").join(s).split("\\,").join(r).split("\\.").join(i)}function c(f){return f.split(e).join("\\").split(t).join("{").split(s).join("}").split(r).join(",").split(i).join(".")}function l(f){if(!f)return[""];var v=[],x=n("{","}",f);if(!x)return f.split(",");var y=x.pre,$=x.body,k=x.post,E=y.split(",");E[E.length-1]+="{"+$+"}";var L=l(k);return k.length&&(E[E.length-1]+=L.shift(),E.push.apply(E,L)),v.push.apply(v,E),v}function h(f){return f?(f.substr(0,2)==="{}"&&(f="\\{\\}"+f.substr(2)),u(a(f),!0).map(c)):[]}function d(f){return"{"+f+"}"}function g(f){return/^-?0\d/.test(f)}function m(f,v){return f<=v}function w(f,v){return f>=v}function u(f,v){var x=[],y=n("{","}",f);if(!y)return[f];var $=y.pre,k=y.post.length?u(y.post,!1):[""];if(/\$$/.test(y.pre))for(var E=0;E<k.length;E++){var L=$+"{"+y.body+"}"+k[E];x.push(L)}else{var gt=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(y.body),Ce=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(y.body),ae=gt||Ce,mt=y.body.indexOf(",")>=0;if(!ae&&!mt)return y.post.match(/,.*\}/)?(f=y.pre+"{"+y.body+s+y.post,u(f)):[f];var O;if(ae)O=y.body.split(/\.\./);else if(O=l(y.body),O.length===1&&(O=u(O[0],!1).map(d),O.length===1))return k.map(function(xt){return y.pre+O[0]+xt});var H;if(ae){var Re=o(O[0]),$e=o(O[1]),wt=Math.max(O[0].length,O[1].length),Oe=O.length==3?Math.abs(o(O[2])):1,Me=m,vt=$e<Re;vt&&(Oe*=-1,Me=w);var yt=O.some(g);H=[];for(var Y=Re;Me(Y,$e);Y+=Oe){var D;if(Ce)D=String.fromCharCode(Y),D==="\\"&&(D="");else if(D=String(Y),yt){var Ne=wt-D.length;if(Ne>0){var Pe=new Array(Ne+1).join("0");Y<0?D="-"+Pe+D.slice(1):D=Pe+D}}H.push(D)}}else{H=[];for(var K=0;K<O.length;K++)H.push.apply(H,u(O[K],!1))}for(var K=0;K<H.length;K++)for(var E=0;E<k.length;E++){var L=$+H[K]+k[E];(!v||ae||L)&&x.push(L)}}return x}return ye}var gn=dn();const mn=hn(gn),wn=1024*64,he=n=>{if(typeof n!="string")throw new TypeError("invalid pattern");if(n.length>wn)throw new TypeError("pattern is too long")},vn={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},ne=n=>n.replace(/[[\]\\-]/g,"\\$&"),yn=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Be=n=>n.join(""),xn=(n,e)=>{const t=e;if(n.charAt(t)!=="[")throw new Error("not in a brace expression");const s=[],r=[];let i=t+1,o=!1,a=!1,c=!1,l=!1,h=t,d="";e:for(;i<n.length;){const u=n.charAt(i);if((u==="!"||u==="^")&&i===t+1){l=!0,i++;continue}if(u==="]"&&o&&!c){h=i+1;break}if(o=!0,u==="\\"&&!c){c=!0,i++;continue}if(u==="["&&!c){for(const[f,[v,x,y]]of Object.entries(vn))if(n.startsWith(f,i)){if(d)return["$.",!1,n.length-t,!0];i+=f.length,y?r.push(v):s.push(v),a=a||x;continue e}}if(c=!1,d){u>d?s.push(ne(d)+"-"+ne(u)):u===d&&s.push(ne(u)),d="",i++;continue}if(n.startsWith("-]",i+1)){s.push(ne(u+"-")),i+=2;continue}if(n.startsWith("-",i+1)){d=u,i+=2;continue}s.push(ne(u)),i++}if(h<i)return["",!1,0,!1];if(!s.length&&!r.length)return["$.",!1,n.length-t,!0];if(r.length===0&&s.length===1&&/^\\?.$/.test(s[0])&&!l){const u=s[0].length===2?s[0].slice(-1):s[0];return[yn(u),!1,h-t,!1]}const g="["+(l?"^":"")+Be(s)+"]",m="["+(l?"":"^")+Be(r)+"]";return[s.length&&r.length?"("+g+"|"+m+")":s.length?g:m,a,h-t,!0]},ie=(n,{windowsPathsNoEscape:e=!1}={})=>e?n.replace(/\[([^\/\\])\]/g,"$1"):n.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1"),bn=new Set(["!","?","+","*","@"]),qe=n=>bn.has(n),En="(?!(?:^|/)\\.\\.?(?:$|/))",xe="(?!\\.)",Sn=new Set(["[","."]),Tn=new Set(["..","."]),An=new Set("().*{}+?[]^$\\!"),_n=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),_e="[^/]",Ve=_e+"*?",Ue=_e+"+?";var C,R,z,b,A,q,G,V,W,J,re,X,at,U,le,Se,ct;const M=class M{constructor(e,t,s={}){N(this,X);_(this,"type");N(this,C);N(this,R);N(this,z,!1);N(this,b,[]);N(this,A);N(this,q);N(this,G);N(this,V,!1);N(this,W);N(this,J);N(this,re,!1);this.type=e,e&&S(this,R,!0),S(this,A,t),S(this,C,p(this,A)?p(p(this,A),C):this),S(this,W,p(this,C)===this?s:p(p(this,C),W)),S(this,G,p(this,C)===this?[]:p(p(this,C),G)),e==="!"&&!p(p(this,C),V)&&p(this,G).push(this),S(this,q,p(this,A)?p(p(this,A),b).length:0)}get hasMagic(){if(p(this,R)!==void 0)return p(this,R);for(const e of p(this,b))if(typeof e!="string"&&(e.type||e.hasMagic))return S(this,R,!0);return p(this,R)}toString(){return p(this,J)!==void 0?p(this,J):this.type?S(this,J,this.type+"("+p(this,b).map(e=>String(e)).join("|")+")"):S(this,J,p(this,b).map(e=>String(e)).join(""))}push(...e){for(const t of e)if(t!==""){if(typeof t!="string"&&!(t instanceof M&&p(t,A)===this))throw new Error("invalid part: "+t);p(this,b).push(t)}}toJSON(){var t;const e=this.type===null?p(this,b).slice().map(s=>typeof s=="string"?s:s.toJSON()):[this.type,...p(this,b).map(s=>s.toJSON())];return this.isStart()&&!this.type&&e.unshift([]),this.isEnd()&&(this===p(this,C)||p(p(this,C),V)&&((t=p(this,A))==null?void 0:t.type)==="!")&&e.push({}),e}isStart(){var t;if(p(this,C)===this)return!0;if(!((t=p(this,A))!=null&&t.isStart()))return!1;if(p(this,q)===0)return!0;const e=p(this,A);for(let s=0;s<p(this,q);s++){const r=p(e,b)[s];if(!(r instanceof M&&r.type==="!"))return!1}return!0}isEnd(){var t,s,r;if(p(this,C)===this||((t=p(this,A))==null?void 0:t.type)==="!")return!0;if(!((s=p(this,A))!=null&&s.isEnd()))return!1;if(!this.type)return(r=p(this,A))==null?void 0:r.isEnd();const e=p(this,A)?p(p(this,A),b).length:0;return p(this,q)===e-1}copyIn(e){typeof e=="string"?this.push(e):this.push(e.clone(this))}clone(e){const t=new M(this.type,e);for(const s of p(this,b))t.copyIn(s);return t}static fromGlob(e,t={}){var r;const s=new M(null,void 0,t);return B(r=M,U,le).call(r,e,s,0,t),s}toMMPattern(){if(this!==p(this,C))return p(this,C).toMMPattern();const e=this.toString(),[t,s,r,i]=this.toRegExpSource();if(!(r||p(this,R)||p(this,W).nocase&&!p(this,W).nocaseMagicOnly&&e.toUpperCase()!==e.toLowerCase()))return s;const a=(p(this,W).nocase?"i":"")+(i?"u":"");return Object.assign(new RegExp(`^${t}$`,a),{_src:t,_glob:e})}get options(){return p(this,W)}toRegExpSource(e){var c;const t=e??!!p(this,W).dot;if(p(this,C)===this&&B(this,X,at).call(this),!this.type){const l=this.isStart()&&this.isEnd(),h=p(this,b).map(w=>{var y;const[u,f,v,x]=typeof w=="string"?B(y=M,U,ct).call(y,w,p(this,R),l):w.toRegExpSource(e);return S(this,R,p(this,R)||v),S(this,z,p(this,z)||x),u}).join("");let d="";if(this.isStart()&&typeof p(this,b)[0]=="string"&&!(p(this,b).length===1&&Tn.has(p(this,b)[0]))){const u=Sn,f=t&&u.has(h.charAt(0))||h.startsWith("\\.")&&u.has(h.charAt(2))||h.startsWith("\\.\\.")&&u.has(h.charAt(4)),v=!t&&!e&&u.has(h.charAt(0));d=f?En:v?xe:""}let g="";return this.isEnd()&&p(p(this,C),V)&&((c=p(this,A))==null?void 0:c.type)==="!"&&(g="(?:$|\\/)"),[d+h+g,ie(h),S(this,R,!!p(this,R)),p(this,z)]}const s=this.type==="*"||this.type==="+",r=this.type==="!"?"(?:(?!(?:":"(?:";let i=B(this,X,Se).call(this,t);if(this.isStart()&&this.isEnd()&&!i&&this.type!=="!"){const l=this.toString();return S(this,b,[l]),this.type=null,S(this,R,void 0),[l,ie(this.toString()),!1,!1]}let o=!s||e||t?"":B(this,X,Se).call(this,!0);o===i&&(o=""),o&&(i=`(?:${i})(?:${o})*?`);let a="";if(this.type==="!"&&p(this,re))a=(this.isStart()&&!t?xe:"")+Ue;else{const l=this.type==="!"?"))"+(this.isStart()&&!t&&!e?xe:"")+Ve+")":this.type==="@"?")":this.type==="?"?")?":this.type==="+"&&o?")":this.type==="*"&&o?")?":`)${this.type}`;a=r+i+l}return[a,ie(i),S(this,R,!!p(this,R)),p(this,z)]}};C=new WeakMap,R=new WeakMap,z=new WeakMap,b=new WeakMap,A=new WeakMap,q=new WeakMap,G=new WeakMap,V=new WeakMap,W=new WeakMap,J=new WeakMap,re=new WeakMap,X=new WeakSet,at=function(){if(this!==p(this,C))throw new Error("should only call on root");if(p(this,V))return this;this.toString(),S(this,V,!0);let e;for(;e=p(this,G).pop();){if(e.type!=="!")continue;let t=e,s=p(t,A);for(;s;){for(let r=p(t,q)+1;!s.type&&r<p(s,b).length;r++)for(const i of p(e,b)){if(typeof i=="string")throw new Error("string part in extglob AST??");i.copyIn(p(s,b)[r])}t=s,s=p(t,A)}}return this},U=new WeakSet,le=function(e,t,s,r){var m,w;let i=!1,o=!1,a=-1,c=!1;if(t.type===null){let u=s,f="";for(;u<e.length;){const v=e.charAt(u++);if(i||v==="\\"){i=!i,f+=v;continue}if(o){u===a+1?(v==="^"||v==="!")&&(c=!0):v==="]"&&!(u===a+2&&c)&&(o=!1),f+=v;continue}else if(v==="["){o=!0,a=u,c=!1,f+=v;continue}if(!r.noext&&qe(v)&&e.charAt(u)==="("){t.push(f),f="";const x=new M(v,t);u=B(m=M,U,le).call(m,e,x,u,r),t.push(x);continue}f+=v}return t.push(f),u}let l=s+1,h=new M(null,t);const d=[];let g="";for(;l<e.length;){const u=e.charAt(l++);if(i||u==="\\"){i=!i,g+=u;continue}if(o){l===a+1?(u==="^"||u==="!")&&(c=!0):u==="]"&&!(l===a+2&&c)&&(o=!1),g+=u;continue}else if(u==="["){o=!0,a=l,c=!1,g+=u;continue}if(qe(u)&&e.charAt(l)==="("){h.push(g),g="";const f=new M(u,h);h.push(f),l=B(w=M,U,le).call(w,e,f,l,r);continue}if(u==="|"){h.push(g),g="",d.push(h),h=new M(null,t);continue}if(u===")")return g===""&&p(t,b).length===0&&S(t,re,!0),h.push(g),g="",t.push(...d,h),l;g+=u}return t.type=null,S(t,R,void 0),S(t,b,[e.substring(s-1)]),l},Se=function(e){return p(this,b).map(t=>{if(typeof t=="string")throw new Error("string type in extglob ast??");const[s,r,i,o]=t.toRegExpSource(e);return S(this,z,p(this,z)||o),s}).filter(t=>!(this.isStart()&&this.isEnd())||!!t).join("|")},ct=function(e,t,s=!1){let r=!1,i="",o=!1;for(let a=0;a<e.length;a++){const c=e.charAt(a);if(r){r=!1,i+=(An.has(c)?"\\":"")+c;continue}if(c==="\\"){a===e.length-1?i+="\\\\":r=!0;continue}if(c==="["){const[l,h,d,g]=xn(e,a);if(d){i+=l,o=o||h,a+=d-1,t=t||g;continue}}if(c==="*"){s&&e==="*"?i+=Ue:i+=Ve,t=!0;continue}if(c==="?"){i+=_e,t=!0;continue}i+=_n(c)}return[i,ie(e),!!t,o]},N(M,U);let fe=M;const Cn=(n,{windowsPathsNoEscape:e=!1}={})=>e?n.replace(/[?*()[\]]/g,"[$&]"):n.replace(/[?*()[\]\\]/g,"\\$&");var be={};const T=(n,e,t={})=>(he(e),!t.nocomment&&e.charAt(0)==="#"?!1:new ge(e,t).match(n)),Rn=/^\*+([^+@!?\*\[\(]*)$/,$n=n=>e=>!e.startsWith(".")&&e.endsWith(n),On=n=>e=>e.endsWith(n),Mn=n=>(n=n.toLowerCase(),e=>!e.startsWith(".")&&e.toLowerCase().endsWith(n)),Nn=n=>(n=n.toLowerCase(),e=>e.toLowerCase().endsWith(n)),Pn=/^\*+\.\*+$/,kn=n=>!n.startsWith(".")&&n.includes("."),jn=n=>n!=="."&&n!==".."&&n.includes("."),In=/^\.\*+$/,Ln=n=>n!=="."&&n!==".."&&n.startsWith("."),Dn=/^\*+$/,Wn=n=>n.length!==0&&!n.startsWith("."),zn=n=>n.length!==0&&n!=="."&&n!=="..",Fn=/^\?+([^+@!?\*\[\(]*)?$/,Bn=([n,e=""])=>{const t=lt([n]);return e?(e=e.toLowerCase(),s=>t(s)&&s.toLowerCase().endsWith(e)):t},qn=([n,e=""])=>{const t=pt([n]);return e?(e=e.toLowerCase(),s=>t(s)&&s.toLowerCase().endsWith(e)):t},Vn=([n,e=""])=>{const t=pt([n]);return e?s=>t(s)&&s.endsWith(e):t},Un=([n,e=""])=>{const t=lt([n]);return e?s=>t(s)&&s.endsWith(e):t},lt=([n])=>{const e=n.length;return t=>t.length===e&&!t.startsWith(".")},pt=([n])=>{const e=n.length;return t=>t.length===e&&t!=="."&&t!==".."},ut=typeof process=="object"&&process?typeof be=="object"&&be&&be.__MINIMATCH_TESTING_PLATFORM__||process.platform:"posix",He={win32:{sep:"\\"},posix:{sep:"/"}},Hn=ut==="win32"?He.win32.sep:He.posix.sep;T.sep=Hn;const I=Symbol("globstar **");T.GLOBSTAR=I;const Kn="[^/]",Gn=Kn+"*?",Jn="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",Xn="(?:(?!(?:\\/|^)\\.).)*?",Zn=(n,e={})=>t=>T(t,n,e);T.filter=Zn;const j=(n,e={})=>Object.assign({},n,e),Qn=n=>{if(!n||typeof n!="object"||!Object.keys(n).length)return T;const e=T;return Object.assign((s,r,i={})=>e(s,r,j(n,i)),{Minimatch:class extends e.Minimatch{constructor(r,i={}){super(r,j(n,i))}static defaults(r){return e.defaults(j(n,r)).Minimatch}},AST:class extends e.AST{constructor(r,i,o={}){super(r,i,j(n,o))}static fromGlob(r,i={}){return e.AST.fromGlob(r,j(n,i))}},unescape:(s,r={})=>e.unescape(s,j(n,r)),escape:(s,r={})=>e.escape(s,j(n,r)),filter:(s,r={})=>e.filter(s,j(n,r)),defaults:s=>e.defaults(j(n,s)),makeRe:(s,r={})=>e.makeRe(s,j(n,r)),braceExpand:(s,r={})=>e.braceExpand(s,j(n,r)),match:(s,r,i={})=>e.match(s,r,j(n,i)),sep:e.sep,GLOBSTAR:I})};T.defaults=Qn;const ht=(n,e={})=>(he(n),e.nobrace||!/\{(?:(?!\{).)*\}/.test(n)?[n]:mn(n));T.braceExpand=ht;const Yn=(n,e={})=>new ge(n,e).makeRe();T.makeRe=Yn;const es=(n,e,t={})=>{const s=new ge(e,t);return n=n.filter(r=>s.match(r)),s.options.nonull&&!n.length&&n.push(e),n};T.match=es;const Ke=/[?*]|[+@!]\(.*?\)|\[|\]/,ts=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");class ge{constructor(e,t={}){_(this,"options");_(this,"set");_(this,"pattern");_(this,"windowsPathsNoEscape");_(this,"nonegate");_(this,"negate");_(this,"comment");_(this,"empty");_(this,"preserveMultipleSlashes");_(this,"partial");_(this,"globSet");_(this,"globParts");_(this,"nocase");_(this,"isWindows");_(this,"platform");_(this,"windowsNoMagicRoot");_(this,"regexp");he(e),t=t||{},this.options=t,this.pattern=e,this.platform=t.platform||ut,this.isWindows=this.platform==="win32",this.windowsPathsNoEscape=!!t.windowsPathsNoEscape||t.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!t.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!t.nonegate,this.comment=!1,this.empty=!1,this.partial=!!t.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=t.windowsNoMagicRoot!==void 0?t.windowsNoMagicRoot:!!(this.isWindows&&this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(const e of this.set)for(const t of e)if(typeof t!="string")return!0;return!1}debug(...e){}make(){const e=this.pattern,t=this.options;if(!t.nocomment&&e.charAt(0)==="#"){this.comment=!0;return}if(!e){this.empty=!0;return}this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],t.debug&&(this.debug=(...i)=>console.error(...i)),this.debug(this.pattern,this.globSet);const s=this.globSet.map(i=>this.slashSplit(i));this.globParts=this.preprocess(s),this.debug(this.pattern,this.globParts);let r=this.globParts.map((i,o,a)=>{if(this.isWindows&&this.windowsNoMagicRoot){const c=i[0]===""&&i[1]===""&&(i[2]==="?"||!Ke.test(i[2]))&&!Ke.test(i[3]),l=/^[a-z]:/i.test(i[0]);if(c)return[...i.slice(0,4),...i.slice(4).map(h=>this.parse(h))];if(l)return[i[0],...i.slice(1).map(h=>this.parse(h))]}return i.map(c=>this.parse(c))});if(this.debug(this.pattern,r),this.set=r.filter(i=>i.indexOf(!1)===-1),this.isWindows)for(let i=0;i<this.set.length;i++){const o=this.set[i];o[0]===""&&o[1]===""&&this.globParts[i][2]==="?"&&typeof o[3]=="string"&&/^[a-z]:$/i.test(o[3])&&(o[2]="?")}this.debug(this.pattern,this.set)}preprocess(e){if(this.options.noglobstar)for(let s=0;s<e.length;s++)for(let r=0;r<e[s].length;r++)e[s][r]==="**"&&(e[s][r]="*");const{optimizationLevel:t=1}=this.options;return t>=2?(e=this.firstPhasePreProcess(e),e=this.secondPhasePreProcess(e)):t>=1?e=this.levelOneOptimize(e):e=this.adjascentGlobstarOptimize(e),e}adjascentGlobstarOptimize(e){return e.map(t=>{let s=-1;for(;(s=t.indexOf("**",s+1))!==-1;){let r=s;for(;t[r+1]==="**";)r++;r!==s&&t.splice(s,r-s)}return t})}levelOneOptimize(e){return e.map(t=>(t=t.reduce((s,r)=>{const i=s[s.length-1];return r==="**"&&i==="**"?s:r===".."&&i&&i!==".."&&i!=="."&&i!=="**"?(s.pop(),s):(s.push(r),s)},[]),t.length===0?[""]:t))}levelTwoFileOptimize(e){Array.isArray(e)||(e=this.slashSplit(e));let t=!1;do{if(t=!1,!this.preserveMultipleSlashes){for(let r=1;r<e.length-1;r++){const i=e[r];r===1&&i===""&&e[0]===""||(i==="."||i==="")&&(t=!0,e.splice(r,1),r--)}e[0]==="."&&e.length===2&&(e[1]==="."||e[1]==="")&&(t=!0,e.pop())}let s=0;for(;(s=e.indexOf("..",s+1))!==-1;){const r=e[s-1];r&&r!=="."&&r!==".."&&r!=="**"&&(t=!0,e.splice(s-1,2),s-=2)}}while(t);return e.length===0?[""]:e}firstPhasePreProcess(e){let t=!1;do{t=!1;for(let s of e){let r=-1;for(;(r=s.indexOf("**",r+1))!==-1;){let o=r;for(;s[o+1]==="**";)o++;o>r&&s.splice(r+1,o-r);let a=s[r+1];const c=s[r+2],l=s[r+3];if(a!==".."||!c||c==="."||c===".."||!l||l==="."||l==="..")continue;t=!0,s.splice(r,1);const h=s.slice(0);h[r]="**",e.push(h),r--}if(!this.preserveMultipleSlashes){for(let o=1;o<s.length-1;o++){const a=s[o];o===1&&a===""&&s[0]===""||(a==="."||a==="")&&(t=!0,s.splice(o,1),o--)}s[0]==="."&&s.length===2&&(s[1]==="."||s[1]==="")&&(t=!0,s.pop())}let i=0;for(;(i=s.indexOf("..",i+1))!==-1;){const o=s[i-1];if(o&&o!=="."&&o!==".."&&o!=="**"){t=!0;const c=i===1&&s[i+1]==="**"?["."]:[];s.splice(i-1,2,...c),s.length===0&&s.push(""),i-=2}}}}while(t);return e}secondPhasePreProcess(e){for(let t=0;t<e.length-1;t++)for(let s=t+1;s<e.length;s++){const r=this.partsMatch(e[t],e[s],!this.preserveMultipleSlashes);if(r){e[t]=[],e[s]=r;break}}return e.filter(t=>t.length)}partsMatch(e,t,s=!1){let r=0,i=0,o=[],a="";for(;r<e.length&&i<t.length;)if(e[r]===t[i])o.push(a==="b"?t[i]:e[r]),r++,i++;else if(s&&e[r]==="**"&&t[i]===e[r+1])o.push(e[r]),r++;else if(s&&t[i]==="**"&&e[r]===t[i+1])o.push(t[i]),i++;else if(e[r]==="*"&&t[i]&&(this.options.dot||!t[i].startsWith("."))&&t[i]!=="**"){if(a==="b")return!1;a="a",o.push(e[r]),r++,i++}else if(t[i]==="*"&&e[r]&&(this.options.dot||!e[r].startsWith("."))&&e[r]!=="**"){if(a==="a")return!1;a="b",o.push(t[i]),r++,i++}else return!1;return e.length===t.length&&o}parseNegate(){if(this.nonegate)return;const e=this.pattern;let t=!1,s=0;for(let r=0;r<e.length&&e.charAt(r)==="!";r++)t=!t,s++;s&&(this.pattern=e.slice(s)),this.negate=t}matchOne(e,t,s=!1){const r=this.options;if(this.isWindows){const u=typeof e[0]=="string"&&/^[a-z]:$/i.test(e[0]),f=!u&&e[0]===""&&e[1]===""&&e[2]==="?"&&/^[a-z]:$/i.test(e[3]),v=typeof t[0]=="string"&&/^[a-z]:$/i.test(t[0]),x=!v&&t[0]===""&&t[1]===""&&t[2]==="?"&&typeof t[3]=="string"&&/^[a-z]:$/i.test(t[3]),y=f?3:u?0:void 0,$=x?3:v?0:void 0;if(typeof y=="number"&&typeof $=="number"){const[k,E]=[e[y],t[$]];k.toLowerCase()===E.toLowerCase()&&(t[$]=k,$>y?t=t.slice($):y>$&&(e=e.slice(y)))}}const{optimizationLevel:i=1}=this.options;i>=2&&(e=this.levelTwoFileOptimize(e)),this.debug("matchOne",this,{file:e,pattern:t}),this.debug("matchOne",e.length,t.length);for(var o=0,a=0,c=e.length,l=t.length;o<c&&a<l;o++,a++){this.debug("matchOne loop");var h=t[a],d=e[o];if(this.debug(t,h,d),h===!1)return!1;if(h===I){this.debug("GLOBSTAR",[t,h,d]);var g=o,m=a+1;if(m===l){for(this.debug("** at the end");o<c;o++)if(e[o]==="."||e[o]===".."||!r.dot&&e[o].charAt(0)===".")return!1;return!0}for(;g<c;){var w=e[g];if(this.debug(`
globstar while`,e,g,t,m,w),this.matchOne(e.slice(g),t.slice(m),s))return this.debug("globstar found match!",g,c,w),!0;if(w==="."||w===".."||!r.dot&&w.charAt(0)==="."){this.debug("dot detected!",e,g,t,m);break}this.debug("globstar swallow a segment, and continue"),g++}return!!(s&&(this.debug(`
>>> no match, partial?`,e,g,t,m),g===c))}let u;if(typeof h=="string"?(u=d===h,this.debug("string match",h,d,u)):(u=h.test(d),this.debug("pattern match",h,d,u)),!u)return!1}if(o===c&&a===l)return!0;if(o===c)return s;if(a===l)return o===c-1&&e[o]==="";throw new Error("wtf?")}braceExpand(){return ht(this.pattern,this.options)}parse(e){he(e);const t=this.options;if(e==="**")return I;if(e==="")return"";let s,r=null;(s=e.match(Dn))?r=t.dot?zn:Wn:(s=e.match(Rn))?r=(t.nocase?t.dot?Nn:Mn:t.dot?On:$n)(s[1]):(s=e.match(Fn))?r=(t.nocase?t.dot?qn:Bn:t.dot?Vn:Un)(s):(s=e.match(Pn))?r=t.dot?jn:kn:(s=e.match(In))&&(r=Ln);const i=fe.fromGlob(e,this.options).toMMPattern();return r&&typeof i=="object"&&Reflect.defineProperty(i,"test",{value:r}),i}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;const e=this.set;if(!e.length)return this.regexp=!1,this.regexp;const t=this.options,s=t.noglobstar?Gn:t.dot?Jn:Xn,r=new Set(t.nocase?["i"]:[]);let i=e.map(c=>{const l=c.map(h=>{if(h instanceof RegExp)for(const d of h.flags.split(""))r.add(d);return typeof h=="string"?ts(h):h===I?I:h._src});return l.forEach((h,d)=>{const g=l[d+1],m=l[d-1];h!==I||m===I||(m===void 0?g!==void 0&&g!==I?l[d+1]="(?:\\/|"+s+"\\/)?"+g:l[d]=s:g===void 0?l[d-1]=m+"(?:\\/|"+s+")?":g!==I&&(l[d-1]=m+"(?:\\/|\\/"+s+"\\/)"+g,l[d+1]=I))}),l.filter(h=>h!==I).join("/")}).join("|");const[o,a]=e.length>1?["(?:",")"]:["",""];i="^"+o+i+a+"$",this.negate&&(i="^(?!"+i+").+$");try{this.regexp=new RegExp(i,[...r].join(""))}catch{this.regexp=!1}return this.regexp}slashSplit(e){return this.preserveMultipleSlashes?e.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(e)?["",...e.split(/\/+/)]:e.split(/\/+/)}match(e,t=this.partial){if(this.debug("match",e,this.pattern),this.comment)return!1;if(this.empty)return e==="";if(e==="/"&&t)return!0;const s=this.options;this.isWindows&&(e=e.split("\\").join("/"));const r=this.slashSplit(e);this.debug(this.pattern,"split",r);const i=this.set;this.debug(this.pattern,"set",i);let o=r[r.length-1];if(!o)for(let a=r.length-2;!o&&a>=0;a--)o=r[a];for(let a=0;a<i.length;a++){const c=i[a];let l=r;if(s.matchBase&&c.length===1&&(l=[o]),this.matchOne(l,c,t))return s.flipNegate?!0:!this.negate}return s.flipNegate?!1:this.negate}static defaults(e){return T.defaults(e).Minimatch}}T.AST=fe;T.Minimatch=ge;T.escape=Cn;T.unescape=ie;function ns(n){const e=new Set([n.id?"id":void 0,n.title?"title":void 0,...Object.keys(n).sort()].filter(Boolean));return Array.from(e)}const pe=(n,e)=>{let t;return{collection:Object.values(e).find(r=>{if(!r.source||r.source.length===0)return;const i=ue(n);return(i==="/"?["index.yml","index.yaml","index.md","index.json"]:[i]).some(a=>(t=r.source.find(c=>{var l;return T(a,c.include)&&!((l=c.exclude)!=null&&l.some(h=>T(a,h)))}),t))}),matchedSource:t}},ss=(n,e)=>{let t;return{collection:Object.values(e).find(r=>{if(!(!r.source||r.source.length===0))return t=r.source.find(i=>{var h;if(!n.startsWith(i.prefix))return;if(n==="/"||n===i.prefix){const d=["index.yml","index.yaml","index.md","index.json"];return(n==="/"?d:d.map(m=>Ze(We(i.prefix,m)))).some(m=>r.source.find(w=>{var u;return T(m,w.include)&&!((u=w.exclude)!=null&&u.some(f=>T(m,f)))}))}const o=n.substring(i.prefix.length),{fixed:a}=rt(i),c=We(a,o),l=d=>d.replace(/\.[^/.]+$/,"");return T(c,l(i.include))&&!((h=i.exclude)!=null&&h.some(d=>T(c,l(d))))}),t}),matchedSource:t}};function ft(n,e){const t=rs(n,e);let s=0;return`INSERT INTO ${n.tableName} VALUES (${"?, ".repeat(t.length).slice(0,-2)})`.replace(/\?/g,()=>t[s++])}function is(n,e,t){const s=dt(n,e),r=ft(n,t);return`${s}; ${r}`}function dt(n,e){return`DELETE FROM ${n.tableName} WHERE stem = '${e}';`}function Ge(n,e,t){return`SELECT * FROM ${n.tableName} WHERE ${e} = '${t}';`}function rs(n,e){const t=[],s=n.schema.definitions[n.name].properties;return ns(s).forEach(i=>{const o=s[i],a=o.type,c=o.default!==void 0?o.default:"NULL",l=typeof e[i]<"u"?e[i]:c;n.fields[i]==="json"?t.push(`'${JSON.stringify(l).replace(/'/g,"''")}'`):["string","enum"].includes(a)?t.push(`'${String(l).replace(/\n/g,"\\n").replace(/'/g,"''")}'`):t.push(l)}),t}const os=["https://nuxt.studio","https://dev.nuxt.studio"],Q={content:{name:"content",pascalName:"Content",tableName:"_content_content",source:[{_resolved:!0,prefix:"/",include:"**/*",cwd:"/home/runner/work/dh-nuxt-content/dh-nuxt-content/content"}],type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"},schema:{$ref:"#/definitions/content",definitions:{content:{type:"object",properties:{id:{type:"string"},stem:{type:"string"},extension:{type:"string",enum:["md","yaml","yml","json","csv","xml"]},meta:{type:"object",additionalProperties:{}},path:{type:"string"},title:{type:"string"},description:{type:"string"},seo:{allOf:[{type:"object",properties:{title:{type:"string"},description:{type:"string"}}},{type:"object",additionalProperties:{}}],default:{}},body:{type:"object",properties:{type:{type:"string"},children:{},toc:{}},required:["type"],additionalProperties:!1},navigation:{anyOf:[{type:"boolean"},{type:"object",properties:{title:{type:"string"},description:{type:"string"},icon:{type:"string"}},required:["title","description","icon"],additionalProperties:!1}],default:!0}},required:["id","stem","extension","meta","path","title","description","body"],additionalProperties:!1}},$schema:"http://json-schema.org/draft-07/schema#"},tableDefinition:`CREATE TABLE IF NOT EXISTS _content_content (id TEXT PRIMARY KEY, "title" VARCHAR, "body" TEXT, "description" VARCHAR, "extension" VARCHAR, "meta" TEXT, "navigation" TEXT DEFAULT true, "path" VARCHAR, "seo" TEXT DEFAULT '{}', "stem" VARCHAR);`},info:{name:"info",pascalName:"Info",tableName:"_content_info",type:"data",fields:{},schema:{$ref:"#/definitions/info",definitions:{info:{type:"object",properties:{id:{type:"string"},version:{type:"string"}},required:["id","version"],additionalProperties:!1}},$schema:"http://json-schema.org/draft-07/schema#"},tableDefinition:'CREATE TABLE IF NOT EXISTS _content_info (id TEXT PRIMARY KEY, "version" VARCHAR);'}},Te=se(!1),Je=un(()=>JSON.parse(JSON.stringify(Ye()))),as=async n=>{const e=ln(n.files,n.additions,n.deletions),t=e.filter(r=>![F.appConfig,F.appConfigV4,F.nuxtConfig].includes(r.path));for(const r of Object.values(Q))await Z(r.name).exec(r.tableDefinition);for(const r of t)await cs(Q,r);const s=e.find(r=>[F.appConfig,F.appConfigV4].includes(r.path));s&&Ae(s.parsed),zt(),Te.value=!0},cs=async(n,e)=>{const{collection:t,matchedSource:s}=pe(e.path,n);if(!t){console.warn(`Content Preview: collection not found for file: ${e.path}, skipping insertion.`);return}const r=Z(t.name),i=ot(e,t,s),o=ft(t,i);await r.exec(o)},Ae=n=>{const e=oe(),t=Wt(e,Ye);it(t,pn(n||{},Je)),n||st(t,Je)};function ms(){const n=Qe().public.preview||{},e=window.sessionStorage.getItem("previewToken"),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),It(Zt,{previewToken:e,api:window.sessionStorage.getItem("previewAPI")||(n==null?void 0:n.api),initializePreview:as}).mount(t)}function ws(){const n=oe(),e=Qe().public.preview;if(!window.parent||window.self===window.parent)return;const t=Xe(),s=Lt();window.addEventListener("keydown",i=>{(i.metaKey||i.ctrlKey||i.altKey||i.shiftKey)&&window.parent.postMessage({type:"nuxt-content:preview:keydown",payload:{key:i.key,metaKey:i.metaKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,altKey:i.altKey}},"*")}),window.addEventListener("message",async i=>{var m;if(!Te.value)return;const o=((m=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:m.split(",").map(w=>w.trim()))||[];if(!["http://localhost:3000",...os,...o].includes(i.origin))return;const{type:a,payload:c={},navigate:l}=i.data||{};switch(a){case"nuxt-content:editor:file-selected":{await h(c.path);break}case"nuxt-content:editor:file-changed":case"nuxt-content:editor:media-changed":{const{additions:w=[],deletions:u=[]}=c;for(const f of w)await d(f,l);for(const f of u)await g(f.path);ls();break}case"nuxt-content:config:file-changed":{const{additions:w=[],deletions:u=[]}=c,f=w.find(x=>[F.appConfig,F.appConfigV4].includes(x.path));f&&Ae(f==null?void 0:f.parsed),u.find(x=>[F.appConfig,F.appConfigV4].includes(x.path))&&Ae(void 0)}}async function h(w){if(!w)return;const{collection:u}=pe(ue(w),Q);if(!u){console.warn(`Content Preview: collection not found for file: ${w}, skipping navigation.`);return}if(u.type!=="page")return;const f=Z(u.name),v=we(w),x=Ge(u,"stem",v),y=await f.first(x);if(!y||!y.path)return;const $=t.resolve(y.path);!$||!$.matched||$.matched.length===0||y.path!==s.path&&t.push(y.path)}async function d(w,u){const{collection:f,matchedSource:v}=pe(w.path,Q);if(!f){console.warn(`Content Preview: collection not found for file: ${w.path}, skipping update.`);return}const x=we(w.path),y=ot({path:w.path,parsed:w.parsed},f,v),$=is(f,x,y);if(await Z(f.name).exec($),f.type!=="page"||!w.pathRoute)return;const E=Dt(w.pathRoute);if(u&&E!==s.path){const L=t.resolve(E);if(!L||!L.matched||L.matched.length===0)return;t.push(E)}}async function g(w){const{collection:u}=pe(ue(w),Q);if(!u){console.warn(`Content Preview: collection not found for file: ${w}, skipping deletion.`);return}const f=we(w),v=dt(u,f);await Z(u.name).exec(v)}});async function r(){if(!Te.value)return;const i=s.path,{collection:o}=ss(i,Q);if(!o||o.type!=="page"){window.sendNavigateMessageInPreview(i,!1);return}const a=Z(o.name),c=Ge(o,"path",i),l=await a.first(c);window.sendNavigateMessageInPreview(i,!!(l!=null&&l.path))}n.hook("page:finish",()=>{r()}),n.hook("nuxt-content:preview:ready",()=>{window.parent.postMessage({type:"nuxt-content:preview:ready"},"*")}),window.sendNavigateMessageInPreview=(i,o)=>{window.parent.postMessage({type:"nuxt-content:preview:navigate",payload:{path:i,navigate:o}},"*")}}async function ls(){await oe().hooks.callHookParallel("app:data:refresh")}export{ws as initIframeCommunication,ms as mountPreviewUI};
