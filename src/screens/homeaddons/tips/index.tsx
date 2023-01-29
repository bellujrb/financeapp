import React from "react";
import { View, Text, Image } from "react-native";
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

            <View style={global.freetipscontainer}>

                <View style={global.aligntext}>
                    <Text style={global.title}>Confira as dicas gratuitas dos nossos especialistas</Text>
                    <Text style={global.subtitle}>Mas lembresse, assinando nosso plus garante atendimento por chat para melhores dicas financeiras.</Text>
                </View>

                <Image
                source={require('../../../assets/homeaddons/arrow.png')}
                style={global.img}/>

            </View>
        </View>
    )
}