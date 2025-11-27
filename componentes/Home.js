import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const PaginaInicial = () => {
  const navi = useNavigation();

  // Importando as imagens
  const img01 = require("../Imagens/img01.jpg");
  const img02 = require("../Imagens/img02.jpg");
  const img03 = require("../Imagens/img03.jpg");
  const img04 = require("../Imagens/img04.jpg");
  const img05 = require("../Imagens/img05.jpg");
  const img06 = require("../Imagens/img06.jpg");

  const posts = [
    {
      id: 1,
      imagem: img01,
      nome: "Calvo 🐕",
      localizacao: "Lar do Au Au Feliz",
      descricao: "Cão fofo, mas falta um pouco de pelo... ✨",
      preco: "R$ 430,00"
    },
    {
      id: 2,
      imagem: img02,
      nome: "Feio 🐶",
      localizacao: "Refúgio do Rabo Abanando", 
      descricao: "Animal extremamente leal, porém a aparência geralmente não agrada. ❤️",
      preco: "Grátis 🎁"
    },
    {
      id: 3,
      imagem: img03,
      nome: "Velho 🐾",
      localizacao: "Abrigo Patas de Anjo",
      descricao: "Está nos seus últimos anos e é bem pequeno, ótimo para ficar dentro de casa! 🏠",
      preco: "R$ 85,00"
    },
    {
      id: 4, 
      imagem: img04,
      nome: "Estranho 🦴",
      localizacao: "Canil Nova Esperança",
      descricao: "O pet tem nanismo... E é super carinhoso. 🌟",
      preco: "R$ 0,50"
    },
    {
      id: 5,
      imagem: img05,
      nome: "Golden 🌟",
      localizacao: "Santuário Quatro Patas",
      descricao: "Cão energético, independente e bexiga solta. ⚡",
      preco: "R$ 800,00"
    },
    {
      id: 6,
      imagem: img06,
      nome: "Suspeito 🕵️",
      localizacao: "Cantinho do Latido Amigo",
      descricao: "Apenas muito suspeito. 🤨",
      preco: "-R$ 50,00 😅"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Instagram Style */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🐕 DogGram</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navi.navigate('Pesquisa')}>
            <Text style={styles.headerIcon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navi.navigate('Compra')}>
            <Text style={styles.headerIcon}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
        contentContainerStyle={styles.storiesContent}
      >
        {posts.map((post) => (
          <View key={post.id} style={styles.story}>
            <View style={styles.storyBorder}>
              <Image source={post.imagem} style={styles.storyImage} />
            </View>
            <Text style={styles.storyText}>{post.nome.split(' ')[0]}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Feed de Posts - CENTRALIZADO E REDUZIDO */}
      <ScrollView 
        style={styles.feedContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
      >
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            
            {/* Cabeçalho do Post */}
            <View style={styles.postHeader}>
              <View style={styles.postUser}>
                <Image source={post.imagem} style={styles.userAvatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{post.nome}</Text>
                  <Text style={styles.userLocation}>{post.localizacao}</Text>
                </View>
              </View>
              <Text style={styles.moreOptions}>⋯</Text>
            </View>

            {/* Imagem do Post - REDUZIDA E CENTRALIZADA */}
            <View style={styles.postImageContainer}>
              <Image source={post.imagem} style={styles.postImage} />
            </View>

            {/* Ações do Post */}
            <View style={styles.postActions}>
              <View style={styles.leftActions}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionIcon}>📤</Text>
              </View>
              <Text style={styles.priceTag}>{post.preco}</Text>
            </View>

            {/* Curtidas */}
            <Text style={styles.likes}>Curtido por 127 pessoas</Text>

            {/* Descrição */}
            <View style={styles.postDescription}>
              <Text style={styles.descriptionText}>
                <Text style={styles.boldText}>{post.nome} </Text>
                {post.descricao}
              </Text>
            </View>

            {/* Comentários */}
            <Text style={styles.comments}>Ver todos os 23 comentários</Text>
            <Text style={styles.time}>Há 2 horas</Text>
          </View>
        ))}
      </ScrollView>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5eb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D7CCC8',
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  headerIcon: {
    fontSize: 20,
  },
  storiesContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D7CCC8',
    paddingVertical: 12,
    maxHeight: 100,
  },
  storiesContent: {
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 6,
    width: 70,
  },
  storyBorder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#8B4513',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  storyImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  storyText: {
    fontSize: 11,
    color: '#5D4037',
    fontWeight: '500',
  },
  feedContainer: {
    flex: 1,
  },
  feedContent: {
    alignItems: 'center', // CENTRALIZA OS POSTS
    paddingHorizontal: 10, // ESPAÇAMENTO NAS LATERAIS
  },
  post: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 12,
    width: screenWidth - 20, // LARGURA REDUZIDA
    maxWidth: 400, // LARGURA MÁXIMA
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D7CCC8',
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  postUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5D4037',
  },
  userLocation: {
    fontSize: 12,
    color: '#8B4513',
  },
  moreOptions: {
    fontSize: 18,
    color: '#5D4037',
    fontWeight: 'bold',
  },
  postImageContainer: {
    alignItems: 'center', // CENTRALIZA A IMAGEM
    backgroundColor: '#f0f0f0',
  },
  postImage: {
    width: screenWidth - 40, // IMAGEM MAIS REDUZIDA
    height: screenWidth - 40, // QUADRADO PERFEITO
    maxWidth: 380, // LARGURA MÁXIMA
    maxHeight: 380, // ALTURA MÁXIMA
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 15,
  },
  actionIcon: {
    fontSize: 24,
  },
  priceTag: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
    backgroundColor: '#f0e6d6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5D4037',
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  postDescription: {
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#5D4037',
    lineHeight: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  comments: {
    fontSize: 14,
    color: '#8B4513',
    paddingHorizontal: 12,
    marginBottom: 3,
  },
  time: {
    fontSize: 12,
    color: '#A1887F',
    paddingHorizontal: 12,
    marginBottom: 10,
    paddingBottom: 5,
  },
  navFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#D7CCC8',
    height: 60,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  navText: {
    fontSize: 10,
    color: '#8B4513',
    fontWeight: '500',
  },
});

export default PaginaInicial;