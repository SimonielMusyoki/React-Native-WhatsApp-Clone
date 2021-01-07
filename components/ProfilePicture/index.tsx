import React from 'react';
import { View, Text} from '../Themed'
import { Image, TouchableOpacity } from 'react-native';

export type ProfilePictureProps = {
    imageUri: string;
    size?: number;
}

const ProfilePicture = ({imageUri, size=60}: ProfilePictureProps) => {
    return (
        <Image 
                source={{ uri: imageUri }}
                style={{
                    width: size,
                    height: size,
                    borderRadius: size * 0.5
                }}
        />
    )
}

export default ProfilePicture;