import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

/**
 * Données du menu organisées par sections
 * Chaque section contient un titre et un tableau de données (data)
 * Chaque élément de data est un objet avec name et price
 */
const menuItemsToDisplay = [
  {
    title: 'Appetizers', // Titre de la section Entrées
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes', // Titre de la section Plats principaux
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides', // Titre de la section Accompagnements
    data: [
      { name: 'Fries', price: '$3.00' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts', // Titre de la section Desserts
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

/**
 * Composant Item
 * Affiche une ligne du menu avec le nom du plat et son prix
 * @param {string} name - Le nom du plat
 * @param {string} price - Le prix du plat
 */
const Item = ({ name, price }) => (
  <View style={styles.itemRow}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

/**
 * Composant Separator
 * Affiche une ligne de séparation entre les éléments du menu
 */
const Separator = () => <View style={styles.separator} />;

/**
 * Composant ListFooter
 * Affiche le texte de copyright en bas de la liste (dans la zone scrollable)
 */
const ListFooter = () => (
  <Text style={styles.listFooterText}>
    All rights reserved by My Restaurant, 2025
  </Text>
);

/**
 * Composant principal MenuItems
 * Utilise SectionList pour afficher le menu organisé par sections
 */
export default function MenuItems() {
  /**
   * Fonction renderItem
   * Appelée pour chaque élément de chaque section
   * Reçoit un objet { item } contenant les données de l'élément (name, price)
   * Retourne le composant Item avec les props name et price
   */
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} />
  );

  /**
   * Fonction renderSectionHeader
   * Appelée pour chaque en-tête de section
   * Reçoit un objet { section } contenant les données de la section (title, data)
   * Retourne un Text avec le titre de la section
   */
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay} // Tableau de sections à afficher
        keyExtractor={(item, index) => item.name + index} // Génère une clé unique pour chaque élément
        renderItem={renderItem} // Fonction pour rendre chaque élément
        renderSectionHeader={renderSectionHeader} // Fonction pour rendre l'en-tête de section
        ItemSeparatorComponent={Separator} // Composant de séparation entre les éléments
        ListFooterComponent={ListFooter} // Composant affiché en bas de la liste
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Container principal de la liste
  container: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: '#333333', // Couleur de fond gris foncé
  },
  // Style de l'en-tête de section
  sectionHeader: {
    backgroundColor: '#F4CE14', // Couleur de fond jaune (identique à l'en-tête)
    color: 'black', // Couleur du texte
    fontSize: 22, // Taille de la police
    fontWeight: 'bold', // Texte en gras
    textAlign: 'center', // Centrage horizontal
    paddingVertical: 8, // Espacement vertical
  },
  // Style de la ligne d'un élément (nom + prix)
  itemRow: {
    flexDirection: 'row', // Disposition en ligne (horizontal)
    justifyContent: 'space-between', // Espacement entre le nom et le prix
    paddingHorizontal: 24, // Espacement horizontal
    paddingVertical: 12, // Espacement vertical
    backgroundColor: '#333333', // Couleur de fond gris foncé
  },
  // Style du texte du nom du plat
  itemText: {
    color: '#EDEFEE', // Couleur du texte clair
    fontSize: 18, // Taille de la police
  },
  // Style du texte du prix
  itemPrice: {
    color: '#EDEFEE', // Couleur du texte clair
    fontSize: 18, // Taille de la police
  },
  // Style du séparateur entre les éléments
  separator: {
    borderBottomWidth: 1, // Épaisseur de la bordure en bas
    borderColor: '#EDEFEE', // Couleur de la bordure
  },
  // Style du texte du footer de la liste
  listFooterText: {
    paddingVertical: 10, // Espacement vertical
    textAlign: 'center', // Centrage horizontal
    fontSize: 14, // Taille de la police
    fontStyle: 'italic', // Texte en italique
    color: '#EDEFEE', // Couleur du texte clair
    backgroundColor: '#333333', // Couleur de fond gris foncé
  },
});