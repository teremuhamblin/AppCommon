`
docs/html.md
`

---

`markdown

AppCommon v1.0 — Le HTML

AppCommon v1.0 — Accueil  
Documentation — Table des matières

AppCommon v1.0 fournit une structure HTML simple, propre et extensible.  
Elle sert de base pour créer n’importe quel type de site ou application front‑end.

Par défaut, AppCommon inclut :

- index.html — squelette HTML principal  
- 404.html (optionnel) — page d’erreur personnalisée  

---

index.html

Le fichier index.html est le point d’entrée de votre site ou application.  
Il contient une structure minimale, pensée pour être lisible, compatible et facilement extensible.

---

Attribut lang

Il est recommandé de définir la langue du document :

`html
<html lang="fr">
`

Cela améliore :

- l’accessibilité  
- le SEO  
- le comportement des lecteurs d’écran  

---

Ordre des balises <title> et <meta>

La balise charset doit apparaître dans les 1024 premiers octets du document :

`html
<meta charset="utf-8">
`

Elle doit être placée le plus tôt possible dans le <head>.

---

Meta Description

La balise description fournit un résumé de la page, souvent utilisé dans les résultats de recherche :

`html
<meta name="description" content="Description de votre site ou application.">
`

Conseils pour une bonne description :

- courte  
- précise  
- informative  
- unique pour chaque page  

---

Mobile Viewport

AppCommon v1.0 utilise une configuration viewport simple et efficace :

`html
<meta name="viewport" content="width=device-width, initial-scale=1">
`

Elle assure :

- une mise en page responsive  
- un rendu correct sur tous les appareils  
- une base compatible avec les media queries  

Pour les écrans bord‑à‑bord (iPhone X/XS/XR), vous pouvez ajouter :

`html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
`

---

Métadonnées Open Graph

Les métadonnées Open Graph permettent d’améliorer l’apparence de votre site lorsqu’il est partagé sur :

- Facebook  
- X (Twitter)  
- LinkedIn  
- Discord  
- etc.

Exemple minimal :

`html
<meta property="og:title" content="AppCommon v1.0">
<meta property="og:type" content="website">
<meta property="og:url" content="https://votre-site.com/">
<meta property="og:image" content="https://votre-site.com/icon.png">
<meta property="og:image:alt" content="Icône du site">
`

Vous pouvez ajouter :

- og:description  
- og:locale  
- og:site_name  
- og:image:width / og:image:height  

---

Web App Manifest

AppCommon v1.0 inclut un fichier site.webmanifest minimal.  
Il permet :

- d’ajouter votre site à l’écran d’accueil d’un mobile  
- de définir l’apparence de l’application  
- de contrôler le mode d’affichage (fullscreen, standalone, minimal-ui)

Lien dans le HTML :

`html
<link rel="manifest" href="site.webmanifest">
`

Vous pouvez y définir :

- nom de l’application  
- icônes  
- couleurs  
- orientation  
- comportement au lancement  

---

Favicons et Touch Icons

Placez vos icônes dans le dossier racine :

- favicon.ico  
- icon.png  
- icon.svg  

Les navigateurs détectent automatiquement favicon.ico.

Pour les appareils Apple :

`html
<link rel="apple-touch-icon" href="icon.png">
`

Vous pouvez fournir plusieurs tailles selon les besoins.

---

Zone de contenu

La zone centrale du template AppCommon est volontairement vide :

`html
<body>
    <h1>AppCommon v1.0</h1>
    <p>Votre contenu ici.</p>
</body>
`

Cela permet :

- de créer un site statique  
- de développer une application front‑end  
- d’intégrer un framework (React, Vue, Svelte…)  
- d’utiliser un moteur de templates  

AppCommon v1.0 est un point de départ universel, adaptable à tous les usages.

---

Conclusion

Le HTML d’AppCommon v1.0 est minimal, propre et extensible.  
Il fournit une base solide pour créer n’importe quel type de site ou application, tout en respectant les bonnes pratiques modernes (SEO, accessibilité, compatibilité mobile).

`

---
