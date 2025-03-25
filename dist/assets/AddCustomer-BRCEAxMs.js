import{r as _,u as le,h as me,y as f,j as e,R as h,C as i,B as y,v as X}from"./index-CMKGjvil.js";import{F as de,c as Y,f as re,g as v,a as d}from"./formik.esm-PXS3-tw9.js";import{u as pe}from"./index-NmPNhDG7.js";import{p as he,b as xe,c as je}from"./customerRequest-D-QXhSQD.js";import{a as _e,p as ue}from"./specialConditionsRequest-B-G5iiQh.js";import{F as fe}from"./index-BbxaU2Mp.js";import{h as ye}from"./uploadFileRequest-j7nqPy1R.js";import{S as be}from"./SpecialConditionSelect-CioFp3MQ.js";import{C as b}from"./Card-ltuRbL1m.js";import{F as s}from"./Form-XAT3KesX.js";import"./tslib.es6-RU1n5ZxP.js";import"./firebaseConfig-pMHECxRz.js";import"./react-select.esm-Df4SyQAq.js";import"./toPropertyKey-BZFHAmHd.js";import"./emotion-element-f0de968e.browser.esm-D2ySOhvj.js";import"./setPrototypeOf-DgZC2w_0.js";function Ee(){const[Ce,Z]=_.useState({}),[ge,ee]=_.useState([]),[C,F]=_.useState([]),k=le();_.useEffect(()=>{const n=localStorage.getItem("authToken");n&&me(n).then(a=>{Z(a.user||{})})},[]),_.useEffect(()=>{ae()},[]);const ae=()=>{_e().then(n=>{n&&ee(n)})},se={company_code:"C",company_name:"",company_address:"",document_address:"",tax_id:"",email:"",phone:"",condition_id:[],special_conditions:"",contacts:[{contact_name:"",contact_phone:"",contact_email:"",position:""}],files:[]},S=()=>Y({company_name:d().required("กรุณากรอกชื่อบริษัท"),tax_id:d().matches(/^[0-9]{10,13}$/,"เลขที่ผู้เสียภาษีต้องมี 10 ถึง 13 หลัก").required("กรุณากรอกเลขที่ผู้เสียภาษี"),company_address:d().required("กรุณากรอกที่อยู่บริษัท"),document_address:d().min(3,"ที่อยู่จัดส่งเอกสารต้องมีอย่างน้อย 3 ตัวอักษร").required("กรุณากรอกที่อยู่จัดส่งเอกสาร"),email:d().email("รูปแบบอีเมล์ไม่ถูกต้อง").required("กรุณากรอกอีเมล์"),phone:d().matches(/^[0-9]{10}$/,"กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)").required("กรุณากรอกเบอร์โทรศัพท์"),condition_id:v().min(1,"กรุณาเลือกเงื่อนไขพิเศษอย่างน้อย 1 รายการ").required("กรุณาเลือกเงื่อนไขพิเศษ"),contacts:v().of(Y({contact_name:d().required("กรุณากรอกชื่อผู้ติดต่อ"),contact_phone:d().matches(/^[0-9]{10}$/,"กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)").required("กรุณากรอกเบอร์โทรศัพท์"),contact_email:d().email("รูปแบบอีเมล์ไม่ถูกต้อง").required("กรุณากรอกอีเมล์"),position:d().required("กรุณากรอกตำแหน่ง")})),files:v().test("fileFormat","รองรับเฉพาะไฟล์ PDF หรือรูปภาพเท่านั้น",n=>!n||n.every(a=>{var t;return a.type==="application/pdf"||((t=a.type)==null?void 0:t.startsWith("image/"))}))}),ne=n=>{F(a=>a.filter((t,c)=>c!==n))},te=async(n,{setErrors:a,setStatus:t,setSubmitting:c})=>{try{n.files=C,n.company_code=n.company_code+n.tax_id,console.log("values",n),await S().validate(n,{abortEarly:!1});const r={...n};delete r.contacts,delete r.files,delete r.condition_id;const m=await he(r);if(m.company_id){const x=n.condition_id.map(p=>ue({company_id:m.company_id,condition_id:p}));await Promise.all(x);const j=n.contacts.map(p=>({...p,company_id:m.company_id})).map(p=>xe(p));if(await Promise.all(j),C.length>0){const o=(await ye(C,`customer-documents/${m.company_id}`,`หนังสือรับรองบริษัท_${m.company_id}`)).map(u=>{const N=u.fileName.split("/").pop();return je({company_id:m.company_id,document_name:N,document_type:"ใบจดทะเบียน",document_path:`/${u.fileName}`})});await Promise.all(o)}f.success("เพิ่มข้อมูลลูกค้า/บริษัทและผู้ติดต่อสำเร็จ!",{autoClose:3e3}),k("/admin/customer")}}catch(l){if(l.name==="ValidationError"){const r=l.inner.reduce((m,x)=>(m[x.path]=x.message,m),{});a(r)}else console.log("err.message :",l.message),f.error(`เพิ่มข้อมูลไม่สำเร็จ: ${l.message}`,{autoClose:3e3}),t({success:!1}),a({submit:l.message});c(!1)}},oe=_.useCallback((n,a)=>{F(t=>[...t,...n]),a.length>0&&a.forEach(t=>{t.errors.forEach(c=>{c.code==="file-too-large"?f.error(`ไฟล์ ${t.file.name} มีขนาดใหญ่เกินไป (สูงสุด 5MB)`,{autoClose:3e3}):c.code==="file-invalid-type"?f.error(`ไฟล์ ${t.file.name} ไม่รองรับ (ต้องเป็น image หรือ PDF เท่านั้น)`,{autoClose:3e3}):f.error(`ไฟล์ ${t.file.name}: ${c.message}`,{autoClose:3e3})})})},[]),{getRootProps:ce,getInputProps:ie,isDragActive:$}=pe({onDrop:oe,accept:{"image/*":[".jpeg",".jpg",".png"],"application/pdf":[".pdf"]},maxSize:5*1024*1024,maxFiles:5});return e.jsx(h,{className:"",children:e.jsxs(b,{children:[e.jsx(b.Header,{children:e.jsx(h,{children:e.jsx(i,{children:e.jsx(b.Title,{as:"h5",children:"เพิ่มข้อมูลลูกค้า/บริษัท"})})})}),e.jsx(b.Body,{children:e.jsx(de,{initialValues:se,validationSchema:S,onSubmit:te,children:({values:n,errors:a,touched:t,handleChange:c,handleBlur:l,handleSubmit:r,isSubmitting:m,setFieldValue:x})=>e.jsxs(s,{onSubmit:r,children:[e.jsxs(h,{children:[e.jsx(i,{md:6,children:e.jsxs(s.Group,{className:"mb-2",children:[e.jsx(s.Label,{children:"ชื่อบริษัท :"}),e.jsx(s.Control,{type:"text",className:"form-control",placeholder:"ชื่อบริษัท",name:"company_name",value:n.company_name,onChange:c,onBlur:l,isInvalid:t.company_name&&!!a.company_name}),t.company_name&&a.company_name&&e.jsx(s.Control.Feedback,{type:"invalid",children:a.company_name})]})}),e.jsx(i,{md:6,children:e.jsxs(s.Group,{className:"mb-2",children:[e.jsx(s.Label,{children:"เลขที่ผู้เสียภาษี :"}),e.jsx(s.Control,{type:"text",className:"form-control",placeholder:"เลขที่ผู้เสียภาษี",name:"tax_id",value:n.tax_id,onChange:c,onBlur:l,isInvalid:t.tax_id&&!!a.tax_id}),t.tax_id&&a.tax_id&&e.jsx(s.Control.Feedback,{type:"invalid",children:a.tax_id})]})}),e.jsx(i,{md:6,children:e.jsxs(s.Group,{className:"mb-2",children:[e.jsx(s.Label,{children:"ที่อยู่บริษัท :"}),e.jsx(s.Control,{type:"text",className:"form-control",placeholder:"ที่อยู่บริษัท",name:"company_address",value:n.company_address,onChange:c,onBlur:l,isInvalid:t.company_address&&!!a.company_address}),t.company_address&&a.company_address&&e.jsx(s.Control.Feedback,{type:"invalid",children:a.company_address})]})}),e.jsx(i,{md:6,children:e.jsxs(s.Group,{className:"mb-2",children:[e.jsx(s.Label,{children:"ที่อยู่จัดส่งเอกสาร :"}),e.jsx(s.Control,{type:"text",className:"form-control",placeholder:"ที่อยู่จัดส่งเอกสาร",name:"document_address",value:n.document_address,onChange:c,onBlur:l,isInvalid:t.document_address&&!!a.document_address}),t.document_address&&a.document_address&&e.jsx(s.Control.Feedback,{type:"invalid",children:a.document_address})]})}),e.jsx(i,{md:6,children:e.jsxs(s.Group,{className:"mb-2",children:[e.jsx(s.Label,{children:"อีเมล์ :"}),e.jsx(s.Control,{type:"email",className:"form-control",placeholder:"อีเมล์",name:"email",value:n.email,onChange:c,onBlur:l,isInvalid:t.email&&!!a.email}),t.email&&a.email&&e.jsx(s.Control.Feedback,{type:"invalid",children:a.email})]})}),e.jsx(i,{md:6,children:e.jsxs(s.Group,{className:"mb-2",children:[e.jsx(s.Label,{children:"เบอร์โทรศัพท์ :"}),e.jsx(s.Control,{type:"text",className:"form-control",placeholder:"ตัวอย่าง: 0812345678",name:"phone",value:n.phone,onChange:c,onBlur:l,isInvalid:t.phone&&!!a.phone}),t.phone&&a.phone&&e.jsx(s.Control.Feedback,{type:"invalid",children:a.phone})]})}),e.jsxs(i,{md:6,children:[e.jsx(be,{name:"condition_id",value:n.condition_id,onSelect:x,isMulti:!0}),t.condition_id&&a.condition_id&&e.jsx("div",{className:"invalid-feedback d-block",children:a.condition_id})]}),e.jsx(i,{md:12,className:"mb-2",children:e.jsx(re,{name:"contacts",children:({push:g,remove:j})=>e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"mt-2 mb-2",children:e.jsx(i,{children:e.jsx("h6",{children:"ข้อมูลผู้ติดต่อ"})})}),n.contacts.map((p,o)=>{var u,N,D,I,L,q,G,P,B,w,z,R,E,A,V,M,U,T,H,W,J,K,O,Q;return e.jsx(b,{className:"p-3 mb-2 pb-0 rounded",children:e.jsxs(h,{className:"ps-2 pe-2",children:[e.jsx(i,{md:6,className:"mb-3",children:e.jsxs(s.Group,{children:[e.jsx(s.Label,{children:"ชื่อผู้ติดต่อ:"}),e.jsx(s.Control,{type:"text",name:`contacts.${o}.contact_name`,value:n.contacts[o].contact_name,onChange:c,placeholder:"กรอกชื่อผู้ติดต่อ",onBlur:l,isInvalid:((N=(u=t.contacts)==null?void 0:u[o])==null?void 0:N.contact_name)&&!!((I=(D=a.contacts)==null?void 0:D[o])!=null&&I.contact_name)}),e.jsx(s.Control.Feedback,{type:"invalid",children:(q=(L=a.contacts)==null?void 0:L[o])==null?void 0:q.contact_name})]})}),e.jsx(i,{md:6,className:"mb-3",children:e.jsxs(s.Group,{children:[e.jsx(s.Label,{children:"เบอร์โทร:"}),e.jsx(s.Control,{type:"text",name:`contacts.${o}.contact_phone`,value:n.contacts[o].contact_phone,onChange:c,placeholder:"กรอกเบอร์โทร",onBlur:l,isInvalid:((P=(G=t.contacts)==null?void 0:G[o])==null?void 0:P.contact_phone)&&!!((w=(B=a.contacts)==null?void 0:B[o])!=null&&w.contact_phone)}),e.jsx(s.Control.Feedback,{type:"invalid",children:(R=(z=a.contacts)==null?void 0:z[o])==null?void 0:R.contact_phone})]})}),e.jsx(i,{md:6,className:"mb-3",children:e.jsxs(s.Group,{children:[e.jsx(s.Label,{children:"อีเมล์:"}),e.jsx(s.Control,{type:"email",name:`contacts.${o}.contact_email`,value:n.contacts[o].contact_email,placeholder:"กรอกอีเมล์",onChange:c,onBlur:l,isInvalid:((A=(E=t.contacts)==null?void 0:E[o])==null?void 0:A.contact_email)&&!!((M=(V=a.contacts)==null?void 0:V[o])!=null&&M.contact_email)}),e.jsx(s.Control.Feedback,{type:"invalid",children:(T=(U=a.contacts)==null?void 0:U[o])==null?void 0:T.contact_email})]})}),e.jsx(i,{md:6,className:"mb-3",children:e.jsxs(s.Group,{children:[e.jsx(s.Label,{children:"ตำแหน่ง:"}),e.jsx(s.Control,{type:"text",name:`contacts.${o}.position`,value:n.contacts[o].position,onChange:c,placeholder:"กรอกตำแหน่ง",onBlur:l,isInvalid:((W=(H=t.contacts)==null?void 0:H[o])==null?void 0:W.position)&&!!((K=(J=a.contacts)==null?void 0:J[o])!=null&&K.position)}),e.jsx(s.Control.Feedback,{type:"invalid",children:(Q=(O=a.contacts)==null?void 0:O[o])==null?void 0:Q.position})]})}),n.contacts.length>1&&e.jsx(i,{md:12,className:"d-flex align-items-end mb-3",children:e.jsxs(y,{variant:"danger",onClick:()=>j(o),size:"sm",children:[e.jsx(X,{style:{fontSize:16},className:"me-2"})," ลบ"]})})]},o)},o)}),e.jsx(h,{className:"ps-2 pe-2",children:e.jsx(i,{children:e.jsxs(y,{variant:"outline-success",size:"sm",onClick:()=>g({contact_name:"",contact_phone:"",contact_email:"",position:""}),children:[e.jsx(fe,{style:{fontSize:16},className:"me-2"})," เพิ่มผู้ติดต่อ"]})})})]})})}),e.jsxs(i,{md:12,children:[e.jsxs(s.Group,{className:"mb-4",children:[e.jsx(s.Label,{children:"เอกสารประกอบการขึ้นทะเบียน (ตย. หนังสือรับรองบริษัท, ภพ.20, บัตรประชาชนกรรมการบริษัท) :"}),e.jsxs("div",{...ce(),style:{border:"2px dashed #04a9f5",borderRadius:"8px",padding:"50px 20px",textAlign:"center",backgroundColor:$?"#e6f7ff":"#f8f9fa"},children:[e.jsx("input",{...ie()}),$?e.jsx("p",{style:{marginBottom:0},children:"Drop your files here..."}):e.jsx("p",{style:{marginBottom:0},children:"Drag and drop files here, or click to select files (สูงสุด 5 ไฟล์, 5MB ต่อไฟล์)"})]}),a.files&&t.files&&e.jsx("div",{className:"invalid-feedback d-block",children:a.files})]}),e.jsx("ul",{className:"mt-3",children:C.map((g,j)=>e.jsxs("li",{children:[e.jsx("i",{className:"feather icon-file",style:{marginRight:12}}),g.name,e.jsx(y,{variant:"danger",size:"sm",className:"ms-2",onClick:()=>ne(j),children:e.jsx(X,{style:{fontSize:16}})})]},j))})]})]}),e.jsx(h,{className:"mt-3",children:e.jsxs(i,{children:[e.jsx(y,{variant:"primary",type:"submit",disabled:m,children:m?e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"feather icon-save"})," บันทึก"]})}),e.jsxs(y,{variant:"danger",onClick:()=>k("/admin/customer"),className:"ms-2",children:[e.jsx("i",{className:"feather icon-corner-up-left"})," ย้อนกลับ"]})]})})]})})})]})})}export{Ee as default};
