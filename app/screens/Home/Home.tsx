import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import TouchableVerify from '@components/VerifyAccountComponent/TouchableVerify';
import ThemeController from '@components/ThemeController';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {LineLarge} from '@components/LineComponent/LineLarge';
import WalletVoucher from '@components/WalletVoucherComponent/WalletVoucher';
import {useTheme} from 'react-native-paper';
import UtilitiesComponent from '@components/UtilitiesComponent/UtilitiesComponent';
import TopMoversList from '@components/TopMoversComponent/TopMoversList';
import SignalList from '@components/SignalComponent/SignalList';
import HandBookList from '@components/HandBookCardComponent/HandBookList';
interface HomeScreenProps {}
interface IState {
  themeReducer: IThemeState;
}
const Home = (props: HomeScreenProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  return (
    <View>
      <ThemeController />
      <HeaderComponent
        isButtonLeft={true}
        iconLeft={
          !isDark
            ? require('../../assets/img/menuIcon.png')
            : require('../../assets/img/menuIconWhite.png')
        }
        iconLeftStyle={{width: 30, height: 30}}
        headerLeft={() => console.log('')}
        isNotify={true}
        onPressNotify={() => console.log('Click notify')}
        iconNotify={
          !isDark
            ? require('../../assets/img/bellIcon.png')
            : require('../../assets/img/bellIconWhite.png')
        }
      />
      <LineLarge />
      <TouchableVerify isDark={isDark} />
      <LineLarge />
      <WalletVoucher />
      <UtilitiesComponent isDark={isDark} />
      <TopMoversList isDark={isDark} />
      <SignalList />
      <HandBookList isDark={isDark} />
    </View>
  );
};

export default Home;
