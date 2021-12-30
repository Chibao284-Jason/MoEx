import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface MenuButtonProps {
  label: string;
  iconRight?: any;
  isIconRight?: boolean;
  iconLeft?: ImageSourcePropType;
  onPressMenuButton?: () => void;
}

const MenuButton = (props: MenuButtonProps) => {
  const {
    isIconRight = true,
    iconRight,
    iconLeft,
    label,
    onPressMenuButton,
  } = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerMenuButton}
      onPress={
        onPressMenuButton
          ? onPressMenuButton
          : () => {
              navigation.navigate(screenName.COMING_SOON as never);
            }
      }>
      <View style={styles.viewIconTitle}>
        <AutoHeightImage
          width={25}
          source={iconLeft ? iconLeft : require('../../assets/img/user.png')}
        />
        <Text style={styles.textCategories}>{label}</Text>
      </View>
      <View style={styles.viewRightCategories}>
        <View style={styles.iconNearRight}>{iconRight}</View>
        {isIconRight && (
          <AutoHeightImage
            width={25}
            source={require('../../assets/img/rightMenu.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
