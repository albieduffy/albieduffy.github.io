(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,a){e.exports=a(49)},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(36),a(6)),s=a(7),i=a(10),u=a(9),m=(a(37),a(8)),p=a(13),f=a(2);a(42);var d=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-image"}),r.a.createElement("div",{className:"about-info"},r.a.createElement("div",{className:"about-intro"},r.a.createElement("p",null,"I am an Economics and Finance graduate from University of Bristol and a Software Engineer in Training at Futurepoof. In addition to Futureproof, I have played water polo for Great Britain and currently coach two highly successful teams at Imperial College London.")),r.a.createElement("div",{className:"about-skills"},r.a.createElement("h3",null,"Skills"),r.a.createElement("div",{className:"skill-icons"},r.a.createElement("i",{className:"fab fa-html5 fa-5x"}),r.a.createElement("i",{className:"fab fa-css3 fa-5x"}),r.a.createElement("i",{className:"fab fa-js fa-5x"}),r.a.createElement("i",{className:"fab fa-node-js fa-5x"}),r.a.createElement("i",{className:"fab fa-react fa-5x"}),r.a.createElement("div",{className:"icon-image"},r.a.createElement("iconify-icon",{"data-icon":"simple-icons:redux","data-width":"80","data-height":"80"})),r.a.createElement("i",{className:"fab fa-python fa-5x"}),r.a.createElement("div",{className:"icon-image"},r.a.createElement("iconify-icon",{className:"icon-image","data-icon":"cib:flask","data-width":"80","data-height":"80"})),r.a.createElement("div",{className:"icon-image"},r.a.createElement("iconify-icon",{className:"icon-image","data-icon":"carbon:sql","data-width":"80","data-height":"80"}))))))},b=(a(43),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderBlogs=function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t,className:"blog-post"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.post),r.a.createElement("h6",null,e.created.slice(0,16)))}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"blogs"},this.props.blogs.length>0?this.renderBlogs(this.props.blogs):"No posts to see!")}}]),a}(r.a.Component)),h=Object(m.b)((function(e){return{blogs:e.blogs}}))(b),g=a(12),v=a.n(g),E=a(17),j="https://albieduffy-portfolio.herokuapp.com",y=function(e){return{type:"ADD_BLOG",payload:e}},O=function(e){return{type:"ADD_PROJECT",payload:e}},w=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/blogs"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t(y(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},N=(a(45),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pass:""},e.handleInput=function(t){var a=e.state.passlib;a=t.target.value,e.setState({pass:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state.pass)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"log-in"},r.a.createElement("form",{id:"log-in-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"password",onChange:this.handleInput,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"ENTER"}))))}}]),a}(r.a.Component)),k=Object(m.b)(null,(function(e){return{signIn:function(t){return e((a=t,function(){var e=Object(E.a)(v.a.mark((function e(t){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)},e.next=4,fetch("".concat(j,"/login"),n);case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,localStorage.setItem("user",c.token),window.location.reload(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(N),x=(a(46),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={blog:{}},e.handleInput=function(t){var a=e.state.blog;a[t.target.name]=t.target.value,e.setState({blog:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.addBlog(e.state.blog)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"blog-form"},r.a.createElement("form",{id:"post-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Title",name:"title",onChange:this.handleInput,required:!0}),r.a.createElement("br",null),r.a.createElement("textarea",{placeholder:"Post",name:"post",onChange:this.handleInput,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"POST"})))}}]),a}(r.a.Component)),S=Object(m.b)(null,(function(e){return{addBlog:function(t){return e((a=t,function(){var e=Object(E.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("user"))},method:"POST",body:JSON.stringify(a)},e.next=4,fetch("".concat(j,"/post"),n);case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent&&t(w()),window.location="/blog",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(x),I=(a(47),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderProjects=function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t,className:"project-card"},r.a.createElement("img",{src:e.image_url,alt:e.title}),r.a.createElement("a",{href:e.url},r.a.createElement("h3",null,e.title)))}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},this.props.projects.length>0?this.renderProjects(this.props.projects):"No projects to see!")}}]),a}(r.a.Component)),B=Object(m.b)((function(e){return{projects:e.projects}}))(I),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,localStorage.getItem("user")?r.a.createElement(A,{component:S}):r.a.createElement(k,null))}}]),a}(r.a.Component),D=a(30),A=function(e){var t=e.component,a=Object(D.a)(e,["component"]),n=localStorage.getItem("user");return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/private"})}}))},P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.loadBlogs(),this.props.loadProjects()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",{className:"page-links"},r.a.createElement(p.b,{to:"/"},"About"),r.a.createElement(p.b,{to:"/projects"},"Projects"),r.a.createElement(p.b,{to:"/blog"},"Blog")),r.a.createElement("div",{className:"social-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/albieduffy"},r.a.createElement("i",{className:"fab fa-github fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/albieduffy/"},r.a.createElement("i",{className:"fab fa-linkedin fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/albieduffy/"},r.a.createElement("i",{className:"fab fa-instagram fa-lg"}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/private"},r.a.createElement("i",{className:"fas fa-lock fa-lg"})))))),r.a.createElement("div",{className:"main"},r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:d}),r.a.createElement(f.b,{path:"/projects",component:B}),r.a.createElement(f.b,{path:"/blog",component:h}),r.a.createElement(f.b,{path:"/private",component:C}))))}}]),a}(r.a.Component),T=Object(m.b)(null,(function(e){return{loadBlogs:function(){return e(w())},loadProjects:function(){return e(function(){var e=Object(E.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/projects"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t(O(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(15),F=a(28),_=a(29),q=a(18),G={projects:[],blogs:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROJECT":return Object(q.a)(Object(q.a)({},e),{},{projects:t.payload});case"ADD_BLOG":return Object(q.a)(Object(q.a)({},e),{},{blogs:t.payload});default:return e}},M=Object(J.createStore)(L,Object(_.composeWithDevTools)(Object(J.applyMiddleware)(F.a)));o.a.render(r.a.createElement(m.a,{store:M},r.a.createElement(p.a,{basename:"/"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4b7ebe01.chunk.js.map