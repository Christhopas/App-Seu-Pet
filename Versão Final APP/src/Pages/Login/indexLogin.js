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
import { SafeAreaView, TouchableOpacity } from 'react-native-web';


export default function Cadastro() {

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
            source={require('../../assets/Icons/dog.png')}
            style={styles.img}
          />
          <Text style={styles.titulo}>Seu Pet</Text>
        </View>

        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
          />       
        </View>

        <View style={styles.buttons}>
          <TouchableHighlight {...Confirmar} style={styles.buttonConfirmar}>
              {/* Esse <Text> será substituido por um Link-to */}
              <Link to= {{screen: "InicialPage1"}} style = {styles.txtBtn}>Entrar</Link>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableOpacity>
            <Link to ={{screen: "Cadastro"}} style= {styles.btnalt}> Criar uma conta </Link>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Link to ={{screen: "RecuperarSenha"}} style= {styles.btnalt}> Esqueceu a Senha? </Link>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
  );
}