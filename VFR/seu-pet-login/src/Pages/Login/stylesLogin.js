import { Dimensions, StyleSheet } from 'react-native';

const MAX_HEIGHT = Dimensions.get('window').height;
const MAX_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#63316d',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: MAX_WIDTH,
  },
  title: {
    color: 'white',
    fontSize: MAX_WIDTH * 0.15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 70,
  },
  text: {
    color: 'white',
    fontSize: MAX_WIDTH * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default styles;
