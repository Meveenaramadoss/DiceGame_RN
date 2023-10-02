import React from 'react';
import { Text, View } from 'react-native';
import style from '../style/style';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={style.footer}>
            <Text style={style.author}>Done by Meveena Ramadoss
                <Ionicons name="md-heart" size={4} color="#ffffff" />
            </Text>
        </View>
    )
}