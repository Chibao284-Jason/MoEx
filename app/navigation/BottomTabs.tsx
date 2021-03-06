import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import {screenName} from './screenName';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {TabActions, useNavigation} from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {colorsTheme} from '@config';
import WalletScreen from '@screens/Wallet';
import {enableScreens} from 'react-native-screens';
import TopTabMarket from './TopTabMarket';
import TopTabExchange from './TopTabExchange';
enableScreens(true);
const Tab = createBottomTabNavigator();
interface IState {
  themeReducer: IThemeState;
}
export const BottomTabs = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const {t} = useTranslation();
  const navigation = useNavigation();
  const homeOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: isDark ? colorsTheme.white : colorsTheme.persianBlue,
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: !isDark ? colorsTheme.white : colorsTheme.mirageB,
    },
  };
  return (
    <Tab.Navigator screenOptions={homeOptions}>
      <Tab.Screen
        name={screenName.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: t('HOME'),
          tabBarIcon: ({focused}) => (
            <View>
              <AutoHeightImage
                width={30}
                source={
                  !focused
                    ? require('../assets/img/homeInactive.png')
                    : isDark
                    ? require('../assets/img/homeDark.png')
                    : require('../assets/img/home.png')
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screenName.MARKET}
        component={() => <TopTabMarket />}
        options={{
          tabBarLabel: t('MARKET'),
          tabBarIcon: ({focused}) => (
            <View>
              <AutoHeightImage
                width={30}
                source={
                  !focused
                    ? require('../assets/img/chartInactive.png')
                    : isDark
                    ? require('../assets/img/chartDark.png')
                    : require('../assets/img/chart.png')
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screenName.NOTIFY}
        component={() => <View />}
        options={{
          tabBarLabel: '',
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              style={{
                backgroundColor: colorsTheme.persianBlue,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginHorizontal: 15,
                padding: 5,
                borderRadius: 50,
                shadowColor: colorsTheme.persianBlue,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
              }}
              onPress={() => navigation.navigate(screenName.SIGNAL as never)}>
              <AutoHeightImage
                width={30}
                source={require('../assets/img/bellSignal.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={screenName.EXCHANGE}
        component={TopTabExchange}
        listeners={{
          tabPress: e => {
            {
              const jumpToAction = TabActions.jumpTo(screenName.EXCHANGE, {
                key: 'swap', // reset route exchange
              });
              navigation.dispatch(jumpToAction);
            }
          },
        }}
        options={{
          tabBarLabel: t('EXCHANGE'),
          tabBarIcon: ({focused}) => (
            <View>
              <AutoHeightImage
                width={30}
                source={
                  !focused
                    ? require('../assets/img/exchangeInactive.png')
                    : isDark
                    ? require('../assets/img/exchangeDarkMenu.png')
                    : require('../assets/img/exchange.png')
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screenName.WALLET}
        component={WalletScreen}
        options={{
          tabBarLabel: t('WALLET'),
          tabBarIcon: ({focused}) => (
            <View>
              <AutoHeightImage
                width={30}
                source={
                  !focused
                    ? require('../assets/img/walletInactive.png')
                    : isDark
                    ? require('../assets/img/walletDark.png')
                    : require('../assets/img/wallet.png')
                }
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
