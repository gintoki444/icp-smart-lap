import{P as e,r as b,j as n,D as j,h as w,i as y}from"./index-BHSqYlV9.js";const o=e.oneOf(["start","end"]),T=e.oneOfType([o,e.shape({sm:o}),e.shape({md:o}),e.shape({lg:o}),e.shape({xl:o}),e.shape({xxl:o}),e.object]),v={id:e.string,href:e.string,onClick:e.func,title:e.node.isRequired,disabled:e.bool,align:T,menuRole:e.string,renderMenuOnMount:e.bool,rootCloseEvent:e.string,menuVariant:e.oneOf(["dark"]),flip:e.bool,bsPrefix:e.string,variant:e.string,size:e.string},r=b.forwardRef(({title:s,children:i,bsPrefix:t,rootCloseEvent:a,variant:p,size:l,menuRole:d,renderMenuOnMount:f,disabled:c,href:g,id:h,menuVariant:x,flip:u,...m},D)=>n.jsxs(j,{ref:D,...m,children:[n.jsx(w,{id:h,href:g,size:l,variant:p,disabled:c,childBsPrefix:t,children:s}),n.jsx(y,{role:d,renderOnMount:f,rootCloseEvent:a,variant:x,flip:u,children:i})]}));r.displayName="DropdownButton";r.propTypes=v;export{r as D,T as a};
