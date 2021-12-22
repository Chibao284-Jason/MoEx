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
import ThemeController from '../components/ThemeController';
import {StatusBar} from 'react-native';
import {ILoginState} from 'app/models/reducers/login';
import ComingSoon from '@components/ComingSoonComponent/ComingSoon';
import {screenName} from './screenName';
import {BottomTabs} from './BottomTabs';
import SignalScreen from '@screens/Signal';
import NotifyScreen from '@screens/Notify';
import MenuScreen from '@screens/Menu';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions: StackNavigationOptions = {
  // title: 'Home',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
  // headerRight: () => <ThemeController />,
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
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen
      name={screenName.BOTTOM_TABS}
      component={BottomTabs}
      options={homeOptions}
    />
    <Stack.Screen
      name={screenName.COMING_SOON}
      component={ComingSoon}
      options={homeOptions}
    />
    <Stack.Screen
      name={screenName.SIGNAL}
      component={SignalScreen}
      options={homeOptions}
    />
    <Stack.Screen
      name={screenName.NOTIFICATIONS}
      component={NotifyScreen}
      options={homeOptions}
    />
    <Stack.Screen
      name={screenName.MENU}
      component={MenuScreen}
      options={{
        ...homeOptions,
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

      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
