import {useRef} from 'react';
import { View, Button } from 'react-native';
import stylesButton from '../../Buttons/stylesButtons';
import { default as Botao } from '../../Buttons/indexButtons';
import Toast from 'react-native-toast-message';

export default () => {
  const toastRef = useRef(null);

  const handlePress = () => {
    toastRef.current.show({
      type: 'success',
      text1: 'Teste',
      position: 'top',
      visibilityTime: 3000,
    });
  };


  return (
    <>
      <Botao />
      <View style={stylesButton.button}>
        <Button
          title="Entrar"
          color="#D18162"
          onPress={handlePress}
        />
      </View>
      <Toast ref={toastRef} />
    </>
  );
};
