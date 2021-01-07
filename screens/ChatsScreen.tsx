import { transform } from '@babel/core';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { FlatList,TouchableOpacity , Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import chats from '../data/users'

export default function ChatScreen() {

  const renderReadTicks = () => (
    <Ionicons name='checkmark-done' size={20} color='#25B1E4' />
  )

  const renderUnreadBubble = (messagesCount) => (
    <View style={styles.messageBubble}>
     <Text>{messagesCount} </Text>
    </View>
  )

  const renderItem = ({item}) => {
    return(
      <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 20,height: 70, justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={{ uri: item.imageUri}}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
          <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, height: 70, borderBottomColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ flex: 1, }}>
              {/* Message & Name */}
              <Text style={{ fontWeight: 'bold', fontSize:18}}>{item.name}</Text>
              <View style={{ flexDirection: 'row'}}>
                { item.isMe && item.isRead ? renderReadTicks() : null}
                <Text numberOfLines={1} style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize:15}}>{item.status}</Text>

              </View>
            </View>
            <View style={{ width: '18%', marginRight: 5,paddingVertical: 5 }}>
              {/* Sent Time & Bubble */}
              <Text style={{ color: '#009999'}}>3: 32PM</Text>
              <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
              {item.isMe ? null: renderUnreadBubble(item.unreadMessagesCount) }
              </View>
              
            </View>
          </View> 
      </TouchableOpacity>
    )
  }

  const renderFloatingActionButton = () => (
    <TouchableOpacity style={styles.floatingBtn}>
      <MaterialCommunityIcons name="android-messages" color="white" size={30} style={{ transform: [{ scaleX: -1}]}}/>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      { renderFloatingActionButton() }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  floatingBtn: {
    position: 'absolute', 
    bottom: 20, 
    right: 10, 
    backgroundColor: '#009999', 
    width: 60, 
    height:60, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  messageBubble: {
    width: 25, 
    height: 25, 
    backgroundColor: '#009999', 
    borderRadius: 12.5, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
