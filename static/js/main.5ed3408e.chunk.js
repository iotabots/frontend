(this["webpackJsonpiotabots-frontend"]=this["webpackJsonpiotabots-frontend"]||[]).push([[0],{317:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},336:function(e,t,n){},362:function(e,t){},370:function(e,t,n){},385:function(e,t){},387:function(e,t){},391:function(e,t){},412:function(e,t){},414:function(e,t){},423:function(e,t){},425:function(e,t){},435:function(e,t){},437:function(e,t){},556:function(e,t){},558:function(e,t){},565:function(e,t){},566:function(e,t){},654:function(e,t,n){"use strict";n.r(t);var a=n(72),i=n.n(a),r=(n(336),n(322)),s=n(705),o=n(28),c=n(30),l=n(1),p=n(708),u=n(707),d=n(709),y=n(706),b=n(710),m=n(702),j=n(701),x=n(699),h=n(190),f=n.n(h),O=n(315),g=n.n(O),v=n(50),T=n(3);function w(){var e=l.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1],i=l.useState(null),r=Object(c.a)(i,2),s=r[0],o=r[1],h=Boolean(n),O=Boolean(s),w=function(){o(null)},B=function(){a(null),w()},M=Object(T.jsxs)(x.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:B,children:[Object(T.jsx)(j.a,{onClick:B,children:"Profile"}),Object(T.jsx)(j.a,{onClick:B,children:"My account"})]}),k="primary-search-account-menu-mobile",A=Object(T.jsxs)(x.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:w,children:[Object(T.jsx)(j.a,{children:Object(T.jsx)(v.b,{style:function(e){return{color:e.isActive?"#02c692":""}},to:"/",children:"Home"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(v.b,{style:function(e){return{color:e.isActive?"#02c692":""}},to:"/bots",children:"Bots"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(v.b,{style:function(e){return{color:e.isActive?"#02c692":""}},to:"/profile",children:"Profile"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(y.a,{target:"_blank",href:"https://twitter.com/iotabots",size:"large","aria-label":"show 1 new tweets",color:"inherit",children:Object(T.jsx)(m.a,{badgeContent:1,color:"error",children:Object(T.jsx)(f.a,{})})})})]});return Object(T.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(T.jsx)(p.a,{position:"static",children:Object(T.jsxs)(d.a,{children:[Object(T.jsx)(b.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"block",sm:"block"}},children:Object(T.jsx)(v.b,{className:"nav-link",to:"/",children:"IOTABOTS"})}),Object(T.jsx)(u.a,{sx:{flexGrow:1}}),Object(T.jsx)(u.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(T.jsx)(v.b,{style:function(e){return{color:e.isActive?"#02c692":""}},className:"nav-link",to:"/",children:"Home"})}),Object(T.jsx)(u.a,{sx:{display:{xs:"none",md:"flex"}},children:"|"}),Object(T.jsx)(u.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(T.jsx)(v.b,{style:function(e){return{color:e.isActive?"#02c692":""}},className:"nav-link",to:"/bots",children:"Bots"})}),Object(T.jsx)(u.a,{sx:{display:{xs:"none",md:"flex"}},children:"|"}),Object(T.jsx)(u.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(T.jsx)(v.b,{style:function(e){return{color:e.isActive?"#02c692":""}},className:"nav-link",to:"/profile",children:"Profile"})}),Object(T.jsx)(u.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(T.jsx)(y.a,{target:"_blank",href:"https://twitter.com/iotabots",size:"large","aria-label":"twitter",color:"inherit",children:Object(T.jsx)(m.a,{badgeContent:1,color:"error",children:Object(T.jsx)(f.a,{})})})}),Object(T.jsx)(u.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(T.jsx)(y.a,{size:"large","aria-label":"show more","aria-controls":k,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(T.jsx)(g.a,{})})})]})}),A,M]})}var B=n(711);function M(){function e(){return Object(T.jsxs)(b.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(B.a,{color:"inherit",href:"/",children:"iotabots.io"})," ",(new Date).getFullYear(),"."]})}return Object(T.jsxs)(u.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[Object(T.jsx)(b.a,{variant:"h6",align:"center",gutterBottom:!0,children:"*BEE* *BOB* *BOO*"}),Object(T.jsxs)(b.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:["Follow us on ",Object(T.jsx)("a",{href:"https://twitter.com/iotabots",children:"Twitter"})]}),Object(T.jsx)(e,{})]})}var k=n(714),A=n(716),I=n(715),C=n(712),F=n(704),E=n(697),S=n(713),_=function(e){var t=e.videoSource,n=e.children,a=e.blur;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("video",{style:{filter:"blur(".concat(a,"px)"),WebkitFilter:"blur(".concat(a,"px)")},autoPlay:!0,loop:!0,muted:!0,id:"video-id",className:"video",children:[Object(T.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}),n]})})};function N(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(C.a,{}),Object(T.jsx)(_,{blur:0,videoSource:"assets/TEASER.mp4",children:Object(T.jsx)("div",{className:"content",children:Object(T.jsxs)("div",{className:"sub-content",children:[Object(T.jsx)("h1",{children:"IOTABOTS"}),Object(T.jsx)("p",{children:"First PFP NFTs on IOTA"}),Object(T.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){var e=document.getElementById("what");e&&e.scrollIntoView({behavior:"smooth"})},children:"Let's go!"})]})})}),Object(T.jsxs)("main",{children:[Object(T.jsx)(u.a,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:Object(T.jsxs)(S.a,{id:"what",maxWidth:"sm",children:[Object(T.jsx)(b.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"IOTABOTS"}),Object(T.jsx)(b.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"*BEE* *BOB* *BOO*"}),Object(T.jsx)(b.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"On the 2nd November 2021, the first 500 IOTABOTS were minted for free on the public IOTA Smart Contracts EVM Testnet. More drops soon!"}),Object(T.jsx)(b.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"*BEE* *BOB* *BOO*"}),Object(T.jsx)(E.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center"})]})}),Object(T.jsxs)(S.a,{sx:{py:8},maxWidth:"md",children:[Object(T.jsx)(b.a,{component:"h1",variant:"h2",align:"center",color:"#fff",gutterBottom:!0,children:"Available Bots"}),Object(T.jsx)(F.a,{container:!0,spacing:4,children:[0,1,2,3,4,5].map((function(e,t){return Object(T.jsx)(F.a,{item:!0,xs:12,sm:6,md:4,children:Object(T.jsxs)(k.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(T.jsx)(I.a,{component:"img",sx:{},image:"http://assets.iotabots.io/".concat(t+1,".png"),alt:"IOTABOT"}),Object(T.jsx)(A.a,{sx:{flexGrow:1},children:Object(T.jsx)(b.a,{gutterBottom:!0,variant:"h6",component:"h3",children:"IOTABOT #".concat(t+1)})})]})},e)}))})]}),Object(T.jsx)(S.a,{sx:{py:8},maxWidth:"md",children:Object(T.jsx)(b.a,{align:"center",gutterBottom:!0,variant:"button",component:"h1",children:Object(T.jsx)(v.b,{to:"/bots",children:"Discover all 500 IOTABOTS"})})})]})]})}var D=n(7),W=n(8),P=n(10),U=n(9),z=n(316),L=function(e){Object(P.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={items:Array.from({length:20},(function(e,t){return t+1}))},e.fetchMoreData=function(){e.setState({items:e.state.items.concat(Array.from({length:20},(function(t,n){return n+1+e.state.items.length})))})},e}return Object(W.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(z.a,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",textAlign:"center",justifyContent:"center"},dataLength:this.state.items.length,next:this.fetchMoreData,hasMore:!(this.state.items.length>=500),loader:Object(T.jsx)("h4",{children:"Loading..."}),children:this.state.items.map((function(e,t){return Object(T.jsx)(F.a,{item:!0,xs:12,sm:6,md:4,children:Object(T.jsxs)(k.a,{children:[Object(T.jsx)(I.a,{height:"100%",component:"img",image:"http://assets.iotabots.io/".concat(t+1,".png"),alt:"IOTABOT"}),Object(T.jsx)(A.a,{sx:{flexGrow:1},children:Object(T.jsx)(b.a,{gutterBottom:!0,variant:"h6",component:"h3",children:"IOTABOT #".concat(t+1)})})]})},t)}))})})}}]),n}(l.Component);function R(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(C.a,{}),Object(T.jsx)("main",{children:Object(T.jsxs)(S.a,{sx:{py:8},maxWidth:"md",children:[Object(T.jsx)(b.a,{component:"h1",variant:"h2",align:"center",color:"#fff",gutterBottom:!0,children:"All IOTABOTS"}),Object(T.jsx)(L,{})]})})]})}var G=n(5),Y=n.n(G),J=n(122),H=n(143),V=n(193),q=n(317),K=new(n(323).a)({supportedChainIds:[1074]}),Q=n(717),X=n(318),Z=n.n(X),$="0x2f6EFb05Dd92Af605184199296979979379Ecbd3";function ee(){var e=Object(H.b)(),t=e.active,n=e.account,a=e.library,i=e.connector,r=e.activate,s=e.deactivate;Object(l.useEffect)((function(){t&&function(){h.apply(this,arguments)}()}),[t]);var o,p=Object(l.useState)([]),d=Object(c.a)(p,2),y=d[0],m=d[1],j=function(e){console.log("callback1",e)};function x(){return(x=Object(J.a)(Y.a.mark((function e(){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(K,j);case 3:a=e.sent,console.log("activated",a),console.log("activated",t),console.log("activated",n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(){return(h=Object(J.a)(Y.a.mark((function e(){var t,r,s,o;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("library",a),console.log("connector",i),t=new V.a.providers.Web3Provider(a.currentProvider),console.log("provider",t),r=new V.a.Contract($,q,t),console.log("contract",r),console.log("account",n),e.next=9,r.walletOfOwner(n);case 9:return s=e.sent,console.log("data:",s),e.next=13,Promise.all(s.map(function(){var e=Object(J.a)(Y.a.mark((function e(t){var n,a,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toNumber(),console.log("token_index:",n),e.next=4,r.tokenURI(n);case 4:return a=e.sent,console.log("metadata_url:",a),e.next=8,Z.a.get(a);case 8:return i=e.sent,console.log("metadata:",i),console.log("metadata:",i.data),e.abrupt("return",i.data);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 13:o=e.sent,console.log("items:",o),m(o),console.log("bots:",y);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(J.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s(),console.log("deactivated")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o=t?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("br",{}),Object(T.jsx)(S.a,{maxWidth:"sm",children:Object(T.jsxs)(u.a,{sx:{bgcolor:"#cfe8fc",padding:"10px",textAlign:"center"},children:[t?Object(T.jsxs)("span",{children:["Connected with ",Object(T.jsx)("b",{children:"".concat(n.substring(0,6),"...").concat(n.substring(n.length-4))})]}):Object(T.jsx)("span",{children:"Not connected"}),Object(T.jsx)(Q.a,{variant:"outlined",onClick:function(){return f.apply(this,arguments)},children:"Disconnect"})]})}),Object(T.jsx)("hr",{}),Object(T.jsx)("br",{}),Object(T.jsx)(b.a,{component:"h3",variant:"h3",align:"center",color:"#fff",gutterBottom:!0,children:"Your IOTABOTS:"}),Object(T.jsx)(S.a,{maxWidth:"sm",children:Object(T.jsx)(u.a,{sx:{textAlign:"center"},children:y.map((function(e,t){return Object(T.jsx)(F.a,{item:!0,xs:12,sm:12,md:12,children:Object(T.jsxs)(k.a,{children:[Object(T.jsx)(I.a,{height:"100%",component:"img",image:e.image,alt:"IOTABOT"}),Object(T.jsxs)(A.a,{sx:{flexGrow:1},children:[Object(T.jsx)(b.a,{gutterBottom:!0,variant:"h6",component:"h6",children:"IOTABOT ".concat(e.name)}),Object(T.jsx)(b.a,{gutterBottom:!0,variant:"body1",component:"p",children:"DNA ".concat(e.dna)}),Object(T.jsx)(b.a,{gutterBottom:!0,variant:"body1",component:"p",children:"Edition ".concat(e.edition)}),Object(T.jsx)(b.a,{gutterBottom:!0,variant:"body1",component:"p",children:"Created on ".concat(new Date(e.date).toLocaleDateString())})]})]})},t)}))})})]}):Object(T.jsx)(S.a,{maxWidth:"sm",children:Object(T.jsx)(u.a,{sx:{bgcolor:"#cfe8fc",padding:"10px",textAlign:"center"},children:Object(T.jsx)(Q.a,{variant:"outlined",onClick:function(){return x.apply(this,arguments)},children:"Connect to MetaMask"})})}),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(C.a,{}),Object(T.jsx)("main",{children:Object(T.jsxs)(S.a,{sx:{py:8},maxWidth:"md",children:[Object(T.jsx)(b.a,{component:"h1",variant:"h2",align:"center",color:"#fff",gutterBottom:!0,children:"Your Profile"}),o]})})]})}n(370);var te=n(321),ne=n.n(te);function ae(e){return new ne.a(e)}function ie(){var e=Object(r.a)({typography:{fontFamily:"coder"},palette:{primary:{light:"#757ce8",main:"#2b2b2b",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});return Object(T.jsx)(H.a,{getLibrary:ae,children:Object(T.jsxs)(s.a,{theme:e,children:[Object(T.jsx)(w,{}),Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"/",element:Object(T.jsx)(N,{})}),Object(T.jsx)(o.a,{path:"bots",element:Object(T.jsx)(R,{})}),Object(T.jsx)(o.a,{path:"profile",element:Object(T.jsx)(ee,{})})]}),Object(T.jsx)(M,{})]})})}var re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,719)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};i.a.render(Object(T.jsx)(v.a,{children:Object(T.jsx)(ie,{})}),document.getElementById("root")),re()}},[[654,1,2]]]);
//# sourceMappingURL=main.5ed3408e.chunk.js.map