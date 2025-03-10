import{r as t,j as o,e as c,d as l}from"./index-DZpC_pHZ.js";const f=e=>t.forwardRef((a,r)=>o.jsx("div",{...a,ref:r,className:c(a.className,e)})),i=t.forwardRef(({className:e,bsPrefix:a,as:r="div",...s},d)=>(a=l(a,"card-body"),o.jsx(r,{ref:d,className:c(e,a),...s})));i.displayName="CardBody";const C=t.forwardRef(({className:e,bsPrefix:a,as:r="div",...s},d)=>(a=l(a,"card-footer"),o.jsx(r,{ref:d,className:c(e,a),...s})));C.displayName="CardFooter";const N=t.createContext(null);N.displayName="CardHeaderContext";const y=t.forwardRef(({bsPrefix:e,className:a,as:r="div",...s},d)=>{const n=l(e,"card-header"),m=t.useMemo(()=>({cardHeaderBsPrefix:n}),[n]);return o.jsx(N.Provider,{value:m,children:o.jsx(r,{ref:d,...s,className:c(a,n)})})});y.displayName="CardHeader";const u=t.forwardRef(({bsPrefix:e,className:a,variant:r,as:s="img",...d},n)=>{const m=l(e,"card-img");return o.jsx(s,{ref:n,className:c(r?`${m}-${r}`:m,a),...d})});u.displayName="CardImg";const p=t.forwardRef(({className:e,bsPrefix:a,as:r="div",...s},d)=>(a=l(a,"card-img-overlay"),o.jsx(r,{ref:d,className:c(e,a),...s})));p.displayName="CardImgOverlay";const j=t.forwardRef(({className:e,bsPrefix:a,as:r="a",...s},d)=>(a=l(a,"card-link"),o.jsx(r,{ref:d,className:c(e,a),...s})));j.displayName="CardLink";const T=f("h6"),x=t.forwardRef(({className:e,bsPrefix:a,as:r=T,...s},d)=>(a=l(a,"card-subtitle"),o.jsx(r,{ref:d,className:c(e,a),...s})));x.displayName="CardSubtitle";const v=t.forwardRef(({className:e,bsPrefix:a,as:r="p",...s},d)=>(a=l(a,"card-text"),o.jsx(r,{ref:d,className:c(e,a),...s})));v.displayName="CardText";const $=f("h5"),R=t.forwardRef(({className:e,bsPrefix:a,as:r=$,...s},d)=>(a=l(a,"card-title"),o.jsx(r,{ref:d,className:c(e,a),...s})));R.displayName="CardTitle";const w=t.forwardRef(({bsPrefix:e,className:a,bg:r,text:s,border:d,body:n=!1,children:m,as:g="div",...H},h)=>{const I=l(e,"card");return o.jsx(g,{ref:h,...H,className:c(a,I,r&&`bg-${r}`,s&&`text-${s}`,d&&`border-${d}`),children:n?o.jsx(i,{children:m}):m})});w.displayName="Card";const S=Object.assign(w,{Img:u,Title:R,Subtitle:x,Body:i,Link:j,Text:v,Header:y,Footer:C,ImgOverlay:p});export{S as C,f as d};
