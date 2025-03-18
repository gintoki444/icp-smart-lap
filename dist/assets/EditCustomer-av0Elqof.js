import{u as ye,a as be,r as h,y as j,j as e,R as y,C as d,B as v,k as oe}from"./index-Bq0BSIrC.js";import{F as ge,c as se,f as Ne,g as E,a as m}from"./formik.esm-BOpZLvMI.js";import{a as ve,g as Fe,u as ke,p as Se,d as Ie}from"./specialConditionsRequest-Dz72CEse.js";import{F as we}from"./index-C4KUiROp.js";import{c as $e,e as Le,f as Pe,h as De,a as Ge,b as qe,i as Be}from"./customerRequest-CvJAP-BQ.js";import{h as Ee,d as Re}from"./uploadFileRequest-CHVQkj-t.js";import{S as ze}from"./SpecialConditionSelect-CSq8effb.js";import{F as Ve}from"./FirebaseFile-oNwf4Axa.js";import{C as F}from"./Card-C7kDYjR9.js";import{F as t}from"./Form-C1nYDdO8.js";import"./tslib.es6-RU1n5ZxP.js";import"./react-select.esm-CGHZA8pU.js";import"./toPropertyKey-KGmwFxs9.js";import"./emotion-element-f0de968e.browser.esm-xSVEHtue.js";import"./setPrototypeOf-DgZC2w_0.js";function oa(){var W;const R=ye(),p=((W=be().state)==null?void 0:W.customers)||null,[ie,ce]=h.useState({id:"",company_code:"",company_name:"",company_address:"",document_address:"",tax_id:"",email:"",phone:"",condition_id:[],special_conditions:"",contacts:[],files:[]}),[Me,le]=h.useState([]),[k,z]=h.useState([]),[V,A]=h.useState([]),[de,M]=h.useState(!0),[O,me]=h.useState([]),[D,re]=h.useState([]);h.useEffect(()=>{pe(),_e()},[]);const pe=async()=>{try{console.log("customerFromState?.id:",p==null?void 0:p.id);const a=await $e(p==null?void 0:p.id),n=await ve(p==null?void 0:p.id);let o=[];if(n.length>0&&(o=n.map(i=>i.condition_id)),a&&n){const i=a.customer_contacts||[];A(a.customer_documents||[]),ce({id:(a==null?void 0:a.company_id)||"",company_code:(a==null?void 0:a.company_code)||"",company_name:(a==null?void 0:a.company_name)||"",company_address:(a==null?void 0:a.company_address)||"",document_address:(a==null?void 0:a.document_address)||"",tax_id:(a==null?void 0:a.tax_id)||"",email:(a==null?void 0:a.email)||"",phone:(a==null?void 0:a.phone)||"",condition_id:o,special_conditions:(a==null?void 0:a.special_conditions)||"",contacts:i.map(c=>({contact_id:c.contact_id||null,contact_name:c.contact_name||"",contact_phone:c.contact_phone||"",contact_email:c.contact_email||"",position:c.position||""})),files:[]}),me(o),re(i.map(c=>({...c}))),M(!1)}}catch(a){console.error("Error fetching data:",a),j.error("ไม่สามารถโหลดข้อมูลได้",{autoClose:3e3}),M(!1)}},_e=()=>{Fe().then(a=>{a&&le(a)})},H=()=>se({company_code:m().min(3,"รหัสบริษัทต้องมีอย่างน้อย 3 ตัวอักษร").required("กรุณากรอกรหัสบริษัท"),company_name:m().required("กรุณากรอกชื่อบริษัท"),tax_id:m().matches(/^[0-9]{10,13}$/,"เลขที่ผู้เสียภาษีต้องมี 10 ถึง 13 หลัก").required("กรุณากรอกเลขที่ผู้เสียภาษี"),company_address:m().required("กรุณากรอกที่อยู่บริษัท"),document_address:m().min(3,"ที่อยู่จัดส่งเอกสารต้องมีอย่างน้อย 3 ตัวอักษร").required("กรุณากรอกที่อยู่จัดส่งเอกสาร"),email:m().email("รูปแบบอีเมล์ไม่ถูกต้อง").required("กรุณากรอกอีเมล์"),phone:m().matches(/^[0-9]{10}$/,"กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)").required("กรุณากรอกเบอร์โทรศัพท์"),condition_id:E().min(1,"กรุณาเลือกเงื่อนไขพิเศษอย่างน้อย 1 รายการ").required("กรุณาเลือกเงื่อนไขพิเศษ"),contacts:E().of(se({contact_name:m().required("กรุณากรอกชื่อผู้ติดต่อ"),contact_phone:m().matches(/^[0-9]{10}$/,"กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)").required("กรุณากรอกเบอร์โทรศัพท์"),contact_email:m().email("รูปแบบอีเมล์ไม่ถูกต้อง").required("กรุณากรอกอีเมล์"),position:m().required("กรุณากรอกตำแหน่ง")})),files:E().test("fileFormat","รองรับเฉพาะไฟล์ PDF หรือรูปภาพเท่านั้น",a=>!a||a.every(n=>{var o;return n.type==="application/pdf"||((o=n.type)==null?void 0:o.startsWith("image/"))}))}),xe=async(a,n)=>{if(window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "${n.document_name}"?`))try{await Re(n.document_path),await Be(n.document_id),A(V.filter((i,c)=>c!==a)),j.success("ลบไฟล์สำเร็จ",{autoClose:3e3})}catch(i){console.error("Error deleting file:",i),j.error("เกิดข้อผิดพลาดในการลบไฟล์ กรุณาลองใหม่",{autoClose:3e3})}},he=async(a,{setErrors:n,setStatus:o,setSubmitting:i})=>{try{a.files=k,await H().validate(a,{abortEarly:!1});const u={...a};if(delete u.contacts,delete u.files,delete u.condition_id,(await Le(u,a.id)).message){const f=a.condition_id,_=f.filter(s=>!O.includes(s)),x=O.filter(s=>!f.includes(s)),g=_.map(s=>Se({company_id:a.id,condition_id:s}));await Promise.all(g);const l=x.map(s=>Ie(s));await Promise.all(l);const S=a.contacts.filter(s=>!s.contact_id),N=a.contacts.filter(s=>s.contact_id),G=D.map(s=>s.contact_id),I=N.map(s=>s.contact_id),w=D.filter(s=>!I.includes(s.contact_id)).map(s=>Pe(s.contact_id));await Promise.all(w);const $=N.filter(s=>{const r=D.find(C=>C.contact_id===s.contact_id);return r&&(r.contact_name!==s.contact_name||r.contact_phone!==s.contact_phone||r.contact_email!==s.contact_email||r.position!==s.position)}).map(s=>De(s,s.contact_id));await Promise.all($);const L=S.map(s=>Ge({...s,company_id:a.id}));if(await Promise.all(L),k.length>0){const r=(await Ee(k,`customer-documents/${a.id}`,`หนังสือรับรองบริษัท_${a.id}`)).map(C=>{const P=C.fileName.split("/").pop();return qe({company_id:a.id,document_name:P,document_type:"ใบจดทะเบียน",document_path:`/${C.fileName}`})});await Promise.all(r)}j.success("แก้ไขข้อมูลลูกค้า/บริษัทและผู้ติดต่อสำเร็จ!",{autoClose:3e3}),R("/admin/customer")}}catch(c){if(c.name==="ValidationError"){const u=c.inner.reduce((b,f)=>(b[f.path]=f.message,b),{});n(u)}else j.error(`แก้ไขข้อมูลไม่สำเร็จ: ${c.message}`,{autoClose:3e3}),o({success:!1}),n({submit:c.message});i(!1)}},je=h.useCallback((a,n)=>{z(o=>[...o,...a]),n.length>0&&n.forEach(o=>{o.errors.forEach(i=>{i.code==="file-too-large"?j.error(`ไฟล์ ${o.file.name} มีขนาดใหญ่เกินไป (สูงสุด 5MB)`,{autoClose:3e3}):i.code==="file-invalid-type"?j.error(`ไฟล์ ${o.file.name} ไม่รองรับ (ต้องเป็น image หรือ PDF เท่านั้น)`,{autoClose:3e3}):j.error(`ไฟล์ ${o.file.name}: ${i.message}`,{autoClose:3e3})})})},[]),ue=a=>{z(n=>n.filter((o,i)=>i!==a)),j.success("ลบไฟล์สำเร็จ",{autoClose:3e3})},{getRootProps:fe,getInputProps:Ce,isDragActive:U}=ke({onDrop:je,accept:{"image/*":[".jpeg",".jpg",".png"],"application/pdf":[".pdf"]},maxSize:5*1024*1024,maxFiles:5});return e.jsx(y,{children:e.jsxs(F,{children:[e.jsx(F.Header,{children:e.jsx(y,{children:e.jsx(d,{children:e.jsx(F.Title,{as:"h5",children:"แก้ไขข้อมูลลูกค้า/บริษัท"})})})}),e.jsx(F.Body,{children:de?e.jsx("div",{children:"Loading..."}):e.jsx(ge,{initialValues:ie,validationSchema:H,onSubmit:he,enableReinitialize:!0,children:({values:a,errors:n,touched:o,handleChange:i,handleBlur:c,handleSubmit:u,isSubmitting:b,setFieldValue:f})=>e.jsxs(t,{onSubmit:u,children:[e.jsxs(y,{children:[e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"รหัสบริษัท:"}),e.jsx(t.Control,{type:"text",className:"form-control",placeholder:"รหัสบริษัท",disabled:!0,name:"company_code",value:a.company_code||"",onChange:i,onBlur:c,isInvalid:o.company_code&&!!n.company_code}),o.company_code&&n.company_code&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.company_code})]})}),e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"ชื่อบริษัท :"}),e.jsx(t.Control,{type:"text",className:"form-control",placeholder:"ชื่อบริษัท",name:"company_name",value:a.company_name||"",onChange:i,onBlur:c,isInvalid:o.company_name&&!!n.company_name}),o.company_name&&n.company_name&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.company_name})]})}),e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"เลขที่ผู้เสียภาษี :"}),e.jsx(t.Control,{type:"text",className:"form-control",placeholder:"เลขที่ผู้เสียภาษี",disabled:!0,name:"tax_id",value:a.tax_id||"",onChange:i,onBlur:c,isInvalid:o.tax_id&&!!n.tax_id}),o.tax_id&&n.tax_id&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.tax_id})]})}),e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"ที่อยู่บริษัท :"}),e.jsx(t.Control,{type:"text",className:"form-control",placeholder:"ที่อยู่บริษัท",name:"company_address",value:a.company_address||"",onChange:i,onBlur:c,isInvalid:o.company_address&&!!n.company_address}),o.company_address&&n.company_address&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.company_address})]})}),e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"ที่อยู่จัดส่งเอกสาร :"}),e.jsx(t.Control,{type:"text",className:"form-control",placeholder:"ที่อยู่จัดส่งเอกสาร",name:"document_address",value:a.document_address||"",onChange:i,onBlur:c,isInvalid:o.document_address&&!!n.document_address}),o.document_address&&n.document_address&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.document_address})]})}),e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"อีเมล์ :"}),e.jsx(t.Control,{type:"email",className:"form-control",disabled:!0,placeholder:"อีเมล์",name:"email",value:a.email||"",onChange:i,onBlur:c,isInvalid:o.email&&!!n.email}),o.email&&n.email&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.email})]})}),e.jsx(d,{md:6,children:e.jsxs(t.Group,{className:"mb-2",children:[e.jsx(t.Label,{children:"เบอร์โทรศัพท์ :"}),e.jsx(t.Control,{type:"text",className:"form-control",placeholder:"ตัวอย่าง: 0812345678",name:"phone",value:a.phone||"",onChange:i,onBlur:c,isInvalid:o.phone&&!!n.phone}),o.phone&&n.phone&&e.jsx(t.Control.Feedback,{type:"invalid",children:n.phone})]})}),e.jsxs(d,{md:6,children:[e.jsx(ze,{name:"condition_id",value:a.condition_id,onSelect:f,isMulti:!0}),o.condition_id&&n.condition_id&&e.jsx("div",{className:"invalid-feedback d-block",children:n.condition_id})]}),e.jsx(d,{className:"mb-2",children:e.jsx(Ne,{name:"contacts",children:({push:_,remove:x})=>e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"mt-2 mb-2",children:e.jsx(d,{children:e.jsx("h6",{children:"ข้อมูลผู้ติดต่อ"})})}),a.contacts&&a.contacts.map((g,l)=>{var S,N,G,I,q,w,B,$,L,s,r,C,P,J,K,Q,X,Y,Z,T,ee,ae,ne,te;return e.jsx(F,{className:"p-3 mb-2 pb-0 rounded",children:e.jsxs(y,{className:"ps-2 pe-2",children:[e.jsx(d,{md:6,className:"mb-3",children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"ชื่อผู้ติดต่อ:"}),e.jsx(t.Control,{type:"text",name:`contacts.${l}.contact_name`,value:g.contact_name||"",onChange:i,placeholder:"กรอกชื่อผู้ติดต่อ",onBlur:c,isInvalid:((N=(S=o.contacts)==null?void 0:S[l])==null?void 0:N.contact_name)&&!!((I=(G=n.contacts)==null?void 0:G[l])!=null&&I.contact_name)}),e.jsx(t.Control.Feedback,{type:"invalid",children:(w=(q=n.contacts)==null?void 0:q[l])==null?void 0:w.contact_name})]})}),e.jsx(d,{md:6,className:"mb-3",children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"เบอร์โทร:"}),e.jsx(t.Control,{type:"text",name:`contacts.${l}.contact_phone`,value:g.contact_phone||"",onChange:i,placeholder:"กรอกเบอร์โทร",onBlur:c,isInvalid:(($=(B=o.contacts)==null?void 0:B[l])==null?void 0:$.contact_phone)&&!!((s=(L=n.contacts)==null?void 0:L[l])!=null&&s.contact_phone)}),e.jsx(t.Control.Feedback,{type:"invalid",children:(C=(r=n.contacts)==null?void 0:r[l])==null?void 0:C.contact_phone})]})}),e.jsx(d,{md:6,className:"mb-3",children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"อีเมล์:"}),e.jsx(t.Control,{type:"email",name:`contacts.${l}.contact_email`,value:g.contact_email||"",placeholder:"กรอกอีเมล์",onChange:i,onBlur:c,isInvalid:((J=(P=o.contacts)==null?void 0:P[l])==null?void 0:J.contact_email)&&!!((Q=(K=n.contacts)==null?void 0:K[l])!=null&&Q.contact_email)}),e.jsx(t.Control.Feedback,{type:"invalid",children:(Y=(X=n.contacts)==null?void 0:X[l])==null?void 0:Y.contact_email})]})}),e.jsx(d,{md:6,className:"mb-3",children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"ตำแหน่ง:"}),e.jsx(t.Control,{type:"text",name:`contacts.${l}.position`,value:g.position||"",onChange:i,placeholder:"กรอกตำแหน่ง",onBlur:c,isInvalid:((T=(Z=o.contacts)==null?void 0:Z[l])==null?void 0:T.position)&&!!((ae=(ee=n.contacts)==null?void 0:ee[l])!=null&&ae.position)}),e.jsx(t.Control.Feedback,{type:"invalid",children:(te=(ne=n.contacts)==null?void 0:ne[l])==null?void 0:te.position})]})}),a.contacts.length>1&&e.jsx(d,{md:12,className:"d-flex align-items-end mb-3",children:e.jsxs(v,{variant:"danger",onClick:()=>x(l),size:"sm",children:[e.jsx(oe,{style:{fontSize:16},className:"me-2"})," ลบ"]})})]},l)},l)}),e.jsx(y,{className:"ps-2 pe-2",children:e.jsx(d,{children:e.jsxs(v,{variant:"outline-success",size:"sm",onClick:()=>_({contact_name:"",contact_phone:"",contact_email:"",position:""}),children:[e.jsx(we,{style:{fontSize:16},className:"me-2"})," เพิ่มผู้ติดต่อ"]})})})]})})}),e.jsxs(d,{md:12,children:[e.jsxs(t.Group,{className:"mb-4",children:[e.jsx(t.Label,{children:"เอกสารที่มีอยู่:"}),V.map((_,x)=>e.jsx(Ve,{filePath:_.document_path,fileName:_.document_name,onDelete:()=>xe(x,_)},x))]}),e.jsxs(t.Group,{className:"mb-4",children:[e.jsx(t.Label,{children:"เอกสารประกอบการขึ้นทะเบียน (ตย. หนังสือรับรองบริษัท, ภพ.20, บัตรประชาชนกรรมการบริษัท) :"}),e.jsxs("div",{...fe(),style:{border:"2px dashed #04a9f5",borderRadius:"8px",padding:"50px 20px",textAlign:"center",backgroundColor:U?"#e6f7ff":"#f8f9fa"},children:[e.jsx("input",{...Ce()}),U?e.jsx("p",{style:{marginBottom:0},children:"Drop your files here..."}):e.jsx("p",{style:{marginBottom:0},children:"Drag and drop files here, or click to select files (สูงสุด 5 ไฟล์, 5MB ต่อไฟล์)"})]}),n.files&&o.files&&e.jsx("div",{className:"invalid-feedback d-block",children:n.files})]}),e.jsx("ul",{className:"mt-3",children:k.map((_,x)=>e.jsxs("li",{children:[e.jsx("i",{className:"feather icon-file",style:{marginRight:12}}),_.name,e.jsx(v,{variant:"danger",size:"sm",className:"ms-2",onClick:()=>ue(x),children:e.jsx(oe,{style:{fontSize:16}})})]},x))})]})]}),e.jsx(y,{className:"mt-3",children:e.jsxs(d,{children:[e.jsx(v,{variant:"primary",type:"submit",disabled:b,children:b?e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"feather icon-save"})," บันทึก"]})}),e.jsxs(v,{variant:"danger",onClick:()=>R("/admin/customer"),className:"ms-2",children:[e.jsx("i",{className:"feather icon-corner-up-left"})," ย้อนกลับ"]})]})})]})})})]})})}export{oa as default};
