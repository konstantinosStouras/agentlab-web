(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const Js="agentlab-theme",Xs=matchMedia("(prefers-color-scheme: dark)");let he;try{he=localStorage.getItem(Js)}catch{}function Qt(t){var e;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t==="dark"?"#181c1a":"#f5f6f1"),document.querySelectorAll('[data-action="toggle-theme"]').forEach(s=>{s.textContent=t==="dark"?"☀ Light theme":"☾ Dark theme",s.setAttribute("aria-label",`Switch to ${t==="dark"?"light":"dark"} theme`)})}Qt(he==="light"||he==="dark"?he:Xs.matches?"dark":"light");Xs.addEventListener("change",t=>{he||Qt(t.matches?"dark":"light")});function ri(){return`<button type="button" class="secondary theme-toggle" data-action="toggle-theme" aria-label="Switch to ${document.documentElement.dataset.theme==="dark"?"light":"dark"} theme">${document.documentElement.dataset.theme==="dark"?"☀ Light theme":"☾ Dark theme"}</button>`}document.addEventListener("click",t=>{if(t.target.closest('[data-action="toggle-theme"]')){he=document.documentElement.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem(Js,he)}catch{}Qt(he)}});function ai(t,{esc:e,date:s,btn:n,badge:i}){var c,l;const r=["closed","debrief"].includes(t.status),a=t.memberCount||0,o=`data-session="${e(t.id)}" data-code="${e(t.code)}"`;return`<article class="admin-session-card" aria-label="Session ${e(t.code)}"><div class="session-card-top"><div><div class="session-card-code">${e(t.code)}</div>${i(t.status)}${t.simulation?i("test_session"):""}</div><div class="participant-count"><strong>${a} ${a===1?"participant":"participants"}</strong><span>Used-car negotiation</span><span class="session-ai">${e(((c=t.simulation)==null?void 0:c.engine)==="scripted"?"Scripted rehearsal":((l=t.config)==null?void 0:l.model)||"AI agents")}</span></div></div><h3>${e(t.title)}</h3><p class="session-metadata">${t.moduleCode?`${e(t.moduleCode)} · `:""}Created ${e(s(t.createdAt))}</p>${t.deletingAt?'<p class="small">Deletion was interrupted. Click Delete to finish removing this session.</p>':""}<div class="actions session-actions"><button type="button" class="primary" data-open="${e(t.id)}" ${t.deletingAt?"disabled":""}>Open</button>${r?"":n("Copy link","copy-session-link","secondary",`data-code="${e(t.code)}" ${t.simulation?'disabled title="Test sessions are restricted to their instructor"':""}`)}${n("↓ Export data","session-export-menu","export-button",o+(t.deletingAt?" disabled":""))}${n("🧪 Test round","test-round","secondary",o+(t.deletingAt?" disabled":""))}${r?"":n("Close session","dashboard-close","secondary",o)}${n("Delete","delete-session","danger",o)}</div></article>`}function oi(t,e,{esc:s,btn:n}){var r;(r=document.querySelector("#session-export-dialog"))==null||r.remove();const i=document.createElement("dialog");i.id="session-export-dialog",i.className="export-dialog",i.setAttribute("aria-labelledby","export-heading"),i.innerHTML=`<h2 id="export-heading">Export ${s(e)}</h2><p>Download this session’s results or complete records.</p><div class="export-options">${[["csv","Outcomes (CSV)"],["scores","Student scores (CSV)"],["json","Full session (JSON)"]].map(([a,o])=>n(o,"dashboard-export","secondary",`data-session="${s(t)}" data-code="${s(e)}" data-format="${a}"`)).join("")}</div><form method="dialog"><button class="secondary">Close</button></form>`,document.body.append(i),i.addEventListener("close",()=>i.remove(),{once:!0}),i.showModal()}const G=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ce(t,e){var a,o,c;const s=(t.ownRoles||[]).includes(e),n=e==="buyer"?"buying":"selling",i=((a=t.ownKinds)==null?void 0:a[e])||((o=t.conditions)==null?void 0:o[e]);if(s)return i==="agent"?"Your "+n+" agent":"You · "+(e==="buyer"?"Buyer":"Seller");const r=i==="agent"?n+" agent":e==="buyer"?"buyer":"seller";return(c=t.ownRoles)!=null&&c.length?"Other "+r:r.charAt(0).toUpperCase()+r.slice(1)}function Ft(t,e){const s=t.ownRoles||[];return e===(s.length===1?s[0]:"buyer")?"outgoing":"incoming"}function ci(t,{sessionStatus:e,ownTurn:s,now:n=Date.now()}={}){var r,a;return t.status!=="playing"?null:e==="paused"?{text:"Conversation paused. Replies will resume when the activity continues.",animated:!1}:e!=="active"?null:t.deadline&&t.deadline<=n?{text:"Turn deadline reached. Waiting for the result…",animated:!1}:s?null:{text:(((r=t.ownKinds)==null?void 0:r[t.turn])||((a=t.conditions)==null?void 0:a[t.turn]))==="agent"?`${Ce(t,t.turn)} is thinking…`:`Waiting for ${Ce(t,t.turn)} to reply…`,animated:!0}}function li(t){const e=["buyer","seller"],s=t.ownRoles||[];return'<div class="conversation-legend" role="group" aria-label="Conversation colours">'+e.map(i=>{const r=Ft(t,i);return'<span class="legend-item"><span class="legend-swatch '+r+'" aria-hidden="true"></span><span><strong>'+G(Ce(t,i))+"</strong><small>"+(r==="outgoing"?"Blue · right":"Grey · left")+"</small></span></span>"}).join("")+"</div>"+(s.length===2?'<p class="legend-note">Both agents are yours. Blue identifies your buying agent; grey identifies your selling agent.</p>':s.length===1?'<p class="legend-note">Your side is blue on the right; the other side is grey on the left.</p>':"")}function di(t,{money:e,sessionStatus:s,ownTurn:n,opened:i=!1,now:r}={}){const a=ci(t,{sessionStatus:s,ownTurn:n,now:r}),o=t.transcript.map(c=>`<li class="message ${Ft(t,c.role)}"><div><strong>${G(Ce(t,c.role))} · Turn ${c.turn}</strong><span>${G(c.type)} ${c.price!=null?e(c.price):""}</span></div><p>${G(c.message)}</p></li>`).join("");return`${li(t)}<details class="conversation" data-id="${G(t.id)}" ${i||t.status==="playing"?"open":""}><summary>Negotiation transcript (${t.transcript.length} turns)</summary><p class="small"><strong>${G(Ce(t,"buyer"))}</strong> ↔ <strong>${G(Ce(t,"seller"))}</strong>${t.practice?" · Practice: both agents use your instructions.":""}</p><ol class="transcript">${o||'<li class="conversation-empty">The negotiation has not started yet.</li>'}</ol></details><div class="reply-status" role="status" aria-live="polite" aria-atomic="true">${a?`<span class="reply-bubble ${Ft(t,t.turn)}">${a.animated?'<span class="reply-dots" aria-hidden="true"><i></i><i></i><i></i></span>':""}<span>${G(a.text)}</span></span>`:""}</div>`}function ui(t=""){return`<label class="message-label">Message<textarea name="message" class="message-input" rows="4" maxlength="1200" placeholder="Write your message or explain your offer…">${G(t)}</textarea></label>`}const ys={buyer:`You are buying the vehicle on my behalf. Aim to get a good price while reaching a mutually acceptable agreement.

Start below the midpoint of the KBB-style range, but never offer more than your supplied fallback. Explain your offer politely using the vehicle’s mileage and shared value range. Do not invent defects or competing offers.

Make concessions gradually, usually €250–€500 at a time. Ask the seller to move toward your price rather than immediately matching their offer.

Aim to agree as far below your fallback as possible. If necessary, you may pay more to reach a worthwhile deal, but never exceed your supplied fallback value.

As the remaining turns run low, prioritise an agreement that gives me positive surplus. Accept a favourable outstanding offer explicitly. Keep messages concise and professional.`,seller:`You are selling the vehicle on my behalf. Aim to get a good price while reaching a mutually acceptable agreement.

Start near the upper end of the KBB-style range, but never below your supplied fallback. Support your offer price using the vehicle’s known specifications and market value. Do not invent features, service history or competing buyers.

Make concessions gradually, usually €250–€500 at a time. Ask the buyer to increase their offer in return for a price reduction.

Aim to agree as far above your fallback as possible. If necessary, you may accept less to reach a worthwhile deal, but never accept less than your supplied fallback value.

As the remaining turns run low, prioritise an agreement that gives me positive surplus. Accept a favourable outstanding offer explicitly. Keep messages concise and professional.`},P={id:"bmw-x1-2021-v1",currency:"EUR",title:"2021 BMW X1 xDrive25e M Sport",mileageKm:105013,location:"Dublin",source:"https://www.cars.ie/car/42696819-2021-bmw-x1-m-sport/",buyerValue:28e3,sellerCost:24e3,equipment:["Brand new 20” alloy wheels (included in the price)","Brand new M Performance styling kit","Front gloss black kidney grilles","Front splitter","Side extensions","Rear spoiler"],specifications:[["Overview",[["Make","BMW"],["Model","X1"],["Variant","xDrive25e M Sport"],["Trim level","Sports Trim"],["Year","2021"],["Mileage","105,013 km"],["Fuel type","Petrol Plug-in Hybrid"],["Transmission","Automatic"],["Body type","SUV"],["Seats","5"],["Doors","5"],["Colour","Grey"]]],["Ownership & history",[["Current country of registration","Ireland"],["Imported","No"],["Total owners","1"],["History check","History checked"],["Warranty","6 months"]]],["Running costs",[["Road tax","€140"],["Combined fuel consumption","7.4 L/100 km"]]],["Performance",[["Engine size","1.5 L"],["Engine power","220 hp"],["Acceleration (0–100 km/h)","6.9 sec"],["Battery capacity","Not specified"],["Battery range","Not specified"]]],["Dimensions",[["External length","4.45 m"],["External width","1.82 m"],["External height","1.58 m"],["Ground clearance","18 cm"],["Boot volume","450 L"],["Boot volume (seats down)","1,470 L"],["Fuel tank capacity","36 L"]]],["Safety",[["Euro NCAP overall safety rating","5/5"]]]]},hi={id:"camry-2020-v1",currency:"USD",title:"2020 Toyota Camry LE",buyerValue:22e3,sellerCost:18e3},We=t=>(t==null?void 0:t.scenarioId)===P.id?P:hi,O=(t,e="EUR",s=0)=>t==null?"—":new Intl.NumberFormat(e==="EUR"?"en-IE":"en-US",{style:"currency",currency:e,maximumFractionDigits:s}).format(t),Qs=t=>{var e,s;return{min:((e=t==null?void 0:t.valueRange)==null?void 0:e.min)??(t==null?void 0:t.sellerCost)??P.sellerCost,max:((s=t==null?void 0:t.valueRange)==null?void 0:s.max)??(t==null?void 0:t.buyerValue)??P.buyerValue}},nt=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function pi(t,e="/agentlab/"){const s=Qs(t),n=r=>`${e}cars/bmw-x1/${String(r+1).padStart(2,"0")}.webp`,i=(r,a=!0)=>`<img src="${n(r)}" alt="${P.title} · listing photo ${r+1}" ${a?'loading="lazy"':'fetchpriority="high"'} width="1200" height="900">`;return`<section class="car-listing" aria-labelledby="car-title">
    <div class="car-gallery" aria-label="Vehicle photographs">
      ${Array.from({length:5},(r,a)=>`<button type="button" class="car-photo ${a===0?"car-photo-main":""}" data-car-photo="${a}" aria-label="Open photo ${a+1} of 14">${i(a,a>0)}${a===4?'<span class="car-more-photos">+9 photos</span>':""}</button>`).join("")}
      <button type="button" class="car-photo-count" data-car-photo="0">▧ View all 14 photos</button>
    </div>
    <div class="car-listing-body">
      <div class="car-title-row"><div><h2 id="car-title">${P.title}</h2><p class="car-location">${P.location}</p></div></div>
      <div class="car-value-range"><span>Estimated value (</span><span class="price-help" data-price-help><button type="button" data-help-trigger aria-expanded="false" aria-describedby="kbb-help">KBB</button><span class="price-help-box" id="kbb-help" role="tooltip" hidden><strong>What does KBB mean?</strong><span>KBB stands for Kelley Blue Book, a vehicle valuation guide. In a negotiation, valuation information gives both sides a reference for judging offers; it does not set the agreed price.</span><span>This exercise uses a KBB-style range to represent the two outside options. It is an instructor-set teaching assumption, not a verified KBB valuation of this BMW.</span></span></span><span>):</span><span class="price-help range-help" data-price-help><button type="button" data-help-trigger aria-expanded="false" aria-describedby="value-range-help">${O(s.min)}–${O(s.max)}</button><span class="price-help-box" id="value-range-help" role="tooltip" hidden><strong>Where does this range come from?</strong><span><b>${O(s.min)} — seller’s outside option:</b> the amount the seller can receive by trading the car in to a dealer.</span><span><b>${O(s.max)} — buyer’s outside option:</b> the price the buyer would pay for a similar vehicle from another dealer.</span><span>The ${O(s.max-s.min)} difference is the total surplus available to divide. An agreed price between the endpoints improves on both alternatives; at an endpoint, one side earns zero surplus. These outside options are set for this exercise.</span></span></span><small>KBB-style exercise range · hover or tap for explanations</small></div>
      <div class="car-tags"><span>6 month warranty</span><span>History checked</span></div>
      <dl class="car-highlights">
        ${[["◴","105,013 km","Mileage"],["⛽","1.5 L","Petrol Plug-in Hybrid"],["⚙","Automatic","Transmission"],["▱","SUV","Body type"],["♙","1","Previous owner"],["◈","Grey","Colour"]].map(([r,a,o])=>`<div><span class="car-spec-icon" aria-hidden="true">${r}</span><div><dd>${a}</dd><dt>${o}</dt></div></div>`).join("")}
      </dl>
      <section class="car-specifications" aria-labelledby="car-specifications-title"><h3 id="car-specifications-title">Specifications</h3>
        ${P.specifications.map(([r,a],o)=>`<details ${o===0?"open":""}><summary>${nt(r)}</summary><dl>${a.map(([c,l])=>`<div><dt>${nt(c)}</dt><dd>${nt(l)}</dd></div>`).join("")}</dl></details>`).join("")}
      </section>
      <section class="car-equipment" aria-labelledby="car-equipment-title"><h3 id="car-equipment-title">Additional equipment</h3><p><strong>Brand new 20” alloy wheels</strong>, included in the price, along with a <strong>brand new M Performance styling kit</strong> comprising:</p><ul>${P.equipment.slice(2).map(r=>`<li>${nt(r)}</li>`).join("")}</ul></section>
      <p class="car-source">Teaching listing adapted from <a href="${P.source}" target="_blank" rel="noopener noreferrer">Cars.ie</a>. Vehicle facts and photographs are the shared scenario for this exercise.</p>
    </div>
    <dialog class="car-photo-dialog" aria-label="Vehicle photo gallery">
      <div class="car-dialog-toolbar"><span data-car-photo-status aria-live="polite">Photo 1 of 14</span><button type="button" data-car-close aria-label="Close photo gallery">Close ×</button></div>
      <div class="car-dialog-stage"><button type="button" data-car-step="-1" aria-label="Previous photo">‹</button><img data-car-large src="${n(0)}" alt="${P.title} · listing photo 1"><button type="button" data-car-step="1" aria-label="Next photo">›</button></div>
      <div class="car-thumbnails">${Array.from({length:14},(r,a)=>`<button type="button" data-car-thumb="${a}" aria-label="Show photo ${a+1}" aria-pressed="${a===0}">${i(a)}</button>`).join("")}</div>
    </dialog>
  </section>`}function fi(t=document){if(t.__carGalleryReady)return;t.__carGalleryReady=!0;let e=null,s;const n=(a,o)=>{a.querySelector('[role="tooltip"]').hidden=!o,a.querySelector("[data-help-trigger]").setAttribute("aria-expanded",String(o)),o||delete a.dataset.pinned},i=()=>t.querySelectorAll("[data-price-help]").forEach(a=>n(a,!1));t.addEventListener("pointerover",a=>{const o=a.target.closest("[data-price-help]");o&&(clearTimeout(s),o.contains(a.relatedTarget)||(i(),n(o,!0)))}),t.addEventListener("pointerout",a=>{const o=a.target.closest("[data-price-help]");o&&!o.contains(a.relatedTarget)&&!o.contains(t.activeElement)&&!o.dataset.pinned&&(s=setTimeout(()=>n(o,!1),180))}),t.addEventListener("focusin",a=>{const o=a.target.closest("[data-price-help]");o&&(i(),n(o,!0))}),t.addEventListener("focusout",a=>{const o=a.target.closest("[data-price-help]");o&&!o.contains(a.relatedTarget)&&n(o,!1)});function r(a,o){const c=[...a.querySelectorAll("[data-car-thumb]")];o=(o+c.length)%c.length,a.dataset.photo=String(o);const l=c[o].querySelector("img"),u=a.querySelector("[data-car-large]");u.src=l.src,u.alt=l.alt,a.querySelector("[data-car-photo-status]").textContent=`Photo ${o+1} of ${c.length}`,c.forEach((p,d)=>p.setAttribute("aria-pressed",String(d===o)))}t.addEventListener("click",a=>{const o=a.target.closest("[data-price-help]");if(a.target.closest("[data-help-trigger]")){const p=!!o.dataset.pinned;i(),p||(o.dataset.pinned="true",n(o,!0));return}o||i();const c=a.target.closest("button");if(!c)return;const l=c.closest(".car-listing");if(!l)return;const u=l.querySelector("dialog");c.hasAttribute("data-car-photo")?(e=c,r(u,Number(c.dataset.carPhoto)),u.showModal()):c.hasAttribute("data-car-close")?(u.close(),e==null||e.focus()):c.hasAttribute("data-car-step")?r(u,Number(u.dataset.photo||0)+Number(c.dataset.carStep)):c.hasAttribute("data-car-thumb")&&r(u,Number(c.dataset.carThumb))}),t.addEventListener("keydown",a=>{a.key==="Escape"&&i();const o=a.target.closest(".car-photo-dialog[open]");o&&(a.key==="ArrowLeft"||a.key==="ArrowRight")&&(a.preventDefault(),r(o,Number(o.dataset.photo||0)+(a.key==="ArrowRight"?1:-1)))})}function mi(t){const e=t.maxTurns,s=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
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
        <div class="brief-example"><h4>Worked example · illustrative values</h4><p>If the buyer can buy elsewhere for <strong>$22,000</strong> and the seller can trade in for <strong>$18,000</strong>, a deal at <strong>$20,000</strong> gives:</p><ul><li>Buyer: $22,000 − $20,000 = <strong>$2,000 surplus</strong>.</li><li>Seller: $20,000 − $18,000 = <strong>$2,000 surplus</strong>.</li></ul><p class="small">These are the paper’s baseline values; your instructor may set different fallbacks. A buyer paying above their fallback, or a seller accepting below theirs, earns negative surplus.</p></div>
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
      <p>A useful playbook is clear enough to guide decisions and flexible enough to respond to changing offers, fallback values and time remaining. These examples adapt the paper’s Figure 1; they illustrate instruction quality, not a guaranteed winning strategy.</p>
      <div class="brief-columns prompt-examples">
        <article class="prompt-example weak"><h4>Bad example · a rigid buyer script</h4><blockquote>“Offer $20,000 in the first round, then go up by $500 each round. Don’t go higher than $23,000.”</blockquote><p><strong>Why it is weak:</strong> this is the paper’s bad example. It ignores the supplied fallback, the seller’s responses and time remaining. With a $22,000 buyer fallback, it could authorise a loss.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable buyer playbook</h4><blockquote>“Open below the midpoint of the market-value range, without exceeding my supplied fallback. Increase offers in small steps when the seller also makes concessions. Aim to agree as far below my fallback as possible. Accept a favourable offer when further bargaining risks losing a worthwhile deal, especially near the turn limit. Never offer or accept a price above my fallback. Use the known car facts to explain offers; do not invent defects or alternatives.”</blockquote><p><strong>Why it is stronger:</strong> it sets an objective, anchors decisions to the actual fallback, and explains when to concede or accept.</p></article>
        <article class="prompt-example weak"><h4>Bad example · a vague seller instruction</h4><blockquote>“Get me the best price. Be tough and don’t give in.”</blockquote><p><strong>Why it is weak:</strong> it gives no opening approach, concession rule or acceptance condition. The agent has to guess how to balance price against the risk of no agreement.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable seller playbook</h4><blockquote>“Open near the upper end of the market-value range, but never below my supplied fallback. Support the price using the known car facts. Reduce the asking price in small steps in exchange for movement from the buyer. Aim to agree as far above my fallback as possible. Near the turn limit, accept an offer above my fallback if further bargaining risks no deal. Never offer or accept a price below my fallback. Do not invent features, service history or other buyers.”</blockquote><p><strong>Why it is stronger:</strong> it connects the seller’s objective to a price boundary, reciprocal concessions and a deadline decision.</p></article>
      </div>
      <p class="small">Develop your own approach and explain how it should adapt. Keep personal information out of your instructions.</p>
    </section>
  </section>`}function gi(t,e){if(We(t)!==P)return mi(t);const s=Qs(t),n=O(s.max),i=O(s.min),r=Math.round((s.min+s.max)/2),a=O(r),o=t.maxTurns,c=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
    <p class="eyebrow">THE BRIEF</p>
    <h2 id="student-brief-title">Write the strategy. Let your agent negotiate.</h2>
    <p>Write two sets of instructions: one for an AI agent buying a car and one for an AI agent selling it. Your objective is to help each agent maximise your <strong>surplus</strong>—how much better the deal is than your alternative outside this negotiation.</p>
    ${pi(t,e)}
    <div class="brief-columns brief-learning-intro">
      <section><h3>Negotiate this BMW</h3><p>Use the shared <strong>${i}–${n} KBB-style range</strong> when developing both strategies. Its lower endpoint is the seller’s trade-in option; its upper endpoint is the buyer’s alternative dealer price. Negotiate a single price for the car and the included equipment.</p><p>Both sides receive the same vehicle information. The mileage for this exercise is <strong>105,013 km</strong>. Base your arguments on the listing facts and the outside option supplied to your role.</p></section>
      <section aria-labelledby="brief-scoring"><h3 id="brief-scoring">Fallback and scoring</h3>
        <p>Your <strong>fallback</strong> is your outside option if you do not agree. For a buyer, it is the price of a similar car at a dealer. For a seller, it is the amount a dealer would pay as a trade-in.</p>
        <ul><li><strong>Buyer surplus = buyer fallback − agreed price.</strong> A lower price is better for the buyer.</li><li><strong>Seller surplus = agreed price − seller fallback.</strong> A higher price is better for the seller.</li><li><strong>No agreement = zero surplus for both sides.</strong> You earn the improvement over your fallback, not the fallback amount itself.</li></ul>
        <p>The KBB-style range shows both outside options: the seller’s trade-in value and the buyer’s alternative dealer price. Each agent receives its role’s fallback and your strategy instructions. Your strategy remains private. When you negotiate directly, your own fallback is shown on your turn.</p>
        <div class="brief-example"><h4>Worked example · this session</h4><p>If the buyer can buy elsewhere for <strong>${n}</strong> and the seller can trade in for <strong>${i}</strong>, a deal at <strong>${a}</strong> gives:</p><ul><li>Buyer: ${n} − ${a} = <strong>${O(s.max-r)} surplus</strong>.</li><li>Seller: ${a} − ${i} = <strong>${O(r-s.min)} surplus</strong>.</li></ul><p class="small">These use this session’s outside options, shown in the range above. A buyer paying above their fallback, or a seller accepting below theirs, earns negative surplus.</p></div>
      </section>
    </div>
    <div class="brief-columns brief-divider">
      <section aria-labelledby="brief-steps"><h3 id="brief-steps">Your steps</h3>
        <ol class="brief-steps"><li><strong>Write both strategies.</strong> Use the Buyer instructions and Seller instructions boxes below. Give each agent an opening approach, concession rules, and conditions for accepting or walking away.</li>
          ${c>0?`<li><strong>Practise and inspect.</strong> Choose “Practise with these prompts” to run your own buyer against your own seller. You may run up to <strong>${c} practice ${c===1?"match":"matches"}</strong> in this session. Read the transcript and check the offers, acceptance decisions and surplus. Practice is optional and does not count toward evaluation scores.</li><li><strong>Revise your playbooks.</strong> Improve unclear instructions using what you observed. “Save draft” saves your work; it does not submit it for evaluation.</li>`:"<li><strong>Review your playbooks.</strong> Practice is disabled for this session. Check that both strategies explain how to adapt to offers and respect the supplied fallback. “Save draft” saves your work; it does not submit it for evaluation.</li>"}
          <li><strong>Submit for evaluation.</strong> Submit both strategies, then wait for your instructor to start a round. In an agent tournament, your buyer meets other students’ sellers and your seller meets other students’ buyers.</li>
          <li><strong>Review and improve.</strong> Read your results and transcripts below, plus feedback when available. If you edit your strategies, submit again to use the revision in a later round. Rounds already started keep their original submissions.</li>
        </ol>
      </section>
      <section aria-labelledby="brief-rules"><h3 id="brief-rules">Rules for this session</h3>
        <ul><li><strong>Buyer moves first.</strong> There are at most <strong>${o} alternating messages in total</strong>: up to ${Math.ceil(o/2)} buyer messages and ${Math.floor(o/2)} seller messages. An offer, acceptance or decision to end the negotiation each uses one turn.</li>
          <li><strong>Offer, accept or end.</strong> Make offers in whole euros. A new offer replaces the previous one. You can accept only the other side’s latest exact offer; acceptance ends the negotiation at that price.</li>
          <li><strong>Agreement must happen within the limit.</strong> An unaccepted offer on the final turn is not a deal. Reaching the turn limit or choosing “End without agreement” gives both sides zero surplus.</li>
          <li><strong>Human turns have a deadline.</strong> If you negotiate directly, respond before the deadline shown on your turn. Missing it ends that match without agreement.</li>
          <li><strong>Follow the assigned role.</strong> Your instructor may run human, AI or mixed negotiations. Your counterpart’s type is revealed at debrief.</li>
        </ul>
      </section>
    </div>
    <section class="brief-divider" aria-labelledby="brief-prompts"><h3 id="brief-prompts">Good and bad prompt examples</h3>
      <p>A useful playbook is clear enough to guide decisions and flexible enough to respond to changing offers, fallback values and time remaining. These examples adapt the paper’s Figure 1; they illustrate instruction quality, not a guaranteed winning strategy.</p>
      <div class="brief-columns prompt-examples">
        <article class="prompt-example weak"><h4>Bad example · a rigid buyer script</h4><blockquote>“Offer ${a} in the first round, then go up by €500 each round. Don’t go higher than ${O(s.max+1e3)}.”</blockquote><p><strong>Why it is weak:</strong> this adapts the paper’s rigid-script example to this car. It ignores the supplied fallback, the seller’s responses and time remaining. With a ${n} buyer fallback, it could authorise a loss.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable buyer playbook</h4><blockquote>“Open below the midpoint of the KBB-style range, without exceeding my supplied fallback. Increase offers in small steps when the seller also makes concessions. Aim to agree as far below my fallback as possible. Accept a favourable offer when further bargaining risks losing a worthwhile deal, especially near the turn limit. Never offer or accept a price above my fallback. Use the known car facts to explain offers; do not invent defects or alternatives.”</blockquote><p><strong>Why it is stronger:</strong> it sets an objective, anchors decisions to the actual fallback, and explains when to concede or accept.</p></article>
        <article class="prompt-example weak"><h4>Bad example · a vague seller instruction</h4><blockquote>“Get me the best price. Be tough and don’t give in.”</blockquote><p><strong>Why it is weak:</strong> it gives no opening approach, concession rule or acceptance condition. The agent has to guess how to balance price against the risk of no agreement.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable seller playbook</h4><blockquote>“Open near the upper end of the KBB-style range, but never below my supplied fallback. Support the price using the known car facts. Reduce your offer price in small steps in exchange for movement from the buyer. Aim to agree as far above my fallback as possible. Near the turn limit, accept an offer above my fallback if further bargaining risks no deal. Never offer or accept a price below my fallback. Do not invent features, service history or other buyers.”</blockquote><p><strong>Why it is stronger:</strong> it connects the seller’s objective to a price boundary, reciprocal concessions and a deadline decision.</p></article>
      </div>
      <p class="small">Develop your own approach and explain how it should adapt. Keep personal information out of your instructions.</p>
    </section>
  </section>`}function Zs(t,e,{esc:s,date:n,feedbackContent:i}){if(!(t!=null&&t.length))return'<section class="card"><h2>Compare your rounds</h2><p>Your first evaluation round will appear here. After revising and submitting your strategies, run another round to compare results and feedback.</p></section>';const r=t.find(f=>f.id===(e==null?void 0:e.before))||t[Math.max(0,t.length-2)],a=t.find(f=>f.id===(e==null?void 0:e.after))||t.at(-1),o=(f,I=a.currency||"USD")=>O(f,I,2),c=f=>f==null?"—":`${(f*100).toFixed(1)}%`,l=f=>`Round ${f.number}`,u=f=>f.feedback?i({published:f.feedback}):["queued","generating","error"].includes(f.feedbackStatus)?i({status:f.feedbackStatus}):'<p class="small">No feedback is available for this round yet. It is generated after the full round finishes when automatic feedback is enabled. Earlier rounds without feedback are not generated retrospectively.</p>',p=(f,I,W)=>{const ge=f[I].strategies,re=W==null?void 0:W[I].strategies,st=re&&JSON.stringify(ge.map(x=>[x.kind,x.instructions]))!==JSON.stringify(re.map(x=>[x.kind,x.instructions]));return`<details class="round-strategy" data-round-strategy="${s(f.id)}-${I}"><summary>${I==="buyer"?"Buyer":"Seller"} strategy${re?` · ${st?"revised":"unchanged"}`:""}</summary>${ge.length?ge.map(x=>x.kind==="agent"?`<p class="small">Submitted version ${s(x.version)}</p><p class="feedback-text">${s(x.instructions)}</p>`:"<p>This role was played directly, without an agent strategy.</p>").join(""):"<p>You did not play this role in this round.</p>"}</details>`},d=(f,I)=>`<article class="round-card"><div class="section-heading"><h3>${l(f)}</h3><span class="badge ${f.complete?"agreed":"playing"}">${f.complete?"Complete":"Partial results"}</span></div><p class="small">${n(f.createdAt)} · ${f.completed}/${f.total} scored negotiations${f.pending?` · ${f.pending} running`:""}${f.errors?` · ${f.errors} needing attention`:""}${f.cancelled?` · ${f.cancelled} cancelled`:""}</p><dl class="round-metrics"><dt>Final score</dt><dd>${f.score==null?"Pending":f.score.toFixed(1)+" / 100"}</dd><dt>Buyer mean surplus</dt><dd>${o(f.buyer.meanSurplus,f.currency)} <small>(${f.buyer.completed} matches)</small></dd><dt>Seller mean surplus</dt><dd>${o(f.seller.meanSurplus,f.currency)} <small>(${f.seller.completed} matches)</small></dd><dt>Agreements</dt><dd>${f.agreements}/${f.completed} · ${c(f.agreementRate)}</dd></dl>${p(f,"buyer",I)}${p(f,"seller",I)}<h3 class="round-feedback-heading">Feedback for ${l(f).toLowerCase()}</h3>${u(f)}</article>`,y=t.length>1&&r.id!==a.id,S=(f,I,W="money")=>W==="money"&&(r.currency||"USD")!==(a.currency||"USD")?"Different currencies":f==null||I==null?"—":`${I-f>0?"+":I-f<0?"−":""}${W==="money"?o(Math.abs(I-f)):Math.abs((I-f)*100).toFixed(1)+" percentage points"}`,N=r.buyer.completed===a.buyer.completed&&r.seller.completed===a.seller.completed;return`<section class="card" id="round-comparison"><p class="eyebrow">YOUR PROGRESS</p><h2>Compare your rounds</h2><p>Each round shows only your evaluations, the strategies actually used, and that round's personalised feedback. Practice is excluded.</p><p class="small"><strong>How your score is calculated:</strong> Each negotiation earns 100 × your surplus ÷ available surplus (buyer value minus seller cost), limited to 0–100. No agreement earns 0. Your final score averages all your buyer and seller evaluations, rounded to one decimal. Capturing half the available surplus in every match earns 50/100. Practice is excluded. Your final score appears once all your matches have scored results.</p>${y?`<div class="form-grid"><label>Earlier round<select id="compare-before">${t.map((f,I)=>`<option value="${s(f.id)}" ${f.id===r.id?"selected":""} ${I>=t.indexOf(a)?"disabled":""}>${l(f)}</option>`).join("")}</select></label><label>Later round<select id="compare-after">${t.map((f,I)=>`<option value="${s(f.id)}" ${f.id===a.id?"selected":""} ${I<=t.indexOf(r)?"disabled":""}>${l(f)}</option>`).join("")}</select></label></div>${r.complete&&a.complete?`<div class="round-change"><strong>Change from ${l(r)} to ${l(a)}</strong><div class="metrics"><div><strong>${S(r.buyer.meanSurplus,a.buyer.meanSurplus)}</strong><span>buyer mean surplus</span></div><div><strong>${S(r.seller.meanSurplus,a.seller.meanSurplus)}</strong><span>seller mean surplus</span></div><div><strong>${S(r.agreementRate,a.agreementRate,"rate")}</strong><span>agreement rate</span></div></div>${N?"":'<p class="small">These rounds have different numbers of scored matches per role.</p>'}</div>`:'<p class="callout">A change summary appears when all your negotiations in both rounds have scored results. Running, failed and cancelled matches are not counted as zero.</p>'}`:'<p class="callout">Your first round is below. Revise and submit your strategies, then run another round to unlock a side-by-side comparison.</p>'}<div class="round-comparison-grid ${y?"":"single"}">${d(r)}${y?d(a,r):""}</div><p class="small">Outcomes can vary with counterpart strategies, game settings and AI responses. A higher score in one round does not by itself establish that a strategy is better.</p></section>`}const yi="/agentlab/assets/google-g-CpxN0HWb.png",bi=()=>{};var bs={};/**
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
 */const en=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[s++]=i:i<2048?(e[s++]=i>>6|192,e[s++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[s++]=i>>18|240,e[s++]=i>>12&63|128,e[s++]=i>>6&63|128,e[s++]=i&63|128):(e[s++]=i>>12|224,e[s++]=i>>6&63|128,e[s++]=i&63|128)}return e},vi=function(t){const e=[];let s=0,n=0;for(;s<t.length;){const i=t[s++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[s++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[s++],a=t[s++],o=t[s++],c=((i&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=t[s++],a=t[s++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const r=t[i],a=i+1<t.length,o=a?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,p=(r&3)<<4|o>>4;let d=(o&15)<<2|l>>6,y=l&63;c||(y=64,a||(d=64)),n.push(s[u],s[p],s[d],s[y])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(en(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const r=s[t.charAt(i++)],o=i<t.length?s[t.charAt(i)]:0;++i;const l=i<t.length?s[t.charAt(i)]:64;++i;const p=i<t.length?s[t.charAt(i)]:64;if(++i,r==null||o==null||l==null||p==null)throw new wi;const d=r<<2|o>>4;if(n.push(d),l!==64){const y=o<<4&240|l>>2;if(n.push(y),p!==64){const S=l<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ii=function(t){const e=en(t);return tn.encodeByteArray(e,!0)},sn=function(t){return Ii(t).replace(/\./g,"")},nn=function(t){try{return tn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _i(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ei=()=>_i().__FIREBASE_DEFAULTS__,Si=()=>{if(typeof process>"u"||typeof bs>"u")return;const t=bs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ki=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nn(t[1]);return e&&JSON.parse(e)},Zt=()=>{try{return bi()||Ei()||Si()||ki()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ti=t=>{var e,s;return(s=(e=Zt())==null?void 0:e.emulatorHosts)==null?void 0:s[t]},rn=()=>{var t;return(t=Zt())==null?void 0:t.config},an=t=>{var e;return(e=Zt())==null?void 0:e[`_${t}`]};/**
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
 */class on{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,n)=>{s?this.reject(s):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,n))}}}/**
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
 */function L(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ai(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function $i(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ci(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ri(){const t=L();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oi(){try{return typeof indexedDB=="object"}catch{return!1}}function Ni(){return new Promise((t,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),s||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{s=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(s){e(s)}})}/**
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
 */const Di="FirebaseError";class fe extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=Di,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ye.prototype.create)}}class Ye{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Li(r,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new fe(i,o,n)}}function Li(t,e){try{let s=0,n="";for(;s<t.length;){const i=t.indexOf("{$",s);if(i===-1){n+=t.substring(s);break}const r=t.indexOf("}",i+2);if(r===-1){n+=t.substring(s);break}const a=t.substring(i+2,r),o=e[a];n+=t.substring(s,i)+(o!=null?String(o):`<${a}?>`),s=r+1}return n}catch{return t}}function xi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ne(t,e){if(t===e)return!0;const s=Object.keys(t),n=Object.keys(e);for(const i of s){if(!n.includes(i))return!1;const r=t[i],a=e[i];if(vs(r)&&vs(a)){if(!Ne(r,a))return!1}else if(r!==a)return!1}for(const i of n)if(!s.includes(i))return!1;return!0}function vs(t){return t!==null&&typeof t=="object"}/**
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
 */function Je(t){const e=[];for(const[s,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ue(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,r]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Be(t){const e=t.indexOf("?");if(!e)return"";const s=t.indexOf("#",e);return t.substring(e,s>0?s:void 0)}function Mi(t,e){const s=new Ui(t,e);return s.subscribe.bind(s)}class Ui{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,n){let i;if(e===void 0&&s===void 0&&n===void 0)throw new Error("Missing Observer.");Bi(e,["next","error","complete"])?i=e:i={next:e,error:s,complete:n},i.next===void 0&&(i.next=Ot),i.error===void 0&&(i.error=Ot),i.complete===void 0&&(i.complete=Ot);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bi(t,e){if(typeof t!="object"||t===null)return!1;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}function Ot(){}/**
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
 */function es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fi(t){return(await fetch(t,{credentials:"include"})).ok}class De{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ve="[DEFAULT]";/**
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
 */class Vi{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const n=new on;if(this.instancesDeferred.set(s,n),this.isInitialized(s)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:s});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wi(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[s,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ve){return this.instances.has(e)}getOptions(e=ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:s});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&a.resolve(i)}return i}onInit(e,s){const n=this.normalizeInstanceIdentifier(s),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,s){const n=this.onInitCallbacks.get(s);if(n)for(const i of n)try{i(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Hi(e),options:s}),this.instances.set(e,n),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ve){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hi(t){return t===ve?void 0:t}function Wi(t){return t.instantiationMode==="EAGER"}/**
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
 */class ji{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Vi(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_||(_={}));const qi={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Ki=_.INFO,Gi={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},zi=(t,e,...s)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Gi[e];if(i)console[i](`[${n}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cn{constructor(e){this.name=e,this._logLevel=Ki,this._logHandler=zi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...e),this._logHandler(this,_.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...e),this._logHandler(this,_.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_.INFO,...e),this._logHandler(this,_.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_.WARN,...e),this._logHandler(this,_.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...e),this._logHandler(this,_.ERROR,...e)}}const Yi=(t,e)=>e.some(s=>t instanceof s);let ws,Is;function Ji(){return ws||(ws=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xi(){return Is||(Is=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ln=new WeakMap,Vt=new WeakMap,dn=new WeakMap,Nt=new WeakMap,ts=new WeakMap;function Qi(t){const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{s(pe(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(s=>{s instanceof IDBCursor&&ln.set(s,t)}).catch(()=>{}),ts.set(e,t),e}function Zi(t){if(Vt.has(t))return;const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{s(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});Vt.set(t,e)}let Ht={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return Vt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dn.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return pe(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function er(t){Ht=t(Ht)}function tr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call(Dt(this),e,...s);return dn.set(n,e.sort?e.sort():[e]),pe(n)}:Xi().includes(t)?function(...e){return t.apply(Dt(this),e),pe(ln.get(this))}:function(...e){return pe(t.apply(Dt(this),e))}}function sr(t){return typeof t=="function"?tr(t):(t instanceof IDBTransaction&&Zi(t),Yi(t,Ji())?new Proxy(t,Ht):t)}function pe(t){if(t instanceof IDBRequest)return Qi(t);if(Nt.has(t))return Nt.get(t);const e=sr(t);return e!==t&&(Nt.set(t,e),ts.set(e,t)),e}const Dt=t=>ts.get(t);function nr(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=pe(a);return n&&a.addEventListener("upgradeneeded",c=>{n(pe(a.result),c.oldVersion,c.newVersion,pe(a.transaction),c)}),s&&a.addEventListener("blocked",c=>s(c.oldVersion,c.newVersion,c)),o.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const ir=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],Lt=new Map;function _s(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lt.get(e))return Lt.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=rr.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ir.includes(s)))return;const r=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[s](...o),i&&c.done]))[0]};return Lt.set(e,r),r}er(t=>({...t,get:(e,s,n)=>_s(e,s)||t.get(e,s,n),has:(e,s)=>!!_s(e,s)||t.has(e,s)}));/**
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
 */class ar{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(or(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function or(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wt="@firebase/app",Es="0.16.2";/**
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
 */const ee=new cn("@firebase/app"),cr="@firebase/app-compat",lr="@firebase/analytics-compat",dr="@firebase/analytics",ur="@firebase/app-check-compat",hr="@firebase/app-check",pr="@firebase/auth",fr="@firebase/auth-compat",mr="@firebase/database",gr="@firebase/data-connect",yr="@firebase/database-compat",br="@firebase/functions",vr="@firebase/functions-compat",wr="@firebase/installations",Ir="@firebase/installations-compat",_r="@firebase/messaging",Er="@firebase/messaging-compat",Sr="@firebase/performance",kr="@firebase/performance-compat",Tr="@firebase/remote-config",Ar="@firebase/remote-config-compat",$r="@firebase/storage",Cr="@firebase/storage-compat",Pr="@firebase/firestore",Rr="@firebase/ai",Or="@firebase/firestore-compat",Nr="firebase",Dr="12.19.0";/**
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
 */const jt="[DEFAULT]",Lr={[Wt]:"fire-core",[cr]:"fire-core-compat",[dr]:"fire-analytics",[lr]:"fire-analytics-compat",[hr]:"fire-app-check",[ur]:"fire-app-check-compat",[pr]:"fire-auth",[fr]:"fire-auth-compat",[mr]:"fire-rtdb",[gr]:"fire-data-connect",[yr]:"fire-rtdb-compat",[br]:"fire-fn",[vr]:"fire-fn-compat",[wr]:"fire-iid",[Ir]:"fire-iid-compat",[_r]:"fire-fcm",[Er]:"fire-fcm-compat",[Sr]:"fire-perf",[kr]:"fire-perf-compat",[Tr]:"fire-rc",[Ar]:"fire-rc-compat",[$r]:"fire-gcs",[Cr]:"fire-gcs-compat",[Pr]:"fire-fst",[Or]:"fire-fst-compat",[Rr]:"fire-vertex","fire-js":"fire-js",[Nr]:"fire-js-all"};/**
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
 */const pt=new Map,xr=new Map,qt=new Map;function Ss(t,e){try{t.container.addComponent(e)}catch(s){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function je(t){const e=t.name;if(qt.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;qt.set(e,t);for(const s of pt.values())Ss(s,t);for(const s of xr.values())Ss(s,t);return!0}function un(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}function M(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Mr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},J=new Ye("app","Firebase",Mr);/**
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
 */class Ur{constructor(e,s,n){this._isDeleted=!1,this._options={...e},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}/**
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
 */const Xe=Dr;function hn(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const n={name:jt,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw J.create("bad-app-name",{appName:String(i)});if(s||(s=rn()),!s)throw J.create("no-options");const r=pt.get(i);if(r)if(Ne(s,r.options)){if(Ne(n,r.config))return r;throw J.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(n)})}else throw J.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(s)});const a=new ji(i);for(const c of qt.values())a.addComponent(c);const o=new Ur(s,n,a);return pt.set(i,o),o}function Br(t=jt){const e=pt.get(t);if(!e&&t===jt&&rn())return hn();if(!e)throw J.create("no-app",{appName:t});return e}function Pe(t,e,s){let n=Lr[t]??t;s&&(n+=`-${s}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${n}" with version "${e}":`];i&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}je(new De(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Fr="firebase-heartbeat-database",Vr=1,qe="firebase-heartbeat-store";let xt=null;function pn(){return xt||(xt=nr(Fr,Vr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qe)}catch(s){console.warn(s)}}}}).catch(t=>{throw J.create("idb-open",{originalErrorMessage:t.message})})),xt}async function Hr(t){try{const s=(await pn()).transaction(qe),n=await s.objectStore(qe).get(fn(t));return await s.done,n}catch(e){if(e instanceof fe)ee.warn(e.message);else{const s=J.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ee.warn(s.message)}}}async function ks(t,e){try{const n=(await pn()).transaction(qe,"readwrite");await n.objectStore(qe).put(e,fn(t)),await n.done}catch(s){if(s instanceof fe)ee.warn(s.message);else{const n=J.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ee.warn(n.message)}}}function fn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wr=1024,jr=30;class qr{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Gr(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,s;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ts();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>jr){const a=zr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ee.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Ts(),{heartbeatsToSend:n,unsentEntries:i}=Kr(this._heartbeatsCache.heartbeats),r=sn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=s,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(s){return ee.warn(s),""}}}function Ts(){return new Date().toISOString().substring(0,10)}function Kr(t,e=Wr){const s=[];let n=t.slice();for(const i of t){const r=s.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),As(s)>e){r.dates.pop();break}}else if(s.push({agent:i.agent,dates:[i.date]}),As(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class Gr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oi()?Ni().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Hr(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return ks(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return ks(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function As(t){return sn(JSON.stringify({version:2,heartbeats:t})).length}function zr(t){if(t.length===0)return-1;let e=0,s=t[0].date;for(let n=1;n<t.length;n++)t[n].date<s&&(s=t[n].date,e=n);return e}/**
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
 */function Yr(t){je(new De("platform-logger",e=>new ar(e),"PRIVATE")),je(new De("heartbeat",e=>new qr(e),"PRIVATE")),Pe(Wt,Es,t),Pe(Wt,Es,"esm2020"),Pe("fire-js","")}/**
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
 */Yr("");var Jr="firebase",Xr="12.19.0";/**
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
 */Pe(Jr,Xr,"app");function mn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qr=mn,gn=new Ye("auth","Firebase",mn());/**
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
 */const ft=new cn("@firebase/auth");function rt(t,...e){ft.logLevel<=_.WARN&&ft.warn(`Auth (${Xe}): ${t}`,...e)}function at(t,...e){ft.logLevel<=_.ERROR&&ft.error(`Auth (${Xe}): ${t}`,...e)}/**
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
 */function U(t,...e){throw ss(t,...e)}function V(t,...e){return ss(t,...e)}function kt(t,e,s){const n={...Qr(),[e]:s};return new Ye("auth","Firebase",n).create(e,{appName:t.name})}function Z(t){return kt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yn(t,e,s){const n=s;if(!(e instanceof n))throw n.name!==e.constructor.name&&U(t,"argument-error"),kt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ss(t,...e){if(typeof t!="string"){const s=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(s,...n)}return gn.create(t,...e)}function g(t,e,...s){if(!t)throw ss(e,...s)}function X(t){const e="INTERNAL ASSERTION FAILED: "+t;throw at(e),new Error(e)}function te(t,e){t||X(e)}/**
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
 */function Kt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Zr(){return $s()==="http:"||$s()==="https:"}function $s(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ea(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zr()||Ci()||"connection"in navigator)?navigator.onLine:!0}function ta(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qe{constructor(e,s){this.shortDelay=e,this.longDelay=s,te(s>e,"Short delay should be less than long delay!"),this.isMobile=Ai()||Pi()}get(){return ea()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ns(t,e){te(t.emulator,"Emulator should always be set here");const{url:s}=t.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
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
 */class bn{static initialize(e,s,n){this.fetchImpl=e,s&&(this.headersImpl=s),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;X("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;X("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;X("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const na=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ia=new Qe(3e4,6e4);function se(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ne(t,e,s,n,i={}){return vn(t,i,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const o=Je({...a,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...r};return $i()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&es(t.emulatorConfig.host)&&(l.credentials="include"),bn.fetch()(await wn(t,t.config.apiHost,s,o),l)})}async function vn(t,e,s){t._canInitEmulator=!1;const n={...sa,...e};try{const i=new aa(t),r=await Promise.race([s(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw it(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw it(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw it(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw it(t,"user-disabled",a);const u=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kt(t,u,l);U(t,u)}}catch(i){if(i instanceof fe)throw i;U(t,"network-request-failed",{message:String(i)})}}async function Ze(t,e,s,n,i={}){const r=await ne(t,e,s,n,i);return"mfaPendingCredential"in r&&U(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function wn(t,e,s,n){const i=`${e}${s}?${n}`,r=t,a=r.config.emulator?ns(t.config,i):`${t.config.apiScheme}://${i}`;return na.includes(s)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function ra(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aa{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,n)=>{this.timer=setTimeout(()=>n(V(this.auth,"network-request-failed")),ia.get())})}}function it(t,e,s){const n={appName:t.name};s.email&&(n.email=s.email),s.phoneNumber&&(n.phoneNumber=s.phoneNumber);const i=V(t,e,n);return i.customData._tokenResponse=s,i}function Cs(t){return t!==void 0&&t.enterprise!==void 0}class oa{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===e)return ra(s.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ca(t,e){return ne(t,"GET","/v2/recaptchaConfig",se(t,e))}/**
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
 */async function la(t,e){return ne(t,"POST","/v1/accounts:delete",e)}async function mt(t,e){return ne(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ve(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function da(t,e=!1){const s=B(t),n=await s.getIdToken(e),i=is(n);g(i&&i.exp&&i.auth_time&&i.iat,s.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:n,authTime:Ve(Mt(i.auth_time)),issuedAtTime:Ve(Mt(i.iat)),expirationTime:Ve(Mt(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Mt(t){return Number(t)*1e3}function is(t){const[e,s,n]=t.split(".");if(e===void 0||s===void 0||n===void 0)return at("JWT malformed, contained fewer than 3 sections"),null;try{const i=nn(s);return i?JSON.parse(i):(at("Failed to decode base64 JWT payload"),null)}catch(i){return at("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ps(t){const e=is(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ke(t,e,s=!1){if(s)return e;try{return await e}catch(n){throw n instanceof fe&&ua(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function ua({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ha{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gt{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ve(this.lastLoginAt),this.creationTime=Ve(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gt(t){var p;const e=t.auth,s=await t.getIdToken(),n=await Ke(t,mt(e,{idToken:s}));g(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?_n(i.providerUserInfo):[],a=pa(t.providerData,r),o=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=o?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Gt(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function In(t){const e=B(t);await gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pa(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function _n(t){return t.map(({providerId:e,...s})=>({providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
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
 */async function fa(t,e){const s=await vn(t,{},async()=>{const n=Je({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,a=await wn(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:n};return t.emulatorConfig&&es(t.emulatorConfig.host)&&(c.credentials="include"),bn.fetch()(a,c)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function ma(t,e){return ne(t,"POST","/v2/accounts:revokeToken",se(t,e))}/**
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
 */class Re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const s="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ps(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}updateFromIdToken(e){g(e.length!==0,"internal-error");const s=Ps(e);this.updateTokensAndExpiration(e,null,s)}async getToken(e,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:n,refreshToken:i,expiresIn:r}=await fa(e,s);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,s,n){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,s){const{refreshToken:n,accessToken:i,expirationTime:r}=s,a=new Re;return n&&(g(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(g(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(g(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return X("not implemented")}}/**
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
 */function ae(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class F{constructor({uid:e,auth:s,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new ha(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const s=await Ke(this,this.stsTokenManager.getToken(this.auth,e));return g(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return da(this,e)}reload(){return In(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>({...s})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const s=new F({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),s&&await gt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(M(this.auth.app))return Promise.reject(Z(this.auth));const e=await this.getIdToken();return await Ke(this,la(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){const n=s.displayName??void 0,i=s.email??void 0,r=s.phoneNumber??void 0,a=s.photoURL??void 0,o=s.tenantId??void 0,c=s._redirectEventId??void 0,l=s.createdAt??void 0,u=s.lastLoginAt??void 0,{uid:p,emailVerified:d,isAnonymous:y,providerData:S,stsTokenManager:N}=s;g(p&&N,e,"internal-error");const f=Re.fromJSON(this.name,N);g(typeof p=="string",e,"internal-error"),ae(n,e.name),ae(i,e.name),g(typeof d=="boolean",e,"internal-error"),g(typeof y=="boolean",e,"internal-error"),ae(r,e.name),ae(a,e.name),ae(o,e.name),ae(c,e.name),ae(l,e.name),ae(u,e.name);const I=new F({uid:p,auth:e,email:i,emailVerified:d,displayName:n,isAnonymous:y,photoURL:a,phoneNumber:r,tenantId:o,stsTokenManager:f,createdAt:l,lastLoginAt:u});return S&&Array.isArray(S)&&(I.providerData=S.map(W=>({...W}))),c&&(I._redirectEventId=c),I}static async _fromIdTokenResponse(e,s,n=!1){const i=new Re;i.updateFromServerResponse(s);const r=new F({uid:s.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await gt(r),r}static async _fromGetAccountInfoResponse(e,s,n){const i=s.users[0];g(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?_n(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),o=new Re;o.updateFromIdToken(n);const c=new F({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Gt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Rs=new Map;function Q(t){te(t instanceof Function,"Expected a class definition");let e=Rs.get(t);return e?(te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rs.set(t,e),e)}/**
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
 */class En{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}En.type="NONE";const Os=En;/**
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
 */function ot(t,e,s){return`firebase:${t}:${e}:${s}`}class Ie{constructor(e,s,n){this.persistence=e,this.auth=s,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ot(this.userKey,i.apiKey,r),this.fullPersistenceKey=ot("persistence",i.apiKey,r),this.boundEventHandler=s._onStorageEvent.bind(s);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const s=await mt(this.auth,{idToken:e}).catch(()=>{});return s?F._fromGetAccountInfoResponse(this.auth,s,e):null}return F._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,s,n="authUser"){if(!s.length)return new Ie(Q(Os),e,n);const i=(await Promise.all(s.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let r=i[0]||Q(Os);const a=ot(n,e.config.apiKey,e.name);let o=null;for(const l of s)try{const u=await l._get(a);if(u){let p;if(typeof u=="string"){const d=await mt(e,{idToken:u}).catch(()=>{});if(!d)break;p=await F._fromGetAccountInfoResponse(e,d,u)}else p=F._fromJSON(e,u);l!==r&&(o=p),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ie(r,e,n):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(s.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new Ie(r,e,n))}}/**
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
 */function Ns(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(An(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cn(e))return"Blackberry";if(Pn(e))return"Webos";if(kn(e))return"Safari";if((e.includes("chrome/")||Tn(e))&&!e.includes("edge/"))return"Chrome";if($n(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(s);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Sn(t=L()){return/firefox\//i.test(t)}function kn(t=L()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tn(t=L()){return/crios\//i.test(t)}function An(t=L()){return/iemobile/i.test(t)}function $n(t=L()){return/android/i.test(t)}function Cn(t=L()){return/blackberry/i.test(t)}function Pn(t=L()){return/webos/i.test(t)}function rs(t=L()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ga(t=L()){var e;return rs(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ya(){return Ri()&&document.documentMode===10}function Rn(t=L()){return rs(t)||$n(t)||Pn(t)||Cn(t)||/windows phone/i.test(t)||An(t)}/**
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
 */function On(t,e=[]){let s;switch(t){case"Browser":s=Ns(L());break;case"Worker":s=`${Ns(L())}-${t}`;break;default:s=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${Xe}/${n}`}/**
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
 */class ba{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const n=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});n.onAbort=s,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const s=[];try{for(const n of this.queue)await n(e),n.onAbort&&s.push(n.onAbort)}catch(n){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function va(t,e={}){return ne(t,"GET","/v2/passwordPolicy",se(t,e))}/**
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
 */const wa=6;class Ia{constructor(e){var n;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??wa,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(e,s){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(s.meetsMinPasswordLength=e.length>=n),i&&(s.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(s,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,s,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class _a{constructor(e,s,n,i){this.app=e,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ds(this),this.idTokenSubscription=new Ds(this),this.beforeStateQueue=new ba(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=Q(s)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted){try{this.persistenceManager=await Ie.create(this,e)}catch(a){rt(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Ie.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(s)}catch(a){rt(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const s=await mt(this,{idToken:e}),n=await F._fromGetAccountInfoResponse(this,s,e);await this.directlySetCurrentUser(n)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(M(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let n=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,o=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(n=c.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){try{await gt(e)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ta()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(M(this.app))return Promise.reject(Z(this));const s=e?B(e):null;return s&&g(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return M(this.app)?Promise.reject(Z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return M(this.app)?Promise.reject(Z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Q(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await va(this),s=new Ia(e);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ye("auth","Firebase",e())}onAuthStateChanged(e,s,n){return this.registerStateListener(this.authStateSubscription,e,s,n)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,n){return this.registerStateListener(this.idTokenSubscription,e,s,n)}authStateReady(){return new Promise((e,s)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},s)}})}async revokeAccessToken(e){if(this.currentUser){const s=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:s};this.tenantId!=null&&(n.tenantId=this.tenantId),await ma(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,s){const n=await this.getOrInitRedirectPersistenceManager(s);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&Q(e)||this._popupRedirectResolver;g(s,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[Q(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,n;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,n,i){if(this._deleted)return()=>{};const r=typeof s=="function"?s:s.next.bind(s);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}).catch(c=>{if(!a)if(typeof s!="function"&&s.error)s.error(c);else if(n)n(c);else throw c}),typeof s=="function"){const c=e.addObserver(s,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(s);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(s){const n=(s==null?void 0:s.message)||String(s),i=kt(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw i.customData={originalError:s},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=On(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var s;if(M(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return e!=null&&e.error&&rt(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ie(t){return B(t)}class Ds{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mi(s=>this.observer=s)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ea(t){Tt=t}function Nn(t){return Tt.loadJS(t)}function Sa(){return Tt.recaptchaEnterpriseScript}function ka(){return Tt.gapiScript}function Ta(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Aa{constructor(){this.enterprise=new $a}ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}class $a{ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}/**
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
 */const Ca="recaptcha-enterprise",Dn="NO_RECAPTCHA",Ls="onFirebaseAuthREInstanceReady";class oe{constructor(e){this.type=Ca,this.auth=ie(e)}async verify(e="verify",s=!1){async function n(r){if(!s){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,o)=>{ca(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new oa(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(r,a,o){const c=window.grecaptcha;Cs(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{a(l)}).catch(()=>{a(Dn)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Aa().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{n(this.auth).then(async o=>{if(!s&&Cs(window.grecaptcha)&&oe.scriptInjectionDeferred)await oe.scriptInjectionDeferred.promise,i(o,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Sa();c.length!==0&&(c+=o+`&onload=${Ls}`),oe.scriptInjectionDeferred=new on,window[Ls]=()=>{var l;(l=oe.scriptInjectionDeferred)==null||l.resolve()},Nn(c).then(()=>{var l;return(l=oe.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{i(o,r,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}oe.scriptInjectionDeferred=null;async function xs(t,e,s,n=!1,i=!1){const r=new oe(t);let a;if(i)a=Dn;else try{a=await r.verify(s)}catch{a=await r.verify(s,!0)}const o={...e};if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,l=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yt(t,e,s,n,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await xs(t,e,s,s==="getOobCode");return n(t,a)}else return n(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xs(t,e,s,s==="getOobCode");return n(t,o)}else return Promise.reject(a)})}/**
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
 */function Pa(t,e){const s=un(t,"auth");if(s.isInitialized()){const i=s.getImmediate(),r=s.getOptions();if(Ne(r,e??{}))return i;U(i,"already-initialized")}return s.initialize({options:e})}function Ra(t,e){const s=(e==null?void 0:e.persistence)||[],n=(Array.isArray(s)?s:[s]).map(Q);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Oa(t,e,s){const n=ie(t);g(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=Ln(e),{host:a,port:o}=Na(e),c=o===null?"":`:${o}`,l={url:`${r}//${a}${c}/`},u=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){g(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),g(Ne(l,n.config.emulator)&&Ne(u,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=u,n.settings.appVerificationDisabledForTesting=!0,es(a)?Fi(`${r}//${a}${c}`):Da()}function Ln(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Na(t){const e=Ln(t),s=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!s)return{host:"",port:null};const n=s[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:Ms(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:Ms(a)}}}function Ms(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Da(){function t(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class as{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return X("not implemented")}_getIdTokenResponse(e){return X("not implemented")}_linkToIdToken(e,s){return X("not implemented")}_getReauthenticationResolver(e){return X("not implemented")}}async function La(t,e){return ne(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xa(t,e){return Ze(t,"POST","/v1/accounts:signInWithPassword",se(t,e))}async function os(t,e){return ne(t,"POST","/v1/accounts:sendOobCode",se(t,e))}async function Ma(t,e){return os(t,e)}async function Ua(t,e){return os(t,e)}async function Ba(t,e){return os(t,e)}/**
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
 */async function Fa(t,e){return Ze(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}async function Va(t,e){return Ze(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}/**
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
 */class Ge extends as{constructor(e,s,n,i=null){super("password",n),this._email=e,this._password=s,this._tenantId=i}static _fromEmailAndPassword(e,s){return new Ge(e,s,"password")}static _fromEmailAndCode(e,s,n=null){return new Ge(e,s,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yt(e,s,"signInWithPassword",xa);case"emailLink":return Fa(e,{email:this._email,oobCode:this._password});default:U(e,"internal-error")}}async _linkToIdToken(e,s){switch(this.signInMethod){case"password":const n={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yt(e,n,"signUpPassword",La);case"emailLink":return Va(e,{idToken:s,email:this._email,oobCode:this._password});default:U(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oe(t,e){return Ze(t,"POST","/v1/accounts:signInWithIdp",se(t,e))}/**
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
 */const Ha="http://localhost";class Te extends as{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):U("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...r}=s;if(!n||!i)return null;const a=new Te(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const s=this.buildRequest();return Oe(e,s)}_linkToIdToken(e,s){const n=this.buildRequest();return n.idToken=s,Oe(e,n)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,Oe(e,s)}buildRequest(){const e={requestUri:Ha,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=Je(s)}return e}}/**
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
 */function Wa(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ja(t){const e=Ue(Be(t)).link,s=e?Ue(Be(e)).deep_link_id:null,n=Ue(Be(t)).deep_link_id;return(n?Ue(Be(n)).link:null)||n||s||e||t}class cs{constructor(e){const s=Ue(Be(e)),n=s.apiKey??null,i=s.oobCode??null,r=Wa(s.mode??null);g(n&&i&&r,"argument-error"),this.apiKey=n,this.operation=r,this.code=i,this.continueUrl=s.continueUrl??null,this.languageCode=s.lang??null,this.tenantId=s.tenantId??null}static parseLink(e){const s=ja(e);try{return new cs(s)}catch{return null}}}/**
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
 */class xe{constructor(){this.providerId=xe.PROVIDER_ID}static credential(e,s){return Ge._fromEmailAndPassword(e,s)}static credentialWithLink(e,s){const n=cs.parseLink(s);return g(n,"argument-error"),Ge._fromEmailAndCode(e,n.code,n.tenantId)}}xe.PROVIDER_ID="password";xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class At{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class et extends At{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ce extends et{constructor(){super("facebook.com")}static credential(e){return Te._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";ce.PROVIDER_ID="facebook.com";/**
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
 */class j extends et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return Te._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:n}=e;if(!s&&!n)return null;try{return j.credential(s,n)}catch{return null}}}j.GOOGLE_SIGN_IN_METHOD="google.com";j.PROVIDER_ID="google.com";/**
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
 */class le extends et{constructor(){super("github.com")}static credential(e){return Te._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.GITHUB_SIGN_IN_METHOD="github.com";le.PROVIDER_ID="github.com";/**
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
 */class de extends et{constructor(){super("twitter.com")}static credential(e,s){return Te._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:n}=e;if(!s||!n)return null;try{return de.credential(s,n)}catch{return null}}}de.TWITTER_SIGN_IN_METHOD="twitter.com";de.PROVIDER_ID="twitter.com";/**
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
 */async function qa(t,e){return Ze(t,"POST","/v1/accounts:signUp",se(t,e))}/**
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
 */class Ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,n,i=!1){const r=await F._fromIdTokenResponse(e,n,i),a=Us(n);return new Ae({user:r,providerId:a,_tokenResponse:n,operationType:s})}static async _forOperation(e,s,n){await e._updateTokensIfNecessary(n,!0);const i=Us(n);return new Ae({user:e,providerId:i,_tokenResponse:n,operationType:s})}}function Us(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bt extends fe{constructor(e,s,n,i){super(s.code,s.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,bt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,s,n,i){return new bt(e,s,n,i)}}function xn(t,e,s,n){return(e==="reauthenticate"?s._getReauthenticationResolver(t):s._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?bt._fromErrorAndOperation(t,r,e,n):r})}async function Ka(t,e,s=!1){const n=await Ke(t,e._linkToIdToken(t.auth,await t.getIdToken()),s);return Ae._forOperation(t,"link",n)}/**
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
 */async function Ga(t,e,s=!1){const{auth:n}=t;if(M(n.app))return Promise.reject(Z(n));const i="reauthenticate";try{const r=await Ke(t,xn(n,i,e,t),s);g(r.idToken,n,"internal-error");const a=is(r.idToken);g(a,n,"internal-error");const{sub:o}=a;return g(t.uid===o,n,"user-mismatch"),Ae._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&U(n,"user-mismatch"),r}}/**
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
 */async function Mn(t,e,s=!1){if(M(t.app))return Promise.reject(Z(t));const n="signIn",i=await xn(t,n,e),r=await Ae._fromIdTokenResponse(t,n,i);return s||await t._updateCurrentUser(r.user),r}async function za(t,e){return Mn(ie(t),e)}/**
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
 */function ls(t,e,s){var n;g(((n=s.url)==null?void 0:n.length)>0,t,"invalid-continue-uri"),g(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),g(typeof s.linkDomain>"u"||s.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=s.url,e.dynamicLinkDomain=s.dynamicLinkDomain,e.linkDomain=s.linkDomain,e.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(g(s.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=s.iOS.bundleId),s.android&&(g(s.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=s.android.installApp,e.androidMinimumVersionCode=s.android.minimumVersion,e.androidPackageName=s.android.packageName)}/**
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
 */async function Un(t){const e=ie(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ya(t,e,s){const n=ie(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};s&&ls(n,i,s),await yt(n,i,"getOobCode",Ua)}async function Ja(t,e,s){if(M(t.app))return Promise.reject(Z(t));const n=ie(t),a=await yt(n,{returnSecureToken:!0,email:e,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qa).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Un(t),c}),o=await Ae._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function Xa(t,e,s){return M(t.app)?Promise.reject(Z(t)):za(B(t),xe.credential(e,s)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Un(t),n})}async function Qa(t,e){const s=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ls(s.auth,i,e);const{email:r}=await Ma(s.auth,i);r!==t.email&&await t.reload()}async function Za(t,e,s){const n=B(t),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};s&&ls(n.auth,r,s);const{email:a}=await Ba(n.auth,r);a!==t.email&&await t.reload()}function eo(t,e,s,n){return B(t).onIdTokenChanged(e,s,n)}function to(t,e,s){return B(t).beforeAuthStateChanged(e,s)}function so(t,e,s,n){return B(t).onAuthStateChanged(e,s,n)}function no(t){return B(t).signOut()}const vt="__sak";/**
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
 */class Bn{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(vt,"1"),this.storage.removeItem(vt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const io=1e3,ro=10;class Fn extends Bn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const n=this.storage.getItem(s),i=this.localCache[s];n!==i&&e(s,i,n)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;s?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!s&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);ya()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ro):i()}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:n}),!0)})},io)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fn.type="LOCAL";const ao=Fn;/**
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
 */class Vn extends Bn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}Vn.type="SESSION";const Hn=Vn;/**
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
 */function oo(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
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
 */class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(i=>i.isListeningto(e));if(s)return s;const n=new $t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:n,eventType:i,data:r}=s.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;s.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(a).map(async l=>l(s.origin,r)),c=await oo(o);s.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$t.receivers=[];/**
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
 */function ds(t="",e=10){let s="";for(let n=0;n<e;n++)s+=Math.floor(Math.random()*10);return t+s}/**
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
 */class co{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const l=ds("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(p){const d=p;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:s},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function q(){return window}function lo(t){q().location.href=t}/**
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
 */function Wn(){return typeof q().WorkerGlobalScope<"u"&&typeof q().importScripts=="function"}async function uo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ho(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function po(){return Wn()?self:null}/**
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
 */const jn="firebaseLocalStorageDb",fo=1,wt="firebaseLocalStorage",qn="fbase_key";class tt{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Ct(t,e){return t.transaction([wt],e?"readwrite":"readonly").objectStore(wt)}function mo(){const t=indexedDB.deleteDatabase(jn);return new tt(t).toPromise()}function Kn(){const t=indexedDB.open(jn,fo);return new Promise((e,s)=>{t.addEventListener("error",()=>{s(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(wt,{keyPath:qn})}catch(i){s(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(wt)?e(n):(n.close(),await mo(),e(await Kn()))})})}async function Bs(t,e,s){const n=Ct(t,!0).put({[qn]:e,value:s});return new tt(n).toPromise()}async function go(t,e){const s=Ct(t,!1).get(e),n=await new tt(s).toPromise();return n===void 0?null:n.value}function Fs(t,e){const s=Ct(t,!0).delete(e);return new tt(s).toPromise()}const yo=800,bo=3;class Gn{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Kn(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let s=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(s++>bo)throw n;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Wn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(po()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var s,n;if(this.activeServiceWorker=await uo(),!this.activeServiceWorker)return;this.sender=new co(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(s=e[0])!=null&&s.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ho()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Bs(e,vt,"1"),await Fs(e,vt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bs(n,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(n=>go(n,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fs(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const r=Ct(i,!1).getAll();return new tt(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),s.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),s.push(i));return s}catch(e){return this.isClosing||rt(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Gn.type="LOCAL";const vo=Gn;new Qe(3e4,6e4);/**
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
 */function us(t,e){return e?Q(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hs extends as{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oe(e,this._buildIdpRequest())}_linkToIdToken(e,s){return Oe(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return Oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function wo(t){return Mn(t.auth,new hs(t),t.bypassAuthState)}function Io(t){const{auth:e,user:s}=t;return g(s,e,"internal-error"),Ga(s,new hs(t),t.bypassAuthState)}async function _o(t){const{auth:e,user:s}=t;return g(s,e,"internal-error"),Ka(s,new hs(t),t.bypassAuthState)}/**
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
 */class zn{constructor(e,s,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:n,postBody:i,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:s,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wo;case"linkViaPopup":case"linkViaRedirect":return _o;case"reauthViaPopup":case"reauthViaRedirect":return Io;default:U(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Eo=new Qe(2e3,1e4);async function So(t,e,s){if(M(t.app))return Promise.reject(V(t,"operation-not-supported-in-this-environment"));const n=ie(t);yn(t,e,At);const i=us(n,s);return new ue(n,"signInViaPopup",e,i).executeNotNull()}async function ko(t,e,s){const n=B(t);yn(n.auth,e,At);const i=us(n.auth,s);return new ue(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class ue extends zn{constructor(e,s,n,i,r){super(e,s,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ue.currentPopupAction&&ue.currentPopupAction.cancel(),ue.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=ds();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(V(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(V(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ue.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,n;if((n=(s=this.authWindow)==null?void 0:s.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(V(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Eo.get())};e()}}ue.currentPopupAction=null;/**
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
 */const To="pendingRedirect",ct=new Map;class Ao extends zn{constructor(e,s,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,n),this.eventId=null}async execute(){let e=ct.get(this.auth._key());if(!e){try{const n=await $o(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(s){e=()=>Promise.reject(s)}ct.set(this.auth._key(),e)}return this.bypassAuthState||ct.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $o(t,e){const s=Ro(e),n=Po(t);if(!await n._isAvailable())return!1;const i=await n._get(s)==="true";return await n._remove(s),i}function Co(t,e){ct.set(t._key(),e)}function Po(t){return Q(t._redirectPersistence)}function Ro(t){return ot(To,t.config.apiKey,t.name)}async function Oo(t,e,s=!1){if(M(t.app))return Promise.reject(Z(t));const n=ie(t),i=us(n,e),a=await new Ao(n,i,s).execute();return a&&!s&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const No=600*1e3;class Do{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(s=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lo(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var n;if(e.error&&!Yn(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";s.onError(V(this.auth,i))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const n=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=No&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vs(e))}saveEventToCache(e){this.cachedEventUids.add(Vs(e)),this.lastProcessedEventTime=Date.now()}}function Vs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(t);default:return!1}}/**
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
 */async function xo(t,e={}){return ne(t,"GET","/v1/projects",e)}/**
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
 */const Mo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uo=/^https?/;async function Bo(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xo(t);for(const s of e)try{if(Fo(s))return}catch{}U(t,"unauthorized-domain")}function Fo(t){const e=Kt(),{protocol:s,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?s==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&a.hostname===n}if(!Uo.test(s))return!1;if(Mo.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Vo=new Qe(3e4,6e4);function Hs(){const t=q().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let s=0;s<t.CP.length;s++)t.CP[s]=null}}function Ho(t){return new Promise((e,s)=>{var i,r,a;function n(){Hs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hs(),s(V(t,"network-request-failed"))},timeout:Vo.get()})}if((r=(i=q().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=q().gapi)!=null&&a.load)n();else{const o=Ta("iframefcb");return q()[o]=()=>{gapi.load?n():s(V(t,"network-request-failed"))},Nn(`${ka()}?onload=${o}`).catch(c=>s(c))}}).catch(e=>{throw lt=null,e})}let lt=null;function Wo(t){return lt=lt||Ho(t),lt}/**
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
 */const jo=new Qe(5e3,15e3),qo="__/auth/iframe",Ko="emulator/auth/iframe",Go={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yo(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const s=e.emulator?ns(e,Ko):`https://${t.config.authDomain}/${qo}`,n={apiKey:e.apiKey,appName:t.name,v:Xe},i=zo.get(t.config.apiHost);i&&(n.eid=i);const r=t._getFrameworks();return r.length&&(n.fw=r.join(",")),`${s}?${Je(n).slice(1)}`}async function Jo(t){const e=await Wo(t),s=q().gapi;return g(s,t,"internal-error"),e.open({where:document.body,url:Yo(t),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Go,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const a=V(t,"network-request-failed"),o=q().setTimeout(()=>{r(a)},jo.get());function c(){q().clearTimeout(o),i(n)}n.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const Xo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qo=500,Zo=600,ec="_blank",tc="http://localhost";class Ws{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sc(t,e,s,n=Qo,i=Zo){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c={...Xo,width:n.toString(),height:i.toString(),top:r,left:a},l=L().toLowerCase();s&&(o=Tn(l)?ec:s),Sn(l)&&(e=e||tc,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[y,S])=>`${d}${y}=${S},`,"");if(ga(l)&&o!=="_self")return nc(e||"",o),new Ws(null);const p=window.open(e||"",o,u);g(p,t,"popup-blocked");try{p.focus()}catch{}return new Ws(p)}function nc(t,e){const s=document.createElement("a");s.href=t,s.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(n)}/**
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
 */const ic="__/auth/handler",rc="emulator/auth/handler",ac=encodeURIComponent("fac");async function js(t,e,s,n,i,r){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:n,v:Xe,eventId:i};if(e instanceof At){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",xi(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries({}))a[u]=p}if(e instanceof et){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(a.scopes=u.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await t._getAppCheckToken(),l=c?`#${ac}=${encodeURIComponent(c)}`:"";return`${oc(t)}?${Je(o).slice(1)}${l}`}function oc({config:t}){return t.emulator?ns(t,rc):`https://${t.authDomain}/${ic}`}/**
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
 */const Ut="webStorageSupport";class cc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hn,this._completeRedirectFn=Oo,this._overrideRedirectResult=Co}async _openPopup(e,s,n,i){var a;te((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await js(e,s,n,Kt(),i);return sc(e,r,ds())}async _openRedirect(e,s,n,i){await this._originValidation(e);const r=await js(e,s,n,Kt(),i);return lo(r),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:i,promise:r}=this.eventManagers[s];return i?Promise.resolve(i):(te(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[s]={promise:n},n.catch(()=>{delete this.eventManagers[s]}),n}async initAndGetManager(e){const s=await Jo(e),n=new Do(e);return s.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=s,n}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(Ut,{type:Ut},i=>{var a;const r=(a=i==null?void 0:i[0])==null?void 0:a[Ut];r!==void 0&&s(!!r),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=Bo(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return Rn()||kn()||rs()}}const lc=cc;var qs="@firebase/auth",Ks="1.13.6";/**
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
 */class dc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);s&&(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hc(t){je(new De("auth",(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:On(t)},l=new _a(n,i,r,c);return Ra(l,s),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,n)=>{e.getProvider("auth-internal").initialize()})),je(new De("auth-internal",e=>{const s=ie(e.getProvider("auth").getImmediate());return(n=>new dc(n))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(qs,Ks,uc(t)),Pe(qs,Ks,"esm2020")}/**
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
 */const pc=300,fc=an("authIdTokenMaxAge")||pc;let Gs=null;const mc=t=>async e=>{const s=e&&await e.getIdTokenResult(),n=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(n&&n>fc)return;const i=s==null?void 0:s.token;Gs!==i&&(Gs=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gc(t=Br()){const e=un(t,"auth");if(e.isInitialized())return e.getImmediate();const s=Pa(t,{popupRedirectResolver:lc,persistence:[vo,ao,Hn]}),n=an("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=mc(r.toString());to(s,a,()=>a(s.currentUser)),eo(s,o=>a(o))}}const i=Ti("auth");return i&&Oa(s,`http://${i}`),s}function yc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ea({loadJS(t){return new Promise((e,s)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const r=V("internal-error");r.customData=i,s(r)},n.type="text/javascript",n.charset="UTF-8",yc().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hc("Browser");const bc={VITE_API_BASE:"https://europe-west1-agentlab-6a2ed.cloudfunctions.net/api/api",VITE_FIREBASE_API_KEY:"AIzaSyA85iJNW1BJjqKnzta9qvtTwum9OIBH2U0",VITE_FIREBASE_APP_ID:"1:926148159880:web:765298762db0a3fb9f323d",VITE_FIREBASE_AUTH_DOMAIN:"agentlab-6a2ed.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"agentlab-6a2ed"},Fe=bc,k=gc(hn({apiKey:Fe.VITE_FIREBASE_API_KEY,authDomain:Fe.VITE_FIREBASE_AUTH_DOMAIN,projectId:Fe.VITE_FIREBASE_PROJECT_ID,appId:Fe.VITE_FIREBASE_APP_ID}));async function v(t,e,s=e?"POST":"GET",n=!1){var a;const i=await((a=k.currentUser)==null?void 0:a.getIdToken()),r=await fetch(Fe.VITE_API_BASE+t,{method:s,headers:{Authorization:`Bearer ${i}`,...e?{"Content-Type":"application/json"}:{}},...e?{body:JSON.stringify(e)}:{},signal:AbortSignal.timeout(12e4)});if(!r.ok){let o;try{o=(await r.json()).error}catch{}throw new Error(o||`Request failed (${r.status}).`)}return n?r:r.json()}function vc(){try{const t=JSON.parse(localStorage.getItem("simp:handoff:v1")||"null");return(t==null?void 0:t.v)!==1||t.sim!=="agentlab"||typeof t.ts!="number"||Math.abs(Date.now()-t.ts)>1800*1e3||typeof t.profile!="object"||!t.profile||JSON.stringify(t.profile).length>16e3?null:t}catch{return null}}function wc(t){const e=(t==null?void 0:t.profile)||{},s=String(e.name||"").trim().split(/\s+/);return{firstName:e.firstName||s[0]||"",lastName:e.lastName||s.slice(1).join(" "),studentId:e.studentId||e.sid||"",email:e.email||""}}fi();const w=t=>document.querySelector(t),m=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),zt=(t,e)=>O(t,e||(K==="session"&&h?We(h.session.config).currency:"EUR")),Me=t=>new Date(t).toLocaleString(),H=vc(),we=wc(H);let A=null,h=null,K="home",It="login",T=null,_e=!1,Bt=!1,E="",dt=null,R=null,Ee="sessions",Le=null,Y=!1,Se=null,Jn="",ut=[],ze=null,ke=null;const Xn=t=>{var e,s,n,i;return JSON.stringify([t.session.config,t.session.status,t.session.matchCount,t.session.simulationProgress,(e=t.members)==null?void 0:e.length,(s=t.members)==null?void 0:s.filter(r=>r.final).length,(n=t.summary)==null?void 0:n.completed,(i=t.personalStats)==null?void 0:i.completed,t.feedback,t.roundComparisons,t.testControls,t.studentScores,t.promptHistory])},Ic=new URLSearchParams(location.search).get("session")||(H==null?void 0:H.session)||"",He=()=>A&&A.role!=="student",C=(t,e,s="",n="text",i="")=>`<label>${e}<input name="${t}" type="${n}" value="${m(s)}" ${i}></label>`,b=(t,e,s="secondary",n="")=>`<button type="button" class="${s}" data-action="${e}" ${n}>${t}</button>`,$e=t=>`<span class="badge ${m(t)}">${m(t.replaceAll("_"," "))}</span>`;function me(t){w("#app").innerHTML=`<header><a href="#" class="brand" data-action="home"><span class="brand-icon">a<span>l</span></span>Agent<span>Lab</span></a><nav>${A?`${b("My sessions","home","nav-link")}${A.role==="admin"?b("Students","student-directory","nav-link"):""}${b("My profile & stats","profile","nav-link")}${b("Sign out","logout","nav-link")}`:""}${ri()}</nav></header><div id="notice" role="status" aria-live="polite">${m(E)}</div><main>${t}</main><footer>AgentLab · A learning lab for humans and AI agents <span>Konstantinos Stouras</span></footer>`}function Pt(t){E=t.message||String(t);const e=w("#notice");e&&(e.textContent=E,e.classList.add("error"),e.scrollIntoView({block:"nearest"}))}function Yt(){const t=It==="register";me(`<section class="entry"><div class="intro"><p class="eyebrow">BUILD · DELEGATE · DISCOVER</p><h1>Your strategy.<br>Your agent.<br><em>What happens next?</em></h1><p class="lead">Explore how the instructions you write shape the decisions your agents make. Start with a negotiation. Learn from every turn.</p><div class="orbit"><div class="agent-node buyer">Buyer<br><strong>↗</strong></div><div class="orbit-line">⇄</div><div class="agent-node seller">Seller<br><strong>↙</strong></div></div></div><section class="card auth-card"><p class="eyebrow">WELCOME TO THE LAB</p><h2>${t?"Create your account":"Pick up where you left off"}</h2><p>${t?"Register once. Join your class with a session code.":"Sign in, then enter the session code from your instructor."}</p><form id="auth-form">${t?`<div class="form-grid">${C("firstName","First name",we.firstName,"text",'required autocomplete="given-name" maxlength="80"')}${C("lastName","Last name",we.lastName,"text",'required autocomplete="family-name" maxlength="80"')}</div>${C("studentId","University ID",we.studentId,"text",'required minlength="2" maxlength="40"')}`:""}${C("email","Email",we.email,"email",'required autocomplete="email"')}${C("password","Password","","password",`required minlength="8" autocomplete="${t?"new-password":"current-password"}"`)}<button class="primary full">${t?"Create account":"Sign in"}</button></form><div class="divider">or</div><button type="button" class="google-signin full" data-action="google"><img src="${yi}" alt="" width="20" height="20"><span>Continue with Google</span></button><p class="small">${t?"Already registered?":"New to AgentLab?"} ${b(t?"Sign in":"Create an account","toggle-auth","text-button")}</p>${t?"":b("Forgot your password?","reset","text-button")}<p class="fine">Your profile, prompts and play records are visible to your instructor. Agent instructions and negotiation dialogue are sent to the AI provider. Keep personal information out of prompts.</p></section></section>`)}function Qn(){var e,s;const t=A.profile||{...we,firstName:((e=k.currentUser.displayName)==null?void 0:e.split(" ")[0])||we.firstName,lastName:((s=k.currentUser.displayName)==null?void 0:s.split(" ").slice(1).join(" "))||we.lastName};return`<section class="card"><h2>${A.profile?"Your details":"Complete your profile"}</h2><form id="profile-form"><div class="form-grid">${C("firstName","First name",t.firstName,"text",'required maxlength="80"')}${C("lastName","Last name",t.lastName,"text",'required maxlength="80"')}${C("studentId","University ID",t.studentId,"text",'required minlength="2" maxlength="40"')}${C("email","Email",k.currentUser.email,"email","required")}</div>${H?'<p class="callout">Registration data from the Simulation Platform will be saved with your profile when you save these details.</p>':""}<button class="primary">Save details</button></form>${A.profile?`<div class="actions">${b("Send password setup / reset email","reset","text-button")}${k.currentUser.providerData.some(n=>n.providerId==="google.com")?"":b("Connect Google sign-in","link-google","text-button")}</div>`:""}${t.simulationProfile?`<details><summary>Additional Simulation Platform data</summary><dl>${Object.entries(t.simulationProfile).map(([n,i])=>`<dt>${m(n)}</dt><dd>${m(typeof i=="object"?JSON.stringify(i):i)}</dd>`).join("")}</dl></details>`:""}</section>`}function Zn(){return k.currentUser.emailVerified?"":`<section class="callout"><strong>Verify your email to join a class.</strong><p>Open the verification link in your inbox, then refresh your verification status here.</p>${b("Send verification email","verify")}${b("I have verified my email","verified")}</section>`}function zs(t=[]){var e,s;if(He()){_c(t);return}me(`<div class="page-heading"><div><p class="eyebrow">YOUR WORKSPACE</p><h1>Hello, ${m(((e=A.profile)==null?void 0:e.firstName)||((s=k.currentUser.displayName)==null?void 0:s.split(" ")[0])||"there")}.</h1><p>Practise your strategies. Improve your decisions.</p></div>${$e(A.role)}</div>${Zn()}${!A.profile&&!He()?Qn():""}<div class="dashboard-grid"><section class="card accent"><p class="eyebrow">JOIN YOUR CLASS</p><h2>Enter the lab.</h2><form id="join-form">${C("code","Session code",Ic,"text",'required minlength="4" maxlength="24" placeholder="e.g. MBA-2027"')}<button class="primary">Join session →</button></form></section><section class="card"><p class="eyebrow">YOUR SESSIONS</p><div class="session-list">${t.length?t.map(n=>`<button class="session-link" data-open="${m(n.id)}"><span><strong>${m(n.title)}</strong><small>${m(n.moduleCode||"Negotiation lab")}</small></span>${n.status?$e(n.status):"<span>→</span>"}</button>`).join(""):'<p class="empty">Your classes will appear here after you join.</p>'}</div></section></div>${He()?ti():""}`)}function _c(t){if(ut=t,Ee==="negotiations"){fs();return}const e=[...t].sort((r,a)=>(a.createdAt||0)-(r.createdAt||0)),s=e.filter(r=>["closed","debrief"].includes(r.status)),n=e.filter(r=>!["closed","debrief"].includes(r.status)),i=(r,a,o,c,l)=>`<section class="card session-section" id="${r}" aria-labelledby="${r}-heading"><div class="section-heading"><h2 id="${r}-heading">${a}</h2><span class="session-count">${o.length} ${o.length===1?"session":"sessions"}</span></div><p class="section-description">${c}</p>${o.length?b(`Delete all ${r==="active-sessions"?"active":"past"} sessions`,"delete-session-group","danger bulk-delete",`data-group="${r}"`):""}<div class="admin-session-list">${o.length?o.map(Ec).join(""):`<p class="empty">${l}</p>`}</div></section>`;me(`${ei()}${ps()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions"><div class="admin-layout"><aside class="admin-sidebar" aria-label="Instructor options"><section class="card admin-options"><p class="eyebrow">MANAGE YOUR LAB</p><h2>Options</h2><nav aria-label="Dashboard sections"><a href="#create-session-panel">Create a session <span>＋</span></a><a href="#active-sessions">Active sessions <span>${n.length}</span></a><a href="#past-sessions">Past sessions <span>${s.length}</span></a>${b("Refresh sessions","home","sidebar-button")}${b("My profile & stats","profile","sidebar-button")}</nav><p class="small">Refresh updates the session list. Open a session to manage its activity.</p></section><div id="create-session-panel">${ti()}</div></aside><div class="admin-session-column">${i("active-sessions","Active sessions",n,"Open a session to manage registration, run negotiations and monitor your students. Draft, lobby and paused sessions also appear here.","No active sessions yet. Create a session to get started.")}${i("past-sessions","Past sessions",s,"Review closed sessions, release debriefs and download session results.","Closed sessions will appear here.")}</div></div></div>`)}function ei(){return`<div class="page-heading"><div><p class="eyebrow">INSTRUCTOR WORKSPACE</p><h1>AgentLab admin</h1><p>Manage your sessions and set up each learning task.</p></div>${$e(A.role)}</div>`}function ps(){return`<div class="admin-tabs" role="tablist" aria-label="Admin area">${[["sessions","Sessions"],["negotiations","Negotiations"]].map(([t,e])=>b(e,"admin-tab",Ee===t?"admin-tab selected":"admin-tab",`id="tab-${t}" role="tab" aria-selected="${Ee===t}" aria-controls="admin-panel" data-tab="${t}"`)).join("")}</div>`}function be(t,e,s,n,i){return`<div class="setting-field"><label for="setting-${t}">${e}</label><input id="setting-${t}" name="${t}" type="number" value="${m(s)}" aria-describedby="help-${t}" ${i} required><p id="help-${t}" class="field-help">${n}</p></div>`}function fs(){const t=Le;me(`${ei()}${ps()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-negotiations"><section class="card task-overview"><p class="eyebrow">TASK 01 / NEGOTIATIONS</p><h2>Used-car negotiation</h2><p>Students write buyer and seller strategies, practise, then send their agents to negotiate. The scenario is a ${P.title} with 105,013 km in Dublin. Both buyer and seller use a shared KBB-style value range based on the outside options below. The listing and included equipment are shared with both sides; the KBB-style range explains both sides’ outside options.</p><p class="small">The app uses structured offers and acceptance. Buyer moves first; no agreement earns zero for both sides.</p></section><form id="negotiation-settings"><section class="card"><h2>Game rules</h2><p>These are your defaults for new sessions. Saving here does not change existing sessions.</p><div class="form-grid">${be("buyerValue","Buyer fallback (€)",t.buyerValue,"What the buyer would pay elsewhere. Buyer surplus = this value minus the agreed price. Upper endpoint of the shared KBB-style exercise range.",'min="1" max="1000000"')}${be("sellerCost","Seller fallback (€)",t.sellerCost,"What the seller could receive elsewhere. Seller surplus = agreed price minus this value. Lower endpoint of the shared KBB-style exercise range. Must be below the buyer fallback.",'min="0" max="999999"')}${be("maxTurns","Maximum turns",t.maxTurns,"Total messages across both sides, not turns per student. If no offer is accepted by the limit, the match ends without a deal. Default: 12.",'min="2" max="24"')}${be("humanTurnSeconds","Seconds per human turn",t.humanTurnSeconds,"Time available to enter a human offer or response. A missed deadline ends that match without a deal. Applies to human and hybrid rounds.",'min="30" max="1800"')}</div></section><section class="card"><h2>Practice and session size</h2><div class="form-grid">${be("maxPractice","Practice matches per student",t.maxPractice,"Each practice runs the student’s own buyer against their own seller. Set 0 to skip practice. Practice does not count toward evaluation scores.",'min="0" max="20"')}${be("maxMatches","Total match budget",t.maxMatches,"Maximum negotiations across the entire session, including practice and every evaluation round. This is a match count, not a monetary spending cap.",'min="1" max="400"')}</div><p class="callout">One agent tournament with n submitted students uses n × (n − 1) matches. For 15 students with two practices each, allow at least 240 matches. The current maximum is 400 per session.</p></section><section class="card"><h2>AI settings</h2><div class="form-grid"><div class="setting-field"><label for="setting-model">AI model</label><select id="setting-model" name="model" aria-describedby="help-model">${["gpt-4.1-mini","gpt-4.1","gpt-4.1-nano"].map(e=>`<option ${t.model===e?"selected":""}>${e}</option>`).join("")}</select><p id="help-model" class="field-help">Model used for all agents in a new session. gpt-4.1-mini is the default. Model choice affects responses and API cost.</p></div>${be("temperature","Temperature",t.temperature,"Controls response variation. Lower values tend to be more consistent; higher values more varied. Default: 1.",'min="0" max="2" step="0.1"')}</div>${si(t)}<div class="actions"><button class="primary">Save negotiation settings</button>${b("Restore baseline values","reset-negotiation-settings","secondary")}${b("Go to Sessions","admin-tab","secondary",'data-tab="sessions"')}</div><p class="small">Save stores these defaults for your instructor account. Restore fills in the original game and classroom defaults; click Save to keep them. Go to Sessions lets you create a class using the last saved settings.</p></section></form><section class="card"><h2>Running a round</h2><p>Open a session from Sessions, open registration, then open the activity. When students have submitted their strategies, choose a treatment and start a round.</p><dl class="treatment-guide"><dt>Agent ↔ Agent</dt><dd>Every submitted buyer meets every other submitted seller. No self-matches. Repetitions repeats the complete tournament.</dd><dt>Human ↔ Human</dt><dd>Random pairs negotiate directly. Requires an even number of enrolled students.</dd><dt>Hybrid treatments</dt><dd>One side is human, the other an agent. Uses students with submitted strategies and requires an even eligible group.</dd><dt>Pause / Resume</dt><dd>Temporarily stop play, then continue it.</dd><dt>Close / Release debrief</dt><dd>Close ends the session and cancels unfinished matches. Release debrief reveals counterpart types to students.</dd></dl></section></div>`)}function Ec(t){return ai(t,{esc:m,date:Me,btn:b,badge:$e})}function ti(){const t=Le;return`<section class="card"><p class="eyebrow">NEW CLASS</p><h2>Create a session</h2><form id="create-session">${C("title","Session title","Negotiation lab","text",'required maxlength="120"')}${C("code","Session code","","text",'required pattern="[A-Za-z0-9-]{4,24}" placeholder="MBA-2027"')}<p class="field-help">A unique code your students use to join. Use 4–24 letters, numbers or hyphens.</p>${C("moduleCode","Module","BMGT41040")}<label>Task<select name="taskId"><option value="negotiation-v1">Used-car negotiation</option></select></label>${Sc()}<p class="small">New sessions use your saved Negotiations settings: ${t.maxTurns} turns, ${t.maxPractice} practices per student and ${t.maxMatches} total matches.</p>${b("Edit negotiation settings","admin-tab","text-button",'data-tab="negotiations"')}<button class="primary full">Create session</button><p class="small">Creates a draft. Open registration inside the session to begin.</p></form></section>`}function Sc(){return`<div class="test-session-options"><label class="checkbox-label"><input type="checkbox" name="testSession" id="test-session">Test session with simulated students</label><p class="field-help">Rehearse the workflow without inviting students or creating student accounts.</p><div id="simulation-options" hidden><label class="checkbox-label"><input type="checkbox" name="playAsStudent" id="play-as-student">Play as a student with my own strategies</label><p class="field-help">Adds you alongside the simulated students. You write, practise and submit your own buyer and seller strategies. Uses live AI.</p>${C("simulatedStudents","Simulated students",3,"number",'min="2" max="6"')}<label>Test engine<select name="simulationEngine"><option value="scripted">Scripted rehearsal</option><option value="live">Live AI test</option></select></label><p class="field-help">Scripted: predictable sample offers, no OpenAI calls. Live AI: strategies use your selected model and incur normal API charges. Both use Firebase resources. With you and three simulated students, one tournament has 12 matches; six involve your agents.</p></div></div>`}function kc(){var e;const t=h.session;return(e=t.simulation)!=null&&e.playAsStudent&&t.ownerId===A.uid?`<section class="card player-view-bar"><div><strong>${h.playerView?"Test round":"Test controls"}</strong><p class="small">${h.playerView?"Write your own strategies and see only your negotiations. Test results stay separate from your classroom statistics.":"Continue your test round to write strategies and participate with your own agents."}</p></div>${b(h.playerView?"Back to instructor controls":"Continue test round",h.playerView?"instructor-view":"student-view","secondary",h.member?"":"disabled")}</section>`:""}const _t=(t,e)=>t!=null&&t.byCurrency?Object.entries(t.byCurrency).map(([s,n])=>O(n[e+"Mean"],s)).join(" / ")||"—":zt(t==null?void 0:t[e+"Mean"],t==null?void 0:t.currency);function Tc(){const t=h.personalStats;return`<section class="card"><h2>Your test results</h2><p>Evaluation matches involving your agents only. Practice is excluded. Your buyer and seller each face every simulated classmate once per tournament. These totals combine all rounds; compare individual rounds below.</p><div class="metrics"><div><strong>${t.completed}</strong><span>completed evaluations</span></div><div><strong>${t.agreements}</strong><span>agreements</span></div><div><strong>${_t(t,"buyer")}</strong><span>mean buyer surplus · ${t.buyerCount} matches</span></div><div><strong>${_t(t,"seller")}</strong><span>mean seller surplus · ${t.sellerCount} matches</span></div></div></section>`}function si(t){return`<label class="checkbox-label"><input type="checkbox" name="autoFeedback" ${t.autoFeedback!==!1?"checked":""}>Automatic personalised feedback</label><label>Feedback tone<select name="feedbackTone">${[["supportive","Supportive and encouraging"],["balanced","Balanced and constructive"],["challenging","Challenging and direct"]].map(([e,s])=>`<option value="${e}" ${(t.feedbackTone||"supportive")===e?"selected":""}>${s}</option>`).join("")}</select></label><p class="small">After a round finishes, OpenAI reviews each student's strategies, results and selected transcripts. Feedback appears automatically. Uses the session's AI model and adds API token usage; simulated classmates and scripted tests do not generate feedback. Tone changes apply to future feedback.</p>`}function Et(t){var i;const e=t==null?void 0:t.published,s=e==null?void 0:e.content,n=((i=t==null?void 0:t.pending)==null?void 0:i.status)||(t==null?void 0:t.status);return`${n==="queued"||n==="generating"?'<p class="callout">Your personalised feedback is being prepared.</p>':n==="error"?'<p class="callout">Feedback could not be generated. Your instructor can retry it.</p>':""}${s?`<p class="feedback-text">${m(s.overview)}</p><h3>What worked well</h3><ul>${s.strengths.map(r=>`<li>${m(r)}</li>`).join("")}</ul><h3>What to improve</h3><ul>${s.improvements.map(r=>`<li>${m(r)}</li>`).join("")}</ul><h3>Try this next</h3><p class="feedback-text">${m(s.nextStrategy)}</p><p class="small">${e.reviewedMatches} scored negotiations · ${e.sampledMatches} transcript examples reviewed · ${Me(e.releasedAt)}. Use this feedback to reflect and improve.</p>`:n?"":'<p class="small">Personalised feedback appears here after a completed evaluation round when automatic feedback is enabled.</p>'}`}function Ac(){var a,o,c,l;if(!h.members)return`<section class="card"><p class="eyebrow">REFLECT & IMPROVE</p><h2>Your feedback</h2>${Et(h.feedback)}</section>`;const t=h.session.config,e=`<form id="feedback-settings" class="card"><h2>Automatic student feedback</h2>${si(t)}<button class="primary">Save feedback settings</button></form>`;if(!h.members.length)return e;const s=h.members.find(u=>u.uid===ze)||h.members[0];ze=s.uid;const n=(a=h.feedback)==null?void 0:a.find(u=>u.uid===s.uid),i=(o=h.summary)==null?void 0:o.participants.find(u=>u.uid===s.uid),r=h.matches.filter(u=>{var p,d;return((p=u.buyer)==null?void 0:p.uid)===s.uid||((d=u.seller)==null?void 0:d.uid)===s.uid});return e+`<section class="card"><p class="eyebrow">REVIEW & COACH</p><h2>Student progress & feedback</h2><label>Student<select id="review-student">${h.members.map(u=>{var p,d;return`<option value="${m(u.uid)}" ${u.uid===s.uid?"selected":""}>${m(((p=u.profile)==null?void 0:p.name)||u.pseudonym)} · ${m((d=u.profile)==null?void 0:d.studentId)}</option>`}).join("")}</select></label><div class="metrics"><div><strong>${(i==null?void 0:i.buyerCount)||0}</strong><span>buyer evaluations</span></div><div><strong>${_t(i,"buyer")}</strong><span>mean buyer surplus</span></div><div><strong>${(i==null?void 0:i.sellerCount)||0}</strong><span>seller evaluations</span></div><div><strong>${_t(i,"seller")}</strong><span>mean seller surplus</span></div></div><details><summary>Latest submitted strategies</summary>${s.final?`<h3>Buyer</h3><p class="feedback-text">${m(s.final.buyer)}</p><h3>Seller</h3><p class="feedback-text">${m(s.final.seller)}</p>`:"<p>No strategies submitted yet.</p>"}</details><details><summary>Review negotiations (${r.length})</summary>${r.map(u=>`<p><a href="#match-${m(u.id)}">${u.practice?"Practice":"Evaluation"} · ${u.buyer.uid===s.uid?"Buyer":"Seller"} · ${m(u.status)} · ${u.id.slice(-6)}</a></p>`).join("")}</details><h3>Personalised feedback</h3>${s.simulated?'<p class="small">Simulated classmates do not receive AI feedback.</p>':Et(n)}${((c=n==null?void 0:n.pending)==null?void 0:c.status)==="error"||((l=n==null?void 0:n.pending)==null?void 0:l.status)==="generating"&&n.pending.leaseUntil<Date.now()?b("Retry automatic feedback","retry-feedback","secondary",`data-uid="${m(s.uid)}"`):""}</section>`}function $c(){var r;const{session:t}=h,e=(r=h.members)==null?void 0:r.filter(a=>a.simulated);if(!t.simulation)return"";const s=t.simulationProgress||{},n=t.status==="active",i=a=>a?"":"disabled";return`<section class="card rehearsal-panel"><p class="eyebrow">INSTRUCTOR TEST SESSION</p><h2>Rehearse with ${t.simulation.students} simulated students${t.simulation.playAsStudent?" and your own agents":""}</h2><p>${t.simulation.engine==="scripted"?"Scripted rehearsal: deterministic sample offers, no OpenAI calls. These results do not measure AI or student performance.":"Live AI test: sample strategies run through "+m(t.config.model)+". Normal OpenAI API charges apply. These are simulated students, not real class results."} Real students cannot join this session.</p>${t.simulation.playAsStudent&&t.ownerId===A.uid&&["draft","lobby","active"].includes(t.status)?b("Prepare test and play","prepare-player-test","primary")+'<p class="small">Sets up your simulated classmates and opens Student view. Write your own strategies there; these are never filled in for you. No AI runs until you request practice or start a round.</p>':""}<ol class="rehearsal-steps"><li><strong>Open registration</strong> using the session control below, then add your simulated roster.</li><li>${b(s.enrol?"Simulated students added":"Add simulated students","simulation","secondary",`data-step="enrol" ${i(t.status==="lobby"&&!s.enrol)}`)} <span>Creates sample names and university IDs inside this session only.</span></li><li><strong>Open activity</strong>, then submit the sample strategies.</li><li>${b(s.submit?"Strategies submitted":"Submit simulated strategies","simulation","secondary",`data-step="submit" ${i(n&&s.enrol&&!s.submit)}`)} <span>Gives each student a different buyer/seller strategy.</span></li><li>${b(s.practice?"Practice started":"Run one practice per student","simulation","secondary",`data-step="practice" ${i(n&&s.submit&&!s.practice&&t.config.maxPractice>0)}`)} <span>${t.config.maxPractice?"Optional: runs each student’s buyer against their own seller.":"Practice is disabled in these session settings."}</span></li><li>Select <strong>Agent ↔ Agent</strong> below and click <strong>Start round</strong>. Wait for all evaluations, then <strong>Close session → Release debrief</strong> and export the test results.</li></ol>${e!=null&&e.some(a=>a.final)?`<details><summary>Inspect simulated student strategies</summary>${e.map(a=>{var o,c,l;return`<h3>${m((o=a.profile)==null?void 0:o.name)} · ${m(a.style)}</h3><p class="small"><strong>Buyer:</strong> ${m((c=a.final)==null?void 0:c.buyer)}<br><strong>Seller:</strong> ${m((l=a.final)==null?void 0:l.seller)}</p>`}).join("")}</details>`:""}</section>`}function D(){var i;const t=new Set([...document.querySelectorAll("#round-comparison details[open], #matches details[open]")].map(r=>r.dataset.roundStrategy||r.dataset.id));Jn=Xn(h);const{session:e,member:s}=h,n=He()&&!!h.members;me(`<div class="page-heading"><div><p class="eyebrow">${m(e.moduleCode)} / ACTIVITY 01</p><h1>${m(e.title)}</h1><p>Used-car negotiation · ${m(We(e.config).title)} ${e.simulation?"· TEST SESSION":""}</p></div>${$e(e.status)}</div>${n?ps()+'<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions">':""}${A.aiReady===!1&&((i=e.simulation)==null?void 0:i.engine)!=="scripted"?'<p class="callout">AI negotiations are awaiting setup. You can save strategies and run human negotiations in the meantime.</p>':""}${h.inspecting?`<section class="card"><h2>Student screen · ${m(h.inspecting.name)}</h2><p>Read-only instructor preview. Actions are disabled.</p>${b("Back to instructor controls","end-inspection","secondary")}</section>`:kc()}${n?$c()+Rc()+Oc()+Cc(e):Pc()}${h.playerView?Tc():""}${Nc()}${Ac()}${n?"":Zs(h.roundComparisons,ke,{esc:m,date:Me,feedbackContent:Et})}<section class="card"><div class="section-heading"><h2>${n?"Session negotiations":"Your negotiations"}</h2><span class="small">Updates automatically</span></div><div id="matches"></div></section>${n?"</div>":""}`),Rt();for(const r of document.querySelectorAll("#round-comparison details, #matches details"))t.has(r.dataset.roundStrategy||r.dataset.id)&&(r.open=!0);if(e.simulation){const r=w("#round-form select[name=mode]");if(r)for(const a of r.options)a.value!=="AA"&&(a.disabled=!0)}}function Cc(t){const e=t.config;return`<section class="card"><details><summary>This session’s negotiation settings</summary><p class="small">These are the settings for future negotiations in this session. Completed negotiations retain their original settings and results. Changes in Negotiations apply to new sessions.</p><dl><dt>Buyer / seller fallback</dt><dd>${zt(e.buyerValue)} / ${zt(e.sellerCost)}</dd><dt>Maximum turns</dt><dd>${e.maxTurns} total messages</dd><dt>Human turn time</dt><dd>${e.humanTurnSeconds} seconds</dd><dt>Practice allowance</dt><dd>${e.maxPractice} per student</dd><dt>Match budget</dt><dd>${e.maxMatches} including practice</dd><dt>AI model / temperature</dt><dd>${m(e.model)} / ${e.temperature}</dd></dl></details><details><summary>What the session controls do</summary><p class="small">Open registration lets students join. Open activity enables practice and play. Start round schedules the selected treatment using the latest submitted strategies. Pause temporarily stops activity; Resume continues it. Close cancels unfinished matches and ends play. Release debrief reveals counterpart types. CSV downloads outcome rows; full session downloads prompts, transcripts and settings.</p></details></section>`}function Pc(){const{session:t,member:e}=h,s=R||(e==null?void 0:e.draft)||{buyer:"",seller:""};return`${gi(t.config)}${t.status!=="active"?`<p class="callout">${t.status==="lobby"?"You are in. Your instructor will open the activity shortly.":t.status==="paused"?"Your instructor has paused the activity.":t.status==="debrief"?"The session is in debrief. Review your outcomes and counterparts below.":"This session is closed."}</p>`:""}<section class="card"><div class="section-heading"><div><p class="eyebrow">YOUR AGENTS</p><h2>A playbook for each side</h2></div>${e!=null&&e.final?$e("submitted"):'<span class="small">Not yet submitted</span>'}</div><p>Specify an opening offer, when to make concessions, and when to accept or walk away. “Get a good price” leaves more to chance than a clear strategy. Do not include personal details.</p><form id="prompts-form">${h.playerView?`<div class="actions">${b("Fill example strategies","fill-examples","secondary",t.status!=="active"?"disabled":"")}</div><p class="small">Fills both boxes with example buyer and seller instructions for your test. You can edit them before practising.</p>`:""}<div class="form-grid"><label>Buyer instructions<textarea name="buyer" required minlength="10" maxlength="6000" placeholder="How should your buyer negotiate?" ${t.status!=="active"?"disabled":""}>${m(s.buyer)}</textarea></label><label>Seller instructions<textarea name="seller" required minlength="10" maxlength="6000" placeholder="How should your seller negotiate?" ${t.status!=="active"?"disabled":""}>${m(s.seller)}</textarea></label></div><div class="actions"><button class="secondary" name="intent" value="draft" ${t.status!=="active"?"disabled":""}>Save draft</button><button class="secondary" name="intent" value="practice" ${t.status!=="active"||((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"disabled":""}>${((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"Practice limit reached":"Practise with these prompts"} (${(e==null?void 0:e.practiceCount)||0}/${t.config.maxPractice})</button><button class="primary" name="intent" value="final" ${t.status!=="active"?"disabled":""}>Submit for evaluation</button></div><p class="small">Each save keeps a version. Evaluation rounds use a frozen copy of your latest submitted prompts.</p></form><div id="student-next-step" class="student-next-step">${ms()}</div></section>`}function ms(){const{session:t,member:e}=h,s=R||(e==null?void 0:e.draft)||{},n=!!(e!=null&&e.final)&&(s.buyer!==e.final.buyer||s.seller!==e.final.seller),i='<div class="actions"><a href="#round-comparison">See round results and feedback ↓</a><a href="#matches">View negotiation transcripts ↓</a></div>';if(t.status!=="active")return`<h3>Next step</h3><p>${t.status==="paused"?"The activity is paused. Resume it from instructor controls to continue.":t.status==="lobby"?"Wait for the activity to open.":"This session has ended. Review your results and feedback below."}</p>${i}`;if(!(e!=null&&e.final)||n)return`<h3>Next: submit your ${n?"revised ":""}strategies</h3><p>Click <strong>Submit for evaluation</strong> above to use these instructions in the next round. Practice is optional.</p>${i}`;if(!h.playerView)return`<h3>Your strategies are submitted</h3><p>Your instructor starts the evaluation round. Results and feedback appear below as the round completes.</p>${i}`;const r=h.testControls,a=r!=null&&r.pending?"A test round is still running or needs instructor attention. Review its negotiations below before starting another.":r&&r.remainingMatches<r.roundMatches?"There is not enough remaining match budget for another round. Review your results below or create a new test session.":`Ready to compete against your ${t.simulation.students} simulated classmates. This runs a full round using your submitted strategies. You can stay in Student view.`;return`<h3>${r!=null&&r.canStart?"Next: run your test round":"Your test round"}</h3><p>${a}</p>${b("Start test round","start-player-round","primary",r!=null&&r.canStart?"":"disabled")}<p class="small">${(r==null?void 0:r.roundMatches)??""} total negotiations per round; ${t.simulation.students*2} involve your agents. Live AI uses your configured OpenAI model.</p>${i}`}function Rc(){const{session:t,members:e,summary:s,rounds:n}=h,i={draft:[["lobby","Open registration"]],lobby:[["active","Open activity"],["closed","Close session"]],active:[["paused","Pause activity"],["closed","Close session"]],paused:[["active","Resume activity"],["closed","Close session"]],closed:[["debrief","Release debrief"]],debrief:[]},r=e.filter(a=>a.final).length;return`<section class="card"><div class="section-heading"><div><p class="eyebrow">${t.simulation?"TEST SESSION CODE":"SHARE THIS SESSION CODE"}</p><div class="session-code">${m(t.code)}</div></div><div class="actions">${i[t.status].map(([a,o])=>{var c;return b(o,"status",a==="closed"?"danger":"primary",`data-status="${a}" ${t.simulation&&t.status==="lobby"&&a==="active"&&!((c=t.simulationProgress)!=null&&c.enrol)?"disabled":""}`)}).join("")}</div></div><div class="metrics"><div><strong>${e.length}</strong><span>students joined</span></div><div><strong>${r}</strong><span>prompts submitted</span></div><div><strong>${t.matchCount}/${t.config.maxMatches}</strong><span>match budget</span></div><div><strong>${(s==null?void 0:s.completed)||0}</strong><span>completed evaluations</span></div></div></section><section class="card"><h2>Run an evaluation</h2><p>Agent rounds pair every submitted buyer with every other submitted seller (${r*(r-1)} matches per repetition). Human rounds pair students randomly, once each. An even number of students is required.</p><form id="round-form" class="inline-form"><label>Treatment<select name="mode"><option value="AA">Agent ↔ Agent</option><option value="HH">Human ↔ Human</option><option value="HA">Human buyer ↔ Agent seller</option><option value="AH">Agent buyer ↔ Human seller</option></select></label>${C("repetitions","Repetitions (agent rounds only)",1,"number",'min="1" max="5" required')}<button class="primary" ${t.status!=="active"?"disabled":""}>Start round</button></form><p class="small">Agent and hybrid rounds include only students with both prompts submitted. Human-only rounds include all enrolled students. Finish or cancel the current evaluation before starting another.</p>${n!=null&&n.length?`<details><summary>Round history (${n.length})</summary>${n.map(a=>`<p>${m(a.mode)} · ${a.matchCount} matches · ${Me(a.createdAt)} · ${a.excludedIds.length} excluded without submitted prompts</p>`).join("")}</details>`:""}</section><section class="card"><div class="section-heading"><h2>Class roster</h2><div class="actions">${b("Export CSV","export","secondary",'data-format="csv"')}${b("Export full session","export","secondary",'data-format="json"')}</div></div><div class="table-scroll"><table><thead><tr><th>Student</th><th>University ID</th><th>Submission</th><th>Practice</th></tr></thead><tbody>${e.map(a=>{var o,c,l;return`<tr><td>${b(m(((o=a.profile)==null?void 0:o.name)||a.uid),"inspect-student","text-button",`data-uid="${m(a.uid)}"`)}<small>${m((c=a.profile)==null?void 0:c.email)}</small></td><td>${m((l=a.profile)==null?void 0:l.studentId)}</td><td>${a.final?`Version ${a.final.version}`:"Awaiting prompts"}</td><td>${a.practiceCount}</td></tr>`}).join("")}</tbody></table></div></section>`}function Rt(){var p;const t=w("#matches");if(!t)return;h.inspecting&&document.querySelectorAll("#prompts-form input,#prompts-form textarea,#prompts-form button").forEach(d=>d.disabled=!0);const e=(p=document.activeElement)==null?void 0:p.closest(".action-form"),s=e&&h.matches.find(d=>d.id===e.dataset.match),n=s&&h.session.status==="active"&&s.status==="playing"&&s.transcript.length===Number(e.dataset.turn),i=new Map([...t.querySelectorAll("form")].map(d=>[d.dataset.match,Object.fromEntries(new FormData(d))])),r=new Set([...t.querySelectorAll("details[open]")].map(d=>d.dataset.id)),a=h.session.status==="active",o=[...h.roundComparisons||h.rounds||[]].sort((d,y)=>d.createdAt-y.createdAt),c=new Map(o.map((d,y)=>[d.id,{...d,number:d.number||y+1}])),l=[...h.matches].sort((d,y)=>{var S,N;return Number(d.practice)-Number(y.practice)||(((S=c.get(y.roundId))==null?void 0:S.createdAt)||0)-(((N=c.get(d.roundId))==null?void 0:N.createdAt)||0)||String(d.roundId||"").localeCompare(String(y.roundId||""))||+!d.ownRoles.includes("buyer")-+!y.ownRoles.includes("buyer")||(y.createdAt||0)-(d.createdAt||0)||d.id.localeCompare(y.id)}),u=l.length?l.map((d,y)=>{var x;const S=ye=>O(ye,d.config.currency||We(d.config).currency),N=d.practice?"practice":d.roundId,f=l[y-1],W=!f||(f.practice?"practice":f.roundId)!==N?`<h3 class="match-group-heading">${d.practice?"Practice matches":`Round ${((x=c.get(d.roundId))==null?void 0:x.number)||"—"} evaluations`} · ${l.filter(ye=>(ye.practice?"practice":ye.roundId)===N).length} negotiations</h3>`:"",ge=!h.inspecting&&a&&d.status==="playing"&&d.ownRoles.includes(d.turn)&&d.ownKinds[d.turn]==="human",re=d.transcript.at(-1),st=i.get(d.id)||{};return`${W}<article class="match" id="match-${m(d.id)}"><div class="section-heading"><h3>${d.practice?"Practice":"Evaluation"} <span class="muted">${d.id.slice(-6)}</span></h3>${$e(d.status)}</div><p class="small">${d.ownRoles.length?`Your role: ${d.ownRoles.map(ye=>`${ye} (${d.ownKinds[ye]})`).join(" + ")} · `:""}${d.transcript.length}/${d.config.maxTurns} turns${d.conditions?` · Buyer: ${d.conditions.buyer} / Seller: ${d.conditions.seller}`:""}</p>${d.outcome?`<div class="result"><strong>${d.outcome.agreed?`Agreement at ${S(d.outcome.price)}`:"No agreement"}</strong><span>Buyer surplus ${S(d.outcome.buyerSurplus)} · Seller surplus ${S(d.outcome.sellerSurplus)}</span></div>`:""}${d.error?`<p class="callout">${m(d.error)}</p>`:""}${ge?`<p>Your turn as ${d.turn}. Your fallback: ${S(d.fallbacks[d.turn])}.</p>`:""}${di(d,{money:S,sessionStatus:h.session.status,ownTurn:ge,opened:r.has(d.id)})}${ge?`<form class="action-form" data-match="${m(d.id)}" data-turn="${d.transcript.length}"><p class="small">Turn deadline: ${Me(d.deadline)}</p><div class="offer-fields">${C("price",`Your offer (${We(d.config).currency==="EUR"?"€":"$"})`,st.price||"","number",'min="0" max="1000000" step="1"')}</div>${ui(st.message)}<div class="actions"><button name="intent" value="offer" class="primary">Make offer</button>${(re==null?void 0:re.type)==="offer"?`<button name="intent" value="accept" class="secondary">Accept ${S(re.price)}</button>`:""}<button name="intent" value="reject" class="danger">End without agreement</button></div></form>`:""}${h.members&&["error","playing"].includes(d.status)?`<div class="actions">${b("Retry agent turn","retry","text-button",`data-match="${d.id}"`)}${b("Cancel match","cancel","text-button",`data-match="${d.id}"`)}</div>`:""}</article>`}).join(""):'<p class="empty">Your negotiations will appear here when you practise or your instructor starts a round.</p>';if(n){const d=document.createElement("div");d.innerHTML=u;for(const y of t.querySelectorAll(".match")){if(y.contains(e))continue;const S=[...d.querySelectorAll(".match")].find(N=>N.id===y.id);S&&y.replaceWith(S)}}else t.innerHTML=u}async function z(){if(K="home",T=null,R=null,A=await v("/me"),H&&A.profile&&H.ts>(A.profile.simulationImportedAt||0)&&String(H.profile.email||"").toLowerCase()===String(k.currentUser.email).toLowerCase()&&(await Xt(A.profile),A=await v("/me")),He()){const[t,e]=await Promise.all([v("/sessions"),v("/task-settings/negotiation-v1")]);Le=e.config,zs(t)}else zs(A.sessions)}function Oc(){const t=[...h.rounds||[]].sort((e,s)=>e.createdAt-s.createdAt||e.id.localeCompare(s.id));return'<section class="card"><h2>Scores by round</h2><p>Scores out of 100. Click a student to review their screen, strategies, feedback and interactions. A dash means they did not participate; Pending means their round is unfinished. Exports use participant IDs from the full-session export.</p>'+b("Export round scores","export","secondary",'data-format="scores"')+'<div class="table-scroll"><table><thead><tr><th>Student</th><th>Participant ID</th>'+t.map((e,s)=>"<th>Round "+(s+1)+"</th>").join("")+"</tr></thead><tbody>"+h.members.map(e=>{var s;return"<tr><td>"+b(m(((s=e.profile)==null?void 0:s.name)||e.pseudonym),"inspect-student","text-button",'data-uid="'+m(e.uid)+'"')+"</td><td>"+m(e.pseudonym)+"</td>"+t.map(n=>{var r,a;const i=(a=(r=h.studentScores)==null?void 0:r.find(o=>o.uid===e.uid))==null?void 0:a.rounds.find(o=>o.id===n.id);return"<td>"+(i?i.score==null?"Pending":i.score.toFixed(1):"—")+"</td>"}).join("")+"</tr>"}).join("")+"</tbody></table></div></section>"}function Nc(){return h.inspecting?'<section class="card"><h2>Saved strategy history</h2>'+(h.promptHistory||[]).sort((t,e)=>(t.version||0)-(e.version||0)).map(t=>"<details><summary>Version "+m(t.version??t.id)+'</summary><h3>Buyer</h3><p class="feedback-text">'+m(t.buyer)+'</p><h3>Seller</h3><p class="feedback-text">'+m(t.seller)+"</p></details>").join("")+"</section>":""}async function $(){return v(`/sessions/${T}${Se?"?student="+encodeURIComponent(Se):Y?"?view=student":""}`)}async function St(t){Se=null,T=t,K="session",Ee="sessions",Y=!1,R=null,ze=null,ke=null,h=await $(),D()}let gs=[];async function Jt(){K="students",T=null,gs=(await v("/admin/students")).students,me('<section class="card"><h1>Students</h1><label>Search name, university ID or email<input id="student-search" type="search" placeholder="Start typing"></label><p class="small">Select a student to edit their registration details. Session screens and interaction histories are available through each session roster.</p><div id="student-directory-results"></div></section><div id="student-editor"></div>'),ni()}function ni(){var e;const t=(((e=w("#student-search"))==null?void 0:e.value)||"").trim().toLowerCase();w("#student-directory-results").innerHTML='<div class="table-scroll"><table><thead><tr><th>Name</th><th>University ID</th><th>Email</th><th></th></tr></thead><tbody>'+gs.filter(s=>[s.name,s.firstName,s.lastName,s.email,s.studentId].some(n=>String(n||"").toLowerCase().includes(t))).map(s=>"<tr><td>"+m(s.name)+"</td><td>"+m(s.studentId)+"</td><td>"+m(s.email)+"</td><td>"+b("Edit profile","edit-student-profile","secondary",'data-uid="'+m(s.uid)+'"')+"</td></tr>").join("")+"</tbody></table></div>"}async function ht(){K="profile",A=await v("/me");const t=await v("/stats");me(`<div class="page-heading"><div><p class="eyebrow">YOUR ACCOUNT</p><h1>Profile & progress</h1></div></div>${Zn()}${Qn()}<section class="card"><h2>Your play statistics</h2><p>Completed evaluations only. Practice matches are counted separately.</p><div class="metrics"><div><strong>${t.matches}</strong><span>evaluations completed</span></div><div><strong>${t.agreed}</strong><span>agreements</span></div><div><strong>${t.surplusByCurrency&&Object.keys(t.surplusByCurrency).length?Object.entries(t.surplusByCurrency).map(([e,s])=>O(s,e)).join(" / "):"—"}</strong><span>mean surplus per role</span></div><div><strong>${t.practice}</strong><span>practice matches</span></div></div><p class="small">${t.pending} unfinished evaluations · ${t.sessions} class sessions</p></section>`)}async function Dc(){var s,n;if(K!=="session"||_e||Bt||document.hidden||document.querySelector(".car-photo-dialog[open]"))return;Bt=!0;const t=T,e=Y;try{const i=await $();if(K!=="session"||T!==t||Y!==e||Se!==(((s=i.inspecting)==null?void 0:s.uid)||null))return;const r=i.session.status!==h.session.status,a=Xn(i)!==Jn;!h.inspecting&&w("#prompts-form")&&(R=Object.fromEntries(new FormData(w("#prompts-form")))),h=i,r||a&&!((n=document.activeElement)!=null&&n.closest("form"))?D():Rt()}catch(i){Pt(i)}finally{Bt=!1}}async function ii(){await Qa(k.currentUser,{url:location.origin+location.pathname}),E="Verification email sent. Check your inbox and spam folder."}async function Xt(t){const e=H&&String(H.profile.email||"").toLowerCase()===String(k.currentUser.email).toLowerCase(),s={firstName:t.firstName,lastName:t.lastName,studentId:t.studentId,...e?{simulationProfile:H.profile}:{}};await v("/profile",s,"PUT")}document.addEventListener("submit",async t=>{var r;if(t.preventDefault(),_e)return;const e=t.target,s=Object.fromEntries(new FormData(e)),n=(r=t.submitter)==null?void 0:r.value;if(_e=!0,E="",h!=null&&h.inspecting&&K==="session")return;const i=[...e.querySelectorAll("button")];i.forEach(a=>a.disabled=!0);try{if(e.id==="admin-student-form")await v("/admin/students/"+encodeURIComponent(e.dataset.uid),s,"PUT"),E="Student profile updated.",await Jt();else if(e.id==="auth-form")It==="register"?(dt=s,await Ja(k,s.email,s.password),await ii(),await Xt(s),dt=null,await z()):await Xa(k,s.email,s.password);else if(e.id==="profile-form")await Xt(s),s.email!==k.currentUser.email?(await Za(k.currentUser,s.email,{url:location.origin+location.pathname}),E="Profile saved. Verify the link sent to your new email to finish the email change."):E="Profile saved.",await ht();else if(e.id==="join-form"){const a=await v("/join",{code:s.code});await St(a.id)}else if(e.id==="negotiation-settings"){const a=Object.fromEntries(["buyerValue","sellerCost","maxTurns","humanTurnSeconds","maxMatches","maxPractice","temperature"].map(c=>[c,Number(s[c])]));a.model=s.model,a.autoFeedback=!!s.autoFeedback,a.feedbackTone=s.feedbackTone,Le=(await v("/task-settings/negotiation-v1",a,"PUT")).config,E="Negotiation settings saved. New sessions will use these values.",fs()}else if(e.id==="create-session"){const a={...Le},o=s.testSession?{students:Number(s.simulatedStudents),engine:s.simulationEngine,playAsStudent:!!s.playAsStudent}:void 0,c=await v("/sessions",{title:s.title,code:s.code,moduleCode:s.moduleCode,taskId:s.taskId,config:a,...o?{simulation:o}:{}});await St(c.id)}else if(e.id==="prompts-form")R={buyer:s.buyer,seller:s.seller},await v(`/sessions/${T}/prompts`,{...R,final:n==="final"}),n==="practice"&&await v(`/sessions/${T}/practice`,{requestId:crypto.randomUUID()}),E=n==="final"?"Prompts submitted for evaluation.":n==="practice"?"Practice started. Watch the transcript below.":"Draft saved.",h=await $(),D();else if(e.id==="feedback-settings")await v(`/sessions/${T}/feedback-settings`,{autoFeedback:!!s.autoFeedback,feedbackTone:s.feedbackTone},"PUT"),E="Automatic feedback settings saved.",h=await $(),D();else if(e.id==="round-form")await v(`/sessions/${T}/rounds`,{requestId:crypto.randomUUID(),mode:s.mode,repetitions:Number(s.repetitions)}),h=await $(),D();else if(e.matches(".action-form")){const a=h.matches.find(o=>o.id===e.dataset.match);if(n==="offer"&&s.price==="")throw new Error("Enter a price for your offer.");await v(`/sessions/${T}/matches/${a.id}/action`,{expectedTurn:Number(e.dataset.turn),action:{type:n,price:n==="offer"?Number(s.price):n==="accept"?a.transcript.at(-1).price:null,message:s.message||""}}),e.reset(),h=await $(),Rt()}}catch(a){dt=null,Pt(a),e.id==="auth-form"&&k.currentUser&&await z()}finally{_e=!1,i.forEach(a=>{a.isConnected&&(a.disabled=!1)})}});document.addEventListener("input",t=>{if(t.target.closest("#prompts-form")){R=Object.fromEntries(new FormData(w("#prompts-form")));const e=w("#student-next-step");e&&(e.innerHTML=ms())}});document.addEventListener("change",t=>{if(t.target.id==="compare-before"||t.target.id==="compare-after"){ke={before:w("#compare-before").value,after:w("#compare-after").value},w("#prompts-form")&&(R=Object.fromEntries(new FormData(w("#prompts-form"))));const e=w("#round-comparison");e.outerHTML=Zs(h.roundComparisons,ke,{esc:m,date:Me,feedbackContent:Et})}if(t.target.id==="review-student"&&(ze=t.target.value,D()),t.target.id==="test-session"&&(w("#simulation-options").hidden=!t.target.checked),t.target.id==="play-as-student"){const e=w("select[name=simulationEngine]");e.querySelector("option[value=scripted]").disabled=t.target.checked,t.target.checked&&(e.value="live")}});document.addEventListener("click",async t=>{var s,n,i,r,a,o,c,l;const e=t.target.closest("[data-action],[data-open]");if(e&&(t.preventDefault(),!_e)){_e=!0;try{const u=e.dataset.action;if(u==="inspect-directory-session"){await St(e.dataset.session),Se=e.dataset.uid,h=await $(),D();return}if(u==="student-directory"){await Jt();return}if(u==="edit-student-profile"){const p=gs.find(y=>y.uid===e.dataset.uid);w("#student-editor").innerHTML='<section class="card"><h2>Edit student profile</h2><form id="admin-student-form" data-uid="'+m(p.uid)+'">'+C("firstName","First name",p.firstName,"text",'required maxlength="80"')+C("lastName","Last name",p.lastName,"text",'required maxlength="80"')+C("studentId","University ID",p.studentId,"text",'required minlength="2" maxlength="40"')+C("email","Email",p.email,"email","required")+'<p class="small">Changing email changes the sign-in email and requires verification again.</p><button class="primary">Save profile</button></form>'+b("Delete profile","delete-student-profile","danger",'data-uid="'+m(p.uid)+'"')+'<p class="small">Deletes registration details only. Sign-in account, session records, strategies and results remain. The student can register their details again.</p></section>';const d=await v("/admin/students/"+encodeURIComponent(p.uid)+"/sessions");w("#student-editor").insertAdjacentHTML("beforeend",'<section class="card"><h2>Student sessions</h2>'+d.sessions.map(y=>b(m(y.title||y.sessionId),"inspect-directory-session","secondary",'data-session="'+m(y.sessionId)+'" data-uid="'+m(p.uid)+'"')).join("")+(d.sessions.length?"":"<p>No joined sessions.</p>")+"</section>"),w("#student-editor").scrollIntoView({behavior:"smooth"});return}if(u==="delete-student-profile"){if(!confirm("Delete this student’s registration profile? Their sign-in account and all historical session records will remain."))return;await v("/admin/students/"+encodeURIComponent(e.dataset.uid),null,"DELETE"),E="Student profile deleted. Historical session records retained.",await Jt();return}if(u==="inspect-student"||u==="end-inspection"){Se=u==="inspect-student"?e.dataset.uid:null,Y=!1,R=null,ke=null,h=await $(),D();return}if(e.dataset.open){await St(e.dataset.open);return}if(u==="start-player-round"){if(!h.playerView||!((s=h.testControls)!=null&&s.canStart))return;const p=Object.fromEntries(new FormData(w("#prompts-form"))),d=(n=h.member)==null?void 0:n.final;if(!d||p.buyer!==d.buyer||p.seller!==d.seller)throw new Error("Submit your revised strategies before starting the round.");await v(`/sessions/${T}/rounds`,{requestId:crypto.randomUUID(),mode:"AA",repetitions:1}),ke=null,E="Test round started. Your results and personalised feedback update below.",h=await $(),D(),(i=w("#round-comparison"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})}if(u==="fill-examples"){const p=w("#prompts-form");if(!p||!h.playerView||h.session.status!=="active")return;const d=p.elements.buyer,y=p.elements.seller;if([["buyer",d],["seller",y]].some(([f,I])=>I.value.trim()&&I.value!==ys[f])&&!confirm("Replace the instructions in both boxes with the examples? Saved versions will remain available."))return;R={...ys},d.value=R.buyer,y.value=R.seller,E="Example strategies filled in. Review or edit them, then click Practise with these prompts.",w("#notice").className="",w("#notice").textContent=E;const N=w("#student-next-step");N&&(N.innerHTML=ms()),d.focus()}if(u==="retry-feedback"&&(await v(`/sessions/${T}/feedback/${e.dataset.uid}/retry`,{}),h=await $(),D()),(u==="student-view"||u==="instructor-view")&&(w("#prompts-form")&&(R=Object.fromEntries(new FormData(w("#prompts-form")))),Y=u==="student-view",h=await $(),D()),u==="prepare-player-test"&&(Y=!1,h=await $(),h.session.status==="draft"&&(await v(`/sessions/${T}/status`,{status:"lobby"}),h=await $()),(r=h.session.simulationProgress)!=null&&r.enrol||(await v(`/sessions/${T}/simulation`,{action:"enrol"}),h=await $()),h.session.status==="lobby"&&(await v(`/sessions/${T}/status`,{status:"active"}),h=await $()),(a=h.session.simulationProgress)!=null&&a.submit||await v(`/sessions/${T}/simulation`,{action:"submit"}),Y=!0,h=await $(),D()),u==="simulation"&&(await v(`/sessions/${T}/simulation`,{action:e.dataset.step}),h=await $(),D()),u==="toggle-auth"&&(It=It==="login"?"register":"login",Yt()),u==="home"&&(Ee="sessions",A?await z():Yt()),u==="admin-tab"&&(Ee=e.dataset.tab==="negotiations"?"negotiations":"sessions",E="",await z()),u==="reset-negotiation-settings"&&(Le={scenarioId:P.id,buyerValue:P.buyerValue,sellerCost:P.sellerCost,maxTurns:12,humanTurnSeconds:180,maxMatches:100,maxPractice:5,model:"gpt-4.1-mini",temperature:1},E="Baseline values filled in. Click Save negotiation settings to keep them.",fs()),u==="copy-session-link"){const p=new URL(location.pathname,location.origin);p.searchParams.set("session",e.dataset.code),await navigator.clipboard.writeText(p.href),E="Student link copied. Share it with your class.",w("#notice").textContent=E}if(u==="session-export-menu"&&oi(e.dataset.session,e.dataset.code,{esc:m,btn:b}),u==="dashboard-close"){if(!confirm(`Close ${e.dataset.code}? Unfinished negotiations will be cancelled. Results will remain available in Past sessions.`))return;await v(`/sessions/${e.dataset.session}/status`,{status:"closed"}),E="Session closed. Its results are available in Past sessions.",await z()}if(u==="delete-session"||u==="delete-session-group"){const p=u==="delete-session"?ut.filter(y=>y.id===e.dataset.session):ut.filter(y=>["closed","debrief"].includes(y.status)===(e.dataset.group==="past-sessions"));if(!p.length||!confirm(`Permanently delete ${p.length===1?p[0].code:p.length+" sessions"} and all their strategies, negotiations and results? This cannot be undone. Export any data you need first.`))return;let d=0;try{for(const y of p)await v(`/sessions/${y.id}`,null,"DELETE"),d++}catch(y){throw await z(),new Error(`${d} of ${p.length} sessions deleted. ${y.message}`)}E=`${d} ${d===1?"session":"sessions"} deleted.`,await z()}if(u==="test-round"){const p=ut.find(y=>y.id===e.dataset.session);if(!confirm(`Open a separate test using ${e.dataset.code}’s settings? You will play alongside two simulated classmates. Practice and rounds use ${((o=p==null?void 0:p.config)==null?void 0:o.model)||"the configured AI model"} and incur normal API usage when started. Class results stay unchanged.`))return;T=(await v(`/sessions/${e.dataset.session}/test-round`,{requestId:crypto.randomUUID()})).id,K="session",Ee="sessions",Se=null,Y=!0,R=null,ze=null,ke=null,h=await $(),E="Your separate test is ready. Write your strategies, then practise or start a test round.",D()}if(u==="dashboard-export"&&await Ys(e.dataset.session,e.dataset.code,e.dataset.format),u==="profile"&&await ht(),u==="logout"&&(R=null,await no(k)),u==="google"&&await So(k,new j),u==="link-google"&&(await ko(k.currentUser,new j),E="Google sign-in connected.",await ht()),u==="verify"&&(await ii(),await ht()),u==="verified"&&(await In(k.currentUser),await k.currentUser.getIdToken(!0),E=k.currentUser.emailVerified?"Email verified.":"Email is not verified yet.",await z()),u==="reset"){const p=((c=k.currentUser)==null?void 0:c.email)||((l=w("input[name=email]"))==null?void 0:l.value);if(!p)throw new Error("Enter your email address first.");await Ya(k,p,{url:location.origin+location.pathname}),E="If an account exists, a password setup / reset link has been sent to that address.",w("#notice").textContent=E}if(u==="status"){if(e.dataset.status==="closed"&&!confirm("Close this session? Unfinished negotiations will be cancelled."))return;await v(`/sessions/${T}/status`,{status:e.dataset.status}),h=await $(),D()}(u==="retry"||u==="cancel")&&(await v(`/sessions/${T}/matches/${e.dataset.match}/${u}`,{}),h=await $(),Rt()),u==="export"&&await Ys(T,h.session.code,e.dataset.format)}catch(u){Pt(u)}finally{_e=!1}}});async function Ys(t,e,s){const n=await v(`/sessions/${t}/export?format=${s}`,null,"GET",!0),i=URL.createObjectURL(await n.blob()),r=document.createElement("a");r.href=i,r.download=`agentlab-${e}${s==="scores"?"-scores.csv":"."+s}`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}so(k,async t=>{if(!dt)try{t?await z():(A=null,K="home",T=null,Yt())}catch(e){me('<section class="card"><h1>Could not load your workspace</h1><p>Check the connection and try again.</p><button data-action="home">Retry</button><button data-action="logout">Sign out</button></section>'),Pt(e)}});setInterval(Dc,5e3);document.addEventListener("input",t=>{t.target.id==="student-search"&&ni()});
