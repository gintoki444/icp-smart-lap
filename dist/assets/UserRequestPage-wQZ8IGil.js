import{r as n,u as H,h as O,y as _,az as P,j as t,R as B,C as p,B as h,i as G,x as V,F as M,k as W}from"./index-Bq0BSIrC.js";import{c as $,d as J}from"./serviceRequest-BNwVWIYi.js";import{C as i}from"./Card-C7kDYjR9.js";import{S as K}from"./Stack-fH19WBfQ.js";import{F as Q}from"./Form-C1nYDdO8.js";import{B as X}from"./Badge-D-xOYCqC.js";import{B as Y}from"./ButtonGroup-bg4r2ah8.js";import{D as Z}from"./DataGrid-CHhOcfGb.js";import"./DefaultPropsProvider-CMzRgkCO.js";import"./emotion-element-f0de968e.browser.esm-xSVEHtue.js";import"./TextField-BqqrABCd.js";import"./toPropertyKey-KGmwFxs9.js";import"./Transition-DABJrq3x.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Divider-31lZdKBP.js";const fe=()=>{const[m,D]=n.useState(null),[f,z]=n.useState([]),[g,j]=n.useState([]),[o,y]=n.useState(()=>localStorage.getItem("filterText")||""),[u,l]=n.useState(!1),x=H();n.useEffect(()=>{const e=localStorage.getItem("authToken");e&&(l(!0),O(e).then(a=>{D(a.user),T(a.user.user_id)}).catch(a=>{_.error("ไม่สามารถตรวจสอบผู้ใช้ได้"),console.error(a)}).finally(()=>l(!1)))},[]);const w=async e=>{l(!0);try{const a=await $(e);if(a.success){const r=a.data.map((s,d)=>({id:s.request_id,No:d+1,request_date:new Date(s.request_date).toLocaleString(),request_no:s.request_no||"-",user_id:s.user_id,user_name:s.user_name,customer_id:s.customer_id,customer_name:s.customer_name,sample_type_name:s.sample_type_name,is_registration_analysis:s.is_registration_analysis,is_quality_check_analysis:s.is_quality_check_analysis,sample_type_id:s.sample_type_id,notes:s.notes||"-",created_at:new Date(s.created_at).toLocaleString(),status:s.status,sample_submissions:s.sample_submissions,service_request_documents:s.service_request_documents}));j(r)}else j([])}catch(a){_.error("เกิดข้อผิดพลาดในการดึงข้อมูลคำขอ"),console.error(a)}finally{l(!1)}},T=async e=>{try{const a=await P(e);if(a){const r=a.map((s,d)=>({id:s.company_id,No:d+1,company_name:s.company_name,company_code:s.company_code,company_address:s.company_address,document_address:s.document_address,tax_id:s.tax_id,company_email:s.company_email,company_phone:s.company_phone,special_conditions:s.special_conditions,created_at:new Date(s.created_at).toLocaleString(),status:s.status,customer_contacts:s.customer_contacts}));z(r),await w(e)}}catch(a){_.error("เกิดข้อผิดพลาดในการดึงข้อมูลลูกค้า"),console.error(a)}},F=[{field:"No",headerName:"No.",width:90,headerAlign:"center",align:"center"},{field:"request_no",headerName:"เลขที่คำขอ",flex:.8},{field:"sample_type_name",headerName:"ประเภทคำขอ",flex:.7},{field:"request_date",headerName:"วันที่สร้าง",flex:1},{field:"notes",headerName:"โน้ต",flex:1.2},{field:"status",headerName:"สถานะ",width:120,headerAlign:"center",align:"center",renderCell:e=>t.jsx(X,{pill:!0,bg:e.row.status==="pending"?"warning":e.row.status==="rejected"?"danger":"success",children:e.row.status==="pending"?"กำลังดำเนินการ":e.row.status==="rejected"?"ไม่อนุมัติ":"อนุมัติ"})},{field:"actions",headerName:"การจัดการ",width:200,headerAlign:"center",align:"center",renderCell:e=>t.jsxs(Y,{children:[t.jsx(h,{variant:"primary",size:"sm",onClick:()=>x("/request/detial",{state:{id:e.row.id}}),children:t.jsx("i",{className:"feather icon-file-text m-0"})}),t.jsx(h,{variant:"info",size:"sm",onClick:()=>E(e.row),children:t.jsx(M,{})}),t.jsx(h,{variant:"outline-danger",size:"sm",onClick:()=>A(e.row.id),children:t.jsx(W,{})})]})}],I=()=>{if(!o.trim())return f.map(a=>({...a,filteredRows:g.filter(r=>r.customer_id===a.id)}));const e=o.toLowerCase();return f.map(a=>{var d,N,S;const r=g.filter(c=>{var q,R,k,L,b;return c.customer_id!==a.id?!1:((q=c.request_no)==null?void 0:q.toLowerCase().includes(e))||((R=c.sample_type_name)==null?void 0:R.toLowerCase().includes(e))||((k=c.request_date)==null?void 0:k.toLowerCase().includes(e))||((L=c.notes)==null?void 0:L.toLowerCase().includes(e))||((b=c.status)==null?void 0:b.toLowerCase().includes(e))}),s=((d=a.company_name)==null?void 0:d.toLowerCase().includes(e))||((N=a.tax_id)==null?void 0:N.toLowerCase().includes(e))||((S=a.company_address)==null?void 0:S.toLowerCase().includes(e));return{...a,filteredRows:r,isVisible:s||r.length>0}}).filter(a=>a.isVisible)};n.useEffect(()=>{localStorage.setItem("filterText",o)},[o]);const v=()=>{y(""),localStorage.removeItem("filterText")},E=e=>{x("/request/edit/",{state:{id:e.id},customer:f})},A=async e=>{if(window.confirm("คุณต้องการลบข้อมูลคำขอรับบริการ หรือไม่?")){l(!0);try{await J(e),_.success("ลบข้อมูลคำขอรับบริการสำเร็จ!",{autoClose:3e3}),m!=null&&m.user_id&&await w(m.user_id)}catch(r){_.error("ลบข้อมูลคำขอรับบริการไม่สำเร็จ!",{autoClose:3e3}),console.error(r)}finally{l(!1)}}},U=e=>{x("/request/add",{state:{user:m,customer:e}})},C=I();return t.jsxs(i,{children:[t.jsx(i.Header,{children:t.jsx(B,{children:t.jsx(p,{children:t.jsx(i.Title,{as:"h5",children:"รายการคำขอรับบริการ"})})})}),t.jsxs(i.Body,{children:[t.jsxs(K,{direction:"row",spacing:1,sx:{mb:2},children:[t.jsx(Q.Control,{type:"text",placeholder:"ค้นหาลูกค้า หรือ คำขอรับบริการ...",value:o,onChange:e=>y(e.target.value),disabled:u}),t.jsx(h,{variant:"primary",size:"sm",onClick:v,disabled:!o||u,children:t.jsx(G,{style:{fontSize:20}})})]}),u?t.jsx("div",{children:"Loading..."}):C.length>0?C.map(e=>t.jsxs(i,{className:"mb-3 rounded",children:[t.jsx(i.Header,{style:{background:"#e8f5ff"},children:t.jsxs(B,{className:"align-items-center",children:[t.jsxs(p,{children:[t.jsx(i.Title,{as:"h6",children:e.company_name}),t.jsxs("p",{className:"mb-0",children:["เลขที่ผู้เสียภาษี : ",t.jsx("span",{className:"text-dark",children:e.tax_id+" "}),"ที่อยู่ : ",t.jsx("span",{className:"text-dark",children:" "+e.company_address})]})]}),t.jsx(p,{xs:"auto",children:t.jsxs(h,{variant:"success",size:"sm",onClick:()=>U(e),disabled:u,children:[t.jsx("i",{className:"feather icon-plus-circle"})," เพิ่มคำขอ"]})})]})}),t.jsx(i.Body,{children:e.filteredRows.length>0?t.jsx(Z,{rows:e.filteredRows,columns:F,pageSize:5,rowsPerPageOptions:[5,10,20],pagination:!0,disableSelectionOnClick:!0,hideFooterSelectedRowCount:!0,loading:u,autoHeight:!0}):t.jsx("div",{className:"text-center",children:t.jsx("p",{className:"mt-2",children:"ไม่พบคำขอรับบริการสำหรับบริษัทนี้"})})})]},`customer-${e.id}`)):t.jsxs("div",{className:"text-center py-4",children:[t.jsx(V,{size:24}),t.jsx("p",{className:"mt-2",children:"ไม่พบข้อมูลลูกค้าหรือคำขอรับบริการที่ตรงกับคำค้นหา"})]})]})]})};export{fe as default};
