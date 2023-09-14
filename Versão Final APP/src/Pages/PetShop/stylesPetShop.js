import { Dimensions, StyleSheet } from 'react-native';

const MAX_HEIGHT = Dimensions.get('window').height;
const MAX_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#63316D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBack: {
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
  },

  map: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    height: MAX_HEIGHT * 0.45,
    width: MAX_WIDTH * 0.9,
    margin: 10,
  },

  buttonFind: {
    margin: 10,
    width: MAX_WIDTH * 0.6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  
  buttonReturn: {
    alignSelf: 'flex-start',
    paddingHorizontal: MAX_HEIGHT * 0.02,
    paddingTop: MAX_HEIGHT * 0.07,
    borderRadius: 10,
    overflow: 'hidden',
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
    marginTop: 60,
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

});

export default styles;
