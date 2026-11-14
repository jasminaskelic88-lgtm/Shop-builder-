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
})({"base": "https://raw.githubusercontent.com/jasminaskelic88-lgtm/Shop-builder-/up-/k/s/161/", "photos": ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg"], "files": [["Sozipedia_Leitfaden_Lebensfreude-und-Stimmung-im-Alter_Deutsch.pdf", "Sozipedia_Lebensfreude_Leitfaden.pdf"], ["Sozipedia_Vorlagen_Lebensfreude-und-Stimmung-im-Alter_Deutsch_A4.pdf", "Sozipedia_Lebensfreude_Vorlagen_A4.pdf"], ["Sozipedia_Vorlagen_Lebensfreude-und-Stimmung-im-Alter_Deutsch_A3.pdf", "Sozipedia_Lebensfreude_Vorlagen_A3.pdf"]], "cart": "Joy and mood in later life (German PDFs): guide with conversation example and 6 fillable templates for older adults.", "t_de": "Lebensfreude Senioren Vorlagen: Stimmung, Aktivitäten, Freudenplan | Leitfaden für Fachpersonen | PDF zum Ausfüllen", "d_de": "LEBENSFREUDE UND STIMMUNG IM ALTER\nLeitfaden für Fachpersonen plus Vorlagen für ältere Menschen, um Stimmung zu beobachten und angenehme Tätigkeiten wieder in den Alltag zu holen. Sofort einsetzbar in Seniorenberatung, Sozialer Arbeit, Pflege und Betreuung.\n\nWAS DU BEKOMMST\nZwei PDFs, jeweils in A4 und A3 (große Schrift für Sehschwäche):\n1. Leitfaden für Fachpersonen, 20 Seiten: Methode verstehen, Schritt für Schritt, ganzes Gesprächsbeispiel mit Frau Schmid, alle Vorlagen ausgefüllt, häufige Fragen, Hintergrund und Quellen.\n2. Vorlagen für Klientinnen und Klienten, 8 Seiten, am Bildschirm ausfüllbar (93 Formularfelder).\n\nDIE 6 VORLAGEN\nVorlage 1: Meine Stimmung in der Woche\nVorlage 2: Meine Freudenquellen\nVorlage 3: Was hebt, was drückt\nVorlage 4: Mein Freudenplan\nVorlage 5: Meine Freudenwoche\nVorlage 6: Worauf ich stolz bin\nDazu: Seite in einfacher Sprache und 12 Fragekarten zum Ausschneiden.\n\nSO ARBEITEST DU DAMIT\nSchritt für Schritt mit Formulierungsvorschlägen: Rahmen klären und zuhören, Stimmung beobachten, Freudenquellen finden, Zusammenhänge erkennen, Tätigkeiten planen, Ausprobieren, Erfolge würdigen. Mit Stolpersteinen, Varianten und einem Formulierungsvorschlag für die Akte.\n\nWICHTIG\nDie Vorlagen ersetzen keine Behandlung einer Depression. Das Material zeigt, wie du Anzeichen erkennst und Suizidgedanken offen ansprichst, und benennt klar, wann ärztliche Hilfe nötig ist.\n\nFÜR WEN\nFachpersonen in Seniorenberatung, Sozialer Arbeit, Pflege, Betreuung und Sozialdienst sowie Leitende von Gruppen für ältere Menschen.\n\nDIGITALES PRODUKT\nSofortiger Download als PDF, nichts wird versandt. Nutzung für die eigene Arbeit, Teamlizenz bis 10 Personen. Weitergabe oder Verkauf der Dateien ist nicht erlaubt.\n\nSozipedia: Fachmaterial für Fachpersonen.", "c_de": "Lebensfreude im Alter: Leitfaden mit Gesprächsbeispiel und 6 ausfüllbare Vorlagen für die Arbeit mit Älteren.", "tags_de": ["Lebensfreude Alter", "Senioren Vorlagen", "Depression Alter", "Aktivitätenplan", "Seniorenarbeit", "Soziale Arbeit", "Altenpflege", "Arbeitsblatt PDF", "Stimmung", "Betreuung", "Seniorenberatung", "Fachpersonen", "Wohlbefinden"]})