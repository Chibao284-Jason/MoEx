import * as React from 'react';
import {ScrollView, View} from 'react-native';
import MenuList from '@components/MenuComponent/MenuList';
import ThemeController from '@components/ThemeController';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {useNavigation} from '@react-navigation/native';

interface MenuProps {}
interface IState {
  themeReducer: IThemeState;
}
const Menu = (props: MenuProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        isButtonLeft={true}
        iconLeft={
          !isDark
            ? require('../../assets/img/goBack.png')
            : require('../../assets/img/goBackDark.png')
        }
        iconLeftStyle={{width: 25}}
        headerLeft={() => navigation.goBack()}
        headerRight={() => console.log('')}
        customButtonRight={<ThemeController />}
      />
      <ScrollView>
        <MenuList />
      </ScrollView>
    </View>
  );
};

export default Menu;
