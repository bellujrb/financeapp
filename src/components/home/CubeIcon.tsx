import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { cubeicon } from "../../styles/home/styles";

interface Props {
    url: string;
}

export function CubeIcon(props: Props){

    return (
        <TouchableOpacity style={cubeicon.cubeicon}>
        <Image
                source={require(props.url)}
                style={cubeicon.iconheader}/>
        </TouchableOpacity>
    )
}