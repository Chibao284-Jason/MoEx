import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Market from './Market';
import {style} from './styles';
interface MarketScreenProps {}

const MarketScreen = (props: MarketScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerIndexMarket}>
      <Market />
    </View>
  );
};

export default MarketScreen;
