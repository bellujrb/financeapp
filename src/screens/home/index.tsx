import React from "react";
import { View, Text, Image} from "react-native";
import { global } from "../../styles/home/styles";
import { CubeIcon } from "../../components/home/CubeIcon";

import icon1 from '../../../assets/icons/icon1.png'
import notify from '../../../assets/icons/notify.png'
import { Status } from "../../components/home/Status";
import { Info } from "../../components/home/Info";
import { InfoWeek } from "../../components/home/InfoWeek";
import { Expense } from "../../components/home/Expense";

export default function Home(){

    return (
        <View style={global.container}>
            <View style={global.containerheader}>
            <View style={global.alignitens}>

            <View style={global.containericons}>
                <CubeIcon img={icon1}/>
                <CubeIcon img={notify}/>
            </View>
            
            <View style={global.organizetexts}>
                <Text style={global.title}>Seja bem-vindo </Text>
                <Text style={global.subtitle}>Belluzzo</Text>
            </View>

            </View>
            <Status status="Gasto Moderado"/>
            </View> 

            <View style={global.align}>
                <Info spent={120}/> 
                <InfoWeek date="12/01/2023" spent={200} porcent={8.2}/>
            </View>
            
            <Text style={global.titleexpense}>Despesas Recentes</Text>
            <View style={global.align2}>

            <Expense name="Netflix" type="Assinatura" price={29} level='G. Moderado'/>
            <View style={global.align3}/>
            <Expense name="Spotify" type="Assinatura" price={12} level='G. Moderado'/>

        </View> 
        </View>
    )
}