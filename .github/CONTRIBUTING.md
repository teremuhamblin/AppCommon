###### README.md >> markdown
# ✅ AppCommon
- Contribuer à `AppCommon v1.1`
```md
Merci de votre intérêt pour AppCommon.  
Ce projet est un template minimaliste, modulaire et extensible destiné à servir de base professionnelle pour des applications web modernes.
```

---

### 📦 Structure du projet
- AppCommon v1.1 repose sur une architecture claire :
   - src/core/ — noyau de l'application  
   - src/modules/ — modules optionnels (système extensible)  
   - src/ui/ — interface utilisateur, composants, thèmes  
   - src/assets/ — ressources statiques  
   - dist/ — build généré automatiquement  
   - docs/ — documentation complète  
   - .github/workflows/ — CI/CD professionnel
- Veuillez respecter cette structure lors de vos contributions.

---

### 🔧 Prérequis
- Node.js 22 ou 24  
- npm ≥ 10  
- Git  
- Connaissance de JavaScript moderne (ES modules)

---

### 🛠️ Processus de contribution
1. Fork du dépôt
2. Créer une branche dédiée
   ```git
   git checkout -b feature/nom-de-la-feature
   ```
3. Développer la fonctionnalité
   - respecter la structure core/modules/ui
   - privilégier le code simple, lisible, modulaire
4. Tests
   ```text
   npm test
   ```
5. Build
   ```text
   npm run build
   ```
6. Créer une Pull Request
   - description claire
   - motivation
   - impact sur la structure
   - fichiers modifiés

---

### 🔍 Qualité du code
- Les contributions doivent respecter :
   - modularité AppCommon v1.1  
   - absence de dépendances inutiles  
   - compatibilité Node 22/24  
   - absence de code mort  
   - documentation minimale dans docs/modules.md si module ajouté

---

### 🔐 Sécurité
- Toute contribution doit passer :
   - CodeQL  
   - Dependency Review  
   - Tests automatiques  
   - Build Node 22/24

---

### 🤝 Merci
Votre contribution aide AppCommon à rester un template professionnel, stable et extensible.

---
