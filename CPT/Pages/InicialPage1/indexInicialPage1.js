import { View, Text, Image, Pressable, TouchableHighlight } from "react-native";
import styles from "./stylesInicialPage1";
import { Link } from '@react-navigation/native';
import { useState } from "react"

export default function InicialPage1(){

    var [ isPress, setIsPress ] = useState(false);
    var [ isPress2, setIsPress2 ] = useState(false);

    var Avançar = {
        activeOpacity: 1,
        underlayColor: "#D16262",                              
        style: isPress ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
      };

      var Sair = {
        activeOpacity: 1,
        underlayColor: "#270505",                              
        style: isPress2 ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
      };

    return(
        <View style = {styles.container}>
            <View style = {styles.viewImgOsso}>
                <Image style = {styles.osso} source = {require('../../assets/Icons/Osso.png')}/> 
            </View>
                <Text style = {styles.txtOsso}>Rex</Text>
            <View style = {styles.viewImg}>
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

                <View style = {styles.viewAvançarBtn}>
                    <TouchableHighlight {...Avançar}  style = {styles.avançarBtn}>
                        <Link to= {{screen: "Página Inicial 2"}} style = {styles.txtAvançarBtn}>{">"}</Link>  
                    </TouchableHighlight>
                </View>
                <View style = {styles.viewSairBtn}>
                    <TouchableHighlight {...Sair} style = {styles.sairBtn}>
                        {/*Colocar o link para a pagina de login*/}
                        <Link to= {{screen: "Pagina de login"}} style = {styles.txtSairBtn}>Sair</Link>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}