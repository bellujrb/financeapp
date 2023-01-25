import React from "react";
import { View, Image } from 'react-native'
import { ill } from "../../styles/homeaddons/styles";

export function Illustration(){

    return (
        <View style={ill.align}>
            <Image
                source={require('../../assets/homeaddons/girlandcube.png')}
                style={ill.img1}/>
            <Image
                source={require('../../assets/homeaddons/cubeandarrow.png')}
                style={ill.img2}/>
        </View>
    )
}