import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: MAX_WIDTH,
    position: 'absolute',
    justifyContent:'space-evenly',
  },

  viewConquistas: {
    display: 'flex',
    flexDirection: 'column',
    width: MAX_WIDTH,
  },

  conquistas: {
    display: 'flex',
    flexDirection: 'row'
  },

  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    color: "#000",
    backgroundColor: "#fff",
    width: MAX_WIDTH * 0.7,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6
  },
  
  check: {
    marginLeft: 20
    
  }
    
});

export default styles;