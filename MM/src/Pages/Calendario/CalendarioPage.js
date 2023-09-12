import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./stylesCalendario";
import { useState } from "react"
import { Link } from '@react-navigation/native';
import { Calendar } from "react-native-calendars";


export default function Calendario(){

    var [ isPress, setIsPress ] = useState(false);
    var [ isPress2, setIsPress2 ] = useState(false);

    var Voltar = {
        activeOpacity: 1,
        underlayColor: '#270505',
        style: isPress ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('Matheus mucuruco'),
      };

      var Avancar = {
        activeOpacity: 1,
        underlayColor: '#D16262',
        style: isPress2 ? styles.btnPress : styles.btnNormal, 
        onHideUnderlay: () => setIsPress2(false),
        onShowUnderlay: () => setIsPress2(true),
        onPress: () => console.log('Matheus mucuruco'),
      };



    return (
        <View style = {styles.container}>
            <View style = {styles.viewimg}>
                <Image style = {styles.img} source = {require('../../assets/Icons/Calendario.png')}/> 
            <Text style = {styles.txt}>Calendário Pet</Text>
            </View>


            <Calendar
             style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350,
              }}
              theme={{
                backgroundColor: '#fff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#000'
              }}>
            </Calendar>

            <View style = {styles.ViewBtn}>
                <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}>
                    <Link to= {{screen: "Página inicial 2"}} style = {styles.txtVBtn}>voltar</Link>
                </TouchableHighlight>
            </View>
        </View>
    )
}