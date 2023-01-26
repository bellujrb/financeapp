import React from "react";
import { View } from "react-native";
import { Header } from "../../../components/homeaddons/global/Header";
import { Announcement } from "../../../components/homeaddons/tips/Announcement";
import { Illustration } from "../../../components/homeaddons/tips/Illustration";
import { global } from "../../../styles/homeaddons/tips/styles";

export function Tips(){

    return (
        <View style={global.container}>
            <Header name="Dicas"/>
            <Illustration/>
            <Announcement/>
        </View>
    )
}