import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type FloatingActionButtonProps = {
    iconName: any;
    extraStyle: object;
}

const FloatingActionButton = ({iconName, extraStyle}:FloatingActionButtonProps) => {
    return (
        <TouchableOpacity style={{...styles.floatingBtn, ...extraStyle}}>
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