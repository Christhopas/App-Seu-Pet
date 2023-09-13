/*
OBSERVAÇÕES:
    Ainda falta acertar o 'Link to' da página lá no fundo (no botão de salvar e voltar).
    Podemos fazer isso lá na próxima semana, quando formos juntar as pages
    No mais, a página está pronta.
*/
import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './stylesLogin';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-web';


export default function Login() {

    var [ isPress, setIsPress ] = useState(false);
    var [ isPress2, setIsPress2 ] = useState(false);
    
    var Confirmar = {
        activeOpacity: 1,
        underlayColor: '#0D350A',                              
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
        onPress: () => console.log('Botão de salvar acionado'),
      };

      var Voltar = {
        activeOpacity: 1,
        underlayColor: '#270505',                              
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('Botão de voltar acionado'),
      };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.header}>
                <Image
                    source={require('../../Icons/login.png')}
                    style={styles.img}
                />
                <Text style={styles.titulo}>Seu Pet</Text>
            </View>

            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry="true"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    secureTextEntry="true"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Data de nascimento"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sexo"
                />
                
                
            </View>

            <View style={styles.buttons}>
                <TouchableHighlight {...Voltar} style={styles.buttonVoltar}>
                    {/* Esse <Text> será substituido por um Link-to */}
                    <Text style={styles.txtBtn}>Voltar</Text> 
                </TouchableHighlight>
                <TouchableHighlight {...Confirmar} style={styles.buttonConfirmar}>
                    {/* Esse <Text> será substituido por um Link-to */}
                    <Text style={styles.txtBtn}>Salvar</Text>
                </TouchableHighlight>
                
            </View>
        </SafeAreaView>
    );
}