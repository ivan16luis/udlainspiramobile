(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{Nsvw:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",function(){return n}),o.d(t,"shadow",function(){return r});var a=o("oM6z");const r=e=>e.shadowRoot||e,n=(e,t)=>{try{const n=540,l="cubic-bezier(0.32,0.72,0,1)",s="opacity",c="transform",i="0%",d=.8,f="rtl"===e.ownerDocument.dir,m=f?"-99.5%":"99.5%",b=f?"33%":"-33%",y=t.enteringEl,u=t.leavingEl,S="back"===t.direction,T=y.querySelector(":scope > ion-content"),p=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),X=y.querySelectorAll(":scope > ion-header > ion-toolbar"),E=Object(a.a)(),q=Object(a.a)();if(E.addElement(y).duration(t.duration||n).easing(t.easing||l).fill("both").beforeRemoveClass("ion-page-invisible"),u&&e){const t=Object(a.a)();t.addElement(e),E.addAnimation(t)}if(T||0!==X.length||0!==p.length?(q.addElement(T),q.addElement(p)):q.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),E.addAnimation(q),S?q.beforeClearStyles([s]).fromTo("transform",`translateX(${b})`,`translateX(${i})`).fromTo(s,d,1):q.beforeClearStyles([s]).fromTo("transform",`translateX(${m})`,`translateX(${i})`),T){const e=r(T).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),r=Object(a.a)(),n=Object(a.a)(),l=Object(a.a)();r.addElement(e).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),n.addElement(t).beforeClearStyles([s]).fromTo(s,0,.1),l.addElement(o).beforeClearStyles([s]).fromTo(s,.03,.7),r.addAnimation([n,l]),q.addAnimation([r])}}if(X.forEach(e=>{const t=Object(a.a)();t.addElement(e),E.addAnimation(t);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const n=Object(a.a)();n.addElement(e.querySelectorAll("ion-buttons,[menuToggle]"));const l=Object(a.a)();l.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const c=Object(a.a)();c.addElement(r(e).querySelector(".toolbar-background"));const d=Object(a.a)(),y=e.querySelector("ion-back-button");if(y&&d.addElement(y),t.addAnimation([o,n,l,c,d]),o.fromTo(s,.01,1),n.fromTo(s,.01,1),l.fromTo(s,.01,1),S)o.fromTo("transform",`translateX(${b})`,`translateX(${i})`),l.fromTo("transform",`translateX(${b})`,`translateX(${i})`),d.fromTo(s,.01,1);else if(o.fromTo("transform",`translateX(${m})`,`translateX(${i})`),l.fromTo("transform",`translateX(${m})`,`translateX(${i})`),c.beforeClearStyles([s]).keyframes([{offset:0,opacity:.01},{offset:.99,opacity:1},{offset:1,opacity:"var(--opacity)"}]),d.fromTo(s,.01,1),y){const e=Object(a.a)();e.addElement(r(y).querySelector(".button-text")).fromTo("transform",f?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}),u){const e=Object(a.a)(),t=u.querySelector(":scope > ion-content");if(e.addElement(t),e.addElement(u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),E.addAnimation(e),S?e.beforeClearStyles([s]).fromTo("transform",`translateX(${i})`,f?"translateX(-100%)":"translateX(100%)"):e.fromTo("transform",`translateX(${i})`,`translateX(${b})`).fromTo(s,1,d),t){const o=r(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),n=Object(a.a)(),l=Object(a.a)(),c=Object(a.a)();n.addElement(o).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),l.addElement(t).beforeClearStyles([s]).fromTo(s,.1,0),c.addElement(r).beforeClearStyles([s]).fromTo(s,.7,.03),n.addAnimation([l,c]),e.addAnimation([n])}}u.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(e=>{const t=Object(a.a)();t.addElement(e);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const n=Object(a.a)();n.addElement(e.querySelectorAll("ion-buttons,[menuToggle]"));const l=Object(a.a)(),d=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");d.length>0&&l.addElement(d);const m=Object(a.a)();m.addElement(r(e).querySelector(".toolbar-background"));const y=Object(a.a)(),u=e.querySelector("ion-back-button");if(u&&y.addElement(u),t.addAnimation([o,n,l,y,m]),E.addAnimation(t),y.fromTo(s,.99,0),o.fromTo(s,.99,0),n.fromTo(s,.99,0),l.fromTo(s,.99,0),S){if(o.fromTo("transform",`translateX(${i})`,f?"translateX(-100%)":"translateX(100%)"),l.fromTo("transform",`translateX(${i})`,f?"translateX(-100%)":"translateX(100%)"),m.beforeClearStyles([s]).fromTo(s,1,.01),u){const e=Object(a.a)();e.addElement(r(u).querySelector(".button-text")),e.fromTo("transform",`translateX(${i})`,`translateX(${(f?-124:124)+"px"})`),t.addAnimation(e)}}else o.fromTo("transform",`translateX(${i})`,`translateX(${b})`).afterClearStyles([c]),l.fromTo("transform",`translateX(${i})`,`translateX(${b})`).afterClearStyles([c,s]),y.afterClearStyles([s]),o.afterClearStyles([s]),n.afterClearStyles([s])})}return E}catch(o){throw o}}}}]);