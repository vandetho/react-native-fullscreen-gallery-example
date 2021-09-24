import React from 'react';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';

interface HorizontalDotProps {}

const HorizontalDot: React.FunctionComponent<HorizontalDotProps> = () => (
    <Gallery images={IMAGES} horizontal={false} indicatorMode="dot" />
);

export default HorizontalDot;
