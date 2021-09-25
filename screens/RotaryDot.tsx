import React from 'react';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';

interface RotaryDotProps {}

const RotaryDot: React.FunctionComponent<RotaryDotProps> = () => (
    <Gallery images={IMAGES} indicatorMode="dot" dotType="rotary" />
);

export default RotaryDot;
