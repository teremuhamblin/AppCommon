###### README.md >> markdown
# 📘 AppCommon v1.0
   - Template universel, minimaliste et extensible pour applications web modernes

AppCommon v1.0 est un template professionnel, conçu pour fournir une base propre, stable et automatisée pour tout projet web.  
Il inclut une structure simple, des bonnes pratiques modernes, un pipeline CI/CD complet, et une configuration GitHub optimisée.

---

🎯 Objectifs du projet

AppCommon vise à :

- fournir une base minimaliste mais extensible  
- garantir une qualité de code constante via CI/CD  
- offrir une structure universelle adaptable à tout type d’application  
- automatiser les tâches critiques : build, tests, sécurité, release  
- servir de template officiel pour démarrer rapidement un nouveau projet

---

📁 Structure du dépôt

```text
AppCommon/
│
├── src/                 # Code source principal
├── dist/                # Build généré automatiquement
├── docs/                # Documentation du projet
│   └── about-repo.md    # Documentation GitHub du dépôt
│
├── .github/
│   ├── workflows/       # CI/CD complet
│   │   ├── build-dist.yml
│   │   ├── codeql-analysis.yml
│   │   ├── dependency-review.yml
│   │   ├── publish.yml
│   │   ├── push-to-template.yml
│   │   ├── spellcheck.yml
│   │   ├── test.yml
│   │   └── test-windows.yml
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

---

⚙️ CI/CD — Workflows GitHub Actions

AppCommon v1.0 inclut un pipeline complet :

🔨 Build & Tests
- Build Node.js 22 et 24  
- Tests sur Ubuntu et Windows  
- Génération automatique du dossier dist/  
- Upload de l’artefact dist.zip

🔐 Sécurité
- Analyse CodeQL  
- Dependency Review  
- Scan de vulnérabilités potentielles

🚀 Release automatique
Lorsqu’un tag est créé :

- build du projet  
- publication du package npm  
- création d’une release GitHub  
- ajout automatique de dist.zip

🔄 Synchronisation Template
La branche main est automatiquement synchronisée avec le dépôt AppCommon Template.

---

🔒 Branche main

La branche main est :

- protégée  
- stable  
- revue obligatoire  
- build Node 22/24 obligatoire  
- force push autorisé pour les administrateurs en cas d’urgence

---

📚 Documentation

La documentation du dépôt est disponible dans :

`
docs/about-repo.md
`

Elle décrit :

- la configuration GitHub  
- les workflows  
- les règles de contribution  
- la philosophie AppCommon  
- les processus de release  
- la synchronisation template

---

🚀 Démarrer un projet avec AppCommon

Installation

`
git clone https://github.com/<user>/AppCommon
cd AppCommon
npm install
`

Build

`
npm run build
`

Lancer le projet

`
npm start
`

---

🤝 Contribution

Les contributions sont les bienvenues.  
Veuillez lire :

- CONTRIBUTING.md  
- CODEOFCONDUCT.md  
- ISSUE_TEMPLATE.md  
- PULLREQUESTTEMPLATE.md

---

📄 Licence

AppCommon v1.0 est publié sous The Unlicense v1.0.  
Le projet est totalement libre, ouvert, et réutilisable sans restriction.

---

🧭 Statut du projet

AppCommon v1.0 est stable, fonctionnel, et prêt à être utilisé comme template pour tout nouveau projet web.

---
