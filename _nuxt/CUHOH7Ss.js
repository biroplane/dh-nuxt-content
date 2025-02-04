const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C-7Aue5X.js","./-6m7zWSe.js","./DWJcB95u.js"])))=>i.map(i=>d[i]);
import{a6 as U,a8 as R,_ as W}from"./-6m7zWSe.js";import{t as B}from"./DWJcB95u.js";const D=/\d/,k=["-","_","/","."];function x(t=""){if(!D.test(t))return t!==t.toLowerCase()}function j(t,s){const n=k,r=[];if(!t||typeof t!="string")return r;let i="",e,a;for(const l of t){const h=n.includes(l);if(h===!0){r.push(i),i="",e=void 0;continue}const f=x(l);if(a===!1){if(e===!1&&f===!0){r.push(i),i=l,e=f;continue}if(e===!0&&f===!1&&i.length>1){const o=i.at(-1);r.push(i.slice(0,Math.max(0,i.length-1))),i=o+l,e=f;continue}}i+=l,e=f,a=h}return r.push(i),r}function P(t){return t?t[0].toUpperCase()+t.slice(1):""}function F(t,s){return t?(Array.isArray(t)?t:j(t)).map(n=>P(s!=null&&s.normalize?n.toLowerCase():n)).join(""):""}function J(t,s){return t?(Array.isArray(t)?t:j(t)).map(n=>n.toLowerCase()).join("-"):""}const C=(t,s)=>{const n=t._conditions;return n.length>0?`(${n.join(` ${s} `)})`:""},w=t=>{const s=[],n={_conditions:s,where(r,i,e){let a;switch(i.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(e)){const l=e.map(h=>`'${h}'`).join(", ");a=`"${String(r)}" ${i.toUpperCase()} (${l})`}else throw new TypeError(`Value for ${i} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(e)&&e.length===2)a=`"${String(r)}" ${i.toUpperCase()} '${e[0]}' AND '${e[1]}'`;else throw new Error(`Value for ${i} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":a=`"${String(r)}" ${i.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":a=`"${String(r)}" ${i.toUpperCase()} '${e}'`;break;default:a=`"${String(r)}" ${i} '${e}'`}return s.push(`${a}`),n},andWhere(r){const i=r(w());return s.push(C(i,"AND")),n},orWhere(r){const i=r(w());return s.push(C(i,"OR")),n}};return n},q=(t,s)=>{const n={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},r={__params:n,andWhere(e){const a=e(w());return n.conditions.push(C(a,"AND")),r},orWhere(e){const a=e(w());return n.conditions.push(C(a,"OR")),r},path(e){return r.where("path","=",U(e))},skip(e){return n.offset=e,r},where(e,a,l){return r.andWhere(h=>h.where(String(e),a,l)),r},limit(e){return n.limit=e,r},select(...e){return e.length&&n.selectedFields.push(...e),r},order(e,a){return n.orderBy.push(`"${String(e)}" ${a}`),r},async all(){return s(t,i()).then(e=>e||[])},async first(){return s(t,i({limit:1})).then(e=>e[0]||null)},async count(e="*",a=!1){return s(t,i({count:{field:String(e),distinct:a}})).then(l=>l[0].count)}};function i(e={}){let a="SELECT ";if(e!=null&&e.count)a+=`COUNT(${e.count.distinct?"DISTINCT":""} ${e.count.field}) as count`;else{const h=Array.from(new Set(n.selectedFields));a+=h.length>0?h.map(f=>`"${String(f)}"`).join(", "):"*"}a+=` FROM ${B[String(t)]}`,n.conditions.length>0&&(a+=` WHERE ${n.conditions.join(" AND ")}`),n.orderBy.length>0?a+=` ORDER BY ${n.orderBy.join(", ")}`:a+=" ORDER BY stem ASC";const l=(e==null?void 0:e.limit)||n.limit;return l>0&&(n.offset>0?a+=` LIMIT ${l} OFFSET ${n.offset}`:a+=` LIMIT ${l}`),a}return r};async function M(t,s=[]){var f;const n=t.__params;(f=n==null?void 0:n.orderBy)!=null&&f.length||(t=t.order("stem","ASC"));const r=await t.orWhere(o=>o.where("navigation","<>","false").where("navigation","IS NULL")).select("navigation","stem","path","title","meta",...s||[]).all(),{contents:i,configs:e}=r.reduce((o,c)=>{var p;if(String(c.stem).split("/").pop()===".navigation"){c.title=((p=c.title)==null?void 0:p.toLowerCase())==="navigation"?"":c.title;const y=c.path.split("/").slice(0,-1).join("/")||"/";o.configs[y]={...c,...c.body}}else o.contents.push(c);return o},{configs:{},contents:[]}),a=o=>({..._(["title",...s])(o),...o.meta,...L(o==null?void 0:o.navigation)?o.navigation:{}}),l=o=>({..._(["title",...s])(o),...L(o==null?void 0:o.navigation)?o.navigation:{}}),h=i.reduce((o,c)=>{var I;const p=c.path.substring(1).split("/"),y=c.stem.split("/"),E=!!((I=y[y.length-1])!=null&&I.match(/([1-9]\d*\.)?index/g)),T=u=>({title:u.title,path:u.path,stem:u.stem,children:[],...l(u)}),d=T(c);if(E){const u=e[d.path];if(typeof(u==null?void 0:u.navigation)<"u"&&(u==null?void 0:u.navigation)===!1)return o;if(c.path!=="/"){const g=T(c);d.children.push(g)}u&&Object.assign(d,a(u))}if(p.length===1){const u=o.find(g=>g.path===d.path&&g.page===!1);return E&&u?Object.assign(u,{page:void 0,children:[...d.children,...u.children]}):o.push(d),o}const A=p.slice(0,-1).reduce((u,g,O)=>{const b="/"+p.slice(0,O+1).join("/"),m=e[b];if(typeof(m==null?void 0:m.navigation)<"u"&&m.navigation===!1)return[];let S=u.find($=>$.path===b);if(!S){const $=m?a(m):{};S={...$,title:$.title||Q(g),path:b,stem:y.slice(0,O+1).join("/"),children:[],page:!1},u.push(S)}return S.children},o),N=A.find(u=>u.path===d.path&&u.page===!1);return N?Object.assign(N,{...d,page:void 0,children:[...d.children,...N.children]}):A.push(d),o},[]);return v(h)}function v(t){var n;const s=t;for(const r of s)(n=r.children)!=null&&n.length?v(r.children):delete r.children;return t}function _(t){return s=>(s=s||{},t&&t.length?t.filter(n=>typeof s[n]<"u").reduce((n,r)=>Object.assign(n,{[r]:s[r]}),{}):s)}function L(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}const Q=t=>t.split(/[\s-]/g).map(F).join(" "),V=t=>{var n,r;const s=(r=(n=R())==null?void 0:n.ssrContext)==null?void 0:r.event;return q(t,(i,e)=>G(s,i,e))};function X(t,s){return K(t,n=>M(n,s))}async function G(t,s,n){return H(s,n)}async function H(t,s){return await W(()=>import("./C-7Aue5X.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(r=>r.loadDatabaseAdapter(t)).then(r=>r.all(s))}function K(t,s){const n=V(t),r={where(i,e,a){return n.where(String(i),e,a),r},andWhere(i){return n.andWhere(i),r},orWhere(i){return n.orWhere(i),r},order(i,e){return n.order(String(i),e),r},then(i,e){return s(n).then(i,e)},catch(i){return this.then(void 0,i)},finally(i){return this.then(void 0,void 0).finally(i)},get[Symbol.toStringTag](){return"Promise"}};return r}export{X as a,J as k,F as p,V as q};
