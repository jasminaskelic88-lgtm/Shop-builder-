(async(D)=>{
const sl=ms=>new Promise(r=>setTimeout(r,ms));
const setv=(el,v)=>{const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(p,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
const get=async(s,n,t)=>{const r=await fetch(D.base+s,{cache:'no-store'});if(!r.ok)throw new Error(s+' '+r.status);return new File([await r.blob()],n,{type:t});};
for(let i=0;i<30&&!document.getElementById('field-translations-0.title-input');i++)await sl(500);
const log=[];
let fi=[...document.querySelectorAll('input[type=file]')];
const dp=new DataTransfer();for(const p of D.photos)dp.items.add(await get(p,p,'image/jpeg'));
fi[0].files=dp.files;fi[0].dispatchEvent(new Event('change',{bubbles:true}));log.push('photos');
await sl(5000);
const df=new DataTransfer();for(const [s,n] of D.files)df.items.add(await get(s,n,'application/pdf'));
fi=[...document.querySelectorAll('input[type=file]')];const dig=fi.find(f=>!f.accept)||fi[fi.length-1];
dig.files=df.files;dig.dispatchEvent(new Event('change',{bubbles:true}));log.push('pdfs');
await sl(4000);
setv(document.getElementById('compliance-summary-textarea'),D.cart);
setv(document.getElementById('field-translations-0.title-input'),D.t_de);
setv(document.getElementById('listing-de-translation-description-textarea'),D.d_de);
setv(document.getElementById('listing-de-translation-shopping-cart-summary-textarea'),D.c_de);
const ti=document.getElementById('listing-translations.0.tags-input');
const btn=[...ti.closest('div').parentElement.parentElement.querySelectorAll('button')].find(b=>/Hinzuf/.test(b.innerText));
for(const t of D.tags_de){setv(ti,t);await sl(150);btn.click();await sl(250);}
const ai=document.querySelector('input[name=whatContent][value=ai_gen]');if(ai&&!ai.checked)ai.click();log.push('ai '+(ai&&ai.checked));
await sl(6000);
const errs=[...document.querySelectorAll('[role=alert],.wt-text-red')].map(e=>e.innerText.trim()).filter(Boolean).slice(0,3);log.push('err '+JSON.stringify(errs));
const sb=[...document.querySelectorAll('button')].find(b=>/Entwurf speichern|Änderungen speichern/.test(b.innerText.trim()));
if(sb){sb.click();await sl(8000);}
log.push(location.pathname);return log.join(' | ');
})({"base": "https://raw.githubusercontent.com/jasminaskelic88-lgtm/Shop-builder-/up-/k/s/159/", "photos": ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg"], "files": [["Sozipedia_Leitfaden_Wohnen-im-Alter-und-Umzug_Deutsch.pdf", "Sozipedia_Wohnen-im-Alter_Leitfaden.pdf"], ["Sozipedia_Vorlagen_Wohnen-im-Alter-und-Umzug_Deutsch_A4.pdf", "Sozipedia_Wohnen-im-Alter_Vorlagen_A4.pdf"], ["Sozipedia_Vorlagen_Wohnen-im-Alter-und-Umzug_Deutsch_A3.pdf", "Sozipedia_Wohnen-im-Alter_Vorlagen_A3.pdf"]], "cart": "Housing in later life and moving (German PDFs): guide with conversation example and 6 fillable templates for older adults.", "t_de": "Wohnen im Alter Umzug Vorlagen: Wohnformen, Planung, Abschied | Leitfaden für Fachpersonen | PDF zum Ausfüllen", "d_de": "WOHNEN IM ALTER UND UMZUG\nLeitfaden für Fachpersonen plus Vorlagen für ältere Menschen, um Wünsche ans Wohnen zu klären, Wohnformen abzuwägen und einen Umzug vorzubereiten. Sofort einsetzbar in Seniorenberatung, Sozialer Arbeit, Pflege und Sozialdienst.\n\nWAS DU BEKOMMST\nZwei PDFs, jeweils in A4 und A3 (große Schrift für Sehschwäche):\n1. Leitfaden für Fachpersonen, 23 Seiten: Methode verstehen, Schritt für Schritt, ganzes Gesprächsbeispiel mit Frau Berger, alle Vorlagen ausgefüllt, häufige Fragen, Hintergrund und Quellen.\n2. Vorlagen für Klientinnen und Klienten, 8 Seiten, am Bildschirm ausfüllbar (93 Formularfelder).\n\nDIE 6 VORLAGEN\nVorlage 1: Das ist mir beim Wohnen wichtig\nVorlage 2: Wohnformen im Blick\nVorlage 3: Pro und Contra abwägen\nVorlage 4: Meinen Umzug planen\nVorlage 5: Kosten und Hilfen\nVorlage 6: Abschied und Neuanfang\nDazu: Seite in einfacher Sprache und 12 Fragekarten zum Ausschneiden.\n\nSO ARBEITEST DU DAMIT\nSchritt für Schritt mit Formulierungsvorschlägen: Rahmen klären und zuhören, Wünsche ans Wohnen klären, Wohnformen kennenlernen, Pro und Contra abwägen, Umzug planen, Kosten, Abschied und Neuanfang. Mit Stolpersteinen, Varianten und einem Formulierungsvorschlag für die Akte.\n\nWICHTIG\nDie Vorlagen begleiten die Entscheidung und ersetzen keine Beratung zu Miete, Verträgen, Kosten oder Ansprüchen. Dafür sind Beratungsstellen, Mieterverbände und Sozialämter zuständig. Das Material benennt klar, wann ärztlicher Rat nötig ist.\n\nFÜR WEN\nFachpersonen in Seniorenberatung, Sozialer Arbeit, Pflege und Sozialdienst sowie Leitende von Gesprächsrunden für ältere Menschen.\n\nDIGITALES PRODUKT\nSofortiger Download als PDF, nichts wird versandt. Nutzung für die eigene Arbeit, Teamlizenz bis 10 Personen. Weitergabe oder Verkauf der Dateien ist nicht erlaubt.\n\nSozipedia: Fachmaterial für Fachpersonen.", "c_de": "Wohnen im Alter und Umzug: Leitfaden mit Gesprächsbeispiel und 6 ausfüllbare Vorlagen für die Arbeit mit Älteren.", "tags_de": ["Wohnen im Alter", "Umzug Senioren", "Wohnformen Vorlage", "Seniorenarbeit", "Seniorenberatung", "Betreutes Wohnen", "Soziale Arbeit", "Arbeitsblatt PDF", "Umzug planen", "Altenpflege", "Fachpersonen", "Sozialdienst", "Wohnberatung"]})