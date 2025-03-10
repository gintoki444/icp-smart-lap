import{u as N,r as x,j as e,R as r,C as o,F as n,B as j,y as _}from"./index-DZpC_pHZ.js";import{F as g,c as F,a as d}from"./formik.esm-DH0jrOO4.js";import{g as I,p as G}from"./menusRequest-Bj_jsQPR.js";import{C as m}from"./Card-ZCMDsCmS.js";function M(){const p=N(),[y,h]=x.useState([]);x.useEffect(()=>{b()},[]);const b=()=>{I().then(i=>{i&&h(i)})},v={menu_name:"",menu_key:"",menu_type:"",parent_id:null,route:"",icon:"",sort_order:1,is_active:1},f=()=>F({menu_name:d().min(3,'"ชื่อ" ต้องมีอย่างน้อย 3 ตัวอักษร').required("กรุณากรอกชื่อ"),menu_key:d().min(3,'"Key" ต้องมีอย่างน้อย 3 ตัวอักษร').required("กรุณากรอก Key"),menu_type:d().required("กรุณาเลือก Type")}),C=async(i,{setErrors:s,setStatus:a,setSubmitting:t})=>{try{console.log(i),(await G(i)).menu_id&&(_.success("เพิ่มข้อมูลเมนูสำเร็จ!",{autoClose:3e3}),p("/admin/menus/"))}catch(l){_.error(`เพิ่มข้อมูลไม่สำเร็จ: ${l.message}`,{autoClose:3e3}),a({success:!1}),s({submit:l.message}),t(!1)}};return e.jsx(r,{children:e.jsxs(m,{children:[e.jsx(m.Header,{children:e.jsx(r,{children:e.jsx(o,{children:e.jsx(m.Title,{as:"h5",children:"เพิ่มข้อมูลเมนู"})})})}),e.jsx(m.Body,{children:e.jsx(g,{initialValues:v,validationSchema:f,onSubmit:C,children:({values:i,errors:s,touched:a,handleChange:t,handleBlur:l,handleSubmit:k,isSubmitting:u})=>e.jsxs(n,{onSubmit:k,children:[e.jsxs(r,{children:[e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"ชื่อเมนู:"}),e.jsx(n.Control,{type:"text",className:"form-control",placeholder:"ชื่อเมนู",name:"menu_name",value:i.menu_name,onChange:t,onBlur:l,isInvalid:a.menu_name&&!!s.menu_name}),a.menu_name&&s.menu_name&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.menu_name})]})}),e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"Key :"}),e.jsx(n.Control,{type:"text",className:"form-control",placeholder:"Key",name:"menu_key",value:i.menu_key,onChange:t,onBlur:l,isInvalid:a.menu_key&&!!s.menu_key}),a.menu_key&&s.menu_key&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.menu_key})]})}),e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"Type:"}),e.jsxs(n.Select,{name:"menu_type",style:{padding:"10px 20px"},value:i.menu_type,onChange:t,onBlur:l,isInvalid:a.menu_type&&!!s.menu_type,children:[e.jsx("option",{children:"เลือก Type"}),e.jsx("option",{value:"group",children:"group"}),e.jsx("option",{value:"collapse",children:"collapse"}),e.jsx("option",{value:"item",children:"item"})]}),a.menu_type&&s.menu_type&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.menu_type})]})}),e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"Parent เมนู:"}),e.jsxs(n.Select,{name:"parent_id",style:{padding:"10px 20px"},value:i.parent_id,onChange:t,onBlur:l,isInvalid:a.parent_id&&!!s.parent_id,children:[e.jsx("option",{value:"",children:"เลือก Parent เมนู"}),y.map(c=>e.jsx("option",{value:c.menu_id,children:c.menu_name},c.menu_id))]}),a.parent_id&&s.parent_id&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.parent_id})]})}),e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"Route :"}),e.jsx(n.Control,{type:"text",className:"form-control",placeholder:"/route",name:"route",value:i.route,onChange:t,onBlur:l,isInvalid:a.route&&!!s.route}),a.route&&s.route&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.route})]})}),e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"Icon :"}),e.jsx(n.Control,{type:"text",className:"form-control",placeholder:"Icon",name:"icon",value:i.icon,onChange:t,onBlur:l,isInvalid:a.icon&&!!s.icon}),a.icon&&s.icon&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.icon})]})}),e.jsx(o,{md:6,children:e.jsxs(n.Group,{className:"mb-2",children:[e.jsx(n.Label,{children:"ลำดับเมนู:"}),e.jsx(n.Control,{type:"text",className:"form-control",placeholder:"ชื่อเมนู",name:"sort_order",value:i.sort_order,onChange:t,onBlur:l,isInvalid:a.sort_order&&!!s.sort_order}),a.sort_order&&s.sort_order&&e.jsx(n.Control.Feedback,{type:"invalid",children:s.sort_order})]})})]}),e.jsx(r,{className:"mt-3",children:e.jsxs(o,{children:[e.jsx(j,{variant:"primary",type:"submit",disabled:u,children:u?e.jsx("span",{className:"spinner-border spinner-border-sm me-2",menu:"status","aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"feather icon-save"})," บันทึก"]})}),e.jsxs(j,{variant:"danger",onClick:()=>p("/admin/menus"),className:"ms-2",children:[e.jsx("i",{className:"feather icon-corner-up-left"})," ย้อนกลับ"]})]})})]})})})]})})}export{M as default};
