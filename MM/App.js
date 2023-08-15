import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ConquistasPage from './src/Pages/ConquistasPage/indexConquistas';
import InicialPage2 from './src/Pages/InicialPage2/indexInicialPage2';
import RecSenhaPage from './src/Pages/RecSenhaPage/indexRecSenhaPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Página de conquistas" component={ConquistasPage} options={{headerShown: false}} />
        <Stack.Screen name="Página inicial 2" component={InicialPage2} options={{headerShown: false}} />  
        <Stack.Screen name="Página de Recuperar Senha" component={RecSenhaPage} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
