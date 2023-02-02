import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { header } from "../../styles/home/styles";

//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';

interface Props {
    name?: string;
}

export function Header(props: Props){

    return (
        <View style={header.organize}>
            <View style={header.align}>

                <View style={header.row}>
                    <Text style={header.title}>Ola, Belluzzo</Text>
                    <TouchableOpacity style={header.iconsettings}>
                        <Icon name='log-out-outline' color='#FFFFFF' size={24}/>
                    </TouchableOpacity>
                </View>
                    <View style={header.row}>
                        <Text style={header.subtitle}>Despesa mensal acumulada de R$ 3.089,09</Text>
                    </View>
            </View>
        </View>
    )
}