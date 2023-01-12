import React from 'react';
import { View, Text, Image } from 'react-native';
import { global, week } from '../../styles/home/styles';

interface Props {
    date: string,
    spent: number,
    porcent: number
    
}

export function InfoWeek( props: Props ){

    return (
        <View style={week.infospent}>

            <View style={week.circlespent}>
                <Image
                    source={require('../../../assets/utils/money.png')}
                    style={week.circlespentimg}/>
                </View>

            <View style={global.align2}>
                <Text style={week.titlespent}>Gasto do Dia</Text>
                <Text style={week.subtitlespent}>{props.date}</Text>
            </View>

            <View style={week.linespent}/>

                <View style={global.align2}>
                    <Text style={week.titlespent2}>R$ {props.spent}.00</Text>
                        
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={week.subtitlespent2}>+{props.porcent}% x </Text>
                        <Text style={week.subtitlespent21}>semana passada</Text>
                    </View>
                </View>
            </View>
    )
}