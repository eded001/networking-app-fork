import { useState } from 'react';
import style from '../styles/Login.style';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um e-mail válido!');
      return;
    }

    try {
      const response = await fetch('http://Adicionar_url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', 'Login realizado!');
        navigation.navigate('Home'); // Coloquei a tela home, mas pode ser outra.
      } else {
        Alert.alert('Erro', data.message || 'Usuário ou senha incorretos');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>

      <TextInput
        style={style.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={style.registerContainer}>
        <Text>Não possui conta? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={style.registerText}>Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
