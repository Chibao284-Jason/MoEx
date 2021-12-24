import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
import Wallet from './Wallet';

interface WalletScreenProps {}

const WalletScreen = (props: WalletScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerWalletScreen}>
      <Wallet />
    </View>
  );
};

export default WalletScreen;
