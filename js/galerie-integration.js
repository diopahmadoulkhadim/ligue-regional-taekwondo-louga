// À charger après media-taekwondo.js.
const galerieTaekwondoLibre = mediasTaekwondoLibres.map(media => ({
 id: media.id, titre: media.titre, categorie: media.categorie,
 description: 'Photo d’illustration — pas une photo officielle de Louga.',
 image: media.image, date: 'Illustration', credit: `${media.auteur} — ${media.licence}`, source: media.urlSource
}));
