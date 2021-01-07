import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Call from '../components/Call';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import calls from '../data/calls';
import FloatingActionButton from '../components/FloatingActionButton';

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={calls}
        keyExtractor={ item => item.id}
        renderItem={
          ({item}) => <Call imageUri={item.imageUri} name={item.name} callTime={item.callTime} callType={item.callType} />
        }
      />
      <View style={styles.buttons}>
        <FloatingActionButton  iconName="video" extraStyle={styles.pencil}/>
        <FloatingActionButton iconName="phone-plus" extraStyle={styles.camera}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  title: {
    fontSize: 20,

    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttons:{
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
  },
  pencil: {
    backgroundColor: 'rgba(26, 26, 0, 0.9)',
  },
  camera: {
    backgroundColor: '#009999',
  },
});
