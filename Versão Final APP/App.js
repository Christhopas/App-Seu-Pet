import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InicialPage1 from './src/Pages/InicialPage1/indexInicialPage1';
import Perfil from './src/Pages/Perfil/indexPerfil';
import Rastreamento from './src/Pages/Rastreamento/indexRastreamento';
import AlimentacaoPage from './src/Pages/Alimentacao/indexAlimentacao';
import LoginPage from './src/Pages/Login/indexLogin';
import RecSenhaPage from './src/Pages/RecSenhaPage/indexRecSenhaPage';
import Calendario from './src/Pages/Calendario/CalendarioPage';
import InicialPage2 from './src/Pages/InicialPage2/indexInicialPage2';
import PetShop from './src/Pages/PetShop/indexPetShop';
import VeterinarioPage from './src/Pages/Veterinario/indexVeterinario';
import ConquistasPage from './src/Pages/ConquistasPage/indexConquistas';
import Cadastro from './src/Pages/Cadastro/cadastroindex';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
        <Stack.Screen name="RecuperarSenha" component={RecSenhaPage} options={{headerShown: false}} />

        {/* Tela 1 */}
        <Stack.Screen name="InicialPage1"   component={InicialPage1}      options={{headerShown: false}} />
        <Stack.Screen name="Perfil"         component={Perfil}            options={{headerShown: false}} />
        <Stack.Screen name="Alimentacao"    component={AlimentacaoPage}   options={{headerShown: false}} />
        <Stack.Screen name="Rastreamento"   component={Rastreamento}      options={{headerShown: false}} />
        <Stack.Screen name="Calendario"     component={Calendario}        options={{headerShown: false}} />

        {/* Tela 2 */}
        <Stack.Screen name="InicialPage2"   component={InicialPage2}      options={{headerShown: false}} />
        <Stack.Screen name="PetShop"        component={PetShop}           options={{headerShown: false}} />
        <Stack.Screen name="Veterinario"    component={VeterinarioPage}   options={{headerShown: false}} />
        <Stack.Screen name="Conquistas"     component={ConquistasPage}    options={{headerShown: false}} />
      





         
      </Stack.Navigator>
    </NavigationContainer>
  );
}