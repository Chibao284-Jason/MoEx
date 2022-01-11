import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {navigationRef} from './NavigationService';
import Login from 'app/screens/Login';
import ForgotPassword from 'app/screens/ForgotPassword';
import {StatusBar} from 'react-native';
import {ILoginState} from 'app/models/reducers/login';
import ComingSoon from '@components/ComingSoonComponent/ComingSoon';
import {screenName} from './screenName';
import {BottomTabs} from './BottomTabs';
import SignalScreen from '@screens/Signal';
import NotifyScreen from '@screens/Notify';
import MenuScreen from '@screens/Menu';
import ExchangeScreen from '@screens/Exchange';
import WalletScreen from '@screens/Wallet';
import TradingView from '@components/TradingViewComponent/TradingView';
import Presenter from '@components/PresenterComponent/Presenter';
import ChangePassword from '@components/ChangePasswordComponent/ChangePassword';
import RegisterScreen from '@screens/Register';
import LoginInput from '@screens/Login/LoginInput';
import HistoryScreen from '@screens/History';
import HistoryDetail from '@screens/History/HistoryDetail';
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();
const homeOptions: StackNavigationOptions = {
  headerShown: false,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator screenOptions={homeOptions}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          ...homeOptions,
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
      <Stack.Screen name={screenName.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={screenName.LOGIN_DEFAULT} component={LoginInput} />
      <Stack.Screen
        name={screenName.FORGOT_PASSWORD}
        component={ForgotPassword}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator
    screenOptions={homeOptions}
    initialRouteName={screenName.HISTORY}>
    <Stack.Screen name={screenName.BOTTOM_TABS} component={BottomTabs} />
    <Stack.Screen name={screenName.COMING_SOON} component={ComingSoon} />
    <Stack.Screen name={screenName.REFERRER} component={Presenter} />
    <Stack.Screen name={'screenName.COMING_SOON'} component={WalletScreen} />
    <Stack.Screen name={screenName.TRADING_VIEW} component={TradingView} />
    <Stack.Screen name={screenName.SIGNAL} component={SignalScreen} />
    <Stack.Screen name={screenName.NOTIFICATIONS} component={NotifyScreen} />
    <Stack.Screen name={screenName.EXCHANGE} component={ExchangeScreen} />
    <Stack.Screen name={screenName.HISTORY} component={HistoryScreen} />
    <Stack.Screen name={screenName.HISTORY_DETAIL} component={HistoryDetail} />
    <Stack.Screen
      name={screenName.CHANGE_PASSWORD}
      component={ChangePassword}
    />
    <Stack.Screen
      name={screenName.MENU}
      component={MenuScreen}
      options={{
        gestureDirection: 'horizontal-inverted',
        gestureEnabled: true, // If you want to swipe back like iOS on Android
      }}
    />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
