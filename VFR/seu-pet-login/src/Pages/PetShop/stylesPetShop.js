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
  title: {
    color: 'white',
    fontSize: MAX_WIDTH * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
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
});

export default styles;
