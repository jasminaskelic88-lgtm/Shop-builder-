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
})({"base": "https://raw.githubusercontent.com/jasminaskelic88-lgtm/Shop-builder-/up-/k/s/155/", "photos": ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg"], "files": [["Sozipedia_Leitfaden_Trauer-und-Verlust-im-Alter_Deutsch.pdf", "Sozipedia_Trauer_Leitfaden.pdf"], ["Sozipedia_Vorlagen_Trauer-und-Verlust-im-Alter_Deutsch_A4.pdf", "Sozipedia_Trauer_Vorlagen_A4.pdf"], ["Sozipedia_Vorlagen_Trauer-und-Verlust-im-Alter_Deutsch_A3.pdf", "Sozipedia_Trauer_Vorlagen_A3.pdf"]], "cart": "Grief in later life (German PDFs): guide with conversation example and 6 fillable templates for supporting grieving people.", "t_de": "Trauerbegleitung Senioren Vorlagen: Verlust, Erinnerung, Trost | Leitfaden für Fachpersonen | PDF zum Ausfüllen", "d_de": "TRAUER UND VERLUST IM ALTER\nLeitfaden für Fachpersonen plus Vorlagen für trauernde ältere Menschen, sofort einsetzbar in Beratung, Sozialer Arbeit, Seelsorge, Pflege, Betreuung und Seniorenarbeit.\n\nWAS DU BEKOMMST\nZwei PDFs, jeweils in A4 und A3 (große Schrift für Sehschwäche):\n1. Leitfaden für Fachpersonen, 23 Seiten: Methode verstehen, Schritt für Schritt, ganzes Gesprächsbeispiel mit Frau Winkler, alle Vorlagen ausgefüllt, häufige Fragen, Hintergrund und Quellen.\n2. Vorlagen für Klientinnen und Klienten, 8 Seiten, am Bildschirm ausfüllbar (80 Formularfelder).\n\nDIE 6 VORLAGEN\nVorlage 1: Mein Verlust\nVorlage 2: Erinnerungen und Trost\nVorlage 3: Meine Gefühle heute\nVorlage 4: Zwischen Trauer und Alltag\nVorlage 5: Meine Menschen und Unterstützung\nVorlage 6: Schwere Tage und Hilfe\nDazu: Seite in einfacher Sprache und 12 Fragekarten zum Ausschneiden.\n\nSO ARBEITEST DU DAMIT\nSchritt für Schritt mit Formulierungsvorschlägen: Rahmen klären und zuhören, Verlust benennen, Erinnern und Trost finden, Gefühle ausdrücken, zwischen Trauer und Alltag pendeln, Menschen und Unterstützung, schwere Tage und Hilfe. Mit Stolpersteinen, Varianten für Trauercafé, Angehörige, Verlust ohne Tod und Sehschwäche sowie einem Formulierungsvorschlag für die Akte.\n\nWICHTIG\nDie Vorlagen ersetzen keine Trauertherapie. Das Material zeigt, wie du Suizidgedanken offen ansprichst, und benennt klar, wann Fachhilfe nötig ist, etwa bei lähmender Trauer, Schlafstörungen oder Verwirrtheit.\n\nFÜR WEN\nFachpersonen in Beratung, Sozialer Arbeit, Seelsorge, Pflege, Betreuung und Seniorenarbeit sowie Teams in Trauercafé, Heim und Tagesstätte.\n\nDIGITALES PRODUKT\nSofortiger Download als PDF, nichts wird versandt. Nutzung für die eigene Arbeit, Teamlizenz bis 10 Personen. Weitergabe oder Verkauf der Dateien ist nicht erlaubt.\n\nSozipedia: Fachmaterial für Fachpersonen.", "c_de": "Trauer im Alter: Leitfaden mit Gesprächsbeispiel und 6 ausfüllbare Vorlagen für die Begleitung trauernder Menschen.", "tags_de": ["Trauerbegleitung", "Trauer Arbeitsblatt", "Verlust im Alter", "Senioren Vorlagen", "Trauerarbeit", "Witwe Witwer", "Erinnerungsarbeit", "Seniorenarbeit", "Soziale Arbeit", "Seelsorge Vorlage", "Arbeitsblatt PDF", "Pflege Betreuung", "Fachpersonen"]})