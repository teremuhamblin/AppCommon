###### CONTRIBUTING.md >> markdown 
# Contribuer
- à AppCommon v1.0

>Contribution (src/ & app.js)

```md
Ce document explique rapidement comment contribuer au code source AppCommon, en particulier au `dossier src/` et au fichier `src/core/app.js`
```

---

### 📁 Structure concernée
```text
src/
├── core/
│   └── app.js
├── modules/
├── ui/
└── assets/
```

---

### 🛠️ Règles de contribution
- Toute modification doit être faite dans `src/`, jamais dans `dist/`.
- Le fichier `src/core/app.js` doit rester simple, lisible, et minimal.
- Les ajouts dans app.js doivent être :
  - courts  
  - modulaires  
  - sans dépendances inutiles  
- Les fonctionnalités complexes doivent être déplacées dans :
  - `src/modules/` 
  - ou `src/core/` (si c’est du noyau)

---

✔ Avant de proposer une modification :
- [x] Vérifier que le code est propre  
- [x] Vérifier que le code respecte la structure AppCommon  
- [x] Lancer le lint : npm run lint  
- [x] Lancer le build : npm run build  

---

### 📦 Pull Requests
- PR courte  
- Description simple  
- Pas de fichiers modifiés dans dist/  
- app.js doit rester minimal et stable  

---

### 📌 Notes
- Le dossier src/ est le cœur du projet.  
- app.js initialise AppCommon : il ne doit pas contenir de logique lourde.  
- Toute nouvelle fonctionnalité doit être isolée dans un module dédié.

---
