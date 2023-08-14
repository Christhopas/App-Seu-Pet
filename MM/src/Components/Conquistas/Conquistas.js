import { View, TextInput } from "react-native";
import styles from "./stylesComponentsConquistas";
import { useState } from "react"
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function Conquistas(){

  const [con1, setcon1] = useState("")
  const [con2, setcon2] = useState("")
  const [con3, setcon3] = useState("")

  return (
    <View style = {styles.viewConquistas}>
      <View>
        <TextInput style = {styles.input}
          value = {con1}
          onChangeText={text=>setcon1(text)}
          placeholder="Conquista 1"/>
        <BouncyCheckbox
          iconStyle={{
            borderRadius: 0,
          }}
          innerIconStyle={{
            borderRadius: 0,
            borderColor: "#63316D"
          }}
          size={35}
          fillColor="green"
          unfillColor="#FFFFFF"
          style = {styles.check}/>
        <TextInput style = {styles.input}
          value = {con2}
          onChangeText={text=>setcon2(text)}
          placeholder="Conquista 2"/>
        <BouncyCheckbox
          iconStyle={{
            borderRadius: 0,
          }}
          innerIconStyle={{
            borderRadius: 0,
            borderColor: "#63316D"
          }}
          size={35}
          fillColor="green"
          unfillColor="#FFFFFF"
          style = {styles.check}/>
        </View>
    </View>
    )
}