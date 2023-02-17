import React, { useContext, useEffect } from "react";
import { View, StatusBar } from "react-native";
import { global } from "../../styles/home/styles";
import { CubeIcon } from "../../components/home/CubeIcon";
import { Header } from "../../components/home/Header";
import { AppContext } from "../../context/context";

import add from '../../assets/utils/add.png';
import viewd from '../../assets/utils/viewd.png';
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/auth";
import { Info } from "../../components/home/Info";
import { Expense } from "../../components/home/Expense";
import { BuyDate } from "../../components/home/BuyDate";
import { TipsFinance } from "../../components/home/TipsFinance";
import { StackNavigationProp } from "@react-navigation/stack";

export default function Home(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();

    const context = useContext(AppContext);
    
    useEffect(() => {

    }, [context])
    

    return (
        <View style={global.container}>
            <StatusBar backgroundColor={'#FFC965'} barStyle="light-content"/>
            <Header expense={context?.totalExpense} name={context?.name}/>
            <View style={global.alignitens}>
                <CubeIcon name="Historico" icon="ios-pricetags-outline" destiny={() => {
                    nav.navigate('expenseview');
                }}/>
                <CubeIcon name="Adicionar" icon="ios-cash-outline" destiny={() => {
                    nav.navigate('expenseadd')
                }}/>
            </View>
            <Info/>
            <Expense price={context?.paids} quantity={context?.quantitypaids}/>
            <BuyDate numberBuy={context?.daybuy}/>
            <TipsFinance/>
        </View>
    )
}