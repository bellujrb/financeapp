import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Header } from "../../../components/homeaddons/global/Header";
import { Announcement } from "../../../components/homeaddons/tips/Announcement";
import { Illustration } from "../../../components/homeaddons/tips/Illustration";
import { TipsFree } from "../../../components/homeaddons/tips/TipsFree";
import { global } from "../../../styles/homeaddons/tips/styles";

export function Tips(){

    return (
        <ScrollView style={global.container} >
            <Header name="Dicas"/>
            <Illustration/>
            <Announcement/>
            <View style={global.space}/>

            <View style={global.freetipscontainer}>

                <View style={global.aligntext}>
                    <Text style={global.title}>Confira as dicas gratuitas dos nossos especialistas</Text>
                    <Text style={global.subtitle}>Mas lembresse, assinando nosso plus garante atendimento por chat para melhores dicas financeiras.</Text>
                </View>

                <Image
                source={require('../../../assets/homeaddons/arrow.png')}
                style={global.img}/>
            </View>
            <View style={global.backgroundend}>
                <ScrollView horizontal>
                    <TipsFree title="Comece a investir o quanto antes."/>
                    <TipsFree title="Invista no seu desenvolvimento."/>
                    <TipsFree title="Defina metas pequenas e grandes."/>
                    <TipsFree title="Use a tecnologia a favor."/>
                </ScrollView>
            </View>
        </ScrollView>
    )
}