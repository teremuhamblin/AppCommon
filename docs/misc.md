`
docs/misc.md
`

---

`markdown

AppCommon v1.0 — Fichiers divers

AppCommon v1.0 — Accueil  
Documentation — Table des matières

Ce document présente les fichiers complémentaires inclus dans AppCommon v1.0.  
Ils assurent une base propre, cohérente et compatible avec les environnements modernes de développement.

---

Sommaire

- .gitignore
- .editorconfig
- robots.txt
- package.json

---

.gitignore

AppCommon v1.0 inclut un .gitignore minimaliste destiné à :

- éviter l’ajout de fichiers temporaires ou générés automatiquement  
- garder un dépôt propre et léger  
- ignorer les dossiers de build, caches, logs, etc.

Chaque environnement de développement peut nécessiter des règles supplémentaires.  
Les fichiers spécifiques à votre OS ou éditeur doivent être ignorés via un global ignore.

Exemple de configuration globale

Ajoutez ceci à votre ~/.gitconfig :

`gitignore
[core]
    excludesfile = ~/.gitignore
`

Votre fichier ~/.gitignore peut contenir :

- fichiers système (Thumbs.db, .DS_Store…)  
- fichiers d’éditeur (VSCode, JetBrains…)  
- caches globaux  

Ressources utiles

- Guide GitHub sur les ignores globaux  
- Collection complète d’exemples : https://github.com/github/gitignore

---

.editorconfig

Le fichier .editorconfig d’AppCommon v1.0 permet :

- d’assurer une cohérence de style entre différents éditeurs  
- de standardiser indentation, encodage, fin de ligne, etc.  
- d’éviter les divergences de formatage dans les contributions

AppCommon utilise une configuration simple :

- indentation 2 espaces  
- UTF‑8  
- suppression des espaces en fin de ligne  
- fin de ligne LF  

Pour que votre éditeur applique ces règles, vous devrez peut‑être installer un plugin EditorConfig.

Sécurité

Si votre serveur expose les fichiers du projet, il est recommandé de bloquer l’accès aux fichiers .editorconfig pour éviter toute fuite d’informations internes.

Plus d’informations : https://editorconfig.org/

---

robots.txt

Le fichier robots.txt d’AppCommon v1.0 sert à indiquer aux robots d’indexation ce qui peut être exploré.

Configuration par défaut :

- User-agent: * → règles valables pour tous les robots  
- Disallow: → tout le site est autorisé à l’exploration  

Modifier les règles

Pour empêcher l’indexation d’un dossier :

`
Disallow: /private/
`

Pour bloquer tout le site :

`
Disallow: /
`

Attention

robots.txt n’est pas un mécanisme de sécurité.  
Il indique seulement aux robots ce qu’ils doivent éviter.  
Les URLs listées peuvent être visibles publiquement.

Pour protéger du contenu sensible : utilisez une authentification.

Ressources

- https://www.robotstxt.org/  
- Guide Google sur robots.txt

---

package.json

Le fichier package.json d’AppCommon v1.0 définit :

- les métadonnées du projet  
- les scripts de développement  
- les dépendances nécessaires  
- la licence  
- les informations de version

Champs principaux

- name : nom du projet  
- version : version SemVer (ex : 1.0.0)  
- description : description du template  
- scripts : commandes exécutables via npm run  
- keywords : mots‑clés pour la découverte du projet  
- author : auteur du projet  
- license : AppCommon utilise The Unlicense v1.0  
- devDependencies : dépendances de développement (ESLint, Prettier, etc.)

Scripts fournis par AppCommon v1.0

- start : serveur de développement minimal  
- lint : analyse du code via ESLint  
- format : formatage automatique via Prettier  

Documentation complète

https://docs.npmjs.com/files/package.json

---

Conclusion

Ces fichiers assurent une base solide pour AppCommon v1.0 :  
propreté du dépôt, cohérence du code, compatibilité SEO, et intégration moderne dans l’écosystème JavaScript.

Ils sont volontairement minimalistes pour laisser une liberté totale dans l’évolution du projet.

`

---
