import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { 
    View, 
    FlatList, 
    StyleSheet, 
    ImageBackground, 
    Dimensions,
    KeyboardAvoidingView
 } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from '../components/Themed';
import images from '../constants/images';
import chats from '../data/chats';

const MessagesScreen = () => {
    const width =Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [messageText, setMessageText] = useState('')

    const renderItem = ({ item }) => {
        const align = item.isMe ? "flex-end" : "flex-start";
        const color = item.isMe ? "#1D5348" : "rgba(26, 26, 0, 0.9)";
        return (
            <View style={{ alignItems: align}}>
                <View style={{ maxWidth: '70%', minWidth: '35%', margin: 5, }}>
                    <View style={{ backgroundColor: color, borderRadius: 20, padding: 10, marginLeft: 10,opacity: 0.9}}>
                        <Text style={{  fontSize: 16}}>{item.text}</Text>
                        <View style={{ position:'relative',right: 0, bottom:0, flexDirection: 'row', alignSelf: 'flex-end' }}>
                            <Text style={{fontSize: 14, opacity: 0.9}}>2: 22PM </Text>
                            { item.isMe ? <Ionicons name="checkmark-done" size={20} color="#25B1E4" />  : null }
                        </View>

                    </View>
                    
                </View>
            </View>
            
        )
    }

    const renderInputView= () => (
        <KeyboardAvoidingView style={{ flexDirection: 'row', marginBottom: 50}} behavior="padding">
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "#2C2C2E", marginHorizontal: 10, padding: 10, borderRadius: 25}}>
                <MaterialIcons name="emoji-emotions" size={30} color="rgba(255,255,255, 0.5)" style={{ paddingHorizontal: 5}} />
                <TextInput 
                    placeholder='Type a Message' 
                    placeholderTextColor="rgba(255,255,255, 0.8)" 
                    onChange = {value => setMessageText(value) }
                    value={messageText}
                    style={{
                        fontSize: 20,
                        flex: 1
                    }}/>
                <AntDesign name="paperclip" size={30} color="rgba(255,255,255, 0.5)"/>
                <MaterialCommunityIcons name="camera" size={30} color="rgba(255,255,255, 0.5)"  style={{ paddingHorizontal: 5}}/>
            </View>
            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#009999", justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons name="microphone" size={30} color="rgba(255,255,255, 0.9)" />
            </View>
        </KeyboardAvoidingView>
    )
    return (
        <View style={styles.container}>
            <ImageBackground
                source= {images.wallpaper}
                resizeMode = 'cover'
                style={{
                    width: width,
                    height: height
                }}
            >
                <View style={{ flex: 1, marginTop: 40,}}>
                    <View style={{ alignSelf: 'center', backgroundColor: '#000', width: '20%', marginTop: 5, borderRadius: 20, opacity: 0.7}}>
                        <Text style={{ padding: 10, textAlign: 'center'}}>TODAY</Text>
                    </View>
                    <FlatList 
                        data={chats}
                        keyExtractor={item => item.id.toString()}
                        renderItem= {renderItem}
                    />
                </View>
                { renderInputView() }
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default MessagesScreen; 