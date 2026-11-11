(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const cs={buyer:`You are buying the vehicle on my behalf. Aim to get a good price while reaching a mutually acceptable agreement.

Start below the advertised asking price, but never offer more than your supplied fallback. Explain your offer politely using the vehicle’s mileage and asking price. Do not invent defects or competing offers.

Make concessions gradually, usually €250–€500 at a time. Ask the seller to move toward your price rather than immediately matching their offer.

Aim to agree as far below your fallback as possible. If necessary, you may pay more to reach a worthwhile deal, but never exceed your private fallback value.

As the remaining turns run low, prioritise an agreement that gives me positive surplus. Accept a favourable outstanding offer explicitly. Keep messages concise and professional.`,seller:`You are selling the vehicle on my behalf. Aim to get a good price while reaching a mutually acceptable agreement.

Start at the advertised asking price, but never below your supplied fallback. Support your asking price using the vehicle’s known specifications and market value. Do not invent features, service history or competing buyers.

Make concessions gradually, usually €250–€500 at a time. Ask the buyer to increase their offer in return for a price reduction.

Aim to agree as far above your fallback as possible. If necessary, you may accept less to reach a worthwhile deal, but never accept less than your private fallback value.

As the remaining turns run low, prioritise an agreement that gives me positive surplus. Accept a favourable outstanding offer explicitly. Keep messages concise and professional.`},R={id:"bmw-x1-2021-v1",currency:"EUR",title:"2021 BMW X1 xDrive25e M Sport",askingPrice:25999,mileageKm:105013,location:"Carrickmacross, Co. Monaghan",source:"https://www.cars.ie/car/42696819-2021-bmw-x1-m-sport/",buyerValue:28e3,sellerCost:24e3,equipment:["Brand new 20” alloy wheels (included in the price)","Brand new M Performance styling kit","Front gloss black kidney grilles","Front splitter","Side extensions","Rear spoiler"],specifications:[["Overview",[["Make","BMW"],["Model","X1"],["Variant","xDrive25e M Sport"],["Trim level","Sports Trim"],["Year","2021"],["Mileage","105,013 km"],["Fuel type","Petrol Plug-in Hybrid"],["Transmission","Automatic"],["Body type","SUV"],["Seats","5"],["Doors","5"],["Colour","Grey"]]],["Ownership & history",[["Current country of registration","Ireland"],["Imported","No"],["Total owners","1"],["History check","History checked"],["Warranty","6 months"]]],["Running costs",[["Road tax","€140"],["Combined fuel consumption","7.4 L/100 km"]]],["Performance",[["Engine size","1.5 L"],["Engine power","220 hp"],["Acceleration (0–100 km/h)","6.9 sec"],["Battery capacity","Not specified"],["Battery range","Not specified"]]],["Dimensions",[["External length","4.45 m"],["External width","1.82 m"],["External height","1.58 m"],["Ground clearance","18 cm"],["Boot volume","450 L"],["Boot volume (seats down)","1,470 L"],["Fuel tank capacity","36 L"]]],["Safety",[["Euro NCAP overall safety rating","5/5"]]]]},Kn={id:"camry-2020-v1",currency:"USD",title:"2020 Toyota Camry LE",buyerValue:22e3,sellerCost:18e3},yt=t=>(t==null?void 0:t.scenarioId)===R.id?R:Kn,bt=(t,e="EUR",s=0)=>t==null?"—":new Intl.NumberFormat(e==="EUR"?"en-IE":"en-US",{style:"currency",currency:e,maximumFractionDigits:s}).format(t),Je=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Yn(t="/agentlab/"){const e=n=>`${t}cars/bmw-x1/${String(n+1).padStart(2,"0")}.webp`,s=(n,i=!0)=>`<img src="${e(n)}" alt="${R.title} · listing photo ${n+1}" ${i?'loading="lazy"':'fetchpriority="high"'} width="1200" height="900">`;return`<section class="car-listing" aria-labelledby="car-title">
    <div class="car-gallery" aria-label="Vehicle photographs">
      ${Array.from({length:5},(n,i)=>`<button type="button" class="car-photo ${i===0?"car-photo-main":""}" data-car-photo="${i}" aria-label="Open photo ${i+1} of 14">${s(i,i>0)}${i===4?'<span class="car-more-photos">+9 photos</span>':""}</button>`).join("")}
      <button type="button" class="car-photo-count" data-car-photo="0">▧ View all 14 photos</button>
    </div>
    <div class="car-listing-body">
      <div class="car-title-row"><div><h2 id="car-title">${R.title}</h2><p class="car-location">${R.location}</p></div><div class="car-asking-price"><span>Asking price</span><strong>${bt(R.askingPrice)}</strong></div></div>
      <div class="car-tags"><span>6 month warranty</span><span>History checked</span></div>
      <dl class="car-highlights">
        ${[["◴","105,013 km","Mileage"],["⛽","1.5 L","Petrol Plug-in Hybrid"],["⚙","Automatic","Transmission"],["▱","SUV","Body type"],["♙","1","Previous owner"],["◈","Grey","Colour"]].map(([n,i,r])=>`<div><span class="car-spec-icon" aria-hidden="true">${n}</span><div><dd>${i}</dd><dt>${r}</dt></div></div>`).join("")}
      </dl>
      <section class="car-specifications" aria-labelledby="car-specifications-title"><h3 id="car-specifications-title">Specifications</h3>
        ${R.specifications.map(([n,i],r)=>`<details ${r===0?"open":""}><summary>${Je(n)}</summary><dl>${i.map(([a,o])=>`<div><dt>${Je(a)}</dt><dd>${Je(o)}</dd></div>`).join("")}</dl></details>`).join("")}
      </section>
      <section class="car-equipment" aria-labelledby="car-equipment-title"><h3 id="car-equipment-title">Additional equipment</h3><p><strong>Brand new 20” alloy wheels</strong>, included in the price, along with a <strong>brand new M Performance styling kit</strong> comprising:</p><ul>${R.equipment.slice(2).map(n=>`<li>${Je(n)}</li>`).join("")}</ul></section>
      <p class="car-source">Teaching listing adapted from <a href="${R.source}" target="_blank" rel="noopener noreferrer">Cars.ie</a>. Vehicle facts and photographs are the shared scenario for this exercise.</p>
    </div>
    <dialog class="car-photo-dialog" aria-label="Vehicle photo gallery">
      <div class="car-dialog-toolbar"><span data-car-photo-status aria-live="polite">Photo 1 of 14</span><button type="button" data-car-close aria-label="Close photo gallery">Close ×</button></div>
      <div class="car-dialog-stage"><button type="button" data-car-step="-1" aria-label="Previous photo">‹</button><img data-car-large src="${e(0)}" alt="${R.title} · listing photo 1"><button type="button" data-car-step="1" aria-label="Next photo">›</button></div>
      <div class="car-thumbnails">${Array.from({length:14},(n,i)=>`<button type="button" data-car-thumb="${i}" aria-label="Show photo ${i+1}" aria-pressed="${i===0}">${s(i)}</button>`).join("")}</div>
    </dialog>
  </section>`}function Jn(t=document){if(t.__carGalleryReady)return;t.__carGalleryReady=!0;let e=null;function s(n,i){const r=[...n.querySelectorAll("[data-car-thumb]")];i=(i+r.length)%r.length,n.dataset.photo=String(i);const a=r[i].querySelector("img"),o=n.querySelector("[data-car-large]");o.src=a.src,o.alt=a.alt,n.querySelector("[data-car-photo-status]").textContent=`Photo ${i+1} of ${r.length}`,r.forEach((l,d)=>l.setAttribute("aria-pressed",String(d===i)))}t.addEventListener("click",n=>{const i=n.target.closest("button");if(!i)return;const r=i.closest(".car-listing");if(!r)return;const a=r.querySelector("dialog");i.hasAttribute("data-car-photo")?(e=i,s(a,Number(i.dataset.carPhoto)),a.showModal()):i.hasAttribute("data-car-close")?(a.close(),e==null||e.focus()):i.hasAttribute("data-car-step")?s(a,Number(a.dataset.photo||0)+Number(i.dataset.carStep)):i.hasAttribute("data-car-thumb")&&s(a,Number(i.dataset.carThumb))}),t.addEventListener("keydown",n=>{const i=n.target.closest(".car-photo-dialog[open]");i&&(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),s(i,Number(i.dataset.photo||0)+(n.key==="ArrowRight"?1:-1)))})}function Xn(t){const e=t.maxTurns,s=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
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
  </section>`}function Qn(t,e){if(yt(t)!==R)return Xn(t);const s=t.maxTurns,n=t.maxPractice;return`<section class="card student-brief" aria-labelledby="student-brief-title">
    <p class="eyebrow">THE BRIEF</p>
    <h2 id="student-brief-title">Write the strategy. Let your agent negotiate.</h2>
    <p>Write two sets of instructions: one for an AI agent buying a car and one for an AI agent selling it. Your objective is to help each agent maximise your <strong>surplus</strong>—how much better the deal is than your alternative outside this negotiation.</p>
    ${Yn(e)}
    <div class="brief-columns brief-learning-intro">
      <section><h3>Negotiate this BMW</h3><p>The advertised price is <strong>€25,999</strong>. It is the seller’s asking price, not a fixed transaction price or either side’s fallback. Negotiate a single price for the car and the included equipment.</p><p>Both sides receive the same vehicle information. The mileage for this exercise is <strong>105,013 km</strong>. Base your arguments on the listing facts and the private fallback supplied to your role.</p></section>
      <section aria-labelledby="brief-scoring"><h3 id="brief-scoring">Fallback and scoring</h3>
        <p>Your <strong>fallback</strong> is your outside option if you do not agree. For a buyer, it is the price of a similar car at a dealer. For a seller, it is the amount a dealer would pay as a trade-in.</p>
        <ul><li><strong>Buyer surplus = buyer fallback − agreed price.</strong> A lower price is better for the buyer.</li><li><strong>Seller surplus = agreed price − seller fallback.</strong> A higher price is better for the seller.</li><li><strong>No agreement = zero surplus for both sides.</strong> You earn the improvement over your fallback, not the fallback amount itself.</li></ul>
        <p>Each agent receives its own fallback privately. When you negotiate directly, your own fallback is shown on your turn. Write instructions that work with the fallback supplied for that negotiation.</p>
        <div class="brief-example"><h4>Worked example · illustrative values</h4><p>If the buyer can buy elsewhere for <strong>€28,000</strong> and the seller can trade in for <strong>€24,000</strong>, a deal at <strong>€26,000</strong> gives:</p><ul><li>Buyer: €28,000 − €26,000 = <strong>€2,000 surplus</strong>.</li><li>Seller: €26,000 − €24,000 = <strong>€2,000 surplus</strong>.</li></ul><p class="small">These illustrate this exercise’s default fallbacks; your instructor may set different values. A buyer paying above their fallback, or a seller accepting below theirs, earns negative surplus.</p></div>
      </section>
    </div>
    <div class="brief-columns brief-divider">
      <section aria-labelledby="brief-steps"><h3 id="brief-steps">Your steps</h3>
        <ol class="brief-steps"><li><strong>Write both strategies.</strong> Use the Buyer instructions and Seller instructions boxes below. Give each agent an opening approach, concession rules, and conditions for accepting or walking away.</li>
          ${n>0?`<li><strong>Practise and inspect.</strong> Choose “Practise with these prompts” to run your own buyer against your own seller. You may run up to <strong>${n} practice ${n===1?"match":"matches"}</strong> in this session. Read the transcript and check the offers, acceptance decisions and surplus. Practice is optional and does not count toward evaluation scores.</li><li><strong>Revise your playbooks.</strong> Improve unclear instructions using what you observed. “Save draft” saves your work; it does not submit it for evaluation.</li>`:"<li><strong>Review your playbooks.</strong> Practice is disabled for this session. Check that both strategies explain how to adapt to offers and respect the supplied fallback. “Save draft” saves your work; it does not submit it for evaluation.</li>"}
          <li><strong>Submit for evaluation.</strong> Submit both strategies, then wait for your instructor to start a round. In an agent tournament, your buyer meets other students’ sellers and your seller meets other students’ buyers.</li>
          <li><strong>Review and improve.</strong> Read your results and transcripts below, plus feedback when available. If you edit your strategies, submit again to use the revision in a later round. Rounds already started keep their original submissions.</li>
        </ol>
      </section>
      <section aria-labelledby="brief-rules"><h3 id="brief-rules">Rules for this session</h3>
        <ul><li><strong>Buyer moves first.</strong> There are at most <strong>${s} alternating messages in total</strong>: up to ${Math.ceil(s/2)} buyer messages and ${Math.floor(s/2)} seller messages. An offer, acceptance or decision to end the negotiation each uses one turn.</li>
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
        <article class="prompt-example weak"><h4>Bad example · a rigid buyer script</h4><blockquote>“Offer €26,000 in the first round, then go up by €500 each round. Don’t go higher than €29,000.”</blockquote><p><strong>Why it is weak:</strong> this adapts the paper’s rigid-script example to this car. It ignores the supplied fallback, the seller’s responses and time remaining. With a €28,000 buyer fallback, it could authorise a loss.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable buyer playbook</h4><blockquote>“Open below the advertised asking price, without exceeding my supplied fallback. Increase offers in small steps when the seller also makes concessions. Aim to agree as far below my fallback as possible. Accept a favourable offer when further bargaining risks losing a worthwhile deal, especially near the turn limit. Never offer or accept a price above my fallback. Use the known car facts to explain offers; do not invent defects or alternatives.”</blockquote><p><strong>Why it is stronger:</strong> it sets an objective, anchors decisions to the actual fallback, and explains when to concede or accept.</p></article>
        <article class="prompt-example weak"><h4>Bad example · a vague seller instruction</h4><blockquote>“Get me the best price. Be tough and don’t give in.”</blockquote><p><strong>Why it is weak:</strong> it gives no opening approach, concession rule or acceptance condition. The agent has to guess how to balance price against the risk of no agreement.</p></article>
        <article class="prompt-example"><h4>Good example · an adaptable seller playbook</h4><blockquote>“Open at the advertised asking price, but never below my supplied fallback. Support the price using the known car facts. Reduce the asking price in small steps in exchange for movement from the buyer. Aim to agree as far above my fallback as possible. Near the turn limit, accept an offer above my fallback if further bargaining risks no deal. Never offer or accept a price below my fallback. Do not invent features, service history or other buyers.”</blockquote><p><strong>Why it is stronger:</strong> it connects the seller’s objective to a price boundary, reciprocal concessions and a deadline decision.</p></article>
      </div>
      <p class="small">Develop your own approach and explain how it should adapt. Keep personal information out of your instructions.</p>
    </section>
  </section>`}function Vs(t,e,{esc:s,date:n,feedbackContent:i}){if(!(t!=null&&t.length))return'<section class="card"><h2>Compare your rounds</h2><p>Your first evaluation round will appear here. After revising and submitting your strategies, run another round to compare results and feedback.</p></section>';const r=t.find(p=>p.id===(e==null?void 0:e.before))||t[Math.max(0,t.length-2)],a=t.find(p=>p.id===(e==null?void 0:e.after))||t.at(-1),o=(p,w=a.currency||"USD")=>bt(p,w,2),l=p=>p==null?"—":`${(p*100).toFixed(1)}%`,d=p=>`Round ${p.number}`,c=p=>p.feedback?i({published:p.feedback}):["queued","generating","error"].includes(p.feedbackStatus)?i({status:p.feedbackStatus}):'<p class="small">No feedback is available for this round yet. It is generated after the full round finishes when automatic feedback is enabled. Earlier rounds without feedback are not generated retrospectively.</p>',f=(p,w,H)=>{const Ie=p[w].strategies,C=H==null?void 0:H[w].strategies,zn=C&&JSON.stringify(Ie.map(q=>[q.kind,q.instructions]))!==JSON.stringify(C.map(q=>[q.kind,q.instructions]));return`<details class="round-strategy" data-round-strategy="${s(p.id)}-${w}"><summary>${w==="buyer"?"Buyer":"Seller"} strategy${C?` · ${zn?"revised":"unchanged"}`:""}</summary>${Ie.length?Ie.map(q=>q.kind==="agent"?`<p class="small">Submitted version ${s(q.version)}</p><p class="feedback-text">${s(q.instructions)}</p>`:"<p>This role was played directly, without an agent strategy.</p>").join(""):"<p>You did not play this role in this round.</p>"}</details>`},g=(p,w)=>`<article class="round-card"><div class="section-heading"><h3>${d(p)}</h3><span class="badge ${p.complete?"agreed":"playing"}">${p.complete?"Complete":"Partial results"}</span></div><p class="small">${n(p.createdAt)} · ${p.completed}/${p.total} scored negotiations${p.pending?` · ${p.pending} running`:""}${p.errors?` · ${p.errors} needing attention`:""}${p.cancelled?` · ${p.cancelled} cancelled`:""}</p><dl class="round-metrics"><dt>Final score</dt><dd>${p.score==null?"Pending":p.score.toFixed(1)+" / 100"}</dd><dt>Buyer mean surplus</dt><dd>${o(p.buyer.meanSurplus,p.currency)} <small>(${p.buyer.completed} matches)</small></dd><dt>Seller mean surplus</dt><dd>${o(p.seller.meanSurplus,p.currency)} <small>(${p.seller.completed} matches)</small></dd><dt>Agreements</dt><dd>${p.agreements}/${p.completed} · ${l(p.agreementRate)}</dd></dl>${f(p,"buyer",w)}${f(p,"seller",w)}<h3 class="round-feedback-heading">Feedback for ${d(p).toLowerCase()}</h3>${c(p)}</article>`,T=t.length>1&&r.id!==a.id,P=(p,w,H="money")=>p==null||w==null?"—":`${w-p>0?"+":w-p<0?"−":""}${H==="money"?o(Math.abs(w-p)):Math.abs((w-p)*100).toFixed(1)+" percentage points"}`,se=r.buyer.completed===a.buyer.completed&&r.seller.completed===a.seller.completed;return`<section class="card" id="round-comparison"><p class="eyebrow">YOUR PROGRESS</p><h2>Compare your rounds</h2><p>Each round shows only your evaluations, the strategies actually used, and that round's personalised feedback. Practice is excluded.</p><p class="small"><strong>How your score is calculated:</strong> Each negotiation earns 100 × your surplus ÷ available surplus (buyer value minus seller cost), limited to 0–100. No agreement earns 0. Your final score averages all your buyer and seller evaluations, rounded to one decimal. Capturing half the available surplus in every match earns 50/100. Practice is excluded. Your final score appears once all your matches have scored results.</p>${T?`<div class="form-grid"><label>Earlier round<select id="compare-before">${t.map((p,w)=>`<option value="${s(p.id)}" ${p.id===r.id?"selected":""} ${w>=t.indexOf(a)?"disabled":""}>${d(p)}</option>`).join("")}</select></label><label>Later round<select id="compare-after">${t.map((p,w)=>`<option value="${s(p.id)}" ${p.id===a.id?"selected":""} ${w<=t.indexOf(r)?"disabled":""}>${d(p)}</option>`).join("")}</select></label></div>${r.complete&&a.complete?`<div class="round-change"><strong>Change from ${d(r)} to ${d(a)}</strong><div class="metrics"><div><strong>${P(r.buyer.meanSurplus,a.buyer.meanSurplus)}</strong><span>buyer mean surplus</span></div><div><strong>${P(r.seller.meanSurplus,a.seller.meanSurplus)}</strong><span>seller mean surplus</span></div><div><strong>${P(r.agreementRate,a.agreementRate,"rate")}</strong><span>agreement rate</span></div></div>${se?"":'<p class="small">These rounds have different numbers of scored matches per role.</p>'}</div>`:'<p class="callout">A change summary appears when all your negotiations in both rounds have scored results. Running, failed and cancelled matches are not counted as zero.</p>'}`:'<p class="callout">Your first round is below. Revise and submit your strategies, then run another round to unlock a side-by-side comparison.</p>'}<div class="round-comparison-grid ${T?"":"single"}">${g(r)}${T?g(a,r):""}</div><p class="small">Outcomes can vary with counterpart strategies, game settings and AI responses. A higher score in one round does not by itself establish that a strategy is better.</p></section>`}const Zn="/agentlab/assets/google-g-CpxN0HWb.png",ei=()=>{};var ls={};/**
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
 */const Hs=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[s++]=i:i<2048?(e[s++]=i>>6|192,e[s++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[s++]=i>>18|240,e[s++]=i>>12&63|128,e[s++]=i>>6&63|128,e[s++]=i&63|128):(e[s++]=i>>12|224,e[s++]=i>>6&63|128,e[s++]=i&63|128)}return e},ti=function(t){const e=[];let s=0,n=0;for(;s<t.length;){const i=t[s++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[s++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[s++],a=t[s++],o=t[s++],l=((i&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const r=t[s++],a=t[s++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const r=t[i],a=i+1<t.length,o=a?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,c=r>>2,f=(r&3)<<4|o>>4;let g=(o&15)<<2|d>>6,T=d&63;l||(T=64,a||(g=64)),n.push(s[c],s[f],s[g],s[T])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ti(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const r=s[t.charAt(i++)],o=i<t.length?s[t.charAt(i)]:0;++i;const d=i<t.length?s[t.charAt(i)]:64;++i;const f=i<t.length?s[t.charAt(i)]:64;if(++i,r==null||o==null||d==null||f==null)throw new si;const g=r<<2|o>>4;if(n.push(g),d!==64){const T=o<<4&240|d>>2;if(n.push(T),f!==64){const P=d<<6&192|f;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class si extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ni=function(t){const e=Hs(t);return Ws.encodeByteArray(e,!0)},js=function(t){return ni(t).replace(/\./g,"")},qs=function(t){try{return Ws.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ii(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ri=()=>ii().__FIREBASE_DEFAULTS__,ai=()=>{if(typeof process>"u"||typeof ls>"u")return;const t=ls.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qs(t[1]);return e&&JSON.parse(e)},jt=()=>{try{return ei()||ri()||ai()||oi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ci=t=>{var e,s;return(s=(e=jt())==null?void 0:e.emulatorHosts)==null?void 0:s[t]},Gs=()=>{var t;return(t=jt())==null?void 0:t.config},zs=t=>{var e;return(e=jt())==null?void 0:e[`_${t}`]};/**
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
 */class Ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,n)=>{s?this.reject(s):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,n))}}}/**
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
 */function N(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function li(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function di(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ui(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pi(){const t=N();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fi(){try{return typeof indexedDB=="object"}catch{return!1}}function mi(){return new Promise((t,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),s||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{s=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(s){e(s)}})}/**
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
 */const gi="FirebaseError";class he extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=gi,Object.setPrototypeOf(this,he.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?yi(r,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new he(i,o,n)}}function yi(t,e){try{let s=0,n="";for(;s<t.length;){const i=t.indexOf("{$",s);if(i===-1){n+=t.substring(s);break}const r=t.indexOf("}",i+2);if(r===-1){n+=t.substring(s);break}const a=t.substring(i+2,r),o=e[a];n+=t.substring(s,i)+(o!=null?String(o):`<${a}?>`),s=r+1}return n}catch{return t}}function bi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Te(t,e){if(t===e)return!0;const s=Object.keys(t),n=Object.keys(e);for(const i of s){if(!n.includes(i))return!1;const r=t[i],a=e[i];if(ds(r)&&ds(a)){if(!Te(r,a))return!1}else if(r!==a)return!1}for(const i of n)if(!s.includes(i))return!1;return!0}function ds(t){return t!==null&&typeof t=="object"}/**
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
 */function je(t){const e=[];for(const[s,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function De(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,r]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Le(t){const e=t.indexOf("?");if(!e)return"";const s=t.indexOf("#",e);return t.substring(e,s>0?s:void 0)}function vi(t,e){const s=new wi(t,e);return s.subscribe.bind(s)}class wi{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,n){let i;if(e===void 0&&s===void 0&&n===void 0)throw new Error("Missing Observer.");Ii(e,["next","error","complete"])?i=e:i={next:e,error:s,complete:n},i.next===void 0&&(i.next=Tt),i.error===void 0&&(i.error=Tt),i.complete===void 0&&(i.complete=Tt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ii(t,e){if(typeof t!="object"||t===null)return!1;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}function Tt(){}/**
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
 */function U(t){return t&&t._delegate?t._delegate:t}/**
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
 */function qt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _i(t){return(await fetch(t,{credentials:"include"})).ok}class Ae{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class Ei{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const n=new Ks;if(this.instancesDeferred.set(s,n),this.isInitialized(s)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:s});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ki(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[s,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:s});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&a.resolve(i)}return i}onInit(e,s){const n=this.normalizeInstanceIdentifier(s),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,s){const n=this.onInitCallbacks.get(s);if(n)for(const i of n)try{i(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Si(e),options:s}),this.instances.set(e,n),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Si(t){return t===me?void 0:t}function ki(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ti{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Ei(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var I;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(I||(I={}));const Ai={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},$i=I.INFO,Ci={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Pi=(t,e,...s)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ci[e];if(i)console[i](`[${n}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ys{constructor(e){this.name=e,this._logLevel=$i,this._logHandler=Pi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ai[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const Ri=(t,e)=>e.some(s=>t instanceof s);let us,hs;function Oi(){return us||(us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ni(){return hs||(hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Js=new WeakMap,Dt=new WeakMap,Xs=new WeakMap,At=new WeakMap,Gt=new WeakMap;function Di(t){const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{s(de(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(s=>{s instanceof IDBCursor&&Js.set(s,t)}).catch(()=>{}),Gt.set(e,t),e}function Li(t){if(Dt.has(t))return;const e=new Promise((s,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{s(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});Dt.set(t,e)}let Lt={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return Dt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xs.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return de(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mi(t){Lt=t(Lt)}function xi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call($t(this),e,...s);return Xs.set(n,e.sort?e.sort():[e]),de(n)}:Ni().includes(t)?function(...e){return t.apply($t(this),e),de(Js.get(this))}:function(...e){return de(t.apply($t(this),e))}}function Ui(t){return typeof t=="function"?xi(t):(t instanceof IDBTransaction&&Li(t),Ri(t,Oi())?new Proxy(t,Lt):t)}function de(t){if(t instanceof IDBRequest)return Di(t);if(At.has(t))return At.get(t);const e=Ui(t);return e!==t&&(At.set(t,e),Gt.set(e,t)),e}const $t=t=>Gt.get(t);function Bi(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=de(a);return n&&a.addEventListener("upgradeneeded",l=>{n(de(a.result),l.oldVersion,l.newVersion,de(a.transaction),l)}),s&&a.addEventListener("blocked",l=>s(l.oldVersion,l.newVersion,l)),o.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),o}const Fi=["get","getKey","getAll","getAllKeys","count"],Vi=["put","add","delete","clear"],Ct=new Map;function ps(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ct.get(e))return Ct.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=Vi.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Fi.includes(s)))return;const r=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(o.shift())),(await Promise.all([d[s](...o),i&&l.done]))[0]};return Ct.set(e,r),r}Mi(t=>({...t,get:(e,s,n)=>ps(e,s)||t.get(e,s,n),has:(e,s)=>!!ps(e,s)||t.has(e,s)}));/**
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
 */class Hi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(Wi(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function Wi(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mt="@firebase/app",fs="0.16.2";/**
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
 */const J=new Ys("@firebase/app"),ji="@firebase/app-compat",qi="@firebase/analytics-compat",Gi="@firebase/analytics",zi="@firebase/app-check-compat",Ki="@firebase/app-check",Yi="@firebase/auth",Ji="@firebase/auth-compat",Xi="@firebase/database",Qi="@firebase/data-connect",Zi="@firebase/database-compat",er="@firebase/functions",tr="@firebase/functions-compat",sr="@firebase/installations",nr="@firebase/installations-compat",ir="@firebase/messaging",rr="@firebase/messaging-compat",ar="@firebase/performance",or="@firebase/performance-compat",cr="@firebase/remote-config",lr="@firebase/remote-config-compat",dr="@firebase/storage",ur="@firebase/storage-compat",hr="@firebase/firestore",pr="@firebase/ai",fr="@firebase/firestore-compat",mr="firebase",gr="12.19.0";/**
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
 */const xt="[DEFAULT]",yr={[Mt]:"fire-core",[ji]:"fire-core-compat",[Gi]:"fire-analytics",[qi]:"fire-analytics-compat",[Ki]:"fire-app-check",[zi]:"fire-app-check-compat",[Yi]:"fire-auth",[Ji]:"fire-auth-compat",[Xi]:"fire-rtdb",[Qi]:"fire-data-connect",[Zi]:"fire-rtdb-compat",[er]:"fire-fn",[tr]:"fire-fn-compat",[sr]:"fire-iid",[nr]:"fire-iid-compat",[ir]:"fire-fcm",[rr]:"fire-fcm-compat",[ar]:"fire-perf",[or]:"fire-perf-compat",[cr]:"fire-rc",[lr]:"fire-rc-compat",[dr]:"fire-gcs",[ur]:"fire-gcs-compat",[hr]:"fire-fst",[fr]:"fire-fst-compat",[pr]:"fire-vertex","fire-js":"fire-js",[mr]:"fire-js-all"};/**
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
 */const rt=new Map,br=new Map,Ut=new Map;function ms(t,e){try{t.container.addComponent(e)}catch(s){J.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function Be(t){const e=t.name;if(Ut.has(e))return J.debug(`There were multiple attempts to register component ${e}.`),!1;Ut.set(e,t);for(const s of rt.values())ms(s,t);for(const s of br.values())ms(s,t);return!0}function Qs(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}function M(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},G=new We("app","Firebase",vr);/**
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
 */class wr{constructor(e,s,n){this._isDeleted=!1,this._options={...e},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}/**
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
 */const qe=gr;function Zs(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const n={name:xt,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw G.create("bad-app-name",{appName:String(i)});if(s||(s=Gs()),!s)throw G.create("no-options");const r=rt.get(i);if(r)if(Te(s,r.options)){if(Te(n,r.config))return r;throw G.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(n)})}else throw G.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(s)});const a=new Ti(i);for(const l of Ut.values())a.addComponent(l);const o=new wr(s,n,a);return rt.set(i,o),o}function Ir(t=xt){const e=rt.get(t);if(!e&&t===xt&&Gs())return Zs();if(!e)throw G.create("no-app",{appName:t});return e}function _e(t,e,s){let n=yr[t]??t;s&&(n+=`-${s}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${n}" with version "${e}":`];i&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),J.warn(a.join(" "));return}Be(new Ae(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const _r="firebase-heartbeat-database",Er=1,Fe="firebase-heartbeat-store";let Pt=null;function en(){return Pt||(Pt=Bi(_r,Er,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fe)}catch(s){console.warn(s)}}}}).catch(t=>{throw G.create("idb-open",{originalErrorMessage:t.message})})),Pt}async function Sr(t){try{const s=(await en()).transaction(Fe),n=await s.objectStore(Fe).get(tn(t));return await s.done,n}catch(e){if(e instanceof he)J.warn(e.message);else{const s=G.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});J.warn(s.message)}}}async function gs(t,e){try{const n=(await en()).transaction(Fe,"readwrite");await n.objectStore(Fe).put(e,tn(t)),await n.done}catch(s){if(s instanceof he)J.warn(s.message);else{const n=G.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});J.warn(n.message)}}}function tn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kr=1024,Tr=30;class Ar{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Cr(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,s;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ys();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Tr){const a=Pr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){J.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=ys(),{heartbeatsToSend:n,unsentEntries:i}=$r(this._heartbeatsCache.heartbeats),r=js(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=s,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(s){return J.warn(s),""}}}function ys(){return new Date().toISOString().substring(0,10)}function $r(t,e=kr){const s=[];let n=t.slice();for(const i of t){const r=s.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),bs(s)>e){r.dates.pop();break}}else if(s.push({agent:i.agent,dates:[i.date]}),bs(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class Cr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fi()?mi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Sr(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return gs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return gs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function bs(t){return js(JSON.stringify({version:2,heartbeats:t})).length}function Pr(t){if(t.length===0)return-1;let e=0,s=t[0].date;for(let n=1;n<t.length;n++)t[n].date<s&&(s=t[n].date,e=n);return e}/**
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
 */function Rr(t){Be(new Ae("platform-logger",e=>new Hi(e),"PRIVATE")),Be(new Ae("heartbeat",e=>new Ar(e),"PRIVATE")),_e(Mt,fs,t),_e(Mt,fs,"esm2020"),_e("fire-js","")}/**
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
 */Rr("");var Or="firebase",Nr="12.19.0";/**
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
 */_e(Or,Nr,"app");function sn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dr=sn,nn=new We("auth","Firebase",sn());/**
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
 */const at=new Ys("@firebase/auth");function Qe(t,...e){at.logLevel<=I.WARN&&at.warn(`Auth (${qe}): ${t}`,...e)}function Ze(t,...e){at.logLevel<=I.ERROR&&at.error(`Auth (${qe}): ${t}`,...e)}/**
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
 */function x(t,...e){throw zt(t,...e)}function F(t,...e){return zt(t,...e)}function vt(t,e,s){const n={...Dr(),[e]:s};return new We("auth","Firebase",n).create(e,{appName:t.name})}function Y(t){return vt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rn(t,e,s){const n=s;if(!(e instanceof n))throw n.name!==e.constructor.name&&x(t,"argument-error"),vt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zt(t,...e){if(typeof t!="string"){const s=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(s,...n)}return nn.create(t,...e)}function m(t,e,...s){if(!t)throw zt(e,...s)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ze(e),new Error(e)}function X(t,e){t||z(e)}/**
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
 */function Bt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Lr(){return vs()==="http:"||vs()==="https:"}function vs(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Mr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lr()||ui()||"connection"in navigator)?navigator.onLine:!0}function xr(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ge{constructor(e,s){this.shortDelay=e,this.longDelay=s,X(s>e,"Short delay should be less than long delay!"),this.isMobile=li()||hi()}get(){return Mr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kt(t,e){X(t.emulator,"Emulator should always be set here");const{url:s}=t.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
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
 */class an{static initialize(e,s,n){this.fetchImpl=e,s&&(this.headersImpl=s),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ur={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Br=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fr=new Ge(3e4,6e4);function Z(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ee(t,e,s,n,i={}){return on(t,i,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const o=je({...a,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:l,...r};return di()||(d.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&qt(t.emulatorConfig.host)&&(d.credentials="include"),an.fetch()(await cn(t,t.config.apiHost,s,o),d)})}async function on(t,e,s){t._canInitEmulator=!1;const n={...Ur,...e};try{const i=new Hr(t),r=await Promise.race([s(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Xe(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[l,d]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xe(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Xe(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Xe(t,"user-disabled",a);const c=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw vt(t,c,d);x(t,c)}}catch(i){if(i instanceof he)throw i;x(t,"network-request-failed",{message:String(i)})}}async function ze(t,e,s,n,i={}){const r=await ee(t,e,s,n,i);return"mfaPendingCredential"in r&&x(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function cn(t,e,s,n){const i=`${e}${s}?${n}`,r=t,a=r.config.emulator?Kt(t.config,i):`${t.config.apiScheme}://${i}`;return Br.includes(s)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function Vr(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,n)=>{this.timer=setTimeout(()=>n(F(this.auth,"network-request-failed")),Fr.get())})}}function Xe(t,e,s){const n={appName:t.name};s.email&&(n.email=s.email),s.phoneNumber&&(n.phoneNumber=s.phoneNumber);const i=F(t,e,n);return i.customData._tokenResponse=s,i}function ws(t){return t!==void 0&&t.enterprise!==void 0}class Wr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===e)return Vr(s.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jr(t,e){return ee(t,"GET","/v2/recaptchaConfig",Z(t,e))}/**
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
 */async function qr(t,e){return ee(t,"POST","/v1/accounts:delete",e)}async function ot(t,e){return ee(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gr(t,e=!1){const s=U(t),n=await s.getIdToken(e),i=Yt(n);m(i&&i.exp&&i.auth_time&&i.iat,s.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:n,authTime:xe(Rt(i.auth_time)),issuedAtTime:xe(Rt(i.iat)),expirationTime:xe(Rt(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Rt(t){return Number(t)*1e3}function Yt(t){const[e,s,n]=t.split(".");if(e===void 0||s===void 0||n===void 0)return Ze("JWT malformed, contained fewer than 3 sections"),null;try{const i=qs(s);return i?JSON.parse(i):(Ze("Failed to decode base64 JWT payload"),null)}catch(i){return Ze("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Is(t){const e=Yt(t);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ve(t,e,s=!1){if(s)return e;try{return await e}catch(n){throw n instanceof he&&zr(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function zr({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ft{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=xe(this.lastLoginAt),this.creationTime=xe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ct(t){var f;const e=t.auth,s=await t.getIdToken(),n=await Ve(t,ot(e,{idToken:s}));m(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const r=(f=i.providerUserInfo)!=null&&f.length?dn(i.providerUserInfo):[],a=Yr(t.providerData,r),o=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=o?l:!1,c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ft(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function ln(t){const e=U(t);await ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yr(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function dn(t){return t.map(({providerId:e,...s})=>({providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
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
 */async function Jr(t,e){const s=await on(t,{},async()=>{const n=je({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,a=await cn(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:n};return t.emulatorConfig&&qt(t.emulatorConfig.host)&&(l.credentials="include"),an.fetch()(a,l)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function Xr(t,e){return ee(t,"POST","/v2/accounts:revokeToken",Z(t,e))}/**
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
 */class Ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");const s="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Is(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}updateFromIdToken(e){m(e.length!==0,"internal-error");const s=Is(e);this.updateTokensAndExpiration(e,null,s)}async getToken(e,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:n,refreshToken:i,expiresIn:r}=await Jr(e,s);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,s,n){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,s){const{refreshToken:n,accessToken:i,expirationTime:r}=s,a=new Ee;return n&&(m(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(m(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(m(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ee,this.toJSON())}_performRefresh(){return z("not implemented")}}/**
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
 */function ne(t,e){m(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class B{constructor({uid:e,auth:s,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new Kr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ft(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const s=await Ve(this,this.stsTokenManager.getToken(this.auth,e));return m(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return Gr(this,e)}reload(){return ln(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>({...s})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const s=new B({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),s&&await ct(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(M(this.auth.app))return Promise.reject(Y(this.auth));const e=await this.getIdToken();return await Ve(this,qr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){const n=s.displayName??void 0,i=s.email??void 0,r=s.phoneNumber??void 0,a=s.photoURL??void 0,o=s.tenantId??void 0,l=s._redirectEventId??void 0,d=s.createdAt??void 0,c=s.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:T,providerData:P,stsTokenManager:se}=s;m(f&&se,e,"internal-error");const p=Ee.fromJSON(this.name,se);m(typeof f=="string",e,"internal-error"),ne(n,e.name),ne(i,e.name),m(typeof g=="boolean",e,"internal-error"),m(typeof T=="boolean",e,"internal-error"),ne(r,e.name),ne(a,e.name),ne(o,e.name),ne(l,e.name),ne(d,e.name),ne(c,e.name);const w=new B({uid:f,auth:e,email:i,emailVerified:g,displayName:n,isAnonymous:T,photoURL:a,phoneNumber:r,tenantId:o,stsTokenManager:p,createdAt:d,lastLoginAt:c});return P&&Array.isArray(P)&&(w.providerData=P.map(H=>({...H}))),l&&(w._redirectEventId=l),w}static async _fromIdTokenResponse(e,s,n=!1){const i=new Ee;i.updateFromServerResponse(s);const r=new B({uid:s.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ct(r),r}static async _fromGetAccountInfoResponse(e,s,n){const i=s.users[0];m(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?dn(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),o=new Ee;o.updateFromIdToken(n);const l=new B({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ft(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,d),l}}/**
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
 */const _s=new Map;function K(t){X(t instanceof Function,"Expected a class definition");let e=_s.get(t);return e?(X(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_s.set(t,e),e)}/**
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
 */class un{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}un.type="NONE";const Es=un;/**
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
 */function et(t,e,s){return`firebase:${t}:${e}:${s}`}class ye{constructor(e,s,n){this.persistence=e,this.auth=s,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=et(this.userKey,i.apiKey,r),this.fullPersistenceKey=et("persistence",i.apiKey,r),this.boundEventHandler=s._onStorageEvent.bind(s);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const s=await ot(this.auth,{idToken:e}).catch(()=>{});return s?B._fromGetAccountInfoResponse(this.auth,s,e):null}return B._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,s,n="authUser"){if(!s.length)return new ye(K(Es),e,n);const i=(await Promise.all(s.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let r=i[0]||K(Es);const a=et(n,e.config.apiKey,e.name);let o=null;for(const d of s)try{const c=await d._get(a);if(c){let f;if(typeof c=="string"){const g=await ot(e,{idToken:c}).catch(()=>{});if(!g)break;f=await B._fromGetAccountInfoResponse(e,g,c)}else f=B._fromJSON(e,c);d!==r&&(o=f),r=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ye(r,e,n):(r=l[0],o&&await r._set(a,o.toJSON()),await Promise.all(s.map(async d=>{if(d!==r)try{await d._remove(a)}catch{}})),new ye(r,e,n))}}/**
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
 */function Ss(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yn(e))return"Blackberry";if(bn(e))return"Webos";if(pn(e))return"Safari";if((e.includes("chrome/")||fn(e))&&!e.includes("edge/"))return"Chrome";if(gn(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(s);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function hn(t=N()){return/firefox\//i.test(t)}function pn(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fn(t=N()){return/crios\//i.test(t)}function mn(t=N()){return/iemobile/i.test(t)}function gn(t=N()){return/android/i.test(t)}function yn(t=N()){return/blackberry/i.test(t)}function bn(t=N()){return/webos/i.test(t)}function Jt(t=N()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qr(t=N()){var e;return Jt(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Zr(){return pi()&&document.documentMode===10}function vn(t=N()){return Jt(t)||gn(t)||bn(t)||yn(t)||/windows phone/i.test(t)||mn(t)}/**
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
 */function wn(t,e=[]){let s;switch(t){case"Browser":s=Ss(N());break;case"Worker":s=`${Ss(N())}-${t}`;break;default:s=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${qe}/${n}`}/**
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
 */class ea{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const n=r=>new Promise((a,o)=>{try{const l=e(r);a(l)}catch(l){o(l)}});n.onAbort=s,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const s=[];try{for(const n of this.queue)await n(e),n.onAbort&&s.push(n.onAbort)}catch(n){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function ta(t,e={}){return ee(t,"GET","/v2/passwordPolicy",Z(t,e))}/**
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
 */const sa=6;class na{constructor(e){var n;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??sa,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(e,s){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(s.meetsMinPasswordLength=e.length>=n),i&&(s.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(s,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,s,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class ia{constructor(e,s,n,i){this.app=e,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ks(this),this.idTokenSubscription=new ks(this),this.beforeStateQueue=new ea(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=K(s)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted){try{this.persistenceManager=await ye.create(this,e)}catch(a){Qe(`Failed to initialize persistence: ${a}`),this.persistenceManager=await ye.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(s)}catch(a){Qe(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const s=await ot(this,{idToken:e}),n=await B._fromGetAccountInfoResponse(this,s,e);await this.directlySetCurrentUser(n)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(M(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let n=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,o=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(n=l.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){try{await ct(e)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xr()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(M(this.app))return Promise.reject(Y(this));const s=e?U(e):null;return s&&m(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return M(this.app)?Promise.reject(Y(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return M(this.app)?Promise.reject(Y(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(K(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ta(this),s=new na(e);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,s,n){return this.registerStateListener(this.authStateSubscription,e,s,n)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,n){return this.registerStateListener(this.idTokenSubscription,e,s,n)}authStateReady(){return new Promise((e,s)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},s)}})}async revokeAccessToken(e){if(this.currentUser){const s=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:s};this.tenantId!=null&&(n.tenantId=this.tenantId),await Xr(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,s){const n=await this.getOrInitRedirectPersistenceManager(s);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&K(e)||this._popupRedirectResolver;m(s,this,"argument-error"),this.redirectPersistenceManager=await ye.create(this,[K(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,n;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,n,i){if(this._deleted)return()=>{};const r=typeof s=="function"?s:s.next.bind(s);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}).catch(l=>{if(!a)if(typeof s!="function"&&s.error)s.error(l);else if(n)n(l);else throw l}),typeof s=="function"){const l=e.addObserver(s,n,i);return()=>{a=!0,l()}}else{const l=e.addObserver(s);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(s){const n=(s==null?void 0:s.message)||String(s),i=vt(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw i.customData={originalError:s},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var s;if(M(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return e!=null&&e.error&&Qe(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function te(t){return U(t)}class ks{constructor(e){this.auth=e,this.observer=null,this.addObserver=vi(s=>this.observer=s)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ra(t){wt=t}function In(t){return wt.loadJS(t)}function aa(){return wt.recaptchaEnterpriseScript}function oa(){return wt.gapiScript}function ca(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class la{constructor(){this.enterprise=new da}ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}class da{ready(e){e()}execute(e,s){return Promise.resolve("token")}render(e,s){return""}}/**
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
 */const ua="recaptcha-enterprise",_n="NO_RECAPTCHA",Ts="onFirebaseAuthREInstanceReady";class ie{constructor(e){this.type=ua,this.auth=te(e)}async verify(e="verify",s=!1){async function n(r){if(!s){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,o)=>{jr(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const d=new Wr(l);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,a(d.siteKey)}}).catch(l=>{o(l)})})}function i(r,a,o){const l=window.grecaptcha;ws(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(d=>{a(d)}).catch(()=>{a(_n)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new la().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{n(this.auth).then(async o=>{if(!s&&ws(window.grecaptcha)&&ie.scriptInjectionDeferred)await ie.scriptInjectionDeferred.promise,i(o,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=aa();l.length!==0&&(l+=o+`&onload=${Ts}`),ie.scriptInjectionDeferred=new Ks,window[Ts]=()=>{var d;(d=ie.scriptInjectionDeferred)==null||d.resolve()},In(l).then(()=>{var d;return(d=ie.scriptInjectionDeferred)==null?void 0:d.promise}).then(()=>{i(o,r,a)}).catch(d=>{a(d)})}}).catch(o=>{a(o)})})}}ie.scriptInjectionDeferred=null;async function As(t,e,s,n=!1,i=!1){const r=new ie(t);let a;if(i)a=_n;else try{a=await r.verify(s)}catch{a=await r.verify(s,!0)}const o={...e};if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,d=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lt(t,e,s,n,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await As(t,e,s,s==="getOobCode");return n(t,a)}else return n(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await As(t,e,s,s==="getOobCode");return n(t,o)}else return Promise.reject(a)})}/**
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
 */function ha(t,e){const s=Qs(t,"auth");if(s.isInitialized()){const i=s.getImmediate(),r=s.getOptions();if(Te(r,e??{}))return i;x(i,"already-initialized")}return s.initialize({options:e})}function pa(t,e){const s=(e==null?void 0:e.persistence)||[],n=(Array.isArray(s)?s:[s]).map(K);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function fa(t,e,s){const n=te(t);m(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=En(e),{host:a,port:o}=ma(e),l=o===null?"":`:${o}`,d={url:`${r}//${a}${l}/`},c=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){m(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),m(Te(d,n.config.emulator)&&Te(c,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=c,n.settings.appVerificationDisabledForTesting=!0,qt(a)?_i(`${r}//${a}${l}`):ga()}function En(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ma(t){const e=En(t),s=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!s)return{host:"",port:null};const n=s[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:$s(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:$s(a)}}}function $s(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ga(){function t(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xt{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,s){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}async function ya(t,e){return ee(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ba(t,e){return ze(t,"POST","/v1/accounts:signInWithPassword",Z(t,e))}async function Qt(t,e){return ee(t,"POST","/v1/accounts:sendOobCode",Z(t,e))}async function va(t,e){return Qt(t,e)}async function wa(t,e){return Qt(t,e)}async function Ia(t,e){return Qt(t,e)}/**
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
 */async function _a(t,e){return ze(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}async function Ea(t,e){return ze(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}/**
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
 */class He extends Xt{constructor(e,s,n,i=null){super("password",n),this._email=e,this._password=s,this._tenantId=i}static _fromEmailAndPassword(e,s){return new He(e,s,"password")}static _fromEmailAndCode(e,s,n=null){return new He(e,s,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lt(e,s,"signInWithPassword",ba);case"emailLink":return _a(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,s){switch(this.signInMethod){case"password":const n={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lt(e,n,"signUpPassword",ya);case"emailLink":return Ea(e,{idToken:s,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Se(t,e){return ze(t,"POST","/v1/accounts:signInWithIdp",Z(t,e))}/**
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
 */const Sa="http://localhost";class ve extends Xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):x("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...r}=s;if(!n||!i)return null;const a=new ve(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const s=this.buildRequest();return Se(e,s)}_linkToIdToken(e,s){const n=this.buildRequest();return n.idToken=s,Se(e,n)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,Se(e,s)}buildRequest(){const e={requestUri:Sa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=je(s)}return e}}/**
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
 */function ka(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ta(t){const e=De(Le(t)).link,s=e?De(Le(e)).deep_link_id:null,n=De(Le(t)).deep_link_id;return(n?De(Le(n)).link:null)||n||s||e||t}class Zt{constructor(e){const s=De(Le(e)),n=s.apiKey??null,i=s.oobCode??null,r=ka(s.mode??null);m(n&&i&&r,"argument-error"),this.apiKey=n,this.operation=r,this.code=i,this.continueUrl=s.continueUrl??null,this.languageCode=s.lang??null,this.tenantId=s.tenantId??null}static parseLink(e){const s=Ta(e);try{return new Zt(s)}catch{return null}}}/**
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
 */class Oe{constructor(){this.providerId=Oe.PROVIDER_ID}static credential(e,s){return He._fromEmailAndPassword(e,s)}static credentialWithLink(e,s){const n=Zt.parseLink(s);return m(n,"argument-error"),He._fromEmailAndCode(e,n.code,n.tenantId)}}Oe.PROVIDER_ID="password";Oe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class It{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ke extends It{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class re extends Ke{constructor(){super("facebook.com")}static credential(e){return ve._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.FACEBOOK_SIGN_IN_METHOD="facebook.com";re.PROVIDER_ID="facebook.com";/**
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
 */class W extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return ve._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:n}=e;if(!s&&!n)return null;try{return W.credential(s,n)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
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
 */class ae extends Ke{constructor(){super("github.com")}static credential(e){return ve._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ae.credential(e.oauthAccessToken)}catch{return null}}}ae.GITHUB_SIGN_IN_METHOD="github.com";ae.PROVIDER_ID="github.com";/**
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
 */class oe extends Ke{constructor(){super("twitter.com")}static credential(e,s){return ve._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:n}=e;if(!s||!n)return null;try{return oe.credential(s,n)}catch{return null}}}oe.TWITTER_SIGN_IN_METHOD="twitter.com";oe.PROVIDER_ID="twitter.com";/**
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
 */async function Aa(t,e){return ze(t,"POST","/v1/accounts:signUp",Z(t,e))}/**
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
 */class we{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,n,i=!1){const r=await B._fromIdTokenResponse(e,n,i),a=Cs(n);return new we({user:r,providerId:a,_tokenResponse:n,operationType:s})}static async _forOperation(e,s,n){await e._updateTokensIfNecessary(n,!0);const i=Cs(n);return new we({user:e,providerId:i,_tokenResponse:n,operationType:s})}}function Cs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dt extends he{constructor(e,s,n,i){super(s.code,s.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,dt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,s,n,i){return new dt(e,s,n,i)}}function Sn(t,e,s,n){return(e==="reauthenticate"?s._getReauthenticationResolver(t):s._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?dt._fromErrorAndOperation(t,r,e,n):r})}async function $a(t,e,s=!1){const n=await Ve(t,e._linkToIdToken(t.auth,await t.getIdToken()),s);return we._forOperation(t,"link",n)}/**
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
 */async function Ca(t,e,s=!1){const{auth:n}=t;if(M(n.app))return Promise.reject(Y(n));const i="reauthenticate";try{const r=await Ve(t,Sn(n,i,e,t),s);m(r.idToken,n,"internal-error");const a=Yt(r.idToken);m(a,n,"internal-error");const{sub:o}=a;return m(t.uid===o,n,"user-mismatch"),we._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&x(n,"user-mismatch"),r}}/**
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
 */async function kn(t,e,s=!1){if(M(t.app))return Promise.reject(Y(t));const n="signIn",i=await Sn(t,n,e),r=await we._fromIdTokenResponse(t,n,i);return s||await t._updateCurrentUser(r.user),r}async function Pa(t,e){return kn(te(t),e)}/**
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
 */function es(t,e,s){var n;m(((n=s.url)==null?void 0:n.length)>0,t,"invalid-continue-uri"),m(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),m(typeof s.linkDomain>"u"||s.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=s.url,e.dynamicLinkDomain=s.dynamicLinkDomain,e.linkDomain=s.linkDomain,e.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(m(s.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=s.iOS.bundleId),s.android&&(m(s.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=s.android.installApp,e.androidMinimumVersionCode=s.android.minimumVersion,e.androidPackageName=s.android.packageName)}/**
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
 */async function Tn(t){const e=te(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ra(t,e,s){const n=te(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};s&&es(n,i,s),await lt(n,i,"getOobCode",wa)}async function Oa(t,e,s){if(M(t.app))return Promise.reject(Y(t));const n=te(t),a=await lt(n,{returnSecureToken:!0,email:e,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Aa).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Tn(t),l}),o=await we._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function Na(t,e,s){return M(t.app)?Promise.reject(Y(t)):Pa(U(t),Oe.credential(e,s)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Tn(t),n})}async function Da(t,e){const s=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&es(s.auth,i,e);const{email:r}=await va(s.auth,i);r!==t.email&&await t.reload()}async function La(t,e,s){const n=U(t),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};s&&es(n.auth,r,s);const{email:a}=await Ia(n.auth,r);a!==t.email&&await t.reload()}function Ma(t,e,s,n){return U(t).onIdTokenChanged(e,s,n)}function xa(t,e,s){return U(t).beforeAuthStateChanged(e,s)}function Ua(t,e,s,n){return U(t).onAuthStateChanged(e,s,n)}function Ba(t){return U(t).signOut()}const ut="__sak";/**
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
 */class An{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fa=1e3,Va=10;class $n extends An{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const n=this.storage.getItem(s),i=this.localCache[s];n!==i&&e(s,i,n)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const n=e.key;s?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!s&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);Zr()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Va):i()}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:n}),!0)})},Fa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}$n.type="LOCAL";const Ha=$n;/**
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
 */class Cn extends An{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}Cn.type="SESSION";const Pn=Cn;/**
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
 */function Wa(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
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
 */class _t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(i=>i.isListeningto(e));if(s)return s;const n=new _t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:n,eventType:i,data:r}=s.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;s.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(a).map(async d=>d(s.origin,r)),l=await Wa(o);s.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_t.receivers=[];/**
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
 */function ts(t="",e=10){let s="";for(let n=0;n<e;n++)s+=Math.floor(Math.random()*10);return t+s}/**
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
 */class ja{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((o,l)=>{const d=ts("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(g.data.response);break;default:clearTimeout(c),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:s},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function j(){return window}function qa(t){j().location.href=t}/**
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
 */function Rn(){return typeof j().WorkerGlobalScope<"u"&&typeof j().importScripts=="function"}async function Ga(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function za(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ka(){return Rn()?self:null}/**
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
 */const On="firebaseLocalStorageDb",Ya=1,ht="firebaseLocalStorage",Nn="fbase_key";class Ye{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Et(t,e){return t.transaction([ht],e?"readwrite":"readonly").objectStore(ht)}function Ja(){const t=indexedDB.deleteDatabase(On);return new Ye(t).toPromise()}function Dn(){const t=indexedDB.open(On,Ya);return new Promise((e,s)=>{t.addEventListener("error",()=>{s(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(ht,{keyPath:Nn})}catch(i){s(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(ht)?e(n):(n.close(),await Ja(),e(await Dn()))})})}async function Ps(t,e,s){const n=Et(t,!0).put({[Nn]:e,value:s});return new Ye(n).toPromise()}async function Xa(t,e){const s=Et(t,!1).get(e),n=await new Ye(s).toPromise();return n===void 0?null:n.value}function Rs(t,e){const s=Et(t,!0).delete(e);return new Ye(s).toPromise()}const Qa=800,Za=3;class Ln{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Dn(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let s=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(s++>Za)throw n;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_t._getInstance(Ka()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var s,n;if(this.activeServiceWorker=await Ga(),!this.activeServiceWorker)return;this.sender=new ja(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(s=e[0])!=null&&s.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||za()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ps(e,ut,"1"),await Rs(e,ut)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ps(n,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(n=>Xa(n,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rs(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const r=Et(i,!1).getAll();return new Ye(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),s.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),s.push(i));return s}catch(e){return this.isClosing||Qe(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Ln.type="LOCAL";const eo=Ln;new Ge(3e4,6e4);/**
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
 */function ss(t,e){return e?K(e):(m(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ns extends Xt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Se(e,this._buildIdpRequest())}_linkToIdToken(e,s){return Se(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return Se(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function to(t){return kn(t.auth,new ns(t),t.bypassAuthState)}function so(t){const{auth:e,user:s}=t;return m(s,e,"internal-error"),Ca(s,new ns(t),t.bypassAuthState)}async function no(t){const{auth:e,user:s}=t;return m(s,e,"internal-error"),$a(s,new ns(t),t.bypassAuthState)}/**
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
 */class Mn{constructor(e,s,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:n,postBody:i,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:s,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return to;case"linkViaPopup":case"linkViaRedirect":return no;case"reauthViaPopup":case"reauthViaRedirect":return so;default:x(this.auth,"internal-error")}}resolve(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const io=new Ge(2e3,1e4);async function ro(t,e,s){if(M(t.app))return Promise.reject(F(t,"operation-not-supported-in-this-environment"));const n=te(t);rn(t,e,It);const i=ss(n,s);return new ce(n,"signInViaPopup",e,i).executeNotNull()}async function ao(t,e,s){const n=U(t);rn(n.auth,e,It);const i=ss(n.auth,s);return new ce(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class ce extends Mn{constructor(e,s,n,i,r){super(e,s,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ce.currentPopupAction&&ce.currentPopupAction.cancel(),ce.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){X(this.filter.length===1,"Popup operations only handle one event");const e=ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(F(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(F(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ce.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,n;if((n=(s=this.authWindow)==null?void 0:s.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(F(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,io.get())};e()}}ce.currentPopupAction=null;/**
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
 */const oo="pendingRedirect",tt=new Map;class co extends Mn{constructor(e,s,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,n),this.eventId=null}async execute(){let e=tt.get(this.auth._key());if(!e){try{const n=await lo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(s){e=()=>Promise.reject(s)}tt.set(this.auth._key(),e)}return this.bypassAuthState||tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lo(t,e){const s=po(e),n=ho(t);if(!await n._isAvailable())return!1;const i=await n._get(s)==="true";return await n._remove(s),i}function uo(t,e){tt.set(t._key(),e)}function ho(t){return K(t._redirectPersistence)}function po(t){return et(oo,t.config.apiKey,t.name)}async function fo(t,e,s=!1){if(M(t.app))return Promise.reject(Y(t));const n=te(t),i=ss(n,e),a=await new co(n,i,s).execute();return a&&!s&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const mo=600*1e3;class go{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(s=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yo(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var n;if(e.error&&!xn(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";s.onError(F(this.auth,i))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const n=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mo&&this.cachedEventUids.clear(),this.cachedEventUids.has(Os(e))}saveEventToCache(e){this.cachedEventUids.add(Os(e)),this.lastProcessedEventTime=Date.now()}}function Os(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xn(t);default:return!1}}/**
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
 */async function bo(t,e={}){return ee(t,"GET","/v1/projects",e)}/**
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
 */const vo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wo=/^https?/;async function Io(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bo(t);for(const s of e)try{if(_o(s))return}catch{}x(t,"unauthorized-domain")}function _o(t){const e=Bt(),{protocol:s,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?s==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&a.hostname===n}if(!wo.test(s))return!1;if(vo.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Eo=new Ge(3e4,6e4);function Ns(){const t=j().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let s=0;s<t.CP.length;s++)t.CP[s]=null}}function So(t){return new Promise((e,s)=>{var i,r,a;function n(){Ns(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ns(),s(F(t,"network-request-failed"))},timeout:Eo.get()})}if((r=(i=j().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=j().gapi)!=null&&a.load)n();else{const o=ca("iframefcb");return j()[o]=()=>{gapi.load?n():s(F(t,"network-request-failed"))},In(`${oa()}?onload=${o}`).catch(l=>s(l))}}).catch(e=>{throw st=null,e})}let st=null;function ko(t){return st=st||So(t),st}/**
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
 */const To=new Ge(5e3,15e3),Ao="__/auth/iframe",$o="emulator/auth/iframe",Co={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Po=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ro(t){const e=t.config;m(e.authDomain,t,"auth-domain-config-required");const s=e.emulator?Kt(e,$o):`https://${t.config.authDomain}/${Ao}`,n={apiKey:e.apiKey,appName:t.name,v:qe},i=Po.get(t.config.apiHost);i&&(n.eid=i);const r=t._getFrameworks();return r.length&&(n.fw=r.join(",")),`${s}?${je(n).slice(1)}`}async function Oo(t){const e=await ko(t),s=j().gapi;return m(s,t,"internal-error"),e.open({where:document.body,url:Ro(t),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Co,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const a=F(t,"network-request-failed"),o=j().setTimeout(()=>{r(a)},To.get());function l(){j().clearTimeout(o),i(n)}n.ping(l).then(l,()=>{r(a)})}))}/**
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
 */const No={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Do=500,Lo=600,Mo="_blank",xo="http://localhost";class Ds{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uo(t,e,s,n=Do,i=Lo){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l={...No,width:n.toString(),height:i.toString(),top:r,left:a},d=N().toLowerCase();s&&(o=fn(d)?Mo:s),hn(d)&&(e=e||xo,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[T,P])=>`${g}${T}=${P},`,"");if(Qr(d)&&o!=="_self")return Bo(e||"",o),new Ds(null);const f=window.open(e||"",o,c);m(f,t,"popup-blocked");try{f.focus()}catch{}return new Ds(f)}function Bo(t,e){const s=document.createElement("a");s.href=t,s.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(n)}/**
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
 */const Fo="__/auth/handler",Vo="emulator/auth/handler",Ho=encodeURIComponent("fac");async function Ls(t,e,s,n,i,r){m(t.config.authDomain,t,"auth-domain-config-required"),m(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:n,v:qe,eventId:i};if(e instanceof It){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",bi(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries({}))a[c]=f}if(e instanceof Ke){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(a.scopes=c.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];const l=await t._getAppCheckToken(),d=l?`#${Ho}=${encodeURIComponent(l)}`:"";return`${Wo(t)}?${je(o).slice(1)}${d}`}function Wo({config:t}){return t.emulator?Kt(t,Vo):`https://${t.authDomain}/${Fo}`}/**
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
 */const Ot="webStorageSupport";class jo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=fo,this._overrideRedirectResult=uo}async _openPopup(e,s,n,i){var a;X((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await Ls(e,s,n,Bt(),i);return Uo(e,r,ts())}async _openRedirect(e,s,n,i){await this._originValidation(e);const r=await Ls(e,s,n,Bt(),i);return qa(r),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:i,promise:r}=this.eventManagers[s];return i?Promise.resolve(i):(X(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[s]={promise:n},n.catch(()=>{delete this.eventManagers[s]}),n}async initAndGetManager(e){const s=await Oo(e),n=new go(e);return s.register("authEvent",i=>(m(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=s,n}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(Ot,{type:Ot},i=>{var a;const r=(a=i==null?void 0:i[0])==null?void 0:a[Ot];r!==void 0&&s(!!r),x(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=Io(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return vn()||pn()||Jt()}}const qo=jo;var Ms="@firebase/auth",xs="1.13.6";/**
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
 */class Go{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);s&&(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zo(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ko(t){Be(new Ae("auth",(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;m(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wn(t)},d=new ia(n,i,r,l);return pa(d,s),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,n)=>{e.getProvider("auth-internal").initialize()})),Be(new Ae("auth-internal",e=>{const s=te(e.getProvider("auth").getImmediate());return(n=>new Go(n))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),_e(Ms,xs,zo(t)),_e(Ms,xs,"esm2020")}/**
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
 */const Yo=300,Jo=zs("authIdTokenMaxAge")||Yo;let Us=null;const Xo=t=>async e=>{const s=e&&await e.getIdTokenResult(),n=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(n&&n>Jo)return;const i=s==null?void 0:s.token;Us!==i&&(Us=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qo(t=Ir()){const e=Qs(t,"auth");if(e.isInitialized())return e.getImmediate();const s=ha(t,{popupRedirectResolver:qo,persistence:[eo,Ha,Pn]}),n=zs("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=Xo(r.toString());xa(s,a,()=>a(s.currentUser)),Ma(s,o=>a(o))}}const i=ci("auth");return i&&fa(s,`http://${i}`),s}function Zo(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ra({loadJS(t){return new Promise((e,s)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const r=F("internal-error");r.customData=i,s(r)},n.type="text/javascript",n.charset="UTF-8",Zo().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ko("Browser");const ec={VITE_API_BASE:"https://europe-west1-agentlab-6a2ed.cloudfunctions.net/api/api",VITE_FIREBASE_API_KEY:"AIzaSyA85iJNW1BJjqKnzta9qvtTwum9OIBH2U0",VITE_FIREBASE_APP_ID:"1:926148159880:web:765298762db0a3fb9f323d",VITE_FIREBASE_AUTH_DOMAIN:"agentlab-6a2ed.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"agentlab-6a2ed"},Me=ec,_=Qo(Zs({apiKey:Me.VITE_FIREBASE_API_KEY,authDomain:Me.VITE_FIREBASE_AUTH_DOMAIN,projectId:Me.VITE_FIREBASE_PROJECT_ID,appId:Me.VITE_FIREBASE_APP_ID}));async function v(t,e,s=e?"POST":"GET",n=!1){var a;const i=await((a=_.currentUser)==null?void 0:a.getIdToken()),r=await fetch(Me.VITE_API_BASE+t,{method:s,headers:{Authorization:`Bearer ${i}`,...e?{"Content-Type":"application/json"}:{}},...e?{body:JSON.stringify(e)}:{},signal:AbortSignal.timeout(12e4)});if(!r.ok){let o;try{o=(await r.json()).error}catch{}throw new Error(o||`Request failed (${r.status}).`)}return n?r:r.json()}function tc(){try{const t=JSON.parse(localStorage.getItem("simp:handoff:v1")||"null");return(t==null?void 0:t.v)!==1||t.sim!=="agentlab"||typeof t.ts!="number"||Math.abs(Date.now()-t.ts)>1800*1e3||typeof t.profile!="object"||!t.profile||JSON.stringify(t.profile).length>16e3?null:t}catch{return null}}function sc(t){const e=(t==null?void 0:t.profile)||{},s=String(e.name||"").trim().split(/\s+/);return{firstName:e.firstName||s[0]||"",lastName:e.lastName||s.slice(1).join(" "),studentId:e.studentId||e.sid||"",email:e.email||""}}Jn();const b=t=>document.querySelector(t),h=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),L=(t,e)=>bt(t,Q==="session"&&u?yt(u.session.config).currency:"EUR"),Ne=t=>new Date(t).toLocaleString(),V=tc(),ge=sc(V);let S=null,u=null,Q="home",pt="login",k=null,be=!1,Nt=!1,E="",nt=null,O=null,$e="sessions",Ce=null,le=!1,Pe=null,Un="",ft=null,Re=null;const Bn=t=>{var e,s,n,i;return JSON.stringify([t.session.status,t.session.matchCount,t.session.simulationProgress,(e=t.members)==null?void 0:e.length,(s=t.members)==null?void 0:s.filter(r=>r.final).length,(n=t.summary)==null?void 0:n.completed,(i=t.personalStats)==null?void 0:i.completed,t.feedback,t.roundComparisons,t.testControls,t.studentScores,t.promptHistory])},nc=new URLSearchParams(location.search).get("session")||(V==null?void 0:V.session)||"",Ue=()=>S&&S.role!=="student",A=(t,e,s="",n="text",i="")=>`<label>${e}<input name="${t}" type="${n}" value="${h(s)}" ${i}></label>`,y=(t,e,s="secondary",n="")=>`<button type="button" class="${s}" data-action="${e}" ${n}>${t}</button>`,ue=t=>`<span class="badge ${h(t)}">${h(t.replaceAll("_"," "))}</span>`;function pe(t){b("#app").innerHTML=`<header><a href="#" class="brand" data-action="home"><span class="brand-icon">a<span>l</span></span>Agent<span>Lab</span></a><nav>${S?`${y("My sessions","home","nav-link")}${S.role==="admin"?y("Students","student-directory","nav-link"):""}${y("My profile & stats","profile","nav-link")}${y("Sign out","logout","nav-link")}`:""}</nav></header><div id="notice" role="status" aria-live="polite">${h(E)}</div><main>${t}</main><footer>AgentLab · A learning lab for humans and AI agents <span>Konstantinos Stouras</span></footer>`}function St(t){E=t.message||String(t);const e=b("#notice");e&&(e.textContent=E,e.classList.add("error"),e.scrollIntoView({block:"nearest"}))}function Vt(){const t=pt==="register";pe(`<section class="entry"><div class="intro"><p class="eyebrow">BUILD · DELEGATE · DISCOVER</p><h1>Your strategy.<br>Your agent.<br><em>What happens next?</em></h1><p class="lead">Explore how the instructions you write shape the decisions your agents make. Start with a negotiation. Learn from every turn.</p><div class="orbit"><div class="agent-node buyer">Buyer<br><strong>↗</strong></div><div class="orbit-line">⇄</div><div class="agent-node seller">Seller<br><strong>↙</strong></div></div></div><section class="card auth-card"><p class="eyebrow">WELCOME TO THE LAB</p><h2>${t?"Create your account":"Pick up where you left off"}</h2><p>${t?"Register once. Join your class with a session code.":"Sign in, then enter the session code from your instructor."}</p><form id="auth-form">${t?`<div class="form-grid">${A("firstName","First name",ge.firstName,"text",'required autocomplete="given-name" maxlength="80"')}${A("lastName","Last name",ge.lastName,"text",'required autocomplete="family-name" maxlength="80"')}</div>${A("studentId","University ID",ge.studentId,"text",'required minlength="2" maxlength="40"')}`:""}${A("email","Email",ge.email,"email",'required autocomplete="email"')}${A("password","Password","","password",`required minlength="8" autocomplete="${t?"new-password":"current-password"}"`)}<button class="primary full">${t?"Create account":"Sign in"}</button></form><div class="divider">or</div><button type="button" class="google-signin full" data-action="google"><img src="${Zn}" alt="" width="20" height="20"><span>Continue with Google</span></button><p class="small">${t?"Already registered?":"New to AgentLab?"} ${y(t?"Sign in":"Create an account","toggle-auth","text-button")}</p>${t?"":y("Forgot your password?","reset","text-button")}<p class="fine">Your profile, prompts and play records are visible to your instructor. Agent instructions and negotiation dialogue are sent to the AI provider. Keep personal information out of prompts.</p></section></section>`)}function Fn(){var e,s;const t=S.profile||{...ge,firstName:((e=_.currentUser.displayName)==null?void 0:e.split(" ")[0])||ge.firstName,lastName:((s=_.currentUser.displayName)==null?void 0:s.split(" ").slice(1).join(" "))||ge.lastName};return`<section class="card"><h2>${S.profile?"Your details":"Complete your profile"}</h2><form id="profile-form"><div class="form-grid">${A("firstName","First name",t.firstName,"text",'required maxlength="80"')}${A("lastName","Last name",t.lastName,"text",'required maxlength="80"')}${A("studentId","University ID",t.studentId,"text",'required minlength="2" maxlength="40"')}${A("email","Email",_.currentUser.email,"email","required")}</div>${V?'<p class="callout">Registration data from the Simulation Platform will be saved with your profile when you save these details.</p>':""}<button class="primary">Save details</button></form>${S.profile?`<div class="actions">${y("Send password setup / reset email","reset","text-button")}${_.currentUser.providerData.some(n=>n.providerId==="google.com")?"":y("Connect Google sign-in","link-google","text-button")}</div>`:""}${t.simulationProfile?`<details><summary>Additional Simulation Platform data</summary><dl>${Object.entries(t.simulationProfile).map(([n,i])=>`<dt>${h(n)}</dt><dd>${h(typeof i=="object"?JSON.stringify(i):i)}</dd>`).join("")}</dl></details>`:""}</section>`}function Vn(){return _.currentUser.emailVerified?"":`<section class="callout"><strong>Verify your email to join a class.</strong><p>Open the verification link in your inbox, then refresh your verification status here.</p>${y("Send verification email","verify")}${y("I have verified my email","verified")}</section>`}function Bs(t=[]){var e,s;if(Ue()){ic(t);return}pe(`<div class="page-heading"><div><p class="eyebrow">YOUR WORKSPACE</p><h1>Hello, ${h(((e=S.profile)==null?void 0:e.firstName)||((s=_.currentUser.displayName)==null?void 0:s.split(" ")[0])||"there")}.</h1><p>Practise your strategies. Improve your decisions.</p></div>${ue(S.role)}</div>${Vn()}${!S.profile&&!Ue()?Fn():""}<div class="dashboard-grid"><section class="card accent"><p class="eyebrow">JOIN YOUR CLASS</p><h2>Enter the lab.</h2><form id="join-form">${A("code","Session code",nc,"text",'required minlength="4" maxlength="24" placeholder="e.g. MBA-2027"')}<button class="primary">Join session →</button></form></section><section class="card"><p class="eyebrow">YOUR SESSIONS</p><div class="session-list">${t.length?t.map(n=>`<button class="session-link" data-open="${h(n.id)}"><span><strong>${h(n.title)}</strong><small>${h(n.moduleCode||"Negotiation lab")}</small></span>${n.status?ue(n.status):"<span>→</span>"}</button>`).join(""):'<p class="empty">Your classes will appear here after you join.</p>'}</div></section></div>${Ue()?Wn():""}`)}function ic(t){if($e==="negotiations"){rs();return}const e=[...t].sort((r,a)=>(a.createdAt||0)-(r.createdAt||0)),s=e.filter(r=>["closed","debrief"].includes(r.status)),n=e.filter(r=>!["closed","debrief"].includes(r.status)),i=(r,a,o,l,d)=>`<section class="card session-section" id="${r}" aria-labelledby="${r}-heading"><div class="section-heading"><h2 id="${r}-heading">${a}</h2><span class="session-count">${o.length} ${o.length===1?"session":"sessions"}</span></div><p class="section-description">${l}</p><div class="admin-session-list">${o.length?o.map(rc).join(""):`<p class="empty">${d}</p>`}</div></section>`;pe(`${Hn()}${is()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions"><div class="admin-layout"><aside class="admin-sidebar" aria-label="Instructor options"><section class="card admin-options"><p class="eyebrow">MANAGE YOUR LAB</p><h2>Options</h2><nav aria-label="Dashboard sections"><a href="#create-session-panel">Create a session <span>＋</span></a><a href="#active-sessions">Active sessions <span>${n.length}</span></a><a href="#past-sessions">Past sessions <span>${s.length}</span></a>${y("Refresh sessions","home","sidebar-button")}${y("My profile & stats","profile","sidebar-button")}</nav><p class="small">Refresh updates the session list. Open a session to manage its activity.</p></section><div id="create-session-panel">${Wn()}</div></aside><div class="admin-session-column">${i("active-sessions","Active sessions",n,"Open a session to manage registration, run negotiations and monitor your students. Draft, lobby and paused sessions also appear here.","No active sessions yet. Create a session to get started.")}${i("past-sessions","Past sessions",s,"Review closed sessions, release debriefs and download session results.","Closed sessions will appear here.")}</div></div></div>`)}function Hn(){return`<div class="page-heading"><div><p class="eyebrow">INSTRUCTOR WORKSPACE</p><h1>AgentLab admin</h1><p>Manage your sessions and set up each learning task.</p></div>${ue(S.role)}</div>`}function is(){return`<div class="admin-tabs" role="tablist" aria-label="Admin area">${[["sessions","Sessions"],["negotiations","Negotiations"]].map(([t,e])=>y(e,"admin-tab",$e===t?"admin-tab selected":"admin-tab",`id="tab-${t}" role="tab" aria-selected="${$e===t}" aria-controls="admin-panel" data-tab="${t}"`)).join("")}</div>`}function fe(t,e,s,n,i){return`<div class="setting-field"><label for="setting-${t}">${e}</label><input id="setting-${t}" name="${t}" type="number" value="${h(s)}" aria-describedby="help-${t}" ${i} required><p id="help-${t}" class="field-help">${n}</p></div>`}function rs(){const t=Ce;pe(`${Hn()}${is()}<div id="admin-panel" role="tabpanel" aria-labelledby="tab-negotiations"><section class="card task-overview"><p class="eyebrow">TASK 01 / NEGOTIATIONS</p><h2>Used-car negotiation</h2><p>Students write buyer and seller strategies, practise, then send their agents to negotiate. The scenario is a ${R.title} with 105,013 km in Carrickmacross, advertised at €25,999. The listing and included equipment are shared with both sides; each side receives its own fallback privately.</p><p class="small">The app uses structured offers and acceptance. Buyer moves first; no agreement earns zero for both sides.</p></section><form id="negotiation-settings"><section class="card"><h2>Game rules</h2><p>These are your defaults for new sessions. Saving here does not change existing sessions.</p><div class="form-grid">${fe("buyerValue","Buyer fallback (€)",t.buyerValue,"What the buyer would pay elsewhere. Buyer surplus = this value minus the agreed price. Given privately to the buyer.",'min="1" max="1000000"')}${fe("sellerCost","Seller fallback (€)",t.sellerCost,"What the seller could receive elsewhere. Seller surplus = agreed price minus this value. Must be below the buyer fallback.",'min="0" max="999999"')}${fe("maxTurns","Maximum turns",t.maxTurns,"Total messages across both sides, not turns per student. If no offer is accepted by the limit, the match ends without a deal. Default: 12.",'min="2" max="24"')}${fe("humanTurnSeconds","Seconds per human turn",t.humanTurnSeconds,"Time available to enter a human offer or response. A missed deadline ends that match without a deal. Applies to human and hybrid rounds.",'min="30" max="1800"')}</div></section><section class="card"><h2>Practice and session size</h2><div class="form-grid">${fe("maxPractice","Practice matches per student",t.maxPractice,"Each practice runs the student’s own buyer against their own seller. Set 0 to skip practice. Practice does not count toward evaluation scores.",'min="0" max="20"')}${fe("maxMatches","Total match budget",t.maxMatches,"Maximum negotiations across the entire session, including practice and every evaluation round. This is a match count, not a monetary spending cap.",'min="1" max="400"')}</div><p class="callout">One agent tournament with n submitted students uses n × (n − 1) matches. For 15 students with two practices each, allow at least 240 matches. The current maximum is 400 per session.</p></section><section class="card"><h2>AI settings</h2><div class="form-grid"><div class="setting-field"><label for="setting-model">AI model</label><select id="setting-model" name="model" aria-describedby="help-model">${["gpt-4.1-mini","gpt-4.1","gpt-4.1-nano"].map(e=>`<option ${t.model===e?"selected":""}>${e}</option>`).join("")}</select><p id="help-model" class="field-help">Model used for all agents in a new session. gpt-4.1-mini is the default. Model choice affects responses and API cost.</p></div>${fe("temperature","Temperature",t.temperature,"Controls response variation. Lower values tend to be more consistent; higher values more varied. Default: 1.",'min="0" max="2" step="0.1"')}</div>${jn(t)}<div class="actions"><button class="primary">Save negotiation settings</button>${y("Restore baseline values","reset-negotiation-settings","secondary")}${y("Go to Sessions","admin-tab","secondary",'data-tab="sessions"')}</div><p class="small">Save stores these defaults for your instructor account. Restore fills in the original game and classroom defaults; click Save to keep them. Go to Sessions lets you create a class using the last saved settings.</p></section></form><section class="card"><h2>Running a round</h2><p>Open a session from Sessions, open registration, then open the activity. When students have submitted their strategies, choose a treatment and start a round.</p><dl class="treatment-guide"><dt>Agent ↔ Agent</dt><dd>Every submitted buyer meets every other submitted seller. No self-matches. Repetitions repeats the complete tournament.</dd><dt>Human ↔ Human</dt><dd>Random pairs negotiate directly. Requires an even number of enrolled students.</dd><dt>Hybrid treatments</dt><dd>One side is human, the other an agent. Uses students with submitted strategies and requires an even eligible group.</dd><dt>Pause / Resume</dt><dd>Temporarily stop play, then continue it.</dd><dt>Close / Release debrief</dt><dd>Close ends the session and cancels unfinished matches. Release debrief reveals counterpart types to students.</dd></dl></section></div>`)}function rc(t){const e=["closed","debrief"].includes(t.status),s=t.memberCount||0,n={draft:"Ready to set up. Open this session to start registration.",lobby:"Registration is open. Students can join with the session code.",active:"Activity is open. Students can practise and take part in evaluations.",paused:"Activity is paused. Open this session to resume.",closed:"Session closed. Open it to review results or release the debrief.",debrief:"Debrief released. Students can review their outcomes and counterpart types."};return`<article class="admin-session-card"><div class="session-card-top"><div><div class="session-card-code">${h(t.code)}</div>${ue(t.status)}${t.simulation?ue("test_session"):""}</div><div class="participant-count"><strong>${s} ${s===1?"participant":"participants"}</strong><span>Used-car negotiation</span></div></div><h3>${h(t.title)}</h3><p class="session-metadata">${t.moduleCode?`${h(t.moduleCode)} · `:""}Created ${Ne(t.createdAt)}</p><p class="session-state-note">${t.simulation?t.simulation.engine==="scripted"?"Scripted test · ":"Live AI test · ":""}${n[t.status]||"Open this session to view its progress."}</p><div class="actions"><button class="primary" data-open="${h(t.id)}">${e?"View session":"Open session"}</button>${!e&&!t.simulation?y("Copy student link","copy-session-link","secondary",`data-code="${h(t.code)}"`):""}${y("Export CSV","dashboard-export","secondary",`data-session="${h(t.id)}" data-code="${h(t.code)}" data-format="csv"`)}${e?y("Export full session","dashboard-export","secondary",`data-session="${h(t.id)}" data-code="${h(t.code)}" data-format="json"`):""}</div></article>`}function Wn(){const t=Ce;return`<section class="card"><p class="eyebrow">NEW CLASS</p><h2>Create a session</h2><form id="create-session">${A("title","Session title","Negotiation lab","text",'required maxlength="120"')}${A("code","Session code","","text",'required pattern="[A-Za-z0-9-]{4,24}" placeholder="MBA-2027"')}<p class="field-help">A unique code your students use to join. Use 4–24 letters, numbers or hyphens.</p>${A("moduleCode","Module","BMGT41040")}<label>Task<select name="taskId"><option value="negotiation-v1">Used-car negotiation</option></select></label>${ac()}<p class="small">New sessions use your saved Negotiations settings: ${t.maxTurns} turns, ${t.maxPractice} practices per student and ${t.maxMatches} total matches.</p>${y("Edit negotiation settings","admin-tab","text-button",'data-tab="negotiations"')}<button class="primary full">Create session</button><p class="small">Creates a draft. Open registration inside the session to begin.</p></form></section>`}function ac(){return`<div class="test-session-options"><label class="checkbox-label"><input type="checkbox" name="testSession" id="test-session">Test session with simulated students</label><p class="field-help">Rehearse the workflow without inviting students or creating student accounts.</p><div id="simulation-options" hidden><label class="checkbox-label"><input type="checkbox" name="playAsStudent" id="play-as-student">Play as a student with my own strategies</label><p class="field-help">Adds you alongside the simulated students. You write, practise and submit your own buyer and seller strategies. Uses live AI.</p>${A("simulatedStudents","Simulated students",3,"number",'min="2" max="6"')}<label>Test engine<select name="simulationEngine"><option value="scripted">Scripted rehearsal</option><option value="live">Live AI test</option></select></label><p class="field-help">Scripted: predictable sample offers, no OpenAI calls. Live AI: strategies use your selected model and incur normal API charges. Both use Firebase resources. With you and three simulated students, one tournament has 12 matches; six involve your agents.</p></div></div>`}function oc(){var e;const t=u.session;return!u.canManage&&!((e=t.simulation)!=null&&e.playAsStudent&&t.ownerId===S.uid)?"":`<section class="card player-view-bar"><div><strong>${u.playerView?"Student view":"Instructor view"}</strong><p class="small">${u.playerView?"Write your own strategies and see only your negotiations. Test results stay separate from your classroom statistics.":"Switch to Student view to participate with your own agents. Instructor view retains all session controls."}</p></div>${y(u.playerView?"Back to instructor controls":"Student view",u.playerView?"instructor-view":"student-view","secondary",u.member?"":"disabled")}</section>`}function cc(){const t=u.personalStats;return`<section class="card"><h2>Your test results</h2><p>Evaluation matches involving your agents only. Practice is excluded. Your buyer and seller each face every simulated classmate once per tournament. These totals combine all rounds; compare individual rounds below.</p><div class="metrics"><div><strong>${t.completed}</strong><span>completed evaluations</span></div><div><strong>${t.agreements}</strong><span>agreements</span></div><div><strong>${L(t.buyerMean)}</strong><span>mean buyer surplus · ${t.buyerCount} matches</span></div><div><strong>${L(t.sellerMean)}</strong><span>mean seller surplus · ${t.sellerCount} matches</span></div></div></section>`}function jn(t){return`<label class="checkbox-label"><input type="checkbox" name="autoFeedback" ${t.autoFeedback!==!1?"checked":""}>Automatic personalised feedback</label><label>Feedback tone<select name="feedbackTone">${[["supportive","Supportive and encouraging"],["balanced","Balanced and constructive"],["challenging","Challenging and direct"]].map(([e,s])=>`<option value="${e}" ${(t.feedbackTone||"supportive")===e?"selected":""}>${s}</option>`).join("")}</select></label><p class="small">After a round finishes, OpenAI reviews each student's strategies, results and selected transcripts. Feedback appears automatically. Uses the session's AI model and adds API token usage; simulated classmates and scripted tests do not generate feedback. Tone changes apply to future feedback.</p>`}function mt(t){var i;const e=t==null?void 0:t.published,s=e==null?void 0:e.content,n=((i=t==null?void 0:t.pending)==null?void 0:i.status)||(t==null?void 0:t.status);return`${n==="queued"||n==="generating"?'<p class="callout">Your personalised feedback is being prepared.</p>':n==="error"?'<p class="callout">Feedback could not be generated. Your instructor can retry it.</p>':""}${s?`<p class="feedback-text">${h(s.overview)}</p><h3>What worked well</h3><ul>${s.strengths.map(r=>`<li>${h(r)}</li>`).join("")}</ul><h3>What to improve</h3><ul>${s.improvements.map(r=>`<li>${h(r)}</li>`).join("")}</ul><h3>Try this next</h3><p class="feedback-text">${h(s.nextStrategy)}</p><p class="small">${e.reviewedMatches} scored negotiations · ${e.sampledMatches} transcript examples reviewed · ${Ne(e.releasedAt)}. Use this feedback to reflect and improve.</p>`:n?"":'<p class="small">Personalised feedback appears here after a completed evaluation round when automatic feedback is enabled.</p>'}`}function lc(){var a,o,l,d;if(!u.members)return`<section class="card"><p class="eyebrow">REFLECT & IMPROVE</p><h2>Your feedback</h2>${mt(u.feedback)}</section>`;const t=u.session.config,e=`<form id="feedback-settings" class="card"><h2>Automatic student feedback</h2>${jn(t)}<button class="primary">Save feedback settings</button></form>`;if(!u.members.length)return e;const s=u.members.find(c=>c.uid===ft)||u.members[0];ft=s.uid;const n=(a=u.feedback)==null?void 0:a.find(c=>c.uid===s.uid),i=(o=u.summary)==null?void 0:o.participants.find(c=>c.uid===s.uid),r=u.matches.filter(c=>{var f,g;return((f=c.buyer)==null?void 0:f.uid)===s.uid||((g=c.seller)==null?void 0:g.uid)===s.uid});return e+`<section class="card"><p class="eyebrow">REVIEW & COACH</p><h2>Student progress & feedback</h2><label>Student<select id="review-student">${u.members.map(c=>{var f,g;return`<option value="${h(c.uid)}" ${c.uid===s.uid?"selected":""}>${h(((f=c.profile)==null?void 0:f.name)||c.pseudonym)} · ${h((g=c.profile)==null?void 0:g.studentId)}</option>`}).join("")}</select></label><div class="metrics"><div><strong>${(i==null?void 0:i.buyerCount)||0}</strong><span>buyer evaluations</span></div><div><strong>${L(i==null?void 0:i.buyerMean)}</strong><span>mean buyer surplus</span></div><div><strong>${(i==null?void 0:i.sellerCount)||0}</strong><span>seller evaluations</span></div><div><strong>${L(i==null?void 0:i.sellerMean)}</strong><span>mean seller surplus</span></div></div><details><summary>Latest submitted strategies</summary>${s.final?`<h3>Buyer</h3><p class="feedback-text">${h(s.final.buyer)}</p><h3>Seller</h3><p class="feedback-text">${h(s.final.seller)}</p>`:"<p>No strategies submitted yet.</p>"}</details><details><summary>Review negotiations (${r.length})</summary>${r.map(c=>`<p><a href="#match-${h(c.id)}">${c.practice?"Practice":"Evaluation"} · ${c.buyer.uid===s.uid?"Buyer":"Seller"} · ${h(c.status)} · ${c.id.slice(-6)}</a></p>`).join("")}</details><h3>Personalised feedback</h3>${s.simulated?'<p class="small">Simulated classmates do not receive AI feedback.</p>':mt(n)}${((l=n==null?void 0:n.pending)==null?void 0:l.status)==="error"||((d=n==null?void 0:n.pending)==null?void 0:d.status)==="generating"&&n.pending.leaseUntil<Date.now()?y("Retry automatic feedback","retry-feedback","secondary",`data-uid="${h(s.uid)}"`):""}</section>`}function dc(){var r;const{session:t}=u,e=(r=u.members)==null?void 0:r.filter(a=>a.simulated);if(!t.simulation)return"";const s=t.simulationProgress||{},n=t.status==="active",i=a=>a?"":"disabled";return`<section class="card rehearsal-panel"><p class="eyebrow">INSTRUCTOR TEST SESSION</p><h2>Rehearse with ${t.simulation.students} simulated students${t.simulation.playAsStudent?" and your own agents":""}</h2><p>${t.simulation.engine==="scripted"?"Scripted rehearsal: deterministic sample offers, no OpenAI calls. These results do not measure AI or student performance.":"Live AI test: sample strategies run through "+h(t.config.model)+". Normal OpenAI API charges apply. These are simulated students, not real class results."} Real students cannot join this session.</p>${t.simulation.playAsStudent&&t.ownerId===S.uid&&["draft","lobby","active"].includes(t.status)?y("Prepare test and play","prepare-player-test","primary")+'<p class="small">Sets up your simulated classmates and opens Student view. Write your own strategies there; these are never filled in for you. No AI runs until you request practice or start a round.</p>':""}<ol class="rehearsal-steps"><li><strong>Open registration</strong> using the session control below, then add your simulated roster.</li><li>${y(s.enrol?"Simulated students added":"Add simulated students","simulation","secondary",`data-step="enrol" ${i(t.status==="lobby"&&!s.enrol)}`)} <span>Creates sample names and university IDs inside this session only.</span></li><li><strong>Open activity</strong>, then submit the sample strategies.</li><li>${y(s.submit?"Strategies submitted":"Submit simulated strategies","simulation","secondary",`data-step="submit" ${i(n&&s.enrol&&!s.submit)}`)} <span>Gives each student a different buyer/seller strategy.</span></li><li>${y(s.practice?"Practice started":"Run one practice per student","simulation","secondary",`data-step="practice" ${i(n&&s.submit&&!s.practice&&t.config.maxPractice>0)}`)} <span>${t.config.maxPractice?"Optional: runs each student’s buyer against their own seller.":"Practice is disabled in these session settings."}</span></li><li>Select <strong>Agent ↔ Agent</strong> below and click <strong>Start round</strong>. Wait for all evaluations, then <strong>Close session → Release debrief</strong> and export the test results.</li></ol>${e!=null&&e.some(a=>a.final)?`<details><summary>Inspect simulated student strategies</summary>${e.map(a=>{var o,l,d;return`<h3>${h((o=a.profile)==null?void 0:o.name)} · ${h(a.style)}</h3><p class="small"><strong>Buyer:</strong> ${h((l=a.final)==null?void 0:l.buyer)}<br><strong>Seller:</strong> ${h((d=a.final)==null?void 0:d.seller)}</p>`}).join("")}</details>`:""}</section>`}function D(){var i;const t=new Set([...document.querySelectorAll("#round-comparison details[open], #matches details[open]")].map(r=>r.dataset.roundStrategy||r.dataset.id));Un=Bn(u);const{session:e,member:s}=u,n=Ue()&&!!u.members;pe(`<div class="page-heading"><div><p class="eyebrow">${h(e.moduleCode)} / ACTIVITY 01</p><h1>${h(e.title)}</h1><p>Used-car negotiation · ${h(yt(e.config).title)} ${e.simulation?"· TEST SESSION":""}</p></div>${ue(e.status)}</div>${n?is()+'<div id="admin-panel" role="tabpanel" aria-labelledby="tab-sessions">':""}${S.aiReady===!1&&((i=e.simulation)==null?void 0:i.engine)!=="scripted"?'<p class="callout">AI negotiations are awaiting setup. You can save strategies and run human negotiations in the meantime.</p>':""}${u.inspecting?`<section class="card"><h2>Student screen · ${h(u.inspecting.name)}</h2><p>Read-only instructor preview. Actions are disabled.</p>${y("Back to instructor controls","end-inspection","secondary")}</section>`:oc()}${n?dc()+pc()+fc()+uc(e):hc()}${u.playerView?cc():""}${mc()}${lc()}${n?"":Vs(u.roundComparisons,Re,{esc:h,date:Ne,feedbackContent:mt})}<section class="card"><div class="section-heading"><h2>${n?"Session negotiations":"Your negotiations"}</h2><span class="small">Updates automatically</span></div><div id="matches"></div></section>${n?"</div>":""}`),kt();for(const r of document.querySelectorAll("#round-comparison details, #matches details"))t.has(r.dataset.roundStrategy||r.dataset.id)&&(r.open=!0);if(e.simulation){const r=b("#round-form select[name=mode]");if(r)for(const a of r.options)a.value!=="AA"&&(a.disabled=!0)}}function uc(t){const e=t.config;return`<section class="card"><details><summary>This session’s negotiation settings</summary><p class="small">These values were fixed when this session was created. Changes in Negotiations apply to new sessions.</p><dl><dt>Buyer / seller fallback</dt><dd>${L(e.buyerValue)} / ${L(e.sellerCost)}</dd><dt>Maximum turns</dt><dd>${e.maxTurns} total messages</dd><dt>Human turn time</dt><dd>${e.humanTurnSeconds} seconds</dd><dt>Practice allowance</dt><dd>${e.maxPractice} per student</dd><dt>Match budget</dt><dd>${e.maxMatches} including practice</dd><dt>AI model / temperature</dt><dd>${h(e.model)} / ${e.temperature}</dd></dl></details><details><summary>What the session controls do</summary><p class="small">Open registration lets students join. Open activity enables practice and play. Start round schedules the selected treatment using the latest submitted strategies. Pause temporarily stops activity; Resume continues it. Close cancels unfinished matches and ends play. Release debrief reveals counterpart types. CSV downloads outcome rows; full session downloads prompts, transcripts and settings.</p></details></section>`}function hc(){const{session:t,member:e}=u,s=O||(e==null?void 0:e.draft)||{buyer:"",seller:""};return`${Qn(t.config)}${t.status!=="active"?`<p class="callout">${t.status==="lobby"?"You are in. Your instructor will open the activity shortly.":t.status==="paused"?"Your instructor has paused the activity.":t.status==="debrief"?"The session is in debrief. Review your outcomes and counterparts below.":"This session is closed."}</p>`:""}<section class="card"><div class="section-heading"><div><p class="eyebrow">YOUR AGENTS</p><h2>A playbook for each side</h2></div>${e!=null&&e.final?ue("submitted"):'<span class="small">Not yet submitted</span>'}</div><p>Specify an opening offer, when to make concessions, and when to accept or walk away. “Get a good price” leaves more to chance than a clear strategy. Do not include personal details.</p><form id="prompts-form">${u.playerView?`<div class="actions">${y("Fill example strategies","fill-examples","secondary",t.status!=="active"?"disabled":"")}</div><p class="small">Fills both boxes with example buyer and seller instructions for your test. You can edit them before practising.</p>`:""}<div class="form-grid"><label>Buyer instructions<textarea name="buyer" required minlength="10" maxlength="6000" placeholder="How should your buyer negotiate?" ${t.status!=="active"?"disabled":""}>${h(s.buyer)}</textarea></label><label>Seller instructions<textarea name="seller" required minlength="10" maxlength="6000" placeholder="How should your seller negotiate?" ${t.status!=="active"?"disabled":""}>${h(s.seller)}</textarea></label></div><div class="actions"><button class="secondary" name="intent" value="draft" ${t.status!=="active"?"disabled":""}>Save draft</button><button class="secondary" name="intent" value="practice" ${t.status!=="active"||((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"disabled":""}>${((e==null?void 0:e.practiceCount)||0)>=t.config.maxPractice?"Practice limit reached":"Practise with these prompts"} (${(e==null?void 0:e.practiceCount)||0}/${t.config.maxPractice})</button><button class="primary" name="intent" value="final" ${t.status!=="active"?"disabled":""}>Submit for evaluation</button></div><p class="small">Each save keeps a version. Evaluation rounds use a frozen copy of your latest submitted prompts.</p></form><div id="student-next-step" class="student-next-step">${as()}</div></section>`}function as(){const{session:t,member:e}=u,s=O||(e==null?void 0:e.draft)||{},n=!!(e!=null&&e.final)&&(s.buyer!==e.final.buyer||s.seller!==e.final.seller),i='<div class="actions"><a href="#round-comparison">See round results and feedback ↓</a><a href="#matches">View negotiation transcripts ↓</a></div>';if(t.status!=="active")return`<h3>Next step</h3><p>${t.status==="paused"?"The activity is paused. Resume it from instructor controls to continue.":t.status==="lobby"?"Wait for the activity to open.":"This session has ended. Review your results and feedback below."}</p>${i}`;if(!(e!=null&&e.final)||n)return`<h3>Next: submit your ${n?"revised ":""}strategies</h3><p>Click <strong>Submit for evaluation</strong> above to use these instructions in the next round. Practice is optional.</p>${i}`;if(!u.playerView)return`<h3>Your strategies are submitted</h3><p>Your instructor starts the evaluation round. Results and feedback appear below as the round completes.</p>${i}`;const r=u.testControls,a=r!=null&&r.pending?"A test round is still running or needs instructor attention. Review its negotiations below before starting another.":r&&r.remainingMatches<r.roundMatches?"There is not enough remaining match budget for another round. Review your results below or create a new test session.":`Ready to compete against your ${t.simulation.students} simulated classmates. This runs a full round using your submitted strategies. You can stay in Student view.`;return`<h3>${r!=null&&r.canStart?"Next: run your test round":"Your test round"}</h3><p>${a}</p>${y("Start test round","start-player-round","primary",r!=null&&r.canStart?"":"disabled")}<p class="small">${(r==null?void 0:r.roundMatches)??""} total negotiations per round; ${t.simulation.students*2} involve your agents. Live AI uses your configured OpenAI model.</p>${i}`}function pc(){const{session:t,members:e,summary:s,rounds:n}=u,i={draft:[["lobby","Open registration"]],lobby:[["active","Open activity"],["closed","Close session"]],active:[["paused","Pause activity"],["closed","Close session"]],paused:[["active","Resume activity"],["closed","Close session"]],closed:[["debrief","Release debrief"]],debrief:[]},r=e.filter(a=>a.final).length;return`<section class="card"><div class="section-heading"><div><p class="eyebrow">${t.simulation?"TEST SESSION CODE":"SHARE THIS SESSION CODE"}</p><div class="session-code">${h(t.code)}</div></div><div class="actions">${i[t.status].map(([a,o])=>{var l;return y(o,"status",a==="closed"?"danger":"primary",`data-status="${a}" ${t.simulation&&t.status==="lobby"&&a==="active"&&!((l=t.simulationProgress)!=null&&l.enrol)?"disabled":""}`)}).join("")}</div></div><div class="metrics"><div><strong>${e.length}</strong><span>students joined</span></div><div><strong>${r}</strong><span>prompts submitted</span></div><div><strong>${t.matchCount}/${t.config.maxMatches}</strong><span>match budget</span></div><div><strong>${(s==null?void 0:s.completed)||0}</strong><span>completed evaluations</span></div></div></section><section class="card"><h2>Run an evaluation</h2><p>Agent rounds pair every submitted buyer with every other submitted seller (${r*(r-1)} matches per repetition). Human rounds pair students randomly, once each. An even number of students is required.</p><form id="round-form" class="inline-form"><label>Treatment<select name="mode"><option value="AA">Agent ↔ Agent</option><option value="HH">Human ↔ Human</option><option value="HA">Human buyer ↔ Agent seller</option><option value="AH">Agent buyer ↔ Human seller</option></select></label>${A("repetitions","Repetitions (agent rounds only)",1,"number",'min="1" max="5" required')}<button class="primary" ${t.status!=="active"?"disabled":""}>Start round</button></form><p class="small">Agent and hybrid rounds include only students with both prompts submitted. Human-only rounds include all enrolled students. Finish or cancel the current evaluation before starting another.</p>${n!=null&&n.length?`<details><summary>Round history (${n.length})</summary>${n.map(a=>`<p>${h(a.mode)} · ${a.matchCount} matches · ${Ne(a.createdAt)} · ${a.excludedIds.length} excluded without submitted prompts</p>`).join("")}</details>`:""}</section><section class="card"><div class="section-heading"><h2>Class roster</h2><div class="actions">${y("Export CSV","export","secondary",'data-format="csv"')}${y("Export full session","export","secondary",'data-format="json"')}</div></div><div class="table-scroll"><table><thead><tr><th>Student</th><th>University ID</th><th>Submission</th><th>Practice</th></tr></thead><tbody>${e.map(a=>{var o,l,d;return`<tr><td>${y(h(((o=a.profile)==null?void 0:o.name)||a.uid),"inspect-student","text-button",`data-uid="${h(a.uid)}"`)}<small>${h((l=a.profile)==null?void 0:l.email)}</small></td><td>${h((d=a.profile)==null?void 0:d.studentId)}</td><td>${a.final?`Version ${a.final.version}`:"Awaiting prompts"}</td><td>${a.practiceCount}</td></tr>`}).join("")}</tbody></table></div></section>`}function kt(){var d;const t=b("#matches");if(!t)return;u.inspecting&&document.querySelectorAll("#prompts-form input,#prompts-form textarea,#prompts-form button").forEach(c=>c.disabled=!0);const e=(d=document.activeElement)==null?void 0:d.closest(".action-form"),s=e&&u.matches.find(c=>c.id===e.dataset.match);if(s&&u.session.status==="active"&&s.status==="playing"&&s.transcript.length===Number(e.dataset.turn))return;const n=new Map([...t.querySelectorAll("form")].map(c=>[c.dataset.match,Object.fromEntries(new FormData(c))])),i=new Set([...t.querySelectorAll("details[open]")].map(c=>c.dataset.id)),r=u.session.status==="active",a=[...u.roundComparisons||u.rounds||[]].sort((c,f)=>c.createdAt-f.createdAt),o=new Map(a.map((c,f)=>[c.id,{...c,number:c.number||f+1}])),l=[...u.matches].sort((c,f)=>{var g,T;return Number(c.practice)-Number(f.practice)||(((g=o.get(f.roundId))==null?void 0:g.createdAt)||0)-(((T=o.get(c.roundId))==null?void 0:T.createdAt)||0)||String(c.roundId||"").localeCompare(String(f.roundId||""))||+!c.ownRoles.includes("buyer")-+!f.ownRoles.includes("buyer")||(f.createdAt||0)-(c.createdAt||0)||c.id.localeCompare(f.id)});t.innerHTML=l.length?l.map((c,f)=>{var Ie;const g=c.practice?"practice":c.roundId,T=l[f-1],se=!T||(T.practice?"practice":T.roundId)!==g?`<h3 class="match-group-heading">${c.practice?"Practice matches":`Round ${((Ie=o.get(c.roundId))==null?void 0:Ie.number)||"—"} evaluations`} · ${l.filter(C=>(C.practice?"practice":C.roundId)===g).length} negotiations</h3>`:"",p=!u.inspecting&&r&&c.status==="playing"&&c.ownRoles.includes(c.turn)&&c.ownKinds[c.turn]==="human",w=c.transcript.at(-1),H=n.get(c.id)||{};return`${se}<article class="match" id="match-${h(c.id)}"><div class="section-heading"><h3>${c.practice?"Practice":"Evaluation"} <span class="muted">${c.id.slice(-6)}</span></h3>${ue(c.status)}</div><p class="small">${c.ownRoles.length?`Your role: ${c.ownRoles.map(C=>`${C} (${c.ownKinds[C]})`).join(" + ")} · `:""}${c.transcript.length}/${c.config.maxTurns} turns${c.conditions?` · Buyer: ${c.conditions.buyer} / Seller: ${c.conditions.seller}`:""}</p>${c.outcome?`<div class="result"><strong>${c.outcome.agreed?`Agreement at ${L(c.outcome.price)}`:"No agreement"}</strong><span>Buyer surplus ${L(c.outcome.buyerSurplus)} · Seller surplus ${L(c.outcome.sellerSurplus)}</span></div>`:""}${c.error?`<p class="callout">${h(c.error)}</p>`:""}${c.status==="playing"?`<p>${p?`Your turn as ${c.turn}. Your fallback: ${L(c.fallbacks[c.turn])}.`:`Waiting for the ${c.turn}.`}</p>`:""}<details data-id="${h(c.id)}" ${i.has(c.id)||p?"open":""}><summary>Negotiation transcript (${c.transcript.length} turns)</summary><ol class="transcript">${c.transcript.map(C=>`<li class="${C.role}"><div><strong>${C.role==="buyer"?"Buyer":"Seller"} · Turn ${C.turn}</strong><span>${h(C.type)} ${C.price!==null?L(C.price):""}</span></div><p>${h(C.message)}</p></li>`).join("")||'<p class="empty">The negotiation has not started yet.</p>'}</ol></details>${p?`<form class="action-form" data-match="${h(c.id)}" data-turn="${c.transcript.length}"><p class="small">Turn deadline: ${Ne(c.deadline)}</p><div class="inline-form">${A("price",`Your offer (${yt(u.session.config).currency==="EUR"?"€":"$"})`,H.price||"","number",'min="0" max="1000000" step="1"')}<label>Message<input name="message" maxlength="1200" value="${h(H.message||"")}" placeholder="Explain your offer"></label></div><div class="actions"><button name="intent" value="offer" class="primary">Make offer</button>${(w==null?void 0:w.type)==="offer"?`<button name="intent" value="accept" class="secondary">Accept ${L(w.price)}</button>`:""}<button name="intent" value="reject" class="danger">End without agreement</button></div></form>`:""}${u.members&&["error","playing"].includes(c.status)?`<div class="actions">${y("Retry agent turn","retry","text-button",`data-match="${c.id}"`)}${y("Cancel match","cancel","text-button",`data-match="${c.id}"`)}</div>`:""}</article>`}).join(""):'<p class="empty">Your negotiations will appear here when you practise or your instructor starts a round.</p>'}async function ke(){if(Q="home",k=null,O=null,S=await v("/me"),V&&S.profile&&V.ts>(S.profile.simulationImportedAt||0)&&String(V.profile.email||"").toLowerCase()===String(_.currentUser.email).toLowerCase()&&(await Wt(S.profile),S=await v("/me")),Ue()){const[t,e]=await Promise.all([v("/sessions"),v("/task-settings/negotiation-v1")]);Ce=e.config,Bs(t)}else Bs(S.sessions)}function fc(){const t=[...u.rounds||[]].sort((e,s)=>e.createdAt-s.createdAt||e.id.localeCompare(s.id));return'<section class="card"><h2>Scores by round</h2><p>Scores out of 100. Click a student to review their screen, strategies, feedback and interactions. A dash means they did not participate; Pending means their round is unfinished. Exports use participant IDs from the full-session export.</p>'+y("Export round scores","export","secondary",'data-format="scores"')+'<div class="table-scroll"><table><thead><tr><th>Student</th><th>Participant ID</th>'+t.map((e,s)=>"<th>Round "+(s+1)+"</th>").join("")+"</tr></thead><tbody>"+u.members.map(e=>{var s;return"<tr><td>"+y(h(((s=e.profile)==null?void 0:s.name)||e.pseudonym),"inspect-student","text-button",'data-uid="'+h(e.uid)+'"')+"</td><td>"+h(e.pseudonym)+"</td>"+t.map(n=>{var r,a;const i=(a=(r=u.studentScores)==null?void 0:r.find(o=>o.uid===e.uid))==null?void 0:a.rounds.find(o=>o.id===n.id);return"<td>"+(i?i.score==null?"Pending":i.score.toFixed(1):"—")+"</td>"}).join("")+"</tr>"}).join("")+"</tbody></table></div></section>"}function mc(){return u.inspecting?'<section class="card"><h2>Saved strategy history</h2>'+(u.promptHistory||[]).sort((t,e)=>(t.version||0)-(e.version||0)).map(t=>"<details><summary>Version "+h(t.version??t.id)+'</summary><h3>Buyer</h3><p class="feedback-text">'+h(t.buyer)+'</p><h3>Seller</h3><p class="feedback-text">'+h(t.seller)+"</p></details>").join("")+"</section>":""}async function $(){return v(`/sessions/${k}${Pe?"?student="+encodeURIComponent(Pe):le?"?view=student":""}`)}async function gt(t){Pe=null,k=t,Q="session",$e="sessions",le=!1,O=null,ft=null,Re=null,u=await $(),D()}let os=[];async function Ht(){Q="students",k=null,os=(await v("/admin/students")).students,pe('<section class="card"><h1>Students</h1><label>Search name, university ID or email<input id="student-search" type="search" placeholder="Start typing"></label><p class="small">Select a student to edit their registration details. Session screens and interaction histories are available through each session roster.</p><div id="student-directory-results"></div></section><div id="student-editor"></div>'),qn()}function qn(){var e;const t=(((e=b("#student-search"))==null?void 0:e.value)||"").trim().toLowerCase();b("#student-directory-results").innerHTML='<div class="table-scroll"><table><thead><tr><th>Name</th><th>University ID</th><th>Email</th><th></th></tr></thead><tbody>'+os.filter(s=>[s.name,s.firstName,s.lastName,s.email,s.studentId].some(n=>String(n||"").toLowerCase().includes(t))).map(s=>"<tr><td>"+h(s.name)+"</td><td>"+h(s.studentId)+"</td><td>"+h(s.email)+"</td><td>"+y("Edit profile","edit-student-profile","secondary",'data-uid="'+h(s.uid)+'"')+"</td></tr>").join("")+"</tbody></table></div>"}async function it(){Q="profile",S=await v("/me");const t=await v("/stats");pe(`<div class="page-heading"><div><p class="eyebrow">YOUR ACCOUNT</p><h1>Profile & progress</h1></div></div>${Vn()}${Fn()}<section class="card"><h2>Your play statistics</h2><p>Completed evaluations only. Practice matches are counted separately.</p><div class="metrics"><div><strong>${t.matches}</strong><span>evaluations completed</span></div><div><strong>${t.agreed}</strong><span>agreements</span></div><div><strong>${t.surplusByCurrency&&Object.keys(t.surplusByCurrency).length?Object.entries(t.surplusByCurrency).map(([e,s])=>bt(s,e)).join(" / "):"—"}</strong><span>mean surplus per role</span></div><div><strong>${t.practice}</strong><span>practice matches</span></div></div><p class="small">${t.pending} unfinished evaluations · ${t.sessions} class sessions</p></section>`)}async function gc(){var s,n;if(Q!=="session"||be||Nt||document.hidden||document.querySelector(".car-photo-dialog[open]"))return;Nt=!0;const t=k,e=le;try{const i=await $();if(Q!=="session"||k!==t||le!==e||Pe!==(((s=i.inspecting)==null?void 0:s.uid)||null))return;const r=i.session.status!==u.session.status,a=Bn(i)!==Un;!u.inspecting&&b("#prompts-form")&&(O=Object.fromEntries(new FormData(b("#prompts-form")))),u=i,r||a&&!((n=document.activeElement)!=null&&n.closest("form"))?D():kt()}catch(i){St(i)}finally{Nt=!1}}async function Gn(){await Da(_.currentUser,{url:location.origin+location.pathname}),E="Verification email sent. Check your inbox and spam folder."}async function Wt(t){const e=V&&String(V.profile.email||"").toLowerCase()===String(_.currentUser.email).toLowerCase(),s={firstName:t.firstName,lastName:t.lastName,studentId:t.studentId,...e?{simulationProfile:V.profile}:{}};await v("/profile",s,"PUT")}document.addEventListener("submit",async t=>{var r;if(t.preventDefault(),be)return;const e=t.target,s=Object.fromEntries(new FormData(e)),n=(r=t.submitter)==null?void 0:r.value;if(be=!0,E="",u!=null&&u.inspecting&&Q==="session")return;const i=[...e.querySelectorAll("button")];i.forEach(a=>a.disabled=!0);try{if(e.id==="admin-student-form")await v("/admin/students/"+encodeURIComponent(e.dataset.uid),s,"PUT"),E="Student profile updated.",await Ht();else if(e.id==="auth-form")pt==="register"?(nt=s,await Oa(_,s.email,s.password),await Gn(),await Wt(s),nt=null,await ke()):await Na(_,s.email,s.password);else if(e.id==="profile-form")await Wt(s),s.email!==_.currentUser.email?(await La(_.currentUser,s.email,{url:location.origin+location.pathname}),E="Profile saved. Verify the link sent to your new email to finish the email change."):E="Profile saved.",await it();else if(e.id==="join-form"){const a=await v("/join",{code:s.code});await gt(a.id)}else if(e.id==="negotiation-settings"){const a=Object.fromEntries(["buyerValue","sellerCost","maxTurns","humanTurnSeconds","maxMatches","maxPractice","temperature"].map(l=>[l,Number(s[l])]));a.model=s.model,a.autoFeedback=!!s.autoFeedback,a.feedbackTone=s.feedbackTone,Ce=(await v("/task-settings/negotiation-v1",a,"PUT")).config,E="Negotiation settings saved. New sessions will use these values.",rs()}else if(e.id==="create-session"){const a={...Ce},o=s.testSession?{students:Number(s.simulatedStudents),engine:s.simulationEngine,playAsStudent:!!s.playAsStudent}:void 0,l=await v("/sessions",{title:s.title,code:s.code,moduleCode:s.moduleCode,taskId:s.taskId,config:a,...o?{simulation:o}:{}});await gt(l.id)}else if(e.id==="prompts-form")O={buyer:s.buyer,seller:s.seller},await v(`/sessions/${k}/prompts`,{...O,final:n==="final"}),n==="practice"&&await v(`/sessions/${k}/practice`,{requestId:crypto.randomUUID()}),E=n==="final"?"Prompts submitted for evaluation.":n==="practice"?"Practice started. Watch the transcript below.":"Draft saved.",u=await $(),D();else if(e.id==="feedback-settings")await v(`/sessions/${k}/feedback-settings`,{autoFeedback:!!s.autoFeedback,feedbackTone:s.feedbackTone},"PUT"),E="Automatic feedback settings saved.",u=await $(),D();else if(e.id==="round-form")await v(`/sessions/${k}/rounds`,{requestId:crypto.randomUUID(),mode:s.mode,repetitions:Number(s.repetitions)}),u=await $(),D();else if(e.matches(".action-form")){const a=u.matches.find(o=>o.id===e.dataset.match);if(n==="offer"&&s.price==="")throw new Error("Enter a price for your offer.");await v(`/sessions/${k}/matches/${a.id}/action`,{expectedTurn:Number(e.dataset.turn),action:{type:n,price:n==="offer"?Number(s.price):n==="accept"?a.transcript.at(-1).price:null,message:s.message||""}}),e.reset(),u=await $(),kt()}}catch(a){nt=null,St(a),e.id==="auth-form"&&_.currentUser&&await ke()}finally{be=!1,i.forEach(a=>{a.isConnected&&(a.disabled=!1)})}});document.addEventListener("input",t=>{if(t.target.closest("#prompts-form")){O=Object.fromEntries(new FormData(b("#prompts-form")));const e=b("#student-next-step");e&&(e.innerHTML=as())}});document.addEventListener("change",t=>{if(t.target.id==="compare-before"||t.target.id==="compare-after"){Re={before:b("#compare-before").value,after:b("#compare-after").value},b("#prompts-form")&&(O=Object.fromEntries(new FormData(b("#prompts-form"))));const e=b("#round-comparison");e.outerHTML=Vs(u.roundComparisons,Re,{esc:h,date:Ne,feedbackContent:mt})}if(t.target.id==="review-student"&&(ft=t.target.value,D()),t.target.id==="test-session"&&(b("#simulation-options").hidden=!t.target.checked),t.target.id==="play-as-student"){const e=b("select[name=simulationEngine]");e.querySelector("option[value=scripted]").disabled=t.target.checked,t.target.checked&&(e.value="live")}});document.addEventListener("click",async t=>{var s,n,i,r,a,o,l;const e=t.target.closest("[data-action],[data-open]");if(e&&(t.preventDefault(),!be)){be=!0;try{const d=e.dataset.action;if(d==="inspect-directory-session"){await gt(e.dataset.session),Pe=e.dataset.uid,u=await $(),D();return}if(d==="student-directory"){await Ht();return}if(d==="edit-student-profile"){const c=os.find(g=>g.uid===e.dataset.uid);b("#student-editor").innerHTML='<section class="card"><h2>Edit student profile</h2><form id="admin-student-form" data-uid="'+h(c.uid)+'">'+A("firstName","First name",c.firstName,"text",'required maxlength="80"')+A("lastName","Last name",c.lastName,"text",'required maxlength="80"')+A("studentId","University ID",c.studentId,"text",'required minlength="2" maxlength="40"')+A("email","Email",c.email,"email","required")+'<p class="small">Changing email changes the sign-in email and requires verification again.</p><button class="primary">Save profile</button></form>'+y("Delete profile","delete-student-profile","danger",'data-uid="'+h(c.uid)+'"')+'<p class="small">Deletes registration details only. Sign-in account, session records, strategies and results remain. The student can register their details again.</p></section>';const f=await v("/admin/students/"+encodeURIComponent(c.uid)+"/sessions");b("#student-editor").insertAdjacentHTML("beforeend",'<section class="card"><h2>Student sessions</h2>'+f.sessions.map(g=>y(h(g.title||g.sessionId),"inspect-directory-session","secondary",'data-session="'+h(g.sessionId)+'" data-uid="'+h(c.uid)+'"')).join("")+(f.sessions.length?"":"<p>No joined sessions.</p>")+"</section>"),b("#student-editor").scrollIntoView({behavior:"smooth"});return}if(d==="delete-student-profile"){if(!confirm("Delete this student’s registration profile? Their sign-in account and all historical session records will remain."))return;await v("/admin/students/"+encodeURIComponent(e.dataset.uid),null,"DELETE"),E="Student profile deleted. Historical session records retained.",await Ht();return}if(d==="inspect-student"||d==="end-inspection"){Pe=d==="inspect-student"?e.dataset.uid:null,le=!1,O=null,Re=null,u=await $(),D();return}if(e.dataset.open){await gt(e.dataset.open);return}if(d==="start-player-round"){if(!u.playerView||!((s=u.testControls)!=null&&s.canStart))return;const c=Object.fromEntries(new FormData(b("#prompts-form"))),f=(n=u.member)==null?void 0:n.final;if(!f||c.buyer!==f.buyer||c.seller!==f.seller)throw new Error("Submit your revised strategies before starting the round.");await v(`/sessions/${k}/rounds`,{requestId:crypto.randomUUID(),mode:"AA",repetitions:1}),Re=null,E="Test round started. Your results and personalised feedback update below.",u=await $(),D(),(i=b("#round-comparison"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})}if(d==="fill-examples"){const c=b("#prompts-form");if(!c||!u.playerView||u.session.status!=="active")return;const f=c.elements.buyer,g=c.elements.seller;if([["buyer",f],["seller",g]].some(([se,p])=>p.value.trim()&&p.value!==cs[se])&&!confirm("Replace the instructions in both boxes with the examples? Saved versions will remain available."))return;O={...cs},f.value=O.buyer,g.value=O.seller,E="Example strategies filled in. Review or edit them, then click Practise with these prompts.",b("#notice").className="",b("#notice").textContent=E;const P=b("#student-next-step");P&&(P.innerHTML=as()),f.focus()}if(d==="retry-feedback"&&(await v(`/sessions/${k}/feedback/${e.dataset.uid}/retry`,{}),u=await $(),D()),(d==="student-view"||d==="instructor-view")&&(b("#prompts-form")&&(O=Object.fromEntries(new FormData(b("#prompts-form")))),le=d==="student-view",u=await $(),D()),d==="prepare-player-test"&&(le=!1,u=await $(),u.session.status==="draft"&&(await v(`/sessions/${k}/status`,{status:"lobby"}),u=await $()),(r=u.session.simulationProgress)!=null&&r.enrol||(await v(`/sessions/${k}/simulation`,{action:"enrol"}),u=await $()),u.session.status==="lobby"&&(await v(`/sessions/${k}/status`,{status:"active"}),u=await $()),(a=u.session.simulationProgress)!=null&&a.submit||await v(`/sessions/${k}/simulation`,{action:"submit"}),le=!0,u=await $(),D()),d==="simulation"&&(await v(`/sessions/${k}/simulation`,{action:e.dataset.step}),u=await $(),D()),d==="toggle-auth"&&(pt=pt==="login"?"register":"login",Vt()),d==="home"&&($e="sessions",S?await ke():Vt()),d==="admin-tab"&&($e=e.dataset.tab==="negotiations"?"negotiations":"sessions",E="",await ke()),d==="reset-negotiation-settings"&&(Ce={scenarioId:R.id,buyerValue:R.buyerValue,sellerCost:R.sellerCost,maxTurns:12,humanTurnSeconds:180,maxMatches:100,maxPractice:5,model:"gpt-4.1-mini",temperature:1},E="Baseline values filled in. Click Save negotiation settings to keep them.",rs()),d==="copy-session-link"){const c=new URL(location.pathname,location.origin);c.searchParams.set("session",e.dataset.code),await navigator.clipboard.writeText(c.href),E="Student link copied. Share it with your class.",b("#notice").textContent=E}if(d==="dashboard-export"&&await Fs(e.dataset.session,e.dataset.code,e.dataset.format),d==="profile"&&await it(),d==="logout"&&(O=null,await Ba(_)),d==="google"&&await ro(_,new W),d==="link-google"&&(await ao(_.currentUser,new W),E="Google sign-in connected.",await it()),d==="verify"&&(await Gn(),await it()),d==="verified"&&(await ln(_.currentUser),await _.currentUser.getIdToken(!0),E=_.currentUser.emailVerified?"Email verified.":"Email is not verified yet.",await ke()),d==="reset"){const c=((o=_.currentUser)==null?void 0:o.email)||((l=b("input[name=email]"))==null?void 0:l.value);if(!c)throw new Error("Enter your email address first.");await Ra(_,c,{url:location.origin+location.pathname}),E="If an account exists, a password setup / reset link has been sent to that address.",b("#notice").textContent=E}if(d==="status"){if(e.dataset.status==="closed"&&!confirm("Close this session? Unfinished negotiations will be cancelled."))return;await v(`/sessions/${k}/status`,{status:e.dataset.status}),u=await $(),D()}(d==="retry"||d==="cancel")&&(await v(`/sessions/${k}/matches/${e.dataset.match}/${d}`,{}),u=await $(),kt()),d==="export"&&await Fs(k,u.session.code,e.dataset.format)}catch(d){St(d)}finally{be=!1}}});async function Fs(t,e,s){const n=await v(`/sessions/${t}/export?format=${s}`,null,"GET",!0),i=URL.createObjectURL(await n.blob()),r=document.createElement("a");r.href=i,r.download=`agentlab-${e}${s==="scores"?"-scores.csv":"."+s}`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}Ua(_,async t=>{if(!nt)try{t?await ke():(S=null,Q="home",k=null,Vt())}catch(e){pe('<section class="card"><h1>Could not load your workspace</h1><p>Check the connection and try again.</p><button data-action="home">Retry</button><button data-action="logout">Sign out</button></section>'),St(e)}});setInterval(gc,5e3);document.addEventListener("input",t=>{t.target.id==="student-search"&&qn()});
