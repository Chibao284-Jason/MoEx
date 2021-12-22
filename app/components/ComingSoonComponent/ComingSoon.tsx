import ThemeController from '@components/ThemeController';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface ComingSoonProps {}

const ComingSoon = (props: ComingSoonProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.container}>
      {/* <ThemeController /> */}
      <AutoHeightImage
        width={300}
        source={require('../../assets/img/comingSoon.png')}
      />
      <Text style={styles.textComing}>{t('COMING_SOON')}</Text>
      <View style={styles.viewBack}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}>
          <AutoHeightImage
            width={20}
            source={require('../../assets/img/goBackDark.png')}
          />
          <Text style={styles.textGoBack}>{t('GO_BACK')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComingSoon;
