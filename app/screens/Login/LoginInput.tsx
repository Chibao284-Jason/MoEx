import React, {useState} from 'react';
import ButtonSocialSquare from '@components/ButtonSocialComponent/ButtonSocialSquare';
import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import TitleComponent from '@components/TitleComponent/TitleComponent';
import ViewAlready from '@components/ViewAlreadyComponent/ViewAldready';
import ViewOrUsing from '@components/ViewOrUsingComponent/ViewOrUsing';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {style} from './styles';
import {onLoginApple, onLoginFacebook, onLoginGoogle} from '@screens/Login';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {useTheme} from 'react-native-paper';
import {colorsTheme} from '@config';
import AutoHeightImage from 'react-native-auto-height-image';
import {screenName} from '@navigation';
interface RegisterProps {}
interface IState {
  themeReducer: IThemeState;
}
const LoginInput = (props: RegisterProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, SetSecureText] = useState(true);
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  return (
    <SafeAreaView style={styles.containerLoginScreen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.containerLoginInput}>
          <HeaderComponent
            isButtonLeft={true}
            headerLeft={() => navigation.goBack()}
            iconLeftStyle={{width: 25}}
            styleHeader={styles.viewHorizontal}
          />

          <TitleComponent
            title={t('SIGN_IN')}
            titleStyles={styles.titleStyles}
            containerStyle={[styles.viewHorizontal]}
          />
          <TitleComponent
            title={t('EMAIL_OR_PHONE')}
            titleStyles={styles.titleEmailAndPhone}
            containerStyle={[
              styles.viewHorizontal,
              styles.viewLabelPhoneAndEmail,
            ]}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setEmail(text);
              }}
              placeholder={t('USERNAME_OR_PHONE')}
              placeholderTextColor={colorsTheme.manatee}
              value={email}
            />
          </View>
          <TitleComponent
            title={t('PASSWORD')}
            titleStyles={styles.titleEmailAndPhone}
            // subTitle={t('USE_EMAIL')}
            subTitle={`${t('FORGOT_PASSWORD')}?`}
            isSubtitle
            subTitleStyle={styles.forgetPassword}
            containerStyle={[
              styles.viewHorizontal,
              styles.viewLabelPhoneAndEmail,
            ]}
            onPressSubTitle={() =>
              navigation.navigate(screenName.FORGOT_PASSWORD as never)
            }
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder={t('PASSWORD')}
              placeholderTextColor={colorsTheme.manatee}
              value={password}
              secureTextEntry={secureText}
            />
            <TouchableOpacity onPress={() => SetSecureText(!secureText)}>
              <AutoHeightImage
                source={
                  secureText
                    ? require('../../assets/img/closeEye.png')
                    : require('../../assets/img/eye.png')
                }
                width={25}
              />
            </TouchableOpacity>
          </View>
          <ButtonTitleWhite
            titleButton={t('SIGN_IN')}
            titleStyle={styles.titleSubmit}
            touchButtonStyle={styles.buttonSubmitLoginInput}
          />
          <ViewAlready
            viewAlreadyStyle={{marginTop: 30}}
            titleButton={t('REGISTER')}
            onPressAlready={() =>
              navigation.navigate(screenName.REGISTER as never)
            }
          />
          <ViewOrUsing />
          <View style={styles.viewButtonSocial}>
            <ButtonSocialSquare
              imgIcon={require('../../assets/img/google.png')}
              nameSocial="Google"
              onPressButtonSocial={() => onLoginGoogle()}
            />
            <ButtonSocialSquare
              imgIcon={require('../../assets/img/facebook.png')}
              nameSocial="Facebook"
              onPressButtonSocial={() => onLoginFacebook()}
            />
            <ButtonSocialSquare
              imgIcon={
                !isDark
                  ? require('../../assets/img/apple.png')
                  : require('../../assets/img/appleWhite.png')
              }
              nameSocial="Apple"
              onPressButtonSocial={() => onLoginApple()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginInput;
