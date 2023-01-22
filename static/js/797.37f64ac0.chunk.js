"use strict";(self.webpackChunk_2hw=self.webpackChunk_2hw||[]).push([[797],{9625:function(n,e,t){var r=t(8683),a=t(7496),o=t(9434),i=t(7689),s=t(184);e.Z=function(n,e){return function(t){return(0,o.v9)(a.PR)?(0,s.jsx)(n,(0,r.Z)({},t)):(0,s.jsx)(i.Fg,{to:e})}}},8797:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,o,i,s,c,d,l,u,p,x,m=t(2791),h=t(9434),f=t(3661),b=t(168),g=t(6444),v=g.ZP.form(r||(r=(0,b.Z)(["\n  min-width: 200px;\n  width: 50%;\n  padding: 10px;\n  border: 1px solid black;\n"]))),j=g.ZP.button(a||(a=(0,b.Z)(["\n  padding: 2px 10px;\n  border: 0;\n  border-radius: 5px;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  :hover {\n    background-color: blue;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),Z=g.ZP.label(o||(o=(0,b.Z)(["\n  display: block;\n"]))),y=g.ZP.input(i||(i=(0,b.Z)(["\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),w=t(184),C=function(){var n=(0,h.I0)(),e=(0,h.v9)(f.K2);return(0,w.jsxs)(v,{onSubmit:function(t){t.preventDefault();var r=t.target.elements,a=r.name,o=r.number;if(e.find((function(n){return n.name.toLowerCase().includes(a.value.toLowerCase())})))alert("".concat(a.value," is already in contacts!"));else{var i={name:a.value,number:o.value.toString()};n((0,f.uK)(i)),o.value="",a.value=""}},children:[(0,w.jsxs)(Z,{children:["Name:",(0,w.jsx)(y,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(Z,{children:["Tel:",(0,w.jsx)(y,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(j,{type:"submit",children:"Add contact"})]})},k=function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(C,{})]})},P=t(9439),z=g.ZP.li(s||(s=(0,b.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 5px;\n"]))),A=function(n){var e=n.name,t=n.number,r=n.onDelete,a=n.id,o=n.onEdit;return(0,w.jsxs)(z,{children:[e,": ",t,(0,w.jsx)(j,{type:"button",onClick:function(){return r(a)},children:"Delete"}),(0,w.jsx)(j,{type:"button",onClick:function(){return o({name:e,number:t,id:a})},children:"Edit"})]})},F=g.ZP.ul(c||(c=(0,b.Z)(["\n  padding: 0;\n"]))),E=t(4164),S=g.ZP.div(d||(d=(0,b.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),I=g.ZP.div(l||(l=(0,b.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-height: 330px;\n  max-width: 550px;\n  width: 100%;\n  padding: 12px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n"]))),L=document.querySelector("#modal-root"),D=function(n){var e=n.closeModal,t=n.modalIsOpened,r=n.children;(0,m.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[t]);var a=function(n){"Escape"===n.code&&e()};return(0,E.createPortal)((0,w.jsx)(S,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,w.jsx)(I,{children:r})}),L)},M=g.ZP.form(u||(u=(0,b.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n"]))),K=g.ZP.label(p||(p=(0,b.Z)(["\n  display: flex;\n  flex-display: column;\n  gap: 5px;\n"]))),N=g.ZP.button(x||(x=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gray;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n\n  &:disabled {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n  }\n"]))),q=function(n){var e=n.prevContact,t=n.handleModal,r=(0,h.I0)(),a=(0,m.useState)(""),o=(0,P.Z)(a,2),i=o[0],s=o[1],c=(0,m.useState)(""),d=(0,P.Z)(c,2),l=d[0],u=d[1];(0,m.useEffect)((function(){s(e.name),u(e.number)}),[]);var p=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return s(r);case"number":return u(r);default:return}};return(0,w.jsxs)(M,{onSubmit:function(n){n.preventDefault();var a={formData:{name:i,number:l},id:e.id};r((0,f.mP)(a)),s(""),u(""),t()},children:[(0,w.jsxs)(K,{children:["Name:",(0,w.jsx)("input",{type:"name",name:"name",value:i,onChange:p})]}),(0,w.jsxs)(K,{children:["Number:",(0,w.jsx)("input",{type:"text",name:"number",value:l,onChange:p})]}),(0,w.jsx)(N,{type:"submit",children:"Edit"})]})},T=function(n){var e=n.onFilterSearch,t=n.filter,r=(0,h.v9)(f.K2),a=(0,h.I0)(),o=(0,m.useState)(!1),i=(0,P.Z)(o,2),s=i[0],c=i[1],d=(0,m.useState)({}),l=(0,P.Z)(d,2),u=l[0],p=l[1],x=function(n){a((0,f.zY)(n));var e=r.filter((function(e){return e.id!==n}));a((0,f.GK)(e))},b=function(n){c((function(n){return!n})),p(n)},g=r.filter((function(n){return n.name.toLowerCase().startsWith(t.toLowerCase())})).map((function(n){var e=n.name,t=n.id,r=n.number;return(0,w.jsx)(A,{name:e,id:t,number:r,onDelete:x,onEdit:b},t)}));return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsxs)(Z,{children:["Find contacts by name",(0,w.jsx)(y,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:e,value:t})]}),(0,w.jsx)(F,{children:g}),s&&(0,w.jsx)(D,{closeModal:b,modalIsOpened:s,children:(0,w.jsx)(q,{prevContact:u,handleModal:b})})]})},B=t(2634),J=t(7496),O=(0,t(9625).Z)((function(){var n=(0,h.v9)(f.zK),e=(0,h.I0)(),t=(0,h.v9)(J.PR);(0,m.useEffect)((function(){t&&e((0,f.yF)())}),[]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(B.W,{children:t?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{}),(0,w.jsx)(T,{onFilterSearch:function(n){e((0,f.Tv)(n.target.value))},filter:n})]}):(0,w.jsx)("h1",{children:" Log In to get access to ur contacts"})})})}),"/login")}}]);
//# sourceMappingURL=797.37f64ac0.chunk.js.map