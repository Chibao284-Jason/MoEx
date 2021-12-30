import ExchangeCard from '@components/ExchangeComponent/ExchangeCard';
import {useTranslation} from 'react-i18next';
import TitleComponent from '@components/TitleComponent/TitleComponent';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {style} from './styles';

interface ExchangeProps {
  colors: ThemeColors;
}

const Exchange = (props: ExchangeProps) => {
  const {colors} = props;
  const styles = style(colors);
  const {t} = useTranslation();
  return (
    <View style={styles.containerExchange}>
      <View style={styles.viewBody}>
        <TitleComponent
          title={t('SWAP')}
          containerStyle={styles.viewTitleSwap}
        />

        <ExchangeCard label={t('SEND')} isMax={true} />
        <TouchableOpacity style={{alignItems: 'center'}}>
          <AutoHeightImage
            width={30}
            source={require('../../assets/img/swap.png')}
            style={{marginTop: 20}}
          />
        </TouchableOpacity>
        <ExchangeCard label={t('RECEIVE')} />
        <View style={styles.viewResult}>
          <View>
            <Text style={[styles.textResultLabel]}>{t('EXCHANGE_RATE')}:</Text>
          </View>
          <View>
            <Text numberOfLines={1} style={[styles.textResult]}>
              1 BTC = 1,42,937,593 VNDC
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonSwap}>
          <Text style={styles.textSwap}>{t('CONVERT')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exchange;
