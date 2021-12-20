import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface IButtonUtilitiesProps {
  imgIcon?: ImageSourcePropType;
  onPress: () => void;
  label?: string;
  iconStyles?: ImageStyle;
  buttonStyle?: ViewStyle;
}

const ButtonUtilities = (props: IButtonUtilitiesProps) => {
  const {onPress, imgIcon, label, iconStyles, buttonStyle} = props;
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      {imgIcon && <Image source={imgIcon} style={[styles.img, iconStyles]} />}
      {label && <Text style={styles.labelStyles}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default ButtonUtilities;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  img: {width: 35, height: 40},
  labelStyles: {},
});
