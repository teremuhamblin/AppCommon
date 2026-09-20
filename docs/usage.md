`
docs/usage.md
`

---

`markdown

AppCommon v1.0 — Guide d’utilisation

AppCommon v1.0 — Accueil  
Documentation — Table des matières

AppCommon v1.0 est un template universel conçu pour créer rapidement un site web ou une application front‑end.  
Il fournit une structure propre, minimaliste et extensible, idéale pour démarrer n’importe quel projet.

---

Usage général

L’utilisation la plus simple d’AppCommon v1.0 consiste à créer un site statique ou une petite application front‑end.

Une fois le projet téléchargé ou cloné, le workflow typique ressemble à ceci :

1. Mettre en place la structure de base du site.  
2. Ajouter du contenu, du style et du JavaScript.  
3. Tester le site en local.  
4. Déployer le site.

AppCommon v1.0 fournit des bases intelligentes, des valeurs par défaut cohérentes, et une structure claire qui peuvent servir de fondation pour n’importe quel type de projet.

Vous pouvez :

- utiliser AppCommon tel quel  
- l’intégrer dans un framework (React, Vue, Svelte…)  
- l’utiliser avec un CMS  
- l’adapter à un environnement e‑commerce  
- le combiner avec un bundler ou un système de build  

AppCommon v1.0 est un point de départ, pas une destination.

---

Structure de base

Un projet AppCommon v1.0 ressemble à ceci :

`
AppCommon/
├── dist/
│   ├── index.html
│   ├── css/appcommon.css
│   ├── js/appcommon.js
│   └── assets/
│
├── src/
│   ├── index.html
│   ├── css/appcommon.css
│   ├── js/appcommon.js
│   └── assets/
│
├── docs/
│   ├── TOC.md
│   └── CONTRIBUTING.md
│
├── .editorconfig
├── .eslintrc.js
├── .eslintignore
├── .prettierrc
├── package.json
├── robots.txt
├── LICENSE
└── README.md
`

Voici un aperçu des principaux éléments.

---

css/

Ce dossier contient les fichiers CSS du projet.

AppCommon inclut un fichier minimaliste :

- typographie de base  
- reset léger  
- classes utilitaires  
- compatibilité navigateurs modernes  
- structure .container  

Plus d’informations : Documentation CSS.

---

docs/

Ce dossier contient la documentation AppCommon v1.0.  
Vous pouvez l’utiliser comme base pour documenter votre propre projet.

---

js/

Ce dossier contient le JavaScript du projet :

- logique principale (appcommon.js)  
- modules personnalisés  
- extensions possibles  

Plus d’informations : Documentation JavaScript.

---

404.html (optionnel)

Vous pouvez ajouter une page 404 personnalisée dans src/ si votre projet en a besoin.

---

.editorconfig

Assure une cohérence de style entre éditeurs.  
Voir : Documentation misc

---

index.html

Le squelette HTML principal du projet.

Si vous utilisez un framework ou un moteur de templates, vous pouvez intégrer ce fichier dans votre système.

Veillez à mettre à jour les chemins CSS/JS si vous modifiez la structure.

---

package.json

Décrit votre projet, ses dépendances, ses scripts et ses métadonnées.

AppCommon v1.0 inclut :

- scripts de développement (start, lint, format)  
- dépendances de développement (ESLint, Prettier…)  
- licence The Unlicense v1.0  

---

robots.txt

Permet de contrôler l’indexation du site par les moteurs de recherche.

Modifiez-le selon vos besoins.

---

Icônes

Remplacez :

- favicon.ico  
- icon.png  
- icon.svg  

par vos propres icônes.

---

Système de build AppCommon v1.0

AppCommon v1.0 utilise un système de build simple basé sur Gulp, déjà configuré pour :

- copier les fichiers  
- préfixer le CSS  
- lint du JavaScript  
- générer un ZIP d’archive  
- nettoyer les dossiers  
- préparer la version dist/

Commandes disponibles

Installer les dépendances

`
npm install
`

Lancer le serveur de développement minimal

`
npm run start
`

Lancer le build complet

`
npm run build
`

Lint du code

`
npm run lint
`

Formatage automatique

`
npm run format
`

---

Intégration avec Webpack, Vite, Parcel ou autres

AppCommon v1.0 est volontairement minimal.  
Vous pouvez ajouter un bundler si nécessaire :

- Webpack  
- Vite  
- Parcel  
- Rollup  

Il suffit d’ajouter vos fichiers de configuration dans le projet et d’adapter les scripts npm.

---

Conclusion

AppCommon v1.0 est un template universel, léger et extensible.  
Il fournit une base solide pour créer n’importe quel type de site ou application front‑end, tout en restant simple, propre et adaptable.

`

---
