import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Outset from "../../screens/auth/outset";
import Login from "../../screens/auth/login";
import Register from "../../screens/auth/register";
import Home from "../../screens/home";
import { AppProvider } from "../../services/context/context";
import ExpenseAdd from '../../screens/homeaddons/expenseadd';

export type RootStackParams = {
    outset: undefined;
    login: undefined;
    register: undefined;
    home: undefined;
    homeadd: undefined;
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
                <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false
                }}/>

                <Stack.Screen
                name='homeadd'
                component={ExpenseAdd}
                options={{
                    headerShown: false
                }}/>
                
        </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
    )
}