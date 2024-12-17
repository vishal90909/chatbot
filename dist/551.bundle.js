"use strict";(self.webpackChunkchatbot=self.webpackChunkchatbot||[]).push([[551],{8551:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(6540),o=a(181),n=a(2845);a(5138);const r=function(){const e=(0,o.Zp)(),[t,a]=(0,l.useState)(""),[r,s]=(0,l.useState)(!1);return l.createElement("div",{className:"w-full flex flex-col justify-center items-center py-32"},l.createElement("h1",{className:"text-xl lg:text-4xl font-adramalech font-normal text-white text-center my-3 md:mb-10"},"Welcome to Edulinks AI Assistant to proceed further Login."),l.createElement("div",{className:"flex justify-center items-center mt-6"},l.createElement("div",{className:"rounded-[20px] shadow-md flex flex-col items-center w-full md:w-[676px] md:h-[194px] max-w-[90%] bg-opacity-50 p-6 md:p-8 font-robotoCondensed",style:{backgroundColor:"rgba(255, 255, 255, 0.4)"}},l.createElement("form",{className:"flex flex-col gap-4 font-robotoCondensed font-bold w-full md:text-xl",onSubmit:async a=>{if(a.preventDefault(),!t||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))return n.oR.error("Please enter a valid email address."),void s(!1);s(!0);try{const a=await fetch("https://edulink-backend-code.vercel.app/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),l=await a.json();a.ok?(n.oR.success("Email sent successfully!"),e("/login/verifymail",{state:{email:t}})):n.oR.error(l.message||"Failed to login. Please try again.")}catch(e){n.oR.error("An error occurred. Please try again later.")}finally{s(!1)}}},l.createElement("input",{type:"email",placeholder:"Please enter your email to login",value:t,onChange:e=>a(e.target.value),className:"placeholder-black border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eduTheme bg-white"}),l.createElement("div",{className:"flex justify-center mt-4"},l.createElement("button",{type:"submit",disabled:r,className:"bg-eduTheme text-white text-lg md:text-xl font-bold py-1 md:px-7 px-3 rounded-[7px] hover:bg-opacity-90 transition duration-200 flex items-center justify-center "+(r?"opacity-50 cursor-not-allowed":"")},r&&l.createElement("svg",{className:"animate-spin h-5 w-5 text-white mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),l.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.735 3.899 1.958 5.291l1.042-1.042z"})),r?"Loging...":"Login"))))),l.createElement(n.N9,null))}}}]);