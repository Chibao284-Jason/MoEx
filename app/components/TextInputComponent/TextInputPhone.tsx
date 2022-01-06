import {colorsTheme} from '@config';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface TextInputPhoneProps {}

const TextInputPhone = (props: TextInputPhoneProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {t} = useTranslation();
  return (
    <View>
      <View style={styles.containerTextInputPhone}>
        <TouchableOpacity style={styles.touchFlag}>
          <AutoHeightImage
            source={require('../../assets/img/vietnam.png')}
            width={30}
          />

          <AutoHeightImage
            width={10}
            style={{marginLeft: 5}}
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png',
            }}
          />
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <Text style={styles.areaCode}>+84</Text>
        <TextInput
          placeholder={t('ENTER_PHONE')}
          style={styles.textEnterInputPhone}
          placeholderTextColor={colorsTheme.manatee}
          keyboardType="numeric"
          returnKeyType="send"
        />
      </View>
    </View>
  );
};

export default TextInputPhone;
