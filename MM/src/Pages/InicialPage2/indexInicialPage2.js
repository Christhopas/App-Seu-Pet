import { View, Text, Image, Pressable, TouchableHighlight } from "react-native";
import styles from "./stylesInicialPage2";
import { Link } from '@react-navigation/native';
import { useState } from "react"

export default function InicialPage2(){

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

      var Sair = {
        activeOpacity: 1,
        underlayColor: "#270505",                              
        style: isPress2 ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
        onPress: () => console.log('AU AU ou outro barulho qualquer'),  //  "onPress" é obrigatório, pelo menos foi o q eu entendi
      };

    return(
        <View style = {styles.container}>
            <View style = {styles.viewImgOsso}>
                <Image style = {styles.osso} source = {require('../../assets/Icons/Osso.png')}/> 
            </View>
                <Text style = {styles.txtOsso}>Caramelo</Text>
            <View style = {styles.viewImg}>
                <View style = {styles. viewCima}>
                    <View style = {styles. imgEsq}>
                        {/* Colocar o link para a tela do pet Shop*/}
                        <Link to= {{screen: "Página de conquistas"}}> <Image style = {styles.img} source = {require('../../assets/Icons/PetShop.png')}/> </Link>
                        <Text style = {styles.txt}>Pet Shop</Text>
                    </View>
                    <View style = {styles. imgDir}>
                        {/* Colocar o link para a tela do veterinário*/}
                        <Link to= {{screen: "Página de conquistas"}}> <Image style = {styles.img} source = {require('../../assets/Icons/Vet.png')}/> </Link>
                        <Text style = {styles.txt}>Veterinário</Text>
                    </View>  
                </View>
                <View style = {styles. viewBaixo}>
                    <View style = {styles. imgEsq}>
                        <Link to= {{screen: "Página de conquistas"}}> <Image style = {styles.img} source = {require('../../assets/Icons/Conquistas.png')}/></Link>
                        <Text style = {styles.txt}>Conquistas</Text>
                    </View>  
                    <View style = {styles. imgDir}>
                        <Link to= {{screen: "Página de conquistas"}}> <Image style = {styles.img} source = {require('../../assets/Icons/Config.png')}/> </Link>
                        <Text style = {styles.txt}>Opções e<br/>ajuda</Text>
                    </View>
                </View>

                <View style = {styles.viewVoltarBtn}>
                    <TouchableHighlight {...Voltar}  style = {styles.voltarBtn}>
                        <Link to= {{screen: "Página de Recuperar Senha"}} style = {styles.txtVoltarBtn}>{"<"}</Link>  
                    </TouchableHighlight>
                </View>
                <View style = {styles.viewSairBtn}>
                    <TouchableHighlight {...Sair} style = {styles.sairBtn}>
                        {/*Colocar o link para a pagina de login*/}
                        <Link to= {{screen: "Página inicial 2"}} style = {styles.txtSairBtn}>Sair</Link>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}