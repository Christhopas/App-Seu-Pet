import { View, Text, SafeAreaView, Image, TouchableHighlight, Button } from "react-native-web";
import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import styles from './stylesRastreamento';

export default function Rastreamento(){

    var [ isPress, setIsPress ] = useState(false);
    
    var Voltar = {
        activeOpacity: 1,
        underlayColor: '#270505',                              
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('Botão de voltar acionado'),
    };

    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.header}>
            <Image
                    source={require('../../assets/Icons/rastreio.png')}
                    style={styles.img}
                />
                <Text style={styles.title}>Rastreamento</Text>
            </View>

            <View style={styles.content}>
                <Image
                 source={require('../../assets/Icons/mapa.png')}
                 style={styles.imgMap}
                />
            </View>

            <View style={styles.buttonFind}>
                <Button color="#D18162" title="Ativar" />
            </View>

            <View style={styles.buttons}>
                <TouchableHighlight {...Voltar} style={styles.buttonVoltar}>
                <Link to = {{screen: "InicialPage1"}} style ={styles.txtBtn}> Voltar </Link>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}