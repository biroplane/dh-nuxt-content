import{af as C,u as w,ag as d,r as y,ah as B,ai as M,R as O,aj as R,b as x,K as E,ak as p,al as H,am as V,a1 as K}from"./88kjj4NQ.js";const N=s=>s==="defer"||s===!1;function U(...s){var v;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[a,f,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=w(),b=f,P=()=>d.value,j=()=>t.isHydrating?t.payload.data[a]:t.static.data[a];e.server??(e.server=!0),e.default??(e.default=P),e.getCachedData??(e.getCachedData=j),e.lazy??(e.lazy=!1),e.immediate??(e.immediate=!0),e.deep??(e.deep=d.deep),e.dedupe??(e.dedupe="cancel");const u=e.getCachedData(a,t),m=u!=null;if(!t._asyncData[a]||!e.immediate){(v=t.payload._errors)[a]??(v[a]=d.errorValue);const o=e.deep?y:B;t._asyncData[a]={data:o(m?u:e.default()),pending:y(!m),error:M(t.payload._errors,a),status:y("idle"),_default:e.default}}const n={...t._asyncData[a]};delete n._default,n.refresh=n.execute=(o={})=>{if(t._asyncDataPromises[a]){if(N(o.dedupe??e.dedupe))return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if(o._initial||t.isHydrating&&o._initial!==!1){const c=o._initial?u:e.getCachedData(a,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(b(t))}catch(g){i(g)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[a];let i=c;e.transform&&(i=await e.transform(c)),e.pick&&(i=z(i,e.pick)),t.payload.data[a]=i,n.data.value=i,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[a];n.error.value=V(c),n.data.value=K(e.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=l,t._asyncDataPromises[a]},n.clear=()=>S(t,a);const _=()=>n.refresh({_initial:!0}),h=e.server!==!1&&t.payload.serverRendered;{const o=O();if(o&&h&&e.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;R(()=>{i.forEach(g=>{g()}),i.splice(0,i.length)}),x(()=>i.splice(0,i.length))}h&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(_):e.immediate&&_();const l=H();if(e.watch){const i=E(e.watch,()=>n.refresh());l&&p(i)}const c=t.hook("app:data:refresh",async i=>{(!i||i.includes(a))&&await n.refresh()});l&&p(c)}const D=Promise.resolve(t._asyncDataPromises[a]).then(()=>n);return Object.assign(D,n),D}async function W(s){await new Promise(a=>C(a)),await w().hooks.callHookParallel("app:data:refresh",void 0)}function S(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function z(s,r){const a={};for(const f of r)a[f]=s[f];return a}const Y={section:"v3.3.0--K7oBoswEya",pages:"v3.3.0--WzPoLlrq8U",blog:"v3.3.0--VdXyOYm2iR",locations:"v3.3.0--bMAMfRBoh7",wedding:"v3.3.0--W17akyY9dw"},k={section:"_content_section",pages:"_content_pages",blog:"_content_blog",locations:"_content_locations",wedding:"_content_wedding",info:"_content_info"},q={section:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},pages:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",slug:"string",uid:"string",img:"string"}},blog:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},locations:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",slug:"string",image:"string",title:"string",link:"string"}},wedding:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",slug:"string",logo:"string",title:"string",description:"string"}},info:{type:"data",fields:{}}};export{q as a,Y as c,W as r,k as t,U as u};
