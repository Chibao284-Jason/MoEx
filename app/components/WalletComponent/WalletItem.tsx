import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface WalletItemProps {
  label: string;
  iconRight?: any;
  isIconRight?: boolean;
  iconLeft?: ImageSourcePropType;
  onPressWalletItem?: () => void;
  isDefault?: boolean;
}

const WalletItem = (props: WalletItemProps) => {
  const {iconLeft, label, onPressWalletItem, isDefault = false} = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerWalletItem}
      onPress={
        onPressWalletItem
          ? onPressWalletItem
          : () => {
              navigation.navigate(screenName.COMING_SOON);
            }
      }>
      <View style={styles.viewIconTitle}>
        <AutoHeightImage
          width={25}
          source={iconLeft ? iconLeft : require('../../assets/img/user.png')}
        />
        <View style={styles.viewLabelItem}>
          <Text style={styles.textCategories}>{label}</Text>
          {isDefault && <Text style={styles.textDefault}>Mặc định</Text>}
        </View>
      </View>
      <View style={styles.viewRightCategories}>
        {
          <Text style={styles.textCategories}>
            ~10.043 <Text style={styles.textUnit}>đ</Text>
          </Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default WalletItem;
