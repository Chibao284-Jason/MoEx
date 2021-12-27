import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {style} from './styles';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import AutoHeightImage from 'react-native-auto-height-image';
import {FlatList} from 'react-native-gesture-handler';
import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
interface WalletVoucherProps {}
interface IVoucherProps {
  onPressVoucher?: () => void;
}
const Voucher = (props: IVoucherProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={[0, 1]}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      contentContainerStyle={{paddingHorizontal: 10}}
      keyExtractor={item => item.toString()}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{margin: 5}}
            onPress={() =>
              navigation.navigate(screenName.COMING_SOON as never)
            }>
            <AutoHeightImage
              source={require('../../assets/img/voucherExample.jpeg')}
              width={250}
              style={{borderRadius: 8}}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const WalletVoucher = (props: WalletVoucherProps) => {
  const [isShow, setIsShow] = useState(true);
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {t} = useTranslation();
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <View style={styles.container}>
      <View style={styles.previewTotal}>
        <TouchableOpacity
          style={styles.totalPercentEyes}
          onPress={() => toggleShow()}>
          <Text style={styles.textTotal}>{t('TOTAL_ASSETS')}</Text>
          <AutoHeightImage
            source={require('../../assets/img/increase.png')}
            width={30}
          />
          <Text style={styles.textPercent}>0 %</Text>
          <AutoHeightImage
            source={
              isShow
                ? require('../../assets/img/eye.png')
                : require('../../assets/img/closeEye.png')
            }
            width={20}
            style={styles.imgEye}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.textTotalMoney}>
            {isShow ? '~0.42' : '*********'}{' '}
            <Text style={styles.textUnit}>{isShow ? '$' : ''}</Text>
          </Text>
        </View>
      </View>
      <Voucher />
    </View>
  );
};

export default WalletVoucher;
