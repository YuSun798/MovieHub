(this.webpackJsonpmoviehub=this.webpackJsonpmoviehub||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=(n(10),n(3)),o=n(2),j=(n(11),n(0)),u=function(e){return Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("h2",{children:e.text})})},l=function(e){var t=e.movie,n="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("h2",{children:t.Title}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:n})}),Object(j.jsxs)("p",{children:["(",t.Year,")"]})]})},b=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(j.jsxs)("form",{className:"search",children:[Object(j.jsx)("input",{value:a,onChange:function(e){r(e.target.value)},type:"text"}),Object(j.jsx)("input",{onClick:function(t){t.preventDefault(),e.search(a),r("")},type:"submit",value:"SEARCH"})]})},h={loading:!0,movies:[],errorMessage:null},d=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(o.a)(Object(o.a)({},e),{},{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}},O=function(){var e=Object(c.useReducer)(d,h),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){a({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var r=n.movies,s=n.errorMessage,o=n.loading;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{text:"MOVIE HUB"}),Object(j.jsx)(b,{search:function(e){a({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?a({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):a({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),Object(j.jsx)("p",{className:"App-intro",children:"Sharing a few of our favourite movies"}),Object(j.jsx)("div",{className:"movies",children:o&&!s?Object(j.jsx)("span",{children:"loading... "}):s?Object(j.jsx)("div",{className:"errorMessage",children:s}):r.map((function(e,t){return Object(j.jsx)(l,{movie:e},"".concat(t,"-").concat(e.Title))}))})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.032f127b.chunk.js.map