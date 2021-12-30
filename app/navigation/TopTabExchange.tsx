import TradingView from '@components/TradingViewComponent/TradingView';
import {useRoute, RouteProp} from '@react-navigation/native';
import ExchangeScreen from '@screens/Exchange';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {style} from './styles';

const initialLayout = {width: Dimensions.get('window').width};

export default function TopTabExchange() {
  const route: RouteProp<{params: {key: string}}, 'params'> = useRoute();
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'Swap', title: `${t('SWAP')}`},
    {key: 'Spot', title: `${t('SPOT')}`},
  ]);
  useEffect(() => {
    console.log('route', route.params);
    if (route && route.params && route.params.key === 'Spot') {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }, [route]);
  const renderTabBar = (props: any) => (
    <View>
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBarTopContainer}
        labelStyle={styles.labelStyle}
      />
    </View>
  );

  const renderScene = SceneMap({
    Swap: ExchangeScreen,
    Spot: TradingView,
  });

  return (
    <SafeAreaView style={styles.containerTopTab}>
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
