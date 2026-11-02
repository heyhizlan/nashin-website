import './style.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {stats, reach, fitments} from './data.js';
gsap.registerPlugin(ScrollTrigger);
const $ = s => document.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const statMarkup = (s, animated=false) => `<div class="stat"><strong><span class="sign">${s.prefix}</span><span ${animated?'class="count" data-value="'+s.value+'"':''}>${s.value}</span><span>${s.suffix}</span></strong><p>${s.label}</p></div>`;
$('#hero-stats').innerHTML=stats.map(s=>statMarkup(s)).join('');
$('#tech-stats').innerHTML=stats.map(s=>statMarkup(s,true)).join('');
$('#sessions').textContent=`${reach.sessions}+`;
$('#regions').textContent=`${reach.regions}+`;
$('#copyright-year').textContent=new Date().getFullYear();
const menu=$('.menu-toggle'), nav=$('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(document.activeElement.closest('#navigation'))menu.focus();}});
const brand=$('#brand'),model=$('#model'),year=$('#year'),result=$('#fit-result');
function options(select,items,label){select.replaceChildren(new Option(`Select ${label}`,''),...items.map(v=>new Option(v,v)));select.disabled=!items.length;}
options(brand,Object.keys(fitments),'brand');
brand.addEventListener('change',()=>{options(model,Object.keys(fitments[brand.value]||{}),'model');options(year,[],'year');result.replaceChildren();});
model.addEventListener('change',()=>{options(year,fitments[brand.value]?.[model.value]||[],'year');result.replaceChildren();});
year.addEventListener('change',()=>result.replaceChildren());
$('#fit-form').addEventListener('submit',e=>{e.preventDefault();if(!e.currentTarget.reportValidity())return;result.replaceChildren();const p=document.createElement('p');p.textContent=`Your car: ${year.value} ${brand.value} ${model.value}. This demo has no verified product matches. Ask a Nashin dealer to confirm a rotor, pad or complete kit for this vehicle.`;const a=document.createElement('a');a.href='https://nashinbrakes.com';a.target='_blank';a.rel='noopener';a.textContent='Open Nashin to contact a dealer ↗︎';result.append(p,a);});
// A generated spherical dot field with coarse original continent masks.
const canvas=$('#globe'),ctx=canvas.getContext('2d');
const globeState={rotation:0};
const continents=[ [[-168,70],[-130,74],[-55,52],[-82,10],[-115,30]], [[-82,12],[-48,-3],[-35,-20],[-70,-56]], [[-18,35],[12,39],[42,13],[32,-33],[16,-35],[-9,5]], [[-10,37],[-8,70],[70,76],[168,60],[145,15],[105,-6],[73,22],[42,35]], [[112,-10],[154,-12],[153,-40],[116,-34]], [[47,-13],[51,-26],[44,-24]] ];
function inside(x,y,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;}
const points=[];
for(let lat=-75;lat<=75;lat+=4){for(let lon=-180;lon<180;lon+=4/Math.cos(lat*Math.PI/180)){points.push({lat:lat*Math.PI/180,lon:lon*Math.PI/180,land:continents.some(p=>inside(lon,lat,p))});}}
function project(lat,lon){const a=lon-101.6869*Math.PI/180+globeState.rotation;return {x:350+267*Math.cos(lat)*Math.sin(a),y:350-267*Math.sin(lat),z:Math.cos(lat)*Math.cos(a)};}
function drawGlobe(){ctx.clearRect(0,0,700,700);ctx.strokeStyle='#222a30';ctx.lineWidth=1;ctx.beginPath();ctx.arc(350,350,270,0,Math.PI*2);ctx.stroke();for(const p of points){const q=project(p.lat,p.lon);if(q.z<0)continue;ctx.fillStyle=p.land?`rgba(181,195,204,${.25+.6*q.z})`:`rgba(94,110,122,${.08+.13*q.z})`;ctx.beginPath();ctx.arc(q.x,q.y,p.land?1.7:1,0,Math.PI*2);ctx.fill();}const pin=project(3.139*Math.PI/180,101.6869*Math.PI/180);ctx.fillStyle='#f12b32';ctx.beginPath();ctx.arc(pin.x,pin.y,4,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#f12b3260';ctx.beginPath();ctx.arc(pin.x,pin.y,12,0,Math.PI*2);ctx.stroke();const tag=$('.globe-pin');tag.style.left=`${pin.x/7}%`;tag.style.top=`${pin.y/7}%`;tag.style.opacity=pin.z>0?'1':'0';}
drawGlobe();
let lenis;
const media=gsap.matchMedia();
media.add({motion:'(prefers-reduced-motion: no-preference)',reduce:'(prefers-reduced-motion: reduce)'},context=>{
 const {motion}=context.conditions;
 document.body.classList.toggle('static-motion',!motion);
 if(!motion){drawGlobe();return;}
 lenis=new Lenis({duration:1.05,smoothWheel:true,anchors:true});
 lenis.on('scroll',ScrollTrigger.update);
 const tick=time=>lenis.raf(time*1000);
 gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
 const intro=gsap.timeline({defaults:{ease:'power3.out'}});
 intro.from('.mask>span',{yPercent:110,duration:1.1,stagger:.15},.15)
 .from('.hero-assembly',{rotation:-60,scale:.78,opacity:0,duration:1.5},.05)
 .from('.hero .intro, .hero-copy .button',{opacity:0,y:12,duration:.6,stagger:.1},.8)
 .from('.hero-bottom',{opacity:0,duration:.8},1.1);
 gsap.to('.orbit',{rotation:'+=360',duration:55,repeat:-1,ease:'none'});
 gsap.to('.hero-grid',{yPercent:18,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 gsap.to('.hero-assembly',{y:75,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 const mm=gsap.matchMedia();
 mm.add({desktop:'(min-width:768px)',mobile:'(max-width:767px)'},c=>{
  const desktop=c.conditions.desktop;
  const tl=gsap.timeline({scrollTrigger:{id:'assembly',trigger:'.system',start:'top top',end:()=>`+=${innerHeight*3.3}`,pin:true,scrub:.65,anticipatePin:1,invalidateOnRefresh:true,onUpdate:self=>{const cards=gsap.utils.toArray('.callout');const visible=cards.reduce((best,el,i)=>Number(gsap.getProperty(el,'opacity'))>Number(gsap.getProperty(cards[best],'opacity'))?i:best,0);$('.sequence-active').textContent=String(visible+1).padStart(2,'0');}}});
  tl.to('.part-caliper',{xPercent:desktop?68:35,yPercent:-12,rotation:5,duration:1},0)
    .to('.part-pads',{autoAlpha:1,xPercent:desktop?32:15,yPercent:15,rotation:0,duration:1},.8)
    .to('.part-hat',{xPercent:desktop?-34:-20,yPercent:3,duration:1},1.8)
    .to('.part-rotor',{xPercent:desktop?-53:-35,rotation:-25,duration:1},2.8)
    .to('.sequence i',{width:'100%',duration:4,ease:'none'},0);
  const callouts=gsap.utils.toArray('.callout');
  callouts.forEach((el,i)=>{if(i){tl.to(callouts[i-1],{autoAlpha:0,y:-8,duration:.15},i);tl.fromTo(el,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.25},i+.08);}});
  tl.to({}, {duration:.2},3.8);
 });
 gsap.fromTo('.rotor-panel img',{rotation:-35,y:45},{rotation:15,y:-15,ease:'none',scrollTrigger:{trigger:'.rotor-panel',start:'top bottom',end:'bottom top',scrub:1}});
 gsap.from('.pads-panel img',{clipPath:'inset(100% 0 0 0)',y:40,ease:'none',scrollTrigger:{trigger:'.pads-panel',start:'top 85%',end:'center 55%',scrub:.5}});
 gsap.from('.kit-panel img',{xPercent:15,ease:'none',scrollTrigger:{trigger:'.kit-panel',start:'top bottom',end:'center center',scrub:1}});
 gsap.from('.product-title',{x:-15,opacity:0,duration:.5,scrollTrigger:{trigger:'.rotor-panel',start:'top 80%'}});
 const heat=gsap.timeline({scrollTrigger:{trigger:'.technology',start:'top 65%',end:'bottom 45%',scrub:1}});
 heat.to('.heat-overlay',{opacity:.75,yPercent:12,ease:'none'},0).to('.heat-stage>img',{rotation:65,filter:'sepia(.5) saturate(1.4)',ease:'none'},0).to('.airflow path',{strokeDashoffset:-220,ease:'none'},0);
 gsap.utils.toArray('.feature').forEach(el=>gsap.from(el,{borderColor:'#f12b32',duration:.8,scrollTrigger:{trigger:el,start:'top 80%'}}));
 gsap.utils.toArray('.count').forEach(el=>{const counter={value:0};gsap.to(counter,{value:Number(el.dataset.value),duration:1.5,ease:'power2.out',scrollTrigger:{trigger:'.tech-stats',start:'top 90%',once:true},onUpdate:()=>el.textContent=Math.round(counter.value)});});
 gsap.to(globeState,{rotation:.9,ease:'none',onUpdate:drawGlobe,scrollTrigger:{trigger:'.philosophy',start:'top bottom',end:'bottom top',scrub:1}});
 gsap.from('.globe-caption',{letterSpacing:'.35em',opacity:.2,ease:'none',scrollTrigger:{trigger:'.philosophy',start:'top 75%',end:'center center',scrub:true}});
 gsap.from('.footer-top',{y:30,ease:'none',scrollTrigger:{trigger:'footer',start:'top bottom',end:'bottom bottom',scrub:true}});
 return ()=>{mm.revert();gsap.ticker.remove(tick);lenis.destroy();lenis=null;};
});
// Active navigation follows the actual section, including long pinned intervals.
const navLinks=[...document.querySelectorAll('#navigation a')];
function updateNavigation(){const pos=scrollY+innerHeight*.35;let current='';for(const id of ['system','products','technology','philosophy','fit']){const el=document.getElementById(id);const trigger=id==='system'?ScrollTrigger.getById('assembly'):null;const top=trigger?trigger.start:el.getBoundingClientRect().top+scrollY;if(pos>=top)current=id;}navLinks.forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
window.addEventListener('scroll',updateNavigation,{passive:true});
window.addEventListener('load',()=>{ScrollTrigger.refresh();updateNavigation();});
