import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./stylesAlimentacao";
import { useState } from "react"
import { Link } from '@react-navigation/native';


export default function AlimentacaoPage(){

  const headers = ['Peso', 'Quantidade de ração'];
  const rowSpanData = [
    ['Peso'], ['Quantidade de Ração'],
  ];


  return (

    <View style = {styles.container}>
      <View style = {styles.viewimg}>
        <Image style = {styles.img} source ={require('../../assets/Icons/Alimentacao.png')}/>         
        <Text style = {styles.txt}>Alimentação</Text>
      </View>


      <View style={styles.tabela}>
        <Image style={styles.tabela} source={require('../../assets/Icons/tabela.png')}/>
      </View>
      
    <View>
 


    </View>
    </View>
  )
}

