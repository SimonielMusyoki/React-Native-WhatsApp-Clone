import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import contacts from '../data/users';
import ProfilePicture from '../components/ProfilePicture';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from '../components/Themed';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const ContactsScreen = () => {

    const renderStaticComponents = () => {
        return (
        <View>
            <View style={styles.container}>
                <View style={{width: 50, height: 50, justifyContent: 'center', alignItems:'center', margin: 5}}>
                    <View style={{ width: 50, height: 50, backgroundColor: '#009999',  borderRadius: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcons name='people' size={30} color='#fff' />
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>New Group</Text>
                </View>
            </View>
            <View style={{...styles.container,}}>
                <View style={{width: 50, height: 50, justifyContent: 'center', alignItems:'center', margin: 5}}>
                    <View style={{ width: 50, height: 50, backgroundColor: '#009999',  borderRadius: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcons name="person-add"  size={30} color='#fff' />
                    </View>
                </View>
                <View style={{...styles.innerContainer, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.title}>New Contact</Text>
                    <Ionicons name="qr-code-sharp" size={30} color='#fff' style={{ marginRight: 20, opacity: 0.8}}/>
                </View>
            </View>
        </View>
        )
    }

    const renderItem = ({item}) => (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ProfilePicture imageUri={item.imageUri} size={40} />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text  numberOfLines={1} style={styles.status}>{item.status}</Text>
            </View>
        </View>
    )
    return (
        <View>
            <FlatList 
                data={contacts}
                keyExtractor= {item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={ renderStaticComponents()}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', 
        margin: 5,
    },
    imageContainer: {
        width: 50,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    status: {
        fontSize: 18,
        opacity: 0.8
    },
})

export default ContactsScreen;