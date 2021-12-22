import React from 'react';
import {ScrollView, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import TouchableVerify from '@components/VerifyAccountComponent/TouchableVerify';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {LineLarge} from '@components/LineComponent/LineLarge';
import WalletVoucher from '@components/WalletVoucherComponent/WalletVoucher';
import UtilitiesComponent from '@components/UtilitiesComponent/UtilitiesComponent';
import TopMoversList from '@components/TopMoversComponent/TopMoversList';
import SignalList from '@components/SignalComponent/SignalList';
import HandBookList from '@components/HandBookCardComponent/HandBookList';
import CardNewsList from '@components/CardNewsComponent.tsx/CardNewsList';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '@navigation';
interface HomeScreenProps {}
interface IState {
  themeReducer: IThemeState;
}
const Home = (props: HomeScreenProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const navigation = useNavigation();
  return (
    <View>
      <HeaderComponent
        isButtonLeft={true}
        iconLeft={
          !isDark
            ? require('../../assets/img/menuIcon.png')
            : require('../../assets/img/menuIconWhite.png')
        }
        iconLeftStyle={{width: 30, height: 30}}
        headerLeft={() => navigation.navigate(screenName.MENU)}
        isNotify={true}
        onPressNotify={() => navigation.navigate(screenName.NOTIFICATIONS)}
        iconNotify={
          !isDark
            ? require('../../assets/img/bellIcon.png')
            : require('../../assets/img/bellIconWhite.png')
        }
      />
      <ScrollView>
        <LineLarge />
        <TouchableVerify
          isDark={isDark}
          onPressVerify={() => navigation.navigate(screenName.COMING_SOON)}
        />

        <LineLarge />
        <WalletVoucher />
        <UtilitiesComponent isDark={isDark} />
        <TopMoversList isDark={isDark} />
        <SignalList />
        <HandBookList isDark={isDark} />
        <CardNewsList />
      </ScrollView>
    </View>
  );
};

export default Home;
