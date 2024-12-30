import { View, Text } from 'react-native'
import React from 'react'
import HomeScreens from '../../../pages/HomeScreens';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursDetails from '../../../pages/cours/introduction/CoursDetails';

const Tabs = createBottomTabNavigator();

const TabsNaves = () => {
  return (
     <Tabs.Navigator   initialRouteName="Home"
     activeColor="#f0edf6"
     inactiveColor="#3e2465">
      <Tabs.Screen name='CoursDetails' component={CoursDetails} options={{
        tabBarIcon:({size, colors}) =><Icon name='home' color={colors} size={size} />
      }}/>
     </Tabs.Navigator>
  )
}

export default TabsNaves