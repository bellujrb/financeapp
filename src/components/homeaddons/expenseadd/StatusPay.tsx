import React from "react";
import { View, Text,  TouchableOpacity } from "react-native";

//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { statusp } from "../../../styles/homeaddons/expenseview/styles";

interface Props {  
    nameProduct: string,
    price: number,
    method: string,
    x: number,
    status: string,
    date: string
}
export function StatusPay(props: Props){

    return (
        <View style={statusp.rectangle}>
            <Icon name="car-sport-outline" color='#FFC965' size={24}/>
            <View style={statusp.line}/>
            
            <View>

                <View style={statusp.column}>
                    <Text style={statusp.text}>{props.nameProduct} [1/24]</Text>

                    <View style={statusp.row}>
                        <Text style={statusp.text}>R$ {props.price}.50</Text>
                        <View style={statusp.line}/>
                        <Text style={statusp.methodtext}>{props.method}</Text>
                        <Text style={statusp.cptext}>{props.x}X</Text>
                    </View>
                </View>

                <Text style={statusp.statustext}>Status de Pagamento: {props.status}</Text>
            </View>

            <View style={statusp.saround}>
                <TouchableOpacity>
                    <Text style={statusp.confirmtext} >Confirmar Pagamento</Text>
                </TouchableOpacity>
                <Text style={statusp.datetext}>{props.date}</Text>
            </View>
        </View>
    )
}