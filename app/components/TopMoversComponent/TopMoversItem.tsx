import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface TopMoversItemProps {
  id: number;
  symbol: string;
  price: number;
  percentChange: number;
  onPressUtilities?: () => void;
}

const TopMoversItem = (props: TopMoversItemProps) => {
  const {colors} = useTheme();
  const {id, symbol, price, percentChange, onPressUtilities} = props;
  const animatedValue = new Animated.Value(1);
  const styles = style(colors as ThemeColors);
  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{scale: animatedValue}],
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPressUtilities}
      style={styles.containerItem}>
      <Animated.View style={[styles.listItem, animatedStyle]}>
        <Image
          style={styles.logo}
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id.toString()}.png`,
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.tickerText}>{symbol}</Text>
          <Text style={styles.priceText}>
            $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View>
          <Text
            style={[
              {
                color: percentChange > 0 ? 'green' : 'red',
              },
              styles.changeText,
            ]}
            numberOfLines={1}
            selectable>
            {percentChange > 0 ? '+' : ''}
            {percentChange.toFixed(2)}%
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TopMoversItem;
