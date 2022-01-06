import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import {style} from './styles';
import {useTranslation} from 'react-i18next';
import {LineLarge} from '@components/LineComponent/LineLarge';
import dayjs from 'dayjs';
interface CardHistoryProps {
  onPressHistory?: () => void;
}
const dateTemp = new Date();
const CardHistory = (props: CardHistoryProps) => {
  const {onPressHistory} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);

  return (
    <TouchableOpacity style={styles.viewCard} onPress={onPressHistory}>
      <AutoHeightImage
        source={{
          uri: 'https://attlas-cdn.sgp1.cdn.digitaloceanspaces.com/attlas.io/public/images/coins/128x128/617.png',
        }}
        width={40}
        style={styles.viewImgCoin}
      />
      <View style={styles.viewInformationCard}>
        <View style={styles.viewContainerCard}>
          <View style={styles.viewDesc}>
            <Text style={styles.textHeading}>Trả lãi stacking</Text>
            <Text style={styles.textDesc} numberOfLines={1}>
              {dayjs(dateTemp).format('HH:mm:ss YYYY-MM-DD')}
            </Text>
          </View>
          <View style={[styles.viewSignalStatus]}>
            <Text style={[styles.textSignalStatus]} numberOfLines={1}>
              +3.32 VNDC
            </Text>
            <Text style={styles.textLabelStatus(true)}>{t('Thành công')}</Text>
          </View>
        </View>
        <LineLarge sizeLine={1} lineStyle={styles.lineStyles} />
      </View>
    </TouchableOpacity>
  );
};

export default CardHistory;
