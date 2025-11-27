import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Compra = () => {
  const navi = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [cachorroSelecionado, setCachorroSelecionado] = useState(null);

  // Imagens
  const img01 = require("../Imagens/img01.jpg");
  const img02 = require("../Imagens/img02.jpg");
  const img03 = require("../Imagens/img03.jpg");
  const img04 = require("../Imagens/img04.jpg");
  const img05 = require("../Imagens/img05.jpg");
  const img06 = require("../Imagens/img06.jpg");

  const cachorros = [
    {
      id: 1,
      nome: "Calvo",
      fabricante: "Lar do Au Au Feliz",
      preco: 430,
      desc: "Cão fofo, mas falta um pouco de pelo...",
      imagem: img01,
    },
    {
      id: 2,
      nome: "Feio",
      fabricante: "Refúgio do Rabo Abanando",
      preco: 0,
      desc: "Animal extremamente leal, porém a aparência geralmente não agrada.",
      imagem: img02,
    },
    {
      id: 3,
      nome: "Velho",
      fabricante: "Abrigo Patas de Anjo",
      preco: 85,
      desc: "Está no seus ultimos anos e é bem pequeno, ótimo para ficar dentro de casa!",
      imagem: img03,
    },
    {
      id: 4,
      nome: "Estranho",
      fabricante: "Canil Nova Esperança",
      preco: 0.50,
      desc: "O pet tem nanismo... E é super carinhoso.",
      imagem: img04,
    },
    {
      id: 5,
      nome: "Golden",
      fabricante: "Santuário Quatro Patas",
      preco: 800,
      desc: "Cão energético, independente e bexiga solta.",
      imagem: img05,
    },
    {
      id: 6,
      nome: "Suspeito",
      fabricante: "Cantinho do Latido Amigo",
      preco: -50,
      desc: "Apenas muito suspeito.",
      imagem: img06,
    },
  ];

  const abrirModal = (item) => {
    setCachorroSelecionado(item);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setCachorroSelecionado(null);
  };

  const formatarPreco = (preco) => {
    if (preco < 0) return { texto: `-R$ ${Math.abs(preco).toFixed(2)}`, cor: '#ff4444' };
    if (preco === 0) return { texto: 'Grátis', cor: '#5D4037' };
    return { texto: `R$ ${preco.toFixed(2)}`, cor: '#5D4037' };
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>🐕 Lista de Cachorros</Text>
        <Text style={styles.subtitulo}>Encontre seu companheiro perfeito!</Text>
      </View>

      {/* Lista de Cachorros */}
      <FlatList
        data={cachorros}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const precoFormatado = formatarPreco(item.preco);
          return (
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => abrirModal(item)}
              activeOpacity={0.7}
            >
              <View style={styles.itemContent}>
                <Image source={item.imagem} style={styles.thumbnail} />
                <View style={styles.textContainer}>
                  <Text style={styles.nome}>🐶 {item.nome}</Text>
                  <Text style={styles.details}>🏠 {item.fabricante}</Text>
                  <Text style={[styles.preco, { color: precoFormatado.cor }]}>
                    💰 {precoFormatado.texto}
                  </Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Modal de Detalhes */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {cachorroSelecionado && (
              <>
                {/* Cabeçalho do Modal */}
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitulo}>
                    🐶 {cachorroSelecionado.nome}
                  </Text>
                  <TouchableOpacity onPress={fecharModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>

                {/* Imagem */}
                <View style={styles.imageContainer}>
                  <Image source={cachorroSelecionado.imagem} style={styles.imagem} />
                </View>

                {/* Descrição */}
                <ScrollView style={styles.descContainer}>
                  <Text style={styles.desc}>📝 {cachorroSelecionado.desc}</Text>
                  
                  <View style={styles.infoBox}>
                    <Text style={styles.infoItem}>🏷️ ID: {cachorroSelecionado.id}</Text>
                    <Text style={styles.infoItem}>🏠 {cachorroSelecionado.fabricante}</Text>
                    <Text style={[styles.infoItem, { color: formatarPreco(cachorroSelecionado.preco).cor }]}>
                      💰 {formatarPreco(cachorroSelecionado.preco).texto}
                    </Text>
                  </View>
                </ScrollView>

                {/* Botão Comprar */}
                <TouchableOpacity 
                  style={styles.comprarButton}
                  onPress={() => {
                    alert(`🎉 Você comprou o ${cachorroSelecionado.nome}!`);
                    fecharModal();
                  }}
                >
                  <Text style={styles.comprarButtonText}>❤️ Comprar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>🐾 Encontre seu melhor amigo</Text>
        <Text style={styles.footerText}>© 2025</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5eb',
  },
  header: {
    padding: 20,
    backgroundColor: '#8B4513',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#E8D5C0',
    fontStyle: 'italic',
  },
  listContainer: {
    padding: 15,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  itemContent: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#8B4513',
  },
  textContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#5D4037",
    marginBottom: 2,
  },
  preco: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chevron: {
    fontSize: 20,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D7CCC8',
    paddingBottom: 10,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8B4513",
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8B4513',
  },
  descContainer: {
    marginBottom: 15,
    maxHeight: 150,
  },
  desc: {
    fontSize: 16,
    color: "#5D4037",
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: "#f0e6d6",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  infoItem: {
    fontSize: 16,
    color: "#5D4037",
    marginBottom: 8,
    fontWeight: '500',
  },
  comprarButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  comprarButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#D7CCC8',
    alignItems: 'center',
    backgroundColor: '#f9f5eb',
  },
  footerText: {
    fontSize: 12,
    color: '#8B4513',
    fontStyle: 'italic',
    marginBottom: 2,
  },
});

export default Compra;