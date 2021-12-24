import React from 'react';
import {View, Dimensions, Animated, ScrollView} from 'react-native';
import styles from './styles';
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const screenWidth = Dimensions.get('window').width;
const ScrollBottom: React.FC = () => {
  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'extend',
  });

  return (
    <ScrollView style={styles.container}>
      <Animated.View
        style={{
          width: screenWidth,
          height: headerHeight,
          backgroundColor: 'red',
        }}
      />
      <ScrollView
        style={styles.viewDetail}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {/* Something... */}
        <View style={{backgroundColor: 'aqua', width: 10}} />
      </ScrollView>
    </ScrollView>
  );
};

export default ScrollBottom;
