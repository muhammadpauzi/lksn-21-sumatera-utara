(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{24:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),r=t(17),n=t.n(r),l=(t(24),t(7)),d=t.n(l),i=t(10),j=t(2),b=t(8),o="https://sumatera-utara-vaccinify.lksn-webtech-2021.zasdaym.my.id/api/v1";function h(){return 1==localStorage.getItem("loggedIn")}function m(){return 1!=localStorage.getItem("loggedIn")}function x(){return JSON.parse(localStorage.getItem("data"))}var O=t(0);function u(){var e;Object(j.g)();function c(){return(c=Object(i.a)(d.a.mark((function e(){var c,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/auth/logout?token=").concat(x().token),{method:"POST"});case 3:return c=e.sent,e.next=6,c.json();case 6:return t=e.sent,localStorage.removeItem("data"),localStorage.removeItem("loggedIn"),alert(t.message),e.abrupt("return",window.location.reload());case 13:e.prev=13,e.t0=e.catch(0),alert("Something went wrong");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(O.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-primary",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(b.b,{to:"/",className:"navbar-brand",children:"Vaccination Platform"}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault",children:Object(O.jsxs)("ul",{className:"navbar-nav ml-auto",children:[h()&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"",className:"nav-link",children:null===(e=x())||void 0===e?void 0:e.name})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("button",{onClick:function(){return c.apply(this,arguments)},className:"nav-link btn btn-sm btn-primary",children:"Logout"})})]}),m()&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{to:"/login",className:"nav-link",children:"Login"})})]})})]})})}var N=t(12);function v(){var e=Object(s.useState)(""),c=Object(N.a)(e,2),t=c[0],a=c[1],r=Object(s.useState)(""),n=Object(N.a)(r,2),l=n[0],b=n[1];function m(){return(m=Object(i.a)(d.a.mark((function e(c){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,fetch("".concat(o,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_card_number:t,password:l})});case 4:return s=e.sent,e.next=7,s.json();case 7:return a=e.sent,localStorage.setItem("loggedIn",1),localStorage.setItem("data",JSON.stringify(a)),e.abrupt("return",window.location.reload());case 13:e.prev=13,e.t0=e.catch(1),alert("Cannot login, something went wrong.");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return Object(O.jsxs)("main",{children:[h()&&Object(O.jsx)(j.a,{to:"/"}),Object(O.jsx)("header",{className:"jumbotron",children:Object(O.jsx)("div",{className:"container text-center",children:Object(O.jsx)("h1",{className:"display-4",children:"Vaccination Platform"})})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("form",{className:"card card-default",onSubmit:function(e){return m.apply(this,arguments)},children:[Object(O.jsx)("div",{className:"card-header",children:Object(O.jsx)("h4",{className:"mb-0",children:"Login"})}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{className:"form-group row align-items-center",children:[Object(O.jsx)("div",{className:"col-4 text-right",children:"ID Card Number"}),Object(O.jsx)("div",{className:"col-8",children:Object(O.jsx)("input",{type:"number",required:!0,value:t,onChange:function(e){return a(e.target.value)},className:"form-control"})})]}),Object(O.jsxs)("div",{className:"form-group row align-items-center",children:[Object(O.jsx)("div",{className:"col-4 text-right",children:"Password"}),Object(O.jsx)("div",{className:"col-8",children:Object(O.jsx)("input",{type:"text",required:!0,value:l,onChange:function(e){return b(e.target.value)},className:"form-control"})})]}),Object(O.jsxs)("div",{className:"form-group row align-items-center mt-4",children:[Object(O.jsx)("div",{className:"col-4"}),Object(O.jsx)("div",{className:"col-8",children:Object(O.jsx)("button",{className:"btn btn-primary",children:"Login"})})]})]})]})})})})]})}function p(){var e,c=Object(s.useState)([]),t=Object(N.a)(c,2),a=t[0],r=t[1];function n(){return(n=Object(i.a)(d.a.mark((function e(){var c,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/consultations?token=").concat(x().token));case 3:return c=e.sent,e.next=6,c.json();case 6:t=e.sent,console.log(t),r(t.consultation),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){n.apply(this,arguments)}()}),[]),Object(O.jsxs)(O.Fragment,{children:[m()&&Object(O.jsx)(j.a,{to:"/login"}),Object(O.jsxs)("main",{children:[Object(O.jsx)("header",{className:"jumbotron",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("h1",{className:"display-4",children:"Dashboard"})})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("section",{className:"consultation-section mb-5",children:[Object(O.jsx)("div",{className:"section-header mb-3",children:Object(O.jsx)("h4",{className:"section-title text-muted",children:"My Consultation"})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header",children:Object(O.jsx)("h5",{className:"mb-0",children:"Consultation"})}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("a",{href:"",children:"+ Request consultation"})})]})}),a&&Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"Consultation"})}),Object(O.jsx)("div",{className:"card-body p-0",children:Object(O.jsxs)("table",{className:"table table-striped mb-0",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"badge badge-info",children:(null===a||void 0===a?void 0:a.status)||"-"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Disease History"}),Object(O.jsx)("td",{className:"text-muted",children:(null===a||void 0===a?void 0:a.disease_history)||"-"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Current Symptoms"}),Object(O.jsx)("td",{className:"text-muted",children:(null===a||void 0===a?void 0:a.current_symptoms)||"-"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Doctor Name"}),Object(O.jsx)("td",{className:"text-muted",children:(null===a||void 0===a||null===(e=a.doctor)||void 0===e?void 0:e.name)||"-"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Doctor Notes"}),Object(O.jsx)("td",{className:"text-muted",children:(null===a||void 0===a?void 0:a.doctor_notes)||"-"})]})]})})]})})]})]}),Object(O.jsxs)("section",{className:"consultation-section mb-5",children:[Object(O.jsx)("div",{className:"section-header mb-3",children:Object(O.jsx)("h4",{className:"section-title text-muted",children:"My Vaccinations"})}),Object(O.jsxs)("div",{className:"section-body",children:[Object(O.jsxs)("div",{className:"row mb-4",children:[Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("div",{className:"alert alert-warning",children:"Your consultation must be approved by doctor to get the vaccine."})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"First Vaccination"})}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("a",{href:"",children:"+ Register vaccination"})})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"First Vaccination"})}),Object(O.jsx)("div",{className:"card-body p-0",children:Object(O.jsxs)("table",{className:"table table-striped mb-0",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("td",{className:"text-muted",children:Object(O.jsx)("span",{className:"badge badge-info",children:"Registered"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("td",{className:"text-muted",children:"October 27, 2021"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Spot"}),Object(O.jsx)("td",{className:"text-muted",children:"Usamah Hospital"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccine"}),Object(O.jsx)("td",{className:"text-muted",children:"-"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccinator"}),Object(O.jsx)("td",{className:"text-muted",children:"-"})]})]})})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"First Vaccination"})}),Object(O.jsx)("div",{className:"card-body p-0",children:Object(O.jsxs)("table",{className:"table table-striped mb-0",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("td",{className:"text-muted",children:Object(O.jsx)("span",{className:"badge badge-primary",children:"Vaccinated"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("td",{className:"text-muted",children:"October 27, 2021"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Spot"}),Object(O.jsx)("td",{className:"text-muted",children:"Usamah Hospital"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccine"}),Object(O.jsx)("td",{className:"text-muted",children:"Sinovac"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccinator"}),Object(O.jsx)("td",{className:"text-muted",children:"Dr. Raina Pradipta"})]})]})})]})})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"Second Vaccination"})}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("a",{href:"",children:"+ Register vaccination"})})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"Second Vaccination"})}),Object(O.jsx)("div",{className:"card-body p-0",children:Object(O.jsxs)("table",{className:"table table-striped mb-0",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("td",{className:"text-muted",children:Object(O.jsx)("span",{className:"badge badge-info",children:"Registered"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("td",{className:"text-muted",children:"October 27, 2021"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Spot"}),Object(O.jsx)("td",{className:"text-muted",children:"Usamah Hospital"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccine"}),Object(O.jsx)("td",{className:"text-muted",children:"-"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccinator"}),Object(O.jsx)("td",{className:"text-muted",children:"-"})]})]})})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"card card-default",children:[Object(O.jsx)("div",{className:"card-header border-0",children:Object(O.jsx)("h5",{className:"mb-0",children:"Second Vaccination"})}),Object(O.jsx)("div",{className:"card-body p-0",children:Object(O.jsxs)("table",{className:"table table-striped mb-0",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("td",{className:"text-muted",children:Object(O.jsx)("span",{className:"badge badge-primary",children:"Vaccinated"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("td",{className:"text-muted",children:"October 27, 2021"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Spot"}),Object(O.jsx)("td",{className:"text-muted",children:"Usamah Hospital"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccine"}),Object(O.jsx)("td",{className:"text-muted",children:"Sinovac"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Vaccinator"}),Object(O.jsx)("td",{className:"text-muted",children:"Dr. Raina Pradipta"})]})]})})]})})]})]})]})]})]}),Object(O.jsx)("footer",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"text-center py-4 text-muted",children:"Copyright \xa9 2021 - Web Tech ID"})})})]})}var g=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(u,{}),Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/",children:Object(O.jsx)(p,{})}),Object(O.jsx)(j.b,{exact:!0,path:"/login",children:Object(O.jsx)(v,{})})]})]})})};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5d5d3997.chunk.js.map