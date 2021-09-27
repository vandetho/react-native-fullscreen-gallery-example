import React from 'react';
import { Setting } from '../types';

export const SettingContext = React.createContext<{
    setting: Setting;
    updateSetting: (setting: Setting) => void;
}>({
    setting: {
        horizontal: true,
        slideAnimationType: 'slide',
        indicatorMode: 'dot',
        dotSize: 10,
        dotColor: '#000000',
        dotType: 'liquid',
        withZoom: false,
    },
    updateSetting: () => {},
});
