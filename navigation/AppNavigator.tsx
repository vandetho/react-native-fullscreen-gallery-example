import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens';

const AppStack = createStackNavigator();

interface AppNavigatorProps {}

export const AppNavigator: React.FunctionComponent<AppNavigatorProps> = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Home">
                <AppStack.Screen name="Home" component={HomeScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};
