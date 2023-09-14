import { Dimensions, StyleSheet } from 'react-native';

const MAX_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'gray',
    width: MAX_WIDTH * 0.8,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: MAX_WIDTH * 0.6,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default styles;