import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant AppHeader
 * Affiche l'en-tête de l'application avec le titre "My Restaurant"
 * Le fond utilise la couleur #F4CE14 (jaune)
 */
export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container principal de l'en-tête
  container: {
    backgroundColor: '#F4CE14', // Couleur de fond jaune
    paddingTop: 50, // Espacement en haut pour éviter le chevauchement avec la barre de statut
    paddingBottom: 16, // Espacement en bas
  },
  // Style du titre
  title: {
    textAlign: 'center', // Centrage horizontal du texte
    fontSize: 28, // Taille de la police
    fontWeight: 'bold', // Texte en gras
    color: 'black', // Couleur du texte
  },
});