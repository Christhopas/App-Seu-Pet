import { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import styles from './stylesButtons';

export default () => {
  // Constantes
  const initialUser = 'Usuário';
  const initialPassword = 'Senha';

  // Campos de Input (Usuário e Senha)
  const [userField, saveUserField] = useState(initialUser);
  const [passwordField, savePasswordField] = useState(initialPassword);

  // Lógica
  return (
    <SafeAreaView>
      {/* Campo 'Usuário' */}
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(userField) => {
          saveUserField(userField);
        }}
        onFocus={() => {
          if (userField === initialUser) {
            saveUserField('');
          }
        }}
        // Verifica se foi digitado alguma coisa
        // Se não for, mantém-se o texto 'Usuário'
        onBlur={() => {
          if (userField === '') {
            saveUserField(initialUser);
          }
        }}
        value={userField}
      />

      {/* Campo 'Senha' */}
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(passwordField) => {
          savePasswordField(passwordField);
        }}
        onFocus={() => {
          if (passwordField === initialPassword) {
            savePasswordField('');
          }
        }}
        // Verifica se foi digitado alguma coisa
        // Se não for, mantém-se o texto 'Senha'
        placeholder="Senha"
        secureTextEntry = "true"
        value={passwordField}
      />
    </SafeAreaView>
  );
};
