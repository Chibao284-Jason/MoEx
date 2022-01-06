import React, {useState} from 'react';
import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import TitleComponent from '@components/TitleComponent/TitleComponent';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {style} from './styles';
import {useTheme} from 'react-native-paper';
import {colorsTheme} from '@config';
import ThemeController from '@components/ThemeController';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerForgotScreen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.containerLoginInput}>
          <HeaderComponent
            isButtonLeft={true}
            headerLeft={() => navigation.goBack()}
            iconLeftStyle={{width: 25}}
            styleHeader={styles.viewHorizontal}
          />
          <TitleComponent
            title={t('FORGOT_PASSWORD')}
            titleStyles={styles.titleStyles}
            containerStyle={styles.viewHorizontal}
          />
          <Text style={styles.viewForgotPasswordDesc}>{t('FORGOT_DESC')}</Text>
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
          <ButtonTitleWhite
            titleButton={t('FORGOT_SUBMIT')}
            titleStyle={styles.titleSubmit}
            touchButtonStyle={styles.buttonSubmit}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ForgotPassword;
