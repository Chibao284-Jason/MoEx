import React, {useState} from 'react';
import ButtonSocialSquare from '@components/ButtonSocialComponent/ButtonSocialSquare';
import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {TextInputEnter, TextInputPhone} from '@components/TextInputComponent';
import TitleComponent from '@components/TitleComponent/TitleComponent';
import ViewAlready from '@components/ViewAlreadyComponent/ViewAldready';
import ViewOrUsing from '@components/ViewOrUsingComponent/ViewOrUsing';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {style} from './styles';
import {onLoginApple, onLoginFacebook, onLoginGoogle} from '@screens/Login';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import {screenName} from '@navigation';
interface RegisterProps {
  colors: ThemeColors;
}
interface IState {
  themeReducer: IThemeState;
}
const Register = (props: RegisterProps) => {
  const {colors} = props;
  const {t} = useTranslation();
  const styles = style(colors);
  const navigation = useNavigation();
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const [typeInputPhone, setTypeInputPhone] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containerRegister}>
        <HeaderComponent
          isButtonLeft={true}
          headerLeft={() => navigation.goBack()}
          iconLeftStyle={{width: 25}}
          styleHeader={styles.viewHorizontal}
        />

        <TitleComponent
          title={t('REGISTER')}
          titleStyles={styles.titleStyles}
          containerStyle={[styles.viewHorizontal]}
        />
        <Text style={styles.viewDescRegister}>
          {typeInputPhone ? t('DESC_REGISTER') : t('DESC_REGISTER_EMAIL')}
        </Text>
        <TitleComponent
          title={typeInputPhone ? t('PHONE_NUM') : t('EMAIL')}
          titleStyles={styles.titlePhone}
          subTitle={typeInputPhone ? t('USE_EMAIL') : t('USE_PHONE')}
          isSubtitle
          subTitleStyle={styles.titleUseEmail}
          containerStyle={[styles.viewHorizontal, styles.viewLabelPhone]}
          onPressSubTitle={() => setTypeInputPhone(!typeInputPhone)}
        />
        {typeInputPhone ? <TextInputPhone /> : <TextInputEnter />}
        <ButtonTitleWhite
          titleButton={t('REGISTER')}
          titleStyle={styles.titleSubmit}
          touchButtonStyle={styles.buttonSubmit}
        />
        <ViewAlready
          viewAlreadyStyle={{marginTop: 30}}
          onPressAlready={() =>
            navigation.navigate(screenName.LOGIN_DEFAULT as never)
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
  );
};

export default Register;
