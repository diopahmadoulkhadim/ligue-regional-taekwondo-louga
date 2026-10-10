// Données vérifiées uniquement (sources : Rapport d'activités FSTKD 2018-2023 ; Communiqué LRT Louga n°28/06/2025)
const informationsLigue={
  nom:"Ligue Régionale de Taekwondo de Louga",
  region:"Louga",
  pays:"Sénégal",
  email:"",
  telephone:"",
  adresse:"CDEPS de Louga",
  federation:"Fédération Sénégalaise de Taekwondo (FSTKD)",
  federationEmail:"senegaltaekwondo@gmail.com",
  federationWeb:"https://www.fstkd.sn",
  federationTel:"+221 77 656 77 89 / +221 77 519 42 11",
  // Bureau installé le 31 janvier 2021 au CEDEPS de Louga (Rapport FSTKD 2018-2023)
  president:"Déthié LY",
  vicePresident1:"Aliou FALL",
  vicePresident2:"Cheikh KONTEYE",
  secretaireGeneral:"Birane Gaye MBAYE",
  secretaireGeneralAdjoint:"Maguette SYLLA",
  tresorier:"Latyr DIALLO",
  tresorierAdjoint:"Samba DIOP",
  // Mentionné comme dirigeant du bureau exécutif dans le communiqué officiel de juin 2025
  mention2025:"Serigne Abass Mbaye"
};

// Statistiques officielles FSTKD (clubs affiliés / licenciés par saison)
const statistiquesLigue={
  clubs2018_19:9,
  clubs2019_21:13,
  clubs2021_22:14,
  clubs2022_23:17,
  licencies2018_19:180,
  licencies2019_21:207,
  licencies2021_22:317,
  licencies2022_23:503,
  clubs:17,
  athletes:503,
  activitesAnnuelles:null
};

const evenements=[
  {
    id:1,
    titre:"Phase finale du Championnat régional",
    type:"competition",
    date:"5 juillet 2025",
    dateISO:"2025-07-05",
    heure:"08:00",
    lieu:"CDEPS de Louga",
    statut:"archive",
    description:"Phase finale du championnat régional de taekwondo de Louga. Engagement : 5 000 F CFA. Pesage la veille (4 juillet 2025, 20h–22h). Ouvert également aux athlètes poomsae.",
    image:"../assets/images/photos/card-french.jpg",
    source:"Communiqué officiel LRT Louga n°28/06/2025"
  },
  {
    id:2,
    titre:"Pesage — Championnat régional",
    type:"competition",
    date:"4 juillet 2025",
    dateISO:"2025-07-04",
    heure:"20:00",
    lieu:"CDEPS de Louga",
    statut:"archive",
    description:"Pesage officiel pour la phase finale du championnat régional (20h–22h).",
    image:"../assets/images/photos/card-hero.jpg",
    source:"Communiqué officiel LRT Louga n°28/06/2025"
  }
];

// Zones / localités actives identifiées via les activités publiques (pas de noms de clubs inventés)
const clubs=[
  {id:1,nom:"Clubs de Louga",localite:"Louga",zone:"Louga",statut:"Actif",specialites:["Kyorugi","Poomsae"],description:"Structures affiliées à la Ligue basées à Louga. Lieu principal des compétitions régionales : CDEPS de Louga.",entraineur:"",contact:"",email:"",logo:"../assets/images/photos/card-hero.jpg"},
  {id:2,nom:"Clubs de Kébémer",localite:"Kébémer",zone:"Kébémer",statut:"Actif",specialites:["Kyorugi","Passage de grades"],description:"Structures de la zone de Kébémer. Site de passages de grades organisés en août 2025.",entraineur:"",contact:"",email:"",logo:"../assets/images/photos/card-aau.jpg"},
  {id:3,nom:"Clubs de Dahra Djolof",localite:"Dahra Djolof",zone:"Dahra Djolof",statut:"Actif",specialites:["Kyorugi","Poomsae"],description:"Structures de la zone de Dahra Djolof. Site de passages de grades organisés en août 2025.",entraineur:"",contact:"",email:"",logo:"../assets/images/photos/card-french.jpg"},
  {id:4,nom:"Clubs de Niomré",localite:"Niomré",zone:"Niomré",statut:"Actif",specialites:["Passage de grades"],description:"Zone A — passages de grades organisés en août 2025.",entraineur:"",contact:"",email:"",logo:"../assets/images/photos/card-brannstam.jpg"}
];

// Aucun athlète / entraîneur / arbitre nommé publiquement de façon vérifiable — listes vides
const athletes=[];
const entraineurs=[];
const arbitres=[];

// Aucun résultat individuel officiel publié en ligne — liste vide (pas de démo)
const resultats=[];
const baremeClassement={or:3,argent:2,bronze:1};

const actualites=[
  {
    id:1,
    titre:"Phase finale du Championnat régional 2025",
    categorie:"competition",
    date:"5 juillet 2025",
    dateISO:"2025-07-05",
    auteur:"Ligue Régionale de Taekwondo de Louga",
    resume:"La phase finale du championnat régional s’est tenue au CDEPS de Louga. Engagement fixé à 5 000 F CFA. Pesage la veille.",
    contenu:"Selon le communiqué officiel n°28/06/2025 du Secrétariat Général de la Ligue, le bureau exécutif a fixé la phase finale au samedi 5 juillet 2025 (jour de Tamkharit), avec démarrage à 8h00 précises. Le pesage a eu lieu le vendredi 4 juillet 2025 de 20h à 22h au CDEPS de Louga. Les engagements se faisaient par crédit mutuel (CMS compte 135 704 5), date limite le 3 juillet 2025.",
    image:"../assets/images/photos/card-french.jpg",
    statut:"publie",
    source:"Communiqué officiel LRT Louga"
  },
  {
    id:2,
    titre:"Passages de grades — août 2025",
    categorie:"grade",
    date:"Août 2025",
    dateISO:"2025-08-23",
    auteur:"Ligue Régionale",
    resume:"Sessions de passage de grades organisées à Kébémer, Niomré, CDEPS Louga et Dahra Djolof.",
    contenu:"Plusieurs sessions de passage de grades ont eu lieu fin août 2025 dans les zones de la région de Louga (Kébémer, Niomré, CDEPS Louga, Dahra Djolof), couvrant ceintures blanches à bleues selon les sites.",
    image:"../assets/images/photos/card-aau.jpg",
    statut:"publie",
    source:"Sources publiques (Taekwondoconneckt)"
  },
  {
    id:3,
    titre:"La Ligue de Louga dans le paysage fédéral",
    categorie:"institution",
    date:"2023",
    dateISO:"2023-01-01",
    auteur:"FSTKD",
    resume:"Selon le rapport d’activités FSTKD 2018-2023 : 17 clubs affiliés et 503 licenciés pour la saison 2022-2023.",
    contenu:"Le rapport d’activités de la Fédération Sénégalaise de Taekwondo (2018-2023) indique pour la Ligue de Louga une progression du nombre de clubs affiliés (9 en 2018-2019 → 17 en 2022-2023) et de licenciés (180 → 503). Le bureau exécutif a été installé le 31 janvier 2021 au CEDEPS de Louga.",
    image:"../assets/images/photos/card-hero.jpg",
    statut:"publie",
    source:"Rapport d'activités FSTKD 2018-2023"
  }
];

const documents=[
  {
    id:1,
    titre:"Communiqué — Phase finale Championnat régional 2025",
    type:"communique",
    date:"28 juin 2025",
    dateISO:"2025-06-28",
    description:"Communiqué officiel n°28/06/2025/CF-SG/LRT L — Phase finale du championnat régional (5 juillet 2025, CDEPS Louga).",
    fichier:"#",
    statut:"Publié"
  }
];

const galerie=[
  {id:1,titre:"Ambiance de compétition",categorie:"competition",description:"Photo d’illustration — compétition de taekwondo (non prise à Louga).",image:"../assets/images/photos/hero.jpg",date:"Illustration",credit:"Mxtaek — CC BY-SA 4.0"},
  {id:2,titre:"Combat en tournoi",categorie:"competition",description:"Photo d’illustration — match en compétition (non prise à Louga).",image:"../assets/images/photos/combat-aau.jpg",date:"Illustration",credit:"Ken Hernandez el Guerrero — CC BY-SA 4.0"},
  {id:3,titre:"Technique et précision",categorie:"competition",description:"Photo d’illustration — action de combat (non prise à Louga).",image:"../assets/images/photos/combat-brannstam.jpg",date:"Illustration",credit:"Carlolssson — CC BY-SA 4.0"},
  {id:4,titre:"Open international",categorie:"competition",description:"Photo d’illustration — combat en open (non prise à Louga).",image:"../assets/images/photos/combat-french.jpg",date:"Illustration",credit:"Pierre-Yves Beaudouin — CC BY-SA 4.0"}
];
