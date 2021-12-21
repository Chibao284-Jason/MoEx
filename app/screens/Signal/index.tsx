import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import Signal from './Signal';
import style from './styles';

interface SignalScreenProps {}

const SignalScreen = (props: SignalScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Signal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignalScreen;
