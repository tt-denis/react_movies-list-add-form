(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),c=(i(14),i(8)),n=i(2),l=i(1),r=(i(15),i(9)),o=(i(16),i(17),i(0)),d=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,Object(r.a)({},e),e.imdbId)}))})},j=(i(19),function(e){var t=e.onAdd,i=Object(l.useState)(""),a=Object(n.a)(i,2),s=a[0],c=a[1],r=Object(l.useState)(""),d=Object(n.a)(r,2),m=d[0],j=d[1],b=Object(l.useState)(""),h=Object(n.a)(b,2),u=h[0],p=h[1],O=Object(l.useState)(""),g=Object(n.a)(O,2),v=g[0],x=g[1],f=Object(l.useState)(""),M=Object(n.a)(f,2),w=M[0],N=M[1],U=Object(l.useState)(!1),y=Object(n.a)(U,2),I=y[0],T=y[1],B=Object(l.useState)(!1),S=Object(n.a)(B,2),_=S[0],k=S[1],z=Object(l.useState)(!1),A=Object(n.a)(z,2),D=A[0],V=A[1],Y=Object(l.useState)(!1),F=Object(n.a)(Y,2),C=F[0],X=F[1],Z=Object(l.useState)(!1),E=Object(n.a)(Z,2),L=E[0],J=E[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"addTitle",children:"Add movies"}),Object(o.jsxs)("form",{className:"addForm",onSubmit:function(e){e.preventDefault(),T(!s),k(!m),V(!u),X(!v),J(!w),s&&m&&u&&v&&w&&(t({title:s,description:m,imgUrl:u,imdbUrl:v,imdbId:w}),c(""),j(""),p(""),x(""),N(""))},children:[Object(o.jsx)("input",{className:I?"error":"",type:"text",id:"title",name:"title",value:s,placeholder:"Title",onChange:function(e){c(e.target.value),T(!1)}}),Object(o.jsx)("input",{className:_?"error":"",type:"text",id:"description",name:"description",value:m,placeholder:"Description",onChange:function(e){j(e.target.value),k(!1)}}),Object(o.jsx)("input",{className:D?"error":"",type:"text",id:"imgUrl",name:"imgUrl",value:u,placeholder:"Img Url",onChange:function(e){p(e.target.value),X(!1)}}),Object(o.jsx)("input",{className:C?"error":"",type:"text",id:"imdbUrl",name:"imdbUrl",value:v,placeholder:"Imdb Url",onChange:function(e){x(e.target.value),J(!1)}}),Object(o.jsx)("input",{className:L?"error":"",type:"text",id:"imdbId",name:"imdbId",value:w,placeholder:"Imdb Id",onChange:function(e){N(e.target.value),J(!1)}}),Object(o.jsx)("button",{type:"submit",children:"Add"})]})]})}),b=i(7),h=function(){var e=Object(l.useState)(b),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(j,{onAdd:function(e){a([].concat(Object(c.a)(i),[e]))}})})]})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4e530b65.chunk.js.map