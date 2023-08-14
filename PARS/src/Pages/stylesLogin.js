import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#63316D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'column',
    },

    img: {
        width: 200,
        height: 200,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 1,
        marginTop: windowHeight * 0.08
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "700",
        fontSize: 30,
    }
});

export default styles;