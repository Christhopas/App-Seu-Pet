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
        marginTop: windowHeight * 0.02,
        borderRadius: 20,
    },

    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "700",
        fontSize: 25,
        marginTop: windowWidth * 0.05,
    },

    content: {
        display: 'flex',
    }, 

    imgMap: {
        marginTop: windowWidth * 0.04,
        width: windowWidth * 0.9,
        height: windowHeight * 0.4,
        borderRadius: 20,
    },

    buttonFind: {
        marginTop: windowWidth * 0.05,
        width: windowWidth * 0.6,
        borderRadius: 10,
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