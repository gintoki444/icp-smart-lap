import{r as p,j as l,o as j}from"./index-CMKGjvil.js";import{b as T,g as P,u as N,e as b,f as $,m as z,t as V}from"./DefaultPropsProvider-7CXMMYWk.js";import{h as _,N as Q,f as W}from"./TextField-l4tn0KBj.js";import{C as J}from"./ExpandMore-CBhrzDGN.js";const E=p.createContext({}),H=p.createContext({});function X(t){return T("MuiStep",t)}P("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Y=t=>{const{classes:e,orientation:o,alternativeLabel:r,completed:n}=t;return $({root:["root",o,r&&"alternativeLabel",n&&"completed"]},X,e)},Z=b("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.completed&&e.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),Pt=p.forwardRef(function(e,o){const r=N({props:e,name:"MuiStep"}),{active:n,children:a,className:c,component:i="div",completed:u,disabled:v,expanded:d=!1,index:s,last:m,...w}=r,{activeStep:y,connector:f,alternativeLabel:C,orientation:g,nonLinear:x}=p.useContext(E);let[S=!1,R=!1,L=!1]=[n,u,v];y===s?S=n!==void 0?n:!0:!x&&y>s?R=u!==void 0?u:!0:!x&&y<s&&(L=v!==void 0?v:!0);const U=p.useMemo(()=>({index:s,last:m,expanded:d,icon:s+1,active:S,completed:R,disabled:L}),[s,m,d,S,R,L]),h={...r,active:S,orientation:g,alternativeLabel:C,completed:R,disabled:L,expanded:d,component:i},I=Y(h),k=l.jsxs(Z,{as:i,className:j(I.root,c),ref:o,ownerState:h,...w,children:[f&&C&&s!==0?f:null,a]});return l.jsx(H.Provider,{value:U,children:f&&!C&&s!==0?l.jsxs(p.Fragment,{children:[f,k]}):k})}),tt=_(l.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),et=_(l.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function ot(t){return T("MuiStepIcon",t)}const A=P("MuiStepIcon",["root","active","completed","error","text"]);var B;const nt=t=>{const{classes:e,active:o,completed:r,error:n}=t;return $({root:["root",o&&"active",r&&"completed",n&&"error"],text:["text"]},ot,e)},O=b(Q,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,e)=>e.root})(z(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${A.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${A.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${A.error}`]:{color:(t.vars||t).palette.error.main}}))),rt=b("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,e)=>e.text})(z(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}))),at=p.forwardRef(function(e,o){const r=N({props:e,name:"MuiStepIcon"}),{active:n=!1,className:a,completed:c=!1,error:i=!1,icon:u,...v}=r,d={...r,active:n,completed:c,error:i},s=nt(d);if(typeof u=="number"||typeof u=="string"){const m=j(a,s.root);return i?l.jsx(O,{as:et,className:m,ref:o,ownerState:d,...v}):c?l.jsx(O,{as:tt,className:m,ref:o,ownerState:d,...v}):l.jsxs(O,{className:m,ref:o,ownerState:d,...v,children:[B||(B=l.jsx("circle",{cx:"12",cy:"12",r:"12"})),l.jsx(rt,{className:s.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:d,children:u})]})}return u});function st(t){return T("MuiStepLabel",t)}const M=P("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),it=t=>{const{classes:e,orientation:o,active:r,completed:n,error:a,disabled:c,alternativeLabel:i}=t;return $({root:["root",o,a&&"error",c&&"disabled",i&&"alternativeLabel"],label:["label",r&&"active",n&&"completed",a&&"error",c&&"disabled",i&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",n&&"completed",a&&"error",c&&"disabled",i&&"alternativeLabel"],labelContainer:["labelContainer",i&&"alternativeLabel"]},st,e)},lt=b("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation]]}})({display:"flex",alignItems:"center",[`&.${M.alternativeLabel}`]:{flexDirection:"column"},[`&.${M.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),ct=b("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,e)=>e.label})(z(({theme:t})=>({...t.typography.body2,display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${M.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${M.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${M.alternativeLabel}`]:{marginTop:16},[`&.${M.error}`]:{color:(t.vars||t).palette.error.main}}))),pt=b("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,e)=>e.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${M.alternativeLabel}`]:{paddingRight:0}}),dt=b("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,e)=>e.labelContainer})(z(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${M.alternativeLabel}`]:{textAlign:"center"}}))),ut=p.forwardRef(function(e,o){const r=N({props:e,name:"MuiStepLabel"}),{children:n,className:a,componentsProps:c={},error:i=!1,icon:u,optional:v,slots:d={},slotProps:s={},StepIconComponent:m,StepIconProps:w,...y}=r,{alternativeLabel:f,orientation:C}=p.useContext(E),{active:g,disabled:x,completed:S,icon:R}=p.useContext(H),L=u||R;let U=m;L&&!U&&(U=at);const h={...r,active:g,alternativeLabel:f,completed:S,disabled:x,error:i,orientation:C},I=it(h),k={slots:d,slotProps:{stepIcon:w,...c,...s}},[G,D]=W("label",{elementType:ct,externalForwardedProps:k,ownerState:h}),[q,K]=W("stepIcon",{elementType:U,externalForwardedProps:k,ownerState:h});return l.jsxs(lt,{className:j(I.root,a),ref:o,ownerState:h,...y,children:[L||q?l.jsx(pt,{className:I.iconContainer,ownerState:h,children:l.jsx(q,{completed:S,active:g,error:i,icon:L,...K})}):null,l.jsxs(dt,{className:I.labelContainer,ownerState:h,children:[n?l.jsx(G,{...D,className:j(I.label,D==null?void 0:D.className),children:n}):null,v]})]})});ut.muiName="StepLabel";function vt(t){return T("MuiStepConnector",t)}P("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const mt=t=>{const{classes:e,orientation:o,alternativeLabel:r,active:n,completed:a,disabled:c}=t,i={root:["root",o,r&&"alternativeLabel",n&&"active",a&&"completed",c&&"disabled"],line:["line",`line${V(o)}`]};return $(i,vt,e)},St=b("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.completed&&e.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),bt=b("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.line,e[`line${V(o.orientation)}`]]}})(z(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return{display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:e,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),ft=p.forwardRef(function(e,o){const r=N({props:e,name:"MuiStepConnector"}),{className:n,...a}=r,{alternativeLabel:c,orientation:i="horizontal"}=p.useContext(E),{active:u,disabled:v,completed:d}=p.useContext(H),s={...r,alternativeLabel:c,orientation:i,active:u,completed:d,disabled:v},m=mt(s);return l.jsx(St,{className:j(m.root,n),ref:o,ownerState:s,...a,children:l.jsx(bt,{className:m.line,ownerState:s})})});function Ct(t){return T("MuiStepContent",t)}P("MuiStepContent",["root","last","transition"]);const xt=t=>{const{classes:e,last:o}=t;return $({root:["root",o&&"last"],transition:["transition"]},Ct,e)},Lt=b("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.last&&e.last]}})(z(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),yt=b(J,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,e)=>e.transition})({}),Nt=p.forwardRef(function(e,o){const r=N({props:e,name:"MuiStepContent"}),{children:n,className:a,TransitionComponent:c=J,transitionDuration:i="auto",TransitionProps:u,slots:v={},slotProps:d={},...s}=r,{orientation:m}=p.useContext(E),{active:w,last:y,expanded:f}=p.useContext(H),C={...r,last:y},g=xt(C);let x=i;i==="auto"&&!c.muiSupportAuto&&(x=void 0);const S={slots:v,slotProps:{transition:u,...d}},[R,L]=W("transition",{elementType:yt,externalForwardedProps:S,ownerState:C,className:g.transition,additionalProps:{in:w||f,timeout:x,unmountOnExit:!0}});return l.jsx(Lt,{className:j(g.root,a),ref:o,ownerState:C,...s,children:l.jsx(R,{as:c,...L,children:n})})});function gt(t){return T("MuiStepper",t)}P("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const ht=t=>{const{orientation:e,nonLinear:o,alternativeLabel:r,classes:n}=t;return $({root:["root",e,o&&"nonLinear",r&&"alternativeLabel"]},gt,n)},wt=b("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.nonLinear&&e.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),Rt=l.jsx(ft,{}),$t=p.forwardRef(function(e,o){const r=N({props:e,name:"MuiStepper"}),{activeStep:n=0,alternativeLabel:a=!1,children:c,className:i,component:u="div",connector:v=Rt,nonLinear:d=!1,orientation:s="horizontal",...m}=r,w={...r,nonLinear:d,alternativeLabel:a,orientation:s,component:u},y=ht(w),f=p.Children.toArray(c).filter(Boolean),C=f.map((x,S)=>p.cloneElement(x,{index:S,last:S+1===f.length,...x.props})),g=p.useMemo(()=>({activeStep:n,alternativeLabel:a,connector:v,nonLinear:d,orientation:s}),[n,a,v,d,s]);return l.jsx(E.Provider,{value:g,children:l.jsx(wt,{as:u,ownerState:w,className:j(y.root,i),ref:o,...m,children:C})})}),F="https://apiav2-jlp2nagalq-as.a.run.app/api",zt=async t=>{const e=new Headers;e.append("Content-Type","application/json");const o=JSON.stringify(t),r={method:"POST",headers:e,body:o,redirect:"follow"};try{const n=await fetch(`${F}/sample-tracking`,r);if(!n.ok){const a=await n.json();throw new Error(a.message||`HTTP Error: ${n.status}`)}return await n.json()}catch(n){throw console.error("Save customer special conditions Error:",n),n}},Ut=async(t,e)=>{const o=new Headers;o.append("Content-Type","application/json");const r=JSON.stringify(e),n={method:"PUT",headers:o,body:r,redirect:"follow"};try{const a=await fetch(`${F}/sample-tracking/`+t,n);if(!a.ok){const c=await a.json();throw new Error(c.message||`HTTP Error: ${a.status}`)}return await a.json()}catch(a){throw console.error("Save customer special conditions Error:",a),a}},kt=async t=>{const e=new Headers;e.append("Content-Type","application/json");const o={method:"DELETE",headers:e,redirect:"follow"};return await(await fetch(F+"/sample-tracking/"+t,o)).json()};export{$t as S,Ut as a,Pt as b,ut as c,kt as d,Nt as e,zt as p};
