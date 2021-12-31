import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface ViewOrUsingProps {}

const ViewOrUsing = (props: ViewOrUsingProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerViewOrUsing}>
      <View style={styles.line} />
      <Text style={styles.textUsing}>{t('OR_USING')}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default ViewOrUsing;
