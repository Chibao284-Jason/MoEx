import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface TouchChangeBaseCurrencyProps {}

const TouchChangeBaseCurrency = (props: TouchChangeBaseCurrencyProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerTouch}>
      <TouchableOpacity style={styles.touchBase}>
        <Text style={styles.titleBase(true)}>VNDC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchBase}>
        <Text style={styles.titleBase(false)}>USDT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchChangeBaseCurrency;
