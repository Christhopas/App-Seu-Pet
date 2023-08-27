import { Image, SafeAreaView, Text } from 'react-native';
import { Login, stylesLogin } from './src/index';

export default function App() {
  return (
    <SafeAreaView style={stylesLogin.background}>
      <Image source={require('./src/Icons/dog.png')} />
      <Text style={stylesLogin.title}> Seu Pet </Text>
      <Login />
      <Text style={stylesLogin.text}> Esqueceu a senha? </Text>
      <Text style={stylesLogin.text}> Criar conta </Text>
    </SafeAreaView>
  );
}
