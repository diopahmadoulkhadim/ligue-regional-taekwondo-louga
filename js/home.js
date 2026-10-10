document.addEventListener("DOMContentLoaded",()=>{
  const img=p=>esc(String(p||"").replace(/^\.\.\//,""));
  const news=document.getElementById("homeNews");
  if(news){
    const a=actualites.filter(x=>x.statut==="publie").slice(0,3);
    news.innerHTML=a.length?a.map(x=>`<div class="col-md-6 col-lg-4"><article class="news-card"><img src="${img(x.image)}" class="w-100" style="height:200px;object-fit:cover" alt="${esc(x.titre)}" loading="lazy"><div class="news-content"><span class="badge-soft">${esc(x.categorie)}</span><h3 class="mt-3">${esc(x.titre)}</h3><p class="muted">${esc(x.resume)}</p><small>${esc(x.date)}</small></div></article></div>`).join(""):`<div class="col-12"><div class="empty-state">Aucune actualité pour le moment.</div></div>`;
  }
  const ev=document.getElementById("homeEvents");
  if(ev){
    const a=[...evenements,...(typeof evenementsLougaVerifies!=="undefined"?evenementsLougaVerifies:[])].filter(x=>x.statut==="a-venir").slice(0,3);
    const archives=[...evenements,...(typeof evenementsLougaVerifies!=="undefined"?evenementsLougaVerifies:[])].filter(x=>x.statut==="archive").slice(0,3);
    const list=a.length?a:archives;
    ev.innerHTML=list.length?list.map(e=>`<div class="col-md-6 col-lg-4"><article class="card-pro">${e.image?`<div class="event-card-image"><img src="${img(e.image)}" alt="${esc(e.titre)}" loading="lazy"></div>`:""}<div class="card-body-pro"><span class="badge-soft">${typeLabel(e.type)}</span>${e.statut==="archive"?' <span class="badge-soft" style="background:#f2f4f7;color:#475467">ARCHIVE</span>':""}<h3 class="mt-3">${esc(e.titre)}</h3><p class="muted">${esc(e.description||e.details||"")}</p><small>${esc(e.date)} · ${esc(e.lieu)}</small></div></article></div>`).join(""):`<div class="col-12"><div class="empty-state">Aucune activité à afficher.</div></div>`;
  }
  // Stats bar
  const stats=document.getElementById("homeStats");
  if(stats&&typeof statistiquesLigue!=="undefined"){
    stats.innerHTML=`
      <div class="col-6 col-md-3"><div class="stat-card"><div class="stat-num">${statistiquesLigue.clubs||"—"}</div><div class="stat-label">Clubs affiliés</div><small class="muted">Saison 2022-2023</small></div></div>
      <div class="col-6 col-md-3"><div class="stat-card"><div class="stat-num">${statistiquesLigue.athletes||"—"}</div><div class="stat-label">Licenciés</div><small class="muted">Saison 2022-2023</small></div></div>
      <div class="col-6 col-md-3"><div class="stat-card"><div class="stat-num">4</div><div class="stat-label">Zones actives</div><small class="muted">Louga · Kébémer · Niomré · Dahra</small></div></div>
      <div class="col-6 col-md-3"><div class="stat-card"><div class="stat-num">2021</div><div class="stat-label">Bureau installé</div><small class="muted">31 janvier · CEDEPS</small></div></div>`;
  }
});
