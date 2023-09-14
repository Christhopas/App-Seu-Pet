import { View, Text, Image, Pressable, TouchableHighlight } from "react-native";
import styles from "./stylesInicialPage1";
import { Link } from '@react-navigation/native';
import { useState } from "react"

export default function InicialPage1(){

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
            <View style = {styles.viewTop}>
                <View style = {styles.viewPerfil}>
                    <View style = {styles.viewImgOsso}>
                        <Image style = {styles.osso} source = {require('../../assets/Icons/Osso.png')}/> 
                    </View>
                    <Text style = {styles.txtOsso}>Caramelo</Text>
                </View>
                <View style = {styles.viewBtnSair}>
                    <TouchableHighlight {...Sair} style = {styles.sairBtn}>
                        {/*Colocar o link para a pagina de login*/}
                        <Link to= {{screen: "Login"}} style = {styles.txtSairBtn}>Sair</Link>
                    </TouchableHighlight>
                </View>
            </View>
            <View style = {styles.viewImg}>
                <View style = {styles. viewCima}>
                    <View style = {styles. imgEsq}>
                        {/* Colocar o link para a tela do pet Shop*/}
                        <View style = {styles.viewImgBloco}>
                            <Link to= {{screen: "Perfil"}}> <Image style = {styles.img} source = {require('../../assets/Icons/seupet.png')}/> </Link>
                        </View>
                        <Text style = {styles.txt}>Seu Pet</Text>
                    </View>
                    <View style = {styles. imgDir}>
                        {/* Colocar o link para a tela do veterinário*/}
                        <View style = {styles.viewImgBloco}>
                            <Link to= {{screen: "Rastreamento"}}> <Image style = {styles.img} source = {require('../../assets/Icons/rastreamento.png')}/> </Link>
                        </View>
                        <Text style = {styles.txt}>Rastreamento</Text>
                    </View>  
                </View>
                <View style = {styles. viewBaixo}>
                    <View style = {styles. imgEsq}>
                        <View style = {styles.viewImgBloco}>                                                           
                        <Link to= {{screen: "Calendario"}}> <Image style = {styles.img} source = {require('../../assets/Icons/calendariopet.png')}/></Link>
                        </View>
                        <Text style = {styles.txt}>Calendario <br/> Pet</Text>
                    </View>  
                    <View style = {styles. imgDir}>
                        <View style = {styles.viewImgBloco}>
                            <Link to= {{screen: "Alimentacao"}}> <Image style = {styles.img} source = {require('../../assets/Icons/Alimentacao.png')}/> </Link>
                        </View>
                        <Text style = {styles.txt}>Alimentação</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.viewVoltarBtn}>
                <TouchableHighlight {...Voltar}  style = {styles.voltarBtn}>
                    {/*Colocar o link para a pagina inicial 1*/}
                    <Link to= {{screen: "InicialPage2"}} style = {styles.txtVoltarBtn}>{">"}</Link>  
                </TouchableHighlight>
            </View>
        </View>
    )
}