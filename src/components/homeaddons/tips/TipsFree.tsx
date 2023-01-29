import React from "react";
import { View, Image, Text } from 'react-native'
import { free } from "../../../styles/homeaddons/tips/styles";

interface Props {
    title?: string
    icon?: any
}

export function TipsFree(props: Props){

    return (
        <View style={free.rectangle}>
            <View style={free.align}>
                <Image
                source={require('../../../assets/homeaddons/moneytip.png')}
                style={free.img1}/>
                <Text style={free.title}>{props.title}</Text>
            </View>

                <Image
                source={require('../../../assets/homeaddons/triangle.png')}
                style={free.img2}/>
        </View>
    )
}