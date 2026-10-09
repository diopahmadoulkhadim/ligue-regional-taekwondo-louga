document.addEventListener("DOMContentLoaded",()=>{
  const c=document.getElementById("liste-evenements");if(!c)return;
  const ca=document.getElementById("liste-archives"),block=document.getElementById("archivesBlock"),empty=document.getElementById("emptyEvents");
  const q=document.getElementById("searchEvents"),f=document.getElementById("filterType"),sort=document.getElementById("sortEvents"),reset=document.getElementById("resetEvents"),counter=document.getElementById("eventsCounter");
  // Événements retrouvés dans des sources publiques (js/louga-events.js), affichés comme archives
  const archives=(typeof evenementsLougaVerifies!=="undefined"?evenementsLougaVerifies:[]).map(e=>({...e,description:e.description||e.details||"",archive:true}));
  const match=e=>(!q.value||`${e.titre} ${e.description} ${e.lieu}`.toLowerCase().includes(q.value.toLowerCase()))&&(!f.value||f.value==="tous"||e.type===f.value);
  const order=a=>{if(sort.value==="name")a.sort((x,y)=>x.titre.localeCompare(y.titre));if(sort.value==="type")a.sort((x,y)=>x.type.localeCompare(y.type));return a};
  const card=e=>`<div class="col-md-6 col-lg-4"><article class="card-pro"><div class="card-body-pro"><span class="badge-soft">${typeLabel(e.type)}</span>${e.archive?' <span class="badge-soft" style="background:#f2f4f7;color:#475467">ARCHIVE</span>':""}<h3 class="mt-3">${esc(e.titre)}</h3><p class="muted">${esc(e.description)}</p><small><i class="bi bi-calendar3"></i> ${esc(e.date)}${e.archive&&e.heure?` · ${esc(e.heure)}`:""} · ${esc(e.lieu)}</small>${e.zone?`<br><small class="muted">${esc(e.zone)}</small>`:""}${e.source?`<br><small class="muted">Source : ${esc(e.source)}</small>`:""}</div></article></div>`;
  function render(){
    const a=order(evenements.filter(match)),b=order(archives.filter(match));
    c.innerHTML=a.map(card).join("");
    if(ca){ca.innerHTML=b.map(card).join("");block?.classList.toggle("d-none",b.length===0)}
    empty?.classList.toggle("d-none",a.length+b.length>0);
    counter.textContent=`${a.length} activité${a.length>1?"s":""}`+(b.length?` · ${b.length} archive${b.length>1?"s":""}`:"");
  }
  [q,f,sort].forEach(x=>x&&x.addEventListener("input",render));
  reset?.addEventListener("click",()=>{q.value="";f.value="tous";sort.value="default";render()});
  const url=new URLSearchParams(location.search);if(url.get("type"))f.value=url.get("type");
  render();
});
