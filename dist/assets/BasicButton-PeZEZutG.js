import{r as i,a as k,j as s,c as D,W as ce,e as ue,x as de,X as fe,U as me,Y as W,f as he,Z as pe,a0 as xe,o as ge,a1 as Q,V as ee,n as ve,a2 as ye,a3 as we,a4 as je,P as x,D as E,B as S,R as Re}from"./index-BHSqYlV9.js";import{M}from"./MainCard-C_Bxrsvo.js";import{a as Ee,D as Oe}from"./DropdownButton-BB5Jq7pA.js";import{B as be}from"./ButtonGroup-BZGDzOWN.js";import{R as V}from"./Row-4QVMY7bz.js";import{C as X}from"./Col-Ck7c_TKm.js";import{u as Te,a as Y,r as Ne,h as G}from"./hasClass-CNYDzMHx.js";import{i as Ce,b as z,g as Be}from"./TransitionWrapper-CjfbmhfF.js";import{F as Z}from"./Fade-D8pK46Uf.js";import"./Collapse-DJkLimpS.js";import"./Transition-tUz9ycqu.js";import"./NoopTransition-DYd05nxA.js";const H=i.forwardRef(({bsPrefix:e,className:t,role:n="toolbar",...o},a)=>{const l=k(e,"btn-toolbar");return s.jsx("div",{...o,ref:a,className:D(t,l),role:n})});H.displayName="ButtonToolbar";function ke(){const e=i.useRef(!0),t=i.useRef(()=>e.current);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}const L=2**31-1;function te(e,t,n){const o=n-Date.now();e.current=o<=L?setTimeout(t,o):setTimeout(()=>te(e,t,n),L)}function De(){const e=ke(),t=i.useRef();return Te(()=>clearTimeout(t.current)),i.useMemo(()=>{const n=()=>clearTimeout(t.current);function o(a,l=0){e()&&(n(),l<=L?t.current=setTimeout(a,l):te(t,a,Date.now()+l))}return{set:o,clear:n,handleRef:t}},[])}const Fe=()=>{};function Me(e,t,{disabled:n,clickTrigger:o}={}){const a=t||Fe;ce(e,a,{disabled:n,clickTrigger:o});const l=ue(d=>{Ce(d)&&a(d)});i.useEffect(()=>{if(n||e==null)return;const d=de(fe(e));let r=(d.defaultView||window).event;const c=me(d,"keyup",f=>{if(f===r){r=void 0;return}l(f)});return()=>{c()}},[e,n,l])}const ne=i.forwardRef((e,t)=>{const{flip:n,offset:o,placement:a,containerPadding:l,popperConfig:d={},transition:r,runTransition:c}=e,[f,y]=W(),[w,j]=W(),p=he(y,t),m=Y(e.container),g=Y(e.target),[u,v]=i.useState(!e.show),h=pe(g,f,xe({placement:a,enableEvents:!!e.show,containerPadding:l||5,flip:n,offset:o,arrowElement:w,popperConfig:d}));e.show&&u&&v(!1);const T=(...U)=>{v(!0),e.onExited&&e.onExited(...U)},O=e.show||!u;if(Me(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!O)return null;const{onExit:C,onExiting:N,onEnter:b,onEntering:_,onEntered:I}=e;let F=e.children(Object.assign({},h.attributes.popper,{style:h.styles.popper,ref:p}),{popper:h,placement:a,show:!!e.show,arrowProps:Object.assign({},h.attributes.arrow,{style:h.styles.arrow,ref:j})});return F=Ne(r,c,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:F,onExit:C,onExiting:N,onExited:T,onEnter:b,onEntering:_,onEntered:I}),m?ge.createPortal(F,m):null});ne.displayName="Overlay";const se=i.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},a)=>(t=k(t,"popover-header"),s.jsx(n,{ref:a,className:D(e,t),...o})));se.displayName="PopoverHeader";const A=i.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},a)=>(t=k(t,"popover-body"),s.jsx(n,{ref:a,className:D(e,t),...o})));A.displayName="PopoverBody";function oe(e,t){let n=e;return e==="left"?n=t?"end":"start":e==="right"&&(n=t?"start":"end"),n}function re(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Se=i.forwardRef(({bsPrefix:e,placement:t="right",className:n,style:o,children:a,body:l,arrowProps:d,hasDoneInitialMeasure:r,popper:c,show:f,...y},w)=>{const j=k(e,"popover"),p=Q(),[m]=(t==null?void 0:t.split("-"))||[],g=oe(m,p);let u=o;return f&&!r&&(u={...o,...re(c==null?void 0:c.strategy)}),s.jsxs("div",{ref:w,role:"tooltip",style:u,"x-placement":m,className:D(n,j,m&&`bs-popover-${g}`),...y,children:[s.jsx("div",{className:"popover-arrow",...d}),l?s.jsx(A,{children:a}):a]})}),Pe=Object.assign(Se,{Header:se,Body:A,POPPER_OFFSET:[0,8]}),ae=i.forwardRef(({bsPrefix:e,placement:t="right",className:n,style:o,children:a,arrowProps:l,hasDoneInitialMeasure:d,popper:r,show:c,...f},y)=>{e=k(e,"tooltip");const w=Q(),[j]=(t==null?void 0:t.split("-"))||[],p=oe(j,w);let m=o;return c&&!d&&(m={...o,...re(r==null?void 0:r.strategy)}),s.jsxs("div",{ref:y,style:m,role:"tooltip","x-placement":j,className:D(n,e,`bs-tooltip-${p}`),...f,children:[s.jsx("div",{className:"tooltip-arrow",...l}),s.jsx("div",{className:`${e}-inner`,children:a})]})});ae.displayName="Tooltip";const P=Object.assign(ae,{TOOLTIP_OFFSET:[0,6]});function _e(e){const t=i.useRef(null),n=k(void 0,"popover"),o=k(void 0,"tooltip"),a=i.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(t.current){if(G(t.current,n))return Pe.POPPER_OFFSET;if(G(t.current,o))return P.TOOLTIP_OFFSET}return[0,0]}}}),[e,n,o]);return[t,[a]]}function Ie(e,t){const{ref:n}=e,{ref:o}=t;e.ref=n.__wrapped||(n.__wrapped=a=>n(z(a))),t.ref=o.__wrapped||(o.__wrapped=a=>o(z(a)))}const ie=i.forwardRef(({children:e,transition:t=Z,popperConfig:n={},rootClose:o=!1,placement:a="top",show:l=!1,...d},r)=>{const c=i.useRef({}),[f,y]=i.useState(null),[w,j]=_e(d.offset),p=ee(r,w),m=t===!0?Z:t||void 0,g=ve(u=>{y(u),n==null||n.onFirstUpdate==null||n.onFirstUpdate(u)});return ye(()=>{f&&d.target&&(c.current.scheduleUpdate==null||c.current.scheduleUpdate())},[f,d.target]),i.useEffect(()=>{l||y(null)},[l]),s.jsx(ne,{...d,ref:p,popperConfig:{...n,modifiers:j.concat(n.modifiers||[]),onFirstUpdate:g},transition:m,rootClose:o,placement:a,show:l,children:(u,{arrowProps:v,popper:h,show:T})=>{var O;Ie(u,v);const C=h==null?void 0:h.placement,N=Object.assign(c.current,{state:h==null?void 0:h.state,scheduleUpdate:h==null?void 0:h.update,placement:C,outOfBoundaries:(h==null||(O=h.state)==null||(O=O.modifiersData.hide)==null?void 0:O.isReferenceHidden)||!1,strategy:n.strategy}),b=!!f;return typeof e=="function"?e({...u,placement:C,show:T,...!t&&T&&{className:"show"},popper:N,arrowProps:v,hasDoneInitialMeasure:b}):i.cloneElement(e,{...u,placement:C,arrowProps:v,popper:N,hasDoneInitialMeasure:b,className:D(e.props.className,!t&&T&&"show"),style:{...e.props.style,...u.style}})}})});ie.displayName="Overlay";function Ue(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function J(e,t,n){const[o]=t,a=o.currentTarget,l=o.relatedTarget||o.nativeEvent[n];(!l||l!==a)&&!je(a,l)&&e(...t)}x.oneOf(["click","hover","focus"]);const K=({trigger:e=["hover","focus"],overlay:t,children:n,popperConfig:o={},show:a,defaultShow:l=!1,onToggle:d,delay:r,placement:c,flip:f=c&&c.indexOf("auto")!==-1,...y})=>{const w=i.useRef(null),j=ee(w,Be(n)),p=De(),m=i.useRef(""),[g,u]=we(a,l,d),v=Ue(r),{onFocus:h,onBlur:T,onClick:O}=typeof n!="function"?i.Children.only(n).props:{},C=R=>{j(z(R))},N=i.useCallback(()=>{if(p.clear(),m.current="show",!v.show){u(!0);return}p.set(()=>{m.current==="show"&&u(!0)},v.show)},[v.show,u,p]),b=i.useCallback(()=>{if(p.clear(),m.current="hide",!v.hide){u(!1);return}p.set(()=>{m.current==="hide"&&u(!1)},v.hide)},[v.hide,u,p]),_=i.useCallback((...R)=>{N(),h==null||h(...R)},[N,h]),I=i.useCallback((...R)=>{b(),T==null||T(...R)},[b,T]),F=i.useCallback((...R)=>{u(!g),O==null||O(...R)},[O,u,g]),U=i.useCallback((...R)=>{J(N,R,"fromElement")},[N]),le=i.useCallback((...R)=>{J(b,R,"toElement")},[b]),$=e==null?[]:[].concat(e),B={ref:C};return $.indexOf("click")!==-1&&(B.onClick=F),$.indexOf("focus")!==-1&&(B.onFocus=_,B.onBlur=I),$.indexOf("hover")!==-1&&(B.onMouseOver=U,B.onMouseOut=le),s.jsxs(s.Fragment,{children:[typeof n=="function"?n(B):i.cloneElement(n,B),s.jsx(ie,{...y,show:g,onHide:b,flip:f,placement:c,popperConfig:o,target:w.current,children:t})]})},$e={id:x.string,toggleLabel:x.string,href:x.string,target:x.string,onClick:x.func,title:x.node.isRequired,type:x.string,disabled:x.bool,align:Ee,menuRole:x.string,renderMenuOnMount:x.bool,rootCloseEvent:x.string,flip:x.bool,bsPrefix:x.string,variant:x.string,size:x.string},q=i.forwardRef(({id:e,bsPrefix:t,size:n,variant:o,title:a,type:l="button",toggleLabel:d="Toggle dropdown",children:r,onClick:c,href:f,target:y,menuRole:w,renderMenuOnMount:j,rootCloseEvent:p,flip:m,...g},u)=>s.jsxs(E,{ref:u,...g,as:be,children:[s.jsx(S,{size:n,variant:o,disabled:g.disabled,bsPrefix:t,href:f,target:y,onClick:c,type:l,children:a}),s.jsx(E.Toggle,{split:!0,id:e,size:n,variant:o,disabled:g.disabled,childBsPrefix:t,children:s.jsx("span",{className:"visually-hidden",children:d})}),s.jsx(E.Menu,{role:w,renderOnMount:j,rootCloseEvent:p,flip:m,children:r})]}));q.propTypes=$e;q.displayName="SplitButton";const Je=()=>{const e=["primary","secondary","success","danger","warning","info","light","dark"],t=[{variant:"primary",icon:"feather icon-thumbs-up mx-1"},{variant:"secondary",icon:"feather icon-camera mx-1"},{variant:"success",icon:"feather icon-check-circle mx-1"},{variant:"danger",icon:"feather icon-slash mx-1"},{variant:"warning",icon:"feather icon-alert-triangle mx-1"},{variant:"info",icon:"feather icon-info mx-1"}],n=e.map((r,c)=>{const f=s.jsx(P,{className:"mb-2",id:"tooltip",children:r});return s.jsx(K,{placement:"top",overlay:f,children:s.jsx(S,{variant:r,className:"text-capitalize",children:r})},c)}),o=e.map((r,c)=>s.jsx(K,{placement:"top",overlay:s.jsx(P,{className:"mb-2",children:"outline-"+r}),children:s.jsx(S,{variant:"outline-"+r,style:{color:r==="light"?"black":""},className:"text-capitalize",children:r})},c)),a=e.map((r,c)=>s.jsx(S,{className:"btn-square text-capitalize",variant:r,children:r},c)),l=t.map(r=>{const c=r.variant;return s.jsxs(Oe,{className:"text-capitalize",title:c,variant:r.variant,id:`dropdown-variants-${r.variant}`,children:[s.jsx(E.Item,{eventKey:"1",children:"Action"}),s.jsx(E.Item,{eventKey:"2",children:"Another action"}),s.jsx(E.Item,{eventKey:"3",children:"Something else hear"})]},r.variant)}),d=t.map(r=>{const c=r.variant;return s.jsxs(q,{title:c,variant:r.variant,id:`dropdown-split-variants-${r.variant}`,className:"mx-2 mb-2 text-capitalize",children:[s.jsx(E.Item,{eventKey:"1",children:"Action"}),s.jsx(E.Item,{eventKey:"2",children:"Another action"}),s.jsx(E.Item,{eventKey:"3",children:"Something else hear"}),s.jsx(E.Divider,{}),s.jsx(E.Item,{eventKey:"4",children:"Separated link"})]},r.variant)});return s.jsxs(Re.Fragment,{children:[s.jsx(V,{className:"btn-page",children:s.jsxs(X,{children:[s.jsxs(M,{title:"Default",children:[n,s.jsx(K,{placement:"top",overlay:s.jsx(P,{className:"mb-2",children:"link"}),children:s.jsx(S,{variant:"link",children:"Link"})})]}),s.jsx(M,{title:"Outline",children:o}),s.jsx(M,{title:"Square Button",children:a})]})}),s.jsx(V,{className:"btn-page",children:s.jsxs(X,{children:[s.jsx(M,{title:"Basic Dropdown Button",children:s.jsx(H,{children:l})}),s.jsx(M,{title:"Split Dropdown Button",children:s.jsx(H,{children:d})})]})})]})};export{Je as default};
