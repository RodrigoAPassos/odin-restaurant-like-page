(()=>{"use strict";const e=function(e){const t=document.getElementById("content"),n=document.createElement("div");n.classList.add("header");const d=document.createElement("div");d.classList.add("title"),d.innerHTML="Daily Songs";const c=document.createElement("div");c.classList.add("options");const a=document.createElement("button");a.setAttribute("id","home"),a.classList.add("btn"),a.setAttribute("disabled","true"),a.innerHTML="Home";const s=document.createElement("button");s.innerHTML="Today's Menu",s.setAttribute("id","today"),s.classList.add("btn");const i=document.createElement("button");i.innerHTML="Recent",i.classList.add("btn"),i.setAttribute("id","recent"),c.appendChild(a),c.appendChild(s),c.appendChild(i);const o=document.createElement("div");o.classList.add("icon");const l=document.createElement("img");l.setAttribute("src","../src/queue_music_white_36dp.svg"),l.setAttribute("alt","site-icon"),o.appendChild(l),n.appendChild(d),n.appendChild(c),n.appendChild(o);const r=document.createElement("div");r.classList.add("main");const m=document.createElement("div");m.classList.add("bckg");const p=document.createElement("div");p.classList.add("info");const u=document.createElement("div");u.classList.add("main-title");const h=document.createElement("img");h.setAttribute("src","../src/replay_FILL0_wght400_GRAD0_opsz48.svg"),h.setAttribute("alt","home logo, replay image"),u.innerHTML="My Daily Songs";const L=document.createElement("div");L.classList.add("text-intro");const E=document.createElement("p");E.innerHTML="Daily Songs is a site where i can display my mood through a <span class='italic'>too</span> little list of songs that i'm hearing each day (which could obviously change by the minute). It is also a tribute to all the artists that put our overhelmingly complicated moods and feelings in such amazing songs. THANK YOU!",L.appendChild(E);const C=document.createElement("div");C.classList.add("hours");const g=document.createElement("h3");g.classList.add("hours-title"),g.innerHTML="Hours?";const M=document.createElement("div");M.classList.add("hours-text"),M.innerHTML="As much as possible, please.",C.appendChild(g),C.appendChild(M);const T=document.createElement("div");T.classList.add("location");const H=document.createElement("h3");H.classList.add("location-title"),H.innerHTML="Location";const b=document.createElement("div");b.classList.add("location-text"),b.innerHTML="Anywhere, in a loved headphone.",T.appendChild(H),T.appendChild(b),u.appendChild(h),p.appendChild(u),p.appendChild(L),p.appendChild(C),p.appendChild(T),r.appendChild(m),r.appendChild(p);const v=document.createElement("div");v.classList.add("footer");const y=document.createElement("div");y.classList.add("developed"),y.innerHTML="Developed by RodrigoAPassos";const A=document.createElement("div");A.classList.add("credits");const _=document.createElement("a");_.setAttribute("href","https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"),_.innerHTML="Background image by Jabber Visuals",A.appendChild(_),v.appendChild(y),v.appendChild(A),0==e?(t.appendChild(n),t.appendChild(r),t.appendChild(v)):(document.getElementById("home").setAttribute("disabled","true"),document.getElementById("today").removeAttribute("disabled"),document.getElementById("recent").removeAttribute("disabled"),t.appendChild(r),t.appendChild(v))};e(0),document.querySelectorAll(".btn").forEach((t=>{t.addEventListener("click",(()=>{const n=document.querySelector(".main"),d=document.querySelector(".footer");document.getElementById("content").removeChild(n),document.getElementById("content").removeChild(d),(t=>{if("home"==t)e(1);else if("today"==t)!function(){const e=document.getElementById("content");document.getElementById("home").removeAttribute("disabled"),document.getElementById("today").setAttribute("disabled","true"),document.getElementById("recent").removeAttribute("disabled");const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("bckg");const d=document.createElement("div");d.classList.add("info");const c=document.createElement("div");c.classList.add("main-title"),c.innerHTML="Today's Menu";const a=document.createElement("img");a.setAttribute("src","../src/replay_10_FILL0_wght400_GRAD0_opsz48.svg"),a.setAttribute("alt","today's menu logo, replay 10");const s=document.createElement("ul");s.classList.add("song-list");const i=document.createElement("li");i.classList.add("song-container");const o=document.createElement("h4");o.innerHTML="Ideologia";const l=document.createElement("h5");l.innerHTML="Cazuza";const r=document.createElement("li");r.classList.add("song-container");const m=document.createElement("h4");m.innerHTML="Do the Evolution";const p=document.createElement("h5");p.innerHTML="Pearl Jam";const u=document.createElement("li");u.classList.add("song-container");const h=document.createElement("h4");h.innerHTML="This is War";const L=document.createElement("h5");L.innerHTML="Alter Bridge";const E=document.createElement("li");E.classList.add("song-container");const C=document.createElement("h4");C.innerHTML="Sitting, Waiting, Wishing";const g=document.createElement("h5");g.innerHTML="Jack Johnson";const M=document.createElement("li");M.classList.add("song-container");const T=document.createElement("h4");T.innerHTML="Misery Business";const H=document.createElement("h5");H.innerHTML="Paramore";const b=document.createElement("li");b.classList.add("song-container");const v=document.createElement("h4");v.innerHTML="Pontes Indestrutíveis";const y=document.createElement("h5");y.innerHTML="Charlie Brown Jr";const A=document.createElement("li");A.classList.add("song-container");const _=document.createElement("h4");_.innerHTML="Killing in the Name";const f=document.createElement("h5");f.innerHTML="Rage Against The Machine";const I=document.createElement("li");I.classList.add("song-container");const B=document.createElement("h4");B.innerHTML="Nowhere Generation";const k=document.createElement("h5");k.innerHTML="Rise Against";const P=document.createElement("li");P.classList.add("song-container");const R=document.createElement("h4");R.innerHTML="Negro Drama";const S=document.createElement("h5");S.innerHTML="Racionais MC's";const D=document.createElement("li");D.classList.add("song-container");const w=document.createElement("h4");w.innerHTML="I Am Mine";const J=document.createElement("h5");J.innerHTML="Pearl Jam",i.appendChild(o),i.appendChild(l),s.appendChild(i),r.appendChild(m),r.appendChild(p),s.appendChild(r),u.appendChild(h),u.appendChild(L),s.appendChild(u),E.appendChild(C),E.appendChild(g),s.appendChild(E),M.appendChild(T),M.appendChild(H),s.appendChild(M),b.appendChild(v),b.appendChild(y),s.appendChild(b),A.appendChild(_),A.appendChild(f),s.appendChild(A),I.appendChild(B),I.appendChild(k),s.appendChild(I),P.appendChild(R),P.appendChild(S),s.appendChild(P),D.appendChild(w),D.appendChild(J),s.appendChild(D),c.appendChild(a),d.appendChild(c),d.appendChild(s),t.appendChild(n),t.appendChild(d);const U=document.createElement("div");U.classList.add("footer");const Q=document.createElement("div");Q.classList.add("developed"),Q.innerHTML="Developed by RodrigoAPassos";const z=document.createElement("div");z.classList.add("credits");const N=document.createElement("a");N.setAttribute("href","https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"),N.innerHTML="Background image by Jabber Visuals",z.appendChild(N),U.appendChild(Q),U.appendChild(z),e.appendChild(t),e.appendChild(U)}();else{if("recent"!=t)return;!function(){const e=document.getElementById("content");document.getElementById("home").removeAttribute("disabled"),document.getElementById("today").removeAttribute("disabled"),document.getElementById("recent").setAttribute("disabled","true");const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("bckg");const d=document.createElement("div");d.classList.add("info");const c=document.createElement("div");c.classList.add("main-title"),c.innerHTML="Recent Songs";const a=document.createElement("img");a.setAttribute("src","../src/skip_previous_FILL0_wght400_GRAD0_opsz48.svg"),a.setAttribute("alt","today's menu logo, skip previous");const s=document.createElement("ul");s.classList.add("song-list");const i=document.createElement("li");i.classList.add("song-container");const o=document.createElement("h4");o.innerHTML="Que País É Esse";const l=document.createElement("h5");l.innerHTML="Legião Urbana";const r=document.createElement("li");r.classList.add("song-container");const m=document.createElement("h4");m.innerHTML="Black";const p=document.createElement("h5");p.innerHTML="Pearl Jam";const u=document.createElement("li");u.classList.add("song-container");const h=document.createElement("h4");h.innerHTML="Shed My Skin";const L=document.createElement("h5");L.innerHTML="Alter Bridge";const E=document.createElement("li");E.classList.add("song-container");const C=document.createElement("h4");C.innerHTML="Poema";const g=document.createElement("h5");g.innerHTML="Ney Matogrosso";const M=document.createElement("li");M.classList.add("song-container");const T=document.createElement("h4");T.innerHTML="Free Mind";const H=document.createElement("h5");H.innerHTML="Tems";const b=document.createElement("li");b.classList.add("song-container");const v=document.createElement("h4");v.innerHTML="Patience";const y=document.createElement("h5");y.innerHTML="Guns N' Roses";const A=document.createElement("li");A.classList.add("song-container");const _=document.createElement("h4");_.innerHTML="Wonderwall";const f=document.createElement("h5");f.innerHTML="Oasis";const I=document.createElement("li");I.classList.add("song-container");const B=document.createElement("h4");B.innerHTML="Hero of War";const k=document.createElement("h5");k.innerHTML="Rise Against";const P=document.createElement("li");P.classList.add("song-container");const R=document.createElement("h4");R.innerHTML="Creep";const S=document.createElement("h5");S.innerHTML="Radiohead";const D=document.createElement("li");D.classList.add("song-container");const w=document.createElement("h4");w.innerHTML="Be Yourself";const J=document.createElement("h5");J.innerHTML="Audioslave",i.appendChild(o),i.appendChild(l),s.appendChild(i),r.appendChild(m),r.appendChild(p),s.appendChild(r),u.appendChild(h),u.appendChild(L),s.appendChild(u),E.appendChild(C),E.appendChild(g),s.appendChild(E),M.appendChild(T),M.appendChild(H),s.appendChild(M),b.appendChild(v),b.appendChild(y),s.appendChild(b),A.appendChild(_),A.appendChild(f),s.appendChild(A),I.appendChild(B),I.appendChild(k),s.appendChild(I),P.appendChild(R),P.appendChild(S),s.appendChild(P),D.appendChild(w),D.appendChild(J),s.appendChild(D),c.appendChild(a),d.appendChild(c),d.appendChild(s),t.appendChild(n),t.appendChild(d);const U=document.createElement("div");U.classList.add("footer");const Q=document.createElement("div");Q.classList.add("developed"),Q.innerHTML="Developed by RodrigoAPassos";const z=document.createElement("div");z.classList.add("credits");const N=document.createElement("a");N.setAttribute("href","https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"),N.innerHTML="Background image by Jabber Visuals",z.appendChild(N),U.appendChild(Q),U.appendChild(z),e.appendChild(t),e.appendChild(U)}()}})(t.id)}))}))})();