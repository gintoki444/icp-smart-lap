import{r as o,u as S,h as N,aE as v,j as e,R as p,C as k,B as i,i as B,F as D,w as E}from"./index-6YeC_AS5.js";import{d as R}from"./customerRequest-D-QXhSQD.js";import{C as c}from"./Card-BhOVTKNa.js";import{S as z}from"./Stack-DS5MSRky.js";import{F}from"./Form-CGCyrcfL.js";import{B as T}from"./Badge-C_mrIdUk.js";import{D as b,B as I}from"./DataGrid-DoczE-38.js";import"./DefaultPropsProvider-2RhE6zQB.js";import"./emotion-element-f0de968e.browser.esm-C-W82wov.js";import"./TextField-DmQ6Lsg1.js";import"./toPropertyKey-CTo9CRTC.js";import"./Transition-rt6HDaS9.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Divider-mvYdwXE_.js";const X=()=>{const[f,x]=o.useState([]),[r,l]=o.useState(()=>localStorage.getItem("filterText")||""),[d,u]=o.useState(f),m=S();o.useEffect(()=>{const t=localStorage.getItem("authToken");t&&N(t).then(s=>{s.user.user_id&&h(s.user.user_id)})},[]),o.useEffect(()=>{},[d]);const h=t=>{v(t).then(s=>{if(s){const n=s.map((a,C)=>({id:a.company_id,No:C+1,company_name:a.company_name,company_code:a.company_code,company_address:a.company_address,document_address:a.document_address,tax_id:a.tax_id,company_email:a.company_email,company_phone:a.company_phone,special_conditions:a.special_conditions,created_at:new Date(a.created_at).toLocaleString(),status:a.status,customer_contacts:a.customer_contacts}));x(n),u(n)}})},g=[{field:"No",headerName:"No.",width:90,headerAlign:"center",align:"center"},{field:"company_name",headerName:"ชื่อบริษัท",flex:1.2},{field:"company_address",headerName:"ที่อยู่บริษัท",flex:1},{field:"company_email",headerName:"อีเมล์",flex:1},{field:"company_phone",headerName:"เบอร์โทรศัพท์",flex:1},{field:"created_at",headerName:"วันที่สร้าง",flex:1},{field:"status",headerName:"สถานะ",width:120,headerAlign:"center",align:"center",renderCell:t=>e.jsx(T,{pill:!0,style:{},bg:t.row.status==="pending"?"warning":t.row.status==="rejected"?"danger":"success",children:t.row.status==="pending"?"รออนุมัติ":t.row.status==="rejected"?"ไม่อนุมัติ":"อนุมัติ"})},{field:"actions",headerName:"Action",width:200,headerAlign:"center",align:"center",renderCell:t=>e.jsxs(I,{children:[e.jsx(i,{variant:"info",size:"sm",onClick:()=>y(t.row),children:e.jsx(D,{})}),e.jsx(i,{variant:"outline-danger",size:"sm",onClick:()=>w(t.row.id),children:e.jsx(E,{})})]})}],_=d.filter(t=>Object.values(t).some(s=>s&&s.toString().toLowerCase().includes(r.toLowerCase())));o.useEffect(()=>{localStorage.setItem("filterText",r)},[r]);const j=()=>{l(""),localStorage.removeItem("filterText")},y=t=>{m("/company/edit",{state:{company:t}})},w=t=>{if(window.confirm("คุณต้องการลบข้อมูลลูกค้า/บริษัทหรือไม่?"))try{R(t).then(()=>{h()})}catch(n){alert("ลบข้อมูลไม่สำเร็จ:",n)}};return e.jsx(p,{className:"",children:e.jsxs(c,{children:[e.jsx(c.Header,{children:e.jsx(p,{children:e.jsxs(k,{children:[e.jsx(c.Title,{as:"h5",children:"รายการข้อมูลลูกค้า/บริษัท"}),e.jsx("span",{className:"d-block m-t-5",children:"บริษัทที่ผู้ใช้งานมีสิทธิ์เข้าถึง / แก้ไขข้อมูลได้"})]})})}),e.jsxs(c.Body,{children:[e.jsxs(z,{direction:"row",spacing:1,sx:{mb:2},children:[e.jsx(F.Control,{type:"text",placeholder:"Search",value:r,onChange:t=>l(t.target.value)}),e.jsx(i,{variant:"primary",size:"sm",color:"secondary",onClick:j,disabled:!r,children:e.jsx(B,{style:{fontSize:20}})}),e.jsxs(i,{variant:"success",size:"sm",onClick:()=>m("/company/select"),children:[e.jsx("i",{className:"feather icon-plus-circle"}),"เพิ่ม"]})]}),e.jsx("div",{children:e.jsx(b,{rows:_,columns:g,pageSize:5,rowsPerPageOptions:[5,10,20],pagination:!0,disableSelectionOnClick:!0,hideFooterSelectedRowCount:!0,style:{fontSize:16}})})]})]})})};export{X as default};
