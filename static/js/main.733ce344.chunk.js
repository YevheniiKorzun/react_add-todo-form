(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(4),n=a.n(i),s=a(3),r=a(5),l=a(6),o=a(8),c=a(7),d=a(1),u=a.n(d),h=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),m=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=a(0),b="qwertyuiopasdfghjklzxcvbnm ",g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={title:"",todos:m,selectedUser:null,selectValue:"",isUserSelected:!1,isTitleEntered:!1,showTitleFlag:!1,showUserSelectFlag:!1,isInputValid:!0},e.titleAddHandler=function(t){var a=t.replace(/[^a-z\u0430-\u044f\u0451\s]/gi,"");e.setState({isInputValid:!0}),t.split("").forEach((function(t){b.includes(t.toLowerCase())||e.setState({isInputValid:!1})})),e.setState({title:a,isTitleEntered:0!==t.length,showTitleFlag:!1})},e.selectUserHandler=function(t){var a=+t,i=h.find((function(e){return e.id===a}));if(i){var n={id:null===i||void 0===i?void 0:i.id,name:null===i||void 0===i?void 0:i.name};e.setState((function(e){return{selectedUser:n||e.selectedUser,selectValue:t,isUserSelected:!0,showUserSelectFlag:!1}}))}},e.addTodoHandler=function(){var t=e.state,a=t.title,i=t.todos,n=t.selectedUser,r=t.isUserSelected,l=t.isTitleEntered,o=i.map((function(e){return e.id})),c=Math.max.apply(Math,Object(s.a)(o))+1,d=l;if(e.setState({showTitleFlag:!0,showUserSelectFlag:!0,isInputValid:!0}),e.setState({title:a.trim()}),0===a.trim().length&&(e.setState({isTitleEntered:!1}),d=!1),n&&r&&d){var u={id:c,title:a,userId:null===n||void 0===n?void 0:n.id};e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[u])}}))}},e.clearForm=function(){e.setState({title:"",selectedUser:null,selectValue:"",isTitleEntered:!1,isUserSelected:!1,showTitleFlag:!1,showUserSelectFlag:!1,isInputValid:!0})},e.submit=function(t){t.preventDefault(),e.clearForm()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.todos,n=t.selectValue,s=t.isUserSelected,r=t.isTitleEntered,l=t.showTitleFlag,o=t.showUserSelectFlag,c=t.isInputValid;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{action:"#",method:"post",onSubmit:function(t){return e.submit(t)},id:"form",children:[Object(p.jsx)("p",{children:"Title:"}),Object(p.jsx)("input",{type:"text",value:a,onChange:function(t){return e.titleAddHandler(t.target.value)},placeholder:"Please enter a title...",required:!0,maxLength:20}),!c&&Object(p.jsx)("span",{children:"Use the correct characters: A-z \u0410-\u044f"}),20===a.length&&Object(p.jsx)("span",{children:"Max title length is ".concat(20," characters")}),l&&!r&&Object(p.jsx)("span",{children:"Please enter a title"}),Object(p.jsx)("p",{children:"User:"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"select",children:Object(p.jsxs)("select",{name:"select",id:"select",onChange:function(t){return e.selectUserHandler(t.target.value)},value:n,required:!0,children:[Object(p.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"---Choose user---"}),h.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})}),o&&!s&&Object(p.jsx)("span",{children:"Please choose the user"}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",onClick:this.addTodoHandler,children:"Add"})})]})]}),Object(p.jsx)("ol",{children:i.map((function(e){var t;return Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Task id: ".concat(e.id)}),Object(p.jsx)("p",{children:"Task title: ".concat(e.title)}),Object(p.jsx)("p",{children:"User: ".concat(null===(t=h.find((function(t){return t.id===e.userId})))||void 0===t?void 0:t.name)})]},e.id)}))})]})}}]),a}(u.a.PureComponent);n.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.733ce344.chunk.js.map