import * as React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import Home from './Home';
import style from './styles';
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
