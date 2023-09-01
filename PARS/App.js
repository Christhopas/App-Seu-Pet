import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Perfil from './src/Pages/Perfil/indexPerfil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rastreamento from './src/Pages/Rastreamento/indexRastreamento';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Rastreamento" component={Rastreamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SUBSTITUIR PELA MAIN PAGE</Text>
      <TouchableOpacity
        activeOpacity={1}
        underlayColor="#0D350A"
        onPress={() => {
          console.log('Mudando de página...');
          navigation.navigate('Perfil');
        }}
        style={styles.btnLinkTo}
      >
        <Text style={styles.txtBtn}>PERFIL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        underlayColor="#0D350A"
        onPress={() => {
          console.log('Mudando de página...');
          navigation.navigate('Rastreamento');
        }}
        style={styles.btnLinkTo}
      >
        <Text style={styles.txtBtn}>RASTREAMENTO</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnLinkTo: {
    backgroundColor: "#1D5318",
    width: 200, // Define o valor adequado para a largura
    height: 50, // Define o valor adequado para a altura
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
  },
  txtBtn: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});