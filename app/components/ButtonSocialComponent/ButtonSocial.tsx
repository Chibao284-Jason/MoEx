import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity, ImageSourcePropType} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface ButtonSocialProps {
  imgIcon: ImageSourcePropType;
  onPressButtonSocial?: () => void;
  nameSocial: string;
  size?: number;
}

const ButtonSocial = (props: ButtonSocialProps) => {
  const {imgIcon, onPressButtonSocial, nameSocial, size = 40} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerButtonSocial}>
      <TouchableOpacity
        style={styles.touchSocial}
        onPress={onPressButtonSocial}>
        <AutoHeightImage width={size} source={imgIcon} />
        <Text style={styles.labelSocial}>{`${t(
          'SIGN_SOCIAL',
        )} ${nameSocial}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSocial;
