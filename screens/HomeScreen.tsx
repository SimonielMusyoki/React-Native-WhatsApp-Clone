import * as React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View } from '../components/Themed';
import { Ionicons} from '@expo/vector-icons';
import ChatScreen from './ChatsScreen';
import StatusScreen from './StatusScreen';
import CallsScreen from './CallsScreen';


const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function HomeScreen(){

    const states = {
      index: 0,
      routes: [
          {key: 'chats', title: 'CHATS'},
          {key: 'status', title: 'STATUS'},
          {key: 'calls', title: 'CALLS'}
      ],
    }
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
      {key: 'chats', title: 'CHATS'},
      {key: 'status', title: 'STATUS'},
      {key: 'calls', title: 'CALLS'}
    ]);
      
      return (
          <TabView
              navigationState={{index, routes}}
              renderScene={SceneMap({
                  chats: ChatScreen,
                  status: StatusScreen,
                  calls: CallsScreen,
              })}
              onIndexChange={index => setIndex(index)}
              initialLayout={{height: 100, width: initialLayout.width}}
              renderTabBar={props =>
                  <TabBar
                      {...props}
                      indicatorStyle={{ height: 2, backgroundColor: '#009999' }}
                      tabStyle={styles.bubble}
                      labelStyle={styles.noLabel}
                      activeColor="#009999"
                      style={{
                        backgroundColor: 'rgba(26, 26, 0, 0.9)',
                      }}
                  />
              }
          />
      );
  }

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  noLabel: {
  },
  bubble: {
      // backgroundColor: '#000',
    
  },
});