import {chromium} from '@playwright/test';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
page.on('pageerror',e=>console.log('PAGE ERROR',e.message));
await page.goto('http://localhost:5173');await page.waitForTimeout(2200);await page.screenshot({path:'review/desktop.png'});
console.log('desktop',await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)})));
await page.setViewportSize({width:375,height:812});await page.goto('http://localhost:5173');await page.waitForTimeout(1800);await page.screenshot({path:'review/mobile.png'});console.log('mobile',await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth})));
for(const [name,url] of [['mecha','https://mecha-xyz.webflow.io'],['bmw','https://bmwf3.com']]){try{await page.setViewportSize({width:1440,height:1000});await page.goto(url,{waitUntil:'domcontentloaded',timeout:35000});await page.waitForTimeout(3000);await page.screenshot({path:`review/reference-${name}.png`});await page.mouse.wheel(0,1500);await page.waitForTimeout(1800);await page.screenshot({path:`review/reference-${name}-scroll.png`});console.log(name,'viewed');}catch(e){console.log(name,e.message)}}
await browser.close();
