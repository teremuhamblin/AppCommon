# 📘 GitHub Guidelines — AppCommon

## Objectif
Ce document définit les règles d’organisation, de contribution et de gestion du dépôt AppCommon.

## Structure GitHub
- `.github/workflows/` : CI/CD
- `.github/MIR_V*` : Milestones, Issues, Releases regroupés
- `.github/GUIDELINES.md` : règles du dépôt

## Règles de contribution
- Commits clairs et courts
- Pas de code dans `dist/`
- Toute modification passe par `src/`
- Lint obligatoire avant push
- Format obligatoire avant push

## Issues
- Une issue = un problème
- Description simple
- Cases à cocher pour les tâches

## Milestones
- Une milestone = une version
- Objectifs clairs
- Cases à cocher

## Releases
- Une release = une version stable
- Notes courtes
- Archive automatique via CI/CD

## Branches
- `main` : stable
- `dev` : développement
- `feature/*` : nouvelles fonctionnalités

## Pull Requests
- Description courte
- Lint + Build doivent passer
- Review obligatoire
