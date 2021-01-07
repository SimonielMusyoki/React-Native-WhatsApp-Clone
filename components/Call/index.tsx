import React from 'react';
import { View, Text} from '../Themed'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type CallProps = {
    imageUri: string;
    name: string;
    callType: string;
    callTime:string;
}

const Call = ({imageUri, name, callType,callTime}:CallProps) => {

    function renderCallIcon()  {
        if(callType == 'outgoing'){
            return <MaterialCommunityIcons name='arrow-top-right' size={30} color="#009999" />
        }else if (callType == 'incoming'){
            return <MaterialCommunityIcons name='arrow-bottom-left' size={30} color="#009999" />
        }else{
            return <MaterialCommunityIcons name='arrow-bottom-left' size={30} color='rgba(255, 0, 0, 0.7)' />
        }
    }  
    return ( 
        <TouchableOpacity style={styles.container}>
            <ProfilePicture imageUri= {imageUri} />
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems:'center'}}>
                        {renderCallIcon()}
                        <Text style={{ fontSize: 19, opacity: 0.8}}> {callTime}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='phone' size={30} color="#009999" />
                </TouchableOpacity>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        marginVertical: 12,
    },
    innerContainer:{
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 12,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)', 
        borderWidth: 0.2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Call;