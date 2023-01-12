import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { cubeicon } from "../../styles/home/styles";

interface Props {
    img: any;
}

export function CubeIcon(props: Props){

    return (
        <TouchableOpacity style={cubeicon.cubeicon}>
        <Image
                source={props.img}
                style={cubeicon.iconheader}/>
        </TouchableOpacity>
    )
}