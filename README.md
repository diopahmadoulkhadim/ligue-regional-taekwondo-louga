# Ligue Régionale de Taekwondo de Louga

Plateforme web front-end de la Ligue Régionale de Taekwondo de Louga.

## Technologies
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Bootstrap Icons

## Important
Les données marquées « À confirmer » et les résultats de démonstration doivent être remplacés uniquement par des informations officiellement validées.

## Lancer
Ouvrir `index.html` dans un navigateur ou utiliser Live Server dans VS Code.

## Structure
- `pages/` : pages internes (voir « Pages » ci-dessous)
- `css/` : styles
- `js/` : données et logique
- `assets/images/` : images (placeholders + `photos/` pour les photos d’illustration)
- `assets/documents/` : documents officiels

## Pack média (photos et événements)
- `js/media-taekwondo.js` + `js/galerie-integration.js` : photos d'illustration Wikimedia Commons (CC BY-SA 4.0), affichées dans la galerie avec leurs crédits. Ce ne sont pas des photos prises à Louga. Voir `CREDITS.md`.
- `js/louga-events.js` : passages de grades d'août 2025 (source publique, Taekwondoconneckt). Affichés dans la section « Archives » de la page Activités et dans le calendrier. À faire valider par la Ligue avant publication.
- Pour de vraies photos de Louga, utiliser uniquement des images fournies ou autorisées par la Ligue.

## Galerie
Le placeholder « Photo à confirmer » disparaît automatiquement dès qu'au moins une vraie photo est présente dans `galerie` (`js/data.js`) ou dans le pack média.

## Configuration rapide (`js/app.js`, bloc `SITE_CONFIG` en haut du fichier)
- `whatsapp` : numéro officiel au format international sans `+` ni espaces (ex. `"221771234567"`). Une fois renseigné : bouton WhatsApp sur la page Contact et dans le pied de page, et le formulaire ouvre WhatsApp avec le message déjà rédigé.
- `email` : email officiel. Utilisé par le formulaire si aucun WhatsApp n'est renseigné (ouvre la messagerie du visiteur).
- `facebook` : lien de la page Facebook (pied de page et page Contact).
- `afficherResultats` : `false` tant que les résultats/classements ne sont pas officiels (pages masquées, retirées du menu). Passer à `true` après validation, puis supprimer la ligne `<meta name="robots" content="noindex">` dans `pages/resultats.html` et `pages/classement.html`.

## Fichiers SEO
- `robots.txt` et `sitemap.xml` à la racine.

## Mise en ligne
- Favicon et icône mobile : `assets/images/favicon.svg`, `apple-touch-icon.png`.
- Aperçu de partage (WhatsApp, Facebook) : `assets/images/og-image.png`. Après mise en ligne, activer la ligne commentée `og:image` dans `index.html` avec votre vrai domaine (l'adresse de l'image doit être absolue).

## Pages (6 pages à onglets)
- `index.html` : accueil.
- `pages/ligue.html` : présentation, missions, organisation, bureau.
- `pages/activites.html` : onglets Liste (avec archives) et Calendrier.
- `pages/sportifs.html` : onglets Clubs, Athlètes, Entraîneurs, Arbitres.
- `pages/actualites.html` : onglets Actualités, Documents, Galerie.
- `pages/contact.html` : formulaire et coordonnées.
- `pages/resultats.html` : onglets Résultats et Classement (masquée tant que `afficherResultats` vaut `false`).

Liens directs vers un onglet : `sportifs.html#athletes`, `actualites.html#galerie`, `activites.html#calendrier`, etc.

Les anciennes pages (`calendrier.html`, `athletes.html`, `entraineurs.html`, `arbitres.html`, `clubs.html`, `documents.html`, `galerie.html`, `classement.html`) ne sont plus que de petites redirections vers le bon onglet. Si le site n'a jamais été publié avec ces adresses, elles peuvent être supprimées.
