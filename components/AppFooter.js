import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant AppFooter
 * Affiche le pied de page de l'application avec le texte de copyright
 * Le fond utilise la couleur #EE9972 (orange)
 */
export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by My Restaurant, 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container principal du footer
  container: {
    backgroundColor: '#EE9972', // Couleur de fond orange
    paddingVertical: 10, // Espacement vertical (haut et bas)
  },
  // Style du texte du footer
  footerText: {
    textAlign: 'center', // Centrage horizontal du texte
    fontSize: 14, // Taille de la police
    fontStyle: 'italic', // Texte en italique
    color: '#333333', // Couleur du texte (gris foncé)
  },
});