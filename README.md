# Lab 6 : Afficher une grande liste avec SectionList

Ce projet React Native (Expo) affiche un menu de restaurant organisé en sections à l'aide du composant `SectionList`.

## Objectifs pédagogiques

À la fin de ce TP, l'étudiant sera capable de :
- Structurer des données en sections pour SectionList
- Utiliser les props principales de SectionList : `sections`, `renderItem`, `renderSectionHeader`, `keyExtractor`
- Afficher, pour chaque élément, nom + prix sur une ligne
- Ajouter un style cohérent pour obtenir un rendu proche de la maquette

## Structure du projet

```
my-restaurant-sectionlist/
├── components/
│   ├── AppHeader.js      # En-tête de l'application
│   ├── AppFooter.js      # Pied de page de l'application
│   └── MenuItems.js      # Liste du menu avec SectionList
├── App.js                # Composant principal
├── package.json
└── README.md
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer l'application :
```bash
npx expo start
```

3. Ouvrir l'application :
   - Appuyer sur `i` pour iOS (nécessite un Mac avec Xcode)
   - Appuyer sur `a` pour Android (nécessite un émulateur Android)
   - Scanner le QR code avec l'app Expo Go sur votre téléphone

## Composants

### AppHeader
Affiche le titre "My Restaurant" avec un fond jaune (#F4CE14).

### AppFooter
Affiche le texte de copyright avec un fond orange (#EE9972).

### MenuItems
Composant principal utilisant `SectionList` pour afficher le menu organisé en 4 sections :
- **Appetizers** (Entrées)
- **Main Dishes** (Plats principaux)
- **Sides** (Accompagnements)
- **Desserts**

Chaque élément affiche le nom du plat et son prix sur une ligne.

## Fonctionnalités

- ✅ Affichage d'une liste organisée par sections
- ✅ En-têtes de section avec style personnalisé
- ✅ Séparateurs entre les éléments
- ✅ Footer intégré dans la liste scrollable
- ✅ Styles cohérents avec la maquette (fond sombre, texte clair)

## Technologies utilisées

- React Native
- Expo
- SectionList (composant natif React Native)

## Aller plus loin

Quelques idées pour améliorer l'application :
- Ajouter une propriété `id` à chaque plat et l'utiliser dans `keyExtractor`
- Mettre en gras les plats au-dessus d'un certain prix
- Ajouter un bouton "Promo" dans le header qui filtre les plats en dessous d'un prix donné
- Internationaliser les prix (€, DH, etc.)
- Ajouter des images pour chaque plat
- Implémenter un système de recherche