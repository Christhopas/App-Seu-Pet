import { View, Image, Text } from 'react-native';
import styles from './stylesLogin';

export default function Perfil() {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Image
                    source={require('../Icons/logo.png')}
                    style={styles.img}
                />
                <Text style={styles.titulo}>Seu Pet</Text>
            </View>
        </View>
    )
}