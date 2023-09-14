import { View, Text, Image, TouchableHighlight, TextInput, SafeAreaView, Alert } from "react-native";
import styles from "./stylesRecSenhaPage";
import { Link } from '@react-navigation/native';
import { useState } from "react"

export default function RecSenhaPage(){

    // utilizado no textInput
    let [email, onchangeEmail] = useState("");

    // usado para torcar a cor do botão ao clicar.
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

      var Confirmar = {
        activeOpacity: 1,
        underlayColor: '#0D350A',                              
        style: isPress2 ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
        onPress: () => console.log('AU AU ou outro barulho qualquer'),  // <-- "onPress" é obrigatório, pelo menos foi o q eu entendi
      };
    
    return(
        <SafeAreaView style = {styles.container}>
            <Image source={require('../../assets/Icons/Dog.png')} style={styles.img}/>
            <Text style = {styles.titulo}>Recuperar Senha</Text>
            <Text style = {styles.subtitulo1}> Esqueceu sua senha? Não tem problema.</Text>
            <Text style = {styles.subtitulo2}> Digite abaixo o seu e-mail, e você receberá um link<br/>para poder alterar sua senha. </Text>
            <View style = {styles.viewInput}>
                <TextInput style={styles.input}
                    value={email}
                    placeholder="email"
                    onChangeText={onchangeEmail}
                />
            </View>
            <View style = {styles.viewBtn}>
                {/* Colocar o link da pagina de login */}
                <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}> 
                    <Link to= {{screen: "Login"}} style = {styles.txtBtn}>Voltar</Link>
                </TouchableHighlight>
                {/* Eu acho q pode colocar os 2 links voltando para a pagina principal, mas se quiserem,
                pode colocar o confirmar ja indo direto pra pagina principal 1. Depois de decidido, pode apagar isso daqui*/}
                <TouchableHighlight  {...Confirmar} style = {styles.ConfirmarBtn}> 
                    <Link to= {{screen: "Login"}} style = {styles.txtBtn}>Confirmar</Link>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}