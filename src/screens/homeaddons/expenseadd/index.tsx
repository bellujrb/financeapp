import React from "react";
import { View } from "react-native";
import { Header } from "../../../components/homeaddons/Header";
import { Tip } from "../../../components/homeaddons/Tip";
import { global } from "../../../styles/homeaddons/styles";

export default function ExpenseAdd(){

    return (
        <View style={global.container}>
            <Header/>
            <Tip/>
        </View>
    )
}