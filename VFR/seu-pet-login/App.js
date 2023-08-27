import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Login, stylesLogin } from './src/index';

export default function App() {
  return (
    <SafeAreaView style={stylesLogin.background}>
      <Image source={require('./src/Icons/dog.png')} />
      <Text style={stylesLogin.title}> Seu Pet </Text>
      <Login />
      {/* Colocar o Link nos dois "TouchableOpacity" a seguir */}
      <TouchableOpacity style={stylesLogin.text}> Esqueceu a senha? </TouchableOpacity>
      <TouchableOpacity style={stylesLogin.text}> Criar conta </TouchableOpacity>
    </SafeAreaView>
  );
}
