import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Modal, 
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Pesquisa = () => {
  const navi = useNavigation();
  const [nome, setNome] = useState("");
  const [nomeCachorro, setNomeCachorro] = useState("Nenhum");
  const [img, setImg] = useState(require("../Imagens/semimagem.jpg"));
  const [modalVisible, setModalVisible] = useState(false);
  
  const trocaimagem = (x) => {
    if (!x.trim()) {
      setNomeCachorro("Nenhum");
      return;
    }
    
    const imagemNormalizada = x.toLowerCase().replace(/\s+/g, '');
    
    if(imagemNormalizada === "calvo" || imagemNormalizada === "1"){
      setImg(require("../Imagens/img01.jpg"));
      setNomeCachorro("Calvo");
    }
    else if(imagemNormalizada === "feio" || imagemNormalizada === "2"){
      setImg(require("../Imagens/img02.jpg"));
      setNomeCachorro("Feio");
    }
    else if(imagemNormalizada === "velho" || imagemNormalizada === "3"){
      setImg(require("../Imagens/img03.jpg"));
      setNomeCachorro("Velho");
    }
    else if(imagemNormalizada === "estranho" || imagemNormalizada === "4"){
      setImg(require("../Imagens/img04.jpg"));
      setNomeCachorro("Estranho");
    }
    else if(imagemNormalizada === "golden" || imagemNormalizada === "5"){
      setImg(require("../Imagens/img05.jpg"));
      setNomeCachorro("Golden");
    }
    else if(imagemNormalizada === "suspeito" || imagemNormalizada === "6"){
      setImg(require("../Imagens/img06.jpg"));
      setNomeCachorro("Suspeito");
    }
    else {
      setNomeCachorro("Não encontrado");
      setModalVisible(true);
    }
  }

  const limparImagem = () => {
    setImg(require("../Imagens/semimagem.jpg"));
    setNomeCachorro("Nenhum");
    setNome("");
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>🔍 Pesquisar Cachorro</Text>
          <Text style={styles.subtitle}>Digite o nome ou número do cachorro</Text>
        </View>

        {/* Área de Pesquisa */}
        <View style={styles.searchSection}>
          <Text style={styles.label}>📝 Digite o nome do cachorro:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={(x) => setNome(x)}
            value={nome}
            placeholder="Ex: calvo, feio, velho, estranho..."
            placeholderTextColor="#999"
            onSubmitEditing={() => trocaimagem(nome)}
          />
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.searchButton}
              onPress={() => trocaimagem(nome)}
            >
              <Text style={styles.buttonText}>🖼️ Carregar Cachorro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={limparImagem}
            >
              <Text style={styles.buttonText}>🗑️ Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Resultado */}
        <View style={styles.resultSection}>
          <Text style={styles.feedback}>
            ✅ Cachorro selecionado: <Text style={styles.dogName}>{nomeCachorro}</Text>
          </Text>
        </View>

        {/* Imagem do Cachorro */}
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <Image source={img} style={styles.image} />
          </View>
        </View>

        {/* Ajuda */}
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>💡 Opções disponíveis:</Text>
          <View style={styles.helpList}>
            <Text style={styles.helpItem}>🐕 Calvo (ou digite 1)</Text>
            <Text style={styles.helpItem}>🐶 Feio (ou digite 2)</Text>
            <Text style={styles.helpItem}>🐾 Velho (ou digite 3)</Text>
            <Text style={styles.helpItem}>🦴 Estranho (ou digite 4)</Text>
            <Text style={styles.helpItem}>🌟 Golden (ou digite 5)</Text>
            <Text style={styles.helpItem}>🕵️ Suspeito (ou digite 6)</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>🐕 App Seletor de Cachorros</Text>
          <Text style={styles.footerText}>✨ Encontre seu amigo perfeito!</Text>
        </View>
      </ScrollView>

      {/* Modal de Erro */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalIcon}>⚠️</Text>
                  <Text style={styles.modalTitle}>Cachorro não encontrado!</Text>
                </View>
                
                <View style={styles.modalBody}>
                  <Text style={styles.modalText}>Digite um dos nomes abaixo:</Text>
                  <View style={styles.modalList}>
                    <Text style={styles.modalListItem}>• 🐕 Calvo ou 1</Text>
                    <Text style={styles.modalListItem}>• 🐶 Feio ou 2</Text>
                    <Text style={styles.modalListItem}>• 🐾 Velho ou 3</Text>
                    <Text style={styles.modalListItem}>• 🦴 Estranho ou 4</Text>
                    <Text style={styles.modalListItem}>• 🌟 Golden ou 5</Text>
                    <Text style={styles.modalListItem}>• 🕵️ Suspeito ou 6</Text>
                  </View>
                </View>
                
                <TouchableOpacity 
                  style={styles.modalButton}
                  onPress={closeModal}
                >
                  <Text style={styles.modalButtonText}>👌 Entendi</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5eb',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#8B4513',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#E8D5C0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  searchSection: {
    padding: 25,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  label: {
    fontSize: 18,
    color: '#5D4037',
    marginBottom: 12,
    fontWeight: '600',
  },
  input: {
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FFF8F0',
    color: '#5D4037',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  searchButton: {
    flex: 2,
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#A1887F',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  feedback: {
    fontSize: 18,
    color: '#5D4037',
    backgroundColor: '#E8D5C0',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  dogName: {
    fontWeight: 'bold',
    color: '#8B4513',
  },
  imageSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: '#8B4513',
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 15,
  },
  helpSection: {
    backgroundColor: '#E8D5C0',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 15,
    textAlign: 'center',
  },
  helpList: {
    alignItems: 'flex-start',
  },
  helpItem: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 8,
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D7CCC8',
    backgroundColor: 'white',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#8B4513',
    fontStyle: 'italic',
    marginBottom: 4,
    textAlign: 'center',
  },
  // Estilos do Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#8B4513',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalIcon: {
    fontSize: 28,
    marginRight: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  modalBody: {
    width: '100%',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  modalList: {
    alignItems: 'flex-start',
  },
  modalListItem: {
    fontSize: 14,
    color: '#5D4037',
    marginBottom: 8,
    fontWeight: '500',
  },
  modalButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 120,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Pesquisa;