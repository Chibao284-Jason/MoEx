import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';

const Tab = createMaterialTopTabNavigator();
const Exam = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.text}</Text>
    </View>
  );
};

function MyTabs() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent title="abc" />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarItemStyle={{width: 100, height: 10}}
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarLabelStyle: {fontSize: 12},
            tabBarStyle: {backgroundColor: 'powderblue'},
            tabBarScrollEnabled: true,
          }}>
          <Tab.Screen
            name="Feed"
            component={() => <Exam text="feex" />}
            options={{tabBarLabel: 'Home'}}
          />
          <Tab.Screen
            name="Notifications"
            component={() => <Exam text="Notifications" />}
            options={{tabBarLabel: 'Updates'}}
          />
          <Tab.Screen
            name="Profile"
            component={() => <Exam text="Profile" />}
            options={{tabBarLabel: 'Profile'}}
          />
          <Tab.Screen
            name="Profile1"
            component={() => <Exam text="Profile" />}
            options={{tabBarLabel: 'Profile'}}
          />
          <Tab.Screen
            name="Profile2"
            component={() => <Exam text="Profile" />}
            options={{tabBarLabel: 'Profile'}}
          />
        </Tab.Navigator>
        <TouchableOpacity onPress={() => alert('acb')}>
          <Text>button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default MyTabs;
