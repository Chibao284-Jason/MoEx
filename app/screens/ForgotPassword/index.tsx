import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import ForgotPassword from './ForgotPassword';

import {style} from './styles';
const Home: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerForgotScreen}>
      <ForgotPassword />
    </SafeAreaView>
  );
};

export default Home;
