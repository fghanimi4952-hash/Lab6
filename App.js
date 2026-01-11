import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

// Importation des composants
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import MenuItems from './components/MenuItems';

/**
 * Composant principal de l'application
 * Structure générale :
 * - StatusBar : barre de statut en mode clair
 * - AppHeader : en-tête fixe en haut
 * - MenuItems : liste scrollable avec SectionList
 * - AppFooter : pied de page fixe en bas
 */
export default function App() {
  return (
    <>
      {/* Barre de statut avec texte clair */}
      <StatusBar barStyle="light-content" />
      {/* Container principal contenant l'en-tête et le menu */}
      <View style={styles.container}>
        <AppHeader />
        <MenuItems />
      </View>
      {/* Container du footer (en dehors de la zone scrollable) */}
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1, // Prend tout l'espace disponible sauf le footer
    backgroundColor: '#333333', // Couleur de fond gris foncé
  },
  // Container du footer
  footerContainer: {
    backgroundColor: '#333333', // Couleur de fond gris foncé
  },
});