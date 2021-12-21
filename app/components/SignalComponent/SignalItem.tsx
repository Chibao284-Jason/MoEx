import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import {style} from './styles';
import {useTranslation} from 'react-i18next';
interface SignalItemProps {
  onPressSignal?: () => void;
}

const SignalItem = (props: SignalItemProps) => {
  const {onPressSignal} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerBody}>
      <TouchableOpacity style={styles.viewCard} onPress={onPressSignal}>
        <View style={{width: '20%', alignItems: 'center'}}>
          <AutoHeightImage
            source={{
              uri: 'https://s2.coinmarketcap.com/static/img/coins/200x200/4066.png',
            }}
            width={30}
          />
        </View>

        <View style={{width: '40%'}}>
          <Text style={styles.textHeading}>CHZ (Chiliz)</Text>
          <Text style={styles.textDesc}>Khoảng 21 giờ trước</Text>
        </View>
        <View style={styles.viewDesc}>
          <View style={styles.viewSignalStatus}>
            <Text style={styles.textSignalStatus}>Tích cực</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignalItem;
