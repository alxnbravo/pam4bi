import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Sobre = () => {
  const navi = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ℹ️ SOBRE</Text>
      <Text style={styles.subtitulo}>Informações sobre o aplicativo</Text>
      <Text style={styles.texto}>
        Este é um aplicativo desenvolvido com React Native e React Navigation.
      </Text>
      <Text style={styles.texto}>
        Desenvolvido por Alan e Benício - 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5eb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 20,
  },
  texto: {
    fontSize: 14,
    color: '#5D4037',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Sobre;