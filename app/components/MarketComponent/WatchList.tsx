import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import {colorsTheme} from '@config';
import {IThemeState} from '@models/reducers/theme';
import React, {useState} from 'react';
import {View, TextInput, Alert, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {style} from './styles';

interface WatchListProps {}
interface IState {
  themeReducer: IThemeState;
}

const WatchList = (props: WatchListProps) => {
  const [textSearch, setTextSearch] = useState('');
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerWatchList}>
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
      <View style={styles.viewBodyWatchList}>
        <AutoHeightImage
          width={170}
          source={
            isDark
              ? require('../../assets/img/attlascoin.png')
              : require('../../assets/img/attlascoinWhite.jpg')
          }
        />
      </View>
      <ButtonTitleWhite
        viewButtonStyle={styles.viewButtonAdd}
        titleButton="Add more asset"
        imgIcon={
          isDark
            ? require('../../assets/img/addDark.png')
            : require('../../assets/img/add.png')
        }
      />
    </View>
  );
};

export default WatchList;
