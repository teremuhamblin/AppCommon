`markdown

AppCommon v1.0 — Documentation CSS

AppCommon v1.0 — Page d’accueil  
Documentation — Table des matières

Le CSS d’AppCommon

Le système CSS d’AppCommon v1.0 est conçu pour être :

- minimaliste  
- lisible  
- compatible navigateurs modernes  
- facilement extensible  
- adapté à tout type de projet (site, application, prototype)

Le fichier principal est :

- appcommon.css

---

appcommon.css

Le fichier appcommon.css fournit une base solide pour démarrer un projet sans imposer de framework ou de structure lourde.

Objectifs des styles AppCommon

Les styles intégrés :

- définissent une typographie simple et lisible  
- assurent une mise en page cohérente dès le départ  
- corrigent certains comportements par défaut des navigateurs  
- harmonisent l’affichage des éléments HTML courants  
- fournissent une base neutre pour construire votre propre design  
- garantissent une compatibilité maximale entre navigateurs modernes  

Contenu du fichier

Le fichier inclut notamment :

- un reset léger  
- une base typographique  
- une structure de conteneur (.container)  
- des ajustements pour les éléments multimédias (img, video)  
- des classes utilitaires minimalistes  

Emplacement

Le fichier se trouve dans :

`
src/css/appcommon.css
`

et est copié automatiquement dans :

`
dist/css/appcommon.css
`

lors du processus de build.

---

Extension du CSS

AppCommon v1.0 encourage l’extension du CSS selon vos besoins :

- ajouter vos propres modules CSS  
- intégrer un framework (Bootstrap, Tailwind, etc.)  
- utiliser SCSS/SASS si nécessaire  
- créer un thème personnalisé pour votre application  

Le fichier appcommon.css est volontairement minimal pour vous laisser une liberté totale.

---

Autoprefixer

Lors du build, AppCommon applique automatiquement Autoprefixer afin d’assurer une compatibilité optimale avec les navigateurs modernes.

Le header suivant est ajouté :

`
/! AppCommon v1.0 | The Unlicense /
`

---

Mise à jour

Pour modifier ou étendre le CSS :

- éditez src/css/appcommon.css
- lancez la commande de build
- le fichier sera automatiquement mis à jour dans dist/css/

---

Conclusion

Le CSS d’AppCommon v1.0 fournit une base propre, stable et extensible pour tout projet web ou application front‑end.  
Il est conçu pour être simple, efficace, et compatible avec les workflows modernes.

`

---
