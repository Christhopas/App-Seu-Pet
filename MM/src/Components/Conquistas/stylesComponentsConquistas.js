import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewConquistas: {
    display: 'flex',
    flexDirection: 'row',
    width: MAX_WIDTH,
    position: 'absolute',
    justifyContent:'space-evenly',
  },

  separacao: {
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
    width: MAX_WIDTH * 0.8,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6
  },
  
  check: {
    
    
  }
    
});

export default styles;