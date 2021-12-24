import ExchangeCard from '@components/ExchangeComponent/ExchangeCard';
import ThemeController from '@components/ThemeController';
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
  return (
    <View style={styles.containerExchange}>
      <View style={styles.viewBody}>
        <TitleComponent
          title="Quy đổi nhanh"
          containerStyle={styles.viewTitleSwap}
        />

        <ExchangeCard isMax={true} />
        <TouchableOpacity style={{alignItems: 'center'}}>
          <AutoHeightImage
            width={30}
            source={require('../../assets/img/swap.png')}
            style={{marginTop: 20}}
          />
        </TouchableOpacity>
        <ExchangeCard />
        <View style={styles.viewResult}>
          <View>
            <Text style={[styles.textResultLabel]}>Exchange rate:</Text>
          </View>
          <View>
            <Text numberOfLines={1} style={[styles.textResult]}>
              1 BTC = 1,42,937,593 VNDC
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonSwap}>
          <Text style={styles.textSwap}>Swap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exchange;
