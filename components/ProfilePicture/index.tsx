import React from 'react';
import { View, Text} from '../Themed'
import { Image, TouchableOpacity } from 'react-native';

export type ProfilePictureProps = {
    imageUri: string;
}

const ProfilePicture = ({imageUri}: ProfilePictureProps) => {
    return (
        <Image 
                source={{ uri: imageUri }}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 35
                }}
        />
    )
}

export default ProfilePicture;