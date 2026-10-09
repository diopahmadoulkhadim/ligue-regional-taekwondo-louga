const informationsLigue={nom:"Ligue Régionale de Taekwondo de Louga",region:"Louga",pays:"Sénégal",email:"À confirmer",telephone:"À confirmer",adresse:"À confirmer",president:"À confirmer",secretaireGeneral:"À confirmer",tresorier:"À confirmer"};
const statistiquesLigue={clubs:null,athletes:null,entraineurs:null,arbitres:null,activitesAnnuelles:null};

const evenements=[
{id:1,titre:"Championnat régional",type:"competition",date:"À confirmer",dateISO:null,heure:"À confirmer",lieu:"Louga",statut:"a-venir",description:"Activité régionale destinée aux clubs et pratiquants."},
{id:2,titre:"Passage de grades",type:"grade",date:"À confirmer",dateISO:null,heure:"À confirmer",lieu:"Région de Louga",statut:"a-venir",description:"Session de passage de grades."},
{id:3,titre:"Stage technique",type:"stage",date:"À confirmer",dateISO:null,heure:"À confirmer",lieu:"Louga",statut:"a-venir",description:"Stage technique destiné aux pratiquants et encadrants."},
{id:4,titre:"Formation des encadrants",type:"formation",date:"À confirmer",dateISO:null,heure:"À confirmer",lieu:"Louga",statut:"a-venir",description:"Formation destinée au perfectionnement des encadrants."}];

const clubs=[
{id:1,nom:"Chung Nam Taekwondo Louga",localite:"Louga",zone:"Louga",statut:"Actif",specialites:["Kyorugi","Poomsae"],description:"Club de taekwondo basé dans la région de Louga.",entraineur:"À confirmer",contact:"À confirmer",email:"À confirmer",logo:"../assets/images/club-placeholder.svg"},
{id:2,nom:"Club Taekwondo Kébémer",localite:"Kébémer",zone:"Kébémer",statut:"Actif",specialites:["Kyorugi","Passage de grades"],description:"Structure sportive de la zone de Kébémer.",entraineur:"À confirmer",contact:"À confirmer",email:"À confirmer",logo:"../assets/images/club-placeholder.svg"},
{id:3,nom:"Club Taekwondo Dahra",localite:"Dahra Djolof",zone:"Dahra Djolof",statut:"Actif",specialites:["Kyorugi","Poomsae"],description:"Club de pratique du taekwondo dans la zone de Dahra Djolof.",entraineur:"À confirmer",contact:"À confirmer",email:"À confirmer",logo:"../assets/images/club-placeholder.svg"}];

const athletes=[
{id:1,nom:"Athlète à confirmer",club:"Chung Nam Taekwondo Louga",sexe:"masculin",discipline:"kyorugi",categorie:"À confirmer",grade:"À confirmer",age:"À confirmer",palmares:[],photo:"../assets/images/athlete-placeholder.svg"},
{id:2,nom:"Athlète à confirmer",club:"Club Taekwondo Kébémer",sexe:"feminin",discipline:"poomsae",categorie:"À confirmer",grade:"À confirmer",age:"À confirmer",palmares:[],photo:"../assets/images/athlete-placeholder.svg"},
{id:3,nom:"Athlète à confirmer",club:"Club Taekwondo Dahra",sexe:"masculin",discipline:"kyorugi",categorie:"À confirmer",grade:"À confirmer",age:"À confirmer",photo:"../assets/images/athlete-placeholder.svg"}];

const entraineurs=[
{id:1,nom:"Entraîneur à confirmer",club:"Chung Nam Taekwondo Louga",grade:"À confirmer",specialites:["Kyorugi"],experience:"À confirmer",photo:"../assets/images/person-placeholder.svg"},
{id:2,nom:"Entraîneur à confirmer",club:"Club Taekwondo Kébémer",grade:"À confirmer",specialites:["Kyorugi","Grades"],experience:"À confirmer",photo:"../assets/images/person-placeholder.svg"}];

const arbitres=[
{id:1,nom:"Arbitre à confirmer",club:"À confirmer",niveau:"À confirmer",specialites:["Kyorugi"],experience:"À confirmer",photo:"../assets/images/person-placeholder.svg"},
{id:2,nom:"Arbitre à confirmer",club:"À confirmer",niveau:"À confirmer",specialites:["Poomsae"],experience:"À confirmer",photo:"../assets/images/person-placeholder.svg"}];

const resultats=[
{id:1,athlete:"Athlète à confirmer 1",club:"Chung Nam Taekwondo Louga",competition:"Compétition à confirmer",discipline:"kyorugi",categorie:"À confirmer",position:1,medaille:"or"},
{id:2,athlete:"Athlète à confirmer 2",club:"Club Taekwondo Kébémer",competition:"Compétition à confirmer",discipline:"poomsae",categorie:"À confirmer",position:2,medaille:"argent"},
{id:3,athlete:"Athlète à confirmer 3",club:"Club Taekwondo Dahra",competition:"Compétition à confirmer",discipline:"kyorugi",categorie:"À confirmer",position:3,medaille:"bronze"}];

const baremeClassement={or:3,argent:2,bronze:1};

const actualites=[{id:1,titre:"Actualité à confirmer",categorie:"annonce",date:"À confirmer",dateISO:null,auteur:"Ligue Régionale",resume:"Les informations officielles de la Ligue seront publiées ici.",contenu:"Cette actualité sera remplacée par une communication officielle.",image:"../assets/images/news-placeholder.svg",statut:"publie"}];

const documents=[{id:1,titre:"Document officiel à confirmer",type:"communique",date:"À confirmer",dateISO:null,description:"Document officiel qui sera publié par la Ligue.",fichier:"#",statut:"À confirmer"}];

const galerie=[{id:1,titre:"Photo à confirmer",categorie:"competition",description:"Photo officielle à publier par la Ligue.",image:"../assets/images/gallery-placeholder.svg",date:"À confirmer"}];
