import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InicialPage1 from './Pages/InicialPage1/indexInicialPage1';
import Veterinario from './Pages/Veterinario/indexVeterinario'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Página inicial 1" component={InicialPage1} options={{headerShown: false}} />  
        <Stack.Screen name="Veterinario" component={Veterinario} options={{headerShown: false}} />  
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}