"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[73],{763:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var a=t(43),r=t(293),l=t(749);const i=t.p+"static/media/avatar.1360bed9da8958440802.jpg";var o=t(40),n=t(579);const c=(0,l.io)("https://realtime-chatting-app-qnm1.onrender.com/"),d=e=>{let{setisVerified:s}=e;const[t,l]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(null),[g,f]=(0,a.useState)([]),[h,b]=(0,a.useState)([]),[p,v]=(0,a.useState)(null),[w,y]=(0,a.useState)([]),j=(0,a.useRef)(null),[N,_]=(0,a.useState)(!0);(0,a.useEffect)((()=>{var e;null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[w]),(0,a.useEffect)((()=>{(async()=>{const e=await(0,r.Hg)();"loadLoadig"===e?_(!0):e?(c.emit("login",{userid:e.user._id}),b(e.chatArray),v(e.user),_(!1)):(s(!1),_(!1))})()}),[]),(0,a.useEffect)((()=>(c.on("receivePrivateMsg",(e=>{if(p&&e.sender==u._id){const s={receiver:p._id,sender:e.sender,message:e.message};y((e=>[...e,s]))}})),()=>{c.off("receivePrivateMsg")})),[p,u]);const S=async e=>{const s=await(0,r.Ay)(e._id);m(""),l(""),f([]),y(s.messageArray),x(e)};return 1==N?(0,n.jsx)(o.A,{}):(0,n.jsx)("div",{className:"bg-gradient-to-r from-gray-400 to-gray-200 flex justify-center items-center min-h-screen",children:(0,n.jsxs)("div",{className:"flex flex-col h-[85vh] bg-gradient-to-r from-gray-400 to-gray-200 rounded-lg shadow-[0_10px_20px_rgba(255,0,0,1)] p-6 w-full max-w-6xl",children:[(0,n.jsxs)("div",{className:"top bg-gradient-to-r from-gray-400 to-gray-200 p-4 rounded-t-lg flex justify-between items-center flex-col sm:flex-row",children:[(0,n.jsx)("label",{className:"text-white text-lg font-semibold",children:"Welcome"}),(0,n.jsxs)("form",{className:"searchForm flex items-center relative mt-2",onSubmit:e=>{e.preventDefault()},id:"searchForm",children:[(0,n.jsx)("input",{className:"p-2 rounded-l-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Search",value:t,onChange:async e=>{if(l(e.target.value),""===e.target.value.trim())f([]);else{const s=await(0,r.x_)(e.target.value);f(s)}},id:"searchBox",name:"user"}),(0,n.jsx)("button",{type:"submit",id:"searchBtn",className:"bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors",children:"Search"}),(0,n.jsx)("div",{className:"searchResult absolute bg-gray-700 text-white top-11 rounded-lg shadow-lg w-full",children:g.map((e=>(0,n.jsxs)("button",{className:" bg-gray-300 w-full text-left text-blue-500 rounded hover:text-blue-700 p-4 border",onClick:()=>{console.log("hey q"),S(e)},children:[e.fName," ",e.lName]},e._id)))})]})]}),(0,n.jsxs)("div",{className:"main flex flex-row flex-grow w-full",children:[(0,n.jsxs)("div",{className:"sidebar bg-gray-100 h-full w-1/3 sm:w-1/4 p-4 flex flex-col  rounded-l-lg overflow-y-auto",children:[(0,n.jsx)("div",{className:"sidebar-header mb-4 ",children:(0,n.jsx)("h2",{className:"text-gray-700 text-lg font-semibold",children:"Contacts"})}),(0,n.jsx)("div",{className:"flex-grow h-2 overflow-y-auto",children:h.map((e=>(0,n.jsxs)("div",{className:"contact flex items-center mb-4 p-1 sm:p-2 bg-white rounded-lg shadow-xl",children:[(0,n.jsx)("img",{src:i,alt:"Avatar",className:"rounded-full w-4 h-4 sm:w-12 sm:h-12 "}),(0,n.jsx)("form",{className:"flex-grow ml-1 sm:ml-4",onSubmit:s=>{s.preventDefault(),S(e)},children:(0,n.jsxs)("button",{type:"submit",className:"text-gray-800 font-semibold hover:text-blue-500 transition-colors text-xs sm:text-xl",children:[e.fName," ",e.lName]})})]},e._id)))})]}),(0,n.jsx)("div",{id:"chat-area",className:" bg-gradient-to-r from-gray-200 to-white p-6 rounded-r-lg flex flex-col flex-grow w-2/3 sm:w-3/4 lg:mt-0 ",children:u?(0,n.jsxs)("div",{className:"flex flex-grow flex-col ",children:[(0,n.jsxs)("p",{children:["Chat with: ",u.fName]}),(0,n.jsxs)("div",{className:"flex-grow flex flex-col h-1 overflow-y-auto  mt-2 mb-2",children:[w.map((e=>e.sender===p._id?(0,n.jsx)("div",{className:"bg-gray-300 m-1 sm:m-4 text-xs sm:text-lg   p-1 sm:p-3 self-end rounded w-fit break-words max-w-[60%] ",children:e.message},e._id):(0,n.jsx)("div",{className:"bg-gray-300 m-1 sm:m-4 text-xs sm:text-lg   p-1 sm:p-3  rounded w-fit break-words max-w-[60%] ",children:e.message},e._id))),(0,n.jsx)("div",{ref:j})]}),(0,n.jsxs)("form",{className:"searchForm flex items-center relative mt-2 sm:mt-0 w-full",onSubmit:e=>{if(e.preventDefault(),""!=d){if(!u||!p)return;c.emit("privateMsg",{data:{sender:p._id,receiver:u._id,message:d}});const e={receiver:u._id,sender:p._id,message:d};m(""),y((s=>[...s,e]))}},id:"searchForm",children:[(0,n.jsx)("input",{className:"p-2 grow w-20 text-xs sm:text-lg rounded-l-lg border bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Type your msg here",value:d,onChange:e=>m(e.target.value),id:"msgBox",name:"msg"}),(0,n.jsx)("button",{type:"submit",id:"sendBtn",className:"bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors",children:"Send"})]})]}):(0,n.jsx)("p",{children:"Select a contact to start chatting"})})]})]})})}}}]);
//# sourceMappingURL=73.b44d581c.chunk.js.map