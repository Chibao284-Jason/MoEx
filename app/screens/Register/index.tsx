import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';
import Register from './Register';
import {style} from './styles';
interface RegisterScreenProps {}

const RegisterScreen = (props: RegisterScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerRegisterScreen}>
      <Register colors={colors as ThemeColors} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
