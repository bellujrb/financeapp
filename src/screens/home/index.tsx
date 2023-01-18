import React, { useContext, useEffect } from "react";
import { View, Text, Image} from "react-native";
import { global } from "../../styles/home/styles";
import { CubeIcon } from "../../components/home/CubeIcon";
import { Header } from "../../components/home/Header";
import { AppContext } from "../../services/context/context";

import add from '../../assets/utils/add.png';
import viewd from '../../assets/utils/viewd.png';

export default function Home(){

    const context = useContext(AppContext);
    
    useEffect(() => {

    }, [context])
    

    return (
        <View style={global.container}>
            <Header/>
            
            <View style={global.alignitens}>
                <CubeIcon name="Ver Despesas" img={add}/>
                <CubeIcon name="Adicionar Despesa" img={viewd}/>
            </View>

        </View>
    )
}