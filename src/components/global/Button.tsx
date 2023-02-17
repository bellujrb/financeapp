import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { button } from "../../styles/auth/styles";

interface Props {
    text: string;
    destiny?: any;
}

export function Button(props: Props){

    let widthAnimated: number | any;

    widthAnimated = useRef(new Animated.Value(300)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const styles = StyleSheet.create({
        input:{
            width: widthAnimated,
            height: 54,
        
            backgroundColor: '#FFC965',
            borderRadius: 60,
                        
            justifyContent: 'center',
            alignItems: 'center',

        }
    })

    const animatedLogin = () => {

        return new Promise((resolve) => {
            Animated.sequence([
                Animated.timing(widthAnimated, {
                    toValue: 100,
                    duration: 2000,
                    useNativeDriver: false
                }),
                Animated.timing(widthAnimated, {
                    toValue: 300,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                })
                ]).start()
            setTimeout(() => resolve('teste'), 4000)
            })
        }

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    return (
        <View>
            <View style={button.organizebutton}/>
            <AnimatedTouchable style={styles.input} onPress={async (params:any) => {
                animatedLogin();
                await props.destiny();
            } }>
                <Text style={button.textbutton}>{props.text}</Text>
            </AnimatedTouchable>
        </View>
    )
}