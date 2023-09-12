import { View, Image, Text, TouchableHighlight} from "react-native";
import styles from "./stylesCalendario";
import { useState } from "react"
import { Link } from '@react-navigation/native';
import { Calendar, LocaleConfig} from 'react-native-calendars';


export default function Calendario(){
  
  var [ isPress, setIsPress ] = useState(false);

  var Voltar = {
    activeOpacity: 1,
    underlayColor: '#270505',
    style: isPress ? styles.btnPress : styles.btnNormal, 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('Matheus mucuruco'),
    };

    const [selected, setSelected] = useState('');

    LocaleConfig.locales['br'] = {
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      today:"hoje"
    };

    LocaleConfig.defaultLocale = 'br';

    const passear = {key: 'passear', color: 'blue'};
    const dormir = {key: 'dormir', color: 'green'};
    const vet = {key: 'vet', color: 'orange'};

    const marked = {
      '2023-09-10': {
        dots: [passear, vet]
      },
      '2023-10-02': {
        dots: [passear, vet, dormir]
      }
    };

  return (
    <View style = {styles.container}>
      <View style = {styles.viewimg}>
        <Image style = {styles.img} source = {require('../../assets/Icons/Calendario.png')}/> 
        <Text style = {styles.txt}>Calendário Pet</Text>
      </View>

      <Calendar
        /* Usando o [selected], tirar o markingType*/ 
        markingType="multi-dot"
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        /*markedDates={{
          [selected]: {selected: true, marked: true, dotColor: '#fff'}
        }}*/
        markedDates={marked}
        style={{
          borderRadius: 5,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.6
        }}
        theme={{
          calendarBackground: '#0d0d0d',
          textSectionTitleColor: '#fff',
          selectedDayBackgroundColor: '#D18162',
          selectedDayTextColor: '#63316D',
          todayTextColor: '#00adf5',
          dayTextColor: '#fff',
          textDisabledColor: '#0d0d0d',
          textSectionTitleColor: '#fff',
        }}/>
        
        <View style = {styles.ViewBtn}>
          <TouchableHighlight {...Voltar} style = {styles.VoltarBtn}>
            <Link to= {{screen: "Página inicial 2"}} style = {styles.txtVBtn}>voltar</Link>
          </TouchableHighlight>
        </View>
    </View>
  )
}