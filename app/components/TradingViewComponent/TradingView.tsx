import {colorsTheme} from '@config';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import WebView from 'react-native-webview';

interface TradingViewProps {}

const TradingView = (props: TradingViewProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://vn.tradingview.com/chart/'}}
        style={{
          marginTop: 20,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}>
        {visible && (
          <ActivityIndicator size={'large'} color={colorsTheme.persianBlue} />
        )}
      </WebView>
    </SafeAreaView>
  );
};

export default TradingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
