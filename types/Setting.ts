import { DotType, SlideAnimationType } from 'react-native-fullscreen-gallery/dist/types';

export type Setting = {
    horizontal: boolean;
    slideAnimationType: SlideAnimationType;
    indicatorMode: 'thumbnail' | 'dot';
    dotColor: string;
    dotSize: number;
    dotType: DotType;
    withZoom: boolean;
};
