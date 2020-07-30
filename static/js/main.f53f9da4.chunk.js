(this.webpackJsonpcl=this.webpackJsonpcl||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),s=t(7),i=t(1),m=t(3),o=function(){return l.a.createElement("div",{className:"join-us",id:"join"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"\xbfC\xf3mo me uno?"),l.a.createElement("p",null,"En Coding Latam tienes 2 maneras de ser parte de la comunidad:"),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item__image"},l.a.createElement("img",{src:"/images/student.svg",alt:""})),l.a.createElement("div",{className:"item__description"},l.a.createElement("h3",null,"Estudiante"),l.a.createElement("p",null,"Quieres aprender sobre tecnologia y mejorar tus habilidades"),l.a.createElement("a",{className:"btn yellow",target:"_blank",href:"https://forms.gle/R87ZcpngijKSjZmb8",rel:"noopener noreferrer"},"Quiero ser estudiante"))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item__image"},l.a.createElement("img",{src:"/images/teacher.svg",alt:""})),l.a.createElement("div",{className:"item__description"},l.a.createElement("h3",null,"Mentor"),l.a.createElement("p",null,"Quieres compartir tu experiencia con nuevos aspirantes a devs"),l.a.createElement("a",{className:"btn yellow",target:"_blank",href:"https://forms.gle/GVy8ayWwjqqpgV929",rel:"noopener noreferrer"},"Quiero ser mentor")))))},u=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__content"},l.a.createElement("div",{className:"header__text"},l.a.createElement("h1",null,l.a.createElement("span",null,"Mejora tus dev skills")),l.a.createElement("p",null,"Aprende y comparte conocimiento con otros devs de la industria")),l.a.createElement("div",{className:"header__logos"},l.a.createElement("img",{src:"./images/terminal.png",alt:""}))))},d=function(e){return l.a.createElement("div",{className:"course",id:"courses"},l.a.createElement("div",{className:"course__image"},l.a.createElement("img",{src:"./images/".concat(e.course.image),alt:""})),l.a.createElement("div",{className:"course__title"},l.a.createElement("h3",null,e.course.title)),l.a.createElement("div",{className:"course__description"},l.a.createElement("p",null,e.course.description)),l.a.createElement("div",{className:"course__button"},l.a.createElement("a",{className:"yellow",href:e.course.link},"Registrarme")))},E=function(e){return l.a.createElement("div",{className:"recommended-courses"},l.a.createElement("div",{className:"recommended-courses__content"},l.a.createElement("div",{className:"recommended-courses__intro"},l.a.createElement("h2",{id:"description"},"\xbfQu\xe9 es lo que hacemos?"),l.a.createElement("p",null,"Compartimos conocimiento(talleres, workshops, cursos, etc) apoyando a los profesionales que inician en el mundo del desarrollo web.")),e.courses.map((function(e){return l.a.createElement(d,{course:e,key:e.id})}))))},p=(t(22),function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://coding-latam.firebaseio.com/recommendedCourses.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,title:e[t].title,description:e[t].description,image:e[t].image,link:e[t].link});r(a)}))}))}),[]),l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(E,{courses:t}),l.a.createElement(o,null))}),g=function(e){return l.a.createElement("li",null,e.name)},f=function(e){return l.a.createElement("div",{className:"group"},l.a.createElement("div",{className:"group__image"},l.a.createElement("img",{src:e.image,alt:""})),l.a.createElement("div",{className:"group__description"},l.a.createElement("h3",null,[e.name]),l.a.createElement("p",null,e.description)))},h=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),s=Object(m.a)(c,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){fetch("https://coding-latam.firebaseio.com/categories.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,name:e[t].name});r(a)}))})),fetch("https://coding-latam.firebaseio.com/groups.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,name:e[t].name,description:e[t].description,image:e[t].image});o(a)}))}))}),[]),l.a.createElement("div",null,l.a.createElement("header",{className:"groups-header"},l.a.createElement("div",{className:"groups-header__image"},l.a.createElement("img",{src:"/images/laptop.webp",alt:""})),l.a.createElement("div",{className:"groups-header__text"},l.a.createElement("h1",null,"Mejora tu aprendizaje con los grupos de estudio"))),l.a.createElement("section",{className:"groups-description"},l.a.createElement("ul",{className:"groups-tags"},t.map((function(e){return l.a.createElement(g,{key:e.id,name:e.name})}))),l.a.createElement("div",{className:"groups-list"},i.map((function(e){return l.a.createElement(f,{key:e.id,name:e.name,description:e.description,image:e.image})})))))},v=function(e){return l.a.createElement("div",{className:"talk"},l.a.createElement("div",{className:"talk__image"},l.a.createElement("img",{src:e.image,alt:""})),l.a.createElement("div",{className:"talk__description"},l.a.createElement("h3",null,e.description),l.a.createElement("p",null,e.date),l.a.createElement("a",{className:"talk__link",href:e.link},"Agregar a calendario")))},N=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://coding-latam.firebaseio.com/talks.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,description:e[t].description,date:e[t].date,calendarLink:e[t].calendarLink,image:e[t].image});r(a)}))}))}),[]),l.a.createElement("div",null,l.a.createElement("header",{className:"groups-header"},l.a.createElement("div",{className:"groups-header__image"},l.a.createElement("img",{src:"/images/laptop.webp",alt:""})),l.a.createElement("div",{className:"groups-header__text"},l.a.createElement("h1",null,"Conoce las pr\xf3ximas actividades de la comunidad"))),l.a.createElement("section",{className:"talks"},t.map((function(e){return l.a.createElement(v,{key:e.id,description:e.description,date:e.date,link:e.calendarLink,image:e.image})}))))},_=function(){return l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"nav__content"},l.a.createElement("div",{className:"nav__top"},l.a.createElement("div",{className:"nav__logo",id:"burger"},l.a.createElement("img",{src:"./images/logo.png",alt:""}),l.a.createElement("span",null,"Coding Latam")),l.a.createElement("div",{className:"nav__links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"#description"},"C\xf3mo funciona")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"#courses"},"Cursos")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"/grupos"},"Grupos de estudio")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"/talks"},"Talks")))),l.a.createElement("div",{className:"nav__button"},l.a.createElement("a",{className:"btn yellow scrollable",href:"#join"},"\xdanete"))),l.a.createElement("div",{className:"nav__bottom"},l.a.createElement("ul",{className:"nav__menu fadeIn",id:"navMenu"},l.a.createElement("button",{id:"navClose",onclick:"toggleMenu()"},"X"),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"#join"},"\xdanete")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"#description"},"C\xf3mo funciona")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"#courses"},"Cursos")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"/grupos"},"Grupos de estudio")),l.a.createElement("li",null,l.a.createElement("a",{className:"scrollable",href:"/talks"},"Talks")))))))},b=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer__social"},l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/codinglatam/",rel:"noopener noreferrer"},l.a.createElement("span",{className:"icon icon-facebook"})),l.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/codinglatam/",rel:"noopener noreferrer"},l.a.createElement("span",{className:"icon icon-instagram"})),l.a.createElement("a",{target:"_blank",href:"https://wa.link/du8zv8",rel:"noopener noreferrer"},l.a.createElement("span",{className:"icon icon-whatsapp"})),l.a.createElement("a",{target:"_blank",href:"https://twitter.com/codinglatam",rel:"noopener noreferrer"},l.a.createElement("span",{className:"icon icon-twitter"})),l.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/channel/UCPcMiIKT4RJboN9Hx2pajoA",rel:"noopener noreferrer"},l.a.createElement("span",{className:"icon icon-youtube"}))),l.a.createElement("div",{className:"footer__content"},l.a.createElement("p",null,"\xa9 Coding Latam 2020. Todos los derechos reservados"))))},k=function(e){var a=e.children;return l.a.createElement("div",{className:"app"},l.a.createElement(_,null),a,l.a.createElement(b,null))},j=function(e){return l.a.createElement("div",{className:"last-talk"},l.a.createElement("img",{src:e.image,alt:""}),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description))},w=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://coding-latam.firebaseio.com/talks.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,title:e[t].title,description:e[t].description,image:e[t].image});r(a)}))}))}),[]),l.a.createElement("div",{className:"last-talks"},l.a.createElement("h2",null,"\xdaltimos videos del canal de youtube:"),t.map((function(e){return l.a.createElement(j,{key:e.id,image:e.image,title:e.title,description:e.description})})))},y=function(e){return l.a.createElement("div",{className:"last-course"},l.a.createElement("img",{src:e.imageSrc,alt:""}),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description))},O=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://coding-latam.firebaseio.com/talks.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,title:e[t].title,description:e[t].description,image:e[t].image});r(a)}))}))}),[]),l.a.createElement("div",{className:"last-talks"},l.a.createElement("h2",null,"\xdaltimos cursos"),t.map((function(e){return l.a.createElement(y,{key:e.id,image:e.image,title:e.title,description:e.description})})))},C=function(e){return l.a.createElement("div",{className:"group"},l.a.createElement("div",{className:"group__image"},l.a.createElement("img",{src:e.imageSrc,alt:""})),l.a.createElement("div",{className:"group__description"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.description)))},x=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://coding-latam.firebaseio.com/groups.json").then((function(e){return e.json().then((function(e){var a=[];for(var t in e)a.push({id:t,name:e[t].name,description:e[t].description,image:e[t].image});r(a)}))}))}),[]),l.a.createElement("div",{className:"last-groups"},l.a.createElement("h2",null,"Grupos de estudio por iniciar:"),t.map((function(e){return l.a.createElement(C,{key:e.id,image:e.image,title:e.title,description:e.description})})))},S=function(){return l.a.createElement("div",{className:"social-area"},l.a.createElement(w,null),l.a.createElement(O,null),l.a.createElement(x,null))},L=function(){return l.a.createElement("aside",{className:"aside-navigation"},l.a.createElement("h2",null,"Navegaci\xf3n"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/dashboard"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/cursos"},"Cursos")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/talks"},"Talks")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/proyectos"},"Proyectos")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/grupos"},"Grupos"))))},M=function(e){return l.a.createElement("div",{className:"articles__item"},l.a.createElement("img",{src:e.article.image,alt:""}),l.a.createElement("div",null,l.a.createElement("a",{href:e.article.link},e.article.title),l.a.createElement("p",null,e.article.autor)))},A=function(e){return l.a.createElement("div",{className:"articles"},l.a.createElement("div",{className:"articles__title"},l.a.createElement("h3",null,"\xdaltimos Art\xedculos")),l.a.createElement("div",{className:"articles__list"},[{id:1,title:"titulo de articulo",image:"./images/logo.png",autor:"Angelo Leva",link:"#"}].map((function(e){return l.a.createElement(M,{key:e.id,article:e})}))))},G=function(){return l.a.createElement("main",{className:"dashboard"},l.a.createElement(L,null),l.a.createElement(S,null),l.a.createElement(A,null))},Q=function(){return l.a.createElement(s.a,null,l.a.createElement(k,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:p}),l.a.createElement(i.a,{exact:!0,path:"/dashboard",component:G}),l.a.createElement(i.a,{exact:!0,path:"/grupos",component:h}),l.a.createElement(i.a,{exact:!0,path:"/talks",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f53f9da4.chunk.js.map