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
import {Avatar, Badge} from 'react-native-elements';

interface IButtonNotificationsProps {
  imgIcon?: ImageSourcePropType | undefined;
  onPress: () => void;
  label?: string;
  iconStyles?: ImageStyle;
  buttonStyle?: ViewStyle;
}

const ButtonNotifications = (props: IButtonNotificationsProps) => {
  const {onPress, imgIcon, label, iconStyles, buttonStyle} = props;
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <View>
        <Avatar source={imgIcon} containerStyle={{width: 25, height: 25}} />

        <Badge
          status="error"
          value={'+5'}
          containerStyle={{position: 'absolute', top: -10, right: -10}}
        />
      </View>
      {label && <Text style={styles.labelStyles}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default ButtonNotifications;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  img: {width: 35, height: 40},
  labelStyles: {},
});
