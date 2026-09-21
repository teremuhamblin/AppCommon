###### README.md >> markdown 
# 📘 AppCommon
### Dossier scr/
- Scripts internes & utilitaires
- AppCommon v1.1
Ce dossier contient les scripts internes utilisés par AppCommon v1.1 pour automatiser, tester ou assister certaines opérations du projet.  
Il regroupe des fichiers qui ne font pas partie du code source principal (src/), mais qui sont nécessaires au fonctionnement global du template.

---

### 🎯 Rôle du dossier
Le dossier scr/ sert à :
- stocker des scripts utilitaires  
- automatiser certaines tâches internes  
- fournir des outils de maintenance  
- préparer des routines pour le build ou la documentation  
- isoler les scripts du code source principal  

---

🗂️ Contenu typique
```text
scr/
├── build-tools/       # Scripts liés au build
├── maintenance/       # Scripts internes de maintenance
├── utils/             # Fonctions utilitaires
└── experimental/      # Scripts de test ou prototypes
```

> La structure exacte dépend de tes besoins AppCommon v1.1.

---

### ⚙️ Utilisation
Les scripts du dossier scr/ peuvent être utilisés :
- manuellement via node scr/...  
- automatiquement via des workflows GitHub Actions  
- via des commandes npm personnalisées  
- via ton système de build Gulp v1.1  

---

### 📌 Bonnes pratiques
- Ne jamais placer de code source applicatif ici  
- Documenter chaque script si nécessaire  
- Garder les scripts simples, isolés, modulaires  
- Ne jamais importer scr/ dans src/  
- Utiliser ES Modules (type: "module")  

---

### 🧭 Notes
- Le dossier scr/ n’est pas copié dans dist/  
- Il est ignoré par ESLint si tu le souhaites (via .eslintignore)  
- Il peut contenir des outils internes non destinés à la production  

---
