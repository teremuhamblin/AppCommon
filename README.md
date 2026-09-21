###### README.md >> markdown 
```text
README.md
```
ou `OPTIONNEL` dans :
```text
docs/README.md
```

# 📘 AppCommon v5.0
- Version Stable & Finale :
Template modulaire professionnel, optimisé, industrialisé, équipé d’une CLI et d’un système de génération de modules.
- AppCommon v5.0 représente la version la plus aboutie du projet : Architecture propre, CI/CD complet, documentation professionnelle, build optimisé, outils de génération, et structure prête pour la production.

### 🚀 Nouveautés v5.0
- Version finale professionnelle
- CLI AppCommon v1.0 intégrée (appcommon)
- Générateur de modules (appcommon module <nom>)
- Générateur de projets (appcommon project <nom>)
- Build Gulp v5.0 optimisé
- Structure src/ stabilisée et modulaire
- Documentation complète (ROADMAP, CHANGELOG, STRUCTURE, USAGE)
- CI/CD GitHub Actions complet (lint, format, build, tests, artefacts)
- MIR v5.0 (Milestone / Issue / Release)
- Version prête pour production

---

### 📁 Structure du projet
- Voir docs/STRUCTURE.md
### ⚙️ Installation
```text
npm install
```
### 🛠️ Commandes principales
- Développement
```text
npm run dev
```
- Build production
```text
npm run build
```
- Nettoyage
```text
npm run clean
```
- Lint
```text
npm run lint
```
- Formatage
```text
npm run format
```
- Tests
```text
npm test
```
### 🧰 CLI AppCommon v1.0
[![CodeQL Analysis](https://github.com/teremuhamblin/AppCommon/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/teremuhamblin/AppCommon/actions/workflows/codeql-analysis.yml)

La CLI intégrée permet de générer automatiquement des modules ou des projets.
- Générer un module
```text
appcommon module <nom>
```
- Générer un projet
```text
appcommon project <nom>
```

### 🧩 Générateur de modules
- Crée automatiquement :
```text
src/modules/<nom>/<nom>.js
```

### 🧩 Générateur de projets
Prépare une structure AppCommon complète (v5.0).

### 🧠 Noyau AppCommon v5.0
**src/core/app.js** :
```md
- Initialisation propre
- Version intégrée
- Point d’entrée stable
```

### 🧪 CI/CD GitHub Actions
Pipeline complet :
- Lint
- Format
- Build
- Tests
- Artefacts dist/
- Release automatique (optionnel)

>Fichier : .github/workflows/build.yml

### 📘 Documentation v5.0
Disponible dans docs/ :
- README.md — documentation générale
- ROADMAP.md — progression v1.0 → v5.0
- CHANGELOG.md — historique complet
- STRUCTURE.md — structure interne
- USAGE.md — guide d’utilisation

### 📦 MIR-Action v5.0
Dans **.github/MIR-Action/** :
- Milestone v5.0
- Issue v5.0
- Release v5.0

---

### 🔒 Licence
Voir **AppCommon/LICENSE**

### 🛡️ Statut
AppCommon v5.0 est la version stable et finale.
