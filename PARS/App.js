import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Perfil from './src/Pages/indexPerfil';


export default function App() {
  return (
    <View style={styles.container}>
      <Perfil></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63316D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
