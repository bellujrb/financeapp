import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/auth";
import { header } from "../../../styles/homeaddons/expenseadd/styles";

//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';

interface Props {
    name: string;
}

export function Header(props: Props){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    return (
        <View style={header.align}> 
            <TouchableOpacity style={header.alignback} onPress={() => {
                nav.navigate('home')
            }}>
                <Icon name="chevron-back-outline" color='#151515' size={40}/>
            </TouchableOpacity>
            <Text style={header.title}>{props.name}</Text>
        </View>
    )
}