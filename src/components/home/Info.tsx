import React from 'react';
import { Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { info } from '../../styles/home/styles';

interface Props {
    spent: number;
}

export function Info(props: Props){
    
    return (
        <LinearGradient colors={['#DCDCDC', '#5857CD']}style={info.gradiantRectangle}>
            <Text style={info.titlegradiant}>Seu gasto</Text>
            <Text style={info.subtitlegradiant}>{props.spent}.00</Text>
        </LinearGradient>
    )
}