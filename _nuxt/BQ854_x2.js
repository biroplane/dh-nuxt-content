import{c as n,Q as o,X as c,Y as a,ab as h,m as p,A as l,a8 as u,x as m,v as d}from"./CN0JRevo.js";const g="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=l(u(m().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return d(e,t.src)}return t.src});return(s,e)=>(p(),c(h(a(g)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
