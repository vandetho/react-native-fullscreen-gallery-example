import React from 'react';
import { AppNavigator } from './navigation';
import { SettingContext } from './context';
import { Setting } from './types';

export default function App() {
    const [setting, setSetting] = React.useState<Setting>({
        horizontal: true,
        roundDot: false,
        slideAnimationType: 'slide',
        indicatorMode: 'dot',
        dotSize: 10,
        dotColor: '#08CDE7',
        dotType: 'liquid',
        withZoom: false,
    });

    const updateSetting = (setting: Setting) => {
        setSetting(setting);
    };

    return (
        <SettingContext.Provider value={{ setting, updateSetting }}>
            <AppNavigator />
        </SettingContext.Provider>
    );
}
