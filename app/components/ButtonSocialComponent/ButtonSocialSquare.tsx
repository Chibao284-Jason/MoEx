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

const ButtonSocialSquare = (props: ButtonSocialProps) => {
  const {imgIcon, onPressButtonSocial, nameSocial, size = 30} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerButtonSocialSquare}>
      <TouchableOpacity
        style={styles.touchSocialSquare}
        onPress={onPressButtonSocial}>
        <AutoHeightImage width={size} source={imgIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSocialSquare;
