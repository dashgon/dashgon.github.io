(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),s=(t(10),t(1)),l=(t(11),function(e){return r.a.createElement("div",{className:"masonry-header"},e.title,r.a.createElement("span",{className:"masonry-header-sub"},e.sub))}),m=function(e){var a,t=new Date(e.publishedAt),n=function(e){return e<10?"0"+e:e.toString()},c=(a=Math.ceil((Date.now()-t.getTime())/36e5))<=3?"rgba(231, 76, 60, ".concat(.4+.6*(3-a)/3,")"):a<=6?"rgba(0, 100, 0, .6)":a<=12?"rgba(0, 0, 100, .6)":"rgba(0, 0, 0, .6)",o=(e.en?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" ":t.getMonth()+1+"/")+t.getDate();return r.a.createElement("div",{className:"masonry-item"},r.a.createElement("div",{className:"masonry-content"},r.a.createElement("div",{className:"masonry-img"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"date-stamp",style:{backgroundColor:c}},r.a.createElement("div",{className:"date-hh-mm"},n(t.getHours())+":"+n(t.getMinutes())),r.a.createElement("div",{className:"date-mo-dd"},o)),r.a.createElement("img",{src:e.urlToImage,alt:""}))),r.a.createElement("div",{className:"masonry-text"},r.a.createElement("h3",{className:"masonry-title"},e.source.name&&r.a.createElement("div",{className:"masonry-nb tooltip"},e.source.name,e.author&&r.a.createElement("span",{className:"tooltiptext"},e.author)),e.title),r.a.createElement("p",{className:"masonry-description"},e.description))))},i=function(){var e=r.a.useState(null),a=Object(s.a)(e,2),t=a[0],n=a[1],c=r.a.useState("us"),o=Object(s.a)(c,2),i=o[0],u=o[1];r.a.useEffect(function(){var e=new Request("https://newsapi.org/v2/top-headlines?country="+i+"&apiKey=2df259c96a4b405fbb75e14986f3c1f5");fetch(e).then(function(e){return e.json()}).then(n).catch(function(){return console.error("fetch error!")})},[i]),t&&console.log(t);var d=function(e){var a=e.co===i?{background:"Khaki"}:void 0;return r.a.createElement("button",{type:"button",onClick:function(){return u(e.co)},className:"btn-ctr",style:a},r.a.createElement("span",{role:"img","aria-label":e.co},{gb:"\ud83c\uddec\ud83c\udde7",fr:"\ud83c\uddeb\ud83c\uddf7",de:"\ud83c\udde9\ud83c\uddea",in:"\ud83c\uddee\ud83c\uddf3",sg:"\ud83c\uddf8\ud83c\uddec",cn:"\ud83c\udde8\ud83c\uddf3",kr:"\ud83c\uddf0\ud83c\uddf7",jp:"\ud83c\uddef\ud83c\uddf5",au:"\ud83c\udde6\ud83c\uddfa",us:"\ud83c\uddfa\ud83c\uddf8",ca:"\ud83c\udde8\ud83c\udde6"}[e.co]))},E=!["ch","kr","jp"].includes(i);return t&&r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"btn-cont"},r.a.createElement(l,{title:"NEWS",sub:""}),r.a.createElement(d,{co:"gb"}),r.a.createElement(d,{co:"fr"}),r.a.createElement(d,{co:"de"}),r.a.createElement(d,{co:"in"}),r.a.createElement(d,{co:"sg"}),r.a.createElement(d,{co:"cn"}),r.a.createElement(d,{co:"kr"}),r.a.createElement(d,{co:"jp"}),r.a.createElement(d,{co:"au"}),r.a.createElement(d,{co:"us"}),r.a.createElement(d,{co:"ca"})),r.a.createElement("div",{className:"masonry-wrapper"},r.a.createElement("div",{className:"masonry"},t.articles.map(function(e,a){return r.a.createElement(m,Object.assign({key:a,en:E},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.fac7afbb.chunk.js.map