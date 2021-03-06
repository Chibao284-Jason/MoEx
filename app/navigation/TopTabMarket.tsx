import React from 'react';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import Categories from '@components/MarketComponent/Categories';
import WatchList from '@components/MarketComponent/WatchList';
import TouchChangeBaseCurrency from '@components/TouchBaseComponent/TouchChangeBaseCurrency';
import MarketScreen from '@screens/Market';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {style} from './styles';
import {useTranslation} from 'react-i18next';

// const FirstRoute = () => <MarketScreen />;

// const SecondRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
// );

const initialLayout = {width: Dimensions.get('window').width};

export default function TopTabMarket() {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Spot', title: `${t('SPOT')}`},
    {key: 'WatchList', title: `${t('WATCH_LIST')}`},
    {key: 'Categories', title: `${t('CATEGORIES')}`},
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBarTopContainer}
      labelStyle={styles.labelStyle}
    />
  );

  const renderScene = SceneMap({
    Spot: MarketScreen,
    WatchList: WatchList,
    Categories: Categories,
  });

  return (
    <SafeAreaView style={styles.containerTopTab}>
      <HeaderComponent
        customButtonLeft={
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={[styles.labelStyle, {fontSize: 28, fontWeight: '700'}]}>
                {t('MARKET')}
              </Text>
            </View>
            <View style={{justifyContent: 'flex-end', marginBottom: 3}}>
              <Text style={[styles.subTitleStyle]}>24H</Text>
            </View>
          </View>
        }
        customButtonRight={<TouchChangeBaseCurrency />}
      />
      <TabView
        lazyPreloadDistance={300}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
