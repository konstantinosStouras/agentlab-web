(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const ss=[{id:"openai",name:"OpenAI",defaultModel:"gpt-6-luna",models:[{id:"gpt-6-luna",name:"GPT-6 Luna",tier:"Classroom default",reasoning:"none"},{id:"gpt-6.1-sol",name:"GPT-6.1 Sol",tier:"Advanced",reasoning:"low"},{id:"gpt-6-astra",name:"GPT-6 Astra",tier:"Frontier",reasoning:"low"},{id:"gpt-4.1-mini",name:"GPT-4.1 mini",tier:"Legacy"},{id:"gpt-4.1",name:"GPT-4.1",tier:"Legacy"},{id:"gpt-4.1-nano",name:"GPT-4.1 nano",tier:"Unavailable",unavailable:!0}]},{id:"anthropic",name:"Anthropic",defaultModel:"claude-haiku-5-5",models:[{id:"claude-haiku-5-5",name:"Claude Haiku 5.5",tier:"Classroom default"},{id:"claude-sonnet-5-5",name:"Claude Sonnet 5.5",tier:"Advanced"},{id:"claude-opus-5-5",name:"Claude Opus 5.5",tier:"Frontier"},{id:"claude-fable-5-2",name:"Claude Fable 5.2",tier:"Frontier"}]},{id:"google",name:"Google",defaultModel:"gemini-3.8-flash",models:[{id:"gemini-3.8-flash",name:"Gemini 3.8 Flash",tier:"Classroom default",reasoning:"low"},{id:"gemini-3.5-flash-lite",name:"Gemini 3.5 Flash-Lite",tier:"Economy",reasoning:"low"},{id:"gemini-4-argon",name:"Gemini 4 Argon",tier:"Advanced",reasoning:"low"},{id:"gemini-4-carbon",name:"Gemini 4 Carbon",tier:"Frontier",reasoning:"low"}]}],Xe=t=>ss.find(e=>e.id===t),He=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ns(t,e){return Xe(t).models.filter(s=>!s.unavailable||s.id===e).map(s=>`<option value="${He(s.id)}" ${s.id===e?"selected":""} ${s.unavailable?"disabled":""}>${He(s.name)} · ${s.tier}</option>`).join("")}function bi(t){const e=t.provider||"openai";return`<div class="setting-field"><label for="setting-provider">AI lab</label><select id="setting-provider" name="provider">${ss.map(s=>`<option value="${s.id}" ${s.id===e?"selected":""}>${s.name}</option>`).join("")}</select><p class="field-help">Uses the saved API key for this lab. Switching labs selects its classroom default.</p></div><div class="setting-field"><label for="setting-model">AI model</label><select id="setting-model" name="model" aria-describedby="help-model">${ns(e,t.model||Xe(e).defaultModel)}</select><p id="help-model" class="field-help">Classroom defaults balance cost and useful dialogue. Advanced and frontier models are optional and can cost substantially more. The same lab and model generate negotiations and feedback.</p><button type="button" class="text-button" data-action="default-ai-model">Use this lab’s classroom default</button></div>`}function vi(t,e){return`<section class="card"><h2>AI connections</h2><p>Save a separate API key for each lab, then choose the lab and model above. Keys are shared by instructors; only administrators can replace or test them.</p><div class="ai-connections">${t.map(s=>`<section class="ai-connection"><h3>${He(s.name)}</h3><p class="small" data-key-status="${s.id}">${s.statusUnavailable?"Connection status unavailable. Check server setup.":s.keyConfigured?"Key saved":"No key saved"}</p><p class="field-help">Classroom default: ${He(s.defaultModel)}.</p>${e?`<form class="ai-key-form" data-provider="${s.id}"><label for="key-${s.id}">${s.keyConfigured?"Replace":"Add"} ${He(s.name)} API key</label><input id="key-${s.id}" type="password" name="apiKey" autocomplete="new-password" minlength="10" maxlength="4096" required placeholder="Paste API key"><button class="secondary">Save key</button></form><label for="test-model-${s.id}">Model to test</label><select id="test-model-${s.id}">${ns(s.id,s.defaultModel)}</select><button type="button" class="secondary" data-action="test-ai-connection" data-provider="${s.id}">Test connection · small API charge</button><p class="field-help" role="status" data-test-result="${s.id}"></p>`:""}</section>`).join("")}</div><p class="small">Saved keys are stored securely on the server and are never shown again. Saving does not call the lab. Test connection checks key and model access with a short paid request. Model availability depends on your lab account.</p></section>`}function on(t,e){const s=t.querySelector("[name=model]");s.innerHTML=ns(e,Xe(e).defaultModel),is(t)}function is(t){const e=t.querySelector("[name=provider]").value,s=t.querySelector("[name=model]").value,n=Xe(e).models.find(a=>a.id===s),i=t.querySelector("[name=temperature]"),r=e==="openai"&&(!(n!=null&&n.reasoning)||n.reasoning==="none");i.disabled=!r,t.querySelector("#help-temperature").textContent=r?"Controls response variation. Lower values tend to be more consistent; higher values more varied. Default: 1.":"This model uses provider-controlled sampling. Temperature is not sent; reasoning is kept low to control cost and latency."}const cn="agentlab-theme",ln=matchMedia("(prefers-color-scheme: dark)");let pe;try{pe=localStorage.getItem(cn)}catch{}function rs(t){var e;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t==="dark"?"#181c1a":"#f5f6f1"),document.querySelectorAll('[data-action="toggle-theme"]').forEach(s=>{s.textContent=s.hasAttribute("data-theme-compact")?t==="dark"?"☀":"☾":t==="dark"?"☀ Light theme":"☾ Dark theme",s.setAttribute("aria-label",`Switch to ${t==="dark"?"light":"dark"} theme`),s.title=s.getAttribute("aria-label")})}rs(pe==="light"||pe==="dark"?pe:ln.matches?"dark":"light");ln.addEventListener("change",t=>{pe||rs(t.matches?"dark":"light")});function wi({compact:t=!1}={}){const e=document.documentElement.dataset.theme==="dark",s=`Switch to ${e?"light":"dark"} theme`;return`<button type="button" class="secondary theme-toggle${t?" theme-compact":""}" data-action="toggle-theme" ${t?"data-theme-compact":""} aria-label="${s}" title="${s}">${t?e?"☀":"☾":e?"☀ Light theme":"☾ Dark theme"}</button>`}document.addEventListener("click",t=>{if(t.target.closest('[data-action="toggle-theme"]')){pe=document.documentElement.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem(cn,pe)}catch{}rs(pe)}});const Ue=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ii(t,e={}){if(!t)return"";const s=t.profile||{},n=[s.firstName,s.lastName].filter(Boolean).join(" ").trim()||s.name||e.displayName||"My account",i=e.email||s.email||"",r=Array.from(n)[0].toLocaleUpperCase(),a=["admin","lecturer"].includes(t.role),o=(c,u,l="")=>`<button type="button" class="profile-link" data-action="${u}" ${l}>${c}</button>`;return`<div class="profile-menu"><button type="button" class="profile-trigger" data-profile-toggle aria-expanded="false" aria-controls="profile-panel" aria-label="Account options for ${Ue(n)}"><span class="profile-avatar" aria-hidden="true">${Ue(r)}</span><span class="profile-trigger-name">${Ue(n)}</span><span class="profile-chevron" aria-hidden="true">⌄</span></button><div id="profile-panel" class="profile-panel" hidden><div class="profile-identity"><strong>${Ue(n)}</strong>${i?`<span>${Ue(i)}</span>`:""}</div><div class="profile-links">${o("My profile & statistics","profile")}${o("My sessions","home")}${a?o("Create a session","create-session-shortcut")+o("Negotiation settings","admin-tab",'data-tab="negotiations"'):o("Join a session","join-session-shortcut")}${t.role==="admin"?o("Student directory","student-directory"):""}</div><div class="profile-signout">${o("Log out","logout")}</div></div></div>`}function as(t=!1){const e=document.querySelector("[data-profile-toggle]"),s=document.querySelector("#profile-panel");!e||!s||s.hidden||(s.hidden=!0,e.setAttribute("aria-expanded","false"),t&&e.focus())}document.addEventListener("click",t=>{const e=t.target.closest("[data-profile-toggle]");if(e){const s=document.getElementById(e.getAttribute("aria-controls"));s.hidden=!s.hidden,e.setAttribute("aria-expanded",String(!s.hidden));return}(!t.target.closest(".profile-menu")||t.target.closest(".profile-link"))&&as(!!t.target.closest(".profile-link"))});document.addEventListener("keydown",t=>{var e;if(t.key==="Escape"&&document.querySelector('[data-profile-toggle][aria-expanded="true"]')&&(t.preventDefault(),as(!0)),t.key==="ArrowDown"&&t.target.matches("[data-profile-toggle]")){t.preventDefault();const s=document.querySelector("#profile-panel");s.hidden=!1,t.target.setAttribute("aria-expanded","true"),(e=s.querySelector("button"))==null||e.focus()}});document.addEventListener("focusin",t=>{t.target.closest(".profile-menu")||as()});function _i(t,{esc:e,date:s,btn:n,badge:i}){var c,u;const r=["closed","debrief"].includes(t.status),a=t.memberCount||0,o=`data-session="${e(t.id)}" data-code="${e(t.code)}"`;return`<article class="admin-session-card" aria-label="Session ${e(t.code)}"><div class="session-card-top"><div><div class="session-card-code">${e(t.code)}</div>${i(t.status)}${t.simulation?i("test_session"):""}</div><div class="participant-count"><strong>${a} ${a===1?"participant":"participants"}</strong><span>Used-car negotiation</span><span class="session-ai">${e(((c=t.simulation)==null?void 0:c.engine)==="scripted"?"Scripted rehearsal":((u=t.config)==null?void 0:u.model)||"AI agents")}</span></div></div><h3>${e(t.title)}</h3><p class="session-metadata">${t.moduleCode?`${e(t.moduleCode)} · `:""}Created ${e(s(t.createdAt))}</p>${t.deletingAt?'<p class="small">Deletion was interrupted. Click Delete to finish removing this session.</p>':""}<div class="actions session-actions"><button type="button" class="primary" data-open="${e(t.id)}" ${t.deletingAt?"disabled":""}>Open</button>${r?"":n("Copy link","copy-session-link","secondary",`data-code="${e(t.code)}" ${t.simulation?'disabled title="Test sessions are restricted to their instructor"':""}`)}${n("↓ Export data","session-export-menu","export-button",o+(t.deletingAt?" disabled":""))}${n("🧪 Test round","test-round","secondary",o+(t.deletingAt?" disabled":""))}${r?"":n("Close session","dashboard-close","secondary",o)}${n("Delete","delete-session","danger",o)}</div></article>`}function Ei(t,e,{esc:s,btn:n}){var r;(r=document.querySelector("#session-export-dialog"))==null||r.remove();const i=document.createElement("dialog");i.id="session-export-dialog",i.className="export-dialog",i.setAttribute("aria-labelledby","export-heading"),i.innerHTML=`<h2 id="export-heading">Export ${s(e)}</h2><p>Download this session’s results or complete records.</p><div class="export-options">${[["csv","Outcomes (CSV)"],["scores","Student scores (CSV)"],["json","Full session (JSON)"]].map(([a,o])=>n(o,"dashboard-export","secondary",`data-session="${s(t)}" data-code="${s(e)}" data-format="${a}"`)).join("")}</div><form method="dialog"><button class="secondary">Close</button></form>`,document.body.append(i),i.addEventListener("close",()=>i.remove(),{once:!0}),i.showModal()}const z=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Pe(t,e){var a,o,c;const s=(t.ownRoles||[]).includes(e),n=e==="buyer"?"buying":"selling",i=((a=t.ownKinds)==null?void 0:a[e])||((o=t.conditions)==null?void 0:o[e]);if(s)return i==="agent"?"Your "+n+" agent":"You · "+(e==="buyer"?"Buyer":"Seller");const r=i==="agent"?n+" agent":e==="buyer"?"buyer":"seller";return(c=t.ownRoles)!=null&&c.length?"Other "+r:r.charAt(0).toUpperCase()+r.slice(1)}function Wt(t,e){const s=t.ownRoles||[];return e===(s.length===1?s[0]:"buyer")?"outgoing":"incoming"}function Si(t,{sessionStatus:e,ownTurn:s,now:n=Date.now()}={}){var r,a;return t.status!=="playing"?null:e==="paused"?{text:"Conversation paused. Replies will resume when the activity continues.",animated:!1}:e!=="active"?null:t.deadline&&t.deadline<=n?{text:"Turn deadline reached. Waiting for the result…",animated:!1}:s?null:{text:(((r=t.ownKinds)==null?void 0:r[t.turn])||((a=t.conditions)==null?void 0:a[t.turn]))==="agent"?`${Pe(t,t.turn)} is thinking…`:`Waiting for ${Pe(t,t.turn)} to reply…`,animated:!0}}function ki(t){const e=["buyer","seller"],s=t.ownRoles||[];return'<div class="conversation-legend" role="group" aria-label="Conversation colours">'+e.map(i=>{const r=Wt(t,i);return'<span class="legend-item"><span class="legend-swatch '+r+'" aria-hidden="true"></span><span><strong>'+z(Pe(t,i))+"</strong><small>"+(r==="outgoing"?"Blue · right":"Grey · left")+"</small></span></span>"}).join("")+"</div>"+(s.length===2?'<p class="legend-note">Both agents are yours. Blue identifies your buying agent; grey identifies your selling agent.</p>':s.length===1?'<p class="legend-note">Your side is blue on the right; the other side is grey on the left.</p>':"")}function Ti(t,{money:e,sessionStatus:s,ownTurn:n,opened:i=!1,now:r}={}){const a=Si(t,{sessionStatus:s,ownTurn:n,now:r}),o=t.transcript.map(c=>`<li class="message ${Wt(t,c.role)}"><div><strong>${z(Pe(t,c.role))} · Turn ${c.turn}</strong><span>${z(c.type)} ${c.price!=null?e(c.price):""}</span></div><p>${z(c.message)}</p></li>`).join("");return`${ki(t)}<details class="conversation" data-id="${z(t.id)}" ${i||t.status==="playing"?"open":""}><summary>Negotiation transcript (${t.transcript.length} turns)</summary><p class="small"><strong>${z(Pe(t,"buyer"))}</strong> ↔ <strong>${z(Pe(t,"seller"))}</strong>${t.practice?" · Practice: both agents use your instructions.":""}</p><ol class="transcript">${o||'<li class="conversation-empty">The negotiation has not started yet.</li>'}</ol></details><div class="reply-status" role="status" aria-live="polite" aria-atomic="true">${a?`<span class="reply-bubble ${Wt(t,t.turn)}">${a.animated?'<span class="reply-dots" aria-hidden="true"><i></i><i></i><i></i></span>':""}<span>${z(a.text)}</span></span>`:""}</div>`}function Ai(t=""){return`<label class="message-label">Message<textarea name="message" class="message-input" rows="4" maxlength="1200" placeholder="Write your message or explain your offer…">${z(t)}</textarea></label>`}const As={buyer:`You are my buying agent for the 2021 BMW X1 xDrive25e M Sport.

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

Keep each message concise, polite and focused on price.`},R={id:"bmw-x1-2021-v1",currency:"EUR",title:"2021 BMW X1 xDrive25e M Sport",mileageKm:105013,location:"Dublin",source:"https://www.cars.ie/car/42696819-2021-bmw-x1-m-sport/",buyerValue:28e3,sellerCost:24e3,equipment:["Brand new 20” alloy wheels (included in the price)","Brand new M Performance styling kit","Front gloss black kidney grilles","Front splitter","Side extensions","Rear spoiler"],specifications:[["Overview",[["Make","BMW"],["Model","X1"],["Variant","xDrive25e M Sport"],["Trim level","Sports Trim"],["Year","2021"],["Mileage","105,013 km"],["Fuel type","Petrol Plug-in Hybrid"],["Transmission","Automatic"],["Body type","SUV"],["Seats","5"],["Doors","5"],["Colour","Grey"]]],["Ownership & history",[["Current country of registration","Ireland"],["Imported","No"],["Total owners","1"],["History check","History checked"],["Warranty","6 months"]]],["Running costs",[["Road tax","€140"],["Combined fuel consumption","7.4 L/100 km"]]],["Performance",[["Engine size","1.5 L"],["Engine power","220 hp"],["Acceleration (0–100 km/h)","6.9 sec"],["Battery capacity","Not specified"],["Battery range","Not specified"]]],["Dimensions",[["External length","4.45 m"],["External width","1.82 m"],["External height","1.58 m"],["Ground clearance","18 cm"],["Boot volume","450 L"],["Boot volume (seats down)","1,470 L"],["Fuel tank capacity","36 L"]]],["Safety",[["Euro NCAP overall safety rating","5/5"]]]]},$i={id:"camry-2020-v1",currency:"USD",title:"2020 Toyota Camry LE",buyerValue:22e3,sellerCost:18e3},qe=t=>(t==null?void 0:t.scenarioId)===R.id?R:$i,$=(t,e="EUR",s=0)=>t==null?"—":new Intl.NumberFormat(e==="EUR"?"en-IE":"en-US",{style:"currency",currency:e,maximumFractionDigits:s}).format(t),dn=t=>{var e,s;return{min:((e=t==null?void 0:t.valueRange)==null?void 0:e.min)??(t==null?void 0:t.sellerCost)??R.sellerCost,max:((s=t==null?void 0:t.valueRange)==null?void 0:s.max)??(t==null?void 0:t.buyerValue)??R.buyerValue}},at=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ci(t,e="/agentlab/"){const s=dn(t),n=r=>`${e}cars/bmw-x1/${String(r+1).padStart(2,"0")}.webp`,i=(r,a=!0)=>`<img src="${n(r)}" alt="${R.title} · listing photo ${r+1}" ${a?'loading="lazy"':'fetchpriority="high"'} width="1200" height="900">`;return`<section class="car-listing" aria-labelledby="car-title">
    <div class="car-gallery" aria-label="Vehicle photographs">
      ${Array.from({length:5},(r,a)=>`<button type="button" class="car-photo ${a===0?"car-photo-main":""}" data-car-photo="${a}" aria-label="Open photo ${a+1} of 14">${i(a,a>0)}${a===4?'<span class="car-more-photos">+9 photos</span>':""}</button>`).join("")}
      <button type="button" class="car-photo-count" data-car-photo="0">▧ View all 14 photos</button>
    </div>
    <div class="car-listing-body">
      <div class="car-title-row"><div><h2 id="car-title">${R.title}</h2><p class="car-location">${R.location}</p></div></div>
      <div class="car-value-range"><span>Estimated value (</span><span class="price-help" data-price-help><button type="button" data-help-trigger aria-expanded="false" aria-describedby="kbb-help">KBB</button><span class="price-help-box" id="kbb-help" role="tooltip" hidden><strong>What does KBB mean?</strong><span>KBB stands for Kelley Blue Book, a vehicle valuation guide. In a negotiation, valuation information gives both sides a reference for judging offers; it does not set the agreed price.</span><span>This exercise uses a KBB-style range to represent the two outside options. It is an instructor-set teaching assumption, not a verified KBB valuation of this BMW.</span></span></span><span>):</span><span class="price-help range-help" data-price-help><button type="button" data-help-trigger aria-expanded="false" aria-describedby="value-range-help">${$(s.min)}–${$(s.max)}</button><span class="price-help-box" id="value-range-help" role="tooltip" hidden><strong>Where does this range come from?</strong><span><b>${$(s.min)} — seller’s outside option:</b> the amount the seller can receive by trading the car in to a dealer.</span><span><b>${$(s.max)} — buyer’s outside option:</b> the price the buyer would pay for a similar vehicle from another dealer.</span><span>The ${$(s.max-s.min)} difference is the total surplus available to divide. An agreed price between the endpoints improves on both alternatives; at an endpoint, one side earns zero surplus. These outside options are set for this exercise.</span></span></span><small>KBB-style exercise range · hover or tap for explanations</small></div>
      <div class="car-tags"><span>6 month warranty</span><span>History checked</span></div>
      <dl class="car-highlights">
        ${[["◴","105,013 km","Mileage"],["⛽","1.5 L","Petrol Plug-in Hybrid"],["⚙","Automatic","Transmission"],["▱","SUV","Body type"],["♙","1","Previous owner"],["◈","Grey","Colour"]].map(([r,a,o])=>`<div><span class="car-spec-icon" aria-hidden="true">${r}</span><div><dd>${a}</dd><dt>${o}</dt></div></div>`).join("")}
      </dl>
      <section class="car-specifications" aria-labelledby="car-specifications-title"><h3 id="car-specifications-title">Specifications</h3>
        ${R.specifications.map(([r,a],o)=>`<details ${o===0?"open":""}><summary>${at(r)}</summary><dl>${a.map(([c,u])=>`<div><dt>${at(c)}</dt><dd>${at(u)}</dd></div>`).join("")}</dl></details>`).join("")}
      </section>
      <section class="car-equipment" aria-labelledby="car-equipment-title"><h3 id="car-equipment-title">Additional equipment</h3><p><strong>Brand new 20” alloy wheels</strong>, included in the price, along with a <strong>brand new M Performance styling kit</strong> comprising:</p><ul>${R.equipment.slice(2).map(r=>`<li>${at(r)}</li>`).join("")}</ul></section>
      <p class="car-source">Teaching listing adapted from <a href="${R.source}" target="_blank" rel="noopener noreferrer">Cars.ie</a>. Vehicle facts and photographs are the shared scenario for this exercise.</p>
    </div>
    <dialog class="car-photo-dialog" aria-label="Vehicle photo gallery">
      <div class="car-dialog-toolbar"><span data-car-photo-status aria-live="polite">Photo 1 of 14</span><button type="button" data-car-close aria-label="Close photo gallery">Close ×</button></div>
      <div class="car-dialog-stage"><button type="button" data-car-step="-1" aria-label="Previous photo">‹</button><img data-car-large src="${n(0)}" alt="${R.title} · listing photo 1"><button type="button" data-car-step="1" aria-label="Next photo">›</button></div>
      <div class="car-thumbnails">${Array.from({length:14},(r,a)=>`<button type="button" data-car-thumb="${a}" aria-label="Show photo ${a+1}" aria-pressed="${a===0}">${i(a)}</button>`).join("")}</div>
    </dialog>
  </section>`}function Pi(t=document){if(t.__carGalleryReady)return;t.__carGalleryReady=!0;let e=null,s;const n=(a,o)=>{a.querySelector('[role="tooltip"]').hidden=!o,a.querySelector("[data-help-trigger]").setAttribute("aria-expanded",String(o)),o||delete a.dataset.pinned},i=()=>t.querySelectorAll("[data-price-help]").forEach(a=>n(a,!1));t.addEventListener("pointerover",a=>{const o=a.target.closest("[data-price-help]");o&&(clearTimeout(s),o.contains(a.relatedTarget)||(i(),n(o,!0)))}),t.addEventListener("pointerout",a=>{const o=a.target.closest("[data-price-help]");o&&!o.contains(a.relatedTarget)&&!o.contains(t.activeElement)&&!o.dataset.pinned&&(s=setTimeout(()=>n(o,!1),180))}),t.addEventListener("focusin",a=>{const o=a.target.closest("[data-price-help]");o&&(i(),n(o,!0))}),t.addEventListener("focusout",a=>{const o=a.target.closest("[data-price-help]");o&&!o.contains(a.relatedTarget)&&n(o,!1)});function r(a,o){const c=[...a.querySelectorAll("[data-car-thumb]")];o=(o+c.length)%c.length,a.dataset.photo=String(o);const u=c[o].querySelector("img"),l=a.querySelector("[data-car-large]");l.src=u.src,l.alt=u.alt,a.querySelector("[data-car-photo-status]").textContent=`Photo ${o+1} of ${c.length}`,c.forEach((h,d)=>h.setAttribute("aria-pressed",String(d===o)))}t.addEventListener("click",a=>{const o=a.target.closest("[data-price-help]");if(a.target.closest("[data-help-trigger]")){const h=!!o.dataset.pinned;i(),h||(o.dataset.pinned="true",n(o,!0));return}o||i();const c=a.target.closest("button");if(!c)return;const u=c.closest(".car-listing");if(!u)return;const l=u.querySelector("dialog");c.hasAttribute("data-car-photo")?(e=c,r(l,Number(c.dataset.carPhoto)),l.showModal()):c.hasAttribute("data-car-close")?(l.close(),e==null||e.focus()):c.hasAttribute("data-car-step")?r(l,Number(l.dataset.photo||0)+Number(c.dataset.carStep)):c.hasAttribute("data-car-thumb")&&r(l,Number(c.dataset.carThumb))}),t.addEventListener("keydown",a=>{a.key==="Escape"&&i();const o=a.target.closest(".car-photo-dialog[open]");o&&(a.key==="ArrowLeft"||a.key==="ArrowRight")&&(a.preventDefault(),r(o,Number(o.dataset.photo||0)+(a.key==="ArrowRight"?1:-1)))})}function Ri(t){const e=t.maxTurns,s=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
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
          ${s>0?`<li><strong>Practise and inspect.</strong> Choose “Practise with these prompts” to run your own buyer against your own seller. You may run up to <strong>${s} practice ${s===1?"match":"matches"}</strong> in this session. Read the transcript and check the offers, acceptance decisions and surplus. Practice is optional and does not count toward evaluation scores.</li><li><strong>Revise your playbooks.</strong> Improve unclear instructions using what you observed. “Save draft” saves your work; it does not submit it for evaluation.</li>`:"<li><strong>Review your playbooks.</strong> Practice is disabled for this session. Check that both strategies explain how to adapt to offers and respect the supplied fallback. “Save draft” saves your work; it does not submit it for evaluation.</li>"}
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
  </section>`}function Oi(t,e){if(qe(t)!==R)return Ri(t);const s=dn(t),n=$(s.max),i=$(s.min),r=Math.round((s.min+s.max)/2),a=$(r),o=s.max-s.min,c=h=>(100*h/o).toLocaleString("en-IE",{minimumFractionDigits:1,maximumFractionDigits:1}),u=t.maxTurns,l=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
    <p class="eyebrow">THE BRIEF</p>
    <h2 id="student-brief-title">Write the strategy. Let your agent negotiate.</h2>
    <p>Write a buyer strategy and a seller strategy for your AI agents. Negotiate one price for this BMW and its included equipment, aiming to maximise your role’s <strong>surplus</strong>. Both sides receive the same listing and KBB range; your strategies remain private.</p>
    ${Ci(t,e)}
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
        <article class="brief-example"><h4>Worked example · your round score</h4>
          <p>Your buyer earns <strong>75 and 50</strong>; your seller earns <strong>25 and 0</strong>. The last negotiation ended without agreement and stays in the average.</p>
          <p><strong>Final score = (75 + 50 + 25 + 0) ÷ 4 = 37.5/100.</strong></p>
        </article>
      </div>
      <ul><li><strong>Scores are bounded from 0 to 100.</strong> A deal worse than your fallback produces negative surplus and 0 points. Scores above 100 are capped; actual surplus remains visible.</li>
        <li><strong>Unfinished results are not zero.</strong> The final score stays pending until all your evaluations have scored outcomes. Running, errored or instructor-cancelled matches keep it pending.</li></ul>
    </section>
    <div class="brief-columns brief-divider">
      <section aria-labelledby="brief-steps"><h3 id="brief-steps">Your steps</h3>
        <ol class="brief-steps"><li><strong>Write both strategies.</strong> Specify an opening approach, concessions, and when to accept or walk away.</li>
          ${l>0?`<li><strong>Practise and inspect.</strong> “Practise with these prompts” runs your buyer against your seller. You have up to <strong>${l} practice ${l===1?"match":"matches"}</strong>. Practice is optional. Read the transcript, decisions and results.</li><li><strong>Revise and save.</strong> Improve your instructions. “Save draft” saves your work but does not submit it.</li>`:"<li><strong>Review and save.</strong> Practice is disabled for this session. Check both strategies. “Save draft” saves your work but does not submit it.</li>"}
          <li><strong>Submit both strategies.</strong> Your instructor starts evaluation rounds. In an agent tournament, your buyer meets other students’ sellers and your seller meets their buyers.</li>
          <li><strong>Review and improve.</strong> Use results, transcripts and feedback to revise, then resubmit for later rounds. Rounds already started keep their original submissions.</li></ol>
      </section>
      <section aria-labelledby="brief-rules"><h3 id="brief-rules">Rules for this session</h3>
        <ul><li><strong>Buyer starts.</strong> At most <strong>${u} alternating messages</strong>: up to ${Math.ceil(u/2)} buyer messages and ${Math.floor(u/2)} seller messages. Every offer, acceptance or decision to end uses one turn.</li>
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
  </section>`}function un(t,e,{esc:s,date:n,feedbackContent:i}){if(!(t!=null&&t.length))return'<section class="card"><h2>Compare your rounds</h2><p>Your first evaluation round will appear here. After revising and submitting your strategies, run another round to compare results and feedback.</p></section>';const r=t.find(f=>f.id===(e==null?void 0:e.before))||t[Math.max(0,t.length-2)],a=t.find(f=>f.id===(e==null?void 0:e.after))||t.at(-1),o=(f,_=a.currency||"USD")=>$(f,_,2),c=f=>f==null?"—":`${(f*100).toFixed(1)}%`,u=f=>`Round ${f.number}`,l=f=>f.feedback?i({published:f.feedback}):["queued","generating","error"].includes(f.feedbackStatus)?i({status:f.feedbackStatus}):'<p class="small">No feedback is available for this round yet. It is generated after the full round finishes when automatic feedback is enabled. Earlier rounds without feedback are not generated retrospectively.</p>',h=(f,_,W)=>{const ye=f[_].strategies,re=W==null?void 0:W[_].strategies,rt=re&&JSON.stringify(ye.map(x=>[x.kind,x.instructions]))!==JSON.stringify(re.map(x=>[x.kind,x.instructions]));return`<details class="round-strategy" data-round-strategy="${s(f.id)}-${_}"><summary>${_==="buyer"?"Buyer":"Seller"} strategy${re?` · ${rt?"revised":"unchanged"}`:""}</summary>${ye.length?ye.map(x=>x.kind==="agent"?`<p class="small">Submitted version ${s(x.version)}</p><p class="feedback-text">${s(x.instructions)}</p>`:"<p>This role was played directly, without an agent strategy.</p>").join(""):"<p>You did not play this role in this round.</p>"}</details>`},d=(f,_)=>`<article class="round-card"><div class="section-heading"><h3>${u(f)}</h3><span class="badge ${f.complete?"agreed":"playing"}">${f.complete?"Complete":"Partial results"}</span></div><p class="small">${n(f.createdAt)} · ${f.completed}/${f.total} scored negotiations${f.pending?` · ${f.pending} running`:""}${f.errors?` · ${f.errors} needing attention`:""}${f.cancelled?` · ${f.cancelled} cancelled`:""}</p><dl class="round-metrics"><dt>Final score</dt><dd>${f.score==null?"Pending":f.score.toFixed(1)+" / 100"}</dd><dt>Buyer mean surplus</dt><dd>${o(f.buyer.meanSurplus,f.currency)} <small>(${f.buyer.completed} matches)</small></dd><dt>Seller mean surplus</dt><dd>${o(f.seller.meanSurplus,f.currency)} <small>(${f.seller.completed} matches)</small></dd><dt>Agreements</dt><dd>${f.agreements}/${f.completed} · ${c(f.agreementRate)}</dd></dl>${h(f,"buyer",_)}${h(f,"seller",_)}<h3 class="round-feedback-heading">Feedback for ${u(f).toLowerCase()}</h3>${l(f)}</article>`,g=t.length>1&&r.id!==a.id,k=(f,_,W="money")=>W==="money"&&(r.currency||"USD")!==(a.currency||"USD")?"Different currencies":f==null||_==null?"—":`${_-f>0?"+":_-f<0?"−":""}${W==="money"?o(Math.abs(_-f)):Math.abs((_-f)*100).toFixed(1)+" percentage points"}`,N=r.buyer.completed===a.buyer.completed&&r.seller.completed===a.seller.completed;return`<section class="card" id="round-comparison"><p class="eyebrow">YOUR PROGRESS</p><h2>Compare your rounds</h2><p>Each round shows only your evaluations, the strategies actually used, and that round's personalised feedback. Practice is excluded.</p><p class="small"><strong>How your score is calculated:</strong> Each negotiation earns 100 × your surplus ÷ available surplus (buyer value minus seller cost), limited to 0–100. No agreement earns 0. Your final score averages all your buyer and seller evaluations, rounded to one decimal. Capturing half the available surplus in every match earns 50/100. Practice is excluded. Your final score appears once all your matches have scored results.</p>${g?`<div class="form-grid"><label>Earlier round<select id="compare-before">${t.map((f,_)=>`<option value="${s(f.id)}" ${f.id===r.id?"selected":""} ${_>=t.indexOf(a)?"disabled":""}>${u(f)}</option>`).join("")}</select></label><label>Later round<select id="compare-after">${t.map((f,_)=>`<option value="${s(f.id)}" ${f.id===a.id?"selected":""} ${_<=t.indexOf(r)?"disabled":""}>${u(f)}</option>`).join("")}</select></label></div>${r.complete&&a.complete?`<div class="round-change"><strong>Change from ${u(r)} to ${u(a)}</strong><div class="metrics"><div><strong>${k(r.buyer.meanSurplus,a.buyer.meanSurplus)}</strong><span>buyer mean surplus</span></div><div><strong>${k(r.seller.meanSurplus,a.seller.meanSurplus)}</strong><span>seller mean surplus</span></div><div><strong>${k(r.agreementRate,a.agreementRate,"rate")}</strong><span>agreement rate</span></div></div>${N?"":'<p class="small">These rounds have different numbers of scored matches per role.</p>'}</div>`:'<p class="callout">A change summary appears when all your negotiations in both rounds have scored results. Running, failed and cancelled matches are not counted as zero.</p>'}`:'<p class="callout">Your first round is below. Revise and submit your strategies, then run another round to unlock a side-by-side comparison.</p>'}<div class="round-comparison-grid ${g?"":"single"}">${d(r)}${g?d(a,r):""}</div><p class="small">Outcomes can vary with counterpart strategies, game settings and AI responses. A higher score in one round does not by itself establish that a strategy is better.</p></section>`}const Ni="/agentlab/assets/google-g-CpxN0HWb.png",Di=()=>{};var $s={};/**
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
 */const hn=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[s++]=i:i<2048?(e[s++]=i>>6|192,e[s++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[s++]=i>>18|240,e[s++]=i>>12&63|128,e[s++]=i>>6&63|128,e[s++]=i&63|128):(e[s++]=i>>12|224,e[s++]=i>>6&63|128,e[s++]=i&63|128)}return e},Li=function(t){const e=[];let s=0,n=0;for(;s<t.length;){const i=t[s++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[s++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[s++],a=t[s++],o=t[s++],c=((i&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=t[s++],a=t[s++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const r=t[i],a=i+1<t.length,o=a?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|o>>4;let d=(o&15)<<2|u>>6,g=u&63;c||(g=64,a||(d=64)),n.push(s[l],s[h],s[d],s[g])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Li(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const r=s[t.charAt(i++)],o=i<t.length?s[t.charAt(i)]:0;++i;const u=i<t.length?s[t.charAt(i)]:64;++i;const h=i<t.length?s[t.charAt(i)]:64;if(++i,r==null||o==null||u==null||h==null)throw new xi;const d=r<<2|o>>4;if(n.push(d),u!==64){const g=o<<4&240|u>>2;if(n.push(g),h!==64){const k=u<<6&192|h;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mi=function(t){const e=hn(t);return pn.encodeByteArray(e,!0)},fn=function(t){return Mi(t).replace(/\./g,"")},mn=function(t){try{return pn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ui(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bi=()=>Ui().__FIREBASE_DEFAULTS__,Fi=()=>{if(typeof process>"u"||typeof $s>"u")return;const t=$s.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mn(t[1]);return e&&JSON.parse(e)},os=()=>{try{return Di()||Bi()||Fi()||Vi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hi=t=>{var e,s;return(s=(e=os())==null?void 0:e.emulatorHosts)==null?void 0:s[t]},gn=()=>{var t;return(t=os())==null?void 0:t.config},yn=t=>{var e;return(e=os())==null?void 0:e[`_${t}`]};/**
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
 */class bn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,n)=>{s?this.reject(s):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,n))}}}/**
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
 */function L(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function ji(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qi(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ki(){const t=L();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zi(){try{return typeof indexedDB=="object"}catch{return!1}}function Yi(){return new Promise((t,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),s||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{s=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(s){e(s)}})}/**
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
 */const Ji="FirebaseError";class me extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=Ji,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}class Qe{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Xi(r,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new me(i,o,n)}}function Xi(t,e){try{let s=0,n="";for(;s<t.length;){const i=t.indexOf("{$",s);if(i===-1){n+=t.substring(s);break}const r=t.indexOf("}",i+2);if(r===-1){n+=t.substring(s);break}const a=t.substring(i+2,r),o=e[a];n+=t.substring(s,i)+(o!=null?String(o):`<${a}?>`),s=r+1}return n}catch{return t}}function Qi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function De(t,e){if(t===e)return!0;const s=Object.keys(t),n=Object.keys(e);for(const i of s){if(!n.includes(i))return!1;const r=t[i],a=e[i];if(Cs(r)&&Cs(a)){if(!De(r,a))return!1}else if(r!==a)return!1}for(const i of n)if(!s.includes(i))return!1;return!0}function Cs(t){return t!==null&&typeof t=="object"}/**
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
 */function Ze(t){const e=[];for(const[s,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Be(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,r]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Fe(t){const e=t.indexOf("?");if(!e)return"";const s=t.indexOf("#",e);return t.substring(e,s>0?s:void 0)}function Zi(t,e){const s=new er(t,e);return s.subscribe.bind(s)}class er{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,n){let i;if(e===void 0&&s===void 0&&n===void 0)throw new Error("Missing Observer.");tr(e,["next","error","complete"])?i=e:i={next:e,error:s,complete:n},i.next===void 0&&(i.next=Lt),i.error===void 0&&(i.error=Lt),i.complete===void 0&&(i.complete=Lt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tr(t,e){if(typeof t!="object"||t===null)return!1;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}function Lt(){}/**
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
 */function B(t){return t&&t._delegate?t._delegate:t}/**
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
 */function cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sr(t){return(await fetch(t,{credentials:"include"})).ok}class Le{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const we="[DEFAULT]";/**
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
 */class nr{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const n=new bn;if(this.instancesDeferred.set(s,n),this.isInitialized(s)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:s});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rr(e))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[s,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=we){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=we){return this.instances.has(e)}getOptions(e=we){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:s});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&a.resolve(i)}return i}onInit(e,s){const n=this.normalizeInstanceIdentifier(s),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,s){const n=this.onInitCallbacks.get(s);if(n)for(const i of n)try{i(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ir(e),options:s}),this.instances.set(e,n),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=we){return this.component?this.component.multipleInstances?e:we:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ir(t){return t===we?void 0:t}function rr(t){return t.instantiationMode==="EAGER"}/**
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
 */class ar{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new nr(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var E;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(E||(E={}));const or={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},cr=E.INFO,lr={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},dr=(t,e,...s)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=lr[e];if(i)console[i](`[${n}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vn{constructor(e){this.name=e,this._logLevel=cr,this._logHandler=dr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?or[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const ur=(t,e)=>e.some(s=>t instanceof s);let Ps,Rs;function hr(){return Ps||(Ps=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pr(){return Rs||(Rs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wn=new WeakMap,jt=new WeakMap,In=new WeakMap,xt=new WeakMap,ls=new WeakMap;function fr(t){const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{s(fe(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(s=>{s instanceof IDBCursor&&wn.set(s,t)}).catch(()=>{}),ls.set(e,t),e}function mr(t){if(jt.has(t))return;const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{s(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});jt.set(t,e)}let qt={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return jt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||In.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return fe(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gr(t){qt=t(qt)}function yr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call(Mt(this),e,...s);return In.set(n,e.sort?e.sort():[e]),fe(n)}:pr().includes(t)?function(...e){return t.apply(Mt(this),e),fe(wn.get(this))}:function(...e){return fe(t.apply(Mt(this),e))}}function br(t){return typeof t=="function"?yr(t):(t instanceof IDBTransaction&&mr(t),ur(t,hr())?new Proxy(t,qt):t)}function fe(t){if(t instanceof IDBRequest)return fr(t);if(xt.has(t))return xt.get(t);const e=br(t);return e!==t&&(xt.set(t,e),ls.set(e,t)),e}const Mt=t=>ls.get(t);function vr(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=fe(a);return n&&a.addEventListener("upgradeneeded",c=>{n(fe(a.result),c.oldVersion,c.newVersion,fe(a.transaction),c)}),s&&a.addEventListener("blocked",c=>s(c.oldVersion,c.newVersion,c)),o.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const wr=["get","getKey","getAll","getAllKeys","count"],Ir=["put","add","delete","clear"],Ut=new Map;function Os(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ut.get(e))return Ut.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=Ir.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(i||wr.includes(s)))return;const r=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[s](...o),i&&c.done]))[0]};return Ut.set(e,r),r}gr(t=>({...t,get:(e,s,n)=>Os(e,s)||t.get(e,s,n),has:(e,s)=>!!Os(e,s)||t.has(e,s)}));/**
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
 */class _r{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(Er(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function Er(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gt="@firebase/app",Ns="0.16.2";/**
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
 */const ee=new vn("@firebase/app"),Sr="@firebase/app-compat",kr="@firebase/analytics-compat",Tr="@firebase/analytics",Ar="@firebase/app-check-compat",$r="@firebase/app-check",Cr="@firebase/auth",Pr="@firebase/auth-compat",Rr="@firebase/database",Or="@firebase/data-connect",Nr="@firebase/database-compat",Dr="@firebase/functions",Lr="@firebase/functions-compat",xr="@firebase/installations",Mr="@firebase/installations-compat",Ur="@firebase/messaging",Br="@firebase/messaging-compat",Fr="@firebase/performance",Vr="@firebase/performance-compat",Hr="@firebase/remote-config",Wr="@firebase/remote-config-compat",jr="@firebase/storage",qr="@firebase/storage-compat",Gr="@firebase/firestore",Kr="@firebase/ai",zr="@firebase/firestore-compat",Yr="firebase",Jr="12.19.0";/**
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
 */const Kt="[DEFAULT]",Xr={[Gt]:"fire-core",[Sr]:"fire-core-compat",[Tr]:"fire-analytics",[kr]:"fire-analytics-compat",[$r]:"fire-app-check",[Ar]:"fire-app-check-compat",[Cr]:"fire-auth",[Pr]:"fire-auth-compat",[Rr]:"fire-rtdb",[Or]:"fire-data-connect",[Nr]:"fire-rtdb-compat",[Dr]:"fire-fn",[Lr]:"fire-fn-compat",[xr]:"fire-iid",[Mr]:"fire-iid-compat",[Ur]:"fire-fcm",[Br]:"fire-fcm-compat",[Fr]:"fire-perf",[Vr]:"fire-perf-compat",[Hr]:"fire-rc",[Wr]:"fire-rc-compat",[jr]:"fire-gcs",[qr]:"fire-gcs-compat",[Gr]:"fire-fst",[zr]:"fire-fst-compat",[Kr]:"fire-vertex","fire-js":"fire-js",[Yr]:"fire-js-all"};/**
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
 */const gt=new Map,Qr=new Map,zt=new Map;function Ds(t,e){try{t.container.addComponent(e)}catch(s){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function Ge(t){const e=t.name;if(zt.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;zt.set(e,t);for(const s of gt.values())Ds(s,t);for(const s of Qr.values())Ds(s,t);return!0}function _n(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}function M(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Zr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},J=new Qe("app","Firebase",Zr);/**
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
 */class ea{constructor(e,s,n){this._isDeleted=!1,this._options={...e},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}/**
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
 */const et=Jr;function En(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const n={name:Kt,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw J.create("bad-app-name",{appName:String(i)});if(s||(s=gn()),!s)throw J.create("no-options");const r=gt.get(i);if(r)if(De(s,r.options)){if(De(n,r.config))return r;throw J.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(n)})}else throw J.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(s)});const a=new ar(i);for(const c of zt.values())a.addComponent(c);const o=new ea(s,n,a);return gt.set(i,o),o}function ta(t=Kt){const e=gt.get(t);if(!e&&t===Kt&&gn())return En();if(!e)throw J.create("no-app",{appName:t});return e}function Re(t,e,s){let n=Xr[t]??t;s&&(n+=`-${s}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${n}" with version "${e}":`];i&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}Ge(new Le(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const sa="firebase-heartbeat-database",na=1,Ke="firebase-heartbeat-store";let Bt=null;function Sn(){return Bt||(Bt=vr(sa,na,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ke)}catch(s){console.warn(s)}}}}).catch(t=>{throw J.create("idb-open",{originalErrorMessage:t.message})})),Bt}async function ia(t){try{const s=(await Sn()).transaction(Ke),n=await s.objectStore(Ke).get(kn(t));return await s.done,n}catch(e){if(e instanceof me)ee.warn(e.message);else{const s=J.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ee.warn(s.message)}}}async function Ls(t,e){try{const n=(await Sn()).transaction(Ke,"readwrite");await n.objectStore(Ke).put(e,kn(t)),await n.done}catch(s){if(s instanceof me)ee.warn(s.message);else{const n=J.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ee.warn(n.message)}}}function kn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ra=1024,aa=30;class oa{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new la(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,s;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xs();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>aa){const a=da(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ee.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=xs(),{heartbeatsToSend:n,unsentEntries:i}=ca(this._heartbeatsCache.heartbeats),r=fn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=s,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(s){return ee.warn(s),""}}}function xs(){return new Date().toISOString().substring(0,10)}function ca(t,e=ra){const s=[];let n=t.slice();for(const i of t){const r=s.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),Ms(s)>e){r.dates.pop();break}}else if(s.push({agent:i.agent,dates:[i.date]}),Ms(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class la{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zi()?Yi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await ia(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ls(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ls(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ms(t){return fn(JSON.stringify({version:2,heartbeats:t})).length}function da(t){if(t.length===0)return-1;let e=0,s=t[0].date;for(let n=1;n<t.length;n++)t[n].date<s&&(s=t[n].date,e=n);return e}/**
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
 */function ua(t){Ge(new Le("platform-logger",e=>new _r(e),"PRIVATE")),Ge(new Le("heartbeat",e=>new oa(e),"PRIVATE")),Re(Gt,Ns,t),Re(Gt,Ns,"esm2020"),Re("fire-js","")}/**
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
 */ua("");var ha="firebase",pa="12.19.0";/**
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
 */Re(ha,pa,"app");function Tn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fa=Tn,An=new Qe("auth","Firebase",Tn());/**
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
 */const yt=new vn("@firebase/auth");function ct(t,...e){yt.logLevel<=E.WARN&&yt.warn(`Auth (${et}): ${t}`,...e)}function lt(t,...e){yt.logLevel<=E.ERROR&&yt.error(`Auth (${et}): ${t}`,...e)}/**
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
 */function U(t,...e){throw ds(t,...e)}function V(t,...e){return ds(t,...e)}function $t(t,e,s){const n={...fa(),[e]:s};return new Qe("auth","Firebase",n).create(e,{appName:t.name})}function Z(t){return $t(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $n(t,e,s){const n=s;if(!(e instanceof n))throw n.name!==e.constructor.name&&U(t,"argument-error"),$t(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ds(t,...e){if(typeof t!="string"){const s=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(s,...n)}return An.create(t,...e)}function y(t,e,...s){if(!t)throw ds(e,...s)}function X(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lt(e),new Error(e)}function te(t,e){t||X(e)}/**
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
 */function Yt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ma(){return Us()==="http:"||Us()==="https:"}function Us(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ga(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ma()||qi()||"connection"in navigator)?navigator.onLine:!0}function ya(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class tt{constructor(e,s){this.shortDelay=e,this.longDelay=s,te(s>e,"Short delay should be less than long delay!"),this.isMobile=Wi()||Gi()}get(){return ga()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function us(t,e){te(t.emulator,"Emulator should always be set here");const{url:s}=t.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
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
 */class Cn{static initialize(e,s,n){this.fetchImpl=e,s&&(this.headersImpl=s),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;X("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;X("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;X("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ba={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const va=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wa=new tt(3e4,6e4);function se(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ne(t,e,s,n,i={}){return Pn(t,i,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const o=Ze({...a,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...r};return ji()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&cs(t.emulatorConfig.host)&&(u.credentials="include"),Cn.fetch()(await Rn(t,t.config.apiHost,s,o),u)})}async function Pn(t,e,s){t._canInitEmulator=!1;const n={...ba,...e};try{const i=new _a(t),r=await Promise.race([s(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw ot(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ot(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ot(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ot(t,"user-disabled",a);const l=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $t(t,l,u);U(t,l)}}catch(i){if(i instanceof me)throw i;U(t,"network-request-failed",{message:String(i)})}}async function st(t,e,s,n,i={}){const r=await ne(t,e,s,n,i);return"mfaPendingCredential"in r&&U(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Rn(t,e,s,n){const i=`${e}${s}?${n}`,r=t,a=r.config.emulator?us(t.config,i):`${t.config.apiScheme}://${i}`;return va.includes(s)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function Ia(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _a{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,n)=>{this.timer=setTimeout(()=>n(V(this.auth,"network-request-failed")),wa.get())})}}function ot(t,e,s){const n={appName:t.name};s.email&&(n.email=s.email),s.phoneNumber&&(n.phoneNumber=s.phoneNumber);const i=V(t,e,n);return i.customData._tokenResponse=s,i}function Bs(t){return t!==void 0&&t.enterprise!==void 0}class Ea{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===e)return Ia(s.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sa(t,e){return ne(t,"GET","/v2/recaptchaConfig",se(t,e))}/**
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
 */async function ka(t,e){return ne(t,"POST","/v1/accounts:delete",e)}async function bt(t,e){return ne(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function We(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ta(t,e=!1){const s=B(t),n=await s.getIdToken(e),i=hs(n);y(i&&i.exp&&i.auth_time&&i.iat,s.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:n,authTime:We(Ft(i.auth_time)),issuedAtTime:We(Ft(i.iat)),expirationTime:We(Ft(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ft(t){return Number(t)*1e3}function hs(t){const[e,s,n]=t.split(".");if(e===void 0||s===void 0||n===void 0)return lt("JWT malformed, contained fewer than 3 sections"),null;try{const i=mn(s);return i?JSON.parse(i):(lt("Failed to decode base64 JWT payload"),null)}catch(i){return lt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fs(t){const e=hs(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ze(t,e,s=!1){if(s)return e;try{return await e}catch(n){throw n instanceof me&&Aa(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Aa({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $a{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jt{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=We(this.lastLoginAt),this.creationTime=We(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vt(t){var h;const e=t.auth,s=await t.getIdToken(),n=await ze(t,bt(e,{idToken:s}));y(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?Nn(i.providerUserInfo):[],a=Ca(t.providerData,r),o=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=o?c:!1,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jt(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function On(t){const e=B(t);await vt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ca(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Nn(t){return t.map(({providerId:e,...s})=>({providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
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
 */async function Pa(t,e){const s=await Pn(t,{},async()=>{const n=Ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,a=await Rn(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:n};return t.emulatorConfig&&cs(t.emulatorConfig.host)&&(c.credentials="include"),Cn.fetch()(a,c)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function Ra(t,e){return ne(t,"POST","/v2/accounts:revokeToken",se(t,e))}/**
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
 */class Oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const s="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}updateFromIdToken(e){y(e.length!==0,"internal-error");const s=Fs(e);this.updateTokensAndExpiration(e,null,s)}async getToken(e,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:n,refreshToken:i,expiresIn:r}=await Pa(e,s);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,s,n){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,s){const{refreshToken:n,accessToken:i,expirationTime:r}=s,a=new Oe;return n&&(y(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(y(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(y(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oe,this.toJSON())}_performRefresh(){return X("not implemented")}}/**
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
 */function ae(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class F{constructor({uid:e,auth:s,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new $a(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const s=await ze(this,this.stsTokenManager.getToken(this.auth,e));return y(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return Ta(this,e)}reload(){return On(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>({...s})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const s=new F({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),s&&await vt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(M(this.auth.app))return Promise.reject(Z(this.auth));const e=await this.getIdToken();return await ze(this,ka(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){const n=s.displayName??void 0,i=s.email??void 0,r=s.phoneNumber??void 0,a=s.photoURL??void 0,o=s.tenantId??void 0,c=s._redirectEventId??void 0,u=s.createdAt??void 0,l=s.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:g,providerData:k,stsTokenManager:N}=s;y(h&&N,e,"internal-error");const f=Oe.fromJSON(this.name,N);y(typeof h=="string",e,"internal-error"),ae(n,e.name),ae(i,e.name),y(typeof d=="boolean",e,"internal-error"),y(typeof g=="boolean",e,"internal-error"),ae(r,e.name),ae(a,e.name),ae(o,e.name),ae(c,e.name),ae(u,e.name),ae(l,e.name);const _=new F({uid:h,auth:e,email:i,emailVerified:d,displayName:n,isAnonymous:g,photoURL:a,phoneNumber:r,tenantId:o,stsTokenManager:f,createdAt:u,lastLoginAt:l});return k&&Array.isArray(k)&&(_.providerData=k.map(W=>({...W}))),c&&(_._redirectEventId=c),_}static async _fromIdTokenResponse(e,s,n=!1){const i=new Oe;i.updateFromServerResponse(s);const r=new F({uid:s.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await vt(r),r}static async _fromGetAccountInfoResponse(e,s,n){const i=s.users[0];y(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Nn(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),o=new Oe;o.updateFromIdToken(n);const c=new F({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Jt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Vs=new Map;function Q(t){te(t instanceof Function,"Expected a class definition");let e=Vs.get(t);return e?(te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vs.set(t,e),e)}/**
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
 */class Dn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}Dn.type="NONE";const Hs=Dn;/**
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
 */function dt(t,e,s){return`firebase:${t}:${e}:${s}`}class _e{constructor(e,s,n){this.persistence=e,this.auth=s,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=dt(this.userKey,i.apiKey,r),this.fullPersistenceKey=dt("persistence",i.apiKey,r),this.boundEventHandler=s._onStorageEvent.bind(s);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const s=await bt(this.auth,{idToken:e}).catch(()=>{});return s?F._fromGetAccountInfoResponse(this.auth,s,e):null}return F._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,s,n="authUser"){if(!s.length)return new _e(Q(Hs),e,n);const i=(await Promise.all(s.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let r=i[0]||Q(Hs);const a=dt(n,e.config.apiKey,e.name);let o=null;for(const u of s)try{const l=await u._get(a);if(l){let h;if(typeof l=="string"){const d=await bt(e,{idToken:l}).catch(()=>{});if(!d)break;h=await F._fromGetAccountInfoResponse(e,d,l)}else h=F._fromJSON(e,l);u!==r&&(o=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new _e(r,e,n):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(s.map(async u=>{if(u!==r)try{await u._remove(a)}catch{}})),new _e(r,e,n))}}/**
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
 */function Ws(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Un(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ln(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fn(e))return"Blackberry";if(Vn(e))return"Webos";if(xn(e))return"Safari";if((e.includes("chrome/")||Mn(e))&&!e.includes("edge/"))return"Chrome";if(Bn(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(s);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ln(t=L()){return/firefox\//i.test(t)}function xn(t=L()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mn(t=L()){return/crios\//i.test(t)}function Un(t=L()){return/iemobile/i.test(t)}function Bn(t=L()){return/android/i.test(t)}function Fn(t=L()){return/blackberry/i.test(t)}function Vn(t=L()){return/webos/i.test(t)}function ps(t=L()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Oa(t=L()){var e;return ps(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Na(){return Ki()&&document.documentMode===10}function Hn(t=L()){return ps(t)||Bn(t)||Vn(t)||Fn(t)||/windows phone/i.test(t)||Un(t)}/**
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
 */function Wn(t,e=[]){let s;switch(t){case"Browser":s=Ws(L());break;case"Worker":s=`${Ws(L())}-${t}`;break;default:s=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${et}/${n}`}/**
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
 */class Da{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const n=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});n.onAbort=s,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const s=[];try{for(const n of this.queue)await n(e),n.onAbort&&s.push(n.onAbort)}catch(n){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function La(t,e={}){return ne(t,"GET","/v2/passwordPolicy",se(t,e))}/**
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
 */const xa=6;class Ma{constructor(e){var n;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??xa,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(e,s){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(s.meetsMinPasswordLength=e.length>=n),i&&(s.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(s,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,s,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Ua{constructor(e,s,n,i){this.app=e,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new js(this),this.idTokenSubscription=new js(this),this.beforeStateQueue=new Da(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=An,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=Q(s)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted){try{this.persistenceManager=await _e.create(this,e)}catch(a){ct(`Failed to initialize persistence: ${a}`),this.persistenceManager=await _e.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(s)}catch(a){ct(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const s=await bt(this,{idToken:e}),n=await F._fromGetAccountInfoResponse(this,s,e);await this.directlySetCurrentUser(n)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(M(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let n=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,o=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(n=c.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){try{await vt(e)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ya()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(M(this.app))return Promise.reject(Z(this));const s=e?B(e):null;return s&&y(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return M(this.app)?Promise.reject(Z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return M(this.app)?Promise.reject(Z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Q(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await La(this),s=new Ma(e);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,s,n){return this.registerStateListener(this.authStateSubscription,e,s,n)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,n){return this.registerStateListener(this.idTokenSubscription,e,s,n)}authStateReady(){return new Promise((e,s)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},s)}})}async revokeAccessToken(e){if(this.currentUser){const s=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:s};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ra(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,s){const n=await this.getOrInitRedirectPersistenceManager(s);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&Q(e)||this._popupRedirectResolver;y(s,this,"argument-error"),this.redirectPersistenceManager=await _e.create(this,[Q(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,n;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,n,i){if(this._deleted)return()=>{};const r=typeof s=="function"?s:s.next.bind(s);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}).catch(c=>{if(!a)if(typeof s!="function"&&s.error)s.error(c);else if(n)n(c);else throw c}),typeof s=="function"){const c=e.addObserver(s,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(s);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(s){const n=(s==null?void 0:s.message)||String(s),i=$t(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw i.customData={originalError:s},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var s;if(M(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return e!=null&&e.error&&ct(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ie(t){return B(t)}class js{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zi(s=>this.observer=s)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ct={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ba(t){Ct=t}function jn(t){return Ct.loadJS(t)}function Fa(){return Ct.recaptchaEnterpriseScript}function Va(){return Ct.gapiScript}function Ha(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Wa{constructor(){this.enterprise=new ja}ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}class ja{ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}/**
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
 */const qa="recaptcha-enterprise",qn="NO_RECAPTCHA",qs="onFirebaseAuthREInstanceReady";class oe{constructor(e){this.type=qa,this.auth=ie(e)}async verify(e="verify",s=!1){async function n(r){if(!s){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,o)=>{Sa(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ea(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function i(r,a,o){const c=window.grecaptcha;Bs(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{a(u)}).catch(()=>{a(qn)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wa().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{n(this.auth).then(async o=>{if(!s&&Bs(window.grecaptcha)&&oe.scriptInjectionDeferred)await oe.scriptInjectionDeferred.promise,i(o,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fa();c.length!==0&&(c+=o+`&onload=${qs}`),oe.scriptInjectionDeferred=new bn,window[qs]=()=>{var u;(u=oe.scriptInjectionDeferred)==null||u.resolve()},jn(c).then(()=>{var u;return(u=oe.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{i(o,r,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}oe.scriptInjectionDeferred=null;async function Gs(t,e,s,n=!1,i=!1){const r=new oe(t);let a;if(i)a=qn;else try{a=await r.verify(s)}catch{a=await r.verify(s,!0)}const o={...e};if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,u=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wt(t,e,s,n,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Gs(t,e,s,s==="getOobCode");return n(t,a)}else return n(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gs(t,e,s,s==="getOobCode");return n(t,o)}else return Promise.reject(a)})}/**
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
 */function Ga(t,e){const s=_n(t,"auth");if(s.isInitialized()){const i=s.getImmediate(),r=s.getOptions();if(De(r,e??{}))return i;U(i,"already-initialized")}return s.initialize({options:e})}function Ka(t,e){const s=(e==null?void 0:e.persistence)||[],n=(Array.isArray(s)?s:[s]).map(Q);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function za(t,e,s){const n=ie(t);y(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=Gn(e),{host:a,port:o}=Ya(e),c=o===null?"":`:${o}`,u={url:`${r}//${a}${c}/`},l=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){y(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),y(De(u,n.config.emulator)&&De(l,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=l,n.settings.appVerificationDisabledForTesting=!0,cs(a)?sr(`${r}//${a}${c}`):Ja()}function Gn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ya(t){const e=Gn(t),s=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!s)return{host:"",port:null};const n=s[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:Ks(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:Ks(a)}}}function Ks(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ja(){function t(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fs{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return X("not implemented")}_getIdTokenResponse(e){return X("not implemented")}_linkToIdToken(e,s){return X("not implemented")}_getReauthenticationResolver(e){return X("not implemented")}}async function Xa(t,e){return ne(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Qa(t,e){return st(t,"POST","/v1/accounts:signInWithPassword",se(t,e))}async function ms(t,e){return ne(t,"POST","/v1/accounts:sendOobCode",se(t,e))}async function Za(t,e){return ms(t,e)}async function eo(t,e){return ms(t,e)}async function to(t,e){return ms(t,e)}/**
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
 */async function so(t,e){return st(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}async function no(t,e){return st(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}/**
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
 */class Ye extends fs{constructor(e,s,n,i=null){super("password",n),this._email=e,this._password=s,this._tenantId=i}static _fromEmailAndPassword(e,s){return new Ye(e,s,"password")}static _fromEmailAndCode(e,s,n=null){return new Ye(e,s,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wt(e,s,"signInWithPassword",Qa);case"emailLink":return so(e,{email:this._email,oobCode:this._password});default:U(e,"internal-error")}}async _linkToIdToken(e,s){switch(this.signInMethod){case"password":const n={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wt(e,n,"signUpPassword",Xa);case"emailLink":return no(e,{idToken:s,email:this._email,oobCode:this._password});default:U(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ne(t,e){return st(t,"POST","/v1/accounts:signInWithIdp",se(t,e))}/**
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
 */const io="http://localhost";class Ae extends fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):U("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...r}=s;if(!n||!i)return null;const a=new Ae(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const s=this.buildRequest();return Ne(e,s)}_linkToIdToken(e,s){const n=this.buildRequest();return n.idToken=s,Ne(e,n)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,Ne(e,s)}buildRequest(){const e={requestUri:io,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=Ze(s)}return e}}/**
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
 */function ro(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ao(t){const e=Be(Fe(t)).link,s=e?Be(Fe(e)).deep_link_id:null,n=Be(Fe(t)).deep_link_id;return(n?Be(Fe(n)).link:null)||n||s||e||t}class gs{constructor(e){const s=Be(Fe(e)),n=s.apiKey??null,i=s.oobCode??null,r=ro(s.mode??null);y(n&&i&&r,"argument-error"),this.apiKey=n,this.operation=r,this.code=i,this.continueUrl=s.continueUrl??null,this.languageCode=s.lang??null,this.tenantId=s.tenantId??null}static parseLink(e){const s=ao(e);try{return new gs(s)}catch{return null}}}/**
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
 */class xe{constructor(){this.providerId=xe.PROVIDER_ID}static credential(e,s){return Ye._fromEmailAndPassword(e,s)}static credentialWithLink(e,s){const n=gs.parseLink(s);return y(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}xe.PROVIDER_ID="password";xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nt extends Pt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ce extends nt{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";ce.PROVIDER_ID="facebook.com";/**
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
 */class q extends nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return Ae._fromParams({providerId:q.PROVIDER_ID,signInMethod:q.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return q.credentialFromTaggedObject(e)}static credentialFromError(e){return q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:n}=e;if(!s&&!n)return null;try{return q.credential(s,n)}catch{return null}}}q.GOOGLE_SIGN_IN_METHOD="google.com";q.PROVIDER_ID="google.com";/**
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
 */class le extends nt{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.GITHUB_SIGN_IN_METHOD="github.com";le.PROVIDER_ID="github.com";/**
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
 */class de extends nt{constructor(){super("twitter.com")}static credential(e,s){return Ae._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:n}=e;if(!s||!n)return null;try{return de.credential(s,n)}catch{return null}}}de.TWITTER_SIGN_IN_METHOD="twitter.com";de.PROVIDER_ID="twitter.com";/**
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
 */async function oo(t,e){return st(t,"POST","/v1/accounts:signUp",se(t,e))}/**
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
 */class $e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,n,i=!1){const r=await F._fromIdTokenResponse(e,n,i),a=zs(n);return new $e({user:r,providerId:a,_tokenResponse:n,operationType:s})}static async _forOperation(e,s,n){await e._updateTokensIfNecessary(n,!0);const i=zs(n);return new $e({user:e,providerId:i,_tokenResponse:n,operationType:s})}}function zs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class It extends me{constructor(e,s,n,i){super(s.code,s.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,s,n,i){return new It(e,s,n,i)}}function Kn(t,e,s,n){return(e==="reauthenticate"?s._getReauthenticationResolver(t):s._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?It._fromErrorAndOperation(t,r,e,n):r})}async function co(t,e,s=!1){const n=await ze(t,e._linkToIdToken(t.auth,await t.getIdToken()),s);return $e._forOperation(t,"link",n)}/**
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
 */async function lo(t,e,s=!1){const{auth:n}=t;if(M(n.app))return Promise.reject(Z(n));const i="reauthenticate";try{const r=await ze(t,Kn(n,i,e,t),s);y(r.idToken,n,"internal-error");const a=hs(r.idToken);y(a,n,"internal-error");const{sub:o}=a;return y(t.uid===o,n,"user-mismatch"),$e._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&U(n,"user-mismatch"),r}}/**
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
 */async function zn(t,e,s=!1){if(M(t.app))return Promise.reject(Z(t));const n="signIn",i=await Kn(t,n,e),r=await $e._fromIdTokenResponse(t,n,i);return s||await t._updateCurrentUser(r.user),r}async function uo(t,e){return zn(ie(t),e)}/**
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
 */function ys(t,e,s){var n;y(((n=s.url)==null?void 0:n.length)>0,t,"invalid-continue-uri"),y(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),y(typeof s.linkDomain>"u"||s.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=s.url,e.dynamicLinkDomain=s.dynamicLinkDomain,e.linkDomain=s.linkDomain,e.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(y(s.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=s.iOS.bundleId),s.android&&(y(s.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=s.android.installApp,e.androidMinimumVersionCode=s.android.minimumVersion,e.androidPackageName=s.android.packageName)}/**
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
 */async function Yn(t){const e=ie(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ho(t,e,s){const n=ie(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};s&&ys(n,i,s),await wt(n,i,"getOobCode",eo)}async function po(t,e,s){if(M(t.app))return Promise.reject(Z(t));const n=ie(t),a=await wt(n,{returnSecureToken:!0,email:e,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oo).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Yn(t),c}),o=await $e._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function fo(t,e,s){return M(t.app)?Promise.reject(Z(t)):uo(B(t),xe.credential(e,s)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Yn(t),n})}async function mo(t,e){const s=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ys(s.auth,i,e);const{email:r}=await Za(s.auth,i);r!==t.email&&await t.reload()}async function go(t,e,s){const n=B(t),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};s&&ys(n.auth,r,s);const{email:a}=await to(n.auth,r);a!==t.email&&await t.reload()}function yo(t,e,s,n){return B(t).onIdTokenChanged(e,s,n)}function bo(t,e,s){return B(t).beforeAuthStateChanged(e,s)}function vo(t,e,s,n){return B(t).onAuthStateChanged(e,s,n)}function wo(t){return B(t).signOut()}const _t="__sak";/**
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
 */class Jn{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(_t,"1"),this.storage.removeItem(_t),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Io=1e3,_o=10;class Xn extends Jn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const n=this.storage.getItem(s),i=this.localCache[s];n!==i&&e(s,i,n)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;s?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!s&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);Na()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_o):i()}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:n}),!0)})},Io)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xn.type="LOCAL";const Eo=Xn;/**
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
 */class Qn extends Jn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}Qn.type="SESSION";const Zn=Qn;/**
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
 */function So(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
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
 */class Rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(i=>i.isListeningto(e));if(s)return s;const n=new Rt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:n,eventType:i,data:r}=s.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;s.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(a).map(async u=>u(s.origin,r)),c=await So(o);s.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rt.receivers=[];/**
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
 */function bs(t="",e=10){let s="";for(let n=0;n<e;n++)s+=Math.floor(Math.random()*10);return t+s}/**
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
 */class ko{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const u=bs("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:s},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function G(){return window}function To(t){G().location.href=t}/**
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
 */function ei(){return typeof G().WorkerGlobalScope<"u"&&typeof G().importScripts=="function"}async function Ao(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $o(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Co(){return ei()?self:null}/**
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
 */const ti="firebaseLocalStorageDb",Po=1,Et="firebaseLocalStorage",si="fbase_key";class it{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Ot(t,e){return t.transaction([Et],e?"readwrite":"readonly").objectStore(Et)}function Ro(){const t=indexedDB.deleteDatabase(ti);return new it(t).toPromise()}function ni(){const t=indexedDB.open(ti,Po);return new Promise((e,s)=>{t.addEventListener("error",()=>{s(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Et,{keyPath:si})}catch(i){s(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Et)?e(n):(n.close(),await Ro(),e(await ni()))})})}async function Ys(t,e,s){const n=Ot(t,!0).put({[si]:e,value:s});return new it(n).toPromise()}async function Oo(t,e){const s=Ot(t,!1).get(e),n=await new it(s).toPromise();return n===void 0?null:n.value}function Js(t,e){const s=Ot(t,!0).delete(e);return new it(s).toPromise()}const No=800,Do=3;class ii{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ni(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let s=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(s++>Do)throw n;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rt._getInstance(Co()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var s,n;if(this.activeServiceWorker=await Ao(),!this.activeServiceWorker)return;this.sender=new ko(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(s=e[0])!=null&&s.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$o()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ys(e,_t,"1"),await Js(e,_t)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ys(n,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(n=>Oo(n,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Js(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const r=Ot(i,!1).getAll();return new it(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),s.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),s.push(i));return s}catch(e){return this.isClosing||ct(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),No)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}ii.type="LOCAL";const Lo=ii;new tt(3e4,6e4);/**
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
 */function vs(t,e){return e?Q(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ws extends fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,s){return Ne(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function xo(t){return zn(t.auth,new ws(t),t.bypassAuthState)}function Mo(t){const{auth:e,user:s}=t;return y(s,e,"internal-error"),lo(s,new ws(t),t.bypassAuthState)}async function Uo(t){const{auth:e,user:s}=t;return y(s,e,"internal-error"),co(s,new ws(t),t.bypassAuthState)}/**
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
 */class ri{constructor(e,s,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:n,postBody:i,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:s,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xo;case"linkViaPopup":case"linkViaRedirect":return Uo;case"reauthViaPopup":case"reauthViaRedirect":return Mo;default:U(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bo=new tt(2e3,1e4);async function Fo(t,e,s){if(M(t.app))return Promise.reject(V(t,"operation-not-supported-in-this-environment"));const n=ie(t);$n(t,e,Pt);const i=vs(n,s);return new ue(n,"signInViaPopup",e,i).executeNotNull()}async function Vo(t,e,s){const n=B(t);$n(n.auth,e,Pt);const i=vs(n.auth,s);return new ue(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class ue extends ri{constructor(e,s,n,i,r){super(e,s,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ue.currentPopupAction&&ue.currentPopupAction.cancel(),ue.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(V(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(V(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ue.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,n;if((n=(s=this.authWindow)==null?void 0:s.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(V(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bo.get())};e()}}ue.currentPopupAction=null;/**
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
 */const Ho="pendingRedirect",ut=new Map;class Wo extends ri{constructor(e,s,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,n),this.eventId=null}async execute(){let e=ut.get(this.auth._key());if(!e){try{const n=await jo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(s){e=()=>Promise.reject(s)}ut.set(this.auth._key(),e)}return this.bypassAuthState||ut.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jo(t,e){const s=Ko(e),n=Go(t);if(!await n._isAvailable())return!1;const i=await n._get(s)==="true";return await n._remove(s),i}function qo(t,e){ut.set(t._key(),e)}function Go(t){return Q(t._redirectPersistence)}function Ko(t){return dt(Ho,t.config.apiKey,t.name)}async function zo(t,e,s=!1){if(M(t.app))return Promise.reject(Z(t));const n=ie(t),i=vs(n,e),a=await new Wo(n,i,s).execute();return a&&!s&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Yo=600*1e3;class Jo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(s=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xo(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var n;if(e.error&&!ai(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";s.onError(V(this.auth,i))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const n=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yo&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xs(e))}saveEventToCache(e){this.cachedEventUids.add(Xs(e)),this.lastProcessedEventTime=Date.now()}}function Xs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ai({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ai(t);default:return!1}}/**
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
 */async function Qo(t,e={}){return ne(t,"GET","/v1/projects",e)}/**
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
 */const Zo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ec=/^https?/;async function tc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qo(t);for(const s of e)try{if(sc(s))return}catch{}U(t,"unauthorized-domain")}function sc(t){const e=Yt(),{protocol:s,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?s==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&a.hostname===n}if(!ec.test(s))return!1;if(Zo.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const nc=new tt(3e4,6e4);function Qs(){const t=G().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let s=0;s<t.CP.length;s++)t.CP[s]=null}}function ic(t){return new Promise((e,s)=>{var i,r,a;function n(){Qs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qs(),s(V(t,"network-request-failed"))},timeout:nc.get()})}if((r=(i=G().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=G().gapi)!=null&&a.load)n();else{const o=Ha("iframefcb");return G()[o]=()=>{gapi.load?n():s(V(t,"network-request-failed"))},jn(`${Va()}?onload=${o}`).catch(c=>s(c))}}).catch(e=>{throw ht=null,e})}let ht=null;function rc(t){return ht=ht||ic(t),ht}/**
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
 */const ac=new tt(5e3,15e3),oc="__/auth/iframe",cc="emulator/auth/iframe",lc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uc(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const s=e.emulator?us(e,cc):`https://${t.config.authDomain}/${oc}`,n={apiKey:e.apiKey,appName:t.name,v:et},i=dc.get(t.config.apiHost);i&&(n.eid=i);const r=t._getFrameworks();return r.length&&(n.fw=r.join(",")),`${s}?${Ze(n).slice(1)}`}async function hc(t){const e=await rc(t),s=G().gapi;return y(s,t,"internal-error"),e.open({where:document.body,url:uc(t),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lc,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const a=V(t,"network-request-failed"),o=G().setTimeout(()=>{r(a)},ac.get());function c(){G().clearTimeout(o),i(n)}n.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const pc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fc=500,mc=600,gc="_blank",yc="http://localhost";class Zs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bc(t,e,s,n=fc,i=mc){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c={...pc,width:n.toString(),height:i.toString(),top:r,left:a},u=L().toLowerCase();s&&(o=Mn(u)?gc:s),Ln(u)&&(e=e||yc,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,k])=>`${d}${g}=${k},`,"");if(Oa(u)&&o!=="_self")return vc(e||"",o),new Zs(null);const h=window.open(e||"",o,l);y(h,t,"popup-blocked");try{h.focus()}catch{}return new Zs(h)}function vc(t,e){const s=document.createElement("a");s.href=t,s.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(n)}/**
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
 */const wc="__/auth/handler",Ic="emulator/auth/handler",_c=encodeURIComponent("fac");async function en(t,e,s,n,i,r){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:n,v:et,eventId:i};if(e instanceof Pt){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Qi(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries({}))a[l]=h}if(e instanceof nt){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];const c=await t._getAppCheckToken(),u=c?`#${_c}=${encodeURIComponent(c)}`:"";return`${Ec(t)}?${Ze(o).slice(1)}${u}`}function Ec({config:t}){return t.emulator?us(t,Ic):`https://${t.authDomain}/${wc}`}/**
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
 */const Vt="webStorageSupport";class Sc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zn,this._completeRedirectFn=zo,this._overrideRedirectResult=qo}async _openPopup(e,s,n,i){var a;te((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await en(e,s,n,Yt(),i);return bc(e,r,bs())}async _openRedirect(e,s,n,i){await this._originValidation(e);const r=await en(e,s,n,Yt(),i);return To(r),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:i,promise:r}=this.eventManagers[s];return i?Promise.resolve(i):(te(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[s]={promise:n},n.catch(()=>{delete this.eventManagers[s]}),n}async initAndGetManager(e){const s=await hc(e),n=new Jo(e);return s.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=s,n}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(Vt,{type:Vt},i=>{var a;const r=(a=i==null?void 0:i[0])==null?void 0:a[Vt];r!==void 0&&s(!!r),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=tc(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return Hn()||xn()||ps()}}const kc=Sc;var tn="@firebase/auth",sn="1.13.6";/**
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
 */class Tc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);s&&(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ac(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $c(t){Ge(new Le("auth",(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;y(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wn(t)},u=new Ua(n,i,r,c);return Ka(u,s),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,n)=>{e.getProvider("auth-internal").initialize()})),Ge(new Le("auth-internal",e=>{const s=ie(e.getProvider("auth").getImmediate());return(n=>new Tc(n))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(tn,sn,Ac(t)),Re(tn,sn,"esm2020")}/**
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
 */const Cc=300,Pc=yn("authIdTokenMaxAge")||Cc;let nn=null;const Rc=t=>async e=>{const s=e&&await e.getIdTokenResult(),n=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(n&&n>Pc)return;const i=s==null?void 0:s.token;nn!==i&&(nn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Oc(t=ta()){const e=_n(t,"auth");if(e.isInitialized())return e.getImmediate();const s=Ga(t,{popupRedirectResolver:kc,persistence:[Lo,Eo,Zn]}),n=yn("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=Rc(r.toString());bo(s,a,()=>a(s.currentUser)),yo(s,o=>a(o))}}const i=Hi("auth");return i&&za(s,`http://${i}`),s}function Nc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ba({loadJS(t){return new Promise((e,s)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const r=V("internal-error");r.customData=i,s(r)},n.type="text/javascript",n.charset="UTF-8",Nc().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$c("Browser");const Dc={VITE_API_BASE:"https://europe-west1-agentlab-6a2ed.cloudfunctions.net/api/api",VITE_FIREBASE_API_KEY:"AIzaSyA85iJNW1BJjqKnzta9qvtTwum9OIBH2U0",VITE_FIREBASE_APP_ID:"1:926148159880:web:765298762db0a3fb9f323d",VITE_FIREBASE_AUTH_DOMAIN:"agentlab-6a2ed.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"agentlab-6a2ed"},Ve=Dc,S=Oc(En({apiKey:Ve.VITE_FIREBASE_API_KEY,authDomain:Ve.VITE_FIREBASE_AUTH_DOMAIN,projectId:Ve.VITE_FIREBASE_PROJECT_ID,appId:Ve.VITE_FIREBASE_APP_ID}));async function v(t,e,s=e?"POST":"GET",n=!1){var a;const i=await((a=S.currentUser)==null?void 0:a.getIdToken()),r=await fetch(Ve.VITE_API_BASE+t,{method:s,headers:{Authorization:`Bearer ${i}`,...e?{"Content-Type":"application/json"}:{}},...e?{body:JSON.stringify(e)}:{},signal:AbortSignal.timeout(12e4)});if(!r.ok){let o;try{o=(await r.json()).error}catch{}throw new Error(o||`Request failed (${r.status}).`)}return n?r:r.json()}function Lc(){try{const t=JSON.parse(localStorage.getItem("simp:handoff:v1")||"null");return(t==null?void 0:t.v)!==1||t.sim!=="agentlab"||typeof t.ts!="number"||Math.abs(Date.now()-t.ts)>1800*1e3||typeof t.profile!="object"||!t.profile||JSON.stringify(t.profile).length>16e3?null:t}catch{return null}}function xc(t){const e=(t==null?void 0:t.profile)||{},s=String(e.name||"").trim().split(/\s+/);return{firstName:e.firstName||s[0]||"",lastName:e.lastName||s.slice(1).join(" "),studentId:e.studentId||e.sid||"",email:e.email||""}}Pi();const b=t=>document.querySelector(t),m=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Xt=(t,e)=>$(t,e||(K==="session"&&p?qe(p.session.config).currency:"EUR")),Me=t=>new Date(t).toLocaleString(),H=Lc(),Ie=xc(H);let A=null,p=null,K="home",St="login",T=null,Ee=!1,Ht=!1,I="",pt=null,O=null,Is=[],he="sessions",Se=null,Y=!1,ke=null,oi="",ft=[],Je=null,Te=null;const ci=t=>{var e,s,n,i;return JSON.stringify([t.session.config,t.session.status,t.session.matchCount,t.session.simulationProgress,(e=t.members)==null?void 0:e.length,(s=t.members)==null?void 0:s.filter(r=>r.final).length,(n=t.summary)==null?void 0:n.completed,(i=t.personalStats)==null?void 0:i.completed,t.feedback,t.roundComparisons,t.testControls,t.studentScores,t.promptHistory])},Mc=new URLSearchParams(location.search).get("session")||(H==null?void 0:H.session)||"",je=()=>A&&A.role!=="student",P=(t,e,s="",n="text",i="")=>`<label>${e}<input name="${t}" type="${n}" value="${m(s)}" ${i}></label>`,w=(t,e,s="secondary",n="")=>`<button type="button" class="${s}" data-action="${e}" ${n}>${t}</button>`,Ce=t=>`<span class="badge ${m(t)}">${m(t.replaceAll("_"," "))}</span>`;function ge(t){b("#app").innerHTML=`<header><a href="#" class="brand" data-action="home"><span class="brand-icon">a<span>l</span></span>Agent<span>Lab</span></a><nav class="account-nav" aria-label="Account navigation">${wi({compact:!0})}${Ii(A,(S==null?void 0:S.currentUser)||{})}</nav></header><div id="notice" role="status" aria-live="polite">${m(I)}</div><main>${t}</main><footer>AgentLab · A learning lab for humans and AI agents <span>Konstantinos Stouras</span></footer>`}function Nt(t){I=t.message||String(t);const e=b("#notice");e&&(e.textContent=I,e.classList.add("error"),e.scrollIntoView({block:"nearest"}))}function Qt(){const t=St==="register";ge(`<section class="entry"><div class="intro"><p class="eyebrow">BUILD · DELEGATE · DISCOVER</p><h1>Your strategy.<br>Your agent.<br><em>What happens next?</em></h1><p class="lead">Explore how the instructions you write shape the decisions your agents make. Start with a negotiation. Learn from every turn.</p><div class="orbit"><div class="agent-node buyer">Buyer<br><strong>↗</strong></div><div class="orbit-line">⇄</div><div class="agent-node seller">Seller<br><strong>↙</strong></div></div></div><section class="card auth-card"><p class="eyebrow">WELCOME TO THE LAB</p><h2>${t?"Create your account":"Pick up where you left off"}</h2><p>${t?"Register once. Join your class with a session code.":"Sign in, then enter the session code from your instructor."}</p><form id="auth-form">${t?`<div class="form-grid">${P("firstName","First name",Ie.firstName,"text",'required autocomplete="given-name" maxlength="80"')}${P("lastName","Last name",Ie.lastName,"text",'required autocomplete="family-name" maxlength="80"')}</div>${P("studentId","University ID",Ie.studentId,"text",'required minlength="2" maxlength="40"')}`:""}${P("email","Email",Ie.email,"email",'required autocomplete="email"')}${P("password","Password","","password",`required minlength="8" autocomplete="${t?"new-password":"current-password"}"`)}<button class="primary full">${t?"Create account":"Sign in"}</button></form><div class="divider">or</div><button type="button" class="google-signin full" data-action="google"><img src="${Ni}" alt="" width="20" height="20"><span>Continue with Google</span></button><p class="small">${t?"Already registered?":"New to AgentLab?"} ${w(t?"Sign in":"Create an account","toggle-auth","text-button")}</p>${t?"":w("Forgot your password?","reset","text-button")}<p class="fine">Your profile, prompts and play records are visible to your instructor. Agent instructions and negotiation dialogue are sent to the AI provider. Keep personal information out of prompts.</p></section></section>`)}function li(){var e,s;const t=A.profile||{...Ie,firstName:((e=S.currentUser.displayName)==null?void 0:e.split(" ")[0])||Ie.firstName,lastName:((s=S.currentUser.displayName)==null?void 0:s.split(" ").slice(1).join(" "))||Ie.lastName};return`<section class="card"><h2>${A.profile?"Your details":"Complete your profile"}</h2><form id="profile-form"><div class="form-grid">${P("firstName","First name",t.firstName,"text",'required maxlength="80"')}${P("lastName","Last name",t.lastName,"text",'required maxlength="80"')}${P("studentId","University ID",t.studentId,"text",'required minlength="2" maxlength="40"')}${P("email","Email",S.currentUser.email,"email","required")}</div>${H?'<p class="callout">Registration data from the Simulation Platform will be saved with your profile when you save these details.</p>':""}<button class="primary">Save details</button></form>${A.profile?`<div class="actions">${w("Send password setup / reset email","reset","text-button")}${S.currentUser.providerData.some(n=>n.providerId==="google.com")?"":w("Connect Google sign-in","link-google","text-button")}</div>`:""}${t.simulationProfile?`<details><summary>Additional Simulation Platform data</summary><dl>${Object.entries(t.simulationProfile).map(([n,i])=>`<dt>${m(n)}</dt><dd>${m(typeof i=="object"?JSON.stringify(i):i)}</dd>`).join("")}</dl></details>`:""}</section>`}function di(){return S.currentUser.emailVerified?"":`<section class="callout"><strong>Verify your email to join a class.</strong><p>Open the verification link in your inbox, then refresh your verification status here.</p>${w("Send verification email","verify")}${w("I have verified my email","verified")}</section>`}function rn(t=[]){var e,s;if(je()){Uc(t);return}ge(`<div class="page-heading"><div><p class="eyebrow">YOUR WORKSPACE</p><h1>Hello, ${m(((e=A.profile)==null?void 0:e.firstName)||((s=S.currentUser.displayName)==null?void 0:s.split(" ")[0])||"there")}.</h1><p>Practise your strategies. Improve your decisions.</p></div>${Ce(A.role)}</div>${di()}${!A.profile&&!je()?li():""}<div class="dashboard-grid"><section class="card accent"><p class="eyebrow">JOIN YOUR CLASS</p><h2>Enter the lab.</h2><form id="join-form">${P("code","Session code",Mc,"text",'required minlength="4" maxlength="24" placeholder="e.g. MBA-2027"')}<button class="primary">Join session →</button></form></section><section class="card"><p class="eyebrow">YOUR SESSIONS</p><div class="session-list">${t.length?t.map(n=>`<button class="session-link" data-open="${m(n.id)}"><span><strong>${m(n.title)}</strong><small>${m(n.moduleCode||"Negotiation lab")}</small></span>${n.status?Ce(n.status):"<span>→</span>"}</button>`).join(""):'<p class="empty">Your classes will appear here after you join.</p>'}</div></section></div>${je()?fi():""}`)}const ui={mobile:{},desktop:{}},_s=matchMedia("(max-width: 760px)");function Zt(t,e,s,n="",i=""){return`<details class="card dashboard-section ${n}" id="${t}" open aria-labelledby="${t}-heading"><summary class="dashboard-section-heading"><h2 id="${t}-heading">${e}</h2>${i?`<span class="session-count">${i}</span>`:""}<span class="section-toggle-sign" aria-hidden="true"></span></summary><div class="dashboard-section-content">${s}</div></details>`}function hi(){const t=_s.matches?"mobile":"desktop";document.querySelectorAll(".dashboard-section").forEach(e=>{e.open=ui[t][e.id]??e.id==="active-sessions"})}_s.addEventListener("change",hi);document.addEventListener("toggle",t=>{var s;const e=t.target;!((s=e.matches)!=null&&s.call(e,".dashboard-section"))||!e.isConnected||(ui[_s.matches?"mobile":"desktop"][e.id]=e.open)},!0);document.addEventListener("click",t=>{const e=t.target.closest('.admin-options a[href^="#"]');if(!e)return;const s=document.getElementById(e.getAttribute("href").slice(1));s!=null&&s.matches(".dashboard-section")&&(s.open=!0)});function Uc(t){if(ft=t,he==="negotiations"){Ss();return}const e=[...t].sort((a,o)=>(o.createdAt||0)-(a.createdAt||0)),s=e.filter(a=>["closed","debrief"].includes(a.status)),n=e.filter(a=>!["closed","debrief"].includes(a.status)),i=(a,o,c,u,l)=>Zt(a,o,`<p class="section-description">${u}</p>${c.length?w(`Delete all ${a==="active-sessions"?"active":"past"} sessions`,"delete-session-group","danger bulk-delete",`data-group="${a}"`):""}<div class="admin-session-list">${c.length?c.map(Bc).join(""):`<p class="empty">${l}</p>`}</div>`,"session-section",`${c.length} ${c.length===1?"session":"sessions"}`),r=Zt("dashboard-options","Options",`<nav aria-label="Dashboard sections"><a href="#active-sessions">Active sessions <span>${n.length}</span></a><a href="#past-sessions">Past sessions <span>${s.length}</span></a><a href="#create-session-panel">Create a session <span>＋</span></a>${w("Refresh sessions","home","sidebar-button")}${w("My profile & stats","profile","sidebar-button")}</nav><p class="small">Refresh updates the session list. Open a session to manage its activity.</p>`,"admin-options");ge(`${pi()}${Es()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions"><div class="admin-layout"><div class="admin-session-column">${i("active-sessions","Active sessions",n,"Open a session to manage registration, run negotiations and monitor your students. Draft, lobby and paused sessions also appear here.","No active sessions yet. Create a session to get started.")}${i("past-sessions","Past sessions",s,"Review closed sessions, release debriefs and download session results.","Closed sessions will appear here.")}</div><aside class="admin-sidebar" aria-label="Instructor options">${fi()}${r}</aside></div></div>`),hi()}function pi(){return`<div class="page-heading"><div><p class="eyebrow">INSTRUCTOR WORKSPACE</p><h1>AgentLab admin</h1><p>Manage your sessions and set up each learning task.</p></div>${Ce(A.role)}</div>`}function Es(){return`<div class="admin-tabs" role="tablist" aria-label="Admin area">${[["sessions","Sessions"],["negotiations","Negotiations"]].map(([t,e])=>w(e,"admin-tab",he===t?"admin-tab selected":"admin-tab",`id="tab-${t}" role="tab" aria-selected="${he===t}" aria-controls="admin-panel" data-tab="${t}"`)).join("")}</div>`}function ve(t,e,s,n,i){return`<div class="setting-field"><label for="setting-${t}">${e}</label><input id="setting-${t}" name="${t}" type="number" value="${m(s)}" aria-describedby="help-${t}" ${i} required><p id="help-${t}" class="field-help">${n}</p></div>`}function Ss(){const t=Se;ge(`${pi()}${Es()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-negotiations"><section class="card task-overview"><p class="eyebrow">TASK 01 / NEGOTIATIONS</p><h2>Used-car negotiation</h2><p>Students write buyer and seller strategies, practise, then send their agents to negotiate. The scenario is a ${R.title} with 105,013 km in Dublin. Both buyer and seller use a shared KBB-style value range based on the outside options below. The listing and included equipment are shared with both sides; the KBB-style range explains both sides’ outside options.</p><p class="small">The app uses structured offers and acceptance. Buyer moves first; no agreement earns zero for both sides.</p></section><form id="negotiation-settings"><section class="card"><h2>Game rules</h2><p>These are your defaults for new sessions. Saving here does not change existing sessions.</p><div class="form-grid">${ve("buyerValue","Buyer fallback (€)",t.buyerValue,"What the buyer would pay elsewhere. Buyer surplus = this value minus the agreed price. Upper endpoint of the shared KBB-style exercise range.",'min="1" max="1000000"')}${ve("sellerCost","Seller fallback (€)",t.sellerCost,"What the seller could receive elsewhere. Seller surplus = agreed price minus this value. Lower endpoint of the shared KBB-style exercise range. Must be below the buyer fallback.",'min="0" max="999999"')}${ve("maxTurns","Maximum turns",t.maxTurns,"Total messages across both sides, not turns per student. If no offer is accepted by the limit, the match ends without a deal. Default: 12.",'min="2" max="24"')}${ve("humanTurnSeconds","Seconds per human turn",t.humanTurnSeconds,"Time available to enter a human offer or response. A missed deadline ends that match without a deal. Applies to human and hybrid rounds.",'min="30" max="1800"')}</div></section><section class="card"><h2>Practice and session size</h2><div class="form-grid">${ve("maxPractice","Practice matches per student",t.maxPractice,"Each practice runs the student’s own buyer against their own seller. Set 0 to skip practice. Practice does not count toward evaluation scores.",'min="0" max="20"')}${ve("maxMatches","Total match budget",t.maxMatches,"Maximum negotiations across the entire session, including practice and every evaluation round. This is a match count, not a monetary spending cap.",'min="1" max="400"')}</div><p class="callout">One agent tournament with n submitted students uses n × (n − 1) matches. For 15 students with two practices each, allow at least 240 matches. The current maximum is 400 per session.</p></section><section class="card"><h2>AI settings</h2><div class="form-grid">${bi(t)}${ve("temperature","Temperature",t.temperature,"Controls response variation. Lower values tend to be more consistent; higher values more varied. Default: 1.",'min="0" max="2" step="0.1"')}</div>${mi(t)}<div class="actions"><button class="primary">Save negotiation settings</button>${w("Restore baseline values","reset-negotiation-settings","secondary")}${w("Go to Sessions","admin-tab","secondary",'data-tab="sessions"')}</div><p class="small">Save stores these defaults for your instructor account. Restore fills in the original game and classroom defaults; click Save to keep them. Go to Sessions lets you create a class using the last saved settings.</p></section></form>${vi(Is,A.role==="admin")}<section class="card"><h2>Running a round</h2><p>Open a session from Sessions, open registration, then open the activity. When students have submitted their strategies, choose a treatment and start a round.</p><dl class="treatment-guide"><dt>Agent ↔ Agent</dt><dd>Every submitted buyer meets every other submitted seller. No self-matches. Repetitions repeats the complete tournament.</dd><dt>Human ↔ Human</dt><dd>Random pairs negotiate directly. Requires an even number of enrolled students.</dd><dt>Hybrid treatments</dt><dd>One side is human, the other an agent. Uses students with submitted strategies and requires an even eligible group.</dd><dt>Pause / Resume</dt><dd>Temporarily stop play, then continue it.</dd><dt>Close / Release debrief</dt><dd>Close ends the session and cancels unfinished matches. Release debrief reveals counterpart types to students.</dd></dl></section></div>`),is(b("#negotiation-settings"))}function Bc(t){return _i(t,{esc:m,date:Me,btn:w,badge:Ce})}function fi(){const t=Se;return Zt("create-session-panel","Create a session",`<form id="create-session">${P("title","Session title","Negotiation lab","text",'required maxlength="120"')}${P("code","Session code","","text",'required pattern="[A-Za-z0-9-]{4,24}" placeholder="MBA-2027"')}<p class="field-help">A unique code your students use to join. Use 4–24 letters, numbers or hyphens.</p>${P("moduleCode","Module","BMGT41040")}<label>Task<select name="taskId"><option value="negotiation-v1">Used-car negotiation</option></select></label>${Fc()}<p class="small">New sessions use your saved Negotiations settings: ${t.maxTurns} turns, ${t.maxPractice} practices per student and ${t.maxMatches} total matches.</p>${w("Edit negotiation settings","admin-tab","text-button",'data-tab="negotiations"')}<button class="primary full">Create session</button><p class="small">Creates a draft. Open registration inside the session to begin.</p></form>`)}function Fc(){return`<div class="test-session-options"><label class="checkbox-label"><input type="checkbox" name="testSession" id="test-session">Test session with simulated students</label><p class="field-help">Rehearse the workflow without inviting students or creating student accounts.</p><div id="simulation-options" hidden><label class="checkbox-label"><input type="checkbox" name="playAsStudent" id="play-as-student">Play as a student with my own strategies</label><p class="field-help">Adds you alongside the simulated students. You write, practise and submit your own buyer and seller strategies. Uses live AI.</p>${P("simulatedStudents","Simulated students",3,"number",'min="2" max="6"')}<label>Test engine<select name="simulationEngine"><option value="scripted">Scripted rehearsal</option><option value="live">Live AI test</option></select></label><p class="field-help">Scripted: predictable sample offers, no AI API calls. Live AI: strategies use your selected model and incur normal API charges. Both use Firebase resources. With you and three simulated students, one tournament has 12 matches; six involve your agents.</p></div></div>`}function Vc(){var e;const t=p.session;return(e=t.simulation)!=null&&e.playAsStudent&&t.ownerId===A.uid?`<section class="card player-view-bar"><div><strong>${p.playerView?"Test round":"Test controls"}</strong><p class="small">${p.playerView?"Write your own strategies and see only your negotiations. Test results stay separate from your classroom statistics.":"Continue your test round to write strategies and participate with your own agents."}</p></div>${w(p.playerView?"Back to instructor controls":"Continue test round",p.playerView?"instructor-view":"student-view","secondary",p.member?"":"disabled")}</section>`:""}const kt=(t,e)=>t!=null&&t.byCurrency?Object.entries(t.byCurrency).map(([s,n])=>$(n[e+"Mean"],s)).join(" / ")||"—":Xt(t==null?void 0:t[e+"Mean"],t==null?void 0:t.currency);function Hc(){const t=p.personalStats;return`<section class="card"><h2>Your test results</h2><p>Evaluation matches involving your agents only. Practice is excluded. Your buyer and seller each face every simulated classmate once per tournament. These totals combine all rounds; compare individual rounds below.</p><div class="metrics"><div><strong>${t.completed}</strong><span>completed evaluations</span></div><div><strong>${t.agreements}</strong><span>agreements</span></div><div><strong>${kt(t,"buyer")}</strong><span>mean buyer surplus · ${t.buyerCount} matches</span></div><div><strong>${kt(t,"seller")}</strong><span>mean seller surplus · ${t.sellerCount} matches</span></div></div></section>`}function mi(t){return`<label class="checkbox-label"><input type="checkbox" name="autoFeedback" ${t.autoFeedback!==!1?"checked":""}>Automatic personalised feedback</label><label>Feedback tone<select name="feedbackTone">${[["supportive","Supportive and encouraging"],["balanced","Balanced and constructive"],["challenging","Challenging and direct"]].map(([e,s])=>`<option value="${e}" ${(t.feedbackTone||"supportive")===e?"selected":""}>${s}</option>`).join("")}</select></label><p class="small">After a round finishes, the selected AI lab reviews each student's strategies, results and selected transcripts. Feedback appears automatically. Uses the session's AI model and adds API token usage; simulated classmates and scripted tests do not generate feedback. Tone changes apply to future feedback.</p>`}function Tt(t){var i;const e=t==null?void 0:t.published,s=e==null?void 0:e.content,n=((i=t==null?void 0:t.pending)==null?void 0:i.status)||(t==null?void 0:t.status);return`${n==="queued"||n==="generating"?'<p class="callout">Your personalised feedback is being prepared.</p>':n==="error"?'<p class="callout">Feedback could not be generated. Your instructor can retry it.</p>':""}${s?`<p class="feedback-text">${m(s.overview)}</p><h3>What worked well</h3><ul>${s.strengths.map(r=>`<li>${m(r)}</li>`).join("")}</ul><h3>What to improve</h3><ul>${s.improvements.map(r=>`<li>${m(r)}</li>`).join("")}</ul><h3>Try this next</h3><p class="feedback-text">${m(s.nextStrategy)}</p><p class="small">${e.reviewedMatches} scored negotiations · ${e.sampledMatches} transcript examples reviewed · ${Me(e.releasedAt)}. Use this feedback to reflect and improve.</p>`:n?"":'<p class="small">Personalised feedback appears here after a completed evaluation round when automatic feedback is enabled.</p>'}`}function Wc(){var a,o,c,u;if(!p.members)return`<section class="card"><p class="eyebrow">REFLECT & IMPROVE</p><h2>Your feedback</h2>${Tt(p.feedback)}</section>`;const t=p.session.config,e=`<form id="feedback-settings" class="card"><h2>Automatic student feedback</h2>${mi(t)}<button class="primary">Save feedback settings</button></form>`;if(!p.members.length)return e;const s=p.members.find(l=>l.uid===Je)||p.members[0];Je=s.uid;const n=(a=p.feedback)==null?void 0:a.find(l=>l.uid===s.uid),i=(o=p.summary)==null?void 0:o.participants.find(l=>l.uid===s.uid),r=p.matches.filter(l=>{var h,d;return((h=l.buyer)==null?void 0:h.uid)===s.uid||((d=l.seller)==null?void 0:d.uid)===s.uid});return e+`<section class="card"><p class="eyebrow">REVIEW & COACH</p><h2>Student progress & feedback</h2><label>Student<select id="review-student">${p.members.map(l=>{var h,d;return`<option value="${m(l.uid)}" ${l.uid===s.uid?"selected":""}>${m(((h=l.profile)==null?void 0:h.name)||l.pseudonym)} · ${m((d=l.profile)==null?void 0:d.studentId)}</option>`}).join("")}</select></label><div class="metrics"><div><strong>${(i==null?void 0:i.buyerCount)||0}</strong><span>buyer evaluations</span></div><div><strong>${kt(i,"buyer")}</strong><span>mean buyer surplus</span></div><div><strong>${(i==null?void 0:i.sellerCount)||0}</strong><span>seller evaluations</span></div><div><strong>${kt(i,"seller")}</strong><span>mean seller surplus</span></div></div><details><summary>Latest submitted strategies</summary>${s.final?`<h3>Buyer</h3><p class="feedback-text">${m(s.final.buyer)}</p><h3>Seller</h3><p class="feedback-text">${m(s.final.seller)}</p>`:"<p>No strategies submitted yet.</p>"}</details><details><summary>Review negotiations (${r.length})</summary>${r.map(l=>`<p><a href="#match-${m(l.id)}">${l.practice?"Practice":"Evaluation"} · ${l.buyer.uid===s.uid?"Buyer":"Seller"} · ${m(l.status)} · ${l.id.slice(-6)}</a></p>`).join("")}</details><h3>Personalised feedback</h3>${s.simulated?'<p class="small">Simulated classmates do not receive AI feedback.</p>':Tt(n)}${((c=n==null?void 0:n.pending)==null?void 0:c.status)==="error"||((u=n==null?void 0:n.pending)==null?void 0:u.status)==="generating"&&n.pending.leaseUntil<Date.now()?w("Retry automatic feedback","retry-feedback","secondary",`data-uid="${m(s.uid)}"`):""}</section>`}function jc(){var r;const{session:t}=p,e=(r=p.members)==null?void 0:r.filter(a=>a.simulated);if(!t.simulation)return"";const s=t.simulationProgress||{},n=t.status==="active",i=a=>a?"":"disabled";return`<section class="card rehearsal-panel"><p class="eyebrow">INSTRUCTOR TEST SESSION</p><h2>Rehearse with ${t.simulation.students} simulated students${t.simulation.playAsStudent?" and your own agents":""}</h2><p>${t.simulation.engine==="scripted"?"Scripted rehearsal: deterministic sample offers, no AI API calls. These results do not measure AI or student performance.":"Live AI test: sample strategies run through "+m(t.config.model)+". Normal AI API charges apply. These are simulated students, not real class results."} Real students cannot join this session.</p>${t.simulation.playAsStudent&&t.ownerId===A.uid&&["draft","lobby","active"].includes(t.status)?w("Prepare test and play","prepare-player-test","primary")+'<p class="small">Sets up your simulated classmates and opens Student view. Write your own strategies there; these are never filled in for you. No AI runs until you request practice or start a round.</p>':""}<ol class="rehearsal-steps"><li><strong>Open registration</strong> using the session control below, then add your simulated roster.</li><li>${w(s.enrol?"Simulated students added":"Add simulated students","simulation","secondary",`data-step="enrol" ${i(t.status==="lobby"&&!s.enrol)}`)} <span>Creates sample names and university IDs inside this session only.</span></li><li><strong>Open activity</strong>, then submit the sample strategies.</li><li>${w(s.submit?"Strategies submitted":"Submit simulated strategies","simulation","secondary",`data-step="submit" ${i(n&&s.enrol&&!s.submit)}`)} <span>Gives each student a different buyer/seller strategy.</span></li><li>${w(s.practice?"Practice started":"Run one practice per student","simulation","secondary",`data-step="practice" ${i(n&&s.submit&&!s.practice&&t.config.maxPractice>0)}`)} <span>${t.config.maxPractice?"Optional: runs each student’s buyer against their own seller.":"Practice is disabled in these session settings."}</span></li><li>Select <strong>Agent ↔ Agent</strong> below and click <strong>Start round</strong>. Wait for all evaluations, then <strong>Close session → Release debrief</strong> and export the test results.</li></ol>${e!=null&&e.some(a=>a.final)?`<details><summary>Inspect simulated student strategies</summary>${e.map(a=>{var o,c,u;return`<h3>${m((o=a.profile)==null?void 0:o.name)} · ${m(a.style)}</h3><p class="small"><strong>Buyer:</strong> ${m((c=a.final)==null?void 0:c.buyer)}<br><strong>Seller:</strong> ${m((u=a.final)==null?void 0:u.seller)}</p>`}).join("")}</details>`:""}</section>`}function D(){var i;const t=new Set([...document.querySelectorAll("#round-comparison details[open], #matches details[open]")].map(r=>r.dataset.roundStrategy||r.dataset.id));oi=ci(p);const{session:e,member:s}=p,n=je()&&!!p.members;ge(`<div class="page-heading"><div><p class="eyebrow">${m(e.moduleCode)} / ACTIVITY 01</p><h1>${m(e.title)}</h1><p>Used-car negotiation · ${m(qe(e.config).title)} ${e.simulation?"· TEST SESSION":""}</p></div>${Ce(e.status)}</div>${n?Es()+'<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions">':""}${A.aiReady===!1&&((i=e.simulation)==null?void 0:i.engine)!=="scripted"?'<p class="callout">AI negotiations are awaiting setup. You can save strategies and run human negotiations in the meantime.</p>':""}${p.inspecting?`<section class="card"><h2>Student screen · ${m(p.inspecting.name)}</h2><p>Read-only instructor preview. Actions are disabled.</p>${w("Back to instructor controls","end-inspection","secondary")}</section>`:Vc()}${n?jc()+Kc()+zc()+qc(e):Gc()}${p.playerView?Hc():""}${Yc()}${Wc()}${n?"":un(p.roundComparisons,Te,{esc:m,date:Me,feedbackContent:Tt})}<section class="card"><div class="section-heading"><h2>${n?"Session negotiations":"Your negotiations"}</h2><span class="small">Updates automatically</span></div><div id="matches"></div></section>${n?"</div>":""}`),Dt();for(const r of document.querySelectorAll("#round-comparison details, #matches details"))t.has(r.dataset.roundStrategy||r.dataset.id)&&(r.open=!0);if(e.simulation){const r=b("#round-form select[name=mode]");if(r)for(const a of r.options)a.value!=="AA"&&(a.disabled=!0)}}function qc(t){const e=t.config;return`<section class="card"><details><summary>This session’s negotiation settings</summary><p class="small">These are the settings for future negotiations in this session. Completed negotiations retain their original settings and results. Changes in Negotiations apply to new sessions.</p><dl><dt>Buyer / seller fallback</dt><dd>${Xt(e.buyerValue)} / ${Xt(e.sellerCost)}</dd><dt>Maximum turns</dt><dd>${e.maxTurns} total messages</dd><dt>Human turn time</dt><dd>${e.humanTurnSeconds} seconds</dd><dt>Practice allowance</dt><dd>${e.maxPractice} per student</dd><dt>Match budget</dt><dd>${e.maxMatches} including practice</dd><dt>AI model / temperature</dt><dd>${m(e.model)} / ${e.temperature}</dd></dl></details><details><summary>What the session controls do</summary><p class="small">Open registration lets students join. Open activity enables practice and play. Start round schedules the selected treatment using the latest submitted strategies. Pause temporarily stops activity; Resume continues it. Close cancels unfinished matches and ends play. Release debrief reveals counterpart types. CSV downloads outcome rows; full session downloads prompts, transcripts and settings.</p></details></section>`}function Gc(){const{session:t,member:e}=p,s=O||(e==null?void 0:e.draft)||{buyer:"",seller:""};return`${Oi(t.config)}${t.status!=="active"?`<p class="callout">${t.status==="lobby"?"You are in. Your instructor will open the activity shortly.":t.status==="paused"?"Your instructor has paused the activity.":t.status==="debrief"?"The session is in debrief. Review your outcomes and counterparts below.":"This session is closed."}</p>`:""}<section class="card"><div class="section-heading"><div><p class="eyebrow">YOUR AGENTS</p><h2>A playbook for each side</h2></div>${e!=null&&e.final?Ce("submitted"):'<span class="small">Not yet submitted</span>'}</div><p>Specify an opening offer, when to make concessions, and when to accept or walk away. “Get a good price” leaves more to chance than a clear strategy. Do not include personal details.</p><form id="prompts-form">${p.playerView?`<div class="actions">${w("Fill example strategies","fill-examples","secondary",t.status!=="active"?"disabled":"")}</div><p class="small">Fills both boxes with example buyer and seller instructions for your test. You can edit them before practising.</p>`:""}<div class="form-grid"><label>Buyer instructions<textarea name="buyer" required minlength="10" maxlength="6000" placeholder="How should your buyer negotiate?" ${t.status!=="active"?"disabled":""}>${m(s.buyer)}</textarea></label><label>Seller instructions<textarea name="seller" required minlength="10" maxlength="6000" placeholder="How should your seller negotiate?" ${t.status!=="active"?"disabled":""}>${m(s.seller)}</textarea></label></div><div class="actions"><button class="secondary" name="intent" value="draft" ${t.status!=="active"?"disabled":""}>Save draft</button><button class="secondary" name="intent" value="practice" ${t.status!=="active"||((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"disabled":""}>${((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"Practice limit reached":"Practise with these prompts"} (${(e==null?void 0:e.practiceCount)||0}/${t.config.maxPractice})</button><button class="primary" name="intent" value="final" ${t.status!=="active"?"disabled":""}>Submit for evaluation</button></div><p class="small">Each save keeps a version. Evaluation rounds use a frozen copy of your latest submitted prompts.</p></form><div id="student-next-step" class="student-next-step">${ks()}</div></section>`}function ks(){const{session:t,member:e}=p,s=O||(e==null?void 0:e.draft)||{},n=!!(e!=null&&e.final)&&(s.buyer!==e.final.buyer||s.seller!==e.final.seller),i='<div class="actions"><a href="#round-comparison">See round results and feedback ↓</a><a href="#matches">View negotiation transcripts ↓</a></div>';if(t.status!=="active")return`<h3>Next step</h3><p>${t.status==="paused"?"The activity is paused. Resume it from instructor controls to continue.":t.status==="lobby"?"Wait for the activity to open.":"This session has ended. Review your results and feedback below."}</p>${i}`;if(!(e!=null&&e.final)||n)return`<h3>Next: submit your ${n?"revised ":""}strategies</h3><p>Click <strong>Submit for evaluation</strong> above to use these instructions in the next round. Practice is optional.</p>${i}`;if(!p.playerView)return`<h3>Your strategies are submitted</h3><p>Your instructor starts the evaluation round. Results and feedback appear below as the round completes.</p>${i}`;const r=p.testControls,a=r!=null&&r.pending?"A test round is still running or needs instructor attention. Review its negotiations below before starting another.":r&&r.remainingMatches<r.roundMatches?"There is not enough remaining match budget for another round. Review your results below or create a new test session.":`Ready to compete against your ${t.simulation.students} simulated classmates. This runs a full round using your submitted strategies. You can stay in Student view.`;return`<h3>${r!=null&&r.canStart?"Next: run your test round":"Your test round"}</h3><p>${a}</p>${w("Start test round","start-player-round","primary",r!=null&&r.canStart?"":"disabled")}<p class="small">${(r==null?void 0:r.roundMatches)??""} total negotiations per round; ${t.simulation.students*2} involve your agents. Live AI uses your configured AI model.</p>${i}`}function Kc(){const{session:t,members:e,summary:s,rounds:n}=p,i={draft:[["lobby","Open registration"]],lobby:[["active","Open activity"],["closed","Close session"]],active:[["paused","Pause activity"],["closed","Close session"]],paused:[["active","Resume activity"],["closed","Close session"]],closed:[["debrief","Release debrief"]],debrief:[]},r=e.filter(a=>a.final).length;return`<section class="card"><div class="section-heading"><div><p class="eyebrow">${t.simulation?"TEST SESSION CODE":"SHARE THIS SESSION CODE"}</p><div class="session-code">${m(t.code)}</div></div><div class="actions">${i[t.status].map(([a,o])=>{var c;return w(o,"status",a==="closed"?"danger":"primary",`data-status="${a}" ${t.simulation&&t.status==="lobby"&&a==="active"&&!((c=t.simulationProgress)!=null&&c.enrol)?"disabled":""}`)}).join("")}</div></div><div class="metrics"><div><strong>${e.length}</strong><span>students joined</span></div><div><strong>${r}</strong><span>prompts submitted</span></div><div><strong>${t.matchCount}/${t.config.maxMatches}</strong><span>match budget</span></div><div><strong>${(s==null?void 0:s.completed)||0}</strong><span>completed evaluations</span></div></div></section><section class="card"><h2>Run an evaluation</h2><p>Agent rounds pair every submitted buyer with every other submitted seller (${r*(r-1)} matches per repetition). Human rounds pair students randomly, once each. An even number of students is required.</p><form id="round-form" class="inline-form"><label>Treatment<select name="mode"><option value="AA">Agent ↔ Agent</option><option value="HH">Human ↔ Human</option><option value="HA">Human buyer ↔ Agent seller</option><option value="AH">Agent buyer ↔ Human seller</option></select></label>${P("repetitions","Repetitions (agent rounds only)",1,"number",'min="1" max="5" required')}<button class="primary" ${t.status!=="active"?"disabled":""}>Start round</button></form><p class="small">Agent and hybrid rounds include only students with both prompts submitted. Human-only rounds include all enrolled students. Finish or cancel the current evaluation before starting another.</p>${n!=null&&n.length?`<details><summary>Round history (${n.length})</summary>${n.map(a=>`<p>${m(a.mode)} · ${a.matchCount} matches · ${Me(a.createdAt)} · ${a.excludedIds.length} excluded without submitted prompts</p>`).join("")}</details>`:""}</section><section class="card"><div class="section-heading"><h2>Class roster</h2><div class="actions">${w("Export CSV","export","secondary",'data-format="csv"')}${w("Export full session","export","secondary",'data-format="json"')}</div></div><div class="table-scroll"><table><thead><tr><th>Student</th><th>University ID</th><th>Submission</th><th>Practice</th></tr></thead><tbody>${e.map(a=>{var o,c,u;return`<tr><td>${w(m(((o=a.profile)==null?void 0:o.name)||a.uid),"inspect-student","text-button",`data-uid="${m(a.uid)}"`)}<small>${m((c=a.profile)==null?void 0:c.email)}</small></td><td>${m((u=a.profile)==null?void 0:u.studentId)}</td><td>${a.final?`Version ${a.final.version}`:"Awaiting prompts"}</td><td>${a.practiceCount}</td></tr>`}).join("")}</tbody></table></div></section>`}function Dt(){var h;const t=b("#matches");if(!t)return;p.inspecting&&document.querySelectorAll("#prompts-form input,#prompts-form textarea,#prompts-form button").forEach(d=>d.disabled=!0);const e=(h=document.activeElement)==null?void 0:h.closest(".action-form"),s=e&&p.matches.find(d=>d.id===e.dataset.match),n=s&&p.session.status==="active"&&s.status==="playing"&&s.transcript.length===Number(e.dataset.turn),i=new Map([...t.querySelectorAll("form")].map(d=>[d.dataset.match,Object.fromEntries(new FormData(d))])),r=new Set([...t.querySelectorAll("details[open]")].map(d=>d.dataset.id)),a=p.session.status==="active",o=[...p.roundComparisons||p.rounds||[]].sort((d,g)=>d.createdAt-g.createdAt),c=new Map(o.map((d,g)=>[d.id,{...d,number:d.number||g+1}])),u=[...p.matches].sort((d,g)=>{var k,N;return Number(d.practice)-Number(g.practice)||(((k=c.get(g.roundId))==null?void 0:k.createdAt)||0)-(((N=c.get(d.roundId))==null?void 0:N.createdAt)||0)||String(d.roundId||"").localeCompare(String(g.roundId||""))||+!d.ownRoles.includes("buyer")-+!g.ownRoles.includes("buyer")||(g.createdAt||0)-(d.createdAt||0)||d.id.localeCompare(g.id)}),l=u.length?u.map((d,g)=>{var x;const k=be=>$(be,d.config.currency||qe(d.config).currency),N=d.practice?"practice":d.roundId,f=u[g-1],W=!f||(f.practice?"practice":f.roundId)!==N?`<h3 class="match-group-heading">${d.practice?"Practice matches":`Round ${((x=c.get(d.roundId))==null?void 0:x.number)||"—"} evaluations`} · ${u.filter(be=>(be.practice?"practice":be.roundId)===N).length} negotiations</h3>`:"",ye=!p.inspecting&&a&&d.status==="playing"&&d.ownRoles.includes(d.turn)&&d.ownKinds[d.turn]==="human",re=d.transcript.at(-1),rt=i.get(d.id)||{};return`${W}<article class="match" id="match-${m(d.id)}"><div class="section-heading"><h3>${d.practice?"Practice":"Evaluation"} <span class="muted">${d.id.slice(-6)}</span></h3>${Ce(d.status)}</div><p class="small">${d.ownRoles.length?`Your role: ${d.ownRoles.map(be=>`${be} (${d.ownKinds[be]})`).join(" + ")} · `:""}${d.transcript.length}/${d.config.maxTurns} turns${d.conditions?` · Buyer: ${d.conditions.buyer} / Seller: ${d.conditions.seller}`:""}</p>${d.outcome?`<div class="result"><strong>${d.outcome.agreed?`Agreement at ${k(d.outcome.price)}`:"No agreement"}</strong><span>Buyer surplus ${k(d.outcome.buyerSurplus)} · Seller surplus ${k(d.outcome.sellerSurplus)}</span></div>`:""}${d.error?`<p class="callout">${m(d.error)}</p>`:""}${ye?`<p>Your turn as ${d.turn}. Your fallback: ${k(d.fallbacks[d.turn])}.</p>`:""}${Ti(d,{money:k,sessionStatus:p.session.status,ownTurn:ye,opened:r.has(d.id)})}${ye?`<form class="action-form" data-match="${m(d.id)}" data-turn="${d.transcript.length}"><p class="small">Turn deadline: ${Me(d.deadline)}</p><div class="offer-fields">${P("price",`Your offer (${qe(d.config).currency==="EUR"?"€":"$"})`,rt.price||"","number",'min="0" max="1000000" step="1"')}</div>${Ai(rt.message)}<div class="actions"><button name="intent" value="offer" class="primary">Make offer</button>${(re==null?void 0:re.type)==="offer"?`<button name="intent" value="accept" class="secondary">Accept ${k(re.price)}</button>`:""}<button name="intent" value="reject" class="danger">End without agreement</button></div></form>`:""}${p.members&&["error","playing"].includes(d.status)?`<div class="actions">${w("Retry agent turn","retry","text-button",`data-match="${d.id}"`)}${w("Cancel match","cancel","text-button",`data-match="${d.id}"`)}</div>`:""}</article>`}).join(""):'<p class="empty">Your negotiations will appear here when you practise or your instructor starts a round.</p>';if(n){const d=document.createElement("div");d.innerHTML=l;for(const g of t.querySelectorAll(".match")){if(g.contains(e))continue;const k=[...d.querySelectorAll(".match")].find(N=>N.id===g.id);k&&g.replaceWith(k)}}else t.innerHTML=l}async function j(){if(K="home",T=null,O=null,A=await v("/me"),H&&A.profile&&H.ts>(A.profile.simulationImportedAt||0)&&String(H.profile.email||"").toLowerCase()===String(S.currentUser.email).toLowerCase()&&(await ts(A.profile),A=await v("/me")),je()){const[t,e,s]=await Promise.all([v("/sessions"),v("/task-settings/negotiation-v1"),v("/ai-providers")]);Is=s.providers||ss,Se=e.config,rn(t)}else rn(A.sessions)}function zc(){const t=[...p.rounds||[]].sort((e,s)=>e.createdAt-s.createdAt||e.id.localeCompare(s.id));return'<section class="card"><h2>Scores by round</h2><p>Scores out of 100. Click a student to review their screen, strategies, feedback and interactions. A dash means they did not participate; Pending means their round is unfinished. Exports use participant IDs from the full-session export.</p>'+w("Export round scores","export","secondary",'data-format="scores"')+'<div class="table-scroll"><table><thead><tr><th>Student</th><th>Participant ID</th>'+t.map((e,s)=>"<th>Round "+(s+1)+"</th>").join("")+"</tr></thead><tbody>"+p.members.map(e=>{var s;return"<tr><td>"+w(m(((s=e.profile)==null?void 0:s.name)||e.pseudonym),"inspect-student","text-button",'data-uid="'+m(e.uid)+'"')+"</td><td>"+m(e.pseudonym)+"</td>"+t.map(n=>{var r,a;const i=(a=(r=p.studentScores)==null?void 0:r.find(o=>o.uid===e.uid))==null?void 0:a.rounds.find(o=>o.id===n.id);return"<td>"+(i?i.score==null?"Pending":i.score.toFixed(1):"—")+"</td>"}).join("")+"</tr>"}).join("")+"</tbody></table></div></section>"}function Yc(){return p.inspecting?'<section class="card"><h2>Saved strategy history</h2>'+(p.promptHistory||[]).sort((t,e)=>(t.version||0)-(e.version||0)).map(t=>"<details><summary>Version "+m(t.version??t.id)+'</summary><h3>Buyer</h3><p class="feedback-text">'+m(t.buyer)+'</p><h3>Seller</h3><p class="feedback-text">'+m(t.seller)+"</p></details>").join("")+"</section>":""}async function C(){return v(`/sessions/${T}${ke?"?student="+encodeURIComponent(ke):Y?"?view=student":""}`)}async function At(t){ke=null,T=t,K="session",he="sessions",Y=!1,O=null,Je=null,Te=null,p=await C(),D()}let Ts=[];async function es(){K="students",T=null,Ts=(await v("/admin/students")).students,ge('<section class="card"><h1>Students</h1><label>Search name, university ID or email<input id="student-search" type="search" placeholder="Start typing"></label><p class="small">Select a student to edit their registration details. Session screens and interaction histories are available through each session roster.</p><div id="student-directory-results"></div></section><div id="student-editor"></div>'),gi()}function gi(){var e;const t=(((e=b("#student-search"))==null?void 0:e.value)||"").trim().toLowerCase();b("#student-directory-results").innerHTML='<div class="table-scroll"><table><thead><tr><th>Name</th><th>University ID</th><th>Email</th><th></th></tr></thead><tbody>'+Ts.filter(s=>[s.name,s.firstName,s.lastName,s.email,s.studentId].some(n=>String(n||"").toLowerCase().includes(t))).map(s=>"<tr><td>"+m(s.name)+"</td><td>"+m(s.studentId)+"</td><td>"+m(s.email)+"</td><td>"+w("Edit profile","edit-student-profile","secondary",'data-uid="'+m(s.uid)+'"')+"</td></tr>").join("")+"</tbody></table></div>"}async function mt(){K="profile",A=await v("/me");const t=await v("/stats");ge(`<div class="page-heading"><div><p class="eyebrow">YOUR ACCOUNT</p><h1>Profile & progress</h1></div></div>${di()}${li()}<section class="card"><h2>Your play statistics</h2><p>Completed evaluations only. Practice matches are counted separately.</p><div class="metrics"><div><strong>${t.matches}</strong><span>evaluations completed</span></div><div><strong>${t.agreed}</strong><span>agreements</span></div><div><strong>${t.surplusByCurrency&&Object.keys(t.surplusByCurrency).length?Object.entries(t.surplusByCurrency).map(([e,s])=>$(s,e)).join(" / "):"—"}</strong><span>mean surplus per role</span></div><div><strong>${t.practice}</strong><span>practice matches</span></div></div><p class="small">${t.pending} unfinished evaluations · ${t.sessions} class sessions</p></section>`)}async function Jc(){var s,n;if(K!=="session"||Ee||Ht||document.hidden||document.querySelector(".car-photo-dialog[open]"))return;Ht=!0;const t=T,e=Y;try{const i=await C();if(K!=="session"||T!==t||Y!==e||ke!==(((s=i.inspecting)==null?void 0:s.uid)||null))return;const r=i.session.status!==p.session.status,a=ci(i)!==oi;!p.inspecting&&b("#prompts-form")&&(O=Object.fromEntries(new FormData(b("#prompts-form")))),p=i,r||a&&!((n=document.activeElement)!=null&&n.closest("form,.profile-menu"))?D():Dt()}catch(i){Nt(i)}finally{Ht=!1}}async function yi(){await mo(S.currentUser,{url:location.origin+location.pathname}),I="Verification email sent. Check your inbox and spam folder."}async function ts(t){const e=H&&String(H.profile.email||"").toLowerCase()===String(S.currentUser.email).toLowerCase(),s={firstName:t.firstName,lastName:t.lastName,studentId:t.studentId,...e?{simulationProfile:H.profile}:{}};await v("/profile",s,"PUT")}document.addEventListener("submit",async t=>{var r;if(t.preventDefault(),Ee)return;const e=t.target,s=Object.fromEntries(new FormData(e)),n=(r=t.submitter)==null?void 0:r.value;if(Ee=!0,I="",p!=null&&p.inspecting&&K==="session")return;const i=[...e.querySelectorAll("button")];i.forEach(a=>a.disabled=!0);try{if(e.matches(".ai-key-form"))try{await v("/admin/ai-providers/"+e.dataset.provider+"/key",{apiKey:s.apiKey},"PUT");const a=Is.find(o=>o.id===e.dataset.provider);a&&(a.keyConfigured=!0,a.statusUnavailable=!1),document.querySelector('[data-key-status="'+e.dataset.provider+'"]').textContent="Key saved",I="API key saved securely. Test the connection to check model access.",b("#notice").textContent=I}finally{e.reset(),delete s.apiKey}else if(e.id==="admin-student-form")await v("/admin/students/"+encodeURIComponent(e.dataset.uid),s,"PUT"),I="Student profile updated.",await es();else if(e.id==="auth-form")St==="register"?(pt=s,await po(S,s.email,s.password),await yi(),await ts(s),pt=null,await j()):await fo(S,s.email,s.password);else if(e.id==="profile-form")await ts(s),s.email!==S.currentUser.email?(await go(S.currentUser,s.email,{url:location.origin+location.pathname}),I="Profile saved. Verify the link sent to your new email to finish the email change."):I="Profile saved.",await mt();else if(e.id==="join-form"){const a=await v("/join",{code:s.code});await At(a.id)}else if(e.id==="negotiation-settings"){const a=Object.fromEntries(["buyerValue","sellerCost","maxTurns","humanTurnSeconds","maxMatches","maxPractice","temperature"].map(c=>[c,Number(s[c]??Se[c])]));a.provider=s.provider,a.model=s.model,a.autoFeedback=!!s.autoFeedback,a.feedbackTone=s.feedbackTone,Se=(await v("/task-settings/negotiation-v1",a,"PUT")).config,I="Negotiation settings saved. New sessions will use these values.",Ss()}else if(e.id==="create-session"){const a={...Se},o=s.testSession?{students:Number(s.simulatedStudents),engine:s.simulationEngine,playAsStudent:!!s.playAsStudent}:void 0,c=await v("/sessions",{title:s.title,code:s.code,moduleCode:s.moduleCode,taskId:s.taskId,config:a,...o?{simulation:o}:{}});await At(c.id)}else if(e.id==="prompts-form")O={buyer:s.buyer,seller:s.seller},await v(`/sessions/${T}/prompts`,{...O,final:n==="final"}),n==="practice"&&await v(`/sessions/${T}/practice`,{requestId:crypto.randomUUID()}),I=n==="final"?"Prompts submitted for evaluation.":n==="practice"?"Practice started. Watch the transcript below.":"Draft saved.",p=await C(),D();else if(e.id==="feedback-settings")await v(`/sessions/${T}/feedback-settings`,{autoFeedback:!!s.autoFeedback,feedbackTone:s.feedbackTone},"PUT"),I="Automatic feedback settings saved.",p=await C(),D();else if(e.id==="round-form")await v(`/sessions/${T}/rounds`,{requestId:crypto.randomUUID(),mode:s.mode,repetitions:Number(s.repetitions)}),p=await C(),D();else if(e.matches(".action-form")){const a=p.matches.find(o=>o.id===e.dataset.match);if(n==="offer"&&s.price==="")throw new Error("Enter a price for your offer.");await v(`/sessions/${T}/matches/${a.id}/action`,{expectedTurn:Number(e.dataset.turn),action:{type:n,price:n==="offer"?Number(s.price):n==="accept"?a.transcript.at(-1).price:null,message:s.message||""}}),e.reset(),p=await C(),Dt()}}catch(a){pt=null,Nt(a),e.id==="auth-form"&&S.currentUser&&await j()}finally{Ee=!1,i.forEach(a=>{a.isConnected&&(a.disabled=!1)})}});document.addEventListener("input",t=>{if(t.target.closest("#prompts-form")){O=Object.fromEntries(new FormData(b("#prompts-form")));const e=b("#student-next-step");e&&(e.innerHTML=ks())}});document.addEventListener("change",t=>{if(t.target.id==="setting-provider"&&on(t.target.form,t.target.value),t.target.id==="setting-model"&&is(t.target.form),t.target.id==="compare-before"||t.target.id==="compare-after"){Te={before:b("#compare-before").value,after:b("#compare-after").value},b("#prompts-form")&&(O=Object.fromEntries(new FormData(b("#prompts-form"))));const e=b("#round-comparison");e.outerHTML=un(p.roundComparisons,Te,{esc:m,date:Me,feedbackContent:Tt})}if(t.target.id==="review-student"&&(Je=t.target.value,D()),t.target.id==="test-session"&&(b("#simulation-options").hidden=!t.target.checked),t.target.id==="play-as-student"){const e=b("select[name=simulationEngine]");e.querySelector("option[value=scripted]").disabled=t.target.checked,t.target.checked&&(e.value="live")}});document.addEventListener("click",async t=>{var s,n,i,r,a,o,c,u;const e=t.target.closest("[data-action],[data-open]");if(e&&(t.preventDefault(),!Ee)){Ee=!0;try{const l=e.dataset.action;if(l==="inspect-directory-session"){await At(e.dataset.session),ke=e.dataset.uid,p=await C(),D();return}if(l==="student-directory"){await es();return}if(l==="edit-student-profile"){const h=Ts.find(g=>g.uid===e.dataset.uid);b("#student-editor").innerHTML='<section class="card"><h2>Edit student profile</h2><form id="admin-student-form" data-uid="'+m(h.uid)+'">'+P("firstName","First name",h.firstName,"text",'required maxlength="80"')+P("lastName","Last name",h.lastName,"text",'required maxlength="80"')+P("studentId","University ID",h.studentId,"text",'required minlength="2" maxlength="40"')+P("email","Email",h.email,"email","required")+'<p class="small">Changing email changes the sign-in email and requires verification again.</p><button class="primary">Save profile</button></form>'+w("Delete profile","delete-student-profile","danger",'data-uid="'+m(h.uid)+'"')+'<p class="small">Deletes registration details only. Sign-in account, session records, strategies and results remain. The student can register their details again.</p></section>';const d=await v("/admin/students/"+encodeURIComponent(h.uid)+"/sessions");b("#student-editor").insertAdjacentHTML("beforeend",'<section class="card"><h2>Student sessions</h2>'+d.sessions.map(g=>w(m(g.title||g.sessionId),"inspect-directory-session","secondary",'data-session="'+m(g.sessionId)+'" data-uid="'+m(h.uid)+'"')).join("")+(d.sessions.length?"":"<p>No joined sessions.</p>")+"</section>"),b("#student-editor").scrollIntoView({behavior:"smooth"});return}if(l==="delete-student-profile"){if(!confirm("Delete this student’s registration profile? Their sign-in account and all historical session records will remain."))return;await v("/admin/students/"+encodeURIComponent(e.dataset.uid),null,"DELETE"),I="Student profile deleted. Historical session records retained.",await es();return}if(l==="inspect-student"||l==="end-inspection"){ke=l==="inspect-student"?e.dataset.uid:null,Y=!1,O=null,Te=null,p=await C(),D();return}if(e.dataset.open){await At(e.dataset.open);return}if(l==="start-player-round"){if(!p.playerView||!((s=p.testControls)!=null&&s.canStart))return;const h=Object.fromEntries(new FormData(b("#prompts-form"))),d=(n=p.member)==null?void 0:n.final;if(!d||h.buyer!==d.buyer||h.seller!==d.seller)throw new Error("Submit your revised strategies before starting the round.");await v(`/sessions/${T}/rounds`,{requestId:crypto.randomUUID(),mode:"AA",repetitions:1}),Te=null,I="Test round started. Your results and personalised feedback update below.",p=await C(),D(),(i=b("#round-comparison"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})}if(l==="fill-examples"){const h=b("#prompts-form");if(!h||!p.playerView||p.session.status!=="active")return;const d=h.elements.buyer,g=h.elements.seller;if([["buyer",d],["seller",g]].some(([f,_])=>_.value.trim()&&_.value!==As[f])&&!confirm("Replace the instructions in both boxes with the examples? Saved versions will remain available."))return;O={...As},d.value=O.buyer,g.value=O.seller,I="Example strategies filled in. Review or edit them, then click Practise with these prompts.",b("#notice").className="",b("#notice").textContent=I;const N=b("#student-next-step");N&&(N.innerHTML=ks()),d.focus()}if(l==="retry-feedback"&&(await v(`/sessions/${T}/feedback/${e.dataset.uid}/retry`,{}),p=await C(),D()),(l==="student-view"||l==="instructor-view")&&(b("#prompts-form")&&(O=Object.fromEntries(new FormData(b("#prompts-form")))),Y=l==="student-view",p=await C(),D()),l==="prepare-player-test"&&(Y=!1,p=await C(),p.session.status==="draft"&&(await v(`/sessions/${T}/status`,{status:"lobby"}),p=await C()),(r=p.session.simulationProgress)!=null&&r.enrol||(await v(`/sessions/${T}/simulation`,{action:"enrol"}),p=await C()),p.session.status==="lobby"&&(await v(`/sessions/${T}/status`,{status:"active"}),p=await C()),(a=p.session.simulationProgress)!=null&&a.submit||await v(`/sessions/${T}/simulation`,{action:"submit"}),Y=!0,p=await C(),D()),l==="simulation"&&(await v(`/sessions/${T}/simulation`,{action:e.dataset.step}),p=await C(),D()),l==="toggle-auth"&&(St=St==="login"?"register":"login",Qt()),l==="join-session-shortcut"||l==="create-session-shortcut"){he="sessions",await j();const h=b(l==="join-session-shortcut"?"#join-form input[name=code]":"#create-session input[name=title]"),d=h==null?void 0:h.closest(".dashboard-section");d&&(d.open=!0),h==null||h.scrollIntoView({block:"center"}),h==null||h.focus()}if(l==="home"&&(he="sessions",A?await j():Qt()),l==="admin-tab"&&(he=e.dataset.tab==="negotiations"?"negotiations":"sessions",I="",await j()),l==="default-ai-model"&&on(b("#negotiation-settings"),b("#setting-provider").value),l==="test-ai-connection"){const h=e.dataset.provider,d=document.querySelector('[data-test-result="'+h+'"]');d.textContent="Testing saved key and selected model…";try{const g=await v("/admin/ai-providers/"+h+"/test",{model:b("#test-model-"+h).value});d.textContent="Connected successfully: "+g.model+"."}catch(g){throw d.textContent=g.message,g}}if(l==="reset-negotiation-settings"&&(Se={scenarioId:R.id,buyerValue:R.buyerValue,sellerCost:R.sellerCost,maxTurns:12,humanTurnSeconds:180,maxMatches:100,maxPractice:5,provider:"openai",model:Xe("openai").defaultModel,temperature:1},I="Baseline values filled in. Click Save negotiation settings to keep them.",Ss()),l==="copy-session-link"){const h=new URL(location.pathname,location.origin);h.searchParams.set("session",e.dataset.code),await navigator.clipboard.writeText(h.href),I="Student link copied. Share it with your class.",b("#notice").textContent=I}if(l==="session-export-menu"&&Ei(e.dataset.session,e.dataset.code,{esc:m,btn:w}),l==="dashboard-close"){if(!confirm(`Close ${e.dataset.code}? Unfinished negotiations will be cancelled. Results will remain available in Past sessions.`))return;await v(`/sessions/${e.dataset.session}/status`,{status:"closed"}),I="Session closed. Its results are available in Past sessions.",await j()}if(l==="delete-session"||l==="delete-session-group"){const h=l==="delete-session"?ft.filter(g=>g.id===e.dataset.session):ft.filter(g=>["closed","debrief"].includes(g.status)===(e.dataset.group==="past-sessions"));if(!h.length||!confirm(`Permanently delete ${h.length===1?h[0].code:h.length+" sessions"} and all their strategies, negotiations and results? This cannot be undone. Export any data you need first.`))return;let d=0;try{for(const g of h)await v(`/sessions/${g.id}`,null,"DELETE"),d++}catch(g){throw await j(),new Error(`${d} of ${h.length} sessions deleted. ${g.message}`)}I=`${d} ${d===1?"session":"sessions"} deleted.`,await j()}if(l==="test-round"){const h=ft.find(g=>g.id===e.dataset.session);if(!confirm(`Open a separate test using ${e.dataset.code}’s settings? You will play alongside two simulated classmates. Practice and rounds use ${((o=h==null?void 0:h.config)==null?void 0:o.model)||"the configured AI model"} and incur normal API usage when started. Class results stay unchanged.`))return;T=(await v(`/sessions/${e.dataset.session}/test-round`,{requestId:crypto.randomUUID()})).id,K="session",he="sessions",ke=null,Y=!0,O=null,Je=null,Te=null,p=await C(),I="Your separate test is ready. Write your strategies, then practise or start a test round.",D()}if(l==="dashboard-export"&&await an(e.dataset.session,e.dataset.code,e.dataset.format),l==="profile"&&await mt(),l==="logout"&&(O=null,await wo(S)),l==="google"&&await Fo(S,new q),l==="link-google"&&(await Vo(S.currentUser,new q),I="Google sign-in connected.",await mt()),l==="verify"&&(await yi(),await mt()),l==="verified"&&(await On(S.currentUser),await S.currentUser.getIdToken(!0),I=S.currentUser.emailVerified?"Email verified.":"Email is not verified yet.",await j()),l==="reset"){const h=((c=S.currentUser)==null?void 0:c.email)||((u=b("input[name=email]"))==null?void 0:u.value);if(!h)throw new Error("Enter your email address first.");await ho(S,h,{url:location.origin+location.pathname}),I="If an account exists, a password setup / reset link has been sent to that address.",b("#notice").textContent=I}if(l==="status"){if(e.dataset.status==="closed"&&!confirm("Close this session? Unfinished negotiations will be cancelled."))return;await v(`/sessions/${T}/status`,{status:e.dataset.status}),p=await C(),D()}(l==="retry"||l==="cancel")&&(await v(`/sessions/${T}/matches/${e.dataset.match}/${l}`,{}),p=await C(),Dt()),l==="export"&&await an(T,p.session.code,e.dataset.format)}catch(l){Nt(l)}finally{Ee=!1}}});async function an(t,e,s){const n=await v(`/sessions/${t}/export?format=${s}`,null,"GET",!0),i=URL.createObjectURL(await n.blob()),r=document.createElement("a");r.href=i,r.download=`agentlab-${e}${s==="scores"?"-scores.csv":"."+s}`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}vo(S,async t=>{if(!pt)try{t?await j():(A=null,K="home",T=null,Qt())}catch(e){ge('<section class="card"><h1>Could not load your workspace</h1><p>Check the connection and try again.</p><button data-action="home">Retry</button><button data-action="logout">Sign out</button></section>'),Nt(e)}});setInterval(Jc,5e3);document.addEventListener("input",t=>{t.target.id==="student-search"&&gi()});
