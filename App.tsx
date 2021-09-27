import React from 'react';
import { DotType } from 'react-native-fullscreen-gallery/dist/types';
import { AppNavigator } from './navigation';
import { SettingContext } from './context';

export default function App() {
    const [setting, setSetting] = React.useState<{
        horizontal: boolean;
        indicatorMode: 'thumbnail' | 'dot';
        dotColor: string;
        dotType: DotType;
        withZoom: boolean;
    }>({
        horizontal: true,
        indicatorMode: 'dot',
        dotColor: '#08CDE7',
        dotType: 'liquid',
        withZoom: false,
    });

    const updateSetting = (setting: {
        horizontal: boolean;
        indicatorMode: 'thumbnail' | 'dot';
        dotColor: string;
        dotType: DotType;
        withZoom: boolean;
    }) => {
        setSetting(setting);
    };

    return (
        <SettingContext.Provider value={{ setting, updateSetting }}>
            <AppNavigator />
        </SettingContext.Provider>
    );
}
