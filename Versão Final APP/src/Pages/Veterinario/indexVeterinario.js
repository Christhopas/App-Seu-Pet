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
      
      <View style = {styles.viewImg}>
        {/* Ajustar o tamnho pra fical igual a de td mundo*/}
        <Image style = {styles.imgvet} source = {require('../../assets/Icons/Vet.png')}/> 
        <Text style = {styles.txt1}>Veterinário</Text>
      </View>

            
    <View style = {styles. viewCima}>
      <View style = {styles. imgEsq}>
        <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/vacinação.png')}/> </Link>
        <Text style = {styles.txt}>Vacinação</Text>
      </View>

      <View style = {styles. imgDir}>
        <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/cirurgias.png')}/> </Link>
        <Text style = {styles.txt}>Cirurgias</Text>
      </View>  
    </View>

      <View style = {styles. viewBaixo}>
        <View style = {styles. imgEsq}>
          <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/consultas.png')}/></Link>
          <Text style = {styles.txt}>Consultas</Text>
        </View>

        <View style = {styles. imgDir}>
          <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/banhos.png')}/> </Link>
          <Text style = {styles.txt}>Banhos</Text>
        </View>
      </View>
            
      <View style = {styles.ViewBtn}>
          <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}>
            <Link to= {{screen: "InicialPage2"}} style = {styles.txtVBtn}>Voltar</Link>
          </TouchableHighlight>
      </View>

    </View>
  )
}

