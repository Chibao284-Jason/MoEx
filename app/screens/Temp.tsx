// import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
// import * as React from 'react';
// import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import MarketScreen from './Market';

// const FirstRoute = () => <MarketScreen />;

// const SecondRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
// );

// const initialLayout = {width: Dimensions.get('window').width};

// export default function TopTabBar() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);
//   const renderTabBar = (props: any) => (
//     <TabBar
//       {...props}
//       indicatorStyle={{backgroundColor: 'red', height: 3}}
//       style={{backgroundColor: 'pink'}}
//     />
//   );
//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <HeaderComponent title="abc" />
//       <TabView
//         navigationState={{index, routes}}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={initialLayout}
//         renderTabBar={renderTabBar}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
// });
