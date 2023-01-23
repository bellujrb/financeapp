import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { cubeicon } from "../../styles/home/styles";

interface Props {
    name: string,
    img: undefined,
    destiny: any;
}

export function CubeIcon(props: Props){

    return (
        <TouchableOpacity style={cubeicon.cubeicon} onPress={props.destiny}>
            <Image
            source={props.img}
            style={cubeicon.icon}/>
            <Text style={cubeicon.title}>{props.name}</Text>
        </TouchableOpacity>
    )
}