const a="https://apiav2-jlp2nagalq-as.a.run.app/api",i=async()=>{const t=new Headers;t.append("Content-Type","application/json");const e={method:"GET",headers:t,redirect:"follow"};return await(await fetch(a+"/service-requests",e)).json()},p=async t=>{const e=new Headers;e.append("Content-Type","application/json");const r={method:"GET",headers:e,redirect:"follow"};try{const s=await fetch(a+"/service-requests/user/"+t,r);if(!s.ok){if(s.status===404)return{success:!1,message:"ไม่พบคำขอรับบริการสำหรับผู้ใช้นี้",data:[]};throw new Error(`HTTP error! status: ${s.status}`)}return{success:!0,data:await s.json(),message:"ดึงข้อมูลสำเร็จ"}}catch(s){return console.error("Error fetching service requests:",s),{success:!1,message:"เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่",data:[]}}},d=async t=>{const e=new Headers;e.append("Content-Type","application/json");const r={method:"GET",headers:e,redirect:"follow"};return await(await fetch(a+"/service-requests/"+t,r)).json()},u=async t=>{const e=new Headers;e.append("Content-Type","application/json");const r={method:"GET",headers:e,redirect:"follow"};return await(await fetch(a+"/service-requests/status-tracking/"+t,r)).json()},w=async t=>{console.log("data",t);const e=new Headers;e.append("Content-Type","application/json");const r=JSON.stringify(t),s={method:"POST",headers:e,body:r,redirect:"follow"};try{const o=await fetch(a+"/service-requests",s);if(!o.ok){const n=await o.json();throw new Error(n.message||`HTTP Error: ${o.status}`)}return await o.json()}catch(o){throw console.error("Save ServiceRequests data Error:",o),o}},h=async(t,e)=>{const r=new Headers;r.append("Content-Type","application/json");const s=JSON.stringify(t),o={method:"PUT",headers:r,body:s,redirect:"follow"};try{const n=await fetch(a+"/service-requests/"+e,o);if(!n.ok){const c=await n.json();throw new Error(c.message||`HTTP Error: ${n.status}`)}return await n.json()}catch(n){throw n}},y=async t=>{const e=new Headers;e.append("Content-Type","application/json");const r={method:"DELETE",headers:e,redirect:"follow"};return await(await fetch(a+"/service-requests/"+t,r)).json()},l=async t=>{console.log("data",t);const e=new Headers;e.append("Content-Type","application/json");const r=JSON.stringify(t),s={method:"POST",headers:e,body:r,redirect:"follow"};try{const o=await fetch(a+"/service-request-documents",s);if(!o.ok){const n=await o.json();throw new Error(n.message||`HTTP Error: ${o.status}`)}return await o.json()}catch(o){throw console.error("Save ServiceRequests data Error:",o),o}},f=async t=>{const e=new Headers;e.append("Content-Type","application/json");const r={method:"DELETE",headers:e,redirect:"follow"};return await(await fetch(a+"/service-request-documents/"+t,r)).json()},q=async t=>{const e=new Headers;e.append("Content-Type","application/json");const r={method:"PUT",headers:e,redirect:"follow"};try{const s=await fetch(a+"/generate-request-no/"+t,r);if(!s.ok){const o=await s.json();throw new Error(o.message||`HTTP Error: ${s.status}`)}return await s.json()}catch(s){throw s}},T=async(t,e)=>{const r=new Headers;r.append("Content-Type","application/json");const s=JSON.stringify(e),o={method:"PUT",headers:r,body:s,redirect:"follow"};try{const n=await fetch(a+`/service-requests/${t}/status-tracking`,o);if(!n.ok){const c=await n.json();throw new Error(c.message||`HTTP Error: ${n.status}`)}return await n.json()}catch(n){throw n}},m=async(t,e)=>{const r=new Headers;r.append("Content-Type","application/json");const s=JSON.stringify(e),o={method:"DELETE",headers:r,body:s,redirect:"follow"};try{const n=await fetch(a+`/service-requests/${t}/status-tracking`,o);if(!n.ok){const c=await n.json();throw new Error(c.message||`HTTP Error: ${n.status}`)}return await n.json()}catch(n){throw n}};export{d as a,u as b,q as c,m as d,p as e,y as f,i as g,w as h,l as i,f as j,h as k,T as p};
