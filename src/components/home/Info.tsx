import React from 'react';
import { View, Text } from 'react-native';
import { info } from '../../styles/home/styles';

export function Info(){
    
    return (
        <View style={info.organize}>
            <Text style={info.title}>Sua vida financeira em um app</Text>
            <Text style={info.subtitle}>Organizar sua vida financeira nunca foi tão fácil!</Text>
        </View>
    )
}