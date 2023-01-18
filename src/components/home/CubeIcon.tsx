import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { cubeicon } from "../../styles/home/styles";

interface Props {
    name: string,
    img: undefined
}

export function CubeIcon(props: Props){

    return (
        <TouchableOpacity style={cubeicon.cubeicon}>
            <Image
            source={props.img}
            style={cubeicon.icon}/>
            <Text style={{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: 12,
                color: '#787A84'
            }}>{props.name}</Text>
        </TouchableOpacity>
    )
}