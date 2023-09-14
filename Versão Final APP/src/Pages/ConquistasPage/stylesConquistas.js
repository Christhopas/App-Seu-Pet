import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#63316D",
        justifyContent: 'space-around',  
        alignItems: 'center'      
    },

    perfil: {
        marginBottom: 500,
    }, 

    viewimg: {
        marginTop: MAX_HEIGHT * 0.015,
        backgroundColor: "#D18162",
        borderRadius: 25,
        marginBottom: 50,
        width: MAX_WIDTH * 0.45,
        height: MAX_HEIGHT * 0.23,
    },

    img: {
        height: MAX_HEIGHT * 0.2,
        width: MAX_WIDTH * 0.4,
        margin: 10,
        tintColor: "#63316D",
    },

    txt: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 30,
        marginTop: 15
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

    ViewABtn: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        marginRight: 50
        
    },

    AvancarBtn: {
        backgroundColor: "#F8EC7D",
        width: MAX_WIDTH * 0.25,
        height: MAX_HEIGHT * 0.04,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
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

    txtABtn: {
        color: "#D18162",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
    
});

export default styles;