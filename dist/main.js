(()=>{"use strict";const e=function(e){const t=document.getElementById("content"),n=document.createElement("div");n.classList.add("header");const d=document.createElement("div");d.classList.add("title"),d.innerHTML="Daily Songs";const a=document.createElement("div");a.classList.add("options");const c=document.createElement("button");c.setAttribute("id","home"),c.classList.add("btn"),c.setAttribute("disabled","true"),c.innerHTML="Home";const s=document.createElement("button");s.innerHTML="Today's Menu",s.setAttribute("id","today"),s.classList.add("btn");const i=document.createElement("button");i.innerHTML="Recent",i.classList.add("btn"),i.setAttribute("id","recent"),a.appendChild(c),a.appendChild(s),a.appendChild(i);const o=document.createElement("div");o.classList.add("icon");const l=document.createElement("img");l.setAttribute("src","../src/queue_music_white_36dp.svg"),l.setAttribute("alt","site-icon"),o.appendChild(l),n.appendChild(d),n.appendChild(a),n.appendChild(o);const r=document.createElement("div");r.classList.add("main");const m=document.createElement("div");m.classList.add("bckg");const u=document.createElement("div");u.classList.add("info");const p=document.createElement("div");p.classList.add("main-title");const h=document.createElement("img");h.setAttribute("src","../src/replay_FILL0_wght400_GRAD0_opsz48.svg"),h.setAttribute("alt","home logo, replay image"),p.innerHTML="My Daily Songs";const E=document.createElement("div");E.classList.add("text-intro");const b=document.createElement("p");b.innerHTML="Daily Songs is a site where i can display my mood through a <span class='italic'>too</span> little list of songs that i'm hearing each day (which could obviously change by the minute). It is also a tribute to all the artists that put our overhelmingly complicated moods and feelings in such amazing songs. THANK YOU!",E.appendChild(b);const C=document.createElement("div");C.classList.add("hours");const L=document.createElement("h3");L.classList.add("hours-title"),L.innerHTML="Hours?";const g=document.createElement("div");g.classList.add("hours-text"),g.innerHTML="As much as possible, please.",C.appendChild(L),C.appendChild(g);const A=document.createElement("div");A.classList.add("location");const y=document.createElement("h3");y.classList.add("location-title"),y.innerHTML="Location";const M=document.createElement("div");M.classList.add("location-text"),M.innerHTML="Anywhere, in a loved headphone.",A.appendChild(y),A.appendChild(M),p.appendChild(h),u.appendChild(p),u.appendChild(E),u.appendChild(C),u.appendChild(A),r.appendChild(m),r.appendChild(u);const T=document.createElement("div");T.classList.add("footer");const H=document.createElement("div");H.classList.add("developed"),H.innerHTML="Developed by RodrigoAPassos";const v=document.createElement("div");v.classList.add("credits");const _=document.createElement("a");_.setAttribute("href","https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"),_.innerHTML="Background image by Jabber Visuals",v.appendChild(_),T.appendChild(H),T.appendChild(v),0==e?(t.appendChild(n),t.appendChild(r),t.appendChild(T)):(document.getElementById("home").setAttribute("disabled","true"),document.getElementById("today").removeAttribute("disabled"),document.getElementById("recent").removeAttribute("disabled"),t.appendChild(r),t.appendChild(T))};e(0),document.querySelectorAll(".btn").forEach((t=>{t.addEventListener("click",(()=>{const n=document.querySelector(".main"),d=document.querySelector(".footer");document.getElementById("content").removeChild(n),document.getElementById("content").removeChild(d),(t=>{if("home"==t)e(1);else if("today"==t)!function(){const e=document.getElementById("content");document.getElementById("home").removeAttribute("disabled"),document.getElementById("today").setAttribute("disabled","true"),document.getElementById("recent").removeAttribute("disabled");const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("bckg");const d=document.createElement("div");d.classList.add("info");const a=document.createElement("div");a.classList.add("main-title"),a.innerHTML="Today's Menu";const c=document.createElement("img");c.setAttribute("src","../src/replay_10_FILL0_wght400_GRAD0_opsz48.svg"),c.setAttribute("alt","today's menu logo, replay 10");const s=document.createElement("ul");s.classList.add("song-list");const i=document.createElement("li");i.classList.add("song-container");const o=document.createElement("a");o.setAttribute("href","https://youtu.be/hfsxcebq5Rc"),o.setAttribute("target","_blank");const l=document.createElement("h4");l.innerHTML="Ideologia";const r=document.createElement("h5");r.innerHTML="Cazuza";const m=document.createElement("li");m.classList.add("song-container");const u=document.createElement("a");u.setAttribute("href","https://youtu.be/aDaOgu2CQtI"),u.setAttribute("target","_blank");const p=document.createElement("h4");p.innerHTML="Do the Evolution";const h=document.createElement("h5");h.innerHTML="Pearl Jam";const E=document.createElement("li");E.classList.add("song-container");const b=document.createElement("a");b.setAttribute("href","https://youtu.be/_oOho_iu4Hs"),b.setAttribute("target","_blank");const C=document.createElement("h4");C.innerHTML="This is War";const L=document.createElement("h5");L.innerHTML="Alter Bridge";const g=document.createElement("li");g.classList.add("song-container");const A=document.createElement("a");A.setAttribute("href","https://youtu.be/Erpv9L7696U"),A.setAttribute("target","_blank");const y=document.createElement("h4");y.innerHTML="Sitting, Waiting, Wishing";const M=document.createElement("h5");M.innerHTML="Jack Johnson";const T=document.createElement("li");T.classList.add("song-container");const H=document.createElement("a");H.setAttribute("href","https://youtu.be/aCyGvGEtOwc"),H.setAttribute("target","_blank");const v=document.createElement("h4");v.innerHTML="Misery Business";const _=document.createElement("h5");_.innerHTML="Paramore";const f=document.createElement("li");f.classList.add("song-container");const k=document.createElement("a");k.setAttribute("href","https://youtu.be/bZTwKUJDU1M"),k.setAttribute("target","_blank");const I=document.createElement("h4");I.innerHTML="Pontes Indestrutíveis";const B=document.createElement("h5");B.innerHTML="Charlie Brown Jr";const D=document.createElement("li");D.classList.add("song-container");const P=document.createElement("a");P.setAttribute("href","https://youtu.be/bWXazVhlyxQ"),P.setAttribute("target","_blank");const R=document.createElement("h4");R.innerHTML="Killing in the Name";const S=document.createElement("h5");S.innerHTML="Rage Against The Machine";const U=document.createElement("li");U.classList.add("song-container");const Q=document.createElement("a");Q.setAttribute("href","https://youtu.be/75S5PDXTEVQ"),Q.setAttribute("target","_blank");const w=document.createElement("h4");w.innerHTML="Nowhere Generation";const J=document.createElement("h5");J.innerHTML="Rise Against";const N=document.createElement("li");N.classList.add("song-container");const z=document.createElement("a");z.setAttribute("href","https://youtu.be/u4lcUooNNLY"),z.setAttribute("target","_blank");const q=document.createElement("h4");q.innerHTML="Negro Drama";const F=document.createElement("h5");F.innerHTML="Racionais MC's";const G=document.createElement("li");G.classList.add("song-container");const O=document.createElement("a");O.setAttribute("href","https://youtu.be/Nkgv3LoQY2o"),O.setAttribute("target","_blank");const V=document.createElement("h4");V.innerHTML="I Am Mine";const W=document.createElement("h5");W.innerHTML="Pearl Jam",o.appendChild(l),o.appendChild(r),i.appendChild(o),s.appendChild(i),u.appendChild(p),u.appendChild(h),m.appendChild(u),s.appendChild(m),b.appendChild(C),b.appendChild(L),E.appendChild(b),s.appendChild(E),A.appendChild(y),A.appendChild(M),g.appendChild(A),s.appendChild(g),H.appendChild(v),H.appendChild(_),T.appendChild(H),s.appendChild(T),k.appendChild(I),k.appendChild(B),f.appendChild(k),s.appendChild(f),P.appendChild(R),P.appendChild(S),D.appendChild(P),s.appendChild(D),Q.appendChild(w),Q.appendChild(J),U.appendChild(Q),s.appendChild(U),z.appendChild(q),z.appendChild(F),N.appendChild(z),s.appendChild(N),O.appendChild(V),O.appendChild(W),G.appendChild(O),s.appendChild(G),a.appendChild(c),d.appendChild(a),d.appendChild(s),t.appendChild(n),t.appendChild(d);const K=document.createElement("div");K.classList.add("footer");const x=document.createElement("div");x.classList.add("developed"),x.innerHTML="Developed by RodrigoAPassos";const Y=document.createElement("div");Y.classList.add("credits");const X=document.createElement("a");X.setAttribute("href","https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"),X.innerHTML="Background image by Jabber Visuals",Y.appendChild(X),K.appendChild(x),K.appendChild(Y),e.appendChild(t),e.appendChild(K)}();else{if("recent"!=t)return;!function(){const e=document.getElementById("content");document.getElementById("home").removeAttribute("disabled"),document.getElementById("today").removeAttribute("disabled"),document.getElementById("recent").setAttribute("disabled","true");const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("bckg");const d=document.createElement("div");d.classList.add("info");const a=document.createElement("div");a.classList.add("main-title"),a.innerHTML="Recent Songs";const c=document.createElement("img");c.setAttribute("src","../src/skip_previous_FILL0_wght400_GRAD0_opsz48.svg"),c.setAttribute("alt","today's menu logo, skip previous");const s=document.createElement("ul");s.classList.add("song-list");const i=document.createElement("li");i.classList.add("song-container");const o=document.createElement("a");o.setAttribute("href","https://youtu.be/kFpkyT_KPpc"),o.setAttribute("target","_blank");const l=document.createElement("h4");l.innerHTML="Que País É Esse";const r=document.createElement("h5");r.innerHTML="Legião Urbana";const m=document.createElement("li");m.classList.add("song-container");const u=document.createElement("a");u.setAttribute("href","https://youtu.be/qgaRVvAKoqQ"),u.setAttribute("target","_blank");const p=document.createElement("h4");p.innerHTML="Black";const h=document.createElement("h5");h.innerHTML="Pearl Jam";const E=document.createElement("li");E.classList.add("song-container");const b=document.createElement("a");b.setAttribute("href","https://youtu.be/6aUdqOG0_qQ"),b.setAttribute("target","_blank");const C=document.createElement("h4");C.innerHTML="Shed My Skin";const L=document.createElement("h5");L.innerHTML="Alter Bridge";const g=document.createElement("li");g.classList.add("song-container");const A=document.createElement("a");A.setAttribute("href","https://youtu.be/L2bINZ0G_yI"),A.setAttribute("target","_blank");const y=document.createElement("h4");y.innerHTML="Poema";const M=document.createElement("h5");M.innerHTML="Ney Matogrosso";const T=document.createElement("li");T.classList.add("song-container");const H=document.createElement("a");H.setAttribute("href","https://youtu.be/VDcEJE633rM"),H.setAttribute("target","_blank");const v=document.createElement("h4");v.innerHTML="Free Mind";const _=document.createElement("h5");_.innerHTML="Tems";const f=document.createElement("li");f.classList.add("song-container");const k=document.createElement("a");k.setAttribute("href","https://youtu.be/ErvgV4P6Fzc"),k.setAttribute("target","_blank");const I=document.createElement("h4");I.innerHTML="Patience";const B=document.createElement("h5");B.innerHTML="Guns N' Roses";const D=document.createElement("li");D.classList.add("song-container");const P=document.createElement("a");P.setAttribute("href","https://youtu.be/6hzrDeceEKc"),P.setAttribute("target","_blank");const R=document.createElement("h4");R.innerHTML="Wonderwall";const S=document.createElement("h5");S.innerHTML="Oasis";const U=document.createElement("li");U.classList.add("song-container");const Q=document.createElement("a");Q.setAttribute("href","https://youtu.be/_DboMAghWcA"),Q.setAttribute("target","_blank");const w=document.createElement("h4");w.innerHTML="Hero of War";const J=document.createElement("h5");J.innerHTML="Rise Against";const N=document.createElement("li");N.classList.add("song-container");const z=document.createElement("a");z.setAttribute("href","https://youtu.be/XFkzRNyygfk"),z.setAttribute("target","_blank");const q=document.createElement("h4");q.innerHTML="Creep";const F=document.createElement("h5");F.innerHTML="Radiohead";const G=document.createElement("li");G.classList.add("song-container");const O=document.createElement("a");O.setAttribute("href","https://youtu.be/WC5FdFlUcl0"),O.setAttribute("target","_blank");const V=document.createElement("h4");V.innerHTML="Be Yourself";const W=document.createElement("h5");W.innerHTML="Audioslave",o.appendChild(l),o.appendChild(r),i.appendChild(o),s.appendChild(i),u.appendChild(p),u.appendChild(h),m.appendChild(u),s.appendChild(m),b.appendChild(C),b.appendChild(L),E.appendChild(b),s.appendChild(E),A.appendChild(y),A.appendChild(M),g.appendChild(A),s.appendChild(g),H.appendChild(v),H.appendChild(_),T.appendChild(H),s.appendChild(T),k.appendChild(I),k.appendChild(B),f.appendChild(k),s.appendChild(f),P.appendChild(R),P.appendChild(S),D.appendChild(P),s.appendChild(D),Q.appendChild(w),Q.appendChild(J),U.appendChild(Q),s.appendChild(U),z.appendChild(q),z.appendChild(F),N.appendChild(z),s.appendChild(N),O.appendChild(V),O.appendChild(W),G.appendChild(O),s.appendChild(G),a.appendChild(c),d.appendChild(a),d.appendChild(s),t.appendChild(n),t.appendChild(d);const K=document.createElement("div");K.classList.add("footer");const x=document.createElement("div");x.classList.add("developed"),x.innerHTML="Developed by RodrigoAPassos";const Y=document.createElement("div");Y.classList.add("credits");const X=document.createElement("a");X.setAttribute("href","https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"),X.innerHTML="Background image by Jabber Visuals",Y.appendChild(X),K.appendChild(x),K.appendChild(Y),e.appendChild(t),e.appendChild(K)}()}})(t.id)}))}))})();