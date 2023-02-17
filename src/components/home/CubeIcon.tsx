import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { cubeicon } from "../../styles/home/styles";

//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';

interface Props {
    name: string,
    icon: string,
    destiny: any;
}

export function CubeIcon(props: Props){

    return (
        <TouchableOpacity style={cubeicon.cubeicon} onPress={props.destiny}>
            <View style={cubeicon.cicle}>
            <Icon name={props.icon} size={22} color='FFC965'/>
            </View>
            <Text style={cubeicon.title}>{props.name}</Text>
        </TouchableOpacity>
    )
}