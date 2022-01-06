import {colorsTheme} from '@config';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface TextInputEnterProps {}

const TextInputEnter = (props: TextInputEnterProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {t} = useTranslation();
  return (
    <View>
      <View style={styles.containerTextInputPhone}>
        <TextInput
          placeholder={`${t('ENTER_EMAIL')}`}
          style={styles.textEnterInputPhone}
          placeholderTextColor={colorsTheme.manatee}
          keyboardType="email-address"
          returnKeyType="send"
        />
      </View>
    </View>
  );
};

export default TextInputEnter;
