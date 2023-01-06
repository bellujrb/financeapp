import React from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.containerheader}>

            <View style={styles.alignitens}>

            <View style={styles.containericons}>
                <TouchableOpacity style={styles.cubeicon}/>
                <TouchableOpacity style={styles.cubeicon}/>
            </View>
            
            <View style={styles.organizetexts}>
                <Text style={styles.title}>Seja bem-vindo </Text>
                <Text style={styles.subtitle}>Belluzzo</Text>
            </View>

            </View>

            <TouchableOpacity style={styles.rectanglestate}>
                <Text style={styles.titlestate}>STATUS</Text>
                <Text style={styles.subtitlestate}>GASTO MODERADO</Text>
            </TouchableOpacity>
            
            </View>
        </View>
    )
}