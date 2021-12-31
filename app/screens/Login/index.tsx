import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

import * as loginActions from 'app/store/actions/loginActions';
import {style} from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import Login from './Login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
interface IState {
  loginReducer: ILoginState;
}

const LoginScreen: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  // const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  // const onForgot = () => NavigationService.navigate('ForgotPassword');
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);

  const onLoginGoogle = async () => {
    GoogleSignin.configure({
      webClientId:
        '440117031734-3gatl53g51fsnjemb5njkeuld0cvbbed.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken, user} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredential);
      console.log(user);
      return;
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.containerLoginScreen}>
      <Login
        onPressGoogle={() => onLoginGoogle()}
        onPressFacebook={() => signOut()}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
