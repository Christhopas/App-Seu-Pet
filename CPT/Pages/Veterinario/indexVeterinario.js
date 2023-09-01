import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./stylesVeterinario";
import { useState } from "react"
import { Link } from '@react-navigation/native';


export default function VeterinarioPage(){

    var [ isPress, setIsPress ] = useState(false);
    var [ isPress2, setIsPress2 ] = useState(false);

    var Voltar = {
        activeOpacity: 1,
        underlayColor: '#270505',                              
        style: isPress ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
      };

      var Avancar = {
        activeOpacity: 1,
        underlayColor: '#D16262',                              
        style: isPress2 ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
      };

     

    return (
        <View style = {styles.container}>
            <View style = {styles.viewimg}>
                {/* Ajustar o tamnho pra fical igual a de td mundo*/}
                <Image style = {styles.img} source ={require('../../assets/Icons/vet.png')}/> 
            </View>  
            
            <Text style = {styles.txt}>Veterinario</Text>
            
            <View style = {styles. viewCima}>
              <View style = {styles. imgEsq}>
                  {/* Colocar o link para a tela do pet Shop*/}
                  <Link to= {{screen: ""}}> <Image style = {styles.img} source = {require('../../assets/Icons/seupet.png')}/> </Link>
                  <Text style = {styles.txt}>Seu Pet</Text>
              </View>
              <View style = {styles. imgDir}>
                {/* Colocar o link para a tela do veterinário*/}
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
            
            <View style = {styles.ViewBtn}>
                <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}>
                    <Link to= {{screen: "Página inicial 2"}} style = {styles.txtVBtn}>voltar</Link>
                </TouchableHighlight>
            </View>
            <View style = {styles.ViewABtn}>
                <TouchableHighlight {...Avancar}  style = {styles.AvancarBtn}>
                    <Link to= {{screen: "Página inicial 2"}} style = {styles.txtABtn}>{"<"}</Link>
                </TouchableHighlight>
            </View>
        </View>
    )
}

