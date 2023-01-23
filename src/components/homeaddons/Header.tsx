import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { header } from "../../styles/homeaddons/styles";

export function Header(){

    return (
        <View style={header.align}> 
            <TouchableOpacity style={header.alignback}>
                <Icon name="chevron-back-outline" color='#151515' size={40}/>
            </TouchableOpacity>
        </View>
    )
}