import { View, Image, Text, TouchableHighlight, TouchableOpacity, SafeAreaView, Button } from "react-native";
import styles from "./stylesAlimentacao";
import { useState } from "react"
import { Link } from '@react-navigation/native';


export default function AlimentacaoPage(){

  var [ isPress, setIsPress ] = useState(false);

  var Voltar = {
    activeOpacity: 1,
    underlayColor: '#270505',                              
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('Botão de voltar acionado'),
  };




  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewimg}>
          <Image style={styles.img} source={require('../../assets/Icons/Alimentacao.png')} />
          <Text style={styles.txt}> Alimentação </Text>
        </View>

        <View style={styles.tabela}>
          <Image style={styles.tabela} source={require('../../assets/Icons/tabela.png')}/>
        </View>


        <View style={styles.buttons}>
          <TouchableHighlight {...Voltar} style={styles.buttonVoltar}>
            <Link to = {{screen: "InicialPage1"}} style ={styles.txtBtn}> Voltar </Link>
          </TouchableHighlight>
        </View>

      </SafeAreaView>
    
    
    
    
    
    </>
  )
}
