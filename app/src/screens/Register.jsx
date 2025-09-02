import style from '../styles/Register.style';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confir, setConfir] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
  if (nome === '' || email === '' || senha === '' || confir === '') {
    Alert.alert('Erro', 'Preencha todos os campos!');
    return;
  }

  if (senha !== confir) {
    Alert.alert('Erro', 'As senhas não conferem!');
    return;
  }

  try {
    const response = await fetch("http://BoraQuererDudao/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      Alert.alert("Sucesso", "Cadastro realizado!");
      navigation.navigate("Login"); 
    } else {
      Alert.alert("Erro", data.message || "Erro ao cadastrar.");
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Erro", "Não foi possível conectar ao servidor.");
  }
};

  return (
    <View style={style.container}>
      <Text style={style.title}>Cadastro</Text>

      <TextInput
        style={style.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        keyboardType="default"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

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

      <TextInput
        style={style.input}
        placeholder="Confirme a sua senha"
        value={confir}
        onChangeText={setConfir}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={style.button} onPress={handleRegister}>
        <Text style={style.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={style.loginContainer}>
        <Text>Já possui conta? </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
          <Text style={style.loginText}>Faça login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
