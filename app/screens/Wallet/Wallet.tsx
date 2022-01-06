import {LineLarge} from '@components/LineComponent/LineLarge';
import TitleComponent from '@components/TitleComponent/TitleComponent';
import ButtonDepositWithdraw from '@components/WalletComponent/ButtonDepositWithdraw';
import WalletItem from '@components/WalletComponent/WalletItem';
import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
const Wallet = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const [isShow, setIsShow] = useState(true);
  const navigation = useNavigation();
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <ScrollView style={styles.containerWallet}>
      <View style={[styles.viewBodyTop]}>
        <View style={styles.previewTotal}>
          <TouchableOpacity
            style={styles.totalPercentEyes}
            onPress={() => toggleShow()}>
            <Text style={styles.textTotal}>{t('TOTAL_ASSETS')}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textTotalMoney}>
              {isShow ? '~0.42' : '*********'}{' '}
              <Text style={styles.textUnit}>{isShow ? '$' : ''}</Text>
            </Text>
          </View>
          <LineLarge sizeLine={0.5} lineStyle={styles.lineStyle} />
          <Text style={styles.textAnalysis}>
            Phân tích lời/lỗ (PNL): <Text style={styles.textPercent}>0 %</Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <ButtonDepositWithdraw label={t('DEPOSIT')} />
            <ButtonDepositWithdraw label={t('WITHDRAW')} />
          </View>
        </View>
      </View>
      <View style={[styles.viewDetail]}>
        <View>
          <TitleComponent
            title={t('WALLET_LIST')}
            subTitle={t('HISTORY')}
            isSubtitle
            subTitleStyle={styles.labelHistory}
            onPressSubTitle={() =>
              navigation.navigate(screenName.HISTORY as never)
            }
          />
          <View style={styles.viewWalletList}>
            <WalletItem
              label={t('SPOT_WALLET')}
              isDefault
              iconLeft={require('../../assets/img/wallSpot.png')}
            />
            <WalletItem label={t('BROKER_WALLET')} />
            <WalletItem label={t('EARN_WALLET')} />
            <WalletItem label={t('MEMBERSHIP_WALLET')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;
