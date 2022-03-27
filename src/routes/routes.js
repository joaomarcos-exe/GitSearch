import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import home from '../pages/home/Home';
import perfil from '../pages/perfil/Perfil';

const Routes = () =>{
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={home}
            />
            <Stack.Screen
                name='Perfil'
                component={perfil}
            />
        </Stack.Navigator>
    )
}

export default Routes;