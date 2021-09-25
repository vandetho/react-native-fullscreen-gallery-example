import React from 'react';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';

interface FadeDotProps {}

const FadeDot: React.FunctionComponent<FadeDotProps> = () => (
    <Gallery images={IMAGES} indicatorMode="dot" dotType="fade" />
);

export default FadeDot;
