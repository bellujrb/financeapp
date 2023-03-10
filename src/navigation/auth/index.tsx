import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppProvider } from "../../context/context";
import { Tips } from '../../screens/homeaddons/tips';
import Outset from "../../screens/auth/outset";
import Login from "../../screens/auth/login";
import Register from "../../screens/auth/register";
import Home from "../../screens/home";
import ExpenseView from '../../screens/homeaddons/expenseview';

export type RootStackParams = {
    outset: undefined;
    login: undefined;
    register: undefined;
    home: undefined;
    expenseadd: undefined;
    expenseview: undefined;
    tips: undefined;
    
};

const Stack = createStackNavigator<RootStackParams>();

export default function AuthScreens(){

    return (
        <AppProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="outset">

                <Stack.Screen
                    name="outset"
                    component={Outset}
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />

                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />

                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />
                <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}/>

                <Stack.Screen
                name='expenseadd'
                component={Home}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}/>

                <Stack.Screen
                name='expenseview'
                component={ExpenseView}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
                />

                <Stack.Screen
                name='tips'
                component={Tips}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}/>
                
        </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
    )
}