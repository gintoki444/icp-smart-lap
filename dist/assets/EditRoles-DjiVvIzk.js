import{u as v,b as C,j as e,C as r,B as p}from"./index-BFZlI6dJ.js";import{c as _,a as x,F as R}from"./formik.esm-C2x7TAHR.js";import{a as y}from"./rolesRequest-BlVghC4s.js";import{R as t}from"./Row-CSQuKBoM.js";import{C as h}from"./Col-CY34EU4-.js";import{F as i}from"./Form-FiLb8d9P.js";import"./ElementChildren-CPU8LvB5.js";function w(){var d;const c=v(),n=((d=C().state)==null?void 0:d.roles)||null,j=_().shape({role_name:x().required("กรุณากรอกชื่อ Role"),description:x().required("กรุณากรอกรายละเอียด")});console.log(n);const u={role_id:n.id,role_name:n.role_name,description:n.description},b=async(s,{setErrors:o,setSubmitting:l})=>{console.log("values:",s);const a=await y(s,s.role_id);a?c("/admin/roles-list/"):o({submit:a.message}),l(!1)};return e.jsx(t,{children:e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(t,{children:e.jsx(h,{children:e.jsx(r.Title,{as:"h5",children:"แก้ไขข้อมูล Role"})})})}),e.jsx(r.Body,{children:e.jsx(R,{initialValues:u,validationSchema:j,onSubmit:b,children:({values:s,errors:o,touched:l,handleChange:a,handleBlur:m,handleSubmit:f})=>e.jsxs(i,{onSubmit:f,children:[e.jsxs(i.Group,{className:"mb-3",children:[e.jsx(i.Label,{children:"ชื่อ Role :"}),e.jsx(i.Control,{type:"text",placeholder:"กรอกชื่อ Role",name:"role_name",value:s.role_name,onChange:a,onBlur:m,isInvalid:l.role_name&&!!o.role_name}),e.jsx(i.Control.Feedback,{type:"invalid",children:o.role_name})]}),e.jsxs(i.Group,{className:"mb-3",children:[e.jsx(i.Label,{children:"รายละเอียด :"}),e.jsx(i.Control,{type:"text",placeholder:"กรอกรายละเอียด",name:"description",value:s.description,onChange:a,onBlur:m,isInvalid:l.description&&!!o.description}),e.jsx(i.Control.Feedback,{type:"invalid",children:o.description})]}),e.jsx(t,{children:e.jsxs(h,{children:[e.jsxs(p,{variant:"primary",type:"submit",children:[e.jsx("i",{className:"feather icon-save"})," บันทึก"]}),e.jsxs(p,{variant:"danger",onClick:()=>c("/admin/roles-list"),className:"ms-2",children:[e.jsx("i",{className:"feather icon-corner-up-left"})," ย้อนกลับ"]})]})})]})})})]})})}export{w as default};
