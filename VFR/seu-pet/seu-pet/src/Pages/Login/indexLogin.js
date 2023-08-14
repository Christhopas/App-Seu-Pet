import React, { useState } from 'react';
import { View, Button, Text, TextInput, SafeAreaView, Image } from 'react-native';
import styles from './stylesLogin';

// Campos de Input
const useLoginState = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (username && password) {
      alert(`Usuário: ${username}\nSenha: ${password}`);
    } else {
      alert('Por favor, insira um usuário e senha.');
    }
  };

  return { username, password, handleUsernameChange, handlePasswordChange, handleLogin };
};
       
// Elementos da tela
export default () => {
  const { username, password, handleUsernameChange, handlePasswordChange, handleLogin } = useLoginState();

  const renderInputField = (placeholder, value, onChangeText, secureTextEntry = false) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    );
  };

  return (
    <SafeAreaView>
      <Image source={require('../../Icons/dog.png')} style={styles.img}/>
      <Text style={styles.title}>Seu Pet</Text>
      {renderInputField('Usuário', username, handleUsernameChange)}
      {renderInputField('Senha', password, handlePasswordChange, true)}
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        <Button title="Entrar" color="#D18162"/>
      </View>
      <Text style={styles.text}>Criar uma conta</Text>
      <Text style={styles.text}>Esqueceu a senha?</Text>
    </SafeAreaView>
  );
};
