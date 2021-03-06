import {style} from './styles';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';

interface ButtonTitleWhiteProps {
  titleButton?: string;
  imgIcon?: ImageSourcePropType;
  titleStyle?: TextStyle;
  viewButtonStyle?: ViewStyle;
  touchButtonStyle?: ViewStyle;
  onPressButton?: () => void;
}

const ButtonTitleWhite = (props: ButtonTitleWhiteProps) => {
  const {
    titleButton,
    imgIcon,
    titleStyle,
    viewButtonStyle,
    touchButtonStyle,
    onPressButton,
  } = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={[styles.viewLogOut, viewButtonStyle]}>
      <TouchableOpacity
        style={[styles.buttonLogOut, touchButtonStyle]}
        onPress={onPressButton}>
        {imgIcon && <AutoHeightImage width={15} source={imgIcon} />}
        <Text style={[styles.textLogout, titleStyle]}>{titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTitleWhite;

const styles = StyleSheet.create({
  container: {},
});
