import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./stylesAlimentacao";
import { useState } from "react"
import { Link } from '@react-navigation/native';


export default function AlimentacaoPage(){



  return (

    <View style = {styles.container}>
      <View style = {styles.viewimg}>
        <Image style = {styles.img} source ={require('../../assets/Icons/Alimentacao.png')}/> 
    </View>  
            
    <Text style = {styles.txt}>Alimentação</Text>
            

    </View>
  )
}

