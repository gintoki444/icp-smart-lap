import{r as a,u as w,j as e,B as n,i as S,F as C,k as N}from"./index-Bq0BSIrC.js";import{g as F,d as v}from"./fertilizerMainRequest-kGbpd_0A.js";import{C as o}from"./Card-C7kDYjR9.js";import{S as E}from"./Stack-fH19WBfQ.js";import{F as k}from"./Form-C1nYDdO8.js";import{B as D}from"./ButtonGroup-bg4r2ah8.js";import{D as y}from"./DataGrid-CHhOcfGb.js";import"./DefaultPropsProvider-CMzRgkCO.js";import"./emotion-element-f0de968e.browser.esm-xSVEHtue.js";import"./TextField-BqqrABCd.js";import"./toPropertyKey-KGmwFxs9.js";import"./Transition-DABJrq3x.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Divider-31lZdKBP.js";const K=()=>{const[f,h]=a.useState([]),[s,l]=a.useState(()=>localStorage.getItem("filterText")||""),[c,x]=a.useState(f),d=w();a.useEffect(()=>{m()},[]),a.useEffect(()=>{},[c]);const m=()=>{F().then(t=>{if(t){const i=t.map((r,z)=>({id:r.fertilizer_main_id,No:z+1,fertilizer_main_name_th:r.fertilizer_main_name_th,fertilizer_main_name_en:r.fertilizer_main_name_en,created_at:new Date(r.created_at).toLocaleString()}));h(i),x(i)}})},p=[{field:"No",headerName:"No.",width:90,headerAlign:"center",align:"center"},{field:"fertilizer_main_name_th",headerName:"ชื่อประเภทปุ๋ย (TH)",flex:.7},{field:"fertilizer_main_name_en",headerName:"ชื่อประเภทปุ๋ย (EN)",flex:1.2},{field:"created_at",headerName:"วันที่สร้าง",flex:1},{field:"actions",headerName:"Action",width:200,headerAlign:"center",align:"center",renderCell:t=>e.jsxs(D,{children:[e.jsx(n,{variant:"info",size:"sm",onClick:()=>g(t.row.id),children:e.jsx(C,{})}),e.jsx(n,{variant:"outline-danger",size:"sm",onClick:()=>j(t.row.id),children:e.jsx(N,{})})]})}],u=c.filter(t=>Object.values(t).some(i=>i&&i.toString().toLowerCase().includes(s.toLowerCase())));a.useEffect(()=>{localStorage.setItem("filterText",s)},[s]);const _=()=>{l(""),localStorage.removeItem("filterText")},g=t=>{d("/admin/fertilizer-main/edit",{state:{id:t}})},j=t=>{if(window.confirm("คุณต้องการลบข้อมูลประเภทปุ๋ยหรือไม่?"))try{v(t).then(()=>{m()})}catch(r){alert("ลบข้อมูลไม่สำเร็จ:",r)}};return e.jsx("div",{className:"",children:e.jsxs(o,{children:[e.jsx(o.Header,{children:e.jsx("h5",{children:"ข้อมูลประเภทปุ๋ย"})}),e.jsxs(o.Body,{className:"p-10",children:[e.jsxs(E,{direction:"row",spacing:1,sx:{mb:2},children:[e.jsx(k.Control,{type:"text",placeholder:"Search",value:s,onChange:t=>l(t.target.value)}),e.jsx(n,{variant:"primary",size:"sm",color:"secondary",onClick:_,disabled:!s,children:e.jsx(S,{style:{fontSize:20}})}),e.jsxs(n,{variant:"success",size:"sm",onClick:()=>d("/admin/fertilizer-main/add"),children:[e.jsx("i",{className:"feather icon-plus-circle"}),"เพิ่ม"]})]}),e.jsx(y,{rows:u,columns:p,pageSize:5,rowsPerPageOptions:[5,10,20],pagination:!0,disableSelectionOnClick:!0,hideFooterSelectedRowCount:!0})]})]})})};export{K as default};
