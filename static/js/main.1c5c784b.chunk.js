(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(e,a,t){e.exports=t(524)},264:function(e,a,t){},506:function(e,a,t){},524:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=(t(264),t(50)),c=t(37),s=t.n(c),m="login_user",u="register_user",d="auth_user",p="logout_user",E="http://temuin.jtk.polban.ac.id:5000";var g=t(30),f=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(l){var i=Object(g.c)(function(e){return e.user}),o=Object(g.b)();return Object(n.useEffect)(function(){o(function(){var e=s.a.get("".concat(E,"/api/users/auth")).then(function(e){return e.data});return{type:d,payload:e}}()).then(function(e){e.payload.isAuth?t&&!e.payload.isAdmin?l.history.push("/"):!1===a&&l.history.push("/"):a&&l.history.push("/login")})},[]),r.a.createElement(e,Object.assign({},l,{user:i}))}},h=t(256);var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app"},r.a.createElement(h.a,{style:{fontSize:"4rem"}}),r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"2rem"}},"Let's Start Coding!")),r.a.createElement("div",{style:{float:"right"}},"Thanks For Using This Boiler Plate by John Ahn"))},y=t(24),v=t(122),w=t(28),O=t(526),x=t(525),S=t(528),j=t(10),k=t(529),N=t(170),I=O.a.Title;var P=Object(o.f)(function(e){var a=Object(g.b)(),t=!!localStorage.getItem("rememberMe"),l=Object(n.useState)(""),i=Object(y.a)(l,2),o=i[0],c=i[1],u=Object(n.useState)(t),d=Object(y.a)(u,2),p=d[0],f=d[1],h=function(){f(!p)},b=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(v.a,{initialValues:{email:b,password:""},validationSchema:w.object().shape({email:w.string().email("Email is invalid").required("Email is required"),password:w.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(t,n){var r=n.setSubmitting;setTimeout(function(){var n={email:t.email,password:t.password};a(function(e){var a=s.a.post("".concat(E,"/api/users/login"),e).then(function(e){return e.data});return{type:m,payload:a}}(n)).then(function(a){a.payload.loginSuccess?(window.localStorage.setItem("userId",a.payload.userId),!0===p?window.localStorage.setItem("rememberMe",t.id):localStorage.removeItem("rememberMe"),e.history.push("/")):c("Check out your Account or Password again")}).catch(function(e){c("Check out your Account or Password again"),setTimeout(function(){c("")},3e3)}),r(!1)},500)}},function(e){var a=e.values,t=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),i=e.handleChange,c=e.handleBlur,s=e.handleSubmit;return e.handleReset,r.a.createElement("div",{className:"app"},r.a.createElement(I,{level:2},"Log In"),r.a.createElement("form",{onSubmit:s,style:{width:"350px"}},r.a.createElement(x.a.Item,{required:!0},r.a.createElement(S.a,{id:"email",prefix:r.a.createElement(j.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:a.email,onChange:i,onBlur:c,className:n.email&&t.email?"text-input error":"text-input"}),n.email&&t.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(x.a.Item,{required:!0},r.a.createElement(S.a,{id:"password",prefix:r.a.createElement(j.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:a.password,onChange:i,onBlur:c,className:n.password&&t.password?"text-input error":"text-input"}),n.password&&t.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),o&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},o)),r.a.createElement(x.a.Item,null,r.a.createElement(k.a,{id:"rememberMe",onChange:h,checked:p},"Remember me"),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),r.a.createElement("div",null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:s},"Log in")),"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))})}),C=t(75),_=t.n(C),q={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},B={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var T=function(e){var a=Object(g.b)();return r.a.createElement(v.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:w.object().shape({name:w.string().required("Name is required"),lastName:w.string().required("Last Name is required"),email:w.string().email("Email is invalid").required("Email is required"),password:w.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:w.string().oneOf([w.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(t,n){var r=n.setSubmitting;setTimeout(function(){var n={email:t.email,password:t.password,name:t.name,lastname:t.lastname,image:"http://gravatar.com/avatar/".concat(_()().unix(),"?d=identicon")};a(function(e){var a=s.a.post("".concat(E,"/api/users/register"),e).then(function(e){return e.data});return{type:u,payload:a}}(n)).then(function(a){a.payload.success?e.history.push("/login"):alert(a.payload.err.errmsg)}),r(!1)},500)}},function(e){var a=e.values,t=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),i=e.handleChange,o=e.handleBlur,c=e.handleSubmit;return e.handleReset,r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(x.a,Object.assign({style:{minWidth:"375px"}},q,{onSubmit:c}),r.a.createElement(x.a.Item,{required:!0,label:"Name"},r.a.createElement(S.a,{id:"name",placeholder:"Enter your name",type:"text",value:a.name,onChange:i,onBlur:o,className:n.name&&t.name?"text-input error":"text-input"}),n.name&&t.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(x.a.Item,{required:!0,label:"Last Name"},r.a.createElement(S.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:a.lastName,onChange:i,onBlur:o,className:n.lastName&&t.lastName?"text-input error":"text-input"}),n.lastName&&t.lastName&&r.a.createElement("div",{className:"input-feedback"},n.lastName)),r.a.createElement(x.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:n.email&&t.email?"error":"success"},r.a.createElement(S.a,{id:"email",placeholder:"Enter your Email",type:"email",value:a.email,onChange:i,onBlur:o,className:n.email&&t.email?"text-input error":"text-input"}),n.email&&t.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(x.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:n.password&&t.password?"error":"success"},r.a.createElement(S.a,{id:"password",placeholder:"Enter your password",type:"password",value:a.password,onChange:i,onBlur:o,className:n.password&&t.password?"text-input error":"text-input"}),n.password&&t.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(x.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},r.a.createElement(S.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:a.confirmPassword,onChange:i,onBlur:o,className:n.confirmPassword&&t.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&t.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(x.a.Item,B,r.a.createElement(N.a,{onClick:c,type:"primary",disabled:l},"Submit"))))})},D=t(527),L=D.a.SubMenu,F=D.a.ItemGroup;var z=function(e){return r.a.createElement(D.a,{mode:e.mode},r.a.createElement(D.a.Item,{key:"mail"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement(L,{title:r.a.createElement("span",null,"Blogs")},r.a.createElement(F,{title:"Item 1"},r.a.createElement(D.a.Item,{key:"setting:1"},"Option 1"),r.a.createElement(D.a.Item,{key:"setting:2"},"Option 2")),r.a.createElement(F,{title:"Item 2"},r.a.createElement(D.a.Item,{key:"setting:3"},"Option 3"),r.a.createElement(D.a.Item,{key:"setting:4"},"Option 4"))))};var A=Object(o.f)(function(e){var a=Object(g.c)(function(e){return e.user});return a.userData&&!a.userData.isAuth?r.a.createElement(D.a,{mode:e.mode},r.a.createElement(D.a.Item,{key:"mail"},r.a.createElement("a",{href:"/login"},"Signin")),r.a.createElement(D.a.Item,{key:"app"},r.a.createElement("a",{href:"/register"},"Signup"))):r.a.createElement(D.a,{mode:e.mode},r.a.createElement(D.a.Item,{key:"upload"},r.a.createElement("a",{href:"/product/upload"},"Upload")),r.a.createElement(D.a.Item,{key:"logout"},r.a.createElement("a",{onClick:function(){s.a.get("".concat(E,"/api/users/logout")).then(function(a){200===a.status?e.history.push("/login"):alert("Log Out Failed")})}},"Logout")))}),G=t(530);t(506);var M=function(){var e=Object(n.useState)(!1),a=Object(y.a)(e,2),t=a[0],l=a[1];return r.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},r.a.createElement("div",{className:"menu__logo"},r.a.createElement("a",{href:"/"},"Logo")),r.a.createElement("div",{className:"menu__container"},r.a.createElement("div",{className:"menu_left"},r.a.createElement(z,{mode:"horizontal"})),r.a.createElement("div",{className:"menu_rigth"},r.a.createElement(A,{mode:"horizontal"})),r.a.createElement(N.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},r.a.createElement(j.a,{type:"align-right"})),r.a.createElement(G.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:t},r.a.createElement(z,{mode:"inline"}),r.a.createElement(A,{mode:"inline"}))))};var R=function(){return r.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},r.a.createElement("p",null," Happy Coding  ",r.a.createElement(j.a,{type:"smile"})))},W=t(127),U=t(257);var X=function(e){var a=Object(n.useState)([]),t=Object(y.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(U.a,{onDrop:function(a){var t=new FormData;t.append("file",a[0]),s.a.post("/api/product/uploadImage",t,{header:{"content-type":"multipart/form-data"}}).then(function(a){a.data.success?(i([].concat(Object(W.a)(l),[a.data.image])),e.refreshFunction([].concat(Object(W.a)(l),[a.data.image]))):alert("Failed to save the Image in Server")})},multiple:!1,maxSize:8e8},function(e){var a=e.getRootProps,t=e.getInputProps;return r.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},a()),r.a.createElement("input",t()),r.a.createElement(j.a,{type:"plus",style:{fontSize:"3rem"}}))}),r.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map(function(a,t){return r.a.createElement("div",{onClick:function(){return function(a){var t=l.indexOf(a),n=Object(W.a)(l);n.splice(t,1),i(n),e.refreshFunction(n)}(a)}},r.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"http://localhost:5000/".concat(a),alt:"productImg-".concat(t)}))})))},H=t(252),V=t.n(H);var J=function(e){var a=Object(n.useState)(1),t=Object(y.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(""),c=Object(y.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(""),d=Object(y.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(""),f=Object(y.a)(g,2),h=f[0],b=f[1],v=Object(n.useState)(""),w=Object(y.a)(v,2),O=(w[0],w[1]);return r.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},r.a.createElement("div",{style:{textAlign:"center",margin:"2rem"}},"Upload Penemuan Barang"),r.a.createElement(x.a,null,r.a.createElement(X,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Nama Barang"),r.a.createElement(S.a,{onChange:function(e){E(e.currentTarget.value)},value:p}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Deskripsi Barang"),r.a.createElement(V.a,{onChange:function(e){b(e.currentTarget.value)},value:h}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Lokasi Penemuan"),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(e){O(e.currentTarget.value)}},[{key:1,value:"Gedung A"},{key:2,value:"Gedung B"},{key:3,value:"Gedung C"},{key:4,value:"Gedung D"},{key:5,value:"Gedung E"},{key:6,value:"Gedung F"},{key:7,value:"Lukmanul Hakim"}].map(function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.value)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Penemu"),r.a.createElement(S.a,{onChange:function(e){m(e.currentTarget.value)},value:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Tanggal Penemuan"),r.a.createElement(S.a,{onChange:function(e){i(e.currentTarget.value)},value:l,type:"date"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,null," Submit")))};var $=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(M,null),r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:f(b,null)}),r.a.createElement(o.a,{exact:!0,path:"/login",component:f(P,!1)}),r.a.createElement(o.a,{exact:!0,path:"/register",component:f(T,!1)}),r.a.createElement(o.a,{exact:!0,path:"/product/upload",component:f(J,!0)}))),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(86),Q=t(63),Y=t(253);function Z(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function ee(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Z(t,!0).forEach(function(a){Object(Y.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var ae=Object(Q.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return ee({},e,{register:a.payload});case m:return ee({},e,{loginSucces:a.payload});case d:return ee({},e,{userData:a.payload});case p:return ee({},e);default:return e}}}),te=t(254),ne=t.n(te),re=t(255),le=Object(Q.a)(ne.a,re.a)(Q.d);i.a.render(r.a.createElement(g.a,{store:le(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(K.a,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[259,1,2]]]);
//# sourceMappingURL=main.1c5c784b.chunk.js.map