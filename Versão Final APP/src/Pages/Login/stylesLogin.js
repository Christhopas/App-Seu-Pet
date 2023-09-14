import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#63316D',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
    },
    img: {
        width: 210,
        height: 200,
        marginTop: windowHeight * 0.08,
        borderRadius: 20,
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "700",
        fontSize: 30,
    },
    content: {
        marginTop: windowHeight * 0.05,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    input: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.05,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
        marginTop: 20,

    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    buttonConfirmar: {
        backgroundColor: "#D18162",
        width: windowWidth * 0.6,
        height: windowHeight * 0.04,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6,
        margin: 50
    },
    txtBtn: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonVoltar: {
      backgroundColor: "#6F1C1C",
      width: windowWidth * 0.25,
      height: windowHeight * 0.04,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.6,
      margin: 50,
    },
    btnalt:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
});

export default styles;