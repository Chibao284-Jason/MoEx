import {colorsTheme} from '@config';
import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-native-paper';
import CardMarket from './CardMarket';
import {style} from './styles';

interface MarketListProps {}

const MarketList = (props: MarketListProps) => {
  const [textSearch, setTextSearch] = useState('');
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.containerMarketList}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.input}
            onChangeText={text => {
              setTextSearch(text);
            }}
            placeholderTextColor={colorsTheme.manatee}
            value={textSearch}
          />
          <TouchableOpacity onPress={() => Alert.alert('Submit Search')}>
            <Icon
              name="search"
              color={colorsTheme.manatee}
              size={25}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Asset</Text>
          <Text style={styles.textTitle}>Trend</Text>
          <View style={styles.viewTitlePrice}>
            <Text style={styles.textTitle}>Price / Change</Text>
            <AutoHeightImage
              width={10}
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png',
              }}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={item => item.toString()}
        style={{marginBottom: 70}}
        renderItem={item => {
          return <CardMarket />;
        }}
      />
    </View>
  );
};

export default MarketList;
