import * as React from 'react';
import {ScrollView, View} from 'react-native';
import ThemeController from '@components/ThemeController';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {useNavigation} from '@react-navigation/native';
import NotifyList from '@components/NotifyComponent/NotifyList';

interface NotifyProps {}
interface IState {
  themeReducer: IThemeState;
}
const Notify = (props: NotifyProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        title="Thông báo"
        isButtonLeft={true}
        iconLeft={
          !isDark
            ? require('../../assets/img/goBack.png')
            : require('../../assets/img/goBackDark.png')
        }
        iconLeftStyle={{width: 25}}
        headerLeft={() => navigation.goBack()}
        headerRight={() => console.log('')}
        isButtonRight={true}
        iconRight={{uri: ''}}
      />
      <NotifyList />
    </View>
  );
};

export default Notify;
