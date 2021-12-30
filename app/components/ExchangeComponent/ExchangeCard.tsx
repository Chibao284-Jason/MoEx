import AutoHeightImage from 'react-native-auto-height-image';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface ExchangeCardProps {
  isMax?: boolean;
  label: string;
}

const ExchangeCard = (props: ExchangeCardProps) => {
  const {isMax = false, label} = props;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerExchangeCard}>
      <View style={styles.viewBodyCard}>
        <View style={styles.viewBalance}>
          <Text style={styles.textLabel}>{label}</Text>
          <Text style={styles.textLabel}>Số dư</Text>
        </View>
        <View style={styles.viewBalanceContent}>
          <Text style={styles.textNumber}>0.0</Text>
          <View style={styles.viewBalance}>
            {isMax && (
              <TouchableOpacity style={styles.viewMax}>
                <Text style={styles.textMax}>Max</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.viewBalance}>
              <AutoHeightImage
                width={25}
                source={{
                  uri: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png',
                }}
                style={styles.viewIcon}
              />
              <Text style={styles.textNameCoin}>BTC</Text>
              <AutoHeightImage
                width={10}
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExchangeCard;
