import{r as a,d as C,q as R,j as e,R as N,C as k,F as B,B as o,I as b,p as D}from"./index-Dtqx7INH.js";import{R as z}from"./index-CGFydlFf.js";import{b as E,d as F}from"./serviceRequest-bFJtUotD.js";import{C as l}from"./Card-Bkd81iOt.js";import{S as T}from"./Stack-zE8jHDBo.js";import{B as I}from"./Badge-BWqEdNOE.js";import{B as L}from"./ButtonGroup-BNqkzXuK.js";import{D as A}from"./DataGrid-BczdgceL.js";import"./memoTheme-Doo5A3zk.js";import"./TextField-CWSlrGbD.js";import"./Transition-Bp0H6M_d.js";import"./Divider-CXGzUZDp.js";const W=()=>{const[h,f]=a.useState([]),[_,x]=a.useState([]),[i,c]=a.useState(()=>localStorage.getItem("filterText")||""),[u,g]=a.useState(_),d=C();a.useEffect(()=>{const t=localStorage.getItem("authToken");t&&R(t).then(r=>{f(r.user),m(r.user.user_id)})},[]),a.useEffect(()=>{},[u]);const m=t=>{E(t).then(r=>{if(r){const n=r.map((s,y)=>({id:s.request_id,No:y+1,request_date:new Date(s.request_date).toLocaleString(),request_no:s.request_no||"-",user_id:s.user_id,user_name:s.user_name,customer_id:s.customer_id,customer_name:s.customer_name,sample_type_name:s.sample_type_name,is_registration_analysis:s.is_registration_analysis,is_quality_check_analysis:s.is_quality_check_analysis,sample_type_id:s.sample_type_id,notes:s.notes||"-",created_at:new Date(s.created_at).toLocaleString(),status:s.status,sample_submissions:s.sample_submissions,service_request_documents:s.service_request_documents}));x(n),g(n)}})},p=[{field:"No",headerName:"No.",width:90,headerAlign:"center",align:"center"},{field:"customer_name",headerName:"บริษัท",flex:1},{field:"request_no",headerName:"เลขที่คำขอ",flex:.8},{field:"sample_type_name",headerName:"ประเภทคำขอ",flex:.7},{field:"request_date",headerName:"วันที่สร้าง",flex:1},{field:"notes",headerName:"โน้ต",flex:1.2},{field:"status",headerName:"สถานะ",width:120,headerAlign:"center",align:"center",renderCell:t=>e.jsx(I,{pill:!0,style:{},bg:t.row.status==="pending"?"warning":t.row.status==="rejected"?"danger":"success",children:t.row.status==="pending"?"รออนุมัติ":t.row.status==="rejected"?"ไม่อนุมัติ":"อนุมัติ"})},{field:"actions",headerName:"การจัดการ",width:200,headerAlign:"center",align:"center",renderCell:t=>e.jsxs(L,{children:[e.jsx(o,{variant:"primary",size:"sm",onClick:()=>{d("/user/request/detial",{state:{id:t.row.id}})},children:e.jsx("i",{className:"feather icon-file-text m-0"})}),e.jsx(o,{variant:"info",size:"sm",onClick:()=>S(t.row),children:e.jsx(D,{})}),e.jsx(o,{variant:"outline-danger",size:"sm",onClick:()=>q(t.row.id),children:e.jsx(z,{})})]})}],j=u.filter(t=>Object.values(t).some(r=>r&&r.toString().toLowerCase().includes(i.toLowerCase())));a.useEffect(()=>{localStorage.setItem("filterText",i)},[i]);const w=()=>{c(""),localStorage.removeItem("filterText")},S=t=>{d("/user/request/detial",{state:{services:t}})},q=t=>{if(window.confirm(`คุณต้องการลบข้อมูลผู้ใช้หมายเลข ${t} หรือไม่?`))try{F(t).then(()=>{m()})}catch(n){alert("ลบข้อมูลไม่สำเร็จ:",n)}};return e.jsx(e.Fragment,{children:e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(N,{children:e.jsx(k,{children:e.jsx(l.Title,{as:"h5",children:"รายการคำขอรับบริการ"})})})}),e.jsxs(l.Body,{children:[e.jsxs(T,{direction:"row",spacing:1,sx:{mb:2},children:[e.jsx(B.Control,{type:"text",placeholder:"Search",value:i,onChange:t=>c(t.target.value)}),e.jsx(o,{variant:"primary",size:"sm",color:"secondary",onClick:w,disabled:!i,children:e.jsx(b,{style:{fontSize:20}})}),e.jsxs(o,{variant:"success",size:"sm",onClick:()=>d("/user/request/add",{state:{user:h}}),children:[e.jsx("i",{className:"feather icon-plus-circle"}),"เพิ่ม"]})]}),e.jsx(A,{rows:j,columns:p,pageSize:5,rowsPerPageOptions:[5,10,20],pagination:!0,disableSelectionOnClick:!0,hideFooterSelectedRowCount:!0})]})]})})};export{W as default};
