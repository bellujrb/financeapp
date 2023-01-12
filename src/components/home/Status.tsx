import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { status } from '../../styles/home/styles';

interface Props {
    status?: string;
}

export function Status(props: Props) {

    return (
        <TouchableOpacity style={status.rectanglestate}>
            <Text style={status.titlestate}>STATUS</Text>
            <Text style={status.subtitlestate}>{props.status}</Text>
        </TouchableOpacity>
    )
}