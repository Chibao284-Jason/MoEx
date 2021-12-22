import ThemeController from '@components/ThemeController';
import * as React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import Notify from './Notify';
import style from './styles';
interface NotifyScreenProps {}

const NotifyScreen = (props: NotifyScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.container}>
      <Notify />
    </SafeAreaView>
  );
};

export default NotifyScreen;
