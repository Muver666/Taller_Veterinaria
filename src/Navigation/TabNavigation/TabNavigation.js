import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../Screens/Auth/AuthScreen";

const Tab = createBottomTabNavigator();

export function TabNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={AuthScreen}
                options={{title: "Inicio"}}
            />
            <Tab.Screen
                name='WishList'
                component={AuthScreen}
                options={{title: "Lista de Deseos"}}
            />
            <Tab.Screen
                name='Cart'
                component={AuthScreen}
                options={{title: "Carrito"}}
            />
            <Tab.Screen
                name='Account'
                component={AuthScreen}
                options={{title: "Cuenta"}}
            />
        </Tab.Navigator>
    )
}