(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const Gs=new Map;function Yi(t=document,e=""){function s(o,c,l,d=!1){if(!o||!c.length)return;const h=document.createElement("details");h.className=o.className+" session-disclosure",h.id=o.id;const u=document.createElement("summary");u.className="session-disclosure-heading",c.forEach(f=>u.append(f));const m=document.createElement("span");m.className="section-toggle-sign",m.setAttribute("aria-hidden","true"),u.append(m);const y=document.createElement("div");y.className="session-disclosure-content",y.append(...o.childNodes),h.append(u,y);const C=`${e}:${l}`;h.open=Gs.get(C)??d,h.addEventListener("toggle",()=>{h.isConnected&&Gs.set(C,h.open)}),o.replaceWith(h)}const n=t.querySelector("#brief-final-score");if(n){const o=document.createElement("section");for(n.before(o);o.nextSibling;)o.append(o.nextSibling);s(o,[n],"final-score")}for(const o of["brief-scoring","brief-prompts"]){const c=t.querySelector(`#${o}`);c&&s(c.parentElement,[c],o)}const i=t.querySelector("#brief-steps");if(i){const o=i.parentElement.parentElement,c=document.createElement("section");c.className="brief-divider",o.before(c),o.classList.remove("brief-divider");const l=document.createElement("h3");l.textContent="Next steps and rules for this session",c.append(l,o),s(c,[l],"steps-rules")}const r=t.querySelector(".student-brief");r&&s(r,[r.querySelector(".eyebrow")],"brief");const a=t.querySelector("#prompts-form");if(a){const o=a.closest(".card");s(o,[o.querySelector(".section-heading")],"agents",!0)}t.querySelectorAll(".round-feedback-heading").forEach(o=>{const c=document.createElement("section");for(o.before(c);c.nextSibling;)c.append(c.nextSibling);s(c,[o],o.dataset.feedbackRound)})}const Ze=t=>t==null?"Unavailable":t>0&&t<1e-4?"&lt; $0.0001":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:t>0&&t<1?4:2,maximumFractionDigits:t>0&&t<1?4:2}).format(t);function Tn(t){if(!t)return'<section class="card" id="session-spending"><h2>Session API spending</h2><p>Spending information is unavailable. Refresh to try again.</p></section>';const{totals:e,categories:s,partial:n,hasLegacy:i}=t,r=a=>(a.unpriced||a.unknown||a.pending||a.unrecordedAttempts)&&a.usd===0?"Unavailable":Ze(a.usd);return`<section class="card" id="session-spending" aria-labelledby="spending-heading"><div class="section-heading"><h2 id="spending-heading">Session API spending</h2><button type="button" class="secondary" data-action="export" data-format="spending">Export spending CSV</button></div><div class="metrics spending-metrics"><div><strong>${r(e)}</strong><span>Actual usage cost · ${n?"partial records":"recorded"} · USD</span></div><div><strong>${e.estimateUnavailable?"Unavailable":Ze(e.estimatedUsd)}</strong><span>Estimate for scheduled work · USD</span></div></div><p class="small">Calculated from actual API token usage at published rates, not a provider invoice. Includes practice, evaluation and feedback across all rounds, including recorded retries and responses discarded after pause or closure. Updates automatically.</p>${n?`<p class="callout cost-warning">Incomplete cost coverage: ${e.pending} pending calls, ${e.unknown} calls without reported usage, ${e.unpriced} unpriced records and ${e.unrecordedAttempts} older attempts without a retained response. The displayed subtotal may be below the final charge.</p>`:""}<div class="table-scroll" tabindex="0" role="region" aria-label="Session spending breakdown"><table><thead><tr><th scope="col">Activity</th><th scope="col">Matches / reports</th><th scope="col">Actual usage cost</th><th scope="col">Scheduled estimate</th><th scope="col">Input / output tokens</th></tr></thead><tbody>${Object.entries(s).map(([a,o])=>`<tr><th scope="row">${{practice:"Practice",evaluation:"Evaluation",feedback:"Feedback"}[a]}</th><td>${o.items}</td><td>${r(o)}${o.pending||o.unknown||o.unpriced||o.unrecordedAttempts?" · partial":""}</td><td>${o.estimateUnavailable?"Unavailable":Ze(o.estimatedUsd)}</td><td>${o.inputTokens.toLocaleString("en-US")} / ${o.outputTokens.toLocaleString("en-US")}</td></tr>`).join("")}</tbody></table></div>${i?`<p class="small">Includes ${Ze(e.legacyUsd)} reconstructed from older token totals (${e.legacyItems} records), using the published price table checked ${t.pricesChecked}. Historical cache discounts and unsuccessful calls were not retained. New tracked calls total ${Ze(e.recordedUsd)} and retain their rates at request time.</p>`:""}<details><summary>How the comparison works</summary><p class="small">The estimate covers matches already scheduled and feedback reports already queued, using each item’s saved model, full turn allowance and the standard token assumptions in Negotiations. It excludes future unscheduled rounds and feedback not yet queued. A retry adds to actual usage cost but does not create another planned match or report. Human dialogue and scripted rehearsals have no API cost.</p><p class="small">Provider credits, taxes, negotiated discounts, currency conversion, connection tests and Firebase charges are excluded. Unknown usage or prices are flagged, never treated as confirmed free usage. Export before deleting a session if you need to retain its spending history.</p></details></section>`}const De=[{id:"openai",name:"OpenAI",defaultModel:"gpt-6-luna",models:[{id:"gpt-6-luna",name:"GPT-6 Luna",tier:"Classroom default",reasoning:"none"},{id:"gpt-6.1-sol",name:"GPT-6.1 Sol",tier:"Advanced",reasoning:"low"},{id:"gpt-6-astra",name:"GPT-6 Astra",tier:"Frontier",reasoning:"low"},{id:"gpt-4.1-mini",name:"GPT-4.1 mini",tier:"Legacy"},{id:"gpt-4.1",name:"GPT-4.1",tier:"Legacy"},{id:"gpt-4.1-nano",name:"GPT-4.1 nano",tier:"Unavailable",unavailable:!0}]},{id:"anthropic",name:"Anthropic",defaultModel:"claude-haiku-5-5",models:[{id:"claude-haiku-5-5",name:"Claude Haiku 5.5",tier:"Classroom default"},{id:"claude-sonnet-5-5",name:"Claude Sonnet 5.5",tier:"Advanced"},{id:"claude-opus-5-5",name:"Claude Opus 5.5",tier:"Frontier"},{id:"claude-fable-5-2",name:"Claude Fable 5.2",tier:"Frontier"}]},{id:"google",name:"Google",defaultModel:"gemini-3.8-flash",models:[{id:"gemini-3.8-flash",name:"Gemini 3.8 Flash",tier:"Classroom default",reasoning:"low"},{id:"gemini-3.5-flash-lite",name:"Gemini 3.5 Flash-Lite",tier:"Economy",reasoning:"low"},{id:"gemini-4-argon",name:"Gemini 4 Argon",tier:"Advanced",reasoning:"low"},{id:"gemini-4-carbon",name:"Gemini 4 Carbon",tier:"Frontier",reasoning:"low"}]}],Ke=t=>De.find(e=>e.id===t),$t="2026-11-11",Cn={openai:"https://developers.openai.com/api/docs/pricing",anthropic:"https://platform.claude.com/docs/en/about-claude/pricing",google:"https://aistudio.google.com/docs/pricing"},es={"gpt-6-luna":{input:.1,output:.5},"gpt-6.1-sol":{input:2,output:10},"gpt-6-astra":{input:10,output:50},"gpt-4.1-mini":{input:.4,output:1.6,source:"https://developers.openai.com/api/docs/models/gpt-4.1-mini"},"gpt-4.1":{input:2,output:8,source:"https://developers.openai.com/api/docs/models/gpt-4.1"},"claude-haiku-5-5":{input:.1,output:.5},"claude-sonnet-5-5":{input:2,output:10},"claude-opus-5-5":{input:4,output:20},"claude-fable-5-2":{input:8,output:40},"gemini-3.8-flash":{input:.75,output:3.75,changesOn:"2027-01-01",next:{input:1.5,output:7.5}},"gemini-3.5-flash-lite":{input:.3,output:2.5},"gemini-4-argon":{input:2,output:10,changesOn:"2026-12-01",next:{input:4,output:20}},"gemini-4-carbon":{input:2,output:10,changesOn:"2026-12-01",next:{input:4,output:20}}},fs={baseInput:1500,historyPerTurn:100,replyOutput:150,thinkingOutput:500,feedbackInput:8e3,feedbackOutput:600};function Ji(t,e=new Date().toISOString().slice(0,10)){const s=es[t];return s?{...s,...s.changesOn&&e>=s.changesOn?s.next:{}}:null}function ke(t,e,s){if(!Number.isSafeInteger(t)||t<0||t>s)throw Error(`Enter a whole number from 0 to ${s} for ${e}.`);return t}function zs({provider:t,model:e,students:s=10,rounds:n=1,repetitions:i=1,mode:r="AA",practice:a=5,maxTurns:o=12,maxMatches:c=100,autoFeedback:l=!0,date:d=new Date().toISOString().slice(0,10),tokens:h={}}){if(ke(s,"students",200),ke(n,"rounds",20),ke(i,"repetitions",5),ke(a,"practice matches",20),ke(o,"maximum turns",24),ke(c,"match budget",400),i<1||o<2||c<1)throw Error("Repetitions and match budget must be at least 1; maximum turns must be at least 2.");if(!["AA","HH","HA","AH"].includes(r))throw Error("Choose a supported treatment.");if(!/^\d{4}-\d{2}-\d{2}$/.test(d)||!Number.isFinite(Date.parse(d))||new Date(d).toISOString().slice(0,10)!==d)throw Error("Choose a valid session date.");if(d<$t)throw Error(`Choose a date on or after ${$t}; historical prices are not included.`);const u=De.find(D=>D.id===t),m=u==null?void 0:u.models.find(D=>D.id===e);if(!m)throw Error("Choose a model belonging to the selected AI lab.");const y={...fs,...h};for(const[D,Qe]of Object.entries(y))ke(Qe,D,5e4);const C=t==="openai"&&(!m.reasoning||m.reasoning==="none")?0:y.thinkingOutput,f=Array.from({length:o},(D,Qe)=>Qe),S=r==="AA"?f:r==="HH"?[]:f.filter(D=>r==="AH"?D%2===0:D%2===1),M=D=>({input:D.reduce((Qe,Ki)=>Qe+y.baseInput+Ki*y.historyPerTurn,0),output:D.length*(y.replyOutput+C)}),V=s*a,j=r==="AA"?s*(s-1)*i:Math.floor(s/2),he=j*n,N=r==="AA"?s>=2?s:0:Math.floor(s/2)*2,K=l?N*n:0,Bs=V+he,pe=Ji(e,d),qt=D=>pe?(D.input*pe.input+D.output*pe.output)/1e6:null,Fs=qt(M(f)),Hs=qt(M(S)),Vs=qt({input:y.feedbackInput,output:y.feedbackOutput+C}),js=pe?V*Fs:null,Ws=pe?he*Hs:null,qs=pe?K*Vs:null;return{price:pe,practiceMatches:V,evaluationMatches:he,totalMatches:Bs,feedbackReports:K,matchesPerRound:j,eligibleStudents:N,overBudget:Bs>c,oddRoster:r!=="AA"&&s%2!==0,perPractice:Fs,perEvaluation:Hs,perFeedback:Vs,practiceCost:js,evaluationCost:Ws,feedbackCost:qs,total:pe?js+Ws+qs:null}}const W=t=>t===null?"Price unavailable":t>0&&t<1e-4?"< $0.0001":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:t>0&&t<.01?4:2,maximumFractionDigits:t>0&&t<.01?4:2}).format(t);let J={students:10,rounds:1,repetitions:1,mode:"AA",date:new Date().toISOString().slice(0,10),...fs};const te=(t,e,s,n)=>`<label for="cost-${t}">${e}<input id="cost-${t}" data-cost-field="${t}" type="number" min="${s}" max="${n}" step="1" value="${J[t]}"></label>`;function Xi(){return`<section class="card cost-planner" id="cost-planner" aria-labelledby="cost-heading"><h2 id="cost-heading">Estimate session cost</h2><p>Plan a class before you start. Uses the AI model, maximum turns, practice allowance and feedback setting above. Planning inputs do not change or schedule a session.</p><div class="form-grid">${te("students","Expected students",0,200)}${te("rounds","Evaluation rounds",0,20)}<label for="cost-mode">Evaluation treatment<select id="cost-mode" data-cost-field="mode"><option value="AA" ${J.mode==="AA"?"selected":""}>Agent ↔ Agent</option><option value="HH" ${J.mode==="HH"?"selected":""}>Human ↔ Human</option><option value="HA" ${J.mode==="HA"?"selected":""}>Human buyer ↔ Agent seller</option><option value="AH" ${J.mode==="AH"?"selected":""}>Agent buyer ↔ Human seller</option></select></label>${te("repetitions","Repetitions per agent round",1,5)}<label for="cost-date">Session date<input id="cost-date" data-cost-field="date" type="date" min="${$t}" value="${J.date}"></label></div><div id="cost-summary" role="status" aria-live="polite"></div><p class="small">Illustrative estimate using the full turn allowance and editable token assumptions below. Actual usage varies. Excludes retries, tax and Firebase charges; this is not a spending cap.</p><details class="cost-assumptions"><summary>Token assumptions and exclusions</summary><p>Each match is estimated to use all allowed turns. Every AI turn sends the scenario, strategy and growing transcript again. These editable planning assumptions are not measured averages or spending limits. Early agreements may cost less; longer prompts, thinking and retries may cost more.</p><div class="form-grid">${te("baseInput","Starting input tokens per AI turn",0,1e4)}${te("historyPerTurn","Added input tokens per prior message",0,500)}${te("replyOutput","Reply output tokens per AI turn",0,1e3)}${te("thinkingOutput","Extra thinking tokens per AI call",0,2500)}${te("feedbackInput","Input tokens per feedback report",0,5e4)}${te("feedbackOutput","Output tokens per feedback report",0,1400)}</div><p class="small">Thinking is included at output rates for reasoning models; Luna and GPT-4.1 use zero thinking here. Feedback is one report per participating student per completed round, including human rounds; repetitions within one round do not add reports. Practice has no feedback. Assumes all students are eligible and use their full practice allowance. Scripted tests and simulated-student feedback are excluded.</p><p class="small">USD API charges only, using standard uncached text rates and short prompts. No discounts, free credits, tax, currency conversion, connection tests, retries or Firebase hosting/database charges are included. This is not a bill or a hard spending cap.</p></details><details class="cost-models" open><summary>Compare all models</summary><p class="small">Rates per 1 million tokens; match and session estimates use this plan. Prices checked ${$t}. Scheduled price changes follow the selected session date.</p><div class="table-scroll" tabindex="0" role="region" aria-label="Model cost comparison"><table><caption class="sr-only">Model prices and estimated costs in USD</caption><thead><tr><th scope="col">Lab / model</th><th scope="col">Input / 1M</th><th scope="col">Output / 1M</th><th scope="col">Evaluation match</th><th scope="col">Feedback report</th><th scope="col">Session total</th></tr></thead><tbody id="cost-model-rows"></tbody></table></div><div id="cost-price-notes" class="small"></div><p class="small">Official pricing: ${De.map(t=>`<a href="${Cn[t.id]}" target="_blank" rel="noopener noreferrer">${t.name}</a>`).join(" · ")}. Availability still depends on your saved key.</p></details></section>`}function Ut(){const t=document.querySelector("#cost-planner"),e=document.querySelector("#negotiation-settings");if(!t||!e)return;const s=t.querySelector("#cost-summary"),n=t.querySelector("#cost-model-rows"),i=[...t.querySelectorAll("[data-cost-field]")];for(const c of i)J[c.dataset.costField]=c.type==="number"?c.value===""?NaN:Number(c.value):c.value;t.querySelector("#cost-repetitions").disabled=J.mode!=="AA";const r=c=>e.elements.namedItem(c),a=c=>r(c).value===""?NaN:Number(r(c).value),o={provider:r("provider").value,model:r("model").value,maxTurns:a("maxTurns"),practice:a("maxPractice"),maxMatches:a("maxMatches"),autoFeedback:r("autoFeedback").checked,...J,tokens:Object.fromEntries(Object.keys(fs).map(c=>[c,J[c]]))};try{if(i.some(l=>!l.disabled&&(l.value===""||!l.validity.valid)))throw Error("Enter valid planning values to see an estimate.");const c=zs(o);s.innerHTML=`<div class="cost-total"><span>Estimated session API cost · USD</span><strong>${W(c.total)}</strong><span>${De.find(l=>l.id===o.provider).models.find(l=>l.id===o.model).name} · ${o.maxTurns} turns per match</span></div><dl class="cost-breakdown"><dt>Practice · ${c.practiceMatches} matches</dt><dd>${W(c.practiceCost)}</dd><dt>Evaluation · ${c.evaluationMatches} matches</dt><dd>${W(c.evaluationCost)}</dd><dt>Feedback · ${c.feedbackReports} reports</dt><dd>${W(c.feedbackCost)}</dd></dl><p class="small">${c.totalMatches} planned matches / ${o.maxMatches} match budget. ${c.matchesPerRound} evaluation matches per round. Practice is always Agent ↔ Agent.</p>${c.overBudget?`<p class="callout cost-warning">This plan exceeds the match budget by ${c.totalMatches-o.maxMatches}. ${c.totalMatches>400?"It also exceeds the 400-match session limit; split the class or reduce the plan.":"Increase the match budget or reduce students, rounds or practices."} The estimate includes the entire plan, not just the allowed matches.</p>`:""}${c.oddRoster?'<p class="callout cost-warning">Human and hybrid rounds require an even roster. This estimate pairs only the even subset; adjust the roster before starting.</p>':""}`,n.innerHTML=De.flatMap(l=>l.models.filter(d=>!d.unavailable).map(d=>{var y;const h=zs({...o,provider:l.id,model:d.id}),u=d.id===o.model&&l.id===o.provider,m=((y=es[d.id])==null?void 0:y.source)||Cn[l.id];return`<tr ${u?'class="cost-selected"':""}><th scope="row"><a href="${m}" target="_blank" rel="noopener noreferrer">${d.name}</a><small>${l.name} · ${u?"Selected":d.tier}</small></th><td>${h.price?W(h.price.input):"Unavailable"}</td><td>${h.price?W(h.price.output):"Unavailable"}</td><td>${W(h.perEvaluation)}</td><td>${W(h.perFeedback)}</td><td><strong>${W(h.total)}</strong></td></tr>`})).join(""),t.querySelector("#cost-price-notes").textContent=Object.entries(es).filter(([,l])=>l.changesOn).map(([l,d])=>`${l}: ${o.date<d.changesOn?"introductory rates; ":""}${W(d.next.input)} input / ${W(d.next.output)} output per 1M from ${d.changesOn}.`).join(" ")}catch(c){s.textContent=c.message,n.innerHTML="",t.querySelector("#cost-price-notes").textContent=""}}const Qi="data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eOpenAI%3c/title%3e%3cpath%20d='M22.2819%209.8211a5.9847%205.9847%200%200%200-.5157-4.9108%206.0462%206.0462%200%200%200-6.5098-2.9A6.0651%206.0651%200%200%200%204.9807%204.1818a5.9847%205.9847%200%200%200-3.9977%202.9%206.0462%206.0462%200%200%200%20.7427%207.0966%205.98%205.98%200%200%200%20.511%204.9107%206.051%206.051%200%200%200%206.5146%202.9001A5.9847%205.9847%200%200%200%2013.2599%2024a6.0557%206.0557%200%200%200%205.7718-4.2058%205.9894%205.9894%200%200%200%203.9977-2.9001%206.0557%206.0557%200%200%200-.7475-7.0729zm-9.022%2012.6081a4.4755%204.4755%200%200%201-2.8764-1.0408l.1419-.0804%204.7783-2.7582a.7948.7948%200%200%200%20.3927-.6813v-6.7369l2.02%201.1686a.071.071%200%200%201%20.038.052v5.5826a4.504%204.504%200%200%201-4.4945%204.4944zm-9.6607-4.1254a4.4708%204.4708%200%200%201-.5346-3.0137l.142.0852%204.783%202.7582a.7712.7712%200%200%200%20.7806%200l5.8428-3.3685v2.3324a.0804.0804%200%200%201-.0332.0615L9.74%2019.9502a4.4992%204.4992%200%200%201-6.1408-1.6464zM2.3408%207.8956a4.485%204.485%200%200%201%202.3655-1.9728V11.6a.7664.7664%200%200%200%20.3879.6765l5.8144%203.3543-2.0201%201.1685a.0757.0757%200%200%201-.071%200l-4.8303-2.7865A4.504%204.504%200%200%201%202.3408%207.872zm16.5963%203.8558L13.1038%208.364%2015.1192%207.2a.0757.0757%200%200%201%20.071%200l4.8303%202.7913a4.4944%204.4944%200%200%201-.6765%208.1042v-5.6772a.79.79%200%200%200-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759%200%200%200-.7854%200L9.409%209.2297V6.8974a.0662.0662%200%200%201%20.0284-.0615l4.8303-2.7866a4.4992%204.4992%200%200%201%206.6802%204.66zM8.3065%2012.863l-2.02-1.1638a.0804.0804%200%200%201-.038-.0567V6.0742a4.4992%204.4992%200%200%201%207.3757-3.4537l-.142.0805L8.704%205.459a.7948.7948%200%200%200-.3927.6813zm1.0976-2.3654l2.602-1.4998%202.6069%201.4998v2.9994l-2.5974%201.4997-2.6067-1.4997Z'/%3e%3c/svg%3e",Zi="data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eAnthropic%3c/title%3e%3cpath%20d='M17.3041%203.541h-3.6718l6.696%2016.918H24Zm-10.6082%200L0%2020.459h3.7442l1.3693-3.5527h7.0052l1.3693%203.5528h3.7442L10.5363%203.5409Zm-.3712%2010.2232%202.2914-5.9456%202.2914%205.9456Z'/%3e%3c/svg%3e",Pn="/agentlab/assets/google-g-CpxN0HWb.png",Be=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ms(t,e){return Ke(t).models.filter(s=>!s.unavailable||s.id===e).map(s=>`<option value="${Be(s.id)}" ${s.id===e?"selected":""} ${s.unavailable?"disabled":""}>${Be(s.name)} · ${s.tier}</option>`).join("")}function er(t){const e=t.provider||"openai";return`<div class="setting-field"><label for="setting-provider">AI lab</label><select id="setting-provider" name="provider">${De.map(s=>`<option value="${s.id}" ${s.id===e?"selected":""}>${s.name}</option>`).join("")}</select><p class="field-help">Uses the saved API key for this lab. Switching labs selects its classroom default.</p></div><div class="setting-field"><label for="setting-model">AI model</label><select id="setting-model" name="model" aria-describedby="help-model">${ms(e,t.model||Ke(e).defaultModel)}</select><p id="help-model" class="field-help">Classroom defaults balance cost and useful dialogue. Advanced and frontier models are optional and can cost substantially more. The same lab and model generate negotiations and feedback.</p><button type="button" class="text-button" data-action="default-ai-model">Use this lab’s classroom default</button></div>`}function Rn(t){const e=t.keyConfigured&&!t.statusUnavailable;return`<p class="ai-key-status ${e?"is-saved":""}" role="status" data-key-status="${Be(t.id)}"><span class="ai-key-status-icon" aria-hidden="true">${t.statusUnavailable?"!":e?"✓":"○"}</span><span>${t.statusUnavailable?"Status unavailable":e?"API key saved":"No API key saved"}</span></p>${t.statusUnavailable?'<p class="field-help ai-status-help">Check server setup to confirm the saved key.</p>':""}`}function tr(t,e){const s={openai:Qi,anthropic:Zi,google:Pn};return`<section class="card"><h2>AI connections</h2><p>Save a separate API key for each lab, then choose the lab and model above. Keys are shared by instructors; only administrators can replace or test them.</p><div class="ai-connections">${t.map(n=>`<section class="ai-connection ${n.keyConfigured&&!n.statusUnavailable?"has-saved-key":""}"><div class="ai-provider-heading"><span class="ai-provider-logo"><img src="${s[n.id]}" alt="" width="28" height="28"></span><h3>${Be(n.name)}</h3></div>${Rn(n)}<p class="field-help">Classroom default: ${Be(n.defaultModel)}.</p>${e?`<form class="ai-key-form" data-provider="${n.id}"><label for="key-${n.id}">${n.keyConfigured?"Replace":"Add"} ${Be(n.name)} API key</label><input id="key-${n.id}" type="password" name="apiKey" autocomplete="new-password" minlength="10" maxlength="4096" required placeholder="Paste API key"><button class="secondary">Save key</button></form><div class="ai-connection-test"><label for="test-model-${n.id}">Model to test</label><select id="test-model-${n.id}">${ms(n.id,n.defaultModel)}</select><button type="button" class="secondary" data-action="test-ai-connection" data-provider="${n.id}">Test connection · small API charge</button><p class="field-help" role="status" data-test-result="${n.id}"></p></div>`:""}</section>`).join("")}</div><p class="small">Saved keys are stored securely on the server and are never shown again. Saving does not call the lab. Test connection checks key and model access with a short paid request. Model availability depends on your lab account.</p></section>`}function On(t,e){const s=t.querySelector("[name=model]");s.innerHTML=ms(e,Ke(e).defaultModel),gs(t)}function gs(t){const e=t.querySelector("[name=provider]").value,s=t.querySelector("[name=model]").value,n=Ke(e).models.find(a=>a.id===s),i=t.querySelector("[name=temperature]"),r=e==="openai"&&(!(n!=null&&n.reasoning)||n.reasoning==="none");i.disabled=!r,t.querySelector("#help-temperature").textContent=r?"Controls response variation. Lower values tend to be more consistent; higher values more varied. Default: 1.":"This model uses provider-controlled sampling. Temperature is not sent; reasoning is kept low to control cost and latency."}const Nn="agentlab-theme",Dn=matchMedia("(prefers-color-scheme: dark)");let Ie;try{Ie=localStorage.getItem(Nn)}catch{}function bs(t){var e;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t==="dark"?"#181c1a":"#f5f6f1"),document.querySelectorAll('[data-action="toggle-theme"]').forEach(s=>{s.textContent=s.hasAttribute("data-theme-compact")?t==="dark"?"☀":"☾":t==="dark"?"☀ Light theme":"☾ Dark theme",s.setAttribute("aria-label",`Switch to ${t==="dark"?"light":"dark"} theme`),s.title=s.getAttribute("aria-label")})}bs(Ie==="light"||Ie==="dark"?Ie:Dn.matches?"dark":"light");Dn.addEventListener("change",t=>{Ie||bs(t.matches?"dark":"light")});function sr({compact:t=!1}={}){const e=document.documentElement.dataset.theme==="dark",s=`Switch to ${e?"light":"dark"} theme`;return`<button type="button" class="secondary theme-toggle${t?" theme-compact":""}" data-action="toggle-theme" ${t?"data-theme-compact":""} aria-label="${s}" title="${s}">${t?e?"☀":"☾":e?"☀ Light theme":"☾ Dark theme"}</button>`}document.addEventListener("click",t=>{if(t.target.closest('[data-action="toggle-theme"]')){Ie=document.documentElement.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem(Nn,Ie)}catch{}bs(Ie)}});const et=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function nr(t,e={}){if(!t)return"";const s=t.profile||{},n=[s.firstName,s.lastName].filter(Boolean).join(" ").trim()||s.name||e.displayName||"My account",i=e.email||s.email||"",r=Array.from(n)[0].toLocaleUpperCase(),a=["admin","lecturer"].includes(t.role),o=(c,l,d="")=>`<button type="button" class="profile-link" data-action="${l}" ${d}>${c}</button>`;return`<div class="profile-menu"><button type="button" class="profile-trigger" data-profile-toggle aria-expanded="false" aria-controls="profile-panel" aria-label="Account options for ${et(n)}"><span class="profile-avatar" aria-hidden="true">${et(r)}</span><span class="profile-trigger-name">${et(n)}</span><span class="profile-chevron" aria-hidden="true">⌄</span></button><div id="profile-panel" class="profile-panel" hidden><div class="profile-identity"><strong>${et(n)}</strong>${i?`<span>${et(i)}</span>`:""}</div><div class="profile-links">${o("My profile & statistics","profile")}${o("My sessions","home")}${a?o("Create a session","create-session-shortcut")+o("Negotiation settings","admin-tab",'data-tab="negotiations"'):o("Join a session","join-session-shortcut")}${t.role==="admin"?o("Student directory","student-directory"):""}</div><div class="profile-signout">${o("Log out","logout")}</div></div></div>`}function ys(t=!1){const e=document.querySelector("[data-profile-toggle]"),s=document.querySelector("#profile-panel");!e||!s||s.hidden||(s.hidden=!0,e.setAttribute("aria-expanded","false"),t&&e.focus())}document.addEventListener("click",t=>{const e=t.target.closest("[data-profile-toggle]");if(e){const s=document.getElementById(e.getAttribute("aria-controls"));s.hidden=!s.hidden,e.setAttribute("aria-expanded",String(!s.hidden));return}(!t.target.closest(".profile-menu")||t.target.closest(".profile-link"))&&ys(!!t.target.closest(".profile-link"))});document.addEventListener("keydown",t=>{var e;if(t.key==="Escape"&&document.querySelector('[data-profile-toggle][aria-expanded="true"]')&&(t.preventDefault(),ys(!0)),t.key==="ArrowDown"&&t.target.matches("[data-profile-toggle]")){t.preventDefault();const s=document.querySelector("#profile-panel");s.hidden=!1,t.target.setAttribute("aria-expanded","true"),(e=s.querySelector("button"))==null||e.focus()}});document.addEventListener("focusin",t=>{t.target.closest(".profile-menu")||ys()});function ir(t,{esc:e,date:s,btn:n,badge:i}){var c,l;const r=["closed","debrief"].includes(t.status),a=t.memberCount||0,o=`data-session="${e(t.id)}" data-code="${e(t.code)}"`;return`<article class="admin-session-card" aria-label="Session ${e(t.code)}"><div class="session-card-top"><div><div class="session-card-code">${e(t.code)}</div>${i(t.status)}${t.simulation?i("test_session"):""}</div><div class="participant-count"><strong>${a} ${a===1?"participant":"participants"}</strong><span>Used-car negotiation</span><span class="session-ai">${e(((c=t.simulation)==null?void 0:c.engine)==="scripted"?"Scripted rehearsal":((l=t.config)==null?void 0:l.model)||"AI agents")}</span></div></div><h3>${e(t.title)}</h3><p class="session-metadata">${t.moduleCode?`${e(t.moduleCode)} · `:""}Created ${e(s(t.createdAt))}</p>${t.deletingAt?'<p class="small">Deletion was interrupted. Click Delete to finish removing this session.</p>':""}<div class="actions session-actions"><button type="button" class="primary" data-open="${e(t.id)}" ${t.deletingAt?"disabled":""}>Open</button>${r?"":n("Copy link","copy-session-link","secondary",`data-code="${e(t.code)}" ${t.simulation?'disabled title="Test sessions are restricted to their instructor"':""}`)}${n("↓ Export data","session-export-menu","export-button",o+(t.deletingAt?" disabled":""))}${n("🧪 Test round","test-round","secondary",o+(t.deletingAt?" disabled":""))}${r?"":n("Close session","dashboard-close","secondary",o)}${n("Delete","delete-session","danger",o)}</div></article>`}function rr(t,e,{esc:s,btn:n}){var r;(r=document.querySelector("#session-export-dialog"))==null||r.remove();const i=document.createElement("dialog");i.id="session-export-dialog",i.className="export-dialog",i.setAttribute("aria-labelledby","export-heading"),i.innerHTML=`<h2 id="export-heading">Export ${s(e)}</h2><p>Download this session’s results or complete records.</p><div class="export-options">${[["csv","Outcomes (CSV)"],["scores","Student scores (CSV)"],["json","Full session (JSON)"]].map(([a,o])=>n(o,"dashboard-export","secondary",`data-session="${s(t)}" data-code="${s(e)}" data-format="${a}"`)).join("")}</div><form method="dialog"><button class="secondary">Close</button></form>`,document.body.append(i),i.addEventListener("close",()=>i.remove(),{once:!0}),i.showModal()}const se=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Fe(t,e){var a,o,c;const s=(t.ownRoles||[]).includes(e),n=e==="buyer"?"buying":"selling",i=((a=t.ownKinds)==null?void 0:a[e])||((o=t.conditions)==null?void 0:o[e]);if(s)return i==="agent"?"Your "+n+" agent":"You · "+(e==="buyer"?"Buyer":"Seller");const r=i==="agent"?n+" agent":e==="buyer"?"buyer":"seller";return(c=t.ownRoles)!=null&&c.length?"Other "+r:r.charAt(0).toUpperCase()+r.slice(1)}function ts(t,e){const s=t.ownRoles||[];return e===(s.length===1?s[0]:"buyer")?"outgoing":"incoming"}function ar(t,{sessionStatus:e,ownTurn:s,now:n=Date.now()}={}){var r,a;return t.status!=="playing"?null:e==="paused"?{text:"Conversation paused. Replies will resume when the activity continues.",animated:!1}:e!=="active"?null:t.deadline&&t.deadline<=n?{text:"Turn deadline reached. Waiting for the result…",animated:!1}:s?null:{text:(((r=t.ownKinds)==null?void 0:r[t.turn])||((a=t.conditions)==null?void 0:a[t.turn]))==="agent"?`${Fe(t,t.turn)} is thinking…`:`Waiting for ${Fe(t,t.turn)} to reply…`,animated:!0}}function or(t){const e=["buyer","seller"],s=t.ownRoles||[];return'<div class="conversation-legend" role="group" aria-label="Conversation colours">'+e.map(i=>{const r=ts(t,i);return'<span class="legend-item"><span class="legend-swatch '+r+'" aria-hidden="true"></span><span><strong>'+se(Fe(t,i))+"</strong><small>"+(r==="outgoing"?"Blue · right":"Grey · left")+"</small></span></span>"}).join("")+"</div>"+(s.length===2?'<p class="legend-note">Both agents are yours. Blue identifies your buying agent; grey identifies your selling agent.</p>':s.length===1?'<p class="legend-note">Your side is blue on the right; the other side is grey on the left.</p>':"")}function cr(t,{money:e,sessionStatus:s,ownTurn:n,opened:i=!1,now:r}={}){const a=ar(t,{sessionStatus:s,ownTurn:n,now:r}),o=t.transcript.map(c=>`<li class="message ${ts(t,c.role)}"><div><strong>${se(Fe(t,c.role))} · Turn ${c.turn}</strong><span>${se(c.type)} ${c.price!=null?e(c.price):""}</span></div><p>${se(c.message)}</p></li>`).join("");return`${or(t)}<details class="conversation" data-id="${se(t.id)}" ${i||t.status==="playing"?"open":""}><summary>Negotiation transcript (${t.transcript.length} turns)</summary><p class="small"><strong>${se(Fe(t,"buyer"))}</strong> ↔ <strong>${se(Fe(t,"seller"))}</strong>${t.practice?" · Practice: both agents use your instructions.":""}</p><ol class="transcript">${o||'<li class="conversation-empty">The negotiation has not started yet.</li>'}</ol></details><div class="reply-status" role="status" aria-live="polite" aria-atomic="true">${a?`<span class="reply-bubble ${ts(t,t.turn)}">${a.animated?'<span class="reply-dots" aria-hidden="true"><i></i><i></i><i></i></span>':""}<span>${se(a.text)}</span></span>`:""}</div>`}function lr(t=""){return`<label class="message-label">Message<textarea name="message" class="message-input" rows="4" maxlength="1200" placeholder="Write your message or explain your offer…">${se(t)}</textarea></label>`}const Ks={buyer:`You are my buying agent for the 2021 BMW X1 xDrive25e M Sport.

Aim to buy at a low price while reaching an agreement. Open at €24,500 and aim to settle at or below €26,000. These are targets, not reasons to reject an otherwise worthwhile deal.

Use the stated mileage of 105,013 km and the shared €24,000–€28,000 value range to explain your offer. Do not invent defects, battery condition, service history or competing offers.

Increase your offer gradually, usually by €250–€500. Ask the seller for a concession in return. Do not automatically split the difference or match every counteroffer.

Never exceed the buyer maximum supplied in the session. If it differs from €28,000, follow the supplied limit and adjust your opening offer and target accordingly.

There are 12 messages total, not 12 messages per side. As the conversation approaches its final messages, prioritise a deal below your maximum over holding rigidly to your target. Accept a favourable outstanding offer explicitly. Do not accept an offer that exceeds your maximum.

Keep each message concise, polite and focused on price.`,seller:`You are my selling agent for the 2021 BMW X1 xDrive25e M Sport.

Aim to sell at a high price while reaching an agreement. Open at €27,500 and aim to settle at or above €26,000. These are targets, not reasons to reject an otherwise worthwhile deal.

Support your asking price with the stated M Sport specification, automatic transmission, six-month warranty and included new alloy wheels. Acknowledge the mileage of 105,013 km. Do not invent service history, battery condition, competing buyers or an accident-free history.

Reduce your asking price gradually, usually by €250–€500. Ask the buyer to raise their offer in return. Do not automatically split the difference or immediately match their offer.

Never accept less than the seller minimum supplied in the session. If it differs from €24,000, follow the supplied limit and adjust your opening price and target accordingly.

There are 12 messages total, not 12 messages per side. On your final opportunity, accept an outstanding offer above your minimum if it is preferable to no agreement, even if it misses your target. Do not rely on the buyer getting another turn after the final message.

Keep each message concise, polite and focused on price.`},U={id:"bmw-x1-2021-v1",currency:"EUR",title:"2021 BMW X1 xDrive25e M Sport",mileageKm:105013,location:"Dublin",source:"https://www.cars.ie/car/42696819-2021-bmw-x1-m-sport/",buyerValue:28e3,sellerCost:24e3,equipment:["Brand new 20” alloy wheels (included in the price)","Brand new M Performance styling kit","Front gloss black kidney grilles","Front splitter","Side extensions","Rear spoiler"],specifications:[["Overview",[["Make","BMW"],["Model","X1"],["Variant","xDrive25e M Sport"],["Trim level","Sports Trim"],["Year","2021"],["Mileage","105,013 km"],["Fuel type","Petrol Plug-in Hybrid"],["Transmission","Automatic"],["Body type","SUV"],["Seats","5"],["Doors","5"],["Colour","Grey"]]],["Ownership & history",[["Current country of registration","Ireland"],["Imported","No"],["Total owners","1"],["History check","History checked"],["Warranty","6 months"]]],["Running costs",[["Road tax","€140"],["Combined fuel consumption","7.4 L/100 km"]]],["Performance",[["Engine size","1.5 L"],["Engine power","220 hp"],["Acceleration (0–100 km/h)","6.9 sec"],["Battery capacity","Not specified"],["Battery range","Not specified"]]],["Dimensions",[["External length","4.45 m"],["External width","1.82 m"],["External height","1.58 m"],["Ground clearance","18 cm"],["Boot volume","450 L"],["Boot volume (seats down)","1,470 L"],["Fuel tank capacity","36 L"]]],["Safety",[["Euro NCAP overall safety rating","5/5"]]]]},dr={id:"camry-2020-v1",currency:"USD",title:"2020 Toyota Camry LE",buyerValue:22e3,sellerCost:18e3},rt=t=>(t==null?void 0:t.scenarioId)===U.id?U:dr,$=(t,e="EUR",s=0)=>t==null?"—":new Intl.NumberFormat(e==="EUR"?"en-IE":"en-US",{style:"currency",currency:e,maximumFractionDigits:s}).format(t),xn=t=>{var e,s;return{min:((e=t==null?void 0:t.valueRange)==null?void 0:e.min)??(t==null?void 0:t.sellerCost)??U.sellerCost,max:((s=t==null?void 0:t.valueRange)==null?void 0:s.max)??(t==null?void 0:t.buyerValue)??U.buyerValue}};function ur(t,e="/agentlab/"){const s=xn(t),n=r=>`${e}cars/bmw-x1/${String(r+1).padStart(2,"0")}.webp`,i=(r,a=!0)=>`<img src="${n(r)}" alt="${U.title} · listing photo ${r+1}" ${a?'loading="lazy"':'fetchpriority="high"'} width="1200" height="900">`;return`<section class="car-listing" aria-labelledby="car-title">
    <div class="car-gallery" aria-label="Vehicle photographs">
      ${Array.from({length:5},(r,a)=>`<button type="button" class="car-photo ${a===0?"car-photo-main":""}" data-car-photo="${a}" aria-label="Open photo ${a+1} of 14">${i(a,a>0)}${a===4?'<span class="car-more-photos">+9 photos</span>':""}</button>`).join("")}
      <button type="button" class="car-photo-count" data-car-photo="0">▧ View all 14 photos</button>
    </div>
    <div class="car-listing-body">
      <div class="car-title-row"><div><h2 id="car-title">${U.title}</h2><p class="car-location">${U.location}</p></div></div>
      <div class="car-value-range"><span>Estimated value (</span><span class="price-help" data-price-help><button type="button" data-help-trigger aria-expanded="false" aria-describedby="kbb-help">KBB</button><span class="price-help-box" id="kbb-help" role="tooltip" hidden><strong>What does KBB mean?</strong><span>KBB stands for Kelley Blue Book, a vehicle valuation guide. In a negotiation, valuation information gives both sides a reference for judging offers; it does not set the agreed price.</span><span>This exercise uses a KBB-style range to represent the two outside options. It is an instructor-set teaching assumption, not a verified KBB valuation of this BMW.</span></span></span><span>):</span><span class="price-help range-help" data-price-help><button type="button" data-help-trigger aria-expanded="false" aria-describedby="value-range-help">${$(s.min)}–${$(s.max)}</button><span class="price-help-box" id="value-range-help" role="tooltip" hidden><strong>Where does this range come from?</strong><span><b>${$(s.min)} — seller’s outside option:</b> the amount the seller can receive by trading the car in to a dealer.</span><span><b>${$(s.max)} — buyer’s outside option:</b> the price the buyer would pay for a similar vehicle from another dealer.</span><span>The ${$(s.max-s.min)} difference is the total surplus available to divide. An agreed price between the endpoints improves on both alternatives; at an endpoint, one side earns zero surplus. These outside options are set for this exercise.</span></span></span><small>KBB-style exercise range · hover or tap for explanations</small></div>
      <dl class="car-highlights">
        ${[["◴","105,013 km","Mileage"],["⛽","1.5 L","Petrol Plug-in Hybrid"],["⚙","Automatic","Transmission"],["✓","History","Checked; 6 months warranty"],["♙","1","Previous owner"],["◈","Grey","Colour"]].map(([r,a,o])=>`<div><span class="car-spec-icon" aria-hidden="true">${r}</span><div><dd>${a}</dd><dt>${o}</dt></div></div>`).join("")}
      </dl>
    </div>
    <dialog class="car-photo-dialog" aria-label="Vehicle photo gallery">
      <div class="car-dialog-toolbar"><span data-car-photo-status aria-live="polite">Photo 1 of 14</span><button type="button" data-car-close aria-label="Close photo gallery">Close ×</button></div>
      <div class="car-dialog-stage"><button type="button" data-car-step="-1" aria-label="Previous photo">‹</button><img data-car-large src="${n(0)}" alt="${U.title} · listing photo 1"><button type="button" data-car-step="1" aria-label="Next photo">›</button></div>
      <div class="car-thumbnails">${Array.from({length:14},(r,a)=>`<button type="button" data-car-thumb="${a}" aria-label="Show photo ${a+1}" aria-pressed="${a===0}">${i(a)}</button>`).join("")}</div>
    </dialog>
  </section>`}function hr(t=document){if(t.__carGalleryReady)return;t.__carGalleryReady=!0;let e=null,s;const n=(a,o)=>{a.querySelector('[role="tooltip"]').hidden=!o,a.querySelector("[data-help-trigger]").setAttribute("aria-expanded",String(o)),o||delete a.dataset.pinned},i=()=>t.querySelectorAll("[data-price-help]").forEach(a=>n(a,!1));t.addEventListener("pointerover",a=>{const o=a.target.closest("[data-price-help]");o&&(clearTimeout(s),o.contains(a.relatedTarget)||(i(),n(o,!0)))}),t.addEventListener("pointerout",a=>{const o=a.target.closest("[data-price-help]");o&&!o.contains(a.relatedTarget)&&!o.contains(t.activeElement)&&!o.dataset.pinned&&(s=setTimeout(()=>n(o,!1),180))}),t.addEventListener("focusin",a=>{const o=a.target.closest("[data-price-help]");o&&(i(),n(o,!0))}),t.addEventListener("focusout",a=>{const o=a.target.closest("[data-price-help]");o&&!o.contains(a.relatedTarget)&&n(o,!1)});function r(a,o){const c=[...a.querySelectorAll("[data-car-thumb]")];o=(o+c.length)%c.length,a.dataset.photo=String(o);const l=c[o].querySelector("img"),d=a.querySelector("[data-car-large]");d.src=l.src,d.alt=l.alt,a.querySelector("[data-car-photo-status]").textContent=`Photo ${o+1} of ${c.length}`,c.forEach((h,u)=>h.setAttribute("aria-pressed",String(u===o)))}t.addEventListener("click",a=>{const o=a.target.closest("[data-price-help]");if(a.target.closest("[data-help-trigger]")){const h=!!o.dataset.pinned;i(),h||(o.dataset.pinned="true",n(o,!0));return}o||i();const c=a.target.closest("button");if(!c)return;const l=c.closest(".car-listing");if(!l)return;const d=l.querySelector("dialog");c.hasAttribute("data-car-photo")?(e=c,r(d,Number(c.dataset.carPhoto)),d.showModal()):c.hasAttribute("data-car-close")?(d.close(),e==null||e.focus()):c.hasAttribute("data-car-step")?r(d,Number(d.dataset.photo||0)+Number(c.dataset.carStep)):c.hasAttribute("data-car-thumb")&&r(d,Number(c.dataset.carThumb))}),t.addEventListener("keydown",a=>{a.key==="Escape"&&i();const o=a.target.closest(".car-photo-dialog[open]");o&&(a.key==="ArrowLeft"||a.key==="ArrowRight")&&(a.preventDefault(),r(o,Number(o.dataset.photo||0)+(a.key==="ArrowRight"?1:-1)))})}function pr(t){const e=t.maxTurns,s=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
    <p class="eyebrow">THE BRIEF</p>
    <h2 id="student-brief-title">Write the strategy. Let your agent negotiate.</h2>
    <p>Write two sets of instructions: one for an AI agent buying a car and one for an AI agent selling it. Your objective is to help each agent maximise your <strong>surplus</strong>—how much better the deal is than your alternative outside this negotiation.</p>
    <div class="brief-columns">
      <section aria-labelledby="brief-scenario"><h3 id="brief-scenario">The car</h3>
        <table class="scenario-table"><caption>Scenario facts available to both sides</caption><thead><tr><th scope="col">Attribute</th><th scope="col">Details</th></tr></thead><tbody>
          <tr><th scope="row">Vehicle model</th><td>2020 Toyota Camry LE</td></tr>
          <tr><th scope="row">Mileage</th><td>45,000 miles</td></tr>
          <tr><th scope="row">Estimated value (KBB)</th><td>$18,000–$22,000</td></tr>
          <tr><th scope="row">Location</th><td>Chicago metropolitan area</td></tr>
          <tr><th scope="row">History</th><td>No accidents reported</td></tr>
        </tbody></table>
        <p class="small">KBB means Kelley Blue Book. This is the scenario’s estimated market range, not a required offer range or a guarantee of either side’s fallback.</p>
      </section>
      <section aria-labelledby="brief-scoring"><h3 id="brief-scoring">Fallback and scoring</h3>
        <p>Your <strong>fallback</strong> is your outside option if you do not agree. For a buyer, it is the price of a similar car at a dealer. For a seller, it is the amount a dealer would pay as a trade-in.</p>
        <ul><li><strong>Buyer surplus = buyer fallback − agreed price.</strong> A lower price is better for the buyer.</li><li><strong>Seller surplus = agreed price − seller fallback.</strong> A higher price is better for the seller.</li><li><strong>No agreement = zero surplus for both sides.</strong> You earn the improvement over your fallback, not the fallback amount itself.</li></ul>
        <p>Each agent receives its own fallback privately. When you negotiate directly, your own fallback is shown on your turn. Write instructions that work with the fallback supplied for that negotiation.</p>
        <div class="brief-example"><h4>Worked example · illustrative values</h4><p>If the buyer can buy elsewhere for <strong>$22,000</strong> and the seller can trade in for <strong>$18,000</strong>, a deal at <strong>$20,000</strong> gives:</p><ul><li>Buyer: $22,000 − $20,000 = <strong>$2,000 surplus</strong>.</li><li>Seller: $20,000 − $18,000 = <strong>$2,000 surplus</strong>.</li></ul><p class="small">These are illustrative values; your instructor may set different fallbacks. A buyer paying above their fallback, or a seller accepting below theirs, earns negative surplus.</p></div>
      </section>
    </div>
    <div class="brief-columns brief-divider">
      <section aria-labelledby="brief-steps"><h3 id="brief-steps">Your steps</h3>
        <ol class="brief-steps"><li><strong>Write both strategies.</strong> Use the Buyer instructions and Seller instructions boxes below. Give each agent an opening approach, concession rules, and conditions for accepting or walking away.</li>
          ${s>0?`<li><strong>Practise and inspect.</strong> Choose “Practise with these prompts” to run your own buyer against your own seller. You may run up to <strong>${s} practice ${s===1?"match":"matches"}</strong> in this session. Read the transcript and check the offers, acceptance decisions and surplus. Practice is optional and does not count toward evaluation scores.</li><li><strong>Revise your playbooks.</strong> Improve unclear instructions using what you observed. “Save agent strategy” saves your work; it does not submit it for evaluation.</li>`:"<li><strong>Review your playbooks.</strong> Practice is disabled for this session. Check that both strategies explain how to adapt to offers and respect the supplied fallback. “Save agent strategy” saves your work; it does not submit it for evaluation.</li>"}
          <li><strong>Submit for evaluation.</strong> Submit both strategies, then wait for your instructor to start a round. In an agent tournament, your buyer meets other students’ sellers and your seller meets other students’ buyers.</li>
          <li><strong>Review and improve.</strong> Read your results and transcripts below, plus feedback when available. If you edit your strategies, submit again to use the revision in a later round. Rounds already started keep their original submissions.</li>
        </ol>
      </section>
      <section aria-labelledby="brief-rules"><h3 id="brief-rules">Rules for this session</h3>
        <ul><li><strong>Buyer moves first.</strong> There are at most <strong>${e} alternating messages in total</strong>: up to ${Math.ceil(e/2)} buyer messages and ${Math.floor(e/2)} seller messages. An offer, acceptance or decision to end the negotiation each uses one turn.</li>
          <li><strong>Offer, accept or end.</strong> Make offers in whole US dollars. A new offer replaces the previous one. You can accept only the other side’s latest exact offer; acceptance ends the negotiation at that price.</li>
          <li><strong>Agreement must happen within the limit.</strong> An unaccepted offer on the final turn is not a deal. Reaching the turn limit or choosing “End without agreement” gives both sides zero surplus.</li>
          <li><strong>Human turns have a deadline.</strong> If you negotiate directly, respond before the deadline shown on your turn. Missing it ends that match without agreement.</li>
          <li><strong>Follow the assigned role.</strong> Your instructor may run human, AI or mixed negotiations. Your counterpart’s type is revealed at debrief.</li>
        </ul>
      </section>
    </div>
    <section class="brief-divider" aria-labelledby="brief-prompts"><h3 id="brief-prompts">Good and bad prompt examples</h3>
      <p>A useful playbook is clear enough to guide decisions and flexible enough to respond to changing offers, fallback values and time remaining. These examples show how to write useful instructions; they are not guaranteed winning strategies.</p>
      <div class="brief-columns prompt-examples">
        <article class="prompt-example weak"><h4>Bad example · a rigid buyer script</h4><blockquote>“Offer $20,000 in the first round, then go up by $500 each round. Don’t go higher than $23,000.”</blockquote><p><strong>Why it is weak:</strong> it ignores the supplied fallback, the seller’s responses and time remaining. With a $22,000 buyer fallback, it could authorise a loss.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable buyer playbook</h4><blockquote>“Open below the midpoint of the market-value range, without exceeding my supplied fallback. Increase offers in small steps when the seller also makes concessions. Aim to agree as far below my fallback as possible. Accept a favourable offer when further bargaining risks losing a worthwhile deal, especially near the turn limit. Never offer or accept a price above my fallback. Use the known car facts to explain offers; do not invent defects or alternatives.”</blockquote><p><strong>Why it is stronger:</strong> it sets an objective, anchors decisions to the actual fallback, and explains when to concede or accept.</p></article>
        <article class="prompt-example weak"><h4>Bad example · a vague seller instruction</h4><blockquote>“Get me the best price. Be tough and don’t give in.”</blockquote><p><strong>Why it is weak:</strong> it gives no opening approach, concession rule or acceptance condition. The agent has to guess how to balance price against the risk of no agreement.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable seller playbook</h4><blockquote>“Open near the upper end of the market-value range, but never below my supplied fallback. Support the price using the known car facts. Reduce the asking price in small steps in exchange for movement from the buyer. Aim to agree as far above my fallback as possible. Near the turn limit, accept an offer above my fallback if further bargaining risks no deal. Never offer or accept a price below my fallback. Do not invent features, service history or other buyers.”</blockquote><p><strong>Why it is stronger:</strong> it connects the seller’s objective to a price boundary, reciprocal concessions and a deadline decision.</p></article>
      </div>
      <p class="small">Develop your own approach and explain how it should adapt. Keep personal information out of your instructions.</p>
    </section>
  </section>`}function fr(t,e){if(rt(t)!==U)return pr(t);const s=xn(t),n=$(s.max),i=$(s.min),r=Math.round((s.min+s.max)/2),a=$(r),o=s.max-s.min,c=h=>(100*h/o).toLocaleString("en-IE",{minimumFractionDigits:1,maximumFractionDigits:1}),l=t.maxTurns,d=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
    <p class="eyebrow">THE BRIEF</p>
    <h2 id="student-brief-title">Write the strategy. Let your agent negotiate.</h2>
    <p>Write a buyer strategy and a seller strategy for your AI agents. Negotiate one price for this BMW and its included equipment, aiming to maximise your role’s <strong>surplus</strong>. Both sides receive the same listing and KBB range; your strategies remain private.</p>
    ${ur(t,e)}
    <section class="brief-divider" aria-labelledby="brief-scoring">
      <h3 id="brief-scoring">Fallback, surplus and score</h3>
      <p>Your <strong>fallback</strong> is your alternative if no deal is reached. Use the buyer and seller outside options shown in the KBB range.</p>
      <ul><li><strong>Buyer surplus = ${n} − agreed price.</strong> A lower price is better.</li>
        <li><strong>Seller surplus = agreed price − ${i}.</strong> A higher price is better.</li>
        <li><strong>No agreement = zero surplus and 0/100 for both sides.</strong></li></ul>
      <p><strong>Available surplus = ${n} − ${i} = ${$(o)}.</strong></p>
      <p><strong>Score for one negotiation = 100 × your role’s surplus ÷ available surplus.</strong></p>
      <h4 id="brief-final-score">Your final score for a round</h4>
      <p>Average the scores from <strong>all your buyer and seller evaluation negotiations in that round</strong>, counting each equally and rounding to one decimal place. Practice is excluded. Each round has its own final score.</p>
      <div class="brief-columns">
        <article class="brief-example"><h4>Worked example · a ${a} agreement</h4>
          <p>Using this session’s outside options:</p>
          <ul><li><strong>Buyer:</strong> ${n} − ${a} = <strong>${$(s.max-r)} surplus</strong>.<br>100 × ${$(s.max-r)} ÷ ${$(o)} = <strong>${c(s.max-r)}/100</strong>.</li>
            <li><strong>Seller:</strong> ${a} − ${i} = <strong>${$(r-s.min)} surplus</strong>.<br>100 × ${$(r-s.min)} ÷ ${$(o)} = <strong>${c(r-s.min)}/100</strong>.</li></ul>
        </article>
        <article class="brief-example round-score-example"><h4 id="round-score-example-title">Worked example · your round score</h4>
          <p>Imagine you complete <strong>four evaluation negotiations</strong>: two as buyer and two as seller. Each negotiation has ${$(o)} of available surplus. Your surplus is measured in euros; your <strong>score is points out of 100</strong>.</p>
          <div class="table-scroll" tabindex="0" role="region" aria-labelledby="round-score-example-title"><table class="round-score-example-table">
            <thead><tr><th scope="col">Negotiation</th><th scope="col">Your role</th><th scope="col">Your surplus</th><th scope="col">Score<br>(points out of 100)</th></tr></thead>
            <tbody>
              <tr><th scope="row">1</th><td>Buyer</td><td>${$(o*.75)}</td><td>75/100</td></tr>
              <tr><th scope="row">2</th><td>Buyer</td><td>${$(o*.5)}</td><td>50/100</td></tr>
              <tr><th scope="row">3</th><td>Seller</td><td>${$(o*.25)}</td><td>25/100</td></tr>
              <tr><th scope="row">4</th><td>Seller</td><td>${$(0)}<br>No agreement</td><td>0/100</td></tr>
            </tbody>
          </table></div>
          <p>The negotiation without agreement earns <strong>0 points</strong> and counts in the average.</p>
          <p><strong>Round score = (75 + 50 + 25 + 0) ÷ 4 = 37.5 points out of 100.</strong></p>
          <p>This example uses four negotiations. Your actual round score averages all your evaluations: with three classmates and one tournament, you play six negotiations (three as buyer and three as seller), so you divide by six. Practice is excluded.</p>
        </article>
      </div>
      <ul><li><strong>Scores are bounded from 0 to 100.</strong> A deal worse than your fallback produces negative surplus and 0 points. Scores above 100 are capped; actual surplus remains visible.</li>
        <li><strong>Unfinished results are not zero.</strong> The final score stays pending until all your evaluations have scored outcomes. Running, errored or instructor-cancelled matches keep it pending.</li></ul>
    </section>
    <div class="brief-columns brief-divider">
      <section aria-labelledby="brief-steps"><h3 id="brief-steps">Your steps</h3>
        <ol class="brief-steps"><li><strong>Write both strategies.</strong> Specify an opening approach, concessions, and when to accept or walk away.</li>
          ${d>0?`<li><strong>Practise and inspect.</strong> “Practise with these prompts” runs your buyer against your seller. You have up to <strong>${d} practice ${d===1?"match":"matches"}</strong>. Practice is optional. Read the transcript, decisions and results.</li><li><strong>Revise and save.</strong> Improve your instructions. “Save agent strategy” saves your work but does not submit it.</li>`:"<li><strong>Review and save.</strong> Practice is disabled for this session. Check both strategies. “Save agent strategy” saves your work but does not submit it.</li>"}
          <li><strong>Submit both strategies.</strong> Your instructor starts evaluation rounds. In an agent tournament, your buyer meets other students’ sellers and your seller meets their buyers.</li>
          <li><strong>Review and improve.</strong> Use results, transcripts and feedback to revise, then resubmit for later rounds. Rounds already started keep their original submissions.</li></ol>
      </section>
      <section aria-labelledby="brief-rules"><h3 id="brief-rules">Rules for this session</h3>
        <ul><li><strong>Buyer starts.</strong> At most <strong>${l} alternating messages</strong>: up to ${Math.ceil(l/2)} buyer messages and ${Math.floor(l/2)} seller messages. Every offer, acceptance or decision to end uses one turn.</li>
          <li><strong>Offer or accept.</strong> Offer whole euros. Each new offer replaces the previous one. Accept only the other side’s latest exact offer; acceptance ends the negotiation at that price.</li>
          <li><strong>Reach agreement in time.</strong> An unaccepted final offer, “End without agreement”, or a missed human-turn deadline ends the match without a deal. The deadline and your fallback appear on your human turn.</li>
          <li><strong>Use the supplied facts.</strong> Do not invent vehicle features, defects or competing offers.</li>
          <li><strong>Follow your assigned role.</strong> Rounds may be human, AI or mixed. Your counterpart’s type is revealed at debrief.</li></ul>
      </section>
    </div>
    <section class="brief-divider" aria-labelledby="brief-prompts"><h3 id="brief-prompts">Good and bad prompt examples</h3>
      <p>Give clear decision rules that adapt to offers and time remaining. These examples illustrate instruction quality, not guaranteed winning strategies.</p>
      <div class="brief-columns prompt-examples">
        <article class="prompt-example weak"><h4>Bad buyer · rigid script</h4><blockquote>“Offer ${a} first, then increase by €500 each round. Don’t go higher than ${$(s.max+1e3)}.”</blockquote><p><strong>Why it is weak:</strong> fixed increases ignore counteroffers and may exceed the ${n} fallback.</p></article>
        <article class="prompt-example"><h4>Good buyer · adaptable strategy</h4><blockquote>“Open below the range midpoint. Never offer or accept more than my fallback. Concede in small steps when the seller moves. Seek the lowest price, but accept a profitable offer when the deadline or risk of no deal makes further bargaining unwise. Use only the supplied car facts.”</blockquote><p><strong>Why it is stronger:</strong> sets a limit and adapts concessions and acceptance.</p></article>
        <article class="prompt-example weak"><h4>Bad seller · vague instruction</h4><blockquote>“Get me the best price. Be tough and don’t give in.”</blockquote><p><strong>Why it is weak:</strong> gives no opening, concession or acceptance rules.</p></article>
        <article class="prompt-example"><h4>Good seller · adaptable strategy</h4><blockquote>“Open near the range’s upper end. Never offer or accept below my fallback. Reduce the price in small steps in return for buyer concessions. Seek the highest price, but accept an offer above my fallback when time is short or further bargaining risks no deal. Use only the supplied car facts.”</blockquote><p><strong>Why it is stronger:</strong> balances price, reciprocal concessions and deadline risk.</p></article>
      </div>
      <p class="small">Develop your own approach. Keep personal information out of your instructions.</p>
    </section>
  </section>`}function Ln(t,e,{esc:s,date:n,feedbackContent:i}){if(!(t!=null&&t.length))return'<section class="card"><h2>Compare your rounds</h2><p>Your first evaluation round will appear here. After revising and submitting your strategies, run another round to compare results and feedback.</p></section>';const r=t.find(f=>f.id===(e==null?void 0:e.before))||t[Math.max(0,t.length-2)],a=t.find(f=>f.id===(e==null?void 0:e.after))||t.at(-1),o=(f,S=a.currency||"USD")=>$(f,S,2),c=f=>f==null?"—":`${(f*100).toFixed(1)}%`,l=f=>`Round ${f.number}`,d=f=>f.feedback?i({published:f.feedback}):["queued","generating","error"].includes(f.feedbackStatus)?i({status:f.feedbackStatus}):'<p class="small">No feedback is available for this round yet. It is generated after the full round finishes when automatic feedback is enabled. Earlier rounds without feedback are not generated retrospectively.</p>',h=(f,S,M)=>{const V=f[S].strategies,j=M==null?void 0:M[S].strategies,he=j&&JSON.stringify(V.map(N=>[N.kind,N.instructions]))!==JSON.stringify(j.map(N=>[N.kind,N.instructions]));return`<details class="round-strategy" data-round-strategy="${s(f.id)}-${S}"><summary>${S==="buyer"?"Buyer":"Seller"} strategy${j?` · ${he?"revised":"unchanged"}`:""}</summary>${V.length?V.map(N=>N.kind==="agent"?`<p class="small">Submitted version ${s(N.version)}</p><p class="feedback-text">${s(N.instructions)}</p>`:"<p>This role was played directly, without an agent strategy.</p>").join(""):"<p>You did not play this role in this round.</p>"}</details>`},u=(f,S)=>`<article class="round-card"><div class="section-heading"><h3>${l(f)}</h3><span class="badge ${f.complete?"agreed":"playing"}">${f.complete?"Complete":"Partial results"}</span></div><p class="small">${n(f.createdAt)} · ${f.completed}/${f.total} scored negotiations${f.pending?` · ${f.pending} running`:""}${f.errors?` · ${f.errors} needing attention`:""}${f.cancelled?` · ${f.cancelled} cancelled`:""}</p><dl class="round-metrics"><dt>Final score</dt><dd>${f.score==null?"Pending":f.score.toFixed(1)+" / 100"}</dd><dt>Buyer mean surplus</dt><dd>${o(f.buyer.meanSurplus,f.currency)} <small>(${f.buyer.completed} matches)</small></dd><dt>Seller mean surplus</dt><dd>${o(f.seller.meanSurplus,f.currency)} <small>(${f.seller.completed} matches)</small></dd><dt>Agreements</dt><dd>${f.agreements}/${f.completed} · ${c(f.agreementRate)}</dd></dl>${h(f,"buyer",S)}${h(f,"seller",S)}<h3 class="round-feedback-heading" data-feedback-round="${s(f.id)}">Feedback: Evaluation phase · ${l(f)}</h3>${d(f)}</article>`,m=t.length>1&&r.id!==a.id,y=(f,S,M="money")=>M==="money"&&(r.currency||"USD")!==(a.currency||"USD")?"Different currencies":f==null||S==null?"—":`${S-f>0?"+":S-f<0?"−":""}${M==="money"?o(Math.abs(S-f)):Math.abs((S-f)*100).toFixed(1)+" percentage points"}`,C=r.buyer.completed===a.buyer.completed&&r.seller.completed===a.seller.completed;return`<section class="card" id="round-comparison"><p class="eyebrow">YOUR PROGRESS</p><h2>Compare your rounds</h2><p>The evaluation phase can contain multiple rounds. Practice is a separate phase and does not contribute to evaluation scores. Each round shows only your evaluations, the strategies actually used, and that round's personalised feedback. Practice is excluded.</p><p class="small"><strong>How your score is calculated:</strong> Each negotiation earns 100 × your surplus ÷ available surplus (buyer value minus seller cost), limited to 0–100. No agreement earns 0. Your final score averages all your buyer and seller evaluations, rounded to one decimal. Capturing half the available surplus in every match earns 50/100. Practice is excluded. Your final score appears once all your matches have scored results.</p>${m?`<div class="form-grid"><label>Earlier round<select id="compare-before">${t.map((f,S)=>`<option value="${s(f.id)}" ${f.id===r.id?"selected":""} ${S>=t.indexOf(a)?"disabled":""}>${l(f)}</option>`).join("")}</select></label><label>Later round<select id="compare-after">${t.map((f,S)=>`<option value="${s(f.id)}" ${f.id===a.id?"selected":""} ${S<=t.indexOf(r)?"disabled":""}>${l(f)}</option>`).join("")}</select></label></div>${r.complete&&a.complete?`<div class="round-change"><strong>Change from ${l(r)} to ${l(a)}</strong><div class="metrics"><div><strong>${y(r.buyer.meanSurplus,a.buyer.meanSurplus)}</strong><span>buyer mean surplus</span></div><div><strong>${y(r.seller.meanSurplus,a.seller.meanSurplus)}</strong><span>seller mean surplus</span></div><div><strong>${y(r.agreementRate,a.agreementRate,"rate")}</strong><span>agreement rate</span></div></div>${C?"":'<p class="small">These rounds have different numbers of scored matches per role.</p>'}</div>`:'<p class="callout">A change summary appears when all your negotiations in both rounds have scored results. Running, failed and cancelled matches are not counted as zero.</p>'}`:'<p class="callout">Your first round is below. Revise and submit your strategies, then run another round to unlock a side-by-side comparison.</p>'}<div class="round-comparison-grid ${m?"":"single"}">${u(r)}${m?u(a,r):""}</div><p class="small">Outcomes can vary with counterpart strategies, game settings and AI responses. A higher score in one round does not by itself establish that a strategy is better.</p></section>`}const mr=()=>{};var Ys={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[s++]=i:i<2048?(e[s++]=i>>6|192,e[s++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[s++]=i>>18|240,e[s++]=i>>12&63|128,e[s++]=i>>6&63|128,e[s++]=i&63|128):(e[s++]=i>>12|224,e[s++]=i>>6&63|128,e[s++]=i&63|128)}return e},gr=function(t){const e=[];let s=0,n=0;for(;s<t.length;){const i=t[s++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[s++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[s++],a=t[s++],o=t[s++],c=((i&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=t[s++],a=t[s++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Un={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const r=t[i],a=i+1<t.length,o=a?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,d=r>>2,h=(r&3)<<4|o>>4;let u=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(u=64)),n.push(s[d],s[h],s[u],s[m])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const r=s[t.charAt(i++)],o=i<t.length?s[t.charAt(i)]:0;++i;const l=i<t.length?s[t.charAt(i)]:64;++i;const h=i<t.length?s[t.charAt(i)]:64;if(++i,r==null||o==null||l==null||h==null)throw new br;const u=r<<2|o>>4;if(n.push(u),l!==64){const m=o<<4&240|l>>2;if(n.push(m),h!==64){const y=l<<6&192|h;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yr=function(t){const e=Mn(t);return Un.encodeByteArray(e,!0)},Bn=function(t){return yr(t).replace(/\./g,"")},Fn=function(t){try{return Un.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=()=>vr().__FIREBASE_DEFAULTS__,Ir=()=>{if(typeof process>"u"||typeof Ys>"u")return;const t=Ys.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Er=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fn(t[1]);return e&&JSON.parse(e)},vs=()=>{try{return mr()||wr()||Ir()||Er()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sr=t=>{var e,s;return(s=(e=vs())==null?void 0:e.emulatorHosts)==null?void 0:s[t]},Hn=()=>{var t;return(t=vs())==null?void 0:t.config},Vn=t=>{var e;return(e=vs())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,n)=>{s?this.reject(s):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _r(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function kr(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $r(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ar(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tr(){const t=L();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cr(){try{return typeof indexedDB=="object"}catch{return!1}}function Pr(){return new Promise((t,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),s||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{s=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(s){e(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="FirebaseError";class Se extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=Rr,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ut.prototype.create)}}class ut{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Or(r,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Se(i,o,n)}}function Or(t,e){try{let s=0,n="";for(;s<t.length;){const i=t.indexOf("{$",s);if(i===-1){n+=t.substring(s);break}const r=t.indexOf("}",i+2);if(r===-1){n+=t.substring(s);break}const a=t.substring(i+2,r),o=e[a];n+=t.substring(s,i)+(o!=null?String(o):`<${a}?>`),s=r+1}return n}catch{return t}}function Nr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qe(t,e){if(t===e)return!0;const s=Object.keys(t),n=Object.keys(e);for(const i of s){if(!n.includes(i))return!1;const r=t[i],a=e[i];if(Js(r)&&Js(a)){if(!qe(r,a))return!1}else if(r!==a)return!1}for(const i of n)if(!s.includes(i))return!1;return!0}function Js(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=[];for(const[s,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function tt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,r]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function st(t){const e=t.indexOf("?");if(!e)return"";const s=t.indexOf("#",e);return t.substring(e,s>0?s:void 0)}function Dr(t,e){const s=new xr(t,e);return s.subscribe.bind(s)}class xr{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,n){let i;if(e===void 0&&s===void 0&&n===void 0)throw new Error("Missing Observer.");Lr(e,["next","error","complete"])?i=e:i={next:e,error:s,complete:n},i.next===void 0&&(i.next=Gt),i.error===void 0&&(i.error=Gt),i.complete===void 0&&(i.complete=Gt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lr(t,e){if(typeof t!="object"||t===null)return!1;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}function Gt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mr(t){return(await fetch(t,{credentials:"include"})).ok}class Ge{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const n=new jn;if(this.instancesDeferred.set(s,n),this.isInitialized(s)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:s});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fr(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[s,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:s});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&a.resolve(i)}return i}onInit(e,s){const n=this.normalizeInstanceIdentifier(s),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,s){const n=this.onInitCallbacks.get(s);if(n)for(const i of n)try{i(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Br(e),options:s}),this.instances.set(e,n),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Br(t){return t===Ae?void 0:t}function Fr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Ur(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const Vr={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},jr=k.INFO,Wr={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},qr=(t,e,...s)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Wr[e];if(i)console[i](`[${n}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wn{constructor(e){this.name=e,this._logLevel=jr,this._logHandler=qr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Gr=(t,e)=>e.some(s=>t instanceof s);let Xs,Qs;function zr(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kr(){return Qs||(Qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qn=new WeakMap,ss=new WeakMap,Gn=new WeakMap,zt=new WeakMap,Is=new WeakMap;function Yr(t){const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{s(Ee(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(s=>{s instanceof IDBCursor&&qn.set(s,t)}).catch(()=>{}),Is.set(e,t),e}function Jr(t){if(ss.has(t))return;const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{s(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});ss.set(t,e)}let ns={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return ss.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gn.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Ee(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xr(t){ns=t(ns)}function Qr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call(Kt(this),e,...s);return Gn.set(n,e.sort?e.sort():[e]),Ee(n)}:Kr().includes(t)?function(...e){return t.apply(Kt(this),e),Ee(qn.get(this))}:function(...e){return Ee(t.apply(Kt(this),e))}}function Zr(t){return typeof t=="function"?Qr(t):(t instanceof IDBTransaction&&Jr(t),Gr(t,zr())?new Proxy(t,ns):t)}function Ee(t){if(t instanceof IDBRequest)return Yr(t);if(zt.has(t))return zt.get(t);const e=Zr(t);return e!==t&&(zt.set(t,e),Is.set(e,t)),e}const Kt=t=>Is.get(t);function ea(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=Ee(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Ee(a.result),c.oldVersion,c.newVersion,Ee(a.transaction),c)}),s&&a.addEventListener("blocked",c=>s(c.oldVersion,c.newVersion,c)),o.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const ta=["get","getKey","getAll","getAllKeys","count"],sa=["put","add","delete","clear"],Yt=new Map;function Zs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yt.get(e))return Yt.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=sa.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ta.includes(s)))return;const r=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[s](...o),i&&c.done]))[0]};return Yt.set(e,r),r}Xr(t=>({...t,get:(e,s,n)=>Zs(e,s)||t.get(e,s,n),has:(e,s)=>!!Zs(e,s)||t.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(ia(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function ia(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const is="@firebase/app",en="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Wn("@firebase/app"),ra="@firebase/app-compat",aa="@firebase/analytics-compat",oa="@firebase/analytics",ca="@firebase/app-check-compat",la="@firebase/app-check",da="@firebase/auth",ua="@firebase/auth-compat",ha="@firebase/database",pa="@firebase/data-connect",fa="@firebase/database-compat",ma="@firebase/functions",ga="@firebase/functions-compat",ba="@firebase/installations",ya="@firebase/installations-compat",va="@firebase/messaging",wa="@firebase/messaging-compat",Ia="@firebase/performance",Ea="@firebase/performance-compat",Sa="@firebase/remote-config",_a="@firebase/remote-config-compat",ka="@firebase/storage",$a="@firebase/storage-compat",Aa="@firebase/firestore",Ta="@firebase/ai",Ca="@firebase/firestore-compat",Pa="firebase",Ra="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]",Oa={[is]:"fire-core",[ra]:"fire-core-compat",[oa]:"fire-analytics",[aa]:"fire-analytics-compat",[la]:"fire-app-check",[ca]:"fire-app-check-compat",[da]:"fire-auth",[ua]:"fire-auth-compat",[ha]:"fire-rtdb",[pa]:"fire-data-connect",[fa]:"fire-rtdb-compat",[ma]:"fire-fn",[ga]:"fire-fn-compat",[ba]:"fire-iid",[ya]:"fire-iid-compat",[va]:"fire-fcm",[wa]:"fire-fcm-compat",[Ia]:"fire-perf",[Ea]:"fire-perf-compat",[Sa]:"fire-rc",[_a]:"fire-rc-compat",[ka]:"fire-gcs",[$a]:"fire-gcs-compat",[Aa]:"fire-fst",[Ca]:"fire-fst-compat",[Ta]:"fire-vertex","fire-js":"fire-js",[Pa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Map,Na=new Map,as=new Map;function tn(t,e){try{t.container.addComponent(e)}catch(s){oe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function at(t){const e=t.name;if(as.has(e))return oe.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,t);for(const s of At.values())tn(s,t);for(const s of Na.values())tn(s,t);return!0}function zn(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}function B(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new ut("app","Firebase",Da);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,s,n){this._isDeleted=!1,this._options={...e},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=Ra;function Kn(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const n={name:rs,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw ne.create("bad-app-name",{appName:String(i)});if(s||(s=Hn()),!s)throw ne.create("no-options");const r=At.get(i);if(r)if(qe(s,r.options)){if(qe(n,r.config))return r;throw ne.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(n)})}else throw ne.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(s)});const a=new Hr(i);for(const c of as.values())a.addComponent(c);const o=new xa(s,n,a);return At.set(i,o),o}function La(t=rs){const e=At.get(t);if(!e&&t===rs&&Hn())return Kn();if(!e)throw ne.create("no-app",{appName:t});return e}function He(t,e,s){let n=Oa[t]??t;s&&(n+=`-${s}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${n}" with version "${e}":`];i&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oe.warn(a.join(" "));return}at(new Ge(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="firebase-heartbeat-database",Ua=1,ot="firebase-heartbeat-store";let Jt=null;function Yn(){return Jt||(Jt=ea(Ma,Ua,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ot)}catch(s){console.warn(s)}}}}).catch(t=>{throw ne.create("idb-open",{originalErrorMessage:t.message})})),Jt}async function Ba(t){try{const s=(await Yn()).transaction(ot),n=await s.objectStore(ot).get(Jn(t));return await s.done,n}catch(e){if(e instanceof Se)oe.warn(e.message);else{const s=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});oe.warn(s.message)}}}async function sn(t,e){try{const n=(await Yn()).transaction(ot,"readwrite");await n.objectStore(ot).put(e,Jn(t)),await n.done}catch(s){if(s instanceof Se)oe.warn(s.message);else{const n=ne.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});oe.warn(n.message)}}}function Jn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=1024,Ha=30;class Va{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Wa(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,s;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ha){const a=qa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){oe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=nn(),{heartbeatsToSend:n,unsentEntries:i}=ja(this._heartbeatsCache.heartbeats),r=Bn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=s,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(s){return oe.warn(s),""}}}function nn(){return new Date().toISOString().substring(0,10)}function ja(t,e=Fa){const s=[];let n=t.slice();for(const i of t){const r=s.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),rn(s)>e){r.dates.pop();break}}else if(s.push({agent:i.agent,dates:[i.date]}),rn(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class Wa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cr()?Pr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Ba(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return sn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return sn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function rn(t){return Bn(JSON.stringify({version:2,heartbeats:t})).length}function qa(t){if(t.length===0)return-1;let e=0,s=t[0].date;for(let n=1;n<t.length;n++)t[n].date<s&&(s=t[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){at(new Ge("platform-logger",e=>new na(e),"PRIVATE")),at(new Ge("heartbeat",e=>new Va(e),"PRIVATE")),He(is,en,t),He(is,en,"esm2020"),He("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga("");var za="firebase",Ka="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(za,Ka,"app");function Xn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ya=Xn,Qn=new ut("auth","Firebase",Xn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Wn("@firebase/auth");function vt(t,...e){Tt.logLevel<=k.WARN&&Tt.warn(`Auth (${pt}): ${t}`,...e)}function wt(t,...e){Tt.logLevel<=k.ERROR&&Tt.error(`Auth (${pt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,...e){throw Es(t,...e)}function G(t,...e){return Es(t,...e)}function Bt(t,e,s){const n={...Ya(),[e]:s};return new ut("auth","Firebase",n).create(e,{appName:t.name})}function ae(t){return Bt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zn(t,e,s){const n=s;if(!(e instanceof n))throw n.name!==e.constructor.name&&F(t,"argument-error"),Bt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Es(t,...e){if(typeof t!="string"){const s=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(s,...n)}return Qn.create(t,...e)}function b(t,e,...s){if(!t)throw Es(e,...s)}function ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wt(e),new Error(e)}function ce(t,e){t||ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ja(){return an()==="http:"||an()==="https:"}function an(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ja()||$r()||"connection"in navigator)?navigator.onLine:!0}function Qa(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,s){this.shortDelay=e,this.longDelay=s,ce(s>e,"Short delay should be less than long delay!"),this.isMobile=_r()||Ar()}get(){return Xa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t,e){ce(t.emulator,"Emulator should always be set here");const{url:s}=t.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static initialize(e,s,n){this.fetchImpl=e,s&&(this.headersImpl=s),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],to=new ft(3e4,6e4);function le(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function de(t,e,s,n,i={}){return ti(t,i,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const o=ht({...a,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...r};return kr()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&ws(t.emulatorConfig.host)&&(l.credentials="include"),ei.fetch()(await si(t,t.config.apiHost,s,o),l)})}async function ti(t,e,s){t._canInitEmulator=!1;const n={...Za,...e};try{const i=new no(t),r=await Promise.race([s(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw yt(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yt(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw yt(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw yt(t,"user-disabled",a);const d=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bt(t,d,l);F(t,d)}}catch(i){if(i instanceof Se)throw i;F(t,"network-request-failed",{message:String(i)})}}async function mt(t,e,s,n,i={}){const r=await de(t,e,s,n,i);return"mfaPendingCredential"in r&&F(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function si(t,e,s,n){const i=`${e}${s}?${n}`,r=t,a=r.config.emulator?Ss(t.config,i):`${t.config.apiScheme}://${i}`;return eo.includes(s)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function so(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class no{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,n)=>{this.timer=setTimeout(()=>n(G(this.auth,"network-request-failed")),to.get())})}}function yt(t,e,s){const n={appName:t.name};s.email&&(n.email=s.email),s.phoneNumber&&(n.phoneNumber=s.phoneNumber);const i=G(t,e,n);return i.customData._tokenResponse=s,i}function on(t){return t!==void 0&&t.enterprise!==void 0}class io{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===e)return so(s.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ro(t,e){return de(t,"GET","/v2/recaptchaConfig",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e){return de(t,"POST","/v1/accounts:delete",e)}async function Ct(t,e){return de(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oo(t,e=!1){const s=H(t),n=await s.getIdToken(e),i=_s(n);b(i&&i.exp&&i.auth_time&&i.iat,s.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:n,authTime:nt(Xt(i.auth_time)),issuedAtTime:nt(Xt(i.iat)),expirationTime:nt(Xt(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xt(t){return Number(t)*1e3}function _s(t){const[e,s,n]=t.split(".");if(e===void 0||s===void 0||n===void 0)return wt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fn(s);return i?JSON.parse(i):(wt("Failed to decode base64 JWT payload"),null)}catch(i){return wt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cn(t){const e=_s(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t,e,s=!1){if(s)return e;try{return await e}catch(n){throw n instanceof Se&&co(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function co({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=nt(this.lastLoginAt),this.creationTime=nt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t){var h;const e=t.auth,s=await t.getIdToken(),n=await ct(t,Ct(e,{idToken:s}));b(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?ii(i.providerUserInfo):[],a=uo(t.providerData,r),o=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=o?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cs(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function ni(t){const e=H(t);await Pt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uo(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ii(t){return t.map(({providerId:e,...s})=>({providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e){const s=await ti(t,{},async()=>{const n=ht({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,a=await si(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:n};return t.emulatorConfig&&ws(t.emulatorConfig.host)&&(c.credentials="include"),ei.fetch()(a,c)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function po(t,e){return de(t,"POST","/v2/accounts:revokeToken",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const s="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}updateFromIdToken(e){b(e.length!==0,"internal-error");const s=cn(e);this.updateTokensAndExpiration(e,null,s)}async getToken(e,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:n,refreshToken:i,expiresIn:r}=await ho(e,s);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,s,n){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,s){const{refreshToken:n,accessToken:i,expirationTime:r}=s,a=new Ve;return n&&(b(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(b(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(b(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ve,this.toJSON())}_performRefresh(){return ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class q{constructor({uid:e,auth:s,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new lo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const s=await ct(this,this.stsTokenManager.getToken(this.auth,e));return b(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return oo(this,e)}reload(){return ni(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>({...s})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const s=new q({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),s&&await Pt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(B(this.auth.app))return Promise.reject(ae(this.auth));const e=await this.getIdToken();return await ct(this,ao(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){const n=s.displayName??void 0,i=s.email??void 0,r=s.phoneNumber??void 0,a=s.photoURL??void 0,o=s.tenantId??void 0,c=s._redirectEventId??void 0,l=s.createdAt??void 0,d=s.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:m,providerData:y,stsTokenManager:C}=s;b(h&&C,e,"internal-error");const f=Ve.fromJSON(this.name,C);b(typeof h=="string",e,"internal-error"),fe(n,e.name),fe(i,e.name),b(typeof u=="boolean",e,"internal-error"),b(typeof m=="boolean",e,"internal-error"),fe(r,e.name),fe(a,e.name),fe(o,e.name),fe(c,e.name),fe(l,e.name),fe(d,e.name);const S=new q({uid:h,auth:e,email:i,emailVerified:u,displayName:n,isAnonymous:m,photoURL:a,phoneNumber:r,tenantId:o,stsTokenManager:f,createdAt:l,lastLoginAt:d});return y&&Array.isArray(y)&&(S.providerData=y.map(M=>({...M}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,s,n=!1){const i=new Ve;i.updateFromServerResponse(s);const r=new q({uid:s.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Pt(r),r}static async _fromGetAccountInfoResponse(e,s,n){const i=s.users[0];b(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ii(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),o=new Ve;o.updateFromIdToken(n);const c=new q({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new cs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map;function re(t){ce(t instanceof Function,"Expected a class definition");let e=ln.get(t);return e?(ce(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ln.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}ri.type="NONE";const dn=ri;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e,s){return`firebase:${t}:${e}:${s}`}class Ce{constructor(e,s,n){this.persistence=e,this.auth=s,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=It(this.userKey,i.apiKey,r),this.fullPersistenceKey=It("persistence",i.apiKey,r),this.boundEventHandler=s._onStorageEvent.bind(s);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const s=await Ct(this.auth,{idToken:e}).catch(()=>{});return s?q._fromGetAccountInfoResponse(this.auth,s,e):null}return q._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,s,n="authUser"){if(!s.length)return new Ce(re(dn),e,n);const i=(await Promise.all(s.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let r=i[0]||re(dn);const a=It(n,e.config.apiKey,e.name);let o=null;for(const l of s)try{const d=await l._get(a);if(d){let h;if(typeof d=="string"){const u=await Ct(e,{idToken:d}).catch(()=>{});if(!u)break;h=await q._fromGetAccountInfoResponse(e,u,d)}else h=q._fromJSON(e,d);l!==r&&(o=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ce(r,e,n):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(s.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new Ce(r,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(li(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ai(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ui(e))return"Blackberry";if(hi(e))return"Webos";if(oi(e))return"Safari";if((e.includes("chrome/")||ci(e))&&!e.includes("edge/"))return"Chrome";if(di(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(s);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ai(t=L()){return/firefox\//i.test(t)}function oi(t=L()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ci(t=L()){return/crios\//i.test(t)}function li(t=L()){return/iemobile/i.test(t)}function di(t=L()){return/android/i.test(t)}function ui(t=L()){return/blackberry/i.test(t)}function hi(t=L()){return/webos/i.test(t)}function ks(t=L()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fo(t=L()){var e;return ks(t)&&!!((e=window.navigator)!=null&&e.standalone)}function mo(){return Tr()&&document.documentMode===10}function pi(t=L()){return ks(t)||di(t)||hi(t)||ui(t)||/windows phone/i.test(t)||li(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t,e=[]){let s;switch(t){case"Browser":s=un(L());break;case"Worker":s=`${un(L())}-${t}`;break;default:s=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${pt}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const n=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});n.onAbort=s,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const s=[];try{for(const n of this.queue)await n(e),n.onAbort&&s.push(n.onAbort)}catch(n){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e={}){return de(t,"GET","/v2/passwordPolicy",le(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=6;class vo{constructor(e){var n;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??yo,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(e,s){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(s.meetsMinPasswordLength=e.length>=n),i&&(s.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(s,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,s,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,s,n,i){this.app=e,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hn(this),this.idTokenSubscription=new hn(this),this.beforeStateQueue=new go(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=re(s)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted){try{this.persistenceManager=await Ce.create(this,e)}catch(a){vt(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Ce.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(s)}catch(a){vt(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const s=await Ct(this,{idToken:e}),n=await q._fromGetAccountInfoResponse(this,s,e);await this.directlySetCurrentUser(n)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(B(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let n=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,o=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(n=c.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){try{await Pt(e)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(B(this.app))return Promise.reject(ae(this));const s=e?H(e):null;return s&&b(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return B(this.app)?Promise.reject(ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return B(this.app)?Promise.reject(ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bo(this),s=new vo(e);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ut("auth","Firebase",e())}onAuthStateChanged(e,s,n){return this.registerStateListener(this.authStateSubscription,e,s,n)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,n){return this.registerStateListener(this.idTokenSubscription,e,s,n)}authStateReady(){return new Promise((e,s)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},s)}})}async revokeAccessToken(e){if(this.currentUser){const s=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:s};this.tenantId!=null&&(n.tenantId=this.tenantId),await po(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,s){const n=await this.getOrInitRedirectPersistenceManager(s);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&re(e)||this._popupRedirectResolver;b(s,this,"argument-error"),this.redirectPersistenceManager=await Ce.create(this,[re(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,n;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,n,i){if(this._deleted)return()=>{};const r=typeof s=="function"?s:s.next.bind(s);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}).catch(c=>{if(!a)if(typeof s!="function"&&s.error)s.error(c);else if(n)n(c);else throw c}),typeof s=="function"){const c=e.addObserver(s,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(s);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(s){const n=(s==null?void 0:s.message)||String(s),i=Bt(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw i.customData={originalError:s},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var s;if(B(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return e!=null&&e.error&&vt(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ue(t){return H(t)}class hn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dr(s=>this.observer=s)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Io(t){Ft=t}function mi(t){return Ft.loadJS(t)}function Eo(){return Ft.recaptchaEnterpriseScript}function So(){return Ft.gapiScript}function _o(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ko{constructor(){this.enterprise=new $o}ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}class $o{ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="recaptcha-enterprise",gi="NO_RECAPTCHA",pn="onFirebaseAuthREInstanceReady";class me{constructor(e){this.type=Ao,this.auth=ue(e)}async verify(e="verify",s=!1){async function n(r){if(!s){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,o)=>{ro(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new io(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(r,a,o){const c=window.grecaptcha;on(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{a(l)}).catch(()=>{a(gi)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ko().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{n(this.auth).then(async o=>{if(!s&&on(window.grecaptcha)&&me.scriptInjectionDeferred)await me.scriptInjectionDeferred.promise,i(o,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Eo();c.length!==0&&(c+=o+`&onload=${pn}`),me.scriptInjectionDeferred=new jn,window[pn]=()=>{var l;(l=me.scriptInjectionDeferred)==null||l.resolve()},mi(c).then(()=>{var l;return(l=me.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{i(o,r,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}me.scriptInjectionDeferred=null;async function fn(t,e,s,n=!1,i=!1){const r=new me(t);let a;if(i)a=gi;else try{a=await r.verify(s)}catch{a=await r.verify(s,!0)}const o={...e};if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,l=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rt(t,e,s,n,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await fn(t,e,s,s==="getOobCode");return n(t,a)}else return n(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fn(t,e,s,s==="getOobCode");return n(t,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){const s=zn(t,"auth");if(s.isInitialized()){const i=s.getImmediate(),r=s.getOptions();if(qe(r,e??{}))return i;F(i,"already-initialized")}return s.initialize({options:e})}function Co(t,e){const s=(e==null?void 0:e.persistence)||[],n=(Array.isArray(s)?s:[s]).map(re);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Po(t,e,s){const n=ue(t);b(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=bi(e),{host:a,port:o}=Ro(e),c=o===null?"":`:${o}`,l={url:`${r}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){b(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),b(qe(l,n.config.emulator)&&qe(d,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,ws(a)?Mr(`${r}//${a}${c}`):Oo()}function bi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ro(t){const e=bi(t),s=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!s)return{host:"",port:null};const n=s[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:mn(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:mn(a)}}}function mn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Oo(){function t(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return ie("not implemented")}_getIdTokenResponse(e){return ie("not implemented")}_linkToIdToken(e,s){return ie("not implemented")}_getReauthenticationResolver(e){return ie("not implemented")}}async function No(t,e){return de(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e){return mt(t,"POST","/v1/accounts:signInWithPassword",le(t,e))}async function As(t,e){return de(t,"POST","/v1/accounts:sendOobCode",le(t,e))}async function xo(t,e){return As(t,e)}async function Lo(t,e){return As(t,e)}async function Mo(t,e){return As(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e){return mt(t,"POST","/v1/accounts:signInWithEmailLink",le(t,e))}async function Bo(t,e){return mt(t,"POST","/v1/accounts:signInWithEmailLink",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends $s{constructor(e,s,n,i=null){super("password",n),this._email=e,this._password=s,this._tenantId=i}static _fromEmailAndPassword(e,s){return new lt(e,s,"password")}static _fromEmailAndCode(e,s,n=null){return new lt(e,s,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rt(e,s,"signInWithPassword",Do);case"emailLink":return Uo(e,{email:this._email,oobCode:this._password});default:F(e,"internal-error")}}async _linkToIdToken(e,s){switch(this.signInMethod){case"password":const n={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rt(e,n,"signUpPassword",No);case"emailLink":return Bo(e,{idToken:s,email:this._email,oobCode:this._password});default:F(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(t,e){return mt(t,"POST","/v1/accounts:signInWithIdp",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="http://localhost";class xe extends $s{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):F("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...r}=s;if(!n||!i)return null;const a=new xe(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const s=this.buildRequest();return je(e,s)}_linkToIdToken(e,s){const n=this.buildRequest();return n.idToken=s,je(e,n)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,je(e,s)}buildRequest(){const e={requestUri:Fo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=ht(s)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vo(t){const e=tt(st(t)).link,s=e?tt(st(e)).deep_link_id:null,n=tt(st(t)).deep_link_id;return(n?tt(st(n)).link:null)||n||s||e||t}class Ts{constructor(e){const s=tt(st(e)),n=s.apiKey??null,i=s.oobCode??null,r=Ho(s.mode??null);b(n&&i&&r,"argument-error"),this.apiKey=n,this.operation=r,this.code=i,this.continueUrl=s.continueUrl??null,this.languageCode=s.lang??null,this.tenantId=s.tenantId??null}static parseLink(e){const s=Vo(e);try{return new Ts(s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,s){return lt._fromEmailAndPassword(e,s)}static credentialWithLink(e,s){const n=Ts.parseLink(s);return b(n,"argument-error"),lt._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password";Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends gt{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ge.credential(e.oauthAccessToken)}catch{return null}}}ge.FACEBOOK_SIGN_IN_METHOD="facebook.com";ge.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends gt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return xe._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:n}=e;if(!s&&!n)return null;try{return X.credential(s,n)}catch{return null}}}X.GOOGLE_SIGN_IN_METHOD="google.com";X.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends gt{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends gt{constructor(){super("twitter.com")}static credential(e,s){return xe._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:n}=e;if(!s||!n)return null;try{return ye.credential(s,n)}catch{return null}}}ye.TWITTER_SIGN_IN_METHOD="twitter.com";ye.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e){return mt(t,"POST","/v1/accounts:signUp",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,n,i=!1){const r=await q._fromIdTokenResponse(e,n,i),a=gn(n);return new Le({user:r,providerId:a,_tokenResponse:n,operationType:s})}static async _forOperation(e,s,n){await e._updateTokensIfNecessary(n,!0);const i=gn(n);return new Le({user:e,providerId:i,_tokenResponse:n,operationType:s})}}function gn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Se{constructor(e,s,n,i){super(s.code,s.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,s,n,i){return new Ot(e,s,n,i)}}function yi(t,e,s,n){return(e==="reauthenticate"?s._getReauthenticationResolver(t):s._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ot._fromErrorAndOperation(t,r,e,n):r})}async function Wo(t,e,s=!1){const n=await ct(t,e._linkToIdToken(t.auth,await t.getIdToken()),s);return Le._forOperation(t,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t,e,s=!1){const{auth:n}=t;if(B(n.app))return Promise.reject(ae(n));const i="reauthenticate";try{const r=await ct(t,yi(n,i,e,t),s);b(r.idToken,n,"internal-error");const a=_s(r.idToken);b(a,n,"internal-error");const{sub:o}=a;return b(t.uid===o,n,"user-mismatch"),Le._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&F(n,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e,s=!1){if(B(t.app))return Promise.reject(ae(t));const n="signIn",i=await yi(t,n,e),r=await Le._fromIdTokenResponse(t,n,i);return s||await t._updateCurrentUser(r.user),r}async function Go(t,e){return vi(ue(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t,e,s){var n;b(((n=s.url)==null?void 0:n.length)>0,t,"invalid-continue-uri"),b(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),b(typeof s.linkDomain>"u"||s.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=s.url,e.dynamicLinkDomain=s.dynamicLinkDomain,e.linkDomain=s.linkDomain,e.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(b(s.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=s.iOS.bundleId),s.android&&(b(s.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=s.android.installApp,e.androidMinimumVersionCode=s.android.minimumVersion,e.androidPackageName=s.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){const e=ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zo(t,e,s){const n=ue(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};s&&Cs(n,i,s),await Rt(n,i,"getOobCode",Lo)}async function Ko(t,e,s){if(B(t.app))return Promise.reject(ae(t));const n=ue(t),a=await Rt(n,{returnSecureToken:!0,email:e,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jo).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&wi(t),c}),o=await Le._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function Yo(t,e,s){return B(t.app)?Promise.reject(ae(t)):Go(H(t),Ye.credential(e,s)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&wi(t),n})}async function Jo(t,e){const s=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Cs(s.auth,i,e);const{email:r}=await xo(s.auth,i);r!==t.email&&await t.reload()}async function Xo(t,e,s){const n=H(t),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};s&&Cs(n.auth,r,s);const{email:a}=await Mo(n.auth,r);a!==t.email&&await t.reload()}function Qo(t,e,s,n){return H(t).onIdTokenChanged(e,s,n)}function Zo(t,e,s){return H(t).beforeAuthStateChanged(e,s)}function ec(t,e,s,n){return H(t).onAuthStateChanged(e,s,n)}function tc(t){return H(t).signOut()}const Nt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(Nt,"1"),this.storage.removeItem(Nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=1e3,nc=10;class Ei extends Ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const n=this.storage.getItem(s),i=this.localCache[s];n!==i&&e(s,i,n)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;s?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!s&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);mo()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nc):i()}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:n}),!0)})},sc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ei.type="LOCAL";const ic=Ei;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Ii{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}Si.type="SESSION";const _i=Si;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(i=>i.isListeningto(e));if(s)return s;const n=new Vt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:n,eventType:i,data:r}=s.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;s.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(a).map(async l=>l(s.origin,r)),c=await rc(o);s.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t="",e=10){let s="";for(let n=0;n<e;n++)s+=Math.floor(Math.random()*10);return t+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const l=Ps("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(u.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:s},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function oc(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function cc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dc(){return ki()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="firebaseLocalStorageDb",uc=1,Dt="firebaseLocalStorage",Ai="fbase_key";class bt{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function jt(t,e){return t.transaction([Dt],e?"readwrite":"readonly").objectStore(Dt)}function hc(){const t=indexedDB.deleteDatabase($i);return new bt(t).toPromise()}function Ti(){const t=indexedDB.open($i,uc);return new Promise((e,s)=>{t.addEventListener("error",()=>{s(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Dt,{keyPath:Ai})}catch(i){s(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Dt)?e(n):(n.close(),await hc(),e(await Ti()))})})}async function bn(t,e,s){const n=jt(t,!0).put({[Ai]:e,value:s});return new bt(n).toPromise()}async function pc(t,e){const s=jt(t,!1).get(e),n=await new bt(s).toPromise();return n===void 0?null:n.value}function yn(t,e){const s=jt(t,!0).delete(e);return new bt(s).toPromise()}const fc=800,mc=3;class Ci{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Ti(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let s=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(s++>mc)throw n;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ki()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vt._getInstance(dc()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var s,n;if(this.activeServiceWorker=await cc(),!this.activeServiceWorker)return;this.sender=new ac(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(s=e[0])!=null&&s.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await bn(e,Nt,"1"),await yn(e,Nt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(n=>bn(n,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(n=>pc(n,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>yn(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const r=jt(i,!1).getAll();return new bt(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),s.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),s.push(i));return s}catch(e){return this.isClosing||vt(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Ci.type="LOCAL";const gc=Ci;new ft(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e){return e?re(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends $s{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return je(e,this._buildIdpRequest())}_linkToIdToken(e,s){return je(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return je(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function bc(t){return vi(t.auth,new Os(t),t.bypassAuthState)}function yc(t){const{auth:e,user:s}=t;return b(s,e,"internal-error"),qo(s,new Os(t),t.bypassAuthState)}async function vc(t){const{auth:e,user:s}=t;return b(s,e,"internal-error"),Wo(s,new Os(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,s,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:n,postBody:i,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:s,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bc;case"linkViaPopup":case"linkViaRedirect":return vc;case"reauthViaPopup":case"reauthViaRedirect":return yc;default:F(this.auth,"internal-error")}}resolve(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new ft(2e3,1e4);async function Ic(t,e,s){if(B(t.app))return Promise.reject(G(t,"operation-not-supported-in-this-environment"));const n=ue(t);Zn(t,e,Ht);const i=Rs(n,s);return new ve(n,"signInViaPopup",e,i).executeNotNull()}async function Ec(t,e,s){const n=H(t);Zn(n.auth,e,Ht);const i=Rs(n.auth,s);return new ve(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class ve extends Pi{constructor(e,s,n,i,r){super(e,s,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ve.currentPopupAction&&ve.currentPopupAction.cancel(),ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ce(this.filter.length===1,"Popup operations only handle one event");const e=Ps();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(G(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(G(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,n;if((n=(s=this.authWindow)==null?void 0:s.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(G(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wc.get())};e()}}ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="pendingRedirect",Et=new Map;class _c extends Pi{constructor(e,s,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,n),this.eventId=null}async execute(){let e=Et.get(this.auth._key());if(!e){try{const n=await kc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(s){e=()=>Promise.reject(s)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kc(t,e){const s=Tc(e),n=Ac(t);if(!await n._isAvailable())return!1;const i=await n._get(s)==="true";return await n._remove(s),i}function $c(t,e){Et.set(t._key(),e)}function Ac(t){return re(t._redirectPersistence)}function Tc(t){return It(Sc,t.config.apiKey,t.name)}async function Cc(t,e,s=!1){if(B(t.app))return Promise.reject(ae(t));const n=ue(t),i=Rs(n,e),a=await new _c(n,i,s).execute();return a&&!s&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=600*1e3;class Rc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(s=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Oc(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var n;if(e.error&&!Ri(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";s.onError(G(this.auth,i))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const n=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pc&&this.cachedEventUids.clear(),this.cachedEventUids.has(vn(e))}saveEventToCache(e){this.cachedEventUids.add(vn(e)),this.lastProcessedEventTime=Date.now()}}function vn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ri({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Oc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ri(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t,e={}){return de(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xc=/^https?/;async function Lc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nc(t);for(const s of e)try{if(Mc(s))return}catch{}F(t,"unauthorized-domain")}function Mc(t){const e=os(),{protocol:s,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?s==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&a.hostname===n}if(!xc.test(s))return!1;if(Dc.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new ft(3e4,6e4);function wn(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let s=0;s<t.CP.length;s++)t.CP[s]=null}}function Bc(t){return new Promise((e,s)=>{var i,r,a;function n(){wn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wn(),s(G(t,"network-request-failed"))},timeout:Uc.get()})}if((r=(i=Z().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=Z().gapi)!=null&&a.load)n();else{const o=_o("iframefcb");return Z()[o]=()=>{gapi.load?n():s(G(t,"network-request-failed"))},mi(`${So()}?onload=${o}`).catch(c=>s(c))}}).catch(e=>{throw St=null,e})}let St=null;function Fc(t){return St=St||Bc(t),St}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new ft(5e3,15e3),Vc="__/auth/iframe",jc="emulator/auth/iframe",Wc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gc(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const s=e.emulator?Ss(e,jc):`https://${t.config.authDomain}/${Vc}`,n={apiKey:e.apiKey,appName:t.name,v:pt},i=qc.get(t.config.apiHost);i&&(n.eid=i);const r=t._getFrameworks();return r.length&&(n.fw=r.join(",")),`${s}?${ht(n).slice(1)}`}async function zc(t){const e=await Fc(t),s=Z().gapi;return b(s,t,"internal-error"),e.open({where:document.body,url:Gc(t),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wc,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const a=G(t,"network-request-failed"),o=Z().setTimeout(()=>{r(a)},Hc.get());function c(){Z().clearTimeout(o),i(n)}n.ping(c).then(c,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yc=500,Jc=600,Xc="_blank",Qc="http://localhost";class In{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zc(t,e,s,n=Yc,i=Jc){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c={...Kc,width:n.toString(),height:i.toString(),top:r,left:a},l=L().toLowerCase();s&&(o=ci(l)?Xc:s),ai(l)&&(e=e||Qc,c.scrollbars="yes");const d=Object.entries(c).reduce((u,[m,y])=>`${u}${m}=${y},`,"");if(fo(l)&&o!=="_self")return el(e||"",o),new In(null);const h=window.open(e||"",o,d);b(h,t,"popup-blocked");try{h.focus()}catch{}return new In(h)}function el(t,e){const s=document.createElement("a");s.href=t,s.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="__/auth/handler",sl="emulator/auth/handler",nl=encodeURIComponent("fac");async function En(t,e,s,n,i,r){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:n,v:pt,eventId:i};if(e instanceof Ht){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Nr(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))a[d]=h}if(e instanceof gt){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await t._getAppCheckToken(),l=c?`#${nl}=${encodeURIComponent(c)}`:"";return`${il(t)}?${ht(o).slice(1)}${l}`}function il({config:t}){return t.emulator?Ss(t,sl):`https://${t.authDomain}/${tl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="webStorageSupport";class rl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_i,this._completeRedirectFn=Cc,this._overrideRedirectResult=$c}async _openPopup(e,s,n,i){var a;ce((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await En(e,s,n,os(),i);return Zc(e,r,Ps())}async _openRedirect(e,s,n,i){await this._originValidation(e);const r=await En(e,s,n,os(),i);return oc(r),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:i,promise:r}=this.eventManagers[s];return i?Promise.resolve(i):(ce(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[s]={promise:n},n.catch(()=>{delete this.eventManagers[s]}),n}async initAndGetManager(e){const s=await zc(e),n=new Rc(e);return s.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=s,n}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(Qt,{type:Qt},i=>{var a;const r=(a=i==null?void 0:i[0])==null?void 0:a[Qt];r!==void 0&&s(!!r),F(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=Lc(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return pi()||oi()||ks()}}const al=rl;var Sn="@firebase/auth",_n="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);s&&(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ll(t){at(new Ge("auth",(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;b(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fi(t)},l=new wo(n,i,r,c);return Co(l,s),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,n)=>{e.getProvider("auth-internal").initialize()})),at(new Ge("auth-internal",e=>{const s=ue(e.getProvider("auth").getImmediate());return(n=>new ol(n))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Sn,_n,cl(t)),He(Sn,_n,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=300,ul=Vn("authIdTokenMaxAge")||dl;let kn=null;const hl=t=>async e=>{const s=e&&await e.getIdTokenResult(),n=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(n&&n>ul)return;const i=s==null?void 0:s.token;kn!==i&&(kn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pl(t=La()){const e=zn(t,"auth");if(e.isInitialized())return e.getImmediate();const s=To(t,{popupRedirectResolver:al,persistence:[gc,ic,_i]}),n=Vn("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=hl(r.toString());Zo(s,a,()=>a(s.currentUser)),Qo(s,o=>a(o))}}const i=Sr("auth");return i&&Po(s,`http://${i}`),s}function fl(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Io({loadJS(t){return new Promise((e,s)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const r=G("internal-error");r.customData=i,s(r)},n.type="text/javascript",n.charset="UTF-8",fl().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ll("Browser");const ml={VITE_API_BASE:"https://europe-west1-agentlab-6a2ed.cloudfunctions.net/api/api",VITE_FIREBASE_API_KEY:"AIzaSyA85iJNW1BJjqKnzta9qvtTwum9OIBH2U0",VITE_FIREBASE_APP_ID:"1:926148159880:web:765298762db0a3fb9f323d",VITE_FIREBASE_AUTH_DOMAIN:"agentlab-6a2ed.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"agentlab-6a2ed",VITE_USE_EMULATORS:"false"},Ue=ml,Oi=Ue.VITE_USE_EMULATORS==="true",E=pl(Kn({apiKey:Ue.VITE_FIREBASE_API_KEY,authDomain:Ue.VITE_FIREBASE_AUTH_DOMAIN,projectId:Ue.VITE_FIREBASE_PROJECT_ID,appId:Ue.VITE_FIREBASE_APP_ID}));async function w(t,e,s=e?"POST":"GET",n=!1){var a;const i=await((a=E.currentUser)==null?void 0:a.getIdToken()),r=await fetch(Ue.VITE_API_BASE+t,{method:s,headers:{Authorization:`Bearer ${i}`,...e?{"Content-Type":"application/json"}:{}},...e?{body:JSON.stringify(e)}:{},signal:AbortSignal.timeout(12e4)});if(!r.ok){let o;try{o=(await r.json()).error}catch{}throw new Error(o||`Request failed (${r.status}).`)}return n?r:r.json()}function gl(){try{const t=JSON.parse(localStorage.getItem("simp:handoff:v1")||"null");return(t==null?void 0:t.v)!==1||t.sim!=="agentlab"||typeof t.ts!="number"||Math.abs(Date.now()-t.ts)>1800*1e3||typeof t.profile!="object"||!t.profile||JSON.stringify(t.profile).length>16e3?null:t}catch{return null}}function bl(t){const e=(t==null?void 0:t.profile)||{},s=String(e.name||"").trim().split(/\s+/);return{firstName:e.firstName||s[0]||"",lastName:e.lastName||s.slice(1).join(" "),studentId:e.studentId||e.sid||"",email:e.email||""}}hr();const v=t=>document.querySelector(t),g=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ls=(t,e)=>$(t,e||(ee==="session"&&p?rt(p.session.config).currency:"EUR")),Je=t=>new Date(t).toLocaleString(),z=gl(),Te=bl(z);let T=null,p=null,ee="home",xt="login",A=null,Pe=!1,Zt=!1,_="",_t=null,O=null,Ns=[],we="sessions",Re=null,Q=!1,Oe=null,Ni="",it=[],dt=null,Ne=null;const Di=t=>{var e,s,n,i;return JSON.stringify([t.session.config,t.session.status,t.session.matchCount,t.session.simulationProgress,(e=t.members)==null?void 0:e.length,(s=t.members)==null?void 0:s.filter(r=>r.final).length,(n=t.summary)==null?void 0:n.completed,(i=t.personalStats)==null?void 0:i.completed,t.feedback,t.roundComparisons,t.testControls,t.studentScores,t.promptHistory,t.spending])},xi=()=>new URLSearchParams(location.search).get("session")||"",yl=xi()||(z==null?void 0:z.session)||"";function Li(t){const e=new URL(location.href);return e.searchParams.delete("session"),e.hash="",t&&e.searchParams.set("session",t),e}function Mi(t){const e=Li(t);e.searchParams.delete("view"),t&&Q&&(e.searchParams.delete("session"),e.searchParams.set("view","student"),e.searchParams.set("session",t)),e.href!==location.href&&history.pushState({},"",e)}async function Ui(){const t=xi(),e=new URLSearchParams(location.search).get("view")==="student";if(await Y(!1),!!t)try{const s=it.find(i=>i.code.toUpperCase()===t.toUpperCase());if(We()&&s){await ze(s.id,e);return}if(!T.profile||!E.currentUser.emailVerified&&!Oi)return;const n=await w("/join",{code:t});await ze(n.id)}catch(s){Xe(s)}}window.addEventListener("popstate",()=>{E!=null&&E.currentUser&&Ui().catch(Xe)});const We=()=>T&&T.role!=="student",R=(t,e,s="",n="text",i="")=>`<label>${e}<input name="${t}" type="${n}" value="${g(s)}" ${i}></label>`,I=(t,e,s="secondary",n="")=>`<button type="button" class="${s}" data-action="${e}" ${n}>${t}</button>`,Me=t=>`<span class="badge ${g(t)}">${g(t.replaceAll("_"," "))}</span>`;function _e(t){v("#app").innerHTML=`<header><a href="#" class="brand" data-action="home"><span class="brand-icon">a<span>l</span></span>Agent<span>Lab</span></a><nav class="account-nav" aria-label="Account navigation">${sr({compact:!0})}${nr(T,(E==null?void 0:E.currentUser)||{})}</nav></header><div id="notice" role="status" aria-live="polite">${g(_)}</div><main>${t}</main><footer>AgentLab · A learning lab for humans and AI agents <span>Konstantinos Stouras</span></footer>`,Yi(document,A||"")}function Xe(t){_=t.message||String(t);const e=v("#notice");e&&(e.textContent=_,e.classList.add("error"),e.scrollIntoView({block:"nearest"}))}function ds(){const t=xt==="register";_e(`<section class="entry"><div class="intro"><p class="eyebrow">BUILD · DELEGATE · DISCOVER</p><h1>Your strategy.<br>Your agent.<br><em>What happens next?</em></h1><p class="lead">Explore how the instructions you write shape the decisions your agents make. Start with a negotiation. Learn from every turn.</p><div class="orbit"><div class="agent-node buyer">Buyer<br><strong>↗</strong></div><div class="orbit-line">⇄</div><div class="agent-node seller">Seller<br><strong>↙</strong></div></div></div><section class="card auth-card"><p class="eyebrow">WELCOME TO THE LAB</p><h2>${t?"Create your account":"Pick up where you left off"}</h2><p>${t?"Register once. Join your class with a session code.":"Sign in, then enter the session code from your instructor."}</p><form id="auth-form">${t?`<div class="form-grid">${R("firstName","First name",Te.firstName,"text",'required autocomplete="given-name" maxlength="80"')}${R("lastName","Last name",Te.lastName,"text",'required autocomplete="family-name" maxlength="80"')}</div>${R("studentId","University ID",Te.studentId,"text",'required minlength="2" maxlength="40"')}`:""}${R("email","Email",Te.email,"email",'required autocomplete="email"')}${R("password","Password","","password",`required minlength="8" autocomplete="${t?"new-password":"current-password"}"`)}<button class="primary full">${t?"Create account":"Sign in"}</button></form><div class="divider">or</div><button type="button" class="google-signin full" data-action="google"><img src="${Pn}" alt="" width="20" height="20"><span>Continue with Google</span></button><p class="small">${t?"Already registered?":"New to AgentLab?"} ${I(t?"Sign in":"Create an account","toggle-auth","text-button")}</p>${t?"":I("Forgot your password?","reset","text-button")}<p class="fine">Your profile, prompts and play records are visible to your instructor. Agent instructions and negotiation dialogue are sent to the AI provider. Keep personal information out of prompts.</p></section></section>`)}function Bi(){var e,s;const t=T.profile||{...Te,firstName:((e=E.currentUser.displayName)==null?void 0:e.split(" ")[0])||Te.firstName,lastName:((s=E.currentUser.displayName)==null?void 0:s.split(" ").slice(1).join(" "))||Te.lastName};return`<section class="card"><h2>${T.profile?"Your details":"Complete your profile"}</h2><form id="profile-form"><div class="form-grid">${R("firstName","First name",t.firstName,"text",'required maxlength="80"')}${R("lastName","Last name",t.lastName,"text",'required maxlength="80"')}${R("studentId","University ID",t.studentId,"text",'required minlength="2" maxlength="40"')}${R("email","Email",E.currentUser.email,"email","required")}</div>${z?'<p class="callout">Registration data from the Simulation Platform will be saved with your profile when you save these details.</p>':""}<button class="primary">Save details</button></form>${T.profile?`<div class="actions">${I("Send password setup / reset email","reset","text-button")}${E.currentUser.providerData.some(n=>n.providerId==="google.com")?"":I("Connect Google sign-in","link-google","text-button")}</div>`:""}${t.simulationProfile?`<details><summary>Additional Simulation Platform data</summary><dl>${Object.entries(t.simulationProfile).map(([n,i])=>`<dt>${g(n)}</dt><dd>${g(typeof i=="object"?JSON.stringify(i):i)}</dd>`).join("")}</dl></details>`:""}</section>`}function Fi(){return!E.currentUser.emailVerified&&!Oi?`<section class="callout"><strong>Verify your email to join a class.</strong><p>Open the verification link in your inbox, then refresh your verification status here.</p>${I("Send verification email","verify")}${I("I have verified my email","verified")}</section>`:""}function $n(t=[]){var e,s;if(We()){vl(t);return}_e(`<div class="page-heading"><div><p class="eyebrow">YOUR WORKSPACE</p><h1>Hello, ${g(((e=T.profile)==null?void 0:e.firstName)||((s=E.currentUser.displayName)==null?void 0:s.split(" ")[0])||"there")}.</h1><p>Practise your strategies. Improve your decisions.</p></div>${Me(T.role)}</div>${Fi()}${!T.profile&&!We()?Bi():""}<div class="dashboard-grid"><section class="card accent"><p class="eyebrow">JOIN YOUR CLASS</p><h2>Enter the lab.</h2><form id="join-form">${R("code","Session code",yl,"text",'required minlength="4" maxlength="24" placeholder="e.g. MBA-2027"')}<button class="primary">Join session →</button></form></section><section class="card"><p class="eyebrow">YOUR SESSIONS</p><div class="session-list">${t.length?t.map(n=>`<button class="session-link" data-open="${g(n.id)}"><span><strong>${g(n.title)}</strong><small>${g(n.moduleCode||"Negotiation lab")}</small></span>${n.status?Me(n.status):"<span>→</span>"}</button>`).join(""):'<p class="empty">Your classes will appear here after you join.</p>'}</div></section></div>${We()?Wi():""}`)}const Hi={mobile:{},desktop:{}},Ds=matchMedia("(max-width: 760px)");function us(t,e,s,n="",i=""){return`<details class="card dashboard-section ${n}" id="${t}" open aria-labelledby="${t}-heading"><summary class="dashboard-section-heading"><h2 id="${t}-heading">${e}</h2>${i?`<span class="session-count">${i}</span>`:""}<span class="section-toggle-sign" aria-hidden="true"></span></summary><div class="dashboard-section-content">${s}</div></details>`}function Vi(){const t=Ds.matches?"mobile":"desktop";document.querySelectorAll(".dashboard-section").forEach(e=>{e.open=Hi[t][e.id]??e.id==="active-sessions"})}Ds.addEventListener("change",Vi);document.addEventListener("toggle",t=>{var s;const e=t.target;!((s=e.matches)!=null&&s.call(e,".dashboard-section"))||!e.isConnected||(Hi[Ds.matches?"mobile":"desktop"][e.id]=e.open)},!0);document.addEventListener("click",t=>{const e=t.target.closest('.admin-options a[href^="#"]');if(!e)return;const s=document.getElementById(e.getAttribute("href").slice(1));s!=null&&s.matches(".dashboard-section")&&(s.open=!0)});function vl(t){if(it=t,we==="negotiations"){Ls();return}const e=[...t].sort((a,o)=>(o.createdAt||0)-(a.createdAt||0)),s=e.filter(a=>["closed","debrief"].includes(a.status)),n=e.filter(a=>!["closed","debrief"].includes(a.status)),i=(a,o,c,l,d)=>us(a,o,`<p class="section-description">${l}</p>${c.length?I(`Delete all ${a==="active-sessions"?"active":"past"} sessions`,"delete-session-group","danger bulk-delete",`data-group="${a}"`):""}<div class="admin-session-list">${c.length?c.map(wl).join(""):`<p class="empty">${d}</p>`}</div>`,"session-section",`${c.length} ${c.length===1?"session":"sessions"}`),r=us("dashboard-options","Options",`<nav aria-label="Dashboard sections"><a href="#active-sessions">Active sessions <span>${n.length}</span></a><a href="#past-sessions">Past sessions <span>${s.length}</span></a><a href="#create-session-panel">Create a session <span>＋</span></a>${I("Refresh sessions","home","sidebar-button")}${I("My profile & stats","profile","sidebar-button")}</nav><p class="small">Refresh updates the session list. Open a session to manage its activity.</p>`,"admin-options");_e(`${ji()}${xs()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions"><div class="admin-layout"><div class="admin-session-column">${i("active-sessions","Active sessions",n,"Open a session to manage registration, run negotiations and monitor your students. Draft, lobby and paused sessions also appear here.","No active sessions yet. Create a session to get started.")}${i("past-sessions","Past sessions",s,"Review closed sessions, release debriefs and download session results.","Closed sessions will appear here.")}</div><aside class="admin-sidebar" aria-label="Instructor options">${Wi()}${r}</aside></div></div>`),Vi()}function ji(){return`<div class="page-heading"><div><p class="eyebrow">INSTRUCTOR WORKSPACE</p><h1>AgentLab admin</h1><p>Manage your sessions and set up each learning task.</p></div>${Me(T.role)}</div>`}function xs(){return`<div class="admin-tabs" role="tablist" aria-label="Admin area">${[["sessions","Sessions"],["negotiations","Negotiations"]].map(([t,e])=>I(e,"admin-tab",we===t?"admin-tab selected":"admin-tab",`id="tab-${t}" role="tab" aria-selected="${we===t}" aria-controls="admin-panel" data-tab="${t}"`)).join("")}</div>`}function $e(t,e,s,n,i){return`<div class="setting-field"><label for="setting-${t}">${e}</label><input id="setting-${t}" name="${t}" type="number" value="${g(s)}" aria-describedby="help-${t}" ${i} required><p id="help-${t}" class="field-help">${n}</p></div>`}function Ls(){const t=Re;_e(`${ji()}${xs()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-negotiations"><section class="card task-overview"><p class="eyebrow">TASK 01 / NEGOTIATIONS</p><h2>Used-car negotiation</h2><p>Students write buyer and seller strategies, practise, then send their agents to negotiate. The scenario is a ${U.title} with 105,013 km in Dublin. Both buyer and seller use a shared KBB-style value range based on the outside options below. The listing and included equipment are shared with both sides; the KBB-style range explains both sides’ outside options.</p><p class="small">The app uses structured offers and acceptance. Buyer moves first; no agreement earns zero for both sides.</p></section><form id="negotiation-settings"><section class="card"><h2>Game rules</h2><p>These are your defaults for new sessions. Saving here does not change existing sessions.</p><div class="form-grid">${$e("buyerValue","Buyer fallback (€)",t.buyerValue,"What the buyer would pay elsewhere. Buyer surplus = this value minus the agreed price. Upper endpoint of the shared KBB-style exercise range.",'min="1" max="1000000"')}${$e("sellerCost","Seller fallback (€)",t.sellerCost,"What the seller could receive elsewhere. Seller surplus = agreed price minus this value. Lower endpoint of the shared KBB-style exercise range. Must be below the buyer fallback.",'min="0" max="999999"')}${$e("maxTurns","Maximum turns",t.maxTurns,"Total messages across both sides, not turns per student. If no offer is accepted by the limit, the match ends without a deal. Default: 12.",'min="2" max="24"')}${$e("humanTurnSeconds","Seconds per human turn",t.humanTurnSeconds,"Time available to enter a human offer or response. A missed deadline ends that match without a deal. Applies to human and hybrid rounds.",'min="30" max="1800"')}</div></section><section class="card"><h2>Practice and session size</h2><div class="form-grid">${$e("maxPractice","Practice matches per student",t.maxPractice,"Each practice runs the student’s own buyer against their own seller. Set 0 to skip practice. Practice does not count toward evaluation scores.",'min="0" max="20"')}${$e("maxMatches","Total match budget",t.maxMatches,"Maximum negotiations across the entire session, including practice and every evaluation round. This is a match count, not a monetary spending cap.",'min="1" max="400"')}</div><p class="callout">One agent tournament with n submitted students uses n × (n − 1) matches. For 15 students with two practices each, allow at least 240 matches. The current maximum is 400 per session.</p></section><section class="card"><h2>AI settings</h2><div class="form-grid">${er(t)}${$e("temperature","Temperature",t.temperature,"Controls response variation. Lower values tend to be more consistent; higher values more varied. Default: 1.",'min="0" max="2" step="0.1"')}</div>${qi(t)}<div class="actions"><button class="primary">Save negotiation settings</button>${I("Restore baseline values","reset-negotiation-settings","secondary")}${I("Go to Sessions","admin-tab","secondary",'data-tab="sessions"')}</div><p class="small">Save stores these defaults for your instructor account. Restore fills in the original game and classroom defaults; click Save to keep them. Go to Sessions lets you create a class using the last saved settings.</p></section></form>${Xi()}${tr(Ns,T.role==="admin")}<section class="card"><h2>Running a round</h2><p>Open a session from Sessions, open registration, then open the activity. When students have submitted their strategies, choose a treatment and start a round.</p><dl class="treatment-guide"><dt>Agent ↔ Agent</dt><dd>Every submitted buyer meets every other submitted seller. No self-matches. Repetitions repeats the complete tournament.</dd><dt>Human ↔ Human</dt><dd>Random pairs negotiate directly. Requires an even number of enrolled students.</dd><dt>Hybrid treatments</dt><dd>One side is human, the other an agent. Uses students with submitted strategies and requires an even eligible group.</dd><dt>Pause / Resume</dt><dd>Temporarily stop play, then continue it.</dd><dt>Close / Release debrief</dt><dd>Close ends the session and cancels unfinished matches. Release debrief reveals counterpart types to students.</dd></dl></section></div>`),gs(v("#negotiation-settings")),Ut()}function wl(t){return ir(t,{esc:g,date:Je,btn:I,badge:Me})}function Wi(){const t=Re;return us("create-session-panel","Create a session",`<form id="create-session">${R("title","Session title","Negotiation lab","text",'required maxlength="120"')}${R("code","Session code","","text",'required pattern="[A-Za-z0-9-]{4,24}" placeholder="MBA-2027"')}<p class="field-help">A unique code your students use to join. Use 4–24 letters, numbers or hyphens.</p>${R("moduleCode","Module","BMGT41040")}<label>Task<select name="taskId"><option value="negotiation-v1">Used-car negotiation</option></select></label>${Il()}<p class="small">New sessions use your saved Negotiations settings: ${t.maxTurns} turns, ${t.maxPractice} practices per student and ${t.maxMatches} total matches.</p>${I("Edit negotiation settings","admin-tab","text-button",'data-tab="negotiations"')}<button class="primary full">Create session</button><p class="small">Creates a draft. Open registration inside the session to begin.</p></form>`)}function Il(){return`<div class="test-session-options"><label class="checkbox-label"><input type="checkbox" name="testSession" id="test-session">Test session with simulated students</label><p class="field-help">Rehearse the workflow without inviting students or creating student accounts.</p><div id="simulation-options" hidden><label class="checkbox-label"><input type="checkbox" name="playAsStudent" id="play-as-student">Play as a student with my own strategies</label><p class="field-help">Adds you alongside the simulated students. You write, practise and submit your own buyer and seller strategies. Uses live AI.</p>${R("simulatedStudents","Simulated students",3,"number",'min="2" max="6"')}<label>Test engine<select name="simulationEngine"><option value="scripted">Scripted rehearsal</option><option value="live">Live AI test</option></select></label><p class="field-help">Scripted: predictable sample offers, no AI API calls. Live AI: strategies use your selected model and incur normal API charges. Both use Firebase resources. With you and three simulated students, one tournament has 12 matches; six involve your agents.</p></div></div>`}function El(){var e;const t=p.session;return(e=t.simulation)!=null&&e.playAsStudent&&t.ownerId===T.uid?`<section class="card player-view-bar"><div><strong>${p.playerView?"Test round":"Test controls"}</strong><p class="small">${p.playerView?"Write your own strategies and see only your negotiations. Test results stay separate from your classroom statistics.":"Continue your test round to write strategies and participate with your own agents."}</p></div>${I(p.playerView?"Back to instructor controls":"Continue test round",p.playerView?"instructor-view":"student-view","secondary",p.member?"":"disabled")}</section>`:""}const Lt=(t,e)=>t!=null&&t.byCurrency?Object.entries(t.byCurrency).map(([s,n])=>$(n[e+"Mean"],s)).join(" / ")||"—":ls(t==null?void 0:t[e+"Mean"],t==null?void 0:t.currency);function Sl(){const t=p.personalStats;return`<section class="card"><h2>Your test results</h2><p>Evaluation matches involving your agents only. Practice is excluded. Your buyer and seller each face every simulated classmate once per tournament. These totals combine all rounds; compare individual rounds below.</p><div class="metrics"><div><strong>${t.completed}</strong><span>completed evaluations</span></div><div><strong>${t.agreements}</strong><span>agreements</span></div><div><strong>${Lt(t,"buyer")}</strong><span>mean buyer surplus · ${t.buyerCount} matches</span></div><div><strong>${Lt(t,"seller")}</strong><span>mean seller surplus · ${t.sellerCount} matches</span></div></div></section>`}function qi(t){return`<label class="checkbox-label"><input type="checkbox" name="autoFeedback" ${t.autoFeedback!==!1?"checked":""}>Automatic personalised feedback</label><label>Feedback tone<select name="feedbackTone">${[["supportive","Supportive and encouraging"],["balanced","Balanced and constructive"],["challenging","Challenging and direct"]].map(([e,s])=>`<option value="${e}" ${(t.feedbackTone||"supportive")===e?"selected":""}>${s}</option>`).join("")}</select></label><p class="small">After a round finishes, the selected AI lab reviews each student's strategies, results and selected transcripts. Feedback appears automatically. Uses the session's AI model and adds API token usage; simulated classmates and scripted tests do not generate feedback. Tone changes apply to future feedback.</p>`}function Mt(t){var i;const e=t==null?void 0:t.published,s=e==null?void 0:e.content,n=((i=t==null?void 0:t.pending)==null?void 0:i.status)||(t==null?void 0:t.status);return`${n==="queued"||n==="generating"?'<p class="callout">Your personalised feedback is being prepared.</p>':n==="error"?'<p class="callout">Feedback could not be generated. Your instructor can retry it.</p>':""}${s?`<p class="feedback-text">${g(s.overview)}</p><h3>What worked well</h3><ul>${s.strengths.map(r=>`<li>${g(r)}</li>`).join("")}</ul><h3>What to improve</h3><ul>${s.improvements.map(r=>`<li>${g(r)}</li>`).join("")}</ul><h3>Try this next</h3><p class="feedback-text">${g(s.nextStrategy)}</p><p class="small">${e.reviewedMatches} scored negotiations · ${e.sampledMatches} transcript examples reviewed · ${Je(e.releasedAt)}. Use this feedback to reflect and improve.</p>`:n?"":'<p class="small">Personalised feedback appears here after a completed evaluation round when automatic feedback is enabled.</p>'}`}function _l(){var a,o,c,l;if(!p.members)return`<section class="card"><p class="eyebrow">REFLECT & IMPROVE</p><h2>Your feedback</h2>${Mt(p.feedback)}</section>`;const t=p.session.config,e=`<form id="feedback-settings" class="card"><h2>Automatic student feedback</h2>${qi(t)}<button class="primary">Save feedback settings</button></form>`;if(!p.members.length)return e;const s=p.members.find(d=>d.uid===dt)||p.members[0];dt=s.uid;const n=(a=p.feedback)==null?void 0:a.find(d=>d.uid===s.uid),i=(o=p.summary)==null?void 0:o.participants.find(d=>d.uid===s.uid),r=p.matches.filter(d=>{var h,u;return((h=d.buyer)==null?void 0:h.uid)===s.uid||((u=d.seller)==null?void 0:u.uid)===s.uid});return e+`<section class="card"><p class="eyebrow">REVIEW & COACH</p><h2>Student progress & feedback</h2><label>Student<select id="review-student">${p.members.map(d=>{var h,u;return`<option value="${g(d.uid)}" ${d.uid===s.uid?"selected":""}>${g(((h=d.profile)==null?void 0:h.name)||d.pseudonym)} · ${g((u=d.profile)==null?void 0:u.studentId)}</option>`}).join("")}</select></label><div class="metrics"><div><strong>${(i==null?void 0:i.buyerCount)||0}</strong><span>buyer evaluations</span></div><div><strong>${Lt(i,"buyer")}</strong><span>mean buyer surplus</span></div><div><strong>${(i==null?void 0:i.sellerCount)||0}</strong><span>seller evaluations</span></div><div><strong>${Lt(i,"seller")}</strong><span>mean seller surplus</span></div></div><details><summary>Latest submitted strategies</summary>${s.final?`<h3>Buyer</h3><p class="feedback-text">${g(s.final.buyer)}</p><h3>Seller</h3><p class="feedback-text">${g(s.final.seller)}</p>`:"<p>No strategies submitted yet.</p>"}</details><details><summary>Review negotiations (${r.length})</summary>${r.map(d=>`<p><a href="#match-${g(d.id)}">${d.practice?"Practice":"Evaluation"} · ${d.buyer.uid===s.uid?"Buyer":"Seller"} · ${g(d.status)} · ${d.id.slice(-6)}</a></p>`).join("")}</details><h3>Personalised feedback</h3>${s.simulated?'<p class="small">Simulated classmates do not receive AI feedback.</p>':Mt(n)}${((c=n==null?void 0:n.pending)==null?void 0:c.status)==="error"||((l=n==null?void 0:n.pending)==null?void 0:l.status)==="generating"&&n.pending.leaseUntil<Date.now()?I("Retry automatic feedback","retry-feedback","secondary",`data-uid="${g(s.uid)}"`):""}</section>`}function kl(){var r;const{session:t}=p,e=(r=p.members)==null?void 0:r.filter(a=>a.simulated);if(!t.simulation)return"";const s=t.simulationProgress||{},n=t.status==="active",i=a=>a?"":"disabled";return`<section class="card rehearsal-panel"><p class="eyebrow">INSTRUCTOR TEST SESSION</p><h2>Rehearse with ${t.simulation.students} simulated students${t.simulation.playAsStudent?" and your own agents":""}</h2><p>${t.simulation.engine==="scripted"?"Scripted rehearsal: deterministic sample offers, no AI API calls. These results do not measure AI or student performance.":"Live AI test: sample strategies run through "+g(t.config.model)+". Normal AI API charges apply. These are simulated students, not real class results."} Real students cannot join this session.</p>${t.simulation.playAsStudent&&t.ownerId===T.uid&&["draft","lobby","active"].includes(t.status)?I("Prepare test and play","prepare-player-test","primary")+'<p class="small">Sets up your simulated classmates and opens Student view. Write your own strategies there; these are never filled in for you. No AI runs until you request practice or start a round.</p>':""}<ol class="rehearsal-steps"><li><strong>Open registration</strong> using the session control below, then add your simulated roster.</li><li>${I(s.enrol?"Simulated students added":"Add simulated students","simulation","secondary",`data-step="enrol" ${i(t.status==="lobby"&&!s.enrol)}`)} <span>Creates sample names and university IDs inside this session only.</span></li><li><strong>Open activity</strong>, then submit the sample strategies.</li><li>${I(s.submit?"Strategies submitted":"Submit simulated strategies","simulation","secondary",`data-step="submit" ${i(n&&s.enrol&&!s.submit)}`)} <span>Gives each student a different buyer/seller strategy.</span></li><li>${I(s.practice?"Practice started":"Run one practice per student","simulation","secondary",`data-step="practice" ${i(n&&s.submit&&!s.practice&&t.config.maxPractice>0)}`)} <span>${t.config.maxPractice?"Optional: runs each student’s buyer against their own seller.":"Practice is disabled in these session settings."}</span></li><li>Select <strong>Agent ↔ Agent</strong> below and click <strong>Start round</strong>. Wait for all evaluations, then <strong>Close session → Release debrief</strong> and export the test results.</li></ol>${e!=null&&e.some(a=>a.final)?`<details><summary>Inspect simulated student strategies</summary>${e.map(a=>{var o,c,l;return`<h3>${g((o=a.profile)==null?void 0:o.name)} · ${g(a.style)}</h3><p class="small"><strong>Buyer:</strong> ${g((c=a.final)==null?void 0:c.buyer)}<br><strong>Seller:</strong> ${g((l=a.final)==null?void 0:l.seller)}</p>`}).join("")}</details>`:""}</section>`}function x(){var i;Mi(p.session.code);const t=new Set([...document.querySelectorAll("#round-comparison details[open], #matches details[open]")].map(r=>r.dataset.roundStrategy||r.dataset.id));Ni=Di(p);const{session:e,member:s}=p,n=We()&&!!p.members;_e(`<div class="page-heading"><div><p class="eyebrow">${g(e.moduleCode)} / ACTIVITY 01</p><h1>${g(e.title)}</h1><p>Used-car negotiation · ${g(rt(e.config).title)} ${e.simulation?"· TEST SESSION":""}</p></div>${Me(e.status)}</div>${n?xs()+'<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions">':""}${T.aiReady===!1&&((i=e.simulation)==null?void 0:i.engine)!=="scripted"?'<p class="callout">AI negotiations are awaiting setup. You can save strategies and run human negotiations in the meantime.</p>':""}${p.inspecting?`<section class="card"><h2>Student screen · ${g(p.inspecting.name)}</h2><p>Read-only instructor preview. Actions are disabled.</p>${I("Back to instructor controls","end-inspection","secondary")}</section>`:El()}${n?kl()+Tl()+Tn(p.spending)+Cl()+$l(e):Al()}${p.playerView?Sl():""}${Pl()}${_l()}${n?"":Ln(p.roundComparisons,Ne,{esc:g,date:Je,feedbackContent:Mt})}<section class="card"><div class="section-heading"><h2>${n?"Session negotiations":"Your negotiations"}</h2><span class="small">Updates automatically</span></div><div id="matches"></div></section>${n?"</div>":""}`),Wt();for(const r of document.querySelectorAll("#round-comparison details, #matches details"))t.has(r.dataset.roundStrategy||r.dataset.id)&&(r.open=!0);if(e.simulation){const r=v("#round-form select[name=mode]");if(r)for(const a of r.options)a.value!=="AA"&&(a.disabled=!0)}}function $l(t){const e=t.config;return`<section class="card"><details><summary>This session’s negotiation settings</summary><p class="small">These are the settings for future negotiations in this session. Completed negotiations retain their original settings and results. Changes in Negotiations apply to new sessions.</p><dl><dt>Buyer / seller fallback</dt><dd>${ls(e.buyerValue)} / ${ls(e.sellerCost)}</dd><dt>Maximum turns</dt><dd>${e.maxTurns} total messages</dd><dt>Human turn time</dt><dd>${e.humanTurnSeconds} seconds</dd><dt>Practice allowance</dt><dd>${e.maxPractice} per student</dd><dt>Match budget</dt><dd>${e.maxMatches} including practice</dd><dt>AI model / temperature</dt><dd>${g(e.model)} / ${e.temperature}</dd></dl></details><details><summary>What the session controls do</summary><p class="small">Open registration lets students join. Open activity enables practice and play. Start round schedules the selected treatment using the latest submitted strategies. Pause temporarily stops activity; Resume continues it. Close cancels unfinished matches and ends play. Release debrief reveals counterpart types. CSV downloads outcome rows; full session downloads prompts, transcripts and settings.</p></details></section>`}function Al(){const{session:t,member:e}=p,s=O||(e==null?void 0:e.draft)||{buyer:"",seller:""};return`${fr(t.config)}${t.status!=="active"?`<p class="callout">${t.status==="lobby"?"You are in. Your instructor will open the activity shortly.":t.status==="paused"?"Your instructor has paused the activity.":t.status==="debrief"?"The session is in debrief. Review your outcomes and counterparts below.":"This session is closed."}</p>`:""}<section class="card"><div class="section-heading"><div><p class="eyebrow">YOUR AGENTS</p><h2>A playbook for each side</h2></div>${e!=null&&e.final?Me("submitted"):'<span class="small">Not yet submitted</span>'}</div><p>Specify an opening offer, when to make concessions, and when to accept or walk away. “Get a good price” leaves more to chance than a clear strategy. Do not include personal details.</p><form id="prompts-form">${p.playerView?`<div class="actions">${I("Fill example strategies","fill-examples","secondary",t.status!=="active"?"disabled":"")}</div><p class="small">Fills both boxes with example buyer and seller instructions for your test. You can edit them before practising.</p>`:""}<div class="form-grid"><label>Buyer instructions<textarea name="buyer" required minlength="10" maxlength="6000" placeholder="How should your buyer negotiate?" ${t.status!=="active"?"disabled":""}>${g(s.buyer)}</textarea></label><label>Seller instructions<textarea name="seller" required minlength="10" maxlength="6000" placeholder="How should your seller negotiate?" ${t.status!=="active"?"disabled":""}>${g(s.seller)}</textarea></label></div><div class="actions"><button class="secondary" name="intent" value="draft" ${t.status!=="active"?"disabled":""}>Save agent strategy</button><button class="secondary" name="intent" value="practice" ${t.status!=="active"||((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"disabled":""}>${((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"Practice limit reached":"Practise with these prompts"} (${(e==null?void 0:e.practiceCount)||0}/${t.config.maxPractice})</button><button class="primary" name="intent" value="final" ${t.status!=="active"?"disabled":""}>Submit for evaluation</button></div><p class="small">Each save keeps a version. Evaluation rounds use a frozen copy of your latest submitted prompts.</p></form><div id="student-next-step" class="student-next-step">${Ms()}</div></section>`}function Ms(){const{session:t,member:e}=p,s=O||(e==null?void 0:e.draft)||{},n=!!(e!=null&&e.final)&&(s.buyer!==e.final.buyer||s.seller!==e.final.seller),i='<div class="actions"><a href="#round-comparison">See round results and feedback ↓</a><a href="#matches">View negotiation transcripts ↓</a></div>';if(t.status!=="active")return`<h3>Next step</h3><p>${t.status==="paused"?"The activity is paused. Resume it from instructor controls to continue.":t.status==="lobby"?"Wait for the activity to open.":"This session has ended. Review your results and feedback below."}</p>${i}`;if(!(e!=null&&e.final)||n)return`<h3>Next: submit your ${n?"revised ":""}strategies</h3><p>Click <strong>Submit for evaluation</strong> above to use these instructions in the next round. Practice is optional.</p>${i}`;if(!p.playerView)return`<h3>Your strategies are submitted</h3><p>Your instructor starts the evaluation round. Results and feedback appear below as the round completes.</p>${i}`;const r=p.testControls,a=r!=null&&r.pending?"A test round is still running or needs instructor attention. Review its negotiations below before starting another.":r&&r.remainingMatches<r.roundMatches?"There is not enough remaining match budget for another round. Review your results below or create a new test session.":`Ready to compete against your ${t.simulation.students} simulated classmates. This runs a full round using your submitted strategies. You can stay in Student view.`;return`<h3>${r!=null&&r.canStart?"Next: run your test round":"Your test round"}</h3><p>${a}</p>${I("Start test round","start-player-round","primary",r!=null&&r.canStart?"":"disabled")}<p class="small">${(r==null?void 0:r.roundMatches)??""} total negotiations per round; ${t.simulation.students*2} involve your agents. Live AI uses your configured AI model.</p>${i}`}function Tl(){const{session:t,members:e,summary:s,rounds:n}=p,i={draft:[["lobby","Open registration"]],lobby:[["active","Open activity"],["closed","Close session"]],active:[["paused","Pause activity"],["closed","Close session"]],paused:[["active","Resume activity"],["closed","Close session"]],closed:[["debrief","Release debrief"]],debrief:[]},r=e.filter(a=>a.final).length;return`<section class="card"><div class="section-heading"><div><p class="eyebrow">${t.simulation?"TEST SESSION CODE":"SHARE THIS SESSION CODE"}</p><div class="session-code">${g(t.code)}</div></div><div class="actions">${i[t.status].map(([a,o])=>{var c;return I(o,"status",a==="closed"?"danger":"primary",`data-status="${a}" ${t.simulation&&t.status==="lobby"&&a==="active"&&!((c=t.simulationProgress)!=null&&c.enrol)?"disabled":""}`)}).join("")}</div></div><div class="metrics"><div><strong>${e.length}</strong><span>students joined</span></div><div><strong>${r}</strong><span>prompts submitted</span></div><div><strong>${t.matchCount}/${t.config.maxMatches}</strong><span>match budget</span></div><div><strong>${(s==null?void 0:s.completed)||0}</strong><span>completed evaluations</span></div></div></section><section class="card"><h2>Run an evaluation</h2><p>Agent rounds pair every submitted buyer with every other submitted seller (${r*(r-1)} matches per repetition). Human rounds pair students randomly, once each. An even number of students is required.</p><form id="round-form" class="inline-form"><label>Treatment<select name="mode"><option value="AA">Agent ↔ Agent</option><option value="HH">Human ↔ Human</option><option value="HA">Human buyer ↔ Agent seller</option><option value="AH">Agent buyer ↔ Human seller</option></select></label>${R("repetitions","Repetitions (agent rounds only)",1,"number",'min="1" max="5" required')}<button class="primary" ${t.status!=="active"?"disabled":""}>Start round</button></form><p class="small">Agent and hybrid rounds include only students with both prompts submitted. Human-only rounds include all enrolled students. Finish or cancel the current evaluation before starting another.</p>${n!=null&&n.length?`<details><summary>Round history (${n.length})</summary>${n.map(a=>`<p>${g(a.mode)} · ${a.matchCount} matches · ${Je(a.createdAt)} · ${a.excludedIds.length} excluded without submitted prompts</p>`).join("")}</details>`:""}</section><section class="card"><div class="section-heading"><h2>Class roster</h2><div class="actions">${I("Export CSV","export","secondary",'data-format="csv"')}${I("Export full session","export","secondary",'data-format="json"')}</div></div><div class="table-scroll"><table><thead><tr><th>Student</th><th>University ID</th><th>Submission</th><th>Practice</th></tr></thead><tbody>${e.map(a=>{var o,c,l;return`<tr><td>${I(g(((o=a.profile)==null?void 0:o.name)||a.uid),"inspect-student","text-button",`data-uid="${g(a.uid)}"`)}<small>${g((c=a.profile)==null?void 0:c.email)}</small></td><td>${g((l=a.profile)==null?void 0:l.studentId)}</td><td>${a.final?`Version ${a.final.version}`:"Awaiting prompts"}</td><td>${a.practiceCount}</td></tr>`}).join("")}</tbody></table></div></section>`}function Wt(){var h;const t=v("#matches");if(!t)return;p.inspecting&&document.querySelectorAll("#prompts-form input,#prompts-form textarea,#prompts-form button").forEach(u=>u.disabled=!0);const e=(h=document.activeElement)==null?void 0:h.closest(".action-form"),s=e&&p.matches.find(u=>u.id===e.dataset.match),n=s&&p.session.status==="active"&&s.status==="playing"&&s.transcript.length===Number(e.dataset.turn),i=new Map([...t.querySelectorAll("form")].map(u=>[u.dataset.match,Object.fromEntries(new FormData(u))])),r=new Set([...t.querySelectorAll("details[open]")].map(u=>u.dataset.id)),a=p.session.status==="active",o=[...p.roundComparisons||p.rounds||[]].sort((u,m)=>u.createdAt-m.createdAt),c=new Map(o.map((u,m)=>[u.id,{...u,number:u.number||m+1}])),l=[...p.matches].sort((u,m)=>{var y,C;return Number(u.practice)-Number(m.practice)||(((y=c.get(m.roundId))==null?void 0:y.createdAt)||0)-(((C=c.get(u.roundId))==null?void 0:C.createdAt)||0)||String(u.roundId||"").localeCompare(String(m.roundId||""))||+!u.ownRoles.includes("buyer")-+!m.ownRoles.includes("buyer")||(m.createdAt||0)-(u.createdAt||0)||u.id.localeCompare(m.id)}),d=l.length?l.map((u,m)=>{var N;const y=K=>$(K,u.config.currency||rt(u.config).currency),C=u.practice?"practice":u.roundId,f=l[m-1],M=!f||(f.practice?"practice":f.roundId)!==C?`<h3 class="match-group-heading">${u.practice?"Practice matches":`Round ${((N=c.get(u.roundId))==null?void 0:N.number)||"—"} evaluations`} · ${l.filter(K=>(K.practice?"practice":K.roundId)===C).length} negotiations</h3>`:"",V=!p.inspecting&&a&&u.status==="playing"&&u.ownRoles.includes(u.turn)&&u.ownKinds[u.turn]==="human",j=u.transcript.at(-1),he=i.get(u.id)||{};return`${M}<article class="match" id="match-${g(u.id)}"><div class="section-heading"><h3>${u.practice?"Practice":"Evaluation"} <span class="muted">${u.id.slice(-6)}</span></h3>${Me(u.status)}</div><p class="small">${u.ownRoles.length?`Your role: ${u.ownRoles.map(K=>`${K} (${u.ownKinds[K]})`).join(" + ")} · `:""}${u.transcript.length}/${u.config.maxTurns} turns${u.conditions?` · Buyer: ${u.conditions.buyer} / Seller: ${u.conditions.seller}`:""}</p>${u.outcome?`<div class="result"><strong>${u.outcome.agreed?`Agreement at ${y(u.outcome.price)}`:"No agreement"}</strong><span>Buyer surplus ${y(u.outcome.buyerSurplus)} · Seller surplus ${y(u.outcome.sellerSurplus)}</span></div>`:""}${u.error?`<p class="callout">${g(u.error)}</p>`:""}${V?`<p>Your turn as ${u.turn}. Your fallback: ${y(u.fallbacks[u.turn])}.</p>`:""}${cr(u,{money:y,sessionStatus:p.session.status,ownTurn:V,opened:r.has(u.id)})}${V?`<form class="action-form" data-match="${g(u.id)}" data-turn="${u.transcript.length}"><p class="small">Turn deadline: ${Je(u.deadline)}</p><div class="offer-fields">${R("price",`Your offer (${rt(u.config).currency==="EUR"?"€":"$"})`,he.price||"","number",'min="0" max="1000000" step="1"')}</div>${lr(he.message)}<div class="actions"><button name="intent" value="offer" class="primary">Make offer</button>${(j==null?void 0:j.type)==="offer"?`<button name="intent" value="accept" class="secondary">Accept ${y(j.price)}</button>`:""}<button name="intent" value="reject" class="danger">End without agreement</button></div></form>`:""}${p.members&&["error","playing"].includes(u.status)?`<div class="actions">${I("Retry agent turn","retry","text-button",`data-match="${u.id}"`)}${I("Cancel match","cancel","text-button",`data-match="${u.id}"`)}</div>`:""}</article>`}).join(""):'<p class="empty">Your negotiations will appear here when you practise or your instructor starts a round.</p>';if(n){const u=document.createElement("div");u.innerHTML=d;for(const m of t.querySelectorAll(".match")){if(m.contains(e))continue;const y=[...u.querySelectorAll(".match")].find(C=>C.id===m.id);y&&m.replaceWith(y)}}else t.innerHTML=d}async function Y(t=!0){if(t&&Mi(null),ee="home",A=null,O=null,T=await w("/me"),z&&T.profile&&z.ts>(T.profile.simulationImportedAt||0)&&String(z.profile.email||"").toLowerCase()===String(E.currentUser.email).toLowerCase()&&(await ps(T.profile),T=await w("/me")),We()){const[e,s,n]=await Promise.all([w("/sessions"),w("/task-settings/negotiation-v1"),w("/ai-providers")]);Ns=n.providers||De,Re=s.config,$n(e)}else $n(T.sessions)}function Cl(){const t=[...p.rounds||[]].sort((e,s)=>e.createdAt-s.createdAt||e.id.localeCompare(s.id));return'<section class="card"><h2>Scores by round</h2><p>Scores out of 100. Click a student to review their screen, strategies, feedback and interactions. A dash means they did not participate; Pending means their round is unfinished. Exports use participant IDs from the full-session export.</p>'+I("Export round scores","export","secondary",'data-format="scores"')+'<div class="table-scroll"><table><thead><tr><th>Student</th><th>Participant ID</th>'+t.map((e,s)=>"<th>Round "+(s+1)+"</th>").join("")+"</tr></thead><tbody>"+p.members.map(e=>{var s;return"<tr><td>"+I(g(((s=e.profile)==null?void 0:s.name)||e.pseudonym),"inspect-student","text-button",'data-uid="'+g(e.uid)+'"')+"</td><td>"+g(e.pseudonym)+"</td>"+t.map(n=>{var r,a;const i=(a=(r=p.studentScores)==null?void 0:r.find(o=>o.uid===e.uid))==null?void 0:a.rounds.find(o=>o.id===n.id);return"<td>"+(i?i.score==null?"Pending":i.score.toFixed(1):"—")+"</td>"}).join("")+"</tr>"}).join("")+"</tbody></table></div></section>"}function Pl(){return p.inspecting?'<section class="card"><h2>Saved strategy history</h2>'+(p.promptHistory||[]).sort((t,e)=>(t.version||0)-(e.version||0)).map(t=>"<details><summary>Version "+g(t.version??t.id)+'</summary><h3>Buyer</h3><p class="feedback-text">'+g(t.buyer)+'</p><h3>Seller</h3><p class="feedback-text">'+g(t.seller)+"</p></details>").join("")+"</section>":""}async function P(){return w(`/sessions/${A}${Oe?"?student="+encodeURIComponent(Oe):Q?"?view=student":""}`)}async function ze(t,e=!1){Oe=null,A=t,ee="session",we="sessions",Q=e,O=null,dt=null,Ne=null,p=await P(),x()}let Us=[];async function hs(){ee="students",A=null,Us=(await w("/admin/students")).students,_e('<section class="card"><h1>Students</h1><label>Search name, university ID or email<input id="student-search" type="search" placeholder="Start typing"></label><p class="small">Select a student to edit their registration details. Session screens and interaction histories are available through each session roster.</p><div id="student-directory-results"></div></section><div id="student-editor"></div>'),Gi()}function Gi(){var e;const t=(((e=v("#student-search"))==null?void 0:e.value)||"").trim().toLowerCase();v("#student-directory-results").innerHTML='<div class="table-scroll"><table><thead><tr><th>Name</th><th>University ID</th><th>Email</th><th></th></tr></thead><tbody>'+Us.filter(s=>[s.name,s.firstName,s.lastName,s.email,s.studentId].some(n=>String(n||"").toLowerCase().includes(t))).map(s=>"<tr><td>"+g(s.name)+"</td><td>"+g(s.studentId)+"</td><td>"+g(s.email)+"</td><td>"+I("Edit profile","edit-student-profile","secondary",'data-uid="'+g(s.uid)+'"')+"</td></tr>").join("")+"</tbody></table></div>"}async function kt(){ee="profile",T=await w("/me");const t=await w("/stats");_e(`<div class="page-heading"><div><p class="eyebrow">YOUR ACCOUNT</p><h1>Profile & progress</h1></div></div>${Fi()}${Bi()}<section class="card"><h2>Your play statistics</h2><p>Completed evaluations only. Practice matches are counted separately.</p><div class="metrics"><div><strong>${t.matches}</strong><span>evaluations completed</span></div><div><strong>${t.agreed}</strong><span>agreements</span></div><div><strong>${t.surplusByCurrency&&Object.keys(t.surplusByCurrency).length?Object.entries(t.surplusByCurrency).map(([e,s])=>$(s,e)).join(" / "):"—"}</strong><span>mean surplus per role</span></div><div><strong>${t.practice}</strong><span>practice matches</span></div></div><p class="small">${t.pending} unfinished evaluations · ${t.sessions} class sessions</p></section>`)}async function Rl(){var s,n;if(ee!=="session"||Pe||Zt||document.hidden||document.querySelector(".car-photo-dialog[open]"))return;Zt=!0;const t=A,e=Q;try{const i=await P();if(ee!=="session"||A!==t||Q!==e||Oe!==(((s=i.inspecting)==null?void 0:s.uid)||null))return;const r=i.session.status!==p.session.status,a=Di(i)!==Ni;if(!p.inspecting&&v("#prompts-form")&&(O=Object.fromEntries(new FormData(v("#prompts-form")))),p=i,r||a&&!((n=document.activeElement)!=null&&n.closest("form,.profile-menu")))x();else{Wt();const o=v("#session-spending");o&&p.members&&(o.outerHTML=Tn(p.spending))}}catch(i){Xe(i)}finally{Zt=!1}}async function zi(){await Jo(E.currentUser,{url:location.origin+location.pathname}),_="Verification email sent. Check your inbox and spam folder."}async function ps(t){const e=z&&String(z.profile.email||"").toLowerCase()===String(E.currentUser.email).toLowerCase(),s={firstName:t.firstName,lastName:t.lastName,studentId:t.studentId,...e?{simulationProfile:z.profile}:{}};await w("/profile",s,"PUT")}document.addEventListener("submit",async t=>{var r,a;if(t.preventDefault(),Pe)return;const e=t.target,s=Object.fromEntries(new FormData(e)),n=(r=t.submitter)==null?void 0:r.value;if(Pe=!0,_="",p!=null&&p.inspecting&&ee==="session")return;const i=[...e.querySelectorAll("button")];i.forEach(o=>o.disabled=!0);try{if(e.matches(".ai-key-form"))try{await w("/admin/ai-providers/"+e.dataset.provider+"/key",{apiKey:s.apiKey},"PUT");const o=Ns.find(l=>l.id===e.dataset.provider);o&&(o.keyConfigured=!0,o.statusUnavailable=!1);const c=e.closest(".ai-connection");c.querySelector("[data-key-status]").outerHTML=Rn({id:e.dataset.provider,keyConfigured:!0}),(a=c.querySelector(".ai-status-help"))==null||a.remove(),c.classList.add("has-saved-key"),e.querySelector("label").textContent="Replace "+Ke(e.dataset.provider).name+" API key",_="API key saved securely. Test the connection to check model access.",v("#notice").textContent=_}finally{e.reset(),delete s.apiKey}else if(e.id==="admin-student-form")await w("/admin/students/"+encodeURIComponent(e.dataset.uid),s,"PUT"),_="Student profile updated.",await hs();else if(e.id==="auth-form")xt==="register"?(_t=s,await Ko(E,s.email,s.password),await zi(),await ps(s),_t=null,await Y()):await Yo(E,s.email,s.password);else if(e.id==="profile-form")await ps(s),s.email!==E.currentUser.email?(await Xo(E.currentUser,s.email,{url:location.origin+location.pathname}),_="Profile saved. Verify the link sent to your new email to finish the email change."):_="Profile saved.",await kt();else if(e.id==="join-form"){const o=await w("/join",{code:s.code});await ze(o.id)}else if(e.id==="negotiation-settings"){const o=Object.fromEntries(["buyerValue","sellerCost","maxTurns","humanTurnSeconds","maxMatches","maxPractice","temperature"].map(l=>[l,Number(s[l]??Re[l])]));o.provider=s.provider,o.model=s.model,o.autoFeedback=!!s.autoFeedback,o.feedbackTone=s.feedbackTone,Re=(await w("/task-settings/negotiation-v1",o,"PUT")).config,_="Negotiation settings saved. New sessions will use these values.",Ls()}else if(e.id==="create-session"){const o={...Re},c=s.testSession?{students:Number(s.simulatedStudents),engine:s.simulationEngine,playAsStudent:!!s.playAsStudent}:void 0,l=await w("/sessions",{title:s.title,code:s.code,moduleCode:s.moduleCode,taskId:s.taskId,config:o,...c?{simulation:c}:{}});await ze(l.id)}else if(e.id==="prompts-form")O={buyer:s.buyer,seller:s.seller},await w(`/sessions/${A}/prompts`,{...O,final:n==="final"}),n==="practice"&&await w(`/sessions/${A}/practice`,{requestId:crypto.randomUUID()}),_=n==="final"?"Prompts submitted for evaluation.":n==="practice"?"Practice started. Watch the transcript below.":"Agent strategy saved.",p=await P(),x();else if(e.id==="feedback-settings")await w(`/sessions/${A}/feedback-settings`,{autoFeedback:!!s.autoFeedback,feedbackTone:s.feedbackTone},"PUT"),_="Automatic feedback settings saved.",p=await P(),x();else if(e.id==="round-form")await w(`/sessions/${A}/rounds`,{requestId:crypto.randomUUID(),mode:s.mode,repetitions:Number(s.repetitions)}),p=await P(),x();else if(e.matches(".action-form")){const o=p.matches.find(c=>c.id===e.dataset.match);if(n==="offer"&&s.price==="")throw new Error("Enter a price for your offer.");await w(`/sessions/${A}/matches/${o.id}/action`,{expectedTurn:Number(e.dataset.turn),action:{type:n,price:n==="offer"?Number(s.price):n==="accept"?o.transcript.at(-1).price:null,message:s.message||""}}),e.reset(),p=await P(),Wt()}}catch(o){_t=null,Xe(o),e.id==="auth-form"&&E.currentUser&&await Y()}finally{Pe=!1,i.forEach(o=>{o.isConnected&&(o.disabled=!1)})}});document.addEventListener("input",t=>{if(t.target.closest("#cost-planner,#negotiation-settings")&&Ut(),t.target.closest("#prompts-form")){O=Object.fromEntries(new FormData(v("#prompts-form")));const e=v("#student-next-step");e&&(e.innerHTML=Ms())}});document.addEventListener("change",t=>{if(t.target.id==="setting-provider"&&On(t.target.form,t.target.value),t.target.id==="setting-model"&&gs(t.target.form),t.target.closest("#cost-planner,#negotiation-settings")&&Ut(),t.target.id==="compare-before"||t.target.id==="compare-after"){Ne={before:v("#compare-before").value,after:v("#compare-after").value},v("#prompts-form")&&(O=Object.fromEntries(new FormData(v("#prompts-form"))));const e=v("#round-comparison");e.outerHTML=Ln(p.roundComparisons,Ne,{esc:g,date:Je,feedbackContent:Mt})}if(t.target.id==="review-student"&&(dt=t.target.value,x()),t.target.id==="test-session"&&(v("#simulation-options").hidden=!t.target.checked),t.target.id==="play-as-student"){const e=v("select[name=simulationEngine]");e.querySelector("option[value=scripted]").disabled=t.target.checked,t.target.checked&&(e.value="live")}});document.addEventListener("click",async t=>{var s,n,i,r,a,o,c,l;const e=t.target.closest("[data-action],[data-open]");if(e&&(t.preventDefault(),!Pe)){Pe=!0;try{const d=e.dataset.action;if(d==="inspect-directory-session"){await ze(e.dataset.session),Oe=e.dataset.uid,p=await P(),x();return}if(d==="student-directory"){await hs();return}if(d==="edit-student-profile"){const h=Us.find(m=>m.uid===e.dataset.uid);v("#student-editor").innerHTML='<section class="card"><h2>Edit student profile</h2><form id="admin-student-form" data-uid="'+g(h.uid)+'">'+R("firstName","First name",h.firstName,"text",'required maxlength="80"')+R("lastName","Last name",h.lastName,"text",'required maxlength="80"')+R("studentId","University ID",h.studentId,"text",'required minlength="2" maxlength="40"')+R("email","Email",h.email,"email","required")+'<p class="small">Changing email changes the sign-in email and requires verification again.</p><button class="primary">Save profile</button></form>'+I("Delete profile","delete-student-profile","danger",'data-uid="'+g(h.uid)+'"')+'<p class="small">Deletes registration details only. Sign-in account, session records, strategies and results remain. The student can register their details again.</p></section>';const u=await w("/admin/students/"+encodeURIComponent(h.uid)+"/sessions");v("#student-editor").insertAdjacentHTML("beforeend",'<section class="card"><h2>Student sessions</h2>'+u.sessions.map(m=>I(g(m.title||m.sessionId),"inspect-directory-session","secondary",'data-session="'+g(m.sessionId)+'" data-uid="'+g(h.uid)+'"')).join("")+(u.sessions.length?"":"<p>No joined sessions.</p>")+"</section>"),v("#student-editor").scrollIntoView({behavior:"smooth"});return}if(d==="delete-student-profile"){if(!confirm("Delete this student’s registration profile? Their sign-in account and all historical session records will remain."))return;await w("/admin/students/"+encodeURIComponent(e.dataset.uid),null,"DELETE"),_="Student profile deleted. Historical session records retained.",await hs();return}if(d==="inspect-student"||d==="end-inspection"){Oe=d==="inspect-student"?e.dataset.uid:null,Q=!1,O=null,Ne=null,p=await P(),x();return}if(e.dataset.open){await ze(e.dataset.open);return}if(d==="start-player-round"){if(!p.playerView||!((s=p.testControls)!=null&&s.canStart))return;const h=Object.fromEntries(new FormData(v("#prompts-form"))),u=(n=p.member)==null?void 0:n.final;if(!u||h.buyer!==u.buyer||h.seller!==u.seller)throw new Error("Submit your revised strategies before starting the round.");await w(`/sessions/${A}/rounds`,{requestId:crypto.randomUUID(),mode:"AA",repetitions:1}),Ne=null,_="Test round started. Your results and personalised feedback update below.",p=await P(),x(),(i=v("#round-comparison"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})}if(d==="fill-examples"){const h=v("#prompts-form");if(!h||!p.playerView||p.session.status!=="active")return;const u=h.elements.buyer,m=h.elements.seller;if([["buyer",u],["seller",m]].some(([f,S])=>S.value.trim()&&S.value!==Ks[f])&&!confirm("Replace the instructions in both boxes with the examples? Saved versions will remain available."))return;O={...Ks},u.value=O.buyer,m.value=O.seller,_="Example strategies filled in. Review or edit them, then click Practise with these prompts.",v("#notice").className="",v("#notice").textContent=_;const C=v("#student-next-step");C&&(C.innerHTML=Ms()),u.focus()}if(d==="retry-feedback"&&(await w(`/sessions/${A}/feedback/${e.dataset.uid}/retry`,{}),p=await P(),x()),(d==="student-view"||d==="instructor-view")&&(v("#prompts-form")&&(O=Object.fromEntries(new FormData(v("#prompts-form")))),Q=d==="student-view",p=await P(),x()),d==="prepare-player-test"&&(Q=!1,p=await P(),p.session.status==="draft"&&(await w(`/sessions/${A}/status`,{status:"lobby"}),p=await P()),(r=p.session.simulationProgress)!=null&&r.enrol||(await w(`/sessions/${A}/simulation`,{action:"enrol"}),p=await P()),p.session.status==="lobby"&&(await w(`/sessions/${A}/status`,{status:"active"}),p=await P()),(a=p.session.simulationProgress)!=null&&a.submit||await w(`/sessions/${A}/simulation`,{action:"submit"}),Q=!0,p=await P(),x()),d==="simulation"&&(await w(`/sessions/${A}/simulation`,{action:e.dataset.step}),p=await P(),x()),d==="toggle-auth"&&(xt=xt==="login"?"register":"login",ds()),d==="join-session-shortcut"||d==="create-session-shortcut"){we="sessions",await Y();const h=v(d==="join-session-shortcut"?"#join-form input[name=code]":"#create-session input[name=title]"),u=h==null?void 0:h.closest(".dashboard-section");u&&(u.open=!0),h==null||h.scrollIntoView({block:"center"}),h==null||h.focus()}if(d==="home"&&(we="sessions",T?await Y():ds()),d==="admin-tab"&&(we=e.dataset.tab==="negotiations"?"negotiations":"sessions",_="",await Y()),d==="default-ai-model"&&(On(v("#negotiation-settings"),v("#setting-provider").value),Ut()),d==="test-ai-connection"){const h=e.dataset.provider,u=document.querySelector('[data-test-result="'+h+'"]');u.textContent="Testing saved key and selected model…";try{const m=await w("/admin/ai-providers/"+h+"/test",{model:v("#test-model-"+h).value});u.textContent="Connected successfully: "+m.model+"."}catch(m){throw u.textContent=m.message,m}}if(d==="reset-negotiation-settings"&&(Re={scenarioId:U.id,buyerValue:U.buyerValue,sellerCost:U.sellerCost,maxTurns:12,humanTurnSeconds:180,maxMatches:100,maxPractice:5,provider:"openai",model:Ke("openai").defaultModel,temperature:1},_="Baseline values filled in. Click Save negotiation settings to keep them.",Ls()),d==="copy-session-link"){const h=Li(e.dataset.code);h.searchParams.delete("view"),await navigator.clipboard.writeText(h.href),_="Student link copied. Share it with your class.",v("#notice").textContent=_}if(d==="session-export-menu"&&rr(e.dataset.session,e.dataset.code,{esc:g,btn:I}),d==="dashboard-close"){if(!confirm(`Close ${e.dataset.code}? Unfinished negotiations will be cancelled. Results will remain available in Past sessions.`))return;await w(`/sessions/${e.dataset.session}/status`,{status:"closed"}),_="Session closed. Its results are available in Past sessions.",await Y()}if(d==="delete-session"||d==="delete-session-group"){const h=d==="delete-session"?it.filter(m=>m.id===e.dataset.session):it.filter(m=>["closed","debrief"].includes(m.status)===(e.dataset.group==="past-sessions"));if(!h.length||!confirm(`Permanently delete ${h.length===1?h[0].code:h.length+" sessions"} and all their strategies, negotiations and results? This cannot be undone. Export any data you need first.`))return;let u=0;try{for(const m of h)await w(`/sessions/${m.id}`,null,"DELETE"),u++}catch(m){throw await Y(),new Error(`${u} of ${h.length} sessions deleted. ${m.message}`)}_=`${u} ${u===1?"session":"sessions"} deleted.`,await Y()}if(d==="test-round"){const h=it.find(m=>m.id===e.dataset.session);if(!confirm(`Open a separate test using ${e.dataset.code}’s settings? You will play alongside two simulated classmates. Practice and rounds use ${((o=h==null?void 0:h.config)==null?void 0:o.model)||"the configured AI model"} and incur normal API usage when started. Class results stay unchanged.`))return;A=(await w(`/sessions/${e.dataset.session}/test-round`,{requestId:crypto.randomUUID()})).id,ee="session",we="sessions",Oe=null,Q=!0,O=null,dt=null,Ne=null,p=await P(),_="Your separate test is ready. Write your strategies, then practise or start a test round.",x()}if(d==="dashboard-export"&&await An(e.dataset.session,e.dataset.code,e.dataset.format),d==="profile"&&await kt(),d==="logout"&&(O=null,await tc(E)),d==="google"&&await Ic(E,new X),d==="link-google"&&(await Ec(E.currentUser,new X),_="Google sign-in connected.",await kt()),d==="verify"&&(await zi(),await kt()),d==="verified"&&(await ni(E.currentUser),await E.currentUser.getIdToken(!0),_=E.currentUser.emailVerified?"Email verified.":"Email is not verified yet.",await Y()),d==="reset"){const h=((c=E.currentUser)==null?void 0:c.email)||((l=v("input[name=email]"))==null?void 0:l.value);if(!h)throw new Error("Enter your email address first.");await zo(E,h,{url:location.origin+location.pathname}),_="If an account exists, a password setup / reset link has been sent to that address.",v("#notice").textContent=_}if(d==="status"){if(e.dataset.status==="closed"&&!confirm("Close this session? Unfinished negotiations will be cancelled."))return;await w(`/sessions/${A}/status`,{status:e.dataset.status}),p=await P(),x()}(d==="retry"||d==="cancel")&&(await w(`/sessions/${A}/matches/${e.dataset.match}/${d}`,{}),p=await P(),Wt()),d==="export"&&await An(A,p.session.code,e.dataset.format)}catch(d){Xe(d)}finally{Pe=!1}}});async function An(t,e,s){const n=await w(`/sessions/${t}/export?format=${s}`,null,"GET",!0),i=URL.createObjectURL(await n.blob()),r=document.createElement("a");r.href=i,r.download=`agentlab-${e}${["scores","spending"].includes(s)?"-"+s+".csv":"."+s}`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}ec(E,async t=>{if(!_t)try{t?await Ui():(T=null,ee="home",A=null,ds())}catch(e){_e('<section class="card"><h1>Could not load your workspace</h1><p>Check the connection and try again.</p><button data-action="home">Retry</button><button data-action="logout">Sign out</button></section>'),Xe(e)}});setInterval(Rl,5e3);document.addEventListener("input",t=>{t.target.id==="student-search"&&Gi()});
