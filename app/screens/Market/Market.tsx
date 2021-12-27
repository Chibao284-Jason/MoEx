import MarketList from '@components/MarketComponent/MarketList';
import {colorsTheme} from '@config';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-native-paper';
// import SvgUri from 'react-native-svg-uri';
import {SvgUri} from 'react-native-svg';

import {style} from './styles';
interface MarketProps {}

const Market = (props: MarketProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={{flex: 1}}>
      <MarketList />
    </View>
  );
};

export default Market;
