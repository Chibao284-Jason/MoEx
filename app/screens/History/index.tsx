import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
import History from './History';

interface HistoryScreenProps {}

const HistoryScreen = (props: HistoryScreenProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerHistoryScreen}>
      <History />
    </SafeAreaView>
  );
};

export default HistoryScreen;
