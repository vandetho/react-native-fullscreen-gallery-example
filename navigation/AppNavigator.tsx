import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
    FadeDotScreen,
    HomeScreen,
    HorizontalDotScreen,
    HorizontalThumbnailScreen,
    LiquidDotScreen,
    RotaryDotScreen,
    VerticalDotScreen,
    VerticalThumbnailScreen,
} from '../screens';

const AppStack = createStackNavigator();

interface AppNavigatorProps {}

export const AppNavigator: React.FunctionComponent<AppNavigatorProps> = () => (
    <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="HorizontalThumbnail" component={HorizontalThumbnailScreen} />
            <AppStack.Screen name="VerticalThumbnail" component={VerticalThumbnailScreen} />
            <AppStack.Screen name="HorizontalDot" component={HorizontalDotScreen} />
            <AppStack.Screen name="VerticalDot" component={VerticalDotScreen} />
            <AppStack.Screen name="RotaryDot" component={RotaryDotScreen} />
            <AppStack.Screen name="FadeDot" component={FadeDotScreen} />
            <AppStack.Screen name="LiquidDot" component={LiquidDotScreen} />
        </AppStack.Navigator>
    </NavigationContainer>
);
