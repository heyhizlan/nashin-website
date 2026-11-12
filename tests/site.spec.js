import {test,expect} from '@playwright/test';
for(const width of [375,414,768,1024,1440]){
 test(`layout and loaded images at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:900});await page.emulateMedia({reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
  await page.locator('footer').scrollIntoViewIfNeeded();
  await expect.poll(()=>page.evaluate(()=>[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length)).toBe(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  expect(errors).toEqual([]);await expect(page.locator('.callout')).toHaveCount(3);
  for(const c of await page.locator('.callout').all())await expect(c).toBeVisible();
 });
}
test('every client fitment entry maps to a model',async()=>{
 const {parseKits}=await import('../src/data.js');expect(parseKits().unmapped).toEqual([]);
});
test('fitment finder filters kits by rim size and resets on change',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await expect(page.locator('#model')).toBeDisabled();await expect(page.locator('#rim')).toBeDisabled();
 await page.selectOption('#brand','Honda');await page.selectOption('#model','Civic FD');await page.selectOption('#rim','17');
 await page.getByRole('button',{name:'Find my Nashin'}).click();
 const r=page.locator('#fit-result');await expect(r).toContainText('Honda Civic FD on 17″ rims');
 await expect(r.locator('li.fits')).toHaveCount(1);await expect(r.locator('li.needs')).toHaveCount(3);await expect(r.locator('li.fits')).toContainText('330mm');
 await page.selectOption('#rim','15');await expect(r).toBeEmpty();await page.getByRole('button',{name:'Find my Nashin'}).click();await expect(r).toContainText('no kit fits');
 await page.selectOption('#brand','Proton');await expect(page.locator('#rim')).toBeDisabled();await expect(page.locator('#model')).toHaveValue('');await expect(r).toBeEmpty();
});
test('mobile menu supports keyboard, closes on Escape, and focus is visible',async({page})=>{
 await page.setViewportSize({width:375,height:812});await page.goto('/');const menu=page.getByRole('button',{name:'Menu'});await menu.focus();await page.keyboard.press('Enter');await expect(menu).toHaveAttribute('aria-expanded','true');await page.locator('#navigation a').first().focus();await page.keyboard.press('Escape');await expect(menu).toBeFocused();await expect(menu).toHaveAttribute('aria-expanded','false');expect(await menu.evaluate(e=>getComputedStyle(e).outlineStyle)).toBe('solid');
});
for(const width of [375,1440])test(`assembly reverses and callout fits at ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:812});await page.goto('/');await page.waitForTimeout(1400);
 const bounds=await page.evaluate(()=>{const el=document.querySelector('.pin-spacer');return {start:el.offsetTop,end:el.offsetTop+innerHeight*2.5};});
 const scrollTo=async progress=>{await page.evaluate(({bounds,progress})=>window.scrollTo(0,bounds.start+(bounds.end-bounds.start)*progress),{bounds,progress});await page.waitForTimeout(1000);};
 await scrollTo(.85);await expect(page.locator('.callout').nth(2)).toBeVisible();const box=await page.locator('.callout').nth(2).boundingBox();expect(box.y).toBeGreaterThan(80);expect(box.y+box.height).toBeLessThan(813);
 await scrollTo(.08);await expect(page.locator('.callout').first()).toBeVisible();await expect(page.locator('.callout').nth(2)).not.toBeVisible();
});
