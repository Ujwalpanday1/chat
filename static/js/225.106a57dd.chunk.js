"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[225],{299:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(43),r=s(213);const l="https://realtime-chatting-app-qnm1.onrender.com/";var n=s(749);const o=s.p+"static/media/avatar.1360bed9da8958440802.jpg";var i=s(579);const c=(0,n.io)("https://realtime-chatting-app-qnm1.onrender.com/"),d=()=>{const[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(""),[d,m]=(0,a.useState)(null),[u,g]=(0,a.useState)([]),[x,h]=(0,a.useState)([]),[f,b]=(0,a.useState)(null),[p,w]=(0,a.useState)([]),v=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null===(e=v.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[p]),(0,a.useEffect)((()=>{(async()=>{const e=await(async()=>{try{return(await r.A.get(`${l}`,{withCredentials:!0})).data}catch(e){return null}})();e&&(c.emit("login",{userid:e.user._id}),h(e.chatArray),b(e.user))})()}),[]),(0,a.useEffect)((()=>(c.on("receivePrivateMsg",(e=>{if(f&&e.sender==d._id){const t={receiver:f._id,sender:e.sender,message:e.message};w((e=>[...e,t]))}})),()=>{c.off("receivePrivateMsg")})),[f,d]);const y=async e=>{const s=await(async e=>{try{return(await r.A.get(`${l}select/${e}`,{withCredentials:!0})).data}catch(t){console.log(t)}})(e._id);n(""),t(""),g([]),w(s.messageArray),m(e)};return(0,i.jsx)("div",{className:"bg-gradient-to-r from-gray-400 to-gray-200 flex justify-center items-center min-h-screen",children:(0,i.jsxs)("div",{className:"flex flex-col h-[85vh] bg-gradient-to-r from-gray-400 to-gray-200 rounded-lg shadow-[0_10px_20px_rgba(255,0,0,1)] p-6 w-full max-w-6xl",children:[(0,i.jsxs)("div",{className:"top bg-gradient-to-r from-gray-400 to-gray-200 p-4 rounded-t-lg flex justify-between items-center flex-col sm:flex-row",children:[(0,i.jsx)("label",{className:"text-white text-lg font-semibold",children:"Welcome"}),(0,i.jsxs)("form",{className:"searchForm flex items-center relative mt-2",onSubmit:t=>{t.preventDefault(),console.log("Searching for:",e)},id:"searchForm",children:[(0,i.jsx)("input",{className:"p-2 rounded-l-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Search",value:e,onChange:async e=>{if(t(e.target.value),""===e.target.value.trim())g([]);else{const t=await(async e=>{try{return(await r.A.get(`${l}getUser/${e}`)).data}catch(t){return console.error("Error fetching data:",t),[]}})(e.target.value);g(t)}},id:"searchBox",name:"user"}),(0,i.jsx)("button",{type:"submit",id:"searchBtn",className:"bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors",children:"Search"}),(0,i.jsx)("div",{className:"searchResult absolute bg-gray-700 text-white top-11 rounded-lg shadow-lg w-full",children:u.map((e=>(0,i.jsxs)("button",{className:" bg-gray-300 w-full text-left text-blue-500 rounded hover:text-blue-700 p-4 border",onClick:()=>{console.log("hey q"),y(e)},children:[e.fName," ",e.lName]},e._id)))})]})]}),(0,i.jsxs)("div",{className:"main flex flex-row flex-grow w-full",children:[(0,i.jsxs)("div",{className:"sidebar bg-gray-100 h-full w-1/3 sm:w-1/4 p-4 flex flex-col  rounded-l-lg overflow-y-auto",children:[(0,i.jsx)("div",{className:"sidebar-header mb-4 ",children:(0,i.jsx)("h2",{className:"text-gray-700 text-lg font-semibold",children:"Contacts"})}),(0,i.jsx)("div",{className:"flex-grow h-2 overflow-y-auto",children:x.map((e=>(0,i.jsxs)("div",{className:"contact flex items-center mb-4 p-1 sm:p-2 bg-white rounded-lg shadow-xl",children:[(0,i.jsx)("img",{src:o,alt:"Avatar",className:"rounded-full w-4 h-4 sm:w-12 sm:h-12 "}),(0,i.jsx)("form",{className:"flex-grow ml-1 sm:ml-4",onSubmit:t=>{t.preventDefault(),y(e)},children:(0,i.jsxs)("button",{type:"submit",className:"text-gray-800 font-semibold hover:text-blue-500 transition-colors text-xs sm:text-xl",children:[e.fName," ",e.lName]})})]},e._id)))})]}),(0,i.jsx)("div",{id:"chat-area",className:" bg-gradient-to-r from-gray-200 to-white p-6 rounded-r-lg flex flex-col flex-grow w-2/3 sm:w-3/4 lg:mt-0 ",children:d?(0,i.jsxs)("div",{className:"flex flex-grow flex-col ",children:[(0,i.jsxs)("p",{children:["Chat with: ",d.fName]}),(0,i.jsxs)("div",{className:"flex-grow flex flex-col h-1 overflow-y-auto  mt-2 mb-2",children:[p.map((e=>e.sender===f._id?(0,i.jsx)("div",{className:"bg-gray-300 m-1 sm:m-4 text-xs sm:text-lg   p-1 sm:p-3 self-end rounded w-fit break-words max-w-[60%] ",children:e.message},e._id):(0,i.jsx)("div",{className:"bg-gray-300 m-1 sm:m-4 text-xs sm:text-lg   p-1 sm:p-3  rounded w-fit break-words max-w-[60%] ",children:e.message},e._id))),(0,i.jsx)("div",{ref:v})]}),(0,i.jsxs)("form",{className:"searchForm flex items-center relative mt-2 sm:mt-0 w-full",onSubmit:e=>{if(e.preventDefault(),""!=s){if(!d||!f)return;c.emit("privateMsg",{data:{sender:f._id,receiver:d._id,message:s}});const e={receiver:d._id,sender:f._id,message:s};n(""),w((t=>[...t,e]))}},id:"searchForm",children:[(0,i.jsx)("input",{className:"p-2 grow w-20 text-xs sm:text-lg rounded-l-lg border bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Type your msg here",value:s,onChange:e=>n(e.target.value),id:"msgBox",name:"msg"}),(0,i.jsx)("button",{type:"submit",id:"sendBtn",className:"bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors",children:"Send"})]})]}):(0,i.jsx)("p",{children:"Select a contact to start chatting"})})]})]})})}}}]);
//# sourceMappingURL=225.106a57dd.chunk.js.map