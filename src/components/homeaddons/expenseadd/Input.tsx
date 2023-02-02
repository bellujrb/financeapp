import React from "react";
import { View, Text, TextInput } from 'react-native'
import { input } from "../../../styles/homeaddons/expenseadd/styles";
import { Picker } from "@react-native-picker/picker";

interface Props {
    title: string,
    category: string,
    citem1?: string,
    citem2?: string,
    citem3?: string,
}

export function Input(props: Props){

    return (
        <View style={input.align}>
            <Text>{props.title}</Text>
            <View style={input.rectangle}>
                <View style={input.pickerform}>
                    <Text style={input.title}>{props.category}</Text>
                    <Picker style={input.organizepicker}>
                        <Picker.Item label={props.citem1} value={props.citem1}/>
                        <Picker.Item label={props.citem2} value={props.citem1}/>
                        <Picker.Item label={props.citem3} value={props.citem1}/>
                    </Picker>
                </View>
                <TextInput style={input.input}
                maxLength={12}/>
            </View>
        </View>
    )
}