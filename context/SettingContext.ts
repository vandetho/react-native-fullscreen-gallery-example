import React from 'react';
import { DotType } from 'react-native-fullscreen-gallery/dist/types';

export const SettingContext = React.createContext<{
    setting: {
        horizontal: boolean;
        indicatorMode: 'thumbnail' | 'dot';
        dotColor: string;
        dotType: DotType;
        withZoom: boolean;
    };
    updateSetting: (setting: {
        horizontal: boolean;
        indicatorMode: 'thumbnail' | 'dot';
        dotColor: string;
        dotType: DotType;
        withZoom: boolean;
    }) => void;
}>({
    setting: {
        horizontal: true,
        indicatorMode: 'dot',
        dotColor: '#555555',
        dotType: 'liquid',
        withZoom: false,
    },
    updateSetting: () => {},
});
