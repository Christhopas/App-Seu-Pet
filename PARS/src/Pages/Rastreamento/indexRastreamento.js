import { View, Text, SafeAreaView, Image, TouchableHighlight, Button } from "react-native-web";
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
                    source={require('../../Icons/rastreio.png')}
                    style={styles.img}
                />
                <Text style={styles.title}>Rastreamento</Text>
            </View>

            <View style={styles.content}>
                <Image
                 source={require('../../Icons/mapa.png')}
                 style={styles.imgMap}
                />
            </View>

            <View style={styles.buttonFind}>
                <Button color="#D18162" title="Ativar" />
                </View>

                <View style={styles.buttons}>
                <TouchableHighlight {...Voltar} style={styles.buttonVoltar}>
                    {/* Esse <Text> será substituido por um Link-to */}
                    <Text style={styles.txtBtn}>Voltar</Text> 
                </TouchableHighlight>
                </View>
        </SafeAreaView>
    );
}