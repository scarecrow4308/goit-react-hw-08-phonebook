"use strict";(self.webpackChunk_2hw=self.webpackChunk_2hw||[]).push([[441],{2510:function(n,e,t){var r=t(8683),a=t(7496),o=t(9434),i=t(7689),s=t(184);e.Z=function(n,e){return function(t){return(0,o.v9)(a.PR)?(0,s.jsx)(i.Fg,{to:e}):(0,s.jsx)(n,(0,r.Z)({},t))}}},9441:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,o,i,s,l,c,d,u,p,x=t(9434),g=t(7496),h=t(9439),f=t(168),m=t(6444),b=t(1087),Z=m.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),w=m.ZP.form(a||(a=(0,f.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n"]))),v=m.ZP.label(o||(o=(0,f.Z)(["\n  display: block;\n  height: 66px;\n  font-weight: bold;\n  width: 300px;\n  color: ",";\n"])),(function(n){return null!==n&&void 0!==n&&n.passwordInvalid?"red":"black"})),j=m.ZP.label(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 26px;\n  gap: 10px;\n  font-weight: 400;\n  width: 150px;\n"]))),y=m.ZP.button(s||(s=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gray;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n\n  &:disabled {\n    cursor: default;\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n  }\n"]))),k=m.ZP.input(l||(l=(0,f.Z)(["\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n"]))),P=m.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n"]))),C=(0,m.ZP)(b.rU)(d||(d=(0,f.Z)(["\n  border: none;\n  border-radius: 4px;\n  color: black;\n  font-size: 18px;\n  cursor: pointer;\n\n  &:hover {\n    color: teal;\n    text-decoration: none;\n  }\n"]))),S=t(2791),z=t(184),L=function(n){var e=n.isLoading,t=(0,x.I0)(),r=(0,S.useState)(""),a=(0,h.Z)(r,2),o=a[0],i=a[1],s=(0,S.useState)(""),l=(0,h.Z)(s,2),c=l[0],d=l[1],u=(0,S.useState)(""),p=(0,h.Z)(u,2),f=p[0],m=p[1],b=(0,S.useState)(!1),L=(0,h.Z)(b,2),I=L[0],q=L[1],R=(0,S.useState)(!1),A=(0,h.Z)(R,2),E=A[0],F=A[1],_=function(n){var e=n.target,t=e.name,r=e.value;switch("password"===t&&(r.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)?q(!1):q(!0)),t){case"email":return d(r);case"password":return m(r);case"login":return i(r.toLowerCase());default:return}},B=f.length<8;return(0,z.jsx)(Z,{children:(0,z.jsxs)(w,{onSubmit:function(n){if(n.preventDefault(),!(f.length<8&&o.length<1&&c.length<3)){var e={name:o,email:c,password:f};t((0,g.y1)(e)),i(""),d(""),m("")}},autoComplete:"off",children:[(0,z.jsxs)(v,{children:["Login",(0,z.jsx)(k,{type:"text",name:"login",value:o,onChange:_,placeholder:"cooker229",required:!0})]}),(0,z.jsxs)(v,{children:["Email",(0,z.jsx)(k,{type:"email",name:"email",value:c,onChange:_,placeholder:"example@gmail.com",required:!0})]}),(0,z.jsxs)(v,{passwordInvalid:I,children:["Password",(0,z.jsx)(k,{type:"".concat(E?"text":"password"),title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",name:"password",value:f,onFocus:function(n){n.target.value.length<8&&n.target.value.length>=1?q(!0):q(!1)},onBlur:function(){return q(!1)},onChange:_,min:8,max:21,placeholder:"Enter min 8 symbols",required:!0})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)("input",{type:"checkbox",name:"check",onChange:function(){return F((function(n){return!n}))}}),"Check password"]}),(0,z.jsxs)(P,{children:[(0,z.jsx)(y,{type:"submit",disabled:e||!o||!c||B,children:"Register"}),(0,z.jsx)(C,{to:"/login",children:"LogIn"})]})]})})},I=t(2510),q=m.ZP.h1(u||(u=(0,f.Z)(["\n  // padding: 20px;\n  margin-bottom: 0;\n"]))),R=m.ZP.div(p||(p=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  width: 500px;\n  padding: 20px;\n  border: 1px solid black;\n"]))),A=(0,I.Z)((function(){var n=(0,x.v9)(g.Vc);return(0,z.jsxs)(R,{children:[(0,z.jsx)(q,{children:"Register Page"}),(0,z.jsx)(L,{isLoading:n})]})}),"/contacts")}}]);
//# sourceMappingURL=441.d49c2e91.chunk.js.map