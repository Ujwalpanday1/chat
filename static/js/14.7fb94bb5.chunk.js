"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[14],{14:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var a=t(43),l=t(213),n=t(40),r=t(579);const o="http://localhost:5000/",c=e=>{let{setIsVerified:s}=e;const[t,c]=(0,a.useState)(!0),[i,u]=(0,a.useState)(!1),[d,m]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),[g,f]=(0,a.useState)(""),[y,j]=(0,a.useState)(""),N=()=>{c((e=>!e)),j(""),m(""),b("")};return 1==i?(0,r.jsx)(n.A,{}):(0,r.jsx)("div",{className:"bg-gradient-to-r from-gray-200 to-white min-h-screen flex items-center justify-center",children:(0,r.jsx)("div",{className:"bg-gradient-to-r from-white to-gray-200 shadow-[0_10px_20px_rgba(255,0,0,0.5)] rounded px-8 py-6  w-full max-w-md",children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-center mb-6",children:"Login"}),(0,r.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),u(!0);try{const e=await l.A.post(`${o}login`,{username:d,password:x},{withCredentials:!0});e.data;console.log(e),200==e.status&&(s(!0),u(!1))}catch(t){console.log(t),t.response&&401==t.response.status?(j(t.response.data.alertMsg),u(!1)):(j("Server not responding,Try again Later"),setTimeout((()=>{u(!1)}),2e3))}},children:[(0,r.jsx)("label",{className:"text-red-700 ",children:y}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),(0,r.jsx)("input",{type:"email",placeholder:"Enter your email",value:d,onChange:e=>m(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,r.jsx)("input",{type:"password",placeholder:"Enter your password",value:x,onChange:e=>b(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",children:"Login"})}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("span",{className:"text-gray-600",children:"Don't have an account?"}),(0,r.jsx)("button",{type:"button",onClick:N,className:"text-blue-600 hover:underline ml-1",children:"Sign Up"})]})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-center mb-6",children:"Sign Up"}),(0,r.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),u(!0);try{const e=await l.A.post(`${o}register`,{username:d,password:x,fName:p,lName:g},{withCredentials:!0});e.data;200==e.status&&(s(!0),u(!1))}catch(t){t.response&&401==t.response.status?(j(t.response.data.alertMsg),u(!1)):(j("Server not responding,Try again Later"),setTimeout((()=>{u(!1)}),2e3))}},children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"text-red-700 ",children:y}),(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"First Name"}),(0,r.jsx)("input",{type:"text",required:!0,placeholder:"Enter first your name",value:p,onChange:e=>h(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Last Name"}),(0,r.jsx)("input",{type:"text",required:!0,placeholder:"Enter your last name",value:g,onChange:e=>f(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),(0,r.jsx)("input",{type:"email",placeholder:"Enter your email",value:d,onChange:e=>m(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,r.jsx)("input",{type:"password",placeholder:"Enter your password",value:x,onChange:e=>b(e.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"})]}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",children:"Sign Up"})}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("span",{className:"text-gray-600",children:"Already have an account?"}),(0,r.jsx)("button",{type:"button",onClick:N,className:"text-blue-600 hover:underline ml-1",children:"Login"})]})]})]})})})}}}]);
//# sourceMappingURL=14.7fb94bb5.chunk.js.map