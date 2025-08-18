import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Events from './src/screens/Events';
import ModalEvent from './src/screens/ModalEvent';
import Chat from './src/screens/Chat';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Events" component={Events} options={{ title: 'Salas/Eventos' }} />
        <Stack.Screen name="ModalEvent" component={ModalEvent} options={{ title: 'Modal de Evento' }} />
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'Chat' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}