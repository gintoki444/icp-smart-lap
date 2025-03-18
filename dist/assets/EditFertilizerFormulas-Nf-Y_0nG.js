import{u as D,a as A,r as m,j as e,R as P,C as n,B as F,y as R}from"./index-Bq0BSIrC.js";import{b as M,c as O,e as H,f as U,h as q,a as J}from"./fertilizerFormulasRequest-CtobAFDH.js";import{g as K}from"./baseFertilizersRequest-jsJdYFIk.js";import{T as Q}from"./TestItemMultiSelect-C9rZHrAm.js";import{C as z}from"./Card-C7kDYjR9.js";import{A as V}from"./Alert-C8ltoKJ3.js";import{F as r}from"./Form-C1nYDdO8.js";import"./react-select.esm-CGHZA8pU.js";import"./toPropertyKey-KGmwFxs9.js";import"./emotion-element-f0de968e.browser.esm-xSVEHtue.js";import"./setPrototypeOf-DgZC2w_0.js";import"./testItemsRequest-CIY3wZGW.js";import"./CloseButton-DJdHSP0V.js";import"./Transition-DABJrq3x.js";const me=()=>{var y;const h=D(),c=((y=A().state)==null?void 0:y.id)||null,[i,f]=m.useState({formula_name:"",formula_code:"",base_fertilizer_id:"",formula_description:"",fertilizer_main_id:1,nutrient_ratio:"",is_rice_fertilizer:0,recommended_tests:"",test_item_id:[]}),[I,C]=m.useState([]),[p,N]=m.useState([]),[s,x]=m.useState({}),[v,u]=m.useState(null),[j,g]=m.useState(!1);m.useEffect(()=>{c?(k(),T()):h("/admin/fertilizer-formulas")},[c]);const k=async()=>{try{const t=await M(c);f({formula_name:t.formula_name||"",formula_code:t.formula_code||"",base_fertilizer_id:t.base_fertilizer_id||"",formula_description:t.formula_description||"",fertilizer_main_id:t.fertilizer_main_id||1,nutrient_ratio:t.nutrient_ratio||"",is_rice_fertilizer:t.is_rice_fertilizer||0,recommended_tests:t.recommended_tests||"",test_item_id:[]}),await E()}catch(t){u("เกิดข้อผิดพลาดในการดึงข้อมูลสูตรปุ๋ย"),console.error("Error fetching fertilizer formula:",t)}},T=async()=>{try{const t=await K();C(t)}catch(t){u("เกิดข้อผิดพลาดในการดึงข้อมูลปุ๋ยพื้นฐาน"),console.error("Error fetching base fertilizers:",t)}},E=async()=>{try{const t=await O(c),o=t.map(l=>l.test_item_id),d=t.map(l=>l.test_name);N(t),f(l=>({...l,test_item_id:o,recommended_tests:d.join(", ")}))}catch(t){u("เกิดข้อผิดพลาดในการดึงข้อมูลรายการทดสอบ"),console.error("Error fetching test items:",t)}},S=()=>{const t={};return i.formula_name.trim()||(t.formula_name="กรุณากรอกชื่อสูตรปุ๋ย"),i.formula_code.trim()||(t.formula_code="กรุณากรอกรหัสสูตรปุ๋ย"),i.base_fertilizer_id||(t.base_fertilizer_id="กรุณาเลือกปุ๋ยพื้นฐาน"),i.formula_description.trim()||(t.formula_description="กรุณากรอกคำอธิบายสูตรปุ๋ย"),i.nutrient_ratio.trim()||(t.nutrient_ratio="กรุณากรอกสัดส่วนธาตุอาหาร"),i.test_item_id.length===0&&(t.test_item_id="กรุณาเลือกรายการทดสอบอย่างน้อย 1 รายการ"),x(t),Object.keys(t).length===0},_=t=>{const{name:o,value:d,type:l,checked:b}=t.target;f({...i,[o]:l==="checkbox"?b?1:0:d}),x({...s,[o]:""})},w=(t,o,d)=>{f({...i,[t]:o,recommended_tests:d.join(", ")}),x({...s,[t]:""})},B=async t=>{if(t.preventDefault(),!!S()){g(!0),u(null);try{const o={...i,fertilizer_main_id:Number(i.fertilizer_main_id),base_fertilizer_id:Number(i.base_fertilizer_id),is_rice_fertilizer:Number(i.is_rice_fertilizer)};console.log("formulaData:",o),delete o.test_item_id,await H(c,o);const d=p.map(a=>a.test_item_id),l=i.test_item_id,b=p.filter(a=>!l.includes(a.test_item_id)),L=l.filter(a=>!d.includes(a)),G=p.filter(a=>l.includes(a.test_item_id));await Promise.all(b.map(a=>U(a.id))),await Promise.all(G.map(a=>q(a.id,{test_item_id:a.test_item_id}))),await Promise.all(L.map(a=>J({formula_id:c,test_item_id:Number(a)}))),R.success("แก้ไขสูตรปุ๋ยและรายการทดสอบสำเร็จ!",{autoClose:3e3}),h("/admin/fertilizer-formulas")}catch(o){u("เกิดข้อผิดพลาดในการแก้ไขสูตรปุ๋ย กรุณาลองใหม่"),console.error("Error updating fertilizer formula:",o)}finally{g(!1)}}};return e.jsx("div",{children:e.jsxs(z,{children:[e.jsx(z.Header,{children:e.jsx("h5",{children:"แก้ไขสูตรปุ๋ย"})}),e.jsxs(z.Body,{children:[v&&e.jsx(V,{variant:"danger",children:v}),e.jsxs(r,{onSubmit:B,children:[e.jsxs(P,{children:[e.jsx(n,{md:6,className:"mb-3",children:e.jsxs(r.Group,{controlId:"formula_name",children:[e.jsx(r.Label,{children:"ชื่อสูตรปุ๋ย"}),e.jsx(r.Control,{type:"text",name:"formula_name",value:i.formula_name,placeholder:"กรอกชื่อสูตรปุ๋ย",onChange:_,isInvalid:!!s.formula_name}),e.jsx(r.Control.Feedback,{type:"invalid",children:s.formula_name})]})}),e.jsx(n,{md:6,className:"mb-3",children:e.jsxs(r.Group,{controlId:"formula_code",children:[e.jsx(r.Label,{children:"รหัสสูตรปุ๋ย"}),e.jsx(r.Control,{type:"text",name:"formula_code",value:i.formula_code,placeholder:"กรอกรหัสสูตรปุ๋ย",onChange:_,isInvalid:!!s.formula_code}),e.jsx(r.Control.Feedback,{type:"invalid",children:s.formula_code})]})}),e.jsx(n,{md:6,className:"mb-3",children:e.jsxs(r.Group,{controlId:"base_fertilizer_id",children:[e.jsx(r.Label,{children:"ปุ๋ยพื้นฐาน"}),e.jsxs(r.Select,{name:"base_fertilizer_id",value:i.base_fertilizer_id,style:{padding:"10.5px 22px",fontSize:14},onChange:_,isInvalid:!!s.base_fertilizer_id,children:[e.jsx("option",{value:"",children:"เลือกปุ๋ยพื้นฐาน"}),I.map(t=>e.jsx("option",{value:t.base_fertilizer_id,children:t.common_name_th},t.base_fertilizer_id))]}),e.jsx(r.Control.Feedback,{type:"invalid",children:s.base_fertilizer_id})]})}),e.jsx(n,{md:6,className:"mb-3",children:e.jsxs(r.Group,{controlId:"nutrient_ratio",children:[e.jsx(r.Label,{children:"สัดส่วนธาตุอาหาร"}),e.jsx(r.Control,{type:"text",name:"nutrient_ratio",value:i.nutrient_ratio,placeholder:"กรอกสัดส่วนธาตุอาหาร",onChange:_,isInvalid:!!s.nutrient_ratio}),e.jsx(r.Control.Feedback,{type:"invalid",children:s.nutrient_ratio})]})}),e.jsxs(n,{md:6,className:"mb-3",children:[e.jsx(Q,{name:"test_item_id",value:i.test_item_id,onSelect:w,isInvalid:!!s.test_item_id}),s.test_item_id&&e.jsx("div",{className:"invalid-feedback d-block",children:s.test_item_id})]}),e.jsx(n,{md:6,className:"mb-3",children:e.jsxs(r.Group,{controlId:"recommended_tests",children:[e.jsx(r.Label,{children:"รายการทดสอบที่แนะนำ"}),e.jsx(r.Control,{type:"text",name:"recommended_tests",value:i.recommended_tests,placeholder:"กรอกรายการทดสอบที่แนะนำ",readOnly:!0})]})}),e.jsx(n,{md:12,className:"mb-3",children:e.jsxs(r.Group,{controlId:"formula_description",children:[e.jsx(r.Label,{children:"คำอธิบายสูตรปุ๋ย"}),e.jsx(r.Control,{as:"textarea",rows:3,name:"formula_description",value:i.formula_description,placeholder:"กรอกคำอธิบายสูตรปุ๋ย",onChange:_,isInvalid:!!s.formula_description}),e.jsx(r.Control.Feedback,{type:"invalid",children:s.formula_description})]})}),e.jsx(n,{md:6,className:"mb-3",children:e.jsx(r.Group,{controlId:"is_rice_fertilizer",children:e.jsx(r.Check,{inline:!0,type:"checkbox",label:"เหมาะสำหรับปุ๋ยข้าว",name:"is_rice_fertilizer",checked:i.is_rice_fertilizer===1,onChange:_})})})]}),e.jsx(F,{variant:"primary",type:"submit",disabled:j,children:j?"กำลังบันทึก...":"บันทึก"}),e.jsx(F,{variant:"danger",className:"ms-2",onClick:()=>h("/admin/fertilizer-formulas"),disabled:j,children:"กลับ"})]})]})]})})};export{me as default};
