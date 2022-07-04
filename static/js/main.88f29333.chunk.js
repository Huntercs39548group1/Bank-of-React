(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{49:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(40),s=n.n(a),i=(n(49),n(41)),o=n(17),u=n(9),j=n(10),b=n(11),d=n(12),l=n(27),O=n.n(l),h=n(4),p=n(2),m=n(28),x=n.n(m),f=n(0),v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),g=v,D=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(f.jsx)("h1",{children:"Bank of React"}),Object(f.jsx)(h.b,{to:"/userProfile",children:"User Profile"}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/login",children:"Login"}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(g,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),S=D,C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"User Profile"}),Object(f.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(f.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),B=C,k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(o.a)({},e.state.user),c=t.target.name,r=t.target.value;n[c]=r,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(j.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(f.jsx)(p.a,{to:"/userProfile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(f.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",name:"password"})]}),Object(f.jsx)("button",{children:"Log In"})]})]})}}]),n}(c.Component),y=n(16),Y=n(13),F=n(78),N=n(24),w=n(15),M=n.n(w),U=function(e){var t=e.creditData,n=e.accountBalance,r=e.setState,a=Object(c.useState)(Object(y.a)(t)),s=Object(Y.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(""),j=Object(Y.a)(u,2),b=j[0],d=j[1],l=Object(c.useState)(""),O=Object(Y.a)(l,2),p=O[0],m=O[1];console.log("totalCredit",i);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Credits"}),function(){if(Object(N.isArray)(i))return i.map((function(e){return Object(f.jsxs)("li",{children:[" ",e.amount," ",e.description," ",M()(e.date).format("YYYY-MM-DD")]},e.id)}))}(),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object(F.a)(),description:b,amount:p,date:M()(new Date).format("YYYY-MM-DD")};o([].concat(Object(y.a)(i),[n])),r(i),t.push(n),d(""),m("")},children:[Object(f.jsxs)("div",{children:["Description:",Object(f.jsx)("input",{type:"description",name:"description",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(f.jsxs)("div",{children:["Credit:",Object(f.jsx)("input",{type:"credits",name:"credits",value:p,onChange:function(e){return m(e.target.value)}})]}),Object(f.jsx)("button",{children:"Add credit"})]}),Object(f.jsx)("div",{children:Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})}),Object(f.jsx)(g,{accountBalance:n})]})},L=function(e){var t=e.debitData,n=e.accountBalance,r=e.setState,a=Object(c.useState)(Object(y.a)(t)),s=Object(Y.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(""),j=Object(Y.a)(u,2),b=j[0],d=j[1],l=Object(c.useState)(0),O=Object(Y.a)(l,2),p=O[0],m=O[1],x=Object(c.useRef)(!0);return Object(c.useEffect)((function(){x.current?x.current=!1:r(i)}),[i,r]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Debits"}),function(){if(Object(N.isArray)(i))return i.map((function(e){return Object(f.jsxs)("li",{children:[" ",e.amount," ",e.description," ",M()(e.date).format("YYYY-MM-DD")]},e.id)}))}(),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object(F.a)(),description:b,amount:p,date:M()(new Date).format("YYYY-MM-DD")};o([].concat(Object(y.a)(i),[n])),t.push(n)},children:[Object(f.jsxs)("div",{children:["Description:",Object(f.jsx)("input",{type:"description",name:"description",required:"required",placeholder:"Enter a description",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(f.jsxs)("div",{children:["Debit:",Object(f.jsx)("input",{type:"debits",name:"debits",value:p,onChange:function(e){return m(e.target.value)}})]}),Object(f.jsx)("button",{children:"Add debit"})]}),Object(f.jsx)("div",{children:Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})}),Object(f.jsx)(g,{accountBalance:n})]})},A=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.sendCredit=function(t){e.setState(Object(o.a)(Object(o.a)({},e.state.creditData),{},{newCredit:t}))},e.sendDebit=function(t,n){if(void 0===t)e.setState((function(){return{accountBalance:n}}));else if(t&&t.length>0){var c=t[t.length-1];e.setState((function(e){return{prevState:e,accountBalance:e.accountBalance-Number(c.amount)}}))}},e.state={accountBalance:1234567.89,currentUser:{userName:"Joe Smith",memberSince:"11/22/99"},creditData:[],debitData:[]},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(O.a.mark((function e(){var t,n,c,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/credits",t="https://moj-api.herokuapp.com/debits",e.prev=2,e.next=5,x.a.get("https://moj-api.herokuapp.com/credits");case 5:return n=e.sent,e.next=8,x.a.get(t);case 8:for(c=e.sent,console.log(n),r=0;r<n.data.length;r++)this.state.creditData.push(n.data[r]);for(console.log(c),a=0;a<c.data.length;a++)this.state.debitData.push(c.data[a]);e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),e.t0.responseForCredit&&(console.log(e.t0.responseForCredit.data),console.log(e.t0.responseForCredit.status)),e.t0.responseForDebit&&(console.log(e.t0.responseForDebit.data),console.log(e.t0.responseForDebit.status));case 19:case"end":return e.stop()}}),e,this,[[2,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsx)(h.a,{basename:"/BANK-OF-REACT/",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(S,{accountBalance:e.state.accountBalance})}}),Object(f.jsx)(p.b,{exact:!0,path:"/userProfile",render:function(){return Object(f.jsx)(B,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(f.jsx)(p.b,{exact:!0,path:"/login",render:function(){return Object(f.jsx)(k,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(f.jsx)(p.b,{exact:!0,path:"/credits",render:function(){return Object(f.jsx)(U,{creditData:e.state.creditData,accountBalance:e.state.accountBalance,setState:e.sendCredit})}}),Object(f.jsx)(p.b,{exact:!0,path:"/debits",render:function(){return Object(f.jsx)(L,{debitData:e.state.debitData,accountBalance:e.state.accountBalance,setState:e.sendDebit})}})]})})}}]),n}(c.Component),P=A,I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),I()}},[[77,1,2]]]);
//# sourceMappingURL=main.88f29333.chunk.js.map