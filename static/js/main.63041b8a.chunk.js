(this["webpackJsonpgithub-finder-app"]=this["webpackJsonpgithub-finder-app"]||[]).push([[0],{64:function(e,t,a){e.exports=a(95)},69:function(e,t,a){},75:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),l=a(29),i=a(110),s=a(112),u=a(113),m=a(114),p=a(115),d=(a(69),a(19)),g=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),linkText:{color:"#FFF",textDecoration:"none",textTransform:"capitalize",fontSize:"16px"},pageLogo:{color:"#FFF",textDecoration:"none"}}})),E=r.a.memo((function(e){var t=e.icon,a=e.title,n=g();return r.a.createElement("div",{className:n.root},r.a.createElement(s.a,{position:"fixed"},r.a.createElement(u.a,null,r.a.createElement("i",{className:t}),r.a.createElement(m.a,{className:n.title,variant:"h6",noWrap:!0},r.a.createElement(d.b,{to:"/githubFinder",className:n.pageLogo},a)),r.a.createElement(p.a,{color:"inherit"},r.a.createElement(d.b,{className:n.linkText,color:"inherit",to:"/about"},"About")),r.a.createElement(p.a,{color:"inherit"},r.a.createElement(d.b,{className:n.linkText,color:"inherit",to:"/contact"},"Contact")))))})),f=(a(75),Object(i.a)((function(e){return{footer:{paddingTop:e.spacing(6),paddingBottom:e.spacing(2),clear:"both"},text:{fontSize:"1rem"}}}))),b=function(e){var t=e.title,a=f();return r.a.createElement("footer",{className:a.footer},r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center",className:a.text},"Copyright \xa9 ",t," ",(new Date).getFullYear(),"."))},h=a(7),v=a(116),x=Object(i.a)((function(e){return{cardContent:{paddingTop:e.spacing(12),paddingBottom:e.spacing(4)}}})),_=function(){var e=x();return r.a.createElement(v.a,{className:e.cardContent,maxWidth:"md"},r.a.createElement("h1",null,"About Page"),r.a.createElement("br",null),r.a.createElement("p",null,"Github User Finder, this app is built for learning react js, by following the tutorials and understanding the basics fundamentals of the React Js and Material UI"),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 0.1"),r.a.createElement("p",null,"This Project was built using the React class based components using the lifecycle Methods for calling the Api and displaying the Users List. This was later refactored into React function based components."," "),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 0.2"),r.a.createElement("p",null,"Added The Top Repos components where the top 9 repos are displayed"))},y=Object(i.a)((function(e){return{cardContent:{paddingTop:e.spacing(12),paddingBottom:e.spacing(4)},social:{width:"100%",justifyContent:"center",alignItems:"center",paddingTop:e.spacing(2)},github:{color:"#211F1F",display:"inline-block"},linkedIn:{color:"#0e76a8",display:"inline-block"},gmail:{color:"#D44638",display:"inline-block"}}})),C=function(){var e=y();return r.a.createElement(v.a,{className:e.cardContent,maxWidth:"md"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement("div",{className:e.social},r.a.createElement("a",{href:"https://github.com/omkar-28",className:e.github},r.a.createElement("i",{className:"fa fa-github"}))," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/omkar-khatavkar-bb7051117/",className:e.linkedIn},r.a.createElement("i",{className:"fa fa-linkedin"}))," ",r.a.createElement("a",{href:"mailto:omikhatavkar2@gmail.com",className:e.gmail},r.a.createElement("i",{className:"fa fa-google"}))))},T=a(9),O=a.n(T),j=a(20),N=a(23),S=a(121),w=a(117),k=a(118),R=a(119),I=a(120),D=a(51),F=a.n(D),B=a(52),U=a.n(B),L=Object(i.a)({card:{display:"flex",justifyContent:"space-evenly",marginBottom:"20px"},cardDetails:{flex:1},cardMedia:{width:"260px",height:"260px",borderRadius:"50%",margin:"auto",padding:"15px"},green:{color:"green"},userDetail:{marginTop:"15px",marginBottom:"5px"},mb:{marginBottom:"5px"},buttons:{padding:"20px 15px",marginTop:"10px",display:"flex",alignItems:"center",flex:"1",justifyContent:"space-evenly"}});var A,P,G=function(e){var t=e.name,a=e.hireable,c=e.bio,o=e.avatar_url,l=e.login,i=e.company,s=e.blog,u=e.followers,d=e.following,g=e.public_repos,E=e.public_gists,f=e.html_url,b=L();return r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(k.a,{className:b.card},r.a.createElement("div",{className:b.cardDetails},r.a.createElement(R.a,null,r.a.createElement(m.a,{component:"h2",variant:"h5"},t),r.a.createElement(m.a,{variant:"subtitle1",color:"textSecondary",style:{display:"flex",alignItems:"center"}},r.a.createElement("strong",null,"hireable:")," ",a?r.a.createElement(F.a,{color:"action"}):r.a.createElement(U.a,{color:"action"})),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0},c),r.a.createElement(p.a,{variant:"contained",color:"primary",href:f},"Visit Github Profile"),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0,className:b.userDetail},r.a.createElement("strong",null,"Username:")," ",l),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0,className:b.mb},i&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Company:")," ",i)),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0,className:b.mb},s&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Website:")," ",s)))),r.a.createElement(I.a,{className:b.cardMedia,src:o,title:l,component:"img"})),r.a.createElement(k.a,{className:b.card},r.a.createElement("div",{className:b.buttons},r.a.createElement(p.a,{variant:"contained",color:"primary"},"Followers : ",u),r.a.createElement(p.a,{variant:"contained",color:"secondary"},"Following : ",d),r.a.createElement(p.a,{variant:"contained",color:"primary"},"Public Repos : ",g),r.a.createElement(p.a,{variant:"contained"},"Public Gists : ",E))))},H=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},"Loading..."))},W=Object(n.createContext)(),z=function(e){var t=e.topRepos,a=Object(n.useState)([]),c=Object(N.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){t.length&&i("star")}),[]);var i=function(e){var a={stars:"stargazers_count",forks:"forks_count",size:"size"}[e],n=t.filter((function(e){return!e.fork})).sort((function(e,t){return t[a]-e[a]})).slice(0,9);l(n)};console.log(o);var s=M();return r.a.createElement("div",null,r.a.createElement(w.a,{container:!0,spacing:4},o.length?r.a.createElement(n.Fragment,null,o.map((function(e){return r.a.createElement(w.a,{item:!0,xs:12,sm:6,md:6,key:e.id},r.a.createElement("a",{href:e.html_url,target:"blank",className:s.links},r.a.createElement(k.a,{className:s.root},r.a.createElement(R.a,null,r.a.createElement(m.a,{variant:"h5",component:"h2"},e.name),r.a.createElement(m.a,{variant:"body2",component:"p"},e.description)),r.a.createElement(R.a,{className:s.repoDetails},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-star-o","aria-hidden":"true"}," ",e.stargazers_count),r.a.createElement("i",{className:"fa fa-code-fork","aria-hidden":"true"}," ",e.forks_count)),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-code","aria-hidden":"true"}," ",e.language))))))}))):r.a.createElement("h2",null,"No repos Found")))},M=Object(i.a)((function(e){return{root:{minHeight:185,display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 7px 30px -10px rgba(150,170,180,0.5)","& i":{fontSize:"16px",marginRight:"15px"}},links:{color:"inherit",textDecoration:"none"},media:{height:140},TopRepos:{paddingBottom:"20px"},title:{fontSize:14},pos:{marginBottom:12},repoDetails:{display:"flex",justifyContent:"space-between",alignItems:"center"}}})),K=a(33),V=a.n(K);A=Object({NODE_ENV:"production",PUBLIC_URL:"/githubFinder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_CLIENT_ID:"5e39feebfec11bdede8a",REACT_APP_GITHUB_CLIENT_SECRET:"73cd5ea7f2258c7c80400afb797c3bb4e43cb41d"}).GITHUB_CLIENT_ID,P=Object({NODE_ENV:"production",PUBLIC_URL:"/githubFinder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_CLIENT_ID:"5e39feebfec11bdede8a",REACT_APP_GITHUB_CLIENT_SECRET:"73cd5ea7f2258c7c80400afb797c3bb4e43cb41d"}).GITHUB_CLIENT_SECRET;var J="https://api.github.com/users?client_id=".concat(A,"&client_secret=").concat(P),X=function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=J,t&&(a="https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(A,"&client_secret=").concat(P)),e.prev=2,e.next=5,V.a.get(a);case 5:return n=e.sent,r=n.data,e.abrupt("return",r.items?r.items:r);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://api.github.com/users/".concat(t,"?client_id=").concat(A,"&client_secret=").concat(P),e.next=4,V.a.get(a);case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=100&client_id=").concat(A,"&client_secret=").concat(P));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Q=Object(i.a)((function(e){return{cardContent:{paddingTop:e.spacing(12),paddingBottom:e.spacing(4)},backButton:{marginBottom:e.spacing(3)},topRepo:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}})),Z=r.a.memo((function(e){var t=e.match,a=Object(n.useContext)(W),c=a.user,o=a.getUser,l=a.loading,i=Object(n.useState)([]),s=Object(N.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){o(t.params.login),p(t.params.login)}),[]);var p=function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Q(),E=c.name,f=c.company,b=c.avatar_url,h=c.bio,x=c.blog,_=c.login,y=c.html_url,C=c.followers,T=c.following,w=c.public_repos,k=c.public_gists,R=c.hireable;return r.a.createElement(v.a,{className:g.cardContent,maxWidth:"md"},r.a.createElement(S.a,{variant:"extended",className:g.backButton},r.a.createElement(d.b,{to:"/githubFinder",style:{color:"#333",textTransform:"uppercase",textDecoration:"none"}},"Back to Search")),l?r.a.createElement(H,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{name:E,hireable:R,bio:h,avatar_url:b,login:_,company:f,blog:x,followers:C,following:T,public_repos:w,public_gists:k,html_url:y}),r.a.createElement("h2",{className:g.topRepo},"Top Repos"),u.length>0&&r.a.createElement(z,{topRepos:u})))})),$=a(14),ee=function(e,t){switch(t.type){case"SEARCH_USERS":return Object($.a)(Object($.a)({},e),{},{users:t.payload,loading:!1,Clear:!0});case"GET_USERS":return Object($.a)(Object($.a)({},e),{},{users:t.payload,loading:!1});case"GET_USER":return Object($.a)(Object($.a)({},e),{},{user:t.payload,loading:!1,Clear:!0});case"SET_LOADING":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"CLEAR_TEXT":return Object($.a)(Object($.a)({},e),{},{text:""});case"CLEAR_USERS":return Object($.a)(Object($.a)({},e),{},{users:[],Clear:!1,text:""});default:return}},te=a(53),ae=a(54),ne=a(56),re=a(55),ce=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(ae.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{style:{textAlign:"center",margin:"20px auto"}},"Something went wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component),oe=function(e){var t=Object(n.useReducer)(ee,{users:[],user:{},loading:!1,text:"",Clear:!1}),a=Object(N.a)(t,2),c=a[0],o=a[1],l=function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,X(t);case 3:a=e.sent,o({type:"SEARCH_USERS",payload:a}),m();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,q(t);case 3:a=e.sent,o({type:"GET_USER",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(j.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,X();case 3:t=e.sent,o({type:"GET_USERS",payload:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){return o({type:"SET_LOADING"})},m=function(){return o({type:"CLEAR_TEXT"})};return r.a.createElement(W.Provider,{value:{users:c.users,user:c.user,loading:c.loading,Clear:c.Clear,text:c.text,getUserList:s,inputHandler:l,getUser:i,clearSearch:function(){return o({type:"CLEAR_USERS",payload:c.users})},setText:m}},r.a.createElement(ce,null,e.children))},le=Object(i.a)((function(e){return{cardContent:{paddingTop:e.spacing(12),paddingBottom:e.spacing(4)}}})),ie=function(){var e=le();return r.a.createElement(v.a,{className:e.cardContent,maxWidth:"md"},r.a.createElement("h1",null,"Page Not Found"))},se=a(123),ue=Object(i.a)((function(e){return{search:{position:"relative",borderRadius:e.shape.borderRadius,paddingTop:e.spacing(12),marginLeft:0,width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},inputInput:{padding:e.spacing(2,2,2,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),background:"#f5f5f5",width:"100%"}}})),me=function(){var e=Object(n.useContext)(W),t=e.Clear,a=e.clearSearch,c=Object(n.useState)(""),o=Object(N.a)(c,2),l=o[0],i=o[1],s=ue();return r.a.createElement(v.a,{className:s.cardContent,maxWidth:"md"},r.a.createElement("div",{className:s.search},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.inputHandler(l),i("")}},r.a.createElement(se.a,{placeholder:"Search\u2026",classes:{root:s.inputRoot,input:s.inputInput},inputProps:{"aria-label":"search"},value:l,onChange:function(e){return i(e.target.value)}})),t?r.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:a},"Clear"):""))},pe=a(122),de=Object(i.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},CardContent:{flexGrow:1}}})),ge=function(e){var t=e.user,a=t.login,n=t.avatar_url,c=(t.html_url,t.type),o=(t.email,t.hireable,de());return r.a.createElement(w.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(k.a,{className:o.card},r.a.createElement(I.a,{className:o.cardMedia,image:n,title:a}),r.a.createElement(R.a,{className:o.cardContent},r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement(m.a,null,r.a.createElement("b",null,"Type:")," ",c)),r.a.createElement(pe.a,null,r.a.createElement(p.a,null,r.a.createElement(d.b,{to:"/user/".concat(a),style:{color:"blue",textDecoration:"none"}},"More")))))},Ee=Object(i.a)((function(e){return{cardContent:{paddingTop:e.spacing(6),paddingBottom:e.spacing(4)}}})),fe=function(e){var t=Object(n.useContext)(W),a=t.loading,c=t.users,o=t.getUserList;Object(n.useEffect)((function(){o()}),[]);var l=Ee();return r.a.createElement(ce,null,r.a.createElement(v.a,{className:l.cardContent,maxWidth:"md"},a?r.a.createElement(H,null):r.a.createElement(w.a,{container:!0,spacing:4},c.map((function(e){return r.a.createElement(ge,{key:e.id,user:e})})))))},be=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(me,null),r.a.createElement(fe,null))},he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,r.a.createElement(d.a,null,r.a.createElement(E,{title:"Github Finder",icon:"fa fa-github"}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/githubFinder",component:be}),r.a.createElement(h.a,{exact:!0,path:"/about",component:_}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:C}),r.a.createElement(h.a,{exact:!0,path:"/user/:login",component:Z}),r.a.createElement(h.a,{component:ie})),r.a.createElement(b,{title:"Github Finder"}))))};o.a.render(r.a.createElement(he,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.63041b8a.chunk.js.map