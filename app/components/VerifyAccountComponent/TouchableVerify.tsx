import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import {style} from './styles';
import {useTranslation} from 'react-i18next';
interface TouchableVerifyProps {
  isDark: boolean;
  onPressVerify?: () => void;
}

const TouchableVerify = (props: TouchableVerifyProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {isDark, onPressVerify} = props;
  const styles = style(colors as ThemeColors);
  return (
    <TouchableOpacity style={styles.container} onPress={onPressVerify}>
      <View style={{width: '30%'}}>
        <AutoHeightImage
          source={require('../../assets/img/svgVerify.png')}
          width={100}
        />
      </View>

      <View style={{width: '50%'}}>
        <Text style={styles.textHeading}>{t('COMPLETED_KYC')}</Text>
        <Text style={styles.textDesc}>{t('DESC_COMPLETED_KYC')}</Text>
      </View>
      <View style={styles.viewDesc}>
        <View style={styles.viewRoundButton}>
          <View style={styles.button}>
            <AutoHeightImage
              width={25}
              style={{margin: 5}}
              source={require('../../assets/img/arrowRight.png')}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TouchableVerify;
