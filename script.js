const $=s=>document.querySelector(s);
setTimeout(()=>$('#intro').classList.add('off'),2600);
// typing
const w=['Happy','Creative','Clean','Responsive'];let wi=0,ci=0,del=false;
(function t(){const s=w[wi];$('#ty').textContent=s.slice(0,ci);
if(!del&&ci<s.length)ci++;else if(!del){del=true;return setTimeout(t,1200)}else if(del&&ci>0)ci--;else{del=false;wi=(wi+1)%w.length}
setTimeout(t,del?60:110)})();
// nav active
const secs=[...document.querySelectorAll('section')],links=[...document.querySelectorAll('nav a')];
addEventListener('scroll',()=>{let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<200)c=i});links.forEach((a,i)=>a.classList.toggle('on',i==c))});
// tabs
const P=[{
t:'Pesona Banyuwangi',
d:'Website pariwisata bertema “The Sunrise of Java”. Menampilkan destinasi populer seperti Kawah Ijen, TN Baluran, dan Pulau Merah, lengkap dengan pilihan akomodasi, paket wisata, dan form pencarian trip.',
tech:['HTML','CSS','JavaScript'],
f:['Katalog destinasi: Kawah Ijen, TN Baluran, Pulau Merah','Pilihan hotel, resort, dan homestay','Paket wisata beserta fasilitasnya','Pencarian trip sesuai jumlah peserta','Navigasi satu halaman antar bagian'],
demo:'https://web-banyuwangi-8goo.vercel.app/',
repo:'https://github.com/Xyoo-ops/Web-banyuwangi',
img:''}];
const esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const pic=p=>p.img?`<img src="${p.img}" alt="${esc(p.t)}" onerror="this.remove()">`:p.demo?`<iframe class="fr" src="${p.demo}" title="Pratinjau ${esc(p.t)}" loading="lazy" tabindex="-1" scrolling="no"></iframe>`:'';
function fit(){document.querySelectorAll('.fr').forEach(f=>{const w=f.parentElement.clientWidth;if(w)f.style.transform='scale('+w/1280+')'})}addEventListener('resize',fit);
const T=[
['React.js','<svg viewBox="-12 -12 24 24" fill="none" stroke="#61dafb" stroke-width="1"><circle r="2" fill="#61dafb" stroke="none"/><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></svg>'],
['TypeScript','<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="4" fill="#3178c6"/><text x="44" y="43" text-anchor="end" font-family="Arial,sans-serif" font-weight="700" font-size="24" fill="#fff">TS</text></svg>'],
['Tailwind CSS','<svg viewBox="0 0 54 33"><path fill="#38bdf8" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/></svg>'],
['HTML','<svg viewBox="0 0 100 112"><polygon points="8,4 92,4 84,92 50,104 16,92" fill="#e44d26"/><polygon points="50,98 50,10 86,10 79,89" fill="#f16529"/><text x="50" y="72" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="58" fill="#fff">5</text></svg>'],
['CSS','<svg viewBox="0 0 100 112"><polygon points="8,4 92,4 84,92 50,104 16,92" fill="#264de4"/><polygon points="50,98 50,10 86,10 79,89" fill="#2965f1"/><text x="50" y="72" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="58" fill="#fff">3</text></svg>'],
['JavaScript','<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="3" fill="#f7df1e"/><text x="44" y="43" text-anchor="end" font-family="Arial,sans-serif" font-weight="700" font-size="24" fill="#000">JS</text></svg>']];
const V=[
()=>`<div class="grid">${P.map((p,i)=>`<div class="gc" onclick="openD(${i})"><div class="thumb"><span>${esc(p.t)}</span>${pic(p)}</div><h3>${esc(p.t)}</h3><p>${esc(p.d.length>110?p.d.slice(0,107)+'…':p.d)}</p><a>Details ↗</a></div>`).join('')}</div>`,
()=>`<div class="tech">${T.map(([n,l])=>`<div class="tc"><span class="lg">${l}</span>${n}</div>`).join('')}</div>`];
function tab(i){[...$('#tabs').children].forEach((b,j)=>b.classList.toggle('on',j==i));const v=$('#view');v.style.opacity=0;setTimeout(()=>{v.innerHTML=V[i]();fit();v.style.opacity=1},180);v.style.transition='opacity .25s';
if(event&&event.currentTarget&&event.currentTarget.classList.contains('st'))$('#portfolio').scrollIntoView()}
[...$('#tabs').children].forEach((b,i)=>b.onclick=()=>tab(i));tab(0);document.querySelectorAll('.st b').forEach(b=>b.textContent=P.length);
function openD(i){const p=P[i];$('#dw').innerHTML=`<div><a href="#" class="m" onclick="closeD();return false" style="color:#aaa;font-size:12px;text-decoration:none">← Back</a><h1 style="margin-top:36px">${esc(p.t)}</h1><div class="bar"></div><p class="lead" style="max-width:none">${esc(p.d)}</p><div class="mini"><div>&lt;/&gt;<span>${p.tech.length}<small>Technologies Used</small></span></div><div>◈<span>${p.f.length}<small>Key Features</small></span></div></div><div class="lks">${p.demo?`<a class="lk" href="${p.demo}" target="_blank" rel="noopener">↗ Live Demo</a>`:''}${p.repo?`<a class="lk" href="${p.repo}" target="_blank" rel="noopener">⑂ GitHub</a>`:''}</div><p style="font-size:14px;margin-bottom:14px">&lt;/&gt; Technologies Used</p><div class="tags" style="margin:0">${p.tech.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><div><div class="prev"><span>${esc(p.t)}</span>${pic(p)}</div><div class="kf">✦ Key Features<br>${p.f.map(x=>'· '+esc(x)).join('<br>')}</div></div>`;$('#detail').scrollTop=0;$('#detail').classList.add('on');fit()}function closeD(){$('#detail').classList.remove('on')}
// comments
const C=[{n:'Nama Kamu',t:'Terima kasih sudah mampir',p:1,l:2}];
function draw(){$('#cl').innerHTML=C.map((c,i)=>`<div class="cm ${c.p?'p':''}"><span class="a">${c.n[0].toUpperCase()}</span><div>${c.n.replace(/</g,'&lt;')}${c.p?'<span class="pin">PINNED</span>':''}<small>${c.t.replace(/</g,'&lt;')}</small></div><button onclick="C[${i}].l++;draw()">♡ ${c.l}</button></div>`).join('')}
function post(){const n=$('#cn').value.trim(),t=$('#cc').value.trim();if(!n||!t)return;C.splice(1,0,{n,t,l:0});$('#cn').value=$('#cc').value='';draw()}
draw();

// kartu ID: bisa ditarik ke segala arah (atas, bawah, kiri, kanan), lalu memantul balik seperti tali elastis
(function(){const lan=document.querySelector('.lan'),strap=document.querySelector('.strap'),card=document.getElementById('idcard');if(!lan||!card)return;
const G=3000,K=200,CR=10,CD=1.2,MIND=70;let L=305,MAXD=640,REST_Y=L+G/K;const pend=document.getElementById('pend');function setL(){const m=innerWidth<=760;L=m?175:305;MAXD=m?360:640;REST_Y=L+G/K}setL();addEventListener('resize',setL);
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
let x=still?0:70,y=still?REST_Y:REST_Y-25,vx=0,vy=0,drag=false,ox=0,oy=0,tilt=0,last=performance.now();
const piv=()=>{const r=pend.getBoundingClientRect();return[r.left,r.top]};
card.addEventListener('pointerdown',e=>{const[px,py]=piv();drag=true;card.setPointerCapture(e.pointerId);card.classList.add('drag');ox=x-(e.clientX-px);oy=y-(e.clientY-py);vx=vy=0;e.preventDefault()});
card.addEventListener('pointermove',e=>{if(!drag)return;const[px,py]=piv();const t=performance.now(),dt=Math.max(.001,(t-last)/1000);last=t;
let nx=e.clientX-px+ox,ny=e.clientY-py+oy;const d=Math.hypot(nx,ny);if(d>MAXD){nx*=MAXD/d;ny*=MAXD/d}else if(d<MIND){nx*=MIND/(d||1);ny*=MIND/(d||1)}
vx=.6*vx+.4*(nx-x)/dt;vy=.6*vy+.4*(ny-y)/dt;x=nx;y=ny});
const up=()=>{if(!drag)return;drag=false;card.classList.remove('drag');const m=Math.hypot(vx,vy);if(m>3500){vx*=3500/m;vy*=3500/m}};
card.addEventListener('pointerup',up);card.addEventListener('pointercancel',up);
(function tick(n){let dt=Math.min(.033,(n-last)/1000);if(!drag){last=n;const N=6,h=dt/N;
for(let i=0;i<N;i++){const d=Math.hypot(x,y)||1,ux=x/d,uy=y/d,vr=vx*ux+vy*uy,f=-K*(d-L);
const ax=f*ux-CR*vr*ux-CD*vx,ay=G+f*uy-CR*vr*uy-CD*vy;vx+=ax*h;vy+=ay*h;x+=vx*h;y+=vy*h}}
const d=Math.hypot(x,y)||1,phi=Math.atan2(-x,y);tilt+=(Math.max(-.4,Math.min(.4,vx*.0003))-tilt)*.12;
strap.style.height=d+'px';strap.style.transform='rotate('+phi+'rad)';
card.style.transform='translate('+x+'px,'+y+'px) rotate('+(phi+tilt)+'rad)';
requestAnimationFrame(tick)})(last)})();

// latar: jaring titik yang bergerak pelan + cahaya mengikuti kursor
(function(){const cv=document.getElementById('net');if(!cv)return;const cx=cv.getContext('2d'),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
let W,H,dpr,pts=[],mx=-999,my=-999;const R=document.documentElement.style;
function size(){dpr=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
const n=Math.min(80,Math.floor(W*H/20000));pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:.7+Math.random()*1}))}
addEventListener('resize',()=>{size();draw()});
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;R.setProperty('--mx',mx+'px');R.setProperty('--my',my+'px')});
addEventListener('pointerleave',()=>{mx=my=-999});
function draw(){cx.clearRect(0,0,W,H);const D=135,M=180;
for(let i=0;i<pts.length;i++){const a=pts[i];
for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<D){cx.strokeStyle='rgba(255,255,255,'+(1-d/D)*.16+')';cx.lineWidth=.7;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
const dm=Math.hypot(a.x-mx,a.y-my);if(dm<M){cx.strokeStyle='rgba(255,255,255,'+(1-dm/M)*.4+')';cx.lineWidth=.8;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke()}
cx.fillStyle='rgba(255,255,255,'+(dm<M?.75:.38)+')';cx.beginPath();cx.arc(a.x,a.y,a.r,0,7);cx.fill()}}
function step(){if(!document.hidden){for(const a of pts){a.x+=a.vx;a.y+=a.vy;if(a.x<-10)a.x=W+10;else if(a.x>W+10)a.x=-10;if(a.y<-10)a.y=H+10;else if(a.y>H+10)a.y=-10}draw()}requestAnimationFrame(step)}
size();draw();if(!reduce)step()})();
