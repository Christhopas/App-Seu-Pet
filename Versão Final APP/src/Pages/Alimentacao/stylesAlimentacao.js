import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#63316D',
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 125,
        height: 125,
        marginTop: 10,
        borderRadius: 20,
    },

    icone: {
        backgroundColor: '#D18162',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 145,
        width: 145,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 10,
        display: 'flex',
    },

    tabela: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        height: windowHeight * 0.40,
        width: windowWidth * 1,
        margin: 10,
    },

    txt: {
        color: 'white',
        fontSize: windowWidth * 0.07,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
    },


    voltar: {
        alignSelf: 'flex-start',
        paddingHorizontal: windowHeight * 0.02,
        paddingTop: windowHeight * 0.07,
        borderRadius: 20,
        overflow: 'hidden',
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
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6,
        marginLeft: windowWidth * 0.1,
        marginTop: windowWidth * 0.20
    },

    buttons: {
        alignSelf: 'flex-start',
    },


});

export default styles;