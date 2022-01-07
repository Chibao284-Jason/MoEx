import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface ButtonDepositWithdrawProps {
  label: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const ButtonDepositWithdraw = (props: ButtonDepositWithdrawProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {label, buttonStyle, titleStyle} = props;
  return (
    <TouchableOpacity style={[styles.buttonLogOut, buttonStyle]}>
      <Text style={[styles.textLogout, titleStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDepositWithdraw;

const styles = StyleSheet.create({
  container: {},
});
