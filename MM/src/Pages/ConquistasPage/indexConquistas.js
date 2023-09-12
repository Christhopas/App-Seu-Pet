import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./stylesConquistas";
import { useState } from "react"
import Conquistas from "../../Components/Conquistas/Conquistas";
import { Link } from '@react-navigation/native';


export default function ConquistasPage(){

    var [ isPress, setIsPress ] = useState(false);
    var [ isPress2, setIsPress2 ] = useState(false);

    var Voltar = {
        activeOpacity: 1,
        underlayColor: '#270505',                              
        style: isPress ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('AU AU ou outro barulho qualquer'),  // <-- "onPress" é obrigatório, pelo menos foi o q eu entendi
      };

      var Avancar = {
        activeOpacity: 1,
        underlayColor: '#D16262',                              
        style: isPress2 ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
        onPress: () => console.log('AU AU ou outro barulho qualquer'),  // <-- "onPress" é obrigatório, pelo menos foi o q eu entendi
      };

     

    return (
        <View style = {styles.container}>
            <View style = {styles.perfil}>
                <View style = {styles.viewimg}>
                    {/* Ajustar o tamnho pra fical igual a de td mundo*/}
                    <Image style = {styles.img} source = {require('../../assets/Icons/Conquistas.png')}/> 
                    <Text style = {styles.txt}>Conquistas</Text>
                </View>  
            </View>

            <Conquistas/>
            
            <View style = {styles.ViewABtn}>
                <TouchableHighlight {...Avancar}  style = {styles.AvancarBtn}>
                    <Link to= {{screen: "Página inicial 2"}} style = {styles.txtABtn}>{">"}</Link>
                </TouchableHighlight>
            </View>
            <View style = {styles.ViewBtn}>
                <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}>
                    <Link to= {{screen: "Página inicial 2"}} style = {styles.txtVBtn}>voltar</Link>
                </TouchableHighlight>
            </View>
        </View>
    )
}