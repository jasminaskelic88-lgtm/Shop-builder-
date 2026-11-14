(async()=>{const sl=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<30&&!document.getElementById('field-translations-0.title-input');i++)await sl(500);await sl(1500);
const g=id=>(document.getElementById(id)||{}).value||'';
const t=document.body.innerText;
const pdf=(t.match(/Sozipedia_[\w-]+\.pdf/g)||[]).length;
const ph=document.querySelectorAll('img[src*="etsystatic.com/64091794"]').length;
const tags=(document.getElementById('listing-translations.0.tags-input')?.closest('div').parentElement.parentElement.parentElement.innerText.match(/Alle 13 verwendet/)||[]).length;
return JSON.stringify({ed:g('listing-description-textarea').length,ph,pdf,de:g('field-translations-0.title-input').slice(0,25),dd:g('listing-de-translation-description-textarea').length,c:g('compliance-summary-textarea').length,cd:g('listing-de-translation-shopping-cart-summary-textarea').length,tags,ai:document.querySelector('input[name=whatContent][value=ai_gen]')?.checked,sec:(s=>s&&s.options[s.selectedIndex].text)(document.getElementById('shop-section-select'))});})()
