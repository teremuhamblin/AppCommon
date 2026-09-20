# AppCommon v1.0 — À propos du dépôt

Ce document décrit la configuration du dépôt AppCommon v1.0 ainsi que les processus utilisés pour gérer le projet.  
AppCommon est conçu comme un template universel, léger et extensible, et son dépôt GitHub reflète cette philosophie : simplicité, efficacité, automatisation, et bonnes pratiques modernes.

---

## Configuration GitHub

Cette section présente la manière dont le dépôt AppCommon v1.0 est configuré sur GitHub.  
Le projet utilise les fonctionnalités essentielles de GitHub pour assurer une gestion propre, stable et collaborative.

### Configuration générale

- **Wiki activé** : utilisé pour stocker des notes techniques ou historiques du projet.  
- **Issues activées** : AppCommon utilise les tickets pour le suivi des bugs, idées, améliorations.  
- **Discussions activées** : espace pour échanger autour du projet, même si peu utilisé pour l’instant.

---

## Pull Requests

AppCommon v1.0 utilise un workflow simple et efficace :

- Toute modification du code passe par une **Pull Request**.  
- Une **revue obligatoire** est requise avant la fusion.  
- Des **vérifications automatiques** sont exécutées sur chaque PR pour garantir la qualité du code.  
- Les PR peuvent être marquées comme **draft** pour permettre un suivi dès le début du développement.

### Branche `main`

La branche `main` est :

- la branche par défaut  
- la seule branche protégée  
- la branche stable du projet  

Les règles de protection sont :

- PR obligatoire avec **un reviewer approuvant**  
- Deux checks obligatoires :
  - Build Node 22  
  - Build Node 24  
- Les administrateurs peuvent effectuer des **force push** en cas d’urgence (nettoyage, correction critique).

---

## GitHub Actions et vérifications sur `main`

AppCommon v1.0 utilise plusieurs workflows GitHub Actions :

- **Build Status**  
  Vérifie que le projet compile correctement (Node 22 et 24).

- **CodeQL Analysis**  
  Analyse statique du code pour détecter des failles potentielles.

- **Dependency Review**  
  Vérifie que les dépendances ajoutées ne contiennent pas de vulnérabilités connues.

- **CodeQL Security Scan**  
  Analyse approfondie des risques de sécurité.

- **Publication automatique**  
  Lorsqu’un tag est créé, AppCommon :
  - publie le package npm  
  - génère une release GitHub  
  - attache un ZIP du dossier `dist`

- **Push vers le dépôt Template AppCommon**  
  La branche `main` est automatiquement synchronisée avec le dépôt template AppCommon (si configuré).

---

## Dossier `.github`

Le dossier `.github` contient la configuration interne du projet :

### Workflows

- **build-dist.yml**  
  Build du projet (peut nécessiter une adaptation selon les protections de branche).

- **codeql-analysis.yml**  
  Analyse CodeQL avec les paramètres par défaut.

- **dependency-review.yml**  
  Vérification des dépendances ajoutées.

- **publish.yml**  
  Publication automatique lors de la création d’un tag.

- **push-to-template.yml**  
  Synchronisation automatique avec le dépôt template AppCommon.

- **spellcheck.yml**  
  Vérification orthographique des fichiers Markdown via cSpell.

- **test.yml**  
  Exécution de la suite de tests sur Ubuntu.

- **test-windows.yml**  
  Exécution de la suite de tests sur Windows.

### Fichiers de gouvernance

- **CODE_OF_CONDUCT.md**  
  Code de conduite du projet (basé sur Contributor Covenant).

- **CONTRIBUTING.md**  
  Guide de contribution AppCommon v1.0.

- **ISSUE_TEMPLATE.md**  
  Modèle pour la création d’un ticket.

- **PULL_REQUEST_TEMPLATE.md**  
  Modèle pour les Pull Requests.

- **SUPPORT.md**  
  Ressources d’aide pour les utilisateurs.

- **dependabot.yml**  
  Configuration de Dependabot (analyse mensuelle des dépendances npm).

---

## Conclusion

Ce document sera mis à jour au fur et à mesure de l’évolution du projet AppCommon v1.0.  
L’objectif est de maintenir une configuration GitHub propre, moderne, automatisée et adaptée à un template universel destiné à la création d’applications ou de sites web.
