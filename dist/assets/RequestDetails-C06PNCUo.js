import{j as e,o as P,d as W,r as i,R as b,C as r,B as m,S as y}from"./index-BnqE3Rwp.js";import{g as H}from"./serviceRequest-CaLuzo_m.js";import{g as Q,a as K,b as J}from"./testItemsRequest-Bn0RcuIu.js";import{C as p}from"./Card-BpOPiakr.js";import{B as _}from"./Badge-BQ9CHBKT.js";import{D as U}from"./DataGrid-C4D0iE54.js";import"./TextField-B4sAtPJN.js";import"./memoTheme-Dygkbaba.js";import"./Transition-C5v-6V12.js";import"./Divider-D2YwwqKL.js";const V=({data:k,title:v})=>{var g;const h=((g=P().state)==null?void 0:g.id)||null;console.log("id",h);const x=W(),[t,Z]=i.useState(2),[j,ee]=i.useState(!1),[se,te]=i.useState(!1),[S,ae]=i.useState(!1),[z,re]=i.useState(!1),w=[{value:"is_single_fertilizer",label:"เชิงเดี่ยว"},{value:"is_compound_fertilizer",label:"เชิงประกอบ"},{value:"is_mixed_fertilizer",label:"เชิงผสม"},{value:"is_secondary_nutrient_fertilizer",label:"ธาตุอาหารรอง-อาหารเสริม"}];i.useEffect(()=>{h?T(h):x("/user/request/")},[]);const[l,C]=i.useState({}),[f,q]=i.useState([]),T=async s=>{const a=await H(s);console.log("response",a),console.log("sample_submissions",a.sample_submissions),q(a.sample_submissions),C(a)},[d,u]=i.useState(!1),D=()=>{u(!0),L(),setTimeout(()=>{u(!1),alert("ดาวน์โหลดเอกสารสำเร็จ!")},3e3)},[F,R]=i.useState([]),[ie,N]=i.useState([]);i.useEffect(()=>{$(),B(),E()},[]);const $=async()=>{const s=await Q();R(s)},B=async()=>{try{const s=await K();N(s)}catch(s){console.error("Error fetching test items:",s),N([])}},[O,A]=i.useState([]),E=async()=>{try{const s=await J();A(s)}catch(s){console.log(s)}},L=()=>{window.open("/user/request/detial/quotation","_blank")},G=(s,a)=>{const n=Object.keys(s).find(o=>s[o]===1),c=a.find(o=>o.value===n);return c?c.label:null},I=[{field:"no",headerName:"#",width:90,headerAlign:"center",align:"center"},{field:"test_code",headerName:"ทดสอบ",flex:1,renderCell:s=>{if(!s||!s.row)return"-";const{test_code:a,test_percentage:n}=s.row;return`${a||""}${n?` (${n})`:""}`.trim()}},{field:"status",headerName:"สถานะ",headerAlign:"center",align:"center",flex:1,renderCell:s=>e.jsx(_,{pill:!0,style:{},bg:s.row.status==="pending"?"warning":s.row.status==="rejected"?"danger":"success",children:s.row.status==="pending"?"รออนุมัติ":s.row.status==="rejected"?"ไม่อนุมัติ":"อนุมัติ"})},{field:"test_value",headerName:"ผลที่ได้",flex:1,renderCell:s=>{var a;return((a=s==null?void 0:s.row)==null?void 0:a.test_value)||"-"}},{field:"test_date",headerName:"วันที่ทดสอบ",flex:1,valueGetter:s=>{var a;return((a=s==null?void 0:s.row)==null?void 0:a.created_at)||"-"}}],M=s=>{const a=s.map((n,c)=>({id:n.detail_id,no:c+1,...n}));return console.log("setData",a),a};return e.jsx("div",{children:e.jsxs(p,{children:[e.jsx(p.Header,{children:e.jsx("h5",{children:v})}),e.jsxs(p.Body,{children:[e.jsx("div",{className:"container",children:e.jsxs("ul",{className:"form-stepper form-stepper-horizontal text-center mx-auto pl-0",children:[e.jsx("li",{className:`form-stepper-list text-center ${t===1?"form-stepper-active":t>1?"form-stepper-completed":"form-stepper-unfinished"}`,step:"1",children:e.jsxs("a",{className:"mx-2",children:[e.jsx("span",{className:"form-stepper-circle",children:e.jsx("span",{style:{fontSize:24},children:t===1?"1":e.jsx("i",{className:"feather icon-check"})})}),e.jsx("div",{className:"label",children:"การขอรับบริการ"})]})}),e.jsx("li",{className:`form-stepper-list text-center ${t===2?"form-stepper-active":t>2?"form-stepper-completed":"form-stepper-unfinished"}`,step:"2",children:e.jsxs("a",{className:"mx-2",children:[e.jsx("span",{className:"form-stepper-circle",children:e.jsx("span",{style:{fontSize:24},children:t===2||t<2?"2":e.jsx("i",{className:"feather icon-check"})})}),e.jsx("div",{className:"label",children:"ตรวจสอบข้อมูล"})]})}),e.jsx("li",{className:`form-stepper-list text-center ${t===3?"form-stepper-active":t>3||S?"form-stepper-completed":"form-stepper-unfinished"}`,step:"3",children:e.jsxs("a",{className:"mx-2",children:[e.jsx("span",{className:"form-stepper-circle",children:e.jsx("span",{style:{fontSize:24},children:t===3||t<3?"3":e.jsx("i",{className:"feather icon-check"})})}),e.jsx("div",{className:"label",children:"รับตัวอย่างเข้าระบบ"})]})}),e.jsx("li",{className:`form-stepper-list text-center ${t===4?"form-stepper-active":t>4||j?"form-stepper-completed":"form-stepper-unfinished"}`,step:"3",children:e.jsxs("a",{className:"mx-2",children:[e.jsx("span",{className:"form-stepper-circle",children:e.jsx("span",{style:{fontSize:24},children:(t===4||t<4)&&j===!1?"4":e.jsx("i",{className:"feather icon-check"})})}),e.jsx("div",{className:"label",children:"ใบเสนอราคา"})]})}),e.jsx("li",{className:`form-stepper-list text-center ${t===5?"form-stepper-active":t>5?"form-stepper-completed":"form-stepper-unfinished"}`,step:"3",children:e.jsxs("a",{className:"mx-2",children:[e.jsx("span",{className:"form-stepper-circle",children:e.jsx("span",{style:{fontSize:24},children:t===5||t<5?"5":e.jsx("i",{className:"feather icon-check"})})}),e.jsx("div",{className:"label",children:"ชำระค่าบริการ"})]})}),e.jsx("li",{className:`form-stepper-list text-center ${t===6?"form-stepper-active":t>6?"form-stepper-completed":"form-stepper-unfinished"}`,step:"3",children:e.jsxs("a",{className:"mx-2",children:[e.jsx("span",{className:"form-stepper-circle",children:e.jsx("span",{style:{fontSize:24},children:t===6||t<6?"6":e.jsx("i",{className:"feather icon-check"})})}),e.jsx("div",{className:"label",children:"ผลการทดสอบ"})]})})]})}),e.jsxs(b,{children:[l.request_no&&e.jsx(r,{md:12,children:e.jsxs("h5",{className:"mb-4",children:["เลขที่คำขอบริการ : ",e.jsx("span",{style:{fontSize:18},children:k.request_no})]})}),e.jsx(r,{md:12,children:e.jsx("h6",{className:"mb-3",children:"ข้อมูลผู้ขอขึ้นทะเบียน"})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["บริษัท : ",e.jsx("strong",{className:"text-dark",children:l.customer_name})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ประเภทคำขอ :",e.jsx("strong",{className:"text-dark",children:l.is_quality_check_analysis===1?"วิเคราะห์เพื่อตรวจสอบคุณภาพ":"วิเคราะห์ขึ้นทะเบียน"})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["คำขอเพิ่มเติม : ",e.jsx("strong",{className:"text-dark",children:l.sample_type_name})]})}),e.jsx(r,{md:12,className:"mb-0",children:e.jsxs("p",{className:"mb-0",children:["สถานะ :",e.jsx(_,{bg:l.status==="pending"?"warning":l.status==="approved"?"success":"danger",style:{marginLeft:12},children:l.status==="pending"?" รออนุมัติ":l.status==="approved"?"อนุมัติ":" ไม่อนุมัติ"}),e.jsx("span",{style:{marginLeft:12,color:l.status==="pending"?"#ffc107":l.status==="approved"?"#198754":"#f44236",fontWeight:"bold"},children:` ( ${l.notes} )`})]})}),e.jsx("h6",{className:"mt-3 mb-2",children:"ข้อมูลตัวอย่างปุ๋ย"}),f.map((s,a)=>{var n,c;return e.jsxs(r,{md:12,className:"mb-2 p-4 pt-0 pb-0",children:[e.jsxs(b,{children:[e.jsxs("h6",{children:["ตัวอย่างที่ ",a+1," สูตรปุ๋ย : ",e.jsx("strong",{className:"text-dark",children:s.fertilizer_formula||"-"})," ( ชื่อสามัญ : ",e.jsx("strong",{className:"text-dark",children:s.common_name||"-"}),")"]}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ประเภทของปุ๋ย : ",e.jsx("strong",{className:"text-dark",children:G(s,w)})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ลักษณะปุ๋ย :"," ",e.jsx("strong",{className:"text-dark",children:((n=O.find(o=>o.fertilizer_type_id===s.fertilizer_type_id))==null?void 0:n.fertilizer_type_name)||"-"})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["สี : ",e.jsx("strong",{className:"text-dark",children:s.color||"-"})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ภาชนะบรรจุ :"," ",e.jsx("strong",{className:"text-dark",children:((c=F.find(o=>o.packaging_type_id===s.packaging_id))==null?void 0:c.packaging_type_name)||"-"})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ชื่อการค้า : ",e.jsx("strong",{className:"text-dark",children:s.trade_name||"-"})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ผู้ผลิต (บริษัท/ห้าง/ร้าน) : ",e.jsx("strong",{className:"text-dark",children:s.manufacturer||"-"}),"ประเทศ : ",e.jsx("strong",{className:"text-dark",children:s.manufacturer_country||"-"})]})}),e.jsx(r,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["สั่งจาก (บริษัท/ห้าง/ร้าน) : ",e.jsx("strong",{className:"text-dark",children:s.supplier||"-"}),"ประเทศ : ",e.jsx("strong",{className:"text-dark",children:s.supplier_country||"-"})]})}),e.jsxs(r,{md:12,className:"mb-2",children:[e.jsx("h6",{className:"mb-3",children:"ข้อมูลการทดสอบ"}),e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(U,{rows:M(s.sample_submission_details),columns:I,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5,10,20],checkboxSelection:!1,disableRowSelectionOnClick:!0})})]})]}),a<f.length-1&&e.jsx("hr",{className:"mt-4 mb-2"})]},a)}),j&&!z&&e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"ข้อมูลใบเสนอราคา"}),e.jsx(r,{md:12,className:"mb-3",children:e.jsx(m,{variant:"outline-primary",onClick:D,disabled:d,style:{minWidth:"150px"},children:d?e.jsxs(e.Fragment,{children:[e.jsx(y,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),"กำลังดาวน์โหลด..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"feather icon-download"}),"ดาวน์โหลดเอกสาร"]})})})]}),t>=6&&e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"ผลการทดสอบ"}),e.jsx(r,{md:12,className:"mb-3",children:e.jsx(m,{variant:"outline-primary",onClick:()=>{},disabled:d,style:{minWidth:"150px"},children:d?e.jsxs(e.Fragment,{children:[e.jsx(y,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),"กำลังดาวน์โหลด..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"feather icon-download"}),"ดาวน์โหลดทดสอบ"]})})})]})]})]}),e.jsxs(p.Footer,{className:"text-start",children:[e.jsxs(m,{variant:"primary",onClick:()=>x("/user/request/edite",{state:{services:l}}),children:[e.jsx("i",{className:"feather icon-corner-up-left"}),"แก้ไขข้อมูล"]}),e.jsxs(m,{variant:"danger",onClick:()=>x("/user/request/"),children:[e.jsx("i",{className:"feather icon-corner-up-left"}),"กลับหน้าหลัก"]})]})]})})},X={id:1,request_no:"REQ-2025-002",company:"บริษัท เกษตรรุ่งเรือง จำกัด",typeRequest:["วิเคราะห์ขึ้นทะเบียน"],reportMethod:["รับด้วยตัวอย่าง"],email:"",sameAddress:!0,address:"",province:"",district:"",subDistrict:"",postalCode:"",phone:"081-234-5678",sampleDisposal:"ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง",otherRequirements:"",fertilizers:[{fertilizerCategory:["ปุ๋ยอินทรีย์"],fertilizerType:["เม็ด"],color:["ดำ"],container:"ถุงพลาสติก",tradeName:"ปุ๋ยอินทรีย์สูตรเข้มข้น",trademark:"ตราใบไม้",formula:"",manufacturer:"โรงงานปุ๋ยอินทรีย์ไทย",country:"ไทย",tests:["pH","MC","OM"],status:"pending"}]},fe=()=>e.jsx(V,{data:X,title:"รายละเอียดข้อมูลนำส่งตัวอย่างปุ๋ยอินทรีย์"});export{fe as default};
