(window.webpackJsonpvirtualization=window.webpackJsonpvirtualization||[]).push([[0],{296:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),c=n.n(r),l=(n(97),n(81)),o=n(82),s=n(90),m=n(83),d=n(91),u=(n(98),n(99),n(84)),h=n(59),v=n(58),w=n.n(v),E=1e4,f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).renderRow=function(t){var n=t.index,a=t.key,r=t.style;return i.a.createElement("div",{onClick:function(){e.setState({name:e.list[n].city})},key:a,style:r,className:"row"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:e.list[n].image,alt:""})),i.a.createElement("div",{className:"content"},i.a.createElement("div",null,e.list[n].city),i.a.createElement("div",null,e.list[n].text)))},e.state={name:""},e.list=Array(E).fill().map((function(e,t){return{id:t,city:w.a.address.city(),name:w.a.name.findName(),image:"http://via.placeholder.com/40",text:Object(u.loremIpsum)({count:1,units:"sentences",sentenceLowerBound:4,sentenceUpperBound:8})}})),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:""},i.a.createElement("h1",null,"Large Data Front End Demo"),i.a.createElement("p",null,"Utilizes React List Virtualization to efficiently render 10,000 unit data set.")),i.a.createElement("div",{className:"grid-container"},i.a.createElement("div",{className:"list"},i.a.createElement(h.a,null,(function(t){var n=t.width,a=t.height;return i.a.createElement(h.b,{width:n,height:a,rowHeight:50,rowRenderer:e.renderRow,rowCount:e.list.length})}))),i.a.createElement("div",{className:"details"},i.a.createElement("h1",{id:"name"},"City:",this.state.name))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,t,n){e.exports=n(296)},97:function(e,t,n){},98:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},99:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.74a46a3c.chunk.js.map