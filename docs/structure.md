###### README.md >> markdown 
# 🧨 Strucutre du projet
- AppCommon v1.0 → v1.1-ready
> Objectif :  
> Clarifier, normaliser, séparer les responsabilités, préparer la modularité, renforcer CI/CD, améliorer la documentation, professionnaliser l’arborescence.

---

### 🏗️ STRUCTURE
```text
AppCommon/
│
├── src/                         # Code source principal
│   ├── core/                    # Noyau de l'application
│   │   ├── app.js               # Initialisation AppCommon
│   │   ├── config.js            # Configuration centralisée
│   │   └── common.js            # Fonctions utilitaires
│   │
│   ├── modules/                 # Modules optionnels (v1.1-ready)
│   │   └── example-module.js
│   │
│   ├── ui/                      # Interface utilisateur
│   │   ├── ui-core.css          # Style principal
│   │   ├── components/          # Composants UI réutilisables
│   │   │   └── button.css
│   │   └── themes/              # Thèmes (military, dark, light…)
│   │       └── military.css
│   │
│   ├── assets/                  # Images, icônes, fonts
│   │   └── logo.svg
│   │
│   └── index.html               # Entrée principale
│
├── dist/                        # Build généré automatiquement
│   └── (auto-généré par CI)
│
├── docs/                        # Documentation du projet
│   ├── about-repo.md            # Documentation GitHub du dépôt
│   ├── architecture.md          # Architecture AppCommon
│   ├── modules.md               # Documentation des modules
│   ├── ci-cd.md                 # Documentation CI/CD
│   └── usage.md                 # Guide d'utilisation
│
├── .github/
│   ├── workflows/               # CI/CD complet
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
