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
    fontSize: MAX_WIDTH * 0.1,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  text: {
    color: 'white',
    fontSize: MAX_WIDTH * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  input : {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    padding: 6,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  img: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default styles;
