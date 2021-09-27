import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, SettingScreen } from '../screens';

const AppStack = createStackNavigator();

interface AppNavigatorProps {}

export const AppNavigator: React.FunctionComponent<AppNavigatorProps> = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    presentation: 'modal',
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS,
                }}
            >
                <AppStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <AppStack.Screen name="Setting" component={SettingScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};
