import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#63316D",

    }, 

    img: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignContent: 'center',
    },

    titulo: {
        color: "#fff",
        fontSize: MAX_WIDTH * 0.1,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    subtitulo1: {
        color: "#fff",
        fontSize: MAX_WIDTH * 0.1,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20
    },

    subtitulo2: {
        color: "#fff",
        fontSize: MAX_WIDTH * 0.1,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15
    },

    viewInput: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        
        alignItems: 'center',
        
    },

    input: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: MAX_WIDTH * 0.6,
        borderRadius: 10,
        padding: 6,
        paddingHorizontal: 5,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6,
    },

    viewBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: MAX_HEIGHT * 0.40

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
        shadowOpacity: 0.6,
        margin: 50,
        
    },

    ConfirmarBtn: {
        backgroundColor: "#1D5318",
        width: MAX_WIDTH * 0.25,
        height: MAX_HEIGHT * 0.04,
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

});

export default styles;