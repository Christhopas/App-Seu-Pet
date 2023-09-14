import { Button, Image, SafeAreaView, Text, View, TouchableHighlight} from 'react-native';
import { useState } from "react"
import { Link } from '@react-navigation/native';
import styles from './stylesPetShop';

export default function PetShop (){

  var [ isPress, setIsPress ] = useState(false);


  var Voltar = {
    activeOpacity: 1,
    underlayColor: '#270505',                              
    style: isPress ? styles.btnPress : styles.btnNormal, 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('AU AU ou outro barulho qualquer'),  // <-- "onPress" é obrigatório, pelo menos foi o q eu entendi
  };

  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.viewimg}>
          <Image style={styles.img} source={require('../../assets/Icons/pet-shop.png')} />
          <Text style={styles.txt}> Pet Shop </Text>
        </View>


        <Image source={require('../../assets/Icons/mapa.png')} style={styles.map} />
        <View style={styles.buttonFind}>
          <Button color="#D18162" title="Encontrar" />
        </View>
        <View style = {styles.ViewBtn}>
          <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}>
            <Link to= {{screen: "InicialPage2"}} style = {styles.txtVBtn}>voltar</Link>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};
