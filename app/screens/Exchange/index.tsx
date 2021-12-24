import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {style} from './styles';
import Exchange from './Exchange';

interface ExchangeScreenProps {}

const ExchangeScreen = (props: ExchangeScreenProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerExchangeIndex}>
      <Exchange colors={colors as ThemeColors} />
    </SafeAreaView>
  );
};

export default ExchangeScreen;
