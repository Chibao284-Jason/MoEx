import ComingSoon from '@components/ComingSoonComponent/ComingSoon';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import Categories from '@components/MarketComponent/Categories';
import WatchList from '@components/MarketComponent/WatchList';
import TouchChangeBaseCurrency from '@components/TouchBaseComponent/TouchChangeBaseCurrency';
import ExchangeScreen from '@screens/Exchange';
import MarketScreen from '@screens/Market';
import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {style} from './styles';

const initialLayout = {width: Dimensions.get('window').width};

export default function TopTabExchange() {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Swap'},
    {key: 'second', title: 'Spot'},
  ]);
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
    first: ExchangeScreen,
    second: ComingSoon,
  });

  return (
    <SafeAreaView style={styles.containerTopTab}>
      {/* <HeaderComponent
        customButtonLeft={
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={[styles.labelStyle, {fontSize: 28, fontWeight: '700'}]}>
                Market
              </Text>
            </View>
            <View style={{justifyContent: 'flex-end', marginBottom: 3}}>
              <Text style={[styles.subTitleStyle]}>24H</Text>
            </View>
          </View>
        }
        customButtonRight={<TouchChangeBaseCurrency />}
      /> */}
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

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
