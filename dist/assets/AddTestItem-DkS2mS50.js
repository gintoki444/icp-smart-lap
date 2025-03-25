import{r as x,j as e,u as we,B as I,R as J,C as w,ay as ve,az as Ce,v as ke,y as ge,l as qe,a as Fe,h as Ae}from"./index-CMKGjvil.js";import{a as De,b as Re}from"./serviceRequest-CJ15hpJs.js";import{g as ze}from"./packageingTypeRequest-CUTcv2jf.js";import{g as He}from"./fertilizerTypesRequest-CzftO6V-.js";import{p as Be,M as Ie,d as Ee,S as Qe}from"./SampleReceivingModal-BmmVNM5Y.js";import{F as R}from"./Form-XAT3KesX.js";import{c as Oe}from"./index-7N6s0NQG.js";import{M as X}from"./Modal-KDP3gSJa.js";import{T as Se}from"./Table-Co_68gz0.js";import{a as Pe,p as Ne,D as Me,P as Le,S as ue,V as g,I as We,T as a,F as Ge}from"./react-pdf.browser-5GpL1MH3.js";import{B as re}from"./Badge-Degbu7BZ.js";import{B as $e,b as ae,D as Ve}from"./DataGrid-BSrFaLwh.js";import{A as Ye,a as Ue,E as Xe,b as Je}from"./ExpandMore-CBhrzDGN.js";import{C as H}from"./Card-ltuRbL1m.js";import{S as ye,b as fe,c as be,e as _e}from"./trackingRequest-nQukaRQe.js";import"./formik.esm-PXS3-tw9.js";import"./firebaseConfig-pMHECxRz.js";import"./FirebaseImage-D-uA0S8P.js";import"./sampleSubmissionsRequest-bNYMIj3U.js";import"./CloseButton-DXA2z1Sn.js";import"./Transition-CvY6YelV.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tslib.es6-RU1n5ZxP.js";import"./TextField-l4tn0KBj.js";import"./DefaultPropsProvider-7CXMMYWk.js";import"./emotion-element-f0de968e.browser.esm-D2ySOhvj.js";import"./toPropertyKey-BZFHAmHd.js";import"./Divider-Rbts8ePN.js";const Ke="https://apiav2-jlp2nagalq-as.a.run.app/api",Ze=async()=>{const s=new Headers;s.append("Content-Type","application/json");const l={method:"GET",headers:s,redirect:"follow"};return await(await fetch(Ke+"/sample-receiving",l)).json()},L="https://apiav2-jlp2nagalq-as.a.run.app/api",et=async s=>{const l=new Headers;l.append("Content-Type","application/json");const i={method:"GET",headers:l,redirect:"follow"};return await(await fetch(L+"/quotations/"+s,i)).json()},tt=async s=>{const l=new Headers;l.append("Content-Type","application/json");const i=JSON.stringify(s),h={method:"POST",headers:l,body:i,redirect:"follow"};try{const o=await fetch(L+"/quotations",h);if(!o.ok){const T=await o.json();throw new Error(T.message||`HTTP Error: ${o.status}`)}return await o.json()}catch(o){throw console.error("Save Quotations data Error:",o),o}},st=async s=>{const l=new Headers;l.append("Content-Type","application/json");const i={method:"DELETE",headers:l,redirect:"follow"};return await(await fetch(L+"/quotations/"+s,i)).json()},nt=async s=>{console.log("data",s);const l=new Headers;l.append("Content-Type","application/json");const i=JSON.stringify(s),h={method:"POST",headers:l,body:i,redirect:"follow"};try{const o=await fetch(L+"/quotation-details",h);if(!o.ok){const T=await o.json();throw new Error(T.message||`HTTP Error: ${o.status}`)}return await o.json()}catch(o){throw console.error("Save QuotationDetails data Error:",o),o}},at=async()=>{const s=new Headers;s.append("Content-Type","application/json");const l={method:"GET",headers:s,redirect:"follow"};return await(await fetch(L+"/quotation-types",l)).json()},rt=async s=>{const l=new Headers;l.append("Content-Type","application/json");const i={method:"GET",headers:l,redirect:"follow"},h=await fetch(L+"/sample-remain-quantity/"+s,i);if(!h.ok){const o=await h.json();throw new Error(o.message||`HTTP Error: ${h.status}`)}return await h.json()},it=({name:s="quotation_type_id",onSelect:l,value:i,disables:h,showText:o,isInvalid:T=!1,errorMessage:r=""})=>{var W;const[m,y]=x.useState([]),q=async()=>{try{await at().then(S=>{y(S)})}catch(S){console.log(S)}};x.useEffect(()=>{q()},[]);const z=S=>{const E=S.target.value;console.log("selectedValue",E),l(E)};return e.jsxs(R.Group,{className:"mb-3",children:[e.jsxs(R.Label,{children:["ประเภทใบเสนอราคา",o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-meta-1",children:" : "}),e.jsx("strong",{children:(W=m.find(S=>S.quotation_type_id===i))==null?void 0:W.quotation_type_name})]}):e.jsx("span",{className:"text-meta-1",children:": "})]}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs(R.Select,{value:i||"",onChange:z,disabled:h,style:{padding:"8px 20px",fontSize:14},isInvalid:T,children:[e.jsx("option",{value:"",disabled:!0,className:"text-body dark:text-bodydark",children:"เลือกประเภทใบส่งซื้อ"}),m.length>0&&m.map((S,E)=>e.jsx("option",{value:S.quotation_type_id,className:"text-body dark:text-bodydark",children:S.quotation_type_name},E))]}),T&&e.jsx(R.Control.Feedback,{type:"invalid",style:{display:"block"},children:r||"กรุณาเลือกประเภทใบส่งซื้อ"})]})]})},ot=({handleBilling:s,testItems:l=[],serviceData:i,createdBy:h,serviceId:o,reloadData:T})=>{we();const[r,m]=x.useState(!1),[y,q]=x.useState([]),[z,W]=x.useState(0),[S,E]=x.useState([]);console.log("testItems:",l);const G=l.map(n=>({id:n.test_item_id,name:n.name_for_quotation,price:parseFloat(n.unit_price),quantity:n.quantity,maxQuantity:n.remain_quantity,summary:parseFloat(n.unit_price)*n.quantity,quotation_type_id:n.quotation_type_id})),[$,Q]=x.useState(G),[P,A]=x.useState("");x.useEffect(()=>{M()},[T]);const M=()=>{o&&K(o),Q(G),q([]),A("")},K=async n=>{const d=await rt(n);console.log("response",d),E(d)},ie=()=>{const n=y.reduce((u,D)=>u+D.price*D.quantity,0),d=n*(z/100),f=n-d,_=f*.07,C=f+_;return{totalAmount:n,discountAmount:d,netTotal:f,vatAmount:_,grandTotal:C}},{totalAmount:Z,discountAmount:v,netTotal:ee,vatAmount:O,grandTotal:te}=ie(),V=n=>{console.log("item:",n),console.log("item:",y);const d=y.find(_=>_.id===n.id);let f;d?f=y.filter(_=>_.id!==n.id):f=[...y,{...n}],console.log("updatedItems:",f),q(f)},oe=(n,d)=>{const f=parseInt(d)||0,_=$.map(u=>u.id===n?{...u,quantity:Math.max(1,Math.min(u.maxQuantity,f)),summary:u.price*Math.max(1,Math.min(u.maxQuantity,f))}:u);Q(_);const C=y.map(u=>u.id===n?{...u,quantity:Math.max(1,Math.min(u.maxQuantity,f)),summary:u.price*Math.max(1,Math.min(u.maxQuantity,f))}:u);q(C)},le=(n,d)=>{const f=parseFloat(d)||0,_=$.map(u=>u.id===n?{...u,price:f,summary:f*u.quantity}:u);Q(_);const C=y.map(u=>u.id===n?{...u,price:f,summary:f*u.quantity}:u);q(C)},ce=n=>{const d=parseFloat(n)||0;W(Math.max(0,Math.min(100,d)))},de=async()=>{if(y.length===0){alert("กรุณาเลือกอย่างน้อย 1 รายการเพื่อสร้างใบเสนอราคา");return}if(!P){alert("กรุณาเลือกประเภทใบเสนอราคา");return}let n=[];const d=new Date;d.setDate(d.getDate()+30);const f={customer_id:i.customer_id,request_id:i.request_id,valid_until:d.toISOString().split("T")[0],total_amount:parseFloat(Z.toFixed(2)),discount_percentage:parseFloat(z.toFixed(2)),discount_amount:parseFloat(v.toFixed(2)),net_total:parseFloat(ee.toFixed(2)),vat_amount:parseFloat(O.toFixed(2)),grand_total:parseFloat(te.toFixed(2)),payment_terms:"30 วัน",status:"pending",created_by:h,quotation_type_id:P,approved_by:null};i.sample_submissions.map(_=>{const C={submission_id:_.submission_id,status:"pending_test",notes:"รอทดสอบบางรายการ"};y.length!==S.length?n.push({...C,id:n.length+1}):(C.status="quotation_issued",C.notes="ออกใบเสนอราคา",n.push({...C,id:n.length+1}))});try{await Be(n);const _=await tt(f);if(_&&_.quotation_id){const u={quotation_id:_.quotation_id,test_items_for_quotation:y.map(D=>{const Y=D.price*D.quantity,se=Y*(z/100)/y.length,he=Y-se;return{test_item_id:D.id,quantity:D.quantity,unit_price:parseFloat(D.price.toFixed(2)),subtotal_price:parseFloat(Y.toFixed(2)),discount_amount:parseFloat(se.toFixed(2)),total_price:parseFloat(he.toFixed(2))}})};console.log("Quotation Details Data:",u),await nt(u),m(!1),s(!0)}else throw new Error("Failed to get quotation ID")}catch(_){console.error("Error generating quotation:",_),alert("เกิดข้อผิดพลาดในการสร้างใบเสนอราคา กรุณาลองใหม่")}};return e.jsxs(e.Fragment,{children:[e.jsxs(I,{variant:"success",onClick:()=>m(!0),children:[e.jsx(Oe,{className:"me-2",style:{fontSize:16}})," ออกใบเสนอราคา"]}),e.jsxs(X,{show:r,className:"modal-lg",onHide:()=>{m(!1),M()},centered:!0,children:[e.jsx(X.Header,{closeButton:!0,children:e.jsx(X.Title,{children:e.jsx("h5",{children:"สร้างใบเสนอราคา"})})}),e.jsxs(X.Body,{style:{overflowX:"auto"},children:[e.jsx(J,{children:e.jsx(w,{item:!0,className:"ps-3 pe-3",children:e.jsx(it,{name:"quotation_type_id",value:P,onSelect:n=>A(n)})})}),e.jsxs(Se,{striped:!0,bordered:!0,hover:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{width:80,className:"text-center",children:"เลือก"}),e.jsx("th",{children:"ชื่อตัวอย่าง"}),e.jsx("th",{width:100,children:"จำนวน"}),e.jsx("th",{width:120,children:"ราคาต่อหน่วย"}),e.jsx("th",{width:120,className:"text-end",children:"รวม"})]})}),e.jsxs("tbody",{children:[$.map(n=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",onChange:()=>V(n),children:e.jsx(R.Check,{type:"checkbox",checked:y.some(d=>d.id===n.id),disabled:!S.find(d=>d.test_item_id===n.id)})}),e.jsx("td",{style:{whiteSpace:"normal",wordWrap:"break-word",maxHeight:"100px",overflowY:"auto"},children:n.name}),e.jsx("td",{children:e.jsx(R.Control,{type:"number",value:n.quantity,min:1,max:n.maxQuantity,onChange:d=>oe(n.id,d.target.value),disabled:!S.find(d=>d.test_item_id===n.id),style:{width:"80px"}})}),e.jsx("td",{children:e.jsx(R.Control,{type:"number",value:n.price,step:"1",onChange:d=>le(n.id,d.target.value),disabled:!S.find(d=>d.test_item_id===n.id),style:{width:"100px"}})}),e.jsx("td",{className:"text-end",children:n.summary.toFixed(2)})]},n.id)),P==="3"&&e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"text-end",children:"ส่วนลด (%)"}),e.jsx("td",{children:e.jsx(R.Group,{children:e.jsx(R.Control,{type:"number",value:z,min:0,max:100,step:"0.01",onChange:n=>ce(n.target.value),style:{width:"100px"}})})})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"text-end",children:e.jsx("p",{className:"mb-0 text-dark",children:"รวมทั้งหมด:"})}),e.jsx("td",{children:e.jsxs("p",{className:"mb-0 text-dark",children:[Z.toFixed(2)," บาท"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"text-end",children:e.jsxs("p",{className:"mb-0 text-dark",children:["ส่วนลด (",z,"%):"]})}),e.jsx("td",{children:e.jsxs("p",{className:"mb-0 text-dark",children:[v.toFixed(2)," บาท"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"text-end",children:e.jsx("p",{className:"mb-0 text-dark",children:"ราคาสุทธิ :"})}),e.jsx("td",{children:e.jsxs("p",{className:"mb-0 text-dark",children:[ee.toFixed(2)," บาท"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"text-end",children:e.jsx("p",{className:"mb-2 text-dark",children:"VAT 7%:"})}),e.jsx("td",{children:e.jsxs("p",{className:"mb-2 text-dark",children:[O.toFixed(2)," บาท"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"text-end",children:e.jsx("h6",{children:"ยอดรวมทั้งสิ้น :"})}),e.jsx("td",{children:e.jsxs("h6",{children:[te.toFixed(2)," บาท"]})})]})]})]})]}),e.jsxs(X.Footer,{children:[e.jsx(I,{variant:"success",onClick:de,disabled:S.length===0,children:"สร้างใบเสนอราคา"}),e.jsx(I,{variant:"danger",onClick:()=>{m(!1),M()},children:"ยกเลิก"})]})]})]})};Ge.register({family:"THSarabunNew",fonts:[{src:"/assets/fonts/THSarabunNew.ttf"},{src:"/assets/fonts/THSarabunNew-Bold.ttf",fontWeight:"bold"}]});const xe=({quotation:s})=>e.jsx(Me,{children:e.jsxs(Le,{size:"A4",style:b.page,children:[e.jsx(ht,{quotation:s}),e.jsx(ut,{quotation:s}),e.jsx(xt,{quotation:s})]})}),B=s=>parseFloat(s).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),lt=async s=>{var T;const l=((T=s.customer_info[0])==null?void 0:T.email)||"ginjung01@gmail.com",i=`ใบเสนอราคา ${s.quotation_no}`,h="นี่คือใบเสนอราคาที่ท่านร้องขอ",o="Chanu";try{const r=await Ne(e.jsx(xe,{quotation:s})).toBlob(),m=new FormData;m.append("toEmail",l),m.append("subject",i),m.append("message",h),m.append("username",o),m.append("file",r,`${s.quotation_no}.pdf`);const q=await(await fetch("https://apiav2-3mp52qu73a-as.a.run.app/api/send-mail-file",{method:"POST",body:m})).json();console.log(q.message)}catch(r){console.error("❌ Failed to send email",r)}},ct=async s=>{const l=await Ne(e.jsx(xe,{quotation:s})).toBlob(),i=URL.createObjectURL(l);window.open(i)},dt=({quotationData:s,onChange:l})=>{const[i,h]=x.useState([]),o=async r=>{try{const m=await et(r);return console.log(`getQuotationsByID(${r}):`,m),m}catch(m){return console.error(`Error fetching quotation ${r}:`,m),null}};x.useEffect(()=>{(async()=>{if(s&&s.length>0){const m=await Promise.all(s.map(async y=>{const q=await o(y.quotation_id);return{...y,...q||{}}}));h(m.filter(y=>y!==null))}else h([])})()},[s]);const T=async r=>{if(window.confirm("คุณต้องการลบข้อมูลใบเสนอราคา หรือไม่?"))try{await Ee(),await st(r).then(()=>{ge.success("ลบข้อมูลใบเสนอราคาสำเร็จ!",{autoClose:3e3}),l(!0)})}catch{ge.error("ลบข้อมูลใบเสนอราคาไม่สำเร็จ!",{autoClose:3e3})}};return e.jsx(J,{className:"mb-2 p-2 pt-0 pb-0",children:e.jsxs(w,{children:[e.jsx("h6",{children:"ข้อมูลใบเสนอราคา"}),e.jsxs(Se,{striped:!0,bordered:!0,hover:!0,className:"mt-2",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{width:80,children:"#"}),e.jsx("th",{style:{flex:1.3},children:"เลขที่ใบเสนอราคา"}),e.jsx("th",{className:"text-center",style:{flex:1},children:"ประเภท"}),e.jsx("th",{style:{flex:1},children:"วันที่สร้าง"}),e.jsx("th",{style:{flex:1},className:"text-end",children:"จำนวนเงิน"}),e.jsx("th",{className:"text-center",style:{flex:1},children:"สถานะ"}),e.jsx("th",{style:{flex:1},children:"ผู้อนุมัติ"}),e.jsx("th",{className:"text-center",style:{flex:1},children:"Action"})]})}),e.jsx("tbody",{children:i.map((r,m)=>e.jsxs("tr",{children:[e.jsx("td",{children:m+1}),e.jsx("td",{children:r.quotation_no}),e.jsx("td",{className:"text-center",children:r.quotation_type_name||"-"}),e.jsx("td",{children:new Date(r.quotation_date).toLocaleDateString("th-TH")}),e.jsx("td",{className:"text-end",children:B(r.grand_total)}),e.jsx("td",{className:"text-center",children:e.jsx(re,{pill:!0,style:{},bg:r.status==="pending"?"warning":r.status==="rejected"?"danger":"success",children:r.status==="pending"?"รอชำระเงิน":r.status==="rejected"?"ยกเลิก":"ชำระเงินสำเร็จ"})}),e.jsx("td",{children:r.approved_by||"-"}),e.jsx("td",{className:"text-center",style:{flex:1},children:e.jsxs($e,{children:[e.jsx(ae,{title:"Pre-view",placement:"bottom",arrow:!0,children:e.jsx(I,{variant:"info",size:"sm",onClick:()=>ct(r),children:e.jsx(ve,{style:{fontSize:16}})})}),e.jsx(Pe,{document:e.jsx(xe,{quotation:r}),fileName:`${r.quotation_no}.pdf`,children:e.jsx(ae,{title:"ดาวน์โหลด PDF",placement:"bottom",arrow:!0,children:e.jsx(I,{variant:"primary",style:{borderRadius:0,padding:"12px",display:"flex",alignItems:"center"},children:e.jsx(Ie,{style:{fontSize:16}})})})}),e.jsx(ae,{title:"ส่งอีเมล์",placement:"bottom",arrow:!0,children:e.jsx(I,{variant:"info",size:"sm",onClick:()=>lt(r),children:e.jsx(Ce,{style:{fontSize:16}})})}),e.jsx(ae,{title:"ลบใบเสนอราคา",placement:"bottom",arrow:!0,children:e.jsx(I,{variant:"danger",size:"sm",onClick:()=>T(r.quotation_id),children:e.jsx(ke,{style:{fontSize:16}})})})]})})]},r.id))})]})]})})},ht=({quotation:s})=>e.jsxs(g,{children:[e.jsxs(g,{style:b.headerContainer,children:[e.jsx(g,{style:{maxWidth:50},children:e.jsx(We,{src:qe,style:b.logo})}),e.jsxs(g,{children:[e.jsx(a,{style:[b.companyInfo,b.boldText,{fontSize:14}],children:"ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด"}),e.jsx(a,{style:b.companyInfo,children:"307 หมู่ 7 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230"}),e.jsx(a,{style:b.companyInfo,children:"โทรศัพท์: 038-352170-3 ต่อ 401, 090-9606091"})]}),e.jsxs(g,{style:b.quotationBox,children:[e.jsx(a,{style:[b.quotationTitle,b.boldText],children:"ใบเสนอราคา /"}),e.jsx(a,{style:[b.quotationTitle,b.boldText],children:"QUOTATION"})]})]}),e.jsx(g,{style:b.sectionDivider}),s.customer_info&&s.customer_info.length>0&&e.jsxs(g,{style:b.infoRow,children:[e.jsxs(g,{children:[e.jsxs(a,{children:[e.jsx(a,{style:b.boldText,children:"เรียน : "}),e.jsx(a,{style:b.normalText,children:s.customer_info[0].company_name})]}),e.jsxs(a,{children:[e.jsx(a,{style:b.boldText,children:"ที่อยู่ : "}),e.jsx(a,{style:b.normalText,children:s.customer_info[0].company_address})]})]}),e.jsxs(g,{children:[e.jsxs(a,{children:[e.jsx(a,{style:b.boldText,children:"วันที่ : "}),new Date(s.quotation_date).toLocaleDateString("th-TH")]}),e.jsxs(a,{children:[e.jsx(a,{style:b.boldText,children:"เลขที่ใบเสนอราคา : "}),s.quotation_no]}),(s==null?void 0:s.quotation_type_id)&&(s==null?void 0:s.quotation_type_id)!==1&&e.jsxs(a,{children:[e.jsx(a,{style:b.boldText,children:"กำหนดวันชำระเงิน : "}),(s==null?void 0:s.quotation_type_id)===2?"7 วันหลังส่งผล":"30 วันหลังส่งผล"]})]})]})]}),ut=({quotation:s})=>{const i=s.quotation_details?[...s.quotation_details.map((h,o)=>[(o+1).toString(),h.name_for_quotation,B(h.unit_price),h.quantity.toString(),B(h.subtotal_price)]),...Array.from({length:15-s.quotation_details.length},()=>["","","","",""])].slice(0,15):Array(15).fill(["","","","",""]);return e.jsxs(g,{children:[e.jsx(a,{style:{fontSize:14,marginTop:0},children:"ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด มีความยินดีในการเสนอราคา เพื่อการพิจารณาของท่าน ดังรายการต่อไปนี้:"}),e.jsxs(g,{style:[j.table,{marginTop:0}],children:[e.jsxs(g,{style:[j.tableRow,j.tableHeader],children:[e.jsx(a,{style:[j.tableCell,{flex:.6,borderRight:2,paddingTop:10}],children:"ลำดับที่"}),e.jsx(a,{style:[j.tableCell,{flex:4,borderRight:2}],children:"รายการทดสอบ"}),e.jsx(a,{style:[j.tableCell,{flex:1,borderRight:2}],children:"ราคาต่ออย่าง (บาท)"}),e.jsx(a,{style:[j.tableCell,{flex:.9,borderRight:2}],children:"จำนวนตัวอย่าง"}),e.jsx(a,{style:[j.tableCell,{flex:1}],children:"ราคารวม (บาท)"})]}),i.map((h,o)=>e.jsx(g,{style:[j.tableRow],children:h.map((T,r)=>{var m;return e.jsx(a,{style:[j.tableCell,{flex:(m=mt[r])==null?void 0:m.width,borderRight:r!==4?2:0,borderBottom:o!==14?1:0},r===1?{textAlign:"left"}:r===2||r===4?j.textRight:{}],children:T},r)})},o)),e.jsxs(g,{style:[j.tableRow,{borderTop:2}],children:[e.jsx(a,{style:[j.tableCell,{flex:7,textAlign:"left"}],children:"ค่าบริการวิเคราะห์ทดสอบ"}),e.jsxs(a,{style:[j.tableCell,{flex:1,textAlign:"right",borderLeft:2}],children:[B(s.total_amount)," บาท"]})]}),s.discount_percentage!=="0.00"&&e.jsxs(g,{style:[j.tableRow,{borderTop:1}],children:[e.jsxs(a,{style:[j.tableCell,{flex:7,textAlign:"left"}],children:["ส่วนลด",e.jsxs(a,{style:{padding:20,borderBottom:2,fontSize:14,fontWeight:"bold"},children:[" ",s.discount_percentage," "]}),"%"]}),e.jsxs(a,{style:[j.tableCell,{flex:1,textAlign:"right",borderLeft:2}],children:[B(s.discount_amount)," บาท"]})]}),e.jsxs(g,{style:[j.tableRow,{borderTop:1}],children:[e.jsx(a,{style:[j.tableCell,{flex:7,textAlign:"left"}],children:"ภาษีมูลค่าเพิ่ม (Vat) 7%"}),e.jsxs(a,{style:[j.tableCell,{flex:1,textAlign:"right",borderLeft:2}],children:[B(s.vat_amount)," บาท"]})]}),e.jsxs(g,{style:[j.tableRow,{borderTop:1}],children:[e.jsx(a,{style:[j.tableCell,{flex:7,textAlign:"left"}],children:"จำนวนเงินรวมทั้งสิ้น"}),e.jsxs(a,{style:[j.tableCell,{flex:1,textAlign:"right",borderLeft:2}],children:[B(s.net_total),"บาท"]})]}),e.jsxs(g,{style:[j.tableRow,{borderTop:1,backgroundColor:"#ababab"}],children:[e.jsx(a,{style:[j.tableCell,{flex:7,textAlign:"left"}],children:"จำนวนเงินรวมทั้งสิ้น"}),e.jsxs(a,{style:[j.tableCell,{flex:1,textAlign:"right",borderLeft:2}],children:[B(s.grand_total)," บาท"]})]})]})]})},xt=({quotation:s})=>e.jsxs(g,{style:N.footerContainer,children:[e.jsx(a,{style:[N.paymentTitle,b.boldText],children:"เงื่อนไขการชำระเงิน :"}),e.jsxs(g,{style:{flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(a,{style:N.paymentText,children:"1. โอนเงินผ่านบัญชีธนาคาร บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด"}),e.jsx(a,{style:N.taxNumber,children:"(เลขประจำตัวผู้เสียภาษี: 0205547009421)"})]}),e.jsx(a,{style:N.paymentText,children:"2. จัดส่งหลักฐานการโอนเงิน และหนังสือรับรองหักภาษี ณ ที่จ่ายมายัง somluk.meesakun@icpinter.com"}),e.jsx(g,{style:{marginTop:10},children:e.jsxs(g,{style:[N.table,{margin:"auto"}],children:[e.jsxs(g,{style:N.tableRow,children:[e.jsx(a,{style:N.tableHeader,children:"ธนาคาร"}),e.jsx(a,{style:N.tableHeader,children:"สาขา"}),e.jsx(a,{style:N.tableHeader,children:"ประเภทบัญชี"}),e.jsx(a,{style:N.tableHeader,children:"เลขที่บัญชี"})]}),[["ไทยพาณิชย์","ชลบุรี","กระแสรายวัน","001-3-50193-0"],["กสิกรไทย","พัฒนาพงษ์","กระแสรายวัน","018-1-14367-3"],["ทหารไทย","สุรวงศ์","กระแสรายวัน","078-1-18116-9"]].map((l,i)=>e.jsx(g,{style:N.tableRow,children:l.map((h,o)=>e.jsx(a,{style:N.tableCell,children:h},o))},i))]})}),e.jsxs(g,{style:[N.signatureContainer,{marginTop:5}],children:[e.jsx(a,{style:{fontSize:14},children:"ขอแสดงความนับถือ"}),e.jsx(g,{style:N.signatureLine}),e.jsx(a,{style:N.signatureText,children:"( ผู้จัดการห้องปฏิบัติการ )"}),e.jsx(a,{style:N.signatureText,children:"ผู้เสนอราคา"})]})]}),b=ue.create({page:{padding:10,paddingHorizontal:40,fontFamily:"THSarabunNew"},boldText:{fontFamily:"THSarabunNew",fontWeight:"bold"},normalText:{fontFamily:"THSarabunNew"},headerContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},logo:{width:80,height:80},companyInfo:{fontSize:12},quotationBox:{borderWidth:2,borderColor:"#000",borderRadius:10,padding:8,textAlign:"center",width:160,fontSize:14},quotationTitle:{fontSize:18},sectionDivider:{borderBottomWidth:2,borderBottomColor:"#000",marginVertical:2},infoRow:{flexDirection:"row",justifyContent:"space-between",fontSize:14,marginTop:5}}),j=ue.create({table:{display:"table",width:"100%",borderCollapse:"collapse",borderWidth:2,marginVertical:10},tableRow:{flexDirection:"row"},tableCell:{flex:1,fontSize:12,paddingTop:2,paddingHorizontal:4,textAlign:"center",borderColor:"#000",minHeight:18},tableHeader:{backgroundColor:"#f3f3f3",fontWeight:"bold",borderBottomWidth:2,textAlign:"center"},textRight:{textAlign:"right"},summaryRow:{flexDirection:"row",marginTop:5},summaryLabel:{flex:3,fontSize:14,padding:5},summaryValue:{flex:1,textAlign:"right",fontSize:14,padding:5}}),N=ue.create({footerContainer:{position:"absolute",bottom:15,left:40,right:40},paymentTitle:{fontSize:14},paymentText:{fontSize:14,marginBottom:2},taxNumber:{fontSize:14,textAlign:"right"},table:{display:"table",width:"80%",borderWidth:2,marginVertical:10},tableRow:{flexDirection:"row"},tableHeader:{fontSize:14,fontWeight:"bold",borderColor:"#000",paddingTop:2,paddingHorizontal:4,textAlign:"center",flex:1,minHeight:18},tableCell:{fontSize:12,borderTopWidth:1,borderColor:"#000",paddingHorizontal:4,textAlign:"center",flex:1,minHeight:18},signatureContainer:{marginTop:5,marginLeft:"auto",marginRight:"10%",textAlign:"center",width:"30%"},signatureLine:{borderBottomWidth:2,width:"100%",alignSelf:"center",marginBottom:5,marginTop:20},signatureText:{fontSize:12,textAlign:"center"}}),mt=[{width:.6},{width:4},{width:1},{width:.9},{width:1}],pt=({title:s})=>{var pe;const i=((pe=Fe().state)==null?void 0:pe.id)||null,h=we(),[o,T]=x.useState(2),[r,m]=x.useState(!1),[y,q]=x.useState(!1),[z,W]=x.useState(!1),[S,E]=x.useState(!1),[G,$]=x.useState([]),[Q,P]=x.useState(!1),[A,M]=x.useState("horizontal"),[K,ie]=x.useState(0);x.useEffect(()=>{const t=localStorage.getItem("authToken");t&&Ae(t).then(c=>{$(c.user)})},[]);const Z=[{value:"is_single_fertilizer",label:"เชิงเดี่ยว"},{value:"is_compound_fertilizer",label:"เชิงประกอบ"},{value:"is_mixed_fertilizer",label:"เชิงผสม"},{value:"is_secondary_nutrient_fertilizer",label:"ธาตุอาหารรอง-อาหารเสริม"}];x.useEffect(()=>{i?le(i):h("/admin/sample-receiving/")},[i,Q]);const[v,ee]=x.useState({}),[O,te]=x.useState([]),[V,oe]=x.useState([]),le=async t=>{const c=await De(t),p=await Re(t);if(te(c.sample_submissions),ee(c),p&&p.request_status_tracking.length>0){const F=p.request_status_tracking[0],je=ne.map(Te=>F[Te.status]==="yes").lastIndexOf(!0);ie(je>=0?je+1:0),oe(p)}},[ce,de]=x.useState([]),[n,d]=x.useState([]);x.useEffect(()=>{f(),_(),D()},[]);const f=async()=>{const t=await ze();de(t)},_=async()=>{try{const t=await Ze();d(t)}catch(t){console.error("Error fetching test items:",t),d([])}},[C,u]=x.useState([]),D=async()=>{try{const t=await He();u(t)}catch(t){console.log(t)}},Y=(t,c)=>{const p=Object.keys(t).find(k=>t[k]===1),F=c.find(k=>k.value===p);return F?F.label:null},se=[{field:"no",headerName:"#",width:90,headerAlign:"center",align:"center"},{field:"test_code",headerName:"ทดสอบ",flex:1,renderCell:t=>{if(!t||!t.row)return"-";const{test_code:c,test_percentage:p}=t.row;return`${c||""}${p?` (${p})`:""}`.trim()}},{field:"status",headerName:"สถานะ",headerAlign:"center",align:"center",flex:1,renderCell:t=>e.jsx(re,{pill:!0,style:{},bg:t.row.status==="pending"?"warning":t.row.status==="rejected"?"danger":"success",children:t.row.status==="pending"?"รออนุมัติ":t.row.status==="rejected"?"ไม่อนุมัติ":"อนุมัติ"})},{field:"test_value",headerName:"ผลที่ได้",flex:1,renderCell:t=>{var c;return((c=t==null?void 0:t.row)==null?void 0:c.test_value)||"-"}},{field:"test_date",headerName:"วันที่ทดสอบ",flex:1,valueGetter:t=>{var c;return((c=t==null?void 0:t.row)==null?void 0:c.created_at)||"-"}}],he=t=>{const c=t.map((p,F)=>({id:p.detail_id,no:F+1,...p}));return console.log("setData",c),c};x.useEffect(()=>{const t=()=>{window.innerWidth<=768?M("vertical"):M("horizontal")};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const U=t=>{t&&(console.log("handleReload :",t),P(c=>!c))},ne=[{label:"การขอรับบริการ",status:"requested"},{label:"ลูกค้าส่งตัวอย่าง",status:"sample_sent"},{label:"ทบทวนคำขอ",status:"request_reviewed"},{label:"ตัวอย่างจัดส่งถึงแล็บ",status:"sample_arrived_lab"},{label:"รับตัวอย่างเข้าระบบ",status:"sample_received"},{label:"รอทดสอบบางรายการ",status:"partial_testing"},{label:"ออกใบเสนอราคา",status:"quotation_issued"},{label:"ขอใบแจ้งหนี้",status:"invoice_requested"},{label:"รับชำระเงิน",status:"payment_received"},{label:"หัก ณ ที่จ่าย",status:"tax_withheld"},{label:"ออกใบเสร็จรับเงิน/ใบกำกับภาษี",status:"receipt_issued"}],me=(t,c,p)=>{const F=c.length;switch(ne[t].status,t){case 0:return p.requested!==null;case 1:return F===0?!1:p.sample_sent!==null;case 2:return p.request_reviewed!==null;case 3:return p.sample_arrived_lab!==null;case 4:return p.sample_received!==null;case 5:return p.partial_testing!==null;case 6:return p.quotation_issued!==null;case 7:return p.invoice_requested!==null;case 8:return p.payment_received!==null;case 9:return p.tax_withheld!==null;case 10:return p.receipt_issued!==null;default:return!1}};return e.jsx("div",{children:e.jsxs(H,{children:[e.jsx(H.Header,{children:e.jsx("h5",{children:s})}),e.jsxs(H.Body,{children:[A==="vertical"?e.jsx(ye,{activeStep:K,orientation:A,alternativeLabel:A==="horizontal",sx:{width:"100%",margin:"0 auto",padding:"20px 0"},children:ne.map((t,c)=>e.jsxs(fe,{completed:me(c,O,v.service_status_logs||{}),children:[e.jsx(be,{children:t.label}),A==="vertical"&&e.jsx(_e,{children:e.jsx(ServiceStepContent,{serviceId:i,handleReload:U})})]},c))}):e.jsx(e.Fragment,{children:e.jsx(H,{style:{borderRadius:10,marginBottom:10},children:e.jsx(H.Body,{style:{padding:"8px 20px 3px"},children:e.jsx(ye,{activeStep:K,orientation:A,alternativeLabel:A==="horizontal",sx:{width:"100%",margin:"0 auto",padding:"20px 0"},children:ne.map((t,c)=>e.jsxs(fe,{completed:me(c,O,v.service_status_logs||{}),children:[e.jsx(be,{children:t.label}),A==="vertical"&&e.jsx(_e,{children:e.jsx(ServiceStepContent,{serviceId:i,handleReload:U})})]},c))})})})}),e.jsx(H,{style:{borderRadius:10,marginBottom:0},children:e.jsx(H.Body,{style:{paddingBottom:20,paddingTop:20},children:e.jsxs(J,{children:[v.request_no&&e.jsx(w,{md:12,children:e.jsxs("h5",{className:"mb-4",children:["เลขที่คำขอบริการ : ",e.jsx("span",{style:{fontSize:18},children:v.request_no||""})]})}),e.jsx(w,{md:12,children:e.jsx("h6",{className:"mb-3",children:"ข้อมูลผู้ขอขึ้นทะเบียน"})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["บริษัท : ",e.jsx("strong",{className:"text-dark",children:v.customer_name})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ประเภทคำขอ :",e.jsx("strong",{className:"text-dark",children:v.is_quality_check_analysis===1?"วิเคราะห์เพื่อตรวจสอบคุณภาพ":"วิเคราะห์ขึ้นทะเบียน"})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["คำขอเพิ่มเติม : ",e.jsx("strong",{className:"text-dark",children:v.notes})]})}),e.jsx("h6",{className:"mt-3 mb-2",children:"ข้อมูลตัวอย่างปุ๋ย"}),O.map((t,c)=>{var p,F;return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsxs(w,{md:12,className:"ms-2 ps-0 pe-0",style:{border:"1px solid #f8f9fa"},children:[e.jsxs(Ye,{sx:{boxShadow:"none"},children:[e.jsx(Ue,{expandIcon:e.jsx(Xe,{}),"aria-controls":`panel${c}-content`,id:`panel${c}-header`,sx:{backgroundColor:"#f8f9fa",borderRadius:0},children:e.jsxs("p",{className:"mb-0",children:["ตัวอย่างที่ ",c+1," ",t.submission_no&&e.jsxs(e.Fragment,{children:["เลขที่ :"," ",e.jsx("strong",{className:"text-dark",style:{fontWeight:"bold"},children:t.submission_no||"-"})," "]}),"สูตรปุ๋ย : ",e.jsx("strong",{className:"text-dark",children:t.fertilizer_formula||"-"})," ( ชื่อสามัญ :"," ",e.jsx("strong",{className:"text-dark",style:{fontWeight:"bold"},children:t.common_name||"-"}),") สถานะ :",e.jsx(re,{pill:!0,bg:t.verification_status==="No"&&t.is_job_accepted||t.verification_status==="No"&&!t.is_job_accepted||t.verification_status==="Yes"&&!t.is_job_accepted?"warning":t.verification_status==="Yes"&&t.is_job_accepted?"success":"danger",style:{marginLeft:12},children:t.verification_status==="No"&&t.is_job_accepted||t.verification_status==="No"&&!t.is_job_accepted||t.verification_status==="Yes"&&!t.is_job_accepted?"รอการตรวจสอบ":t.verification_status==="Yes"&&t.is_job_accepted?"รับงาน":" ไม่อนุมัติ"})]})}),e.jsx(Je,{children:e.jsxs(J,{children:[e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ประเภทของปุ๋ย :"," ",e.jsx("strong",{className:"text-dark",children:Y(t,Z)})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ลักษณะปุ๋ย :"," ",e.jsx("strong",{className:"text-dark",children:((p=C.find(k=>k.fertilizer_type_id===t.fertilizer_type_id))==null?void 0:p.fertilizer_type_name)||"-"})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["สี : ",e.jsx("strong",{className:"text-dark",children:t.color||"-"})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ภาชนะบรรจุ :"," ",e.jsx("strong",{className:"text-dark",children:((F=ce.find(k=>k.packaging_type_id===t.packaging_id))==null?void 0:F.packaging_type_name)||"-"})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ชื่อการค้า : ",e.jsx("strong",{className:"text-dark",children:t.trade_name||"-"})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["ผู้ผลิต (บริษัท/ห้าง/ร้าน) : ",e.jsx("strong",{className:"text-dark",children:t.manufacturer||"-"})," ประเทศ :"," ",e.jsx("strong",{className:"text-dark",children:t.manufacturer_country||"-"})]})}),e.jsx(w,{md:6,className:"mb-2",children:e.jsxs("p",{className:"mb-0",children:["สั่งจาก (บริษัท/ห้าง/ร้าน) : ",e.jsx("strong",{className:"text-dark",children:t.supplier||"-"})," ประเทศ :"," ",e.jsx("strong",{className:"text-dark",children:t.supplier_country||"-"})]})}),e.jsx(w,{md:6,className:"mb-0",children:e.jsxs("p",{className:"mb-0",children:["สถานะ :",e.jsx(re,{pill:!0,bg:t.verification_status==="No"&&t.is_job_accepted||t.verification_status==="No"&&!t.is_job_accepted||t.verification_status==="Yes"&&!t.is_job_accepted?"warning":t.verification_status==="Yes"&&t.is_job_accepted?"success":"danger",style:{marginLeft:12},children:t.verification_status==="No"&&t.is_job_accepted||t.verification_status==="No"&&!t.is_job_accepted||t.verification_status==="Yes"&&!t.is_job_accepted?"รอการตรวจสอบ":t.verification_status==="Yes"&&t.is_job_accepted?"รับงาน":" ไม่อนุมัติ"})]})}),e.jsxs(w,{md:12,className:"mb-2",children:[e.jsx("h6",{className:"mb-3",children:"รายการทดสอบ"}),e.jsx("div",{style:{width:"100%"},children:e.jsx(Ve,{rows:he(t.sample_submission_details),columns:se,pageSize:5,rowsPerPageOptions:[5,10,20],pagination:!0,disableSelectionOnClick:!0,hideFooterSelectedRowCount:!0})})]})]})})]}),e.jsx(w,{style:{padding:"0 16px 8px"},children:e.jsx(Qe,{submissionId:t.submission_id,handleTracking:U,trackingData:t.sample_tracking,reviewBy:G.user_id,sampleNo:t.submission_no,reloadData:Q,sampleStatus:V.sample_submissions.find(k=>k.submission_id===t.submission_id)})}),v.quotation_data&&v.quotation_data.length>0&&e.jsx(w,{style:{padding:"8px 8px 8px"},children:e.jsx(dt,{quotationData:v.quotation_data,onChange:U,sampleStatus:V.sample_submissions.find(k=>k.submission_id===t.submission_id)})})]})},`Accordion-${c}`),c<O.length-1&&e.jsx("hr",{className:"mt-4 mb-2"})]})})]})})})]}),e.jsxs(H.Footer,{className:"text-start",children:[v.request_no&&e.jsx(ot,{serviceId:i,handleBilling:U,testItems:v.test_items_for_quotation,serviceData:v,serviceStatus:V,createdBy:G.user_id,reloadData:Q}),e.jsxs(I,{variant:"danger",onClick:()=>h("/admin/request/"),children:[e.jsx("i",{className:"feather icon-corner-up-left"}),"กลับหน้าหลัก"]})]})]})})},Wt=()=>e.jsx(pt,{title:"ข้อมูลการรับตัวอย่างปุ๋ย"});export{Wt as default};
