import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import FloatingActionButton from '../components/FloatingActionButton';
import { Text, View } from '../components/Themed';
import data from '../data/users'


let updateMinutes = 1;

const renderHeader = () => {
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', width: '60%',height: 80, alignItems:'center'}}>
                <View style={{ width: 71, height: 71, borderRadius: 35.5, padding: 3}}>
                
                <Image 
                    source={{ uri: 'https://simonielmusyoki.com/images/user-thumb/musyox.jpg' }}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 35
                    }}
                />
                <View style={styles.statusAdd}>
                    <Entypo name='plus' size={20} color='white' />
                </View>
                </View>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10, }}>
                    <Text style={styles.title}>My status</Text>
                    <Text style={styles.time}>Tap to add status update</Text>
                    {/* <View style={styles.separator}></View> */}
                </View>
                
            </View>
            <Text style={{...styles.time, marginLeft: 10, }}>Recent updates</Text>
        </TouchableOpacity>
        
    )
}

const renderItem = ({ item}) => {
    updateMinutes += 2;
    return (
        <TouchableOpacity style={{ flexDirection: 'row',height: 80, alignItems:'center'}}>
            <View style={styles.imgContainer}>

            
            <Image 
                source={{ uri: item.imageUri }}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 35
                }}
            />
            </View>
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10, borderBottomColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 0.2,paddingBottom: 12}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.time}>{updateMinutes} minutes ago</Text>
                {/* <View style={styles.separator}></View> */}
            </View>
            
        </TouchableOpacity>
    )
}

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data = {data}
        keyExtractor={ item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader()}
      />
      <View style={styles.buttons}>
        <FloatingActionButton  iconName="pencil" extraStyle={styles.pencil}/>
        <FloatingActionButton iconName="camera" extraStyle={styles.camera}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pencil: {
    backgroundColor: 'rgba(26, 26, 0, 0.9)',
  },
  camera: {
    backgroundColor: '#009999',
  },
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
  imgContainer: { 
    width: 71, 
    height: 71, 
    borderRadius: 35.5, 
    borderColor: '#009999', 
    borderWidth: 3, 
    padding: 3, 
    justifyContent:'center', 
    alignItems: 'center'
  },
  time:{
    fontSize: 18,
    opacity: 0.7
  },
  statusAdd:{ 
    position: 'absolute',
    bottom: 7,
    right: 7,
    width: 20, 
    height: 20, 
    borderRadius: 20, 
    backgroundColor: 'teal', 
    justifyContent: 'center', 
    alignItems:'center'
  },
  buttons:{
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
  }
});
