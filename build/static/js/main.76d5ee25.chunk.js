(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,a,t){e.exports=t(46)},35:function(e,a,t){},36:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=(t(35),t(7)),s=t(8),i=t(11),u=t(10),m=(t(36),t(9)),f=t(14),p=t(2);t(41);var d=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-image"}),r.a.createElement("div",{className:"about-info"},r.a.createElement("div",{className:"about-intro"},r.a.createElement("h3",null,"Intro"),r.a.createElement("p",null,"I am an Economics and Finance graduate from University of Bristol and a Software Engineer in Training at Futurepoof. In addition to Futureproof, I have played water polo for Great Britain and currently coach two highly successful teams at Imperial College London.")),r.a.createElement("div",{className:"about-skills"},r.a.createElement("h3",null,"Skills"),r.a.createElement("div",{className:"skill-icons"},r.a.createElement("i",{className:"fab fa-html5 fa-5x"}),r.a.createElement("i",{className:"fab fa-css3 fa-5x"}),r.a.createElement("i",{className:"fab fa-js fa-5x"}),r.a.createElement("i",{className:"fab fa-node-js fa-5x"}),r.a.createElement("i",{className:"fab fa-react fa-5x"}),r.a.createElement("div",{className:"icon-image"},r.a.createElement("iconify-icon",{"data-icon":"simple-icons:redux","data-width":"80","data-height":"80"})),r.a.createElement("i",{className:"fab fa-python fa-5x"}),r.a.createElement("div",{className:"icon-image"},r.a.createElement("iconify-icon",{className:"icon-image","data-icon":"cib:flask","data-width":"80","data-height":"80"})),r.a.createElement("div",{className:"icon-image"},r.a.createElement("iconify-icon",{className:"icon-image","data-icon":"carbon:sql","data-width":"80","data-height":"80"}))))))},h=(t(42),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).renderBlogs=function(e){return e.map((function(e,a){return r.a.createElement("div",{key:a,className:"blog-post"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.post),r.a.createElement("h6",null,e.created.slice(0,16)))}))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"blogs"},this.props.blogs.length>0?this.renderBlogs(this.props.blogs):"No posts to see!")}}]),t}(r.a.Component)),b=Object(m.b)((function(e){return{blogs:e.blogs}}))(h),E=(t(43),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).renderProjects=function(e){return e.map((function(e,a){return r.a.createElement("div",{key:a,className:"project-card"},r.a.createElement("img",{src:e.image_url}),r.a.createElement("a",{href:e.url},r.a.createElement("h3",null,e.title)))}))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},this.props.projects.length>0?this.renderProjects(this.props.projects):"No projects to see!")}}]),t}(r.a.Component)),v=Object(m.b)((function(e){return{projects:e.projects}}))(E),g=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"You're not supposed to be here.")}}]),t}(r.a.Component),j=t(16),y=t.n(j),N=t(22),O="https://albieduffy-portfolio.herokuapp.com",w=function(e){return{type:"ADD_BLOG",payload:e}},k=function(e){return{type:"ADD_PROJECT",payload:e}},x=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.loadBlogs(),this.props.loadProjects()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",{className:"page-links"},r.a.createElement("h1",null,"Albie Duffy"),r.a.createElement(f.b,{to:"/"},"About"),r.a.createElement(f.b,{to:"/projects"},"Projects"),r.a.createElement(f.b,{to:"/blog"},"Blog")),r.a.createElement("div",{className:"social-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/albieduffy"},r.a.createElement("i",{className:"fab fa-github fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/albieduffy/"},r.a.createElement("i",{className:"fab fa-linkedin fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/albieduffy/"},r.a.createElement("i",{className:"fab fa-instagram fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/private"},r.a.createElement("i",{className:"fas fa-lock fa-lg"})))))),r.a.createElement("div",{className:"main"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:d}),r.a.createElement(p.a,{path:"/projects",component:v}),r.a.createElement(p.a,{path:"/blog",component:b}),r.a.createElement(p.a,{path:"/private",component:g}))))}}]),t}(r.a.Component),B=Object(m.b)(null,(function(e){return{loadBlogs:function(){return e(function(){var e=Object(N.a)(y.a.mark((function e(a){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/blogs"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(w(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())},loadProjects:function(){return e(function(){var e=Object(N.a)(y.a.mark((function e(a){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/projects"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(k(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}}}))(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(13),A=t(28),C=t(29),P=t(17),I={projects:[],blogs:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROJECT":return Object(P.a)(Object(P.a)({},e),{},{projects:a.payload});case"ADD_BLOG":return Object(P.a)(Object(P.a)({},e),{},{blogs:a.payload});default:return e}},F=Object(D.createStore)(_,Object(C.composeWithDevTools)(Object(D.applyMiddleware)(A.a)));l.a.render(r.a.createElement(m.a,{store:F},r.a.createElement(f.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.76d5ee25.chunk.js.map