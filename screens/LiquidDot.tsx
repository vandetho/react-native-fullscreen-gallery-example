import React from 'react';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';

interface LiquidDotProps {}

const LiquidDot: React.FunctionComponent<LiquidDotProps> = () => (
    <Gallery images={IMAGES} indicatorMode="dot" dotType="liquid" />
);

export default LiquidDot;
