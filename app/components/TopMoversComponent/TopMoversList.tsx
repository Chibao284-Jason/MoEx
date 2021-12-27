import TitleComponent from '@components/TitleComponent/TitleComponent';
import {colorsTheme} from '@config';
import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
import TopMoversItem from './TopMoversItem';

interface TopMoversListProps {
  isDark: boolean;
}

const TopMoversList = (props: TopMoversListProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {isDark} = props;
  const navigation = useNavigation();
  return (
    <View>
      <TitleComponent
        title={t('TOP_MOVERS')}
        subTitle="24H"
        isSubtitle={true}
        subTitleStyle={styles.subTitleStyle}
      />
      <LinearGradient
        colors={
          !isDark
            ? ['#FFFFFF', '#F4F4F6', '#F4F4F6', '#F4F4F6', '#FFFFFF']
            : [colorsTheme.blue_black, colorsTheme.blue_black]
        }
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentStyle}
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => {
            return (
              <TopMoversItem
                id={item}
                percentChange={0.1}
                price={12.3}
                symbol="BTC"
                onPressUtilities={() =>
                  navigation.navigate(screenName.COMING_SOON as never)
                }
              />
            );
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default TopMoversList;
