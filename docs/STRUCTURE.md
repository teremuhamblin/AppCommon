###### README.md >> markdown 
# 🧨 Strucutre du projet
- AppCommon v1.0 → v3.0
### Objectif :  
> Clarifier, normaliser, séparer les responsabilités, préparer la modularité, renforcer CI/CD, améliorer la documentation, professionnaliser l’arborescence.

### 🏗️ STRUCTURE
```text
AppCommon/
│
├── src/ (Code source principal)
│   ├── core/ (Noyau de l'application)
│   │   ├── Initialisation AppCommon
│   │   ├── Configuration centralisée
│   │   └── Fonctions utilitaires
│   │
│   ├── modules/ (Modules optionnels)
│   │   └── Example de modules
│   │
│   ├── ui/ (Interface utilisateur)
│   │   ├── Style principal
│   │   ├── Composants UI réutilisables
│   │   └── Thèmes militaire, dark, light…
│   │
│   ├── assets/ (Images, icônes, fonts)
│   │
│   └── index.html (Entrée principale)
│
├── dist/ (Build généré automatiquement, auto-généré par CI)
│
├── docs/ (Documentation GitHub du dépôt)
│
├── .github/
│   ├── workflows/ (CI/CD complet)
│   │   ├── build-dist.yml
│   │   ├── codeql-analysis.yml
│   │   ├── dependency-review.yml
│   │   ├── publish.yml
│   │   ├── push-to-template.yml
│   │   ├── spellcheck.yml
│   │   ├── test.yml
│   │   └── test-windows.yml
│   │
│   ├── ISSUE_TEMPLATE.md
│   ├── GUIDELINES.md
│   ├── PULLREQUESTTEMPLATE.md
│   ├── CODEOFCONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── SUPPORT.md
│   └── dependabot.yml
│
├── package.json
├── LICENSE
└── README.md
```
