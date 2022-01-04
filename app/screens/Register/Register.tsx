import * as React from 'react';
import {Text, View} from 'react-native';
import {style} from './styles';
interface RegisterProps {
  colors: ThemeColors;
}

const Register = (props: RegisterProps) => {
  const {colors} = props;
  const styles = style(colors);
  return (
    <View style={styles.containerRegister}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
