(async(D)=>{
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const setv=(el,v)=>{const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(p,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
const get=async(n,type)=>{const r=await fetch(D.base+n,{cache:'no-store'});if(!r.ok)throw new Error(n+' '+r.status);return new File([await r.blob()],n,{type});};
const log=[];
const fi=[...document.querySelectorAll('input[type=file]')];
const dt=new DataTransfer();for(const p of D.photos)dt.items.add(await get(p,'image/jpeg'));
fi[0].files=dt.files;fi[0].dispatchEvent(new Event('change',{bubbles:true}));log.push('photos '+dt.files.length);
await sleep(4000);
const dz=new DataTransfer();for(const z of D.zips)dz.items.add(await get(z,'application/zip'));
const fi2=[...document.querySelectorAll('input[type=file]')];
fi2[1].files=dz.files;fi2[1].dispatchEvent(new Event('change',{bubbles:true}));log.push('zips '+dz.files.length);
await sleep(3000);
setv(document.getElementById('field-translations-0.title-input'),D.title);
setv(document.getElementById('listing-de-translation-description-textarea'),D.desc);
setv(document.getElementById('compliance-summary-textarea'),D.cart_en);
setv(document.getElementById('listing-de-translation-shopping-cart-summary-textarea'),D.cart_de);
const ti=document.getElementById('listing-translations.0.tags-input');
const addBtn=[...ti.closest('div').parentElement.parentElement.querySelectorAll('button')].find(b=>b.innerText.trim()==='Hinzufügen');
for(const t of D.tags){setv(ti,t);await sleep(150);(addBtn||ti).click();if(!addBtn)ti.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));await sleep(250);}
log.push('addBtn '+!!addBtn);
const ai=document.querySelector('input[name=whatContent][value=ai_gen]');if(ai&&!ai.checked)ai.click();log.push('ai '+(ai&&ai.checked));
const sel=document.getElementById('shop-section-select');log.push('section '+(sel&&sel.options[sel.selectedIndex].text));
await sleep(5000);[...document.querySelectorAll("button")].find(b=>b.innerText.trim()==="Entwurf speichern").click();await sleep(7000);log.push(location.pathname);
return log;
})