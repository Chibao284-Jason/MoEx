import * as React from 'react';
import {View} from 'react-native';
import {style} from './styles';
import {useTheme} from 'react-native-paper';
interface LineSmallProps {
  sizeLine?: number;
  width?: string | number;
}

export const LineLarge = (props: LineSmallProps) => {
  const {sizeLine, width} = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return <View style={styles.container(sizeLine, width)} />;
};
