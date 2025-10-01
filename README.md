# Gestionnaire d'habitude

![React](https://img.shields.io/badge/React-19.1.1-61DAFB)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF)
![npm](https://img.shields.io/badge/npm-v11.6.0-blue)

## 📝 Description

Cette application web permet d'enregistrer des habitudes à suivre quotidiennement, noter à quelle heure et quel jour elles ont été réalisées et d'en garder un suivi en ligne.

## 🛠️ Stack technique

- [React](https://react.dev/) (créé avec [Vite](https://vitejs.dev/))
- [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/) pour les appels API

## 📂 Structure du projet

```bash
front/
├── src/
│   ├── components/   # Composants réutilisables
│   ├── pages/        # Pages de l'application
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## ⚙️ Installation

### Prérequis

- npm

### 1. Cloner le repository

```bash
git clone --recurse-submodules https://github.com/AntooinePetit/habits
cd habits/front
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173/`

## 📊 Fonctionnalités principales

- Page d'accueil :
  - Ajout d'habitude
  - Suivi de toutes les entrées de toutes les habitudes
  - Suppression d'entrée passée
  - Suppression d'habitude
- Page de suivi du jour :
  - Ajout d'entrée
  - Suppression d'entrée du jour

## 🎨 Composants développés

- `addHabit` : Section d'ajout d'habitude
- `habit` : Affichage d'une habitude et de ses entrées
- `todayHabit` : Affichage d'une habitude et de l'entrée du jour
- `Habits` : Affichage des habitudes globales
- `Today` : Affichage des habitudes pour la journée

## 🚀 Déploiement

### Faire un fork du projet

- Se rendre sur le [repository](https://github.com/AntooinePetit/habits-front)
- Cliquer sur "Fork"
- Nommer le fork
- Cliquer sur "Create fork"
- Après [déploiement du back](https://github.com/AntooinePetit/habits-back?tab=readme-ov-file), remplacer `http://localhost:3000` par le lien d'accès à votre back dans les fetch présents ici :
  - `src/components/habit.jsx` : lignes 10, 27
  - `src/components/todayHabit.jsx` : lignes 9, 27, 41
  - `src/pages/Habits.jsx` : lignes 17, 34, 40, 52
  - `src/pages/Today.jsx` : ligne 20
- Push le projet avec les liens **Fetch** à jour

### Déploiement sur Vercel

- Se rendre sur [Vercel](https://vercel.com/)
- Créer un compte/Se connecter avec GitHub
- Cliquer sur "Add New" > "Project"
- Sélectionner le repository correspondant
- Nommer le projet si besoin
- Cliquer sur "Deploy"
- Cliquer sur "Continue to Dashboard"
- Pour accéder à l'application, cliquer sur "Visit"
