import * as React from 'react';
import {View} from 'react-native';
import SignalList from '@components/SignalComponent/SignalList';
import ThemeController from '@components/ThemeController';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {useNavigation} from '@react-navigation/native';

interface SignalProps {}
interface IState {
  themeReducer: IThemeState;
}
const Signal = (props: SignalProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const navigation = useNavigation();
  return (
    <View>
      <HeaderComponent
        title="Tín hiệu"
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
        iconRightStyle={{width: 25}}
        iconRight={
          !isDark
            ? require('../../assets/img/filter.png')
            : require('../../assets/img/filterDark.png')
        }
      />
      <SignalList isTitle={false} />
    </View>
  );
};

export default Signal;
