import { SafeAreaView } from 'react-native';
import styles from './src/Pages/Login/stylesLogin';
import Main from './src/Pages/Login/indexLogin';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <Main />
    </SafeAreaView>
  );
}