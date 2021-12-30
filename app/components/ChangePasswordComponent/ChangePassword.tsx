import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {colorsTheme} from '@config';
import {IThemeState} from '@models/reducers/theme';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {style} from './styles';
interface IState {
  themeReducer: IThemeState;
}

interface PresenterProps {}

const ChangePassword = (props: PresenterProps) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [secureText, SetSecureText] = useState(true);
  const [secureTextConfirm, SetSecureTextConfirm] = useState(true);
  const {t} = useTranslation();
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerPresenter}>
      <HeaderComponent
        title={t('CHANGE_PASSWORD')}
        isButtonLeft={true}
        iconLeft={
          !isDark
            ? require('../../assets/img/goBack.png')
            : require('../../assets/img/goBackDark.png')
        }
        iconLeftStyle={{width: 25}}
        headerLeft={() => navigation.goBack()}
        headerRight={() => console.log('')}
        isButtonRight={true}
        iconRight={{uri: ''}}
      />
      <View style={styles.viewBody}>
        <View>
          <View>
            <Text style={styles.label}>{t('NEW_PASSWORD')}</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setPassword(text);
                }}
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
          </View>
          <View>
            <Text style={styles.label}>{t('CONFIRM_PASSWORD')}</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setConfirm(text);
                }}
                placeholderTextColor={colorsTheme.manatee}
                value={confirm}
                secureTextEntry={secureTextConfirm}
              />
              <TouchableOpacity onPress={() => SetSecureText(!secureText)}>
                <AutoHeightImage
                  source={
                    secureTextConfirm
                      ? require('../../assets/img/closeEye.png')
                      : require('../../assets/img/eye.png')
                  }
                  width={25}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ButtonTitleWhite
          titleButton={t('COMPLETE')}
          viewButtonStyle={styles.viewButton}
          touchButtonStyle={styles.touchButton(password)}
          titleStyle={{color: 'white'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
