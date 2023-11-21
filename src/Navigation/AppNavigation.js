import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigation } from "./TabNavigation";

const stack = createNativeStackNavigator();

export function AppNavigation(){
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name='tab' component={TabNavigation}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}