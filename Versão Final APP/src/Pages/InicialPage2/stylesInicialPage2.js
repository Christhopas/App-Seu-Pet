import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#63316D",
    },

    viewTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginTop: 20,
    },

    viewPerfil: {
        width: "30%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 100
    },

    viewBtnSair: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
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
        marginTop: 70,
    },

    viewBaixo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },

    imgEsq: {
        marginLeft: 20,
    },

    imgDir: {
        marginLeft: 20,
        marginRight: 20,
    },

    viewImgBloco: {
        backgroundColor: "#D18162",
        borderRadius: 20,
    },

    img: {
        height: 120,
        width: 120,
        tintColor: "#63316D",
        margin: 20,
    },

    txt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 5
    },

    viewImgOsso: {
        display: 'flex',
        marginLeft: 1,
    },

    osso: {
        display: 'flex',
        height: MAX_HEIGHT * 0.044,
        width: MAX_WIDTH * 0.10,
        tintColor: "#D18162",
        margin: 10,
    },

    txtOsso:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        display: 'flex',
    },

    
    viewVoltarBtn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 40,
        marginLeft: 30
    },

    voltarBtn: {
        backgroundColor: "#F8EC7D",
        borderRadius: 10,
        width: MAX_WIDTH * 0.25,
        height: MAX_HEIGHT * 0.04,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6
    },

    txtVoltarBtn: {
        color: "#D18162",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
});

export default styles;