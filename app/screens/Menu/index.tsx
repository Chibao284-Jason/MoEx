import React from 'react';
import {SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';
import Menu from './Menu';
import style from './styles';

interface MenuScreenProps {}

const MenuScreen = (props: MenuScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
    </SafeAreaView>
  );
};

export default MenuScreen;
