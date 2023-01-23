import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/auth";
import { header } from "../../styles/homeaddons/styles";

//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';

export function Header(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    return (
        <View style={header.align}> 
            <TouchableOpacity style={header.alignback} onPress={() => {
                nav.navigate('home')
            }}>
                <Icon name="chevron-back-outline" color='#151515' size={40}/>
            </TouchableOpacity>
        </View>
    )
}