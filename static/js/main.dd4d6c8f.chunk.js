(this["webpackJsonpproto-project"]=this["webpackJsonpproto-project"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/pexels2.dd42dee5.jpeg"},31:function(e,t,a){e.exports=a.p+"static/media/profile.4a6fe626.jpg"},35:function(e,t,a){e.exports=a(52)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/pexel1.beee7f66.jpeg"},52:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(18),l=a.n(r),c=(a(40),a(6)),s=a(7),o=a(10),u=a(8),m=a(11),p=(a(41),a(42),a(16)),d=(a(43),a(20)),E=a.n(d),v=a(9);var f=function(e){var t=e.text,a=e.children,n=e.caption;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ShowCaseButton"},a,i.a.createElement("br",null),t,i.a.createElement("br",null),i.a.createElement("span",null,n)))},h=a(29),b=a(30),g=function(){return i.a.createElement("div",{className:"ShowCase"},i.a.createElement("h2",{id:"herosub"},"E momentul sa"),i.a.createElement("div",{className:"hr"}),i.a.createElement("h1",{id:"herotitle"},"facem spitale in romania"),i.a.createElement("p",null,"Nimeni nu se trateaza cu promisiuni"),i.a.createElement("div",null,i.a.createElement(f,{text:"Implica-te",caption:"text text text"},i.a.createElement(h.a,null)),i.a.createElement(f,{text:"Spune-ne!",caption:"text text text"},i.a.createElement(b.a,null))))},x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"herocontainer"},i.a.createElement("div",{className:"navbar"},i.a.createElement("p",null,"LOGO"),i.a.createElement("ul",null,i.a.createElement("li",null,"Initiativa"),i.a.createElement("li",null,i.a.createElement(v.b,{to:"/situatie"},"Situatie")),i.a.createElement("li",null,"Despre"),i.a.createElement("li",{id:"doneaza"},"Doneaza"))),i.a.createElement("div",null,i.a.createElement(g,null)))}}]),t}(n.Component),N=(n.Component,n.Component,a(31)),j=a.n(N),q=a(23),O=(n.Component,a(12)),y=(n.Component,a(54)),C=a(53),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={orase:[{nume:"Iasi",procentaj:"41%",locale:[["Ordonanta de functionare","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio!"]],finantare:[["Arobarea bugetului","Guvernula a aprobat bugetul pentru constructia spitalului regional de la Iasi"],["Punct de lucru Pentru Buget","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quo eaque omnis cumque quis veniam eveniet ipsam praesentium porro commodi."]],id:1},{nume:"Bucuresti",procentaj:"10%",locale:[["Ordonanta de functionare","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio!"]],finantare:[["Arobarea bugetului","Guvernula a aprobat bugetul pentru constructia spitalului regional de la Iasi"]],id:2}],selected:1},a.handleChange=function(e){a.setState({selected:e.target.value})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.orase.find((function(t){return t.id==e.state.selected}));return i.a.createElement("div",{className:"sitform"},i.a.createElement("p",{className:"sith1"},"SPITALE REGIONALE"),i.a.createElement("select",{value:this.state.selected,onChange:this.handleChange},this.state.orase.map((function(e){return i.a.createElement("option",{key:e.id,value:e.id},e.nume)}))),i.a.createElement("div",{className:"select-result"},i.a.createElement("div",{id:"city-cont"},i.a.createElement("p",{id:"city"},t.nume,"-"),i.a.createElement("div",{id:"butwidget"},i.a.createElement("button",null,"Doneaza"),i.a.createElement("br",null),i.a.createElement("p",{className:"sub"},"Sustine constructia spitalului in orasul tau"))),i.a.createElement("div",{className:"sit-meta"},i.a.createElement("p",null,"Finantare"),t.finantare.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,e[0]),i.a.createElement("p",{className:"sub"},e[1]))}))),i.a.createElement("div",{className:"sit-meta"},i.a.createElement("p",null,"Locale"),t.locale.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,e[0]),i.a.createElement("p",{className:"sub"},e[1]))}))),i.a.createElement("div",{className:"sit-meta"},i.a.createElement("p",null,"Etapa spital"),i.a.createElement("p",{className:"pro"},t.procentaj))))}}]),t}(n.Component),w=function(){return i.a.createElement("div",{className:"cntr"},i.a.createElement("div",{className:"sitheader"},i.a.createElement("p",null,"de ce nu mai putem astepta"),i.a.createElement("div",{className:"sithr"})),i.a.createElement("div",{className:"sitmid"},i.a.createElement("div",{className:"heading"},"romania are nevoie de spitale acum!"),i.a.createElement("div",{className:"sittext1"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos accusamus possimus voluptatem excepturi velit atque maiores est ullam? Eius."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt, fugit, ipsum iste aspernatur cum consequatur id expedita, itaque nisi nobis quasi excepturi possimus earum repellat aliquam corrupti libero dolorem sequi amet quia tempora similique deleniti!"),i.a.createElement("p",null,"Vero corporis expedita saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, perferendis.")),i.a.createElement("div",{className:"sittext2"}," ",i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos accusamus possimus voluptatem excepturi velit atque maiores est ullam? Eius."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt, fugit, ipsum iste aspernatur cum consequatur id expedita, itaque nisi nobis quasi excepturi possimus earum repellat aliquam corrupti libero dolorem sequi amet quia tempora similique deleniti!"),i.a.createElement("p",null,"Vero corporis expedita saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, perferendis."))),i.a.createElement("div",{className:"sitfot"},i.a.createElement(L,null)))},k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{render:function(e){var t=e.location;return i.a.createElement(y.a,null,i.a.createElement(C.a,{key:t.key,timeout:550,classNames:"fade"},i.a.createElement(p.c,{location:t},i.a.createElement(p.a,{path:"/",component:x,exact:!0}),i.a.createElement(p.a,{path:"/situatie",component:w,exact:!0}),i.a.createElement(p.a,{component:x}))))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);l.a.render(i.a.createElement(v.a,null,i.a.createElement(p.a,{path:"/",component:k})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.dd4d6c8f.chunk.js.map