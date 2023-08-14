import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#63316D",
        
    
    },

    viewImg: {
        justifyContent:'center',
        alignItems: 'center'
    },

    viewCima: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 70,
        marginTop: 70
       
    },

    viewBaixo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },

    img: {
        height: MAX_HEIGHT * 0.12,
        width: MAX_WIDTH * 0.24,
        tintColor: "#63316D",
        margin: 10,
        backgroundColor: "#D18162",
        borderRadius: 10,
        
    },

    imgEsq: {
        marginLeft: 20,
        marginRight: 20,
       
    },

    imgDir: {
        marginLeft: 20,
        marginRight: 20,
        
    },


    txt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    viewOsso: {

    },

    osso: {
        flex: 1,
        display: 'flex',
        height: MAX_HEIGHT * 0.058,
        width: MAX_WIDTH * 0.125,
        tintColor: "#D18162",
        margin: 10
    },

    txtOsso:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },

    
    viewVoltarBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        top: '40%',
        marginLeft: 20,
    },

    voltarBtn: {
        backgroundColor: "#F8EC7D",
        borderRadius: 10,
        width: MAX_WIDTH * 0.25,
        height: MAX_HEIGHT * 0.04,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtVoltarBtn: {
        color: "#D18162",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },

    viewSairBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        marginRight: 20,
        bottom: '106%'
    },

    sairBtn: {
        backgroundColor: "#6F1C1C",
        width: MAX_WIDTH * 0.25,
        height: MAX_HEIGHT * 0.04,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtSairBtn: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }



});

export default styles;