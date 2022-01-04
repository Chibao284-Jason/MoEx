import ButtonSocial from '@components/ButtonSocialComponent/ButtonSocial';
import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import ViewOrUsing from '@components/ViewOrUsingComponent/ViewOrUsing';
import {colorsTheme} from '@config';
import {IThemeState} from '@models/reducers/theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {style} from './styles';

interface LoginProps {
  onPressGoogle: () => void;
  onPressFacebook?: () => void;
  onPressApple?: () => void;
  isApple?: boolean;
}
interface IState {
  themeReducer: IThemeState;
}

const Login = (props: LoginProps) => {
  const {onPressGoogle, onPressFacebook, isApple = false, onPressApple} = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const {t} = useTranslation();
  return (
    <ScrollView
      style={styles.containerLogin}
      showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center'}}>
        <AutoHeightImage
          width={100}
          source={{
            uri: 'https://static.appvn.com/a/uploads/thumbnails/052016/m-launcher-marshmallow-60_icon.png',
          }}
        />
        <Text style={styles.labelWelcome}>{t('WELCOME')}</Text>
        <Text style={styles.labelLogo}>MoEx Exchange</Text>
      </View>
      <View>
        <ButtonSocial
          imgIcon={require('../../assets/img/google.png')}
          nameSocial="Google"
          onPressButtonSocial={onPressGoogle}
        />
        <ButtonSocial
          imgIcon={require('../../assets/img/facebook.png')}
          nameSocial="Facebook"
          onPressButtonSocial={onPressFacebook}
        />
        {isApple && (
          <ButtonSocial
            imgIcon={
              !isDark
                ? require('../../assets/img/apple.png')
                : require('../../assets/img/appleWhite.png')
            }
            nameSocial="Apple"
            onPressButtonSocial={onPressApple}
          />
        )}
      </View>
      <ViewOrUsing />
      <ButtonTitleWhite
        titleButton={t('REGISTER')}
        titleStyle={styles.titleSubmit}
        touchButtonStyle={styles.buttonSubmit}
      />
      <View style={styles.viewAlready}>
        <Text style={{color: colorsTheme.manatee}}>{t('ALREADY_ACCOUNT')}</Text>
        <TouchableOpacity style={styles.touchAlready}>
          <Text style={styles.textAlreadySubmit}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
