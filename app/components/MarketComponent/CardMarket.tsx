import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {SvgUri} from 'react-native-svg';
import {style} from './styles';
interface CardMarketProps {}

const CardMarket = (props: CardMarketProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.viewCardCoin}
      onPress={() => navigation.navigate(screenName.COMING_SOON as never)}>
      <View style={styles.viewImgCoin}>
        <AutoHeightImage
          width={30}
          source={{
            uri: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png',
          }}
          style={styles.imgCoin}
        />
        <View>
          <Text style={styles.textNameCoin}>BTC</Text>
          <Text style={styles.textTitle}>Bitcoin</Text>
        </View>
      </View>
      <View style={styles.viewSvg}>
        <SvgUri
          width="100"
          height="50"
          uri={
            'https://s3.coinmarketcap.com/generated/sparklines/web/1d/2781/1.svg'
          }
        />
        <View />
      </View>
      <View style={styles.viewPricePercent}>
        <Text style={styles.textNameCoin}>51,060,91</Text>
        <View style={styles.viewUnit}>
          <Text style={styles.textTitle}>USDT</Text>
          <Text style={styles.textPercent}>+2.3%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMarket;
