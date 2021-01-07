import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export type FloatingActionButtonProps = {
    iconName: any;
    extraStyle: object;
    onPress?: ()=>void
}

const FloatingActionButton = ({iconName, extraStyle, onPress}:FloatingActionButtonProps) => {
    // const navigation = useNavigation();

    // function onPress() {
    //     navigation.navigate('Contacts');
    // }
    return (
        <TouchableOpacity style={{...styles.floatingBtn, ...extraStyle}} onPress={onPress}>
            <MaterialCommunityIcons name={iconName} color="white" size={30}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    floatingBtn: {        
        marginVertical: 10,
        width: 60, 
        height:60, 
        borderRadius: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
});

export default FloatingActionButton;