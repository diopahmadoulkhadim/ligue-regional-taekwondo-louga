document.addEventListener("DOMContentLoaded",()=>{
  const f=document.getElementById("contactForm");if(!f)return;
  const num=String(SITE_CONFIG.whatsapp||"").replace(/\D/g,"");
  // Coordonnées affichées seulement si renseignées dans SITE_CONFIG (js/app.js)
  const em=document.getElementById("contactEmail");
  if(em&&SITE_CONFIG.email)em.innerHTML=`<a href="mailto:${esc(SITE_CONFIG.email)}">${esc(SITE_CONFIG.email)}</a>`;
  const canaux=document.getElementById("contactCanaux");
  if(canaux){
    if(num)canaux.innerHTML+=`<div class="contact-info-item"><div class="contact-icon"><i class="bi bi-whatsapp"></i></div><div><b>WhatsApp</b><p class="muted mb-2">Écrivez-nous directement.</p><a class="btn btn-success btn-sm rounded-pill" href="https://wa.me/${num}" target="_blank" rel="noopener">Ouvrir WhatsApp</a></div></div>`;
    if(SITE_CONFIG.facebook)canaux.innerHTML+=`<div class="contact-info-item"><div class="contact-icon"><i class="bi bi-facebook"></i></div><div><b>Facebook</b><p class="muted mb-2">Suivez les nouvelles de la Ligue.</p><a class="btn btn-outline-dark btn-sm rounded-pill" href="${esc(SITE_CONFIG.facebook)}" target="_blank" rel="noopener">Voir la page</a></div></div>`;
  }
  f.addEventListener("submit",e=>{
    e.preventDefault();
    if(!f.checkValidity()){f.classList.add("was-validated");return}
    const v=id=>document.getElementById(id).value.trim();
    const texte=`Nom : ${v("cNom")}\nEmail : ${v("cEmail")}\nProfil : ${v("cProfil")}\nSujet : ${v("cSujet")}\n\n${v("cMessage")}`;
    const r=document.getElementById("contactResult");r.className="alert alert-success mt-4";
    if(num){
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(texte)}`,"_blank","noopener");
      r.textContent="WhatsApp s'ouvre avec votre message déjà rédigé : il suffit de l'envoyer.";
    }else if(SITE_CONFIG.email){
      location.href=`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("Contact site — "+v("cSujet"))}&body=${encodeURIComponent(texte)}`;
      r.textContent="Votre application de messagerie s'ouvre avec votre message : il suffit de l'envoyer.";
    }else{
      r.className="alert alert-info mt-4";
      r.textContent="Les coordonnées officielles de la Ligue seront bientôt disponibles. Votre message n'a pas été envoyé.";
      return;
    }
    f.reset();f.classList.remove("was-validated");
  });
});
