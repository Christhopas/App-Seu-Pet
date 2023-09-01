import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import styles from './stylesVeterinario';

export default () => {
  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.iconBack}>
          <Image source={require('../../assets/Icons/vet.png')} />
        </View>
        <Text style={styles.title}> Veterinário </Text>
      </SafeAreaView>
    </>
  );
};
