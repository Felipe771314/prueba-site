(()=>{"use strict";const e=window.wp.i18n,t=window.wp.hooks,i=window.wp.blocks,s=window.wp.element,c=window.wp.primitives,n=(0,s.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(c.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),r=window.wp.blockEditor,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"sensei-certificates/view-certificate-link","title":"View Certificate","category":"sensei-lms","description":"Displays a link to the certificate.","textdomain":"sensei-certificates","ancestor":["sensei-lms/course-list"],"usesContext":["postType"],"example":{}}'),o={...a,metadata:a,icon:n,edit:t=>{let{context:{postType:i}}=t;const c=(0,r.useBlockProps)();return["course","lesson"].includes(i)?(0,s.createElement)("div",c,(0,s.createElement)("a",{href:"#"},(0,e.__)("View Certificate","sensei-certificates"))):(0,s.createElement)("div",c,(0,s.createElement)(r.Warning,null,(0,e.__)("The View Certificate Link block can only be used inside the Course List block.","sensei-certificates")))}};(0,i.registerBlockType)(o.name,o);const l={className:"view-certificate",text:(0,e.__)("View Certificate","sensei-certificates")};(0,i.registerBlockVariation)("core/button",{name:"sensei-certificates/view-certificate-button",title:(0,e.__)("View Certificate","sensei-certificates"),description:(0,e.__)("Enable students to view their course certificate.","sensei-certificates"),keywords:[(0,e.__)("Certificates","sensei-lms")],category:"sensei-lms",attributes:l,isActive:(e,t)=>e.className?.match(t.className)}),(0,t.addFilter)("sensei-lms.Course.completedActions","sensei-certificates",(e=>[...e,["core/button",l]])),(0,i.registerBlockVariation)("core/buttons",{name:"sensei-certificates/view-certificate-buttons",title:(0,e.__)("View Certificate","sensei-certificates"),description:(0,e.__)("A Buttons block with a View Certificate button.","sensei-certificates"),category:"sensei-lms",keywords:[(0,e.__)("Certificate","sensei-certificates"),(0,e.__)("View Certificate","sensei-certificates")],innerBlocks:[["core/button",l]]})})();