`
docs/js.md
`

---

`markdown

AppCommon v1.0 — Le JavaScript

AppCommon v1.0 — Accueil  
Documentation — Table des matières

Ce document présente le JavaScript fourni par AppCommon v1.0.  
Le projet inclut une base simple, claire et extensible pour démarrer n’importe quelle application front‑end.

---

appcommon.js

Le fichier appcommon.js est le point d’entrée JavaScript de votre projet.

Il sert à :

- ajouter la logique de votre site ou application  
- initialiser vos modules  
- gérer les interactions utilisateur  
- structurer votre code selon vos besoins  

AppCommon v1.0 n’impose aucun framework, aucune architecture, et aucune dépendance.  
Vous pouvez :

- utiliser ce fichier tel quel  
- le remplacer par un système modulaire  
- intégrer un bundler (Webpack, Vite, Parcel…)  
- utiliser un framework (React, Vue, Svelte…)  
- ajouter vos propres modules JS  

AppCommon est un point de départ, pas une contrainte.

---

vendor/

Le dossier vendor/ peut être utilisé pour stocker du code tiers :

- bibliothèques JavaScript  
- plugins  
- scripts externes  
- polyfills  
- utilitaires non modifiés  

Ce dossier est optionnel.  
Si vous utilisez un bundler, vous pouvez ignorer vendor/ et gérer vos dépendances via npm.

---

Structure recommandée

Si vous souhaitez organiser votre JavaScript de manière plus avancée, AppCommon v1.0 recommande une structure simple :

`
src/js/
├── appcommon.js        # Point d’entrée
├── modules/            # Modules JS personnalisés
│   ├── ui.js
│   ├── api.js
│   └── utils.js
└── vendor/             # Bibliothèques tierces
`

Cette structure reste totalement facultative.

---

Intégration avec le système de build

Le système Gulp d’AppCommon v1.0 :

- copie automatiquement appcommon.js dans dist/js/  
- applique ESLint via la tâche lint:js  
- permet d’ajouter facilement des étapes supplémentaires (minification, bundling, etc.)

---

Linting et qualité du code

AppCommon v1.0 inclut :

- .eslintrc.js  
- .eslintignore  
- Prettier  
- EditorConfig  

Ces outils assurent :

- un style de code cohérent  
- une base propre pour collaborer  
- une qualité minimale garantie  

---

Conclusion

Le JavaScript d’AppCommon v1.0 est volontairement minimal.  
Il vous offre une base solide pour construire n’importe quel type d’application front‑end, tout en vous laissant une liberté totale dans l’organisation, les outils et les frameworks.

`

---
