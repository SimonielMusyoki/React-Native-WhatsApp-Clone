import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import { HomeScreenParamList } from '../types';

const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

export default function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: 'WhatsApp',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 20}}>
              <TouchableOpacity style={{ marginHorizontal: 10}}>
                <Ionicons name='search' size={30} color='#fff' />
              </TouchableOpacity>
              <TouchableOpacity  style={{ marginHorizontal: 10}}>
                <MaterialCommunityIcons name='dots-vertical' size={30} color='#fff' />
              </TouchableOpacity>
            </View>
          ),
          headerTitleStyle: {
            fontSize: 22,
          }
        }}
      />
    </HomeScreenStack.Navigator>
  );
}