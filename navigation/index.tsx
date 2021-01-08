import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text,Image } from 'react-native';
import users from '../data/users';
import ContactsScreen from '../screens/ContactsScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import MessagesScreen from '../screens/MessagesScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const renderHeaderLeft = () => {
  const navigation = useNavigation();
    return(
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity 
          style={{ margin: 10}}
          onPress={()=> navigation.goBack() }
        >
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={{ marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold'}}>Select Contacts</Text>
          <Text style={{ color: '#fff', fontSize: 15,}}>{users.length} contacts</Text>
        </View>
        
      </View>
    )
  }
  const renderMessagesHeaderLeft = () => {
    const navigation = useNavigation();
    const route = useRoute();
      return(
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity 
            style={{ margin: 10}}
            onPress={()=> navigation.goBack() }
          >
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
          <View style={{ width: 40, justifyContent:'center', alignItems: 'center'}}>
            <Image 
              source={{ uri: route.params.imageUri}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          </View>
          
          <View style={{ marginLeft: 10, justifyContent: 'center'}}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold'}}>{route.params.name}</Text>
            <Text style={{ color: '#fff', fontSize: 15,}}>last seen today at 9:08 AM</Text>
          </View>
          
        </View>
      )
    }

  const renderHeaderRight = () => (
    <View style={{ flexDirection: 'row'}}>
      <Ionicons name="search" size={30} color="#fff" style={{ marginHorizontal: 5 }}/>
      <MaterialCommunityIcons name="dots-vertical" size={30} color="#fff" style={{ marginHorizontal: 5 }}/>
    </View>
  )

  const renderMessagesHeaderRight = () => (
    <View style={{ flexDirection: 'row'}}>
      <MaterialCommunityIcons name="phone-plus" size={30} color="#fff" style={{ marginHorizontal: 5 }}/>
      <MaterialCommunityIcons name="dots-vertical" size={30} color="#fff" style={{ marginHorizontal: 5 }}/>
    </View>
  )



function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen 
        name="Messages" 
        component={MessagesScreen} 
        options={({route,navigation })=>({ 
          headerLeft: renderMessagesHeaderLeft,
          headerRight:renderMessagesHeaderRight,
          title: ''
        }) }
      />
      <Stack.Screen 
        name="Contacts" 
        component={ContactsScreen} 
        options={{ 
          title: '',
          headerLeft: renderHeaderLeft,
          headerRight:renderHeaderRight
        }} 
      />
    </Stack.Navigator>
  );
}
