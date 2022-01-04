import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

import * as loginActions from 'app/store/actions/loginActions';
import {style} from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import Login from './Login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {FBAccessToken} from 'react-native-fbsdk-next/types/FBAccessToken';
import {appleAuth} from '@invertase/react-native-apple-authentication';
interface IState {
  loginReducer: ILoginState;
}
let loginFacebook: boolean = false;

const LoginScreen: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  // const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  // const onForgot = () => NavigationService.navigate('ForgotPassword');
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);

  const onLoginApple = async () => {
    // 1). start a apple sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // 2). if the request was successful, extract the token and nonce
    const {identityToken, nonce} = appleAuthRequestResponse;

    // can be null in some scenarios
    if (identityToken) {
      // 3). create a Firebase `AppleAuthProvider` credential
      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );

      // 4). use the created `AppleAuthProvider` credential to start a Firebase auth request,
      //     in this example `signInWithCredential` is used, but you could also call `linkWithCredential`
      //     to link the account to an existing user
      const userCredential = await auth().signInWithCredential(appleCredential);

      // user is now signed in, any Firebase `onAuthStateChanged` listeners you have will trigger
      console.log(
        `Firebase authenticated via Apple, UID: ${userCredential.user.uid}`,
      );
    } else {
      // handle this - retry?
    }
  };

  const onLoginFacebook = () => {
    if (!loginFacebook) {
      LoginManager.logInWithPermissions(['public_profile', 'email']).then(
        function (result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            console.log(
              'Login success with permissions: ' + JSON.stringify(result),
            );
            AccessToken.getCurrentAccessToken().then(
              async (data: FBAccessToken | null | undefined) => {
                loginFacebook = true;
                if (!data) {
                  throw 'can not find accessToken';
                }
                console.log('accessToken', data!.accessToken.toString());
                const facebookCredential = auth.FacebookAuthProvider.credential(
                  data.accessToken,
                );
                const userCredential = await auth().signInWithCredential(
                  facebookCredential,
                );

                console.log(
                  `Firebase authenticated via FB, UID: ${userCredential.user.uid}`,
                );
                return;
              },
            );
          }
        },
        function (error) {
          console.log('Login fail with error: ' + error);
        },
      );
    } else {
      LoginManager.logOut();
      loginFacebook = false;
    }
  };

  const onLoginGoogle = async () => {
    GoogleSignin.configure({
      webClientId:
        '440117031734-3gatl53g51fsnjemb5njkeuld0cvbbed.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      console.log(
        `Firebase authenticated via GG, UID: ${userCredential.user.uid}`,
      );
      return;
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const signOutGoogle = async () => {
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
        // onPressFacebook={() => signOut()}
        onPressFacebook={() => onLoginFacebook()}
        onPressApple={() => onLoginApple()}
        isApple={Platform.OS === 'ios'}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
