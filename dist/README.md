###### README.md >> markdown 
# 📘 AppCommon
- Dossier dist/
### Build officiel AppCommon v1.1
Ce dossier contient la version compilée, optimisée et prête à déployer de AppCommon v1.1.  
- Il est généré automatiquement par le système de build Gulp et les workflows GitHub Actions.

---

### 🏗️ Contenu du dossier
Le dossier dist/ regroupe :
```text
dist/
│
├── index.html          # Entrée principale compilée
│
├── core/               # Noyau AppCommon v1.1 (JS compilé)
├── modules/            # Modules AppCommon v1.1
├── ui/                 # Interface utilisateur compilée
│   ├── components/     # Composants UI
│   └── themes/         # Thèmes (dont military.css)
│
├── assets/             # Images, icônes, ressources statiques
│
└── LICENSE             # Licence du projet
```

---

### ⚙️ Génération du build
Le dossier dist/ est généré via :
- Local
```bash
npm run build
```

CI/CD GitHub Actions
- Workflow :  
```text
.github/workflows/build-dist.yml
```
Pipeline exécuté automatiquement :
- Lint du code (eslint)
- Build Gulp (gulp build)
- Copie des fichiers
- Préfixage CSS
- Génération du dossier dist/
- Upload de l’artefact dist/

---

### 📦 Archive automatique
Une archive ZIP est générée à chaque build :
```app
archive/appcommon_v1.1.0.zip
```
Elle contient exactement le contenu du dossier dist/.

---

### 🚀 Déploiement
Le contenu de dist/ peut être déployé directement sur :
- GitHub Pages  
- Netlify  
- Vercel  
- Serveur statique  
- CDN  

Aucune dépendance serveur n’est requise.

---

### 🔒 Intégrité & stabilité
Le dossier dist/ est :
- propre  
- sans fichiers inutiles  
- sans sources non compilées  
- sans dépendances Node  
- optimisé pour la production  

Il représente la version officielle de AppCommon v1.1.

---

### 🧭 Notes
- Ne modifiez jamais les fichiers dans dist/ manuellement.  
- Toute modification doit être faite dans src/ puis reconstruite via npm run build.  
- Le dossier est régénéré à chaque release.

---
