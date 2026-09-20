`
docs/extend.md
`

---

`markdown

AppCommon v1.0 — Extensions et Personnalisation

AppCommon v1.0 — Accueil  
Documentation — Table des matières

AppCommon v1.0 est un template universel conçu pour être simple, léger, et entièrement extensible.  
Ce document explique comment étendre le projet, ajouter des fonctionnalités, intégrer des outils modernes, ou adapter AppCommon à des environnements plus complexes.

---

Pourquoi étendre AppCommon ?

AppCommon v1.0 fournit une base minimaliste :

- HTML propre  
- CSS léger  
- JavaScript simple  
- structure claire  
- outils de développement essentiels (ESLint, Prettier, Gulp)

Cette base est volontairement réduite pour vous laisser une liberté totale.  
Vous pouvez transformer AppCommon en :

- site statique  
- application front‑end complète  
- prototype rapide  
- base pour un framework moderne  
- système modulaire personnalisé  
- environnement professionnel

---

Extensions possibles

1. Ajouter un framework front‑end

AppCommon peut être étendu avec n’importe quel framework :

- React
- Vue
- Svelte
- Angular
- SolidJS
- Astro

Il suffit d’ajouter les dépendances nécessaires et d’adapter la structure :

`
src/
├── index.html
├── css/
├── js/
│   ├── appcommon.js
│   └── framework/   ← vos composants ou modules
`

---

2. Ajouter un bundler moderne

AppCommon fonctionne parfaitement avec :

- Webpack
- Vite
- Parcel
- Rollup

Exemple d’intégration Vite

1. Installer Vite :

`
npm install vite --save-dev
`

2. Ajouter un script :

`json
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
`

3. Déplacer vos fichiers dans src/ selon la structure Vite.

---

3. Ajouter un préprocesseur CSS

AppCommon peut être étendu avec :

- SASS / SCSS
- LESS
- Stylus
- PostCSS avancé

Exemple SCSS :

`
src/css/
├── appcommon.scss
├── variables.scss
└── components/
`

Puis adapter Gulp ou Vite pour compiler.

---

4. Ajouter un système de modules JavaScript

AppCommon encourage une structure modulaire :

`
src/js/
├── appcommon.js
├── modules/
│   ├── ui.js
│   ├── api.js
│   └── utils.js
└── vendor/
`

Vous pouvez :

- utiliser ES Modules  
- ajouter un gestionnaire d’état  
- intégrer TypeScript  

---

5. Ajouter des icônes personnalisées

Remplacez :

- favicon.ico
- icon.png
- icon.svg

Vous pouvez ajouter plusieurs tailles pour les appareils Apple :

`html
<link rel="apple-touch-icon" sizes="180x180" href="icon-180.png">
<link rel="apple-touch-icon" sizes="152x152" href="icon-152.png">
`

---

6. Étendre le Web App Manifest

Le fichier site.webmanifest peut être enrichi :

`json
{
  "name": "AppCommon v1.0",
  "short_name": "AppCommon",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#222222",
  "icons": [
    {
      "src": "icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
`

Vous pouvez ajouter :

- plusieurs icônes  
- orientation  
- préférences d’affichage  
- comportement offline  

---

7. Ajouter des pages supplémentaires

AppCommon est conçu pour être étendu facilement :

`
src/
├── index.html
├── about.html
├── contact.html
└── dashboard.html
`

Chaque page peut réutiliser :

- le même CSS  
- le même JS  
- les mêmes modules  

---

8. Ajouter un système de build avancé

Le Gulpfile fourni peut être étendu pour :

- minifier CSS/JS  
- optimiser les images  
- générer des bundles  
- créer des archives  
- déployer automatiquement  

Exemples de tâches possibles :

- gulp minify:css
- gulp minify:js
- gulp optimize:images
- gulp deploy

---

9. Ajouter un serveur de développement

Vous pouvez utiliser :

- Gulp + BrowserSync  
- Vite Dev Server  
- Webpack Dev Server  
- un serveur Node minimal

Exemple BrowserSync :

`js
browserSync.init({
  server: 'dist'
});
`

---

Philosophie AppCommon

AppCommon v1.0 est conçu pour être :

- minimal  
- modulaire  
- extensible  
- non‑intrusif  
- compatible avec tout  

Vous pouvez :

- ajouter  
- remplacer  
- supprimer  
- réorganiser  
- reconstruire  

AppCommon est un point de départ, pas une destination.

---

Conclusion

Ce document présente les principales manières d’étendre AppCommon v1.0.  
Que vous construisiez un site simple ou une application complexe, AppCommon vous offre une base solide, propre et adaptable à tous les environnements modernes.

`

---
