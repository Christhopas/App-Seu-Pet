import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#63316D",
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },

    viewImg: {
        justifyContent:'center',
        alignItems: 'center',
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

    viewImgOsso: {
        display: 'flex',
        width:'100%',
        alignItems: 'center', 
    },

    osso: {
        display: 'flex',
        height: MAX_HEIGHT * 0.045,
        width: MAX_WIDTH * 0.110,
        tintColor: "#D18162",
        margin: 10,
        right: '40%',
        top: '5%'
    },

    txtOsso:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '4%',
        right: '30%',
        marginLeft: 30
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



});

export default styles;
