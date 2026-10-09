document.addEventListener("DOMContentLoaded",()=>{
  // Sur index.html (à la racine), les chemins d'images de data.js (../assets/...) doivent devenir assets/...
  const img=p=>esc(String(p||"").replace(/^\.\.\//,""));
  const news=document.getElementById("homeNews");
  if(news){
    const a=actualites.filter(x=>x.statut==="publie").slice(0,3);
    news.innerHTML=a.length?a.map(x=>`<div class="col-md-6 col-lg-4"><article class="news-card"><img src="${img(x.image)}" class="w-100" style="height:190px;object-fit:cover" alt="${esc(x.titre)}"><div class="news-content"><span class="badge-soft">${esc(x.categorie)}</span><h3 class="mt-3">${esc(x.titre)}</h3><p class="muted">${esc(x.resume)}</p><small>${esc(x.date)}</small></div></article></div>`).join(""):`<div class="col-12"><div class="empty-state">Aucune actualité pour le moment.</div></div>`;
  }
  const ev=document.getElementById("homeEvents");
  if(ev){
    const a=evenements.filter(x=>x.statut==="a-venir").slice(0,3);
    ev.innerHTML=a.length?a.map(e=>`<div class="col-md-6 col-lg-4"><article class="card-pro"><div class="card-body-pro"><span class="badge-soft">${typeLabel(e.type)}</span><h3 class="mt-3">${esc(e.titre)}</h3><p class="muted">${esc(e.description)}</p><small>${esc(e.date)} · ${esc(e.lieu)}</small></div></article></div>`).join(""):`<div class="col-12"><div class="empty-state">Aucune activité à venir.</div></div>`;
  }
});
