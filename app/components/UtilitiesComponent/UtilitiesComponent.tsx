import TitleComponent from '@components/TitleComponent/TitleComponent';
import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface UtilitiesComponentProps {
  isDark: boolean;
}

const UtilitiesComponent = (props: UtilitiesComponentProps) => {
  const {t} = useTranslation();
  const {isDark} = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  const dataExample = [
    {
      id: 0,
      label: 'Nạp tiền',
      screenName: '',
      img: isDark
        ? require('../../assets/img/rechargeDark.png')
        : require('../../assets/img/recharge.png'),
    },
    {
      id: 1,
      label: 'Rút tiền',
      screenName: '',
      img: isDark
        ? require('../../assets/img/withdrawalDark.png')
        : require('../../assets/img/withdrawal.png'),
    },
    {
      id: 2,
      label: 'Quy đổi',
      screenName: '',
      img: isDark
        ? require('../../assets/img/exchangeDark.png')
        : require('../../assets/img/exchange.png'),
    },
    {
      id: 3,
      label: 'Đối tác',
      screenName: '',
      img: isDark
        ? require('../../assets/img/partnerDark.png')
        : require('../../assets/img/partner.png'),
    },
    {
      id: 4,
      label: 'Earning',
      screenName: '',
      img: isDark
        ? require('../../assets/img/earningDark.png')
        : require('../../assets/img/earning.png'),
    },
    {
      id: 5,
      label: 'Starter',
      screenName: '',
      img: isDark
        ? require('../../assets/img/starterDark.png')
        : require('../../assets/img/starter.png'),
    },
    {
      id: 6,
      label: 'Membership',
      screenName: '',
      img: isDark
        ? require('../../assets/img/memberDark.png')
        : require('../../assets/img/member.png'),
    },
    {
      id: 7,
      label: 'Giới thiệu',
      screenName: '',
      img: isDark
        ? require('../../assets/img/introduceDark.png')
        : require('../../assets/img/introduce.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <TitleComponent title={t('UTILITIES')} />
      <View style={styles.viewBody}>
        {dataExample.map(item => {
          return (
            <View style={styles.viewContainerButton}>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => navigation.navigate(screenName.COMING_SOON)}>
                <AutoHeightImage source={item.img} width={25} />
                <Text numberOfLines={1} style={styles.label}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default UtilitiesComponent;
