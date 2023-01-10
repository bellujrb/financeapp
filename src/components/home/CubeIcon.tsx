import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { cubeicon } from "../../styles/home/styles";

interface Props {
    url: string;
}

export function CubeIcon(props: Props){

    let url: string;
    url = props.url;

    function require(url: string): undefined{
        let icon = require(`${url}`);
        return icon;
    }

    return (
        <TouchableOpacity style={cubeicon.cubeicon}>
        <Image
                source={require(props.url)}
                style={cubeicon.iconheader}/>
        </TouchableOpacity>
    )
}