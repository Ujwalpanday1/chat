"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[14],{14:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var a=t(43),l=t(213),n=t(579);const r=e=>{let{setUser:s}=e;const[t,r]=(0,a.useState)(!0),[o,c]=(0,a.useState)(""),[i,u]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),g=()=>{r((e=>!e)),h(""),c(""),u("")};return(0,n.jsx)("div",{className:"bg-gradient-to-r from-gray-200 to-white min-h-screen flex items-center justify-center",children:(0,n.jsx)("div",{className:"bg-gradient-to-r from-white to-gray-200 shadow-[0_10px_20px_rgba(255,0,0,0.5)] rounded px-8 py-6  w-full max-w-md",children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-center mb-6",children:"Login"}),(0,n.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await l.A.post("https://realtime-chatting-app-qnm1.onrender.com/login",{username:o,password:i},{withCredentials:!0});e.data;200==e.status&&s(!0)}catch(t){401==t.response.status?h(t.response.data.alertMsg):h("Server not responding,Try again Later")}},children:[(0,n.jsx)("label",{className:"text-red-700 ",children:p}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),(0,n.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:e=>c(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,n.jsx)("input",{type:"password",placeholder:"Enter your password",value:i,onChange:e=>u(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",children:"Login"})}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("span",{className:"text-gray-600",children:"Don't have an account?"}),(0,n.jsx)("button",{type:"button",onClick:g,className:"text-blue-600 hover:underline ml-1",children:"Sign Up"})]})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-center mb-6",children:"Sign Up"}),(0,n.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await l.A.post("https://realtime-chatting-app-qnm1.onrender.com/register",{username:o,password:i,fName:d,lName:x},{withCredentials:!0});e.data;200==e.status&&s(!0)}catch(t){401==t.response.status?h(t.response.data.alertMsg):h("Server not responding,Try again Later")}},children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"text-red-700 ",children:p}),(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"First Name"}),(0,n.jsx)("input",{type:"text",required:!0,placeholder:"Enter first your name",value:d,onChange:e=>m(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Last Name"}),(0,n.jsx)("input",{type:"text",required:!0,placeholder:"Enter your last name",value:x,onChange:e=>b(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),(0,n.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:e=>c(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,n.jsx)("input",{type:"password",placeholder:"Enter your password",value:i,onChange:e=>u(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",children:"Sign Up"})}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("span",{className:"text-gray-600",children:"Already have an account?"}),(0,n.jsx)("button",{type:"button",onClick:g,className:"text-blue-600 hover:underline ml-1",children:"Login"})]})]})]})})})}}}]);
//# sourceMappingURL=14.42e042ab.chunk.js.map