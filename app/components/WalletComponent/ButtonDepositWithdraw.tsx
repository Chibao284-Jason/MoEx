import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface ButtonDepositWithdrawProps {
  label: string;
  buttonStyle?: ViewStyle;
}

const ButtonDepositWithdraw = (props: ButtonDepositWithdrawProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {label, buttonStyle} = props;
  return (
    <TouchableOpacity style={[styles.buttonLogOut, buttonStyle]}>
      <Text style={styles.textLogout}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDepositWithdraw;

const styles = StyleSheet.create({
  container: {},
});
