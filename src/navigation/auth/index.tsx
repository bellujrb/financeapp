import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import Outset from "../../screens/auth/outset";
import Login from "../../screens/auth/login";
import Register from "../../screens/auth/register";
import 'react-native-gesture-handler';

export type RootStackParams = {
    outset: any;
    login: any;
    register: any;
};

export type propsStack = StackNavigationProp<RootStackParams>

const Stack = createStackNavigator<RootStackParams>();

export default function AuthScreens(){

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="outset">

                <Stack.Screen
                    name="outset"
                    component={Outset}
                    options={{
                    headerShown: false
                    }}
                />

                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                />
        </Stack.Navigator>
    </NavigationContainer>
    )
}