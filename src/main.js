import './style.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {fitments,kitById,rimSizes} from './data.js';
gsap.registerPlugin(ScrollTrigger);
const $ = s => document.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
$('#copyright-year').textContent=new Date().getFullYear();
const menu=$('.menu-toggle'), nav=$('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(document.activeElement.closest('#navigation'))menu.focus();}});
const brand=$('#brand'),model=$('#model'),rim=$('#rim'),result=$('#fit-result');
function options(select,items,label,format=v=>v){select.replaceChildren(new Option(`Select ${label}`,''),...items.map(v=>new Option(format(v),v)));select.disabled=!items.length;}
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;};
options(brand,Object.keys(fitments),'brand');
brand.addEventListener('change',()=>{options(model,Object.keys(fitments[brand.value]||{}),'model');options(rim,[],'rim size');result.replaceChildren();});
model.addEventListener('change',()=>{options(rim,model.value?rimSizes:[],'rim size',v=>`${v}″`);result.replaceChildren();});
rim.addEventListener('change',()=>result.replaceChildren());
$('#fit-form').addEventListener('submit',e=>{
 e.preventDefault();if(!e.currentTarget.reportValidity())return;
 const size=Number(rim.value),matches=fitments[brand.value][model.value].map(id=>kitById[id]).sort((a,b)=>a.minRim-b.minRim||a.rotor-b.rotor);
 const fits=matches.filter(k=>k.minRim<=size),bigger=matches.filter(k=>k.minRim>size);
 const head=el('p','fit-summary');head.append(`${brand.value} ${model.value} on ${size}″ rims: `,el('strong',null,fits.length?`${fits.length} kit${fits.length>1?'s':''} fit${fits.length>1?'':'s'}.`:'no kit fits this rim size.'));
 const list=el('ul','fit-kits');
 for(const k of [...fits,...bigger]){
  const ok=k.minRim<=size,li=el('li',ok?'fits':'needs');
  li.append(el('span','kit-series',k.series),el('span','kit-spec',`${k.rotor}mm rotor · min ${k.minRim}″ rim`),el('span','kit-status',ok?'Fits':`Needs ${k.minRim}″+`));
  list.append(li);
 }
 const a=el('a',null,'Confirm with a Nashin dealer ↗︎');a.href='https://nashinbrakes.com';a.target='_blank';a.rel='noopener';
 result.replaceChildren(head,list,a);
});
let lenis;
const media=gsap.matchMedia();
media.add({motion:'(prefers-reduced-motion: no-preference)',reduce:'(prefers-reduced-motion: reduce)'},context=>{
 const {motion}=context.conditions;
 document.body.classList.toggle('static-motion',!motion);
 if(!motion)return;
 lenis=new Lenis({duration:1.05,smoothWheel:true,anchors:true});
 lenis.on('scroll',ScrollTrigger.update);
 const tick=time=>lenis.raf(time*1000);
 gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
 const intro=gsap.timeline({defaults:{ease:'power3.out'}});
 intro.from('.mask>span',{yPercent:110,duration:1.1,stagger:.15},.15)
 .from('.hero-assembly',{rotation:-60,scale:.78,opacity:0,duration:1.5},.05)
 .from('.hero .intro, .hero-copy .button',{opacity:0,y:12,duration:.6,stagger:.1},.8)
 .from('.hero-bottom',{opacity:0,duration:.8},1.1);
 gsap.to('.hero-grid',{yPercent:18,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 gsap.to('.hero-assembly',{y:75,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 const mm=gsap.matchMedia();
 mm.add({desktop:'(min-width:768px)',mobile:'(max-width:767px)'},c=>{
  const desktop=c.conditions.desktop;
  const tl=gsap.timeline({scrollTrigger:{id:'assembly',trigger:'.system',start:'top top',end:()=>`+=${innerHeight*2.5}`,pin:true,scrub:.65,anticipatePin:1,invalidateOnRefresh:true}});
  const step=$('.sequence-active'),steps=gsap.utils.toArray('.callout').length;
  tl.eventCallback('onUpdate',()=>{step.textContent=String(Math.min(steps,Math.max(1,Math.floor(tl.time()-.05)+1))).padStart(2,'0');});
  const parts=gsap.utils.toArray('.part');
  gsap.set(parts.slice(1),{autoAlpha:0});gsap.set(parts[0],{autoAlpha:1});
  parts.slice(1).forEach((part,i)=>{const at=i+1;tl.to(parts[i],{autoAlpha:0,duration:.18},at).fromTo(part,{autoAlpha:0},{autoAlpha:1,duration:.22},at+.06);});
  tl.to('.sequence i',{width:'100%',duration:3,ease:'none'},0);
  const callouts=gsap.utils.toArray('.callout');
  callouts.forEach((el,i)=>{if(i){tl.to(callouts[i-1],{autoAlpha:0,y:-8,duration:.15},i);tl.fromTo(el,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.25},i+.08);}});
  tl.to({}, {duration:.2},2.8);
 });
 gsap.fromTo('.rotor-panel img',{rotation:-35,y:45},{rotation:15,y:-15,ease:'none',scrollTrigger:{trigger:'.rotor-panel',start:'top bottom',end:'bottom top',scrub:1}});
 gsap.from('.pads-panel img',{clipPath:'inset(100% 0 0 0)',y:40,ease:'none',scrollTrigger:{trigger:'.pads-panel',start:'top 85%',end:'center 55%',scrub:.5}});
 gsap.from('.kit-panel img',{xPercent:15,ease:'none',scrollTrigger:{trigger:'.kit-panel',start:'top bottom',end:'center center',scrub:1}});
 gsap.from('.product-title',{x:-15,opacity:0,duration:.5,scrollTrigger:{trigger:'.rotor-panel',start:'top 80%'}});
 const heat=gsap.timeline({scrollTrigger:{trigger:'.technology',start:'top 65%',end:'bottom 45%',scrub:1}});
 heat.set('.heat-stage>img',{transformOrigin:'50% 50%'},0).to('.heat-overlay',{opacity:.75,ease:'none'},0).to('.heat-stage>img',{rotation:65,filter:'sepia(.5) saturate(1.4)',ease:'none'},0).to('.airflow path',{strokeDashoffset:-220,ease:'none'},0);
 gsap.utils.toArray('.feature').forEach(el=>gsap.from(el,{borderColor:'#f12b32',duration:.8,scrollTrigger:{trigger:el,start:'top 80%'}}));
 gsap.from('.footer-top',{y:30,ease:'none',scrollTrigger:{trigger:'footer',start:'top bottom',end:'bottom bottom',scrub:true}});
 return ()=>{mm.revert();gsap.ticker.remove(tick);lenis.destroy();lenis=null;};
});
// Active navigation follows the actual section, including long pinned intervals.
const navLinks=[...document.querySelectorAll('#navigation a')];
function updateNavigation(){const pos=scrollY+innerHeight*.35;let current='';for(const id of ['system','series','products','technology','fit']){const el=document.getElementById(id);const trigger=id==='system'?ScrollTrigger.getById('assembly'):null;const top=trigger?trigger.start:el.getBoundingClientRect().top+scrollY;if(pos>=top)current=id;}navLinks.forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
window.addEventListener('scroll',updateNavigation,{passive:true});
window.addEventListener('load',()=>{ScrollTrigger.refresh();updateNavigation();});
