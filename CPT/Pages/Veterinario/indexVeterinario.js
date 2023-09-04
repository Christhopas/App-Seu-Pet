import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./stylesVeterinario";
import { useState } from "react"
import { Link } from '@react-navigation/native';


export default function VeterinarioPage(){

  var [ isPress, setIsPress ] = useState(false);
  var [ isPress2, setIsPress2 ] = useState(false);

  var Voltar = {
    activeOpacity: 1,
    underlayColor: "#D16262",                              
    style: isPress ? styles.btnPress : styles.btnNormal, 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('AU AU ou outro barulho qualquer'),  //  "onPress" é obrigatório, pelo menos foi o q eu entendi
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.viewimg}>
        <Image style = {styles.img} source ={require('../../assets/Icons/vet.png')}/> 
    </View>  
            
    <Text style = {styles.txt}>Veterinario</Text>
            
    <View style = {styles. viewCima}>
      <View style = {styles. imgEsq}>
        <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/seupet.png')}/> </Link>
        <Text style = {styles.txt}>Seu Pet</Text>
      </View>

      <View style = {styles. imgDir}>
        <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/rastreamento.png')}/> </Link>
        <Text style = {styles.txt}>Rastreamento</Text>
      </View>  
    </View>

      <View style = {styles. viewBaixo}>
        <View style = {styles. imgEsq}>
          <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/calendariopet.png')}/></Link>
          <Text style = {styles.txt}>calendário Pet</Text>
        </View>

        <View style = {styles. imgDir}>
          <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/Alimentacao.png')}/> </Link>
          <Text style = {styles.txt}>Alimentação</Text>
        </View>
      </View>
            
      <View style = {styles.viewVoltarBtn}>
        <TouchableHighlight {...Voltar}  style = {styles.voltarBtn}>
          <Link to= {{screen: "Página de Recuperar Senha"}} style = {styles.txtVoltarBtn}>{"<"}</Link>  
        </TouchableHighlight>
      </View>

    </View>
  )
}

