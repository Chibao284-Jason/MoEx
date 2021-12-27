import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import NotifyCard from './NotifyCard';

interface NotifyListProps {}

const NotifyList = (props: NotifyListProps) => {
  const dataExample = [0, 1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.toString()}
        data={dataExample}
        renderItem={item => {
          return <NotifyCard />;
        }}
      />
    </View>
  );
};

export default NotifyList;

const styles = StyleSheet.create({
  container: {flex: 1},
});
