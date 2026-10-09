document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-people-section]").forEach(sec=>{
    const type=sec.dataset.peopleSection,data=type==="entraineurs"?entraineurs:arbitres;
    const c=sec.querySelector(".people-list"),q=sec.querySelector(".people-search"),f=sec.querySelector(".people-club"),n=sec.querySelector(".people-counter");
    function render(){
      const a=data.filter(p=>(!q.value||`${p.nom} ${p.club} ${p.specialites.join(" ")}`.toLowerCase().includes(q.value.toLowerCase()))&&(!f.value||f.value==="tous"||p.club===f.value));
      c.innerHTML=a.map(p=>`<div class="col-md-6 col-lg-4"><article class="card-pro"><img src="${p.photo}" class="w-100" style="height:220px;object-fit:cover" alt="${esc(p.nom)}"><div class="card-body-pro"><span class="badge-soft">${type==="entraineurs"?"ENTRAÎNEUR":"ARBITRE"}</span><h3 class="mt-3">${esc(p.nom)}</h3><p class="muted mb-1"><b>Club :</b> ${esc(p.club)}</p><p class="muted mb-1"><b>${type==="entraineurs"?"Grade":"Niveau"} :</b> ${esc(p.grade||p.niveau)}</p><p class="muted">${p.specialites.map(esc).join(" · ")}</p></div></article></div>`).join("");
      n.textContent=`${a.length} profil${a.length>1?"s":""}`;
    }
    [...new Set(data.map(p=>p.club))].forEach(x=>f.innerHTML+=`<option value="${esc(x)}">${esc(x)}</option>`);
    q.addEventListener("input",render);f.addEventListener("change",render);render();
  });
});
