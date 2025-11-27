import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PaginaInicial from './componentes/Home';
import Pesquisa from './componentes/Pesquisa';
import Compra from './componentes/Compra';
import Sobre from './componentes/Sobre';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabItem,
          headerShown: false, // Remove o header padrão se quiser
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={PaginaInicial}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Pesquisa" 
          component={Pesquisa}
          options={{
            tabBarLabel: 'Pesquisa',
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>🔍</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Compra" 
          component={Compra}
          options={{
            tabBarLabel: 'Compra',
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>🛒</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Sobre" 
          component={Sobre}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>ℹ️</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabIconFocused: {
    fontSize: 22,
    transform: [{ scale: 1.1 }],
  },
});