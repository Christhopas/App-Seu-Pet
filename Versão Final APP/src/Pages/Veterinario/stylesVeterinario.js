import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63316D',
        justifyContent: 'center',
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
        margin: 10,
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


    viewVoltarBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
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

    ViewBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 25,
    },

    VoltarBtn: {
        backgroundColor: "#6F1C1C",
        width: MAX_WIDTH * 0.25,
        height: MAX_HEIGHT * 0.04,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6
    },

    txtVBtn: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },

    viewImg: {
        marginTop: MAX_HEIGHT * 0.015,
        backgroundColor: "#D18162",
        borderRadius: 25,
        marginBottom: 50,
        width: MAX_WIDTH * 0.45,
        height: MAX_HEIGHT * 0.22,
    },

    imgvet: {
        height: 163,
        width: 163,
        margin: 10,
        tintColor: "#63316D",
    },

    txt1:{
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 30,
        marginTop: 15
    }

});

export default styles;