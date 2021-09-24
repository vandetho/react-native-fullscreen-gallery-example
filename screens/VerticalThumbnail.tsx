import React from 'react';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';

interface VerticalThumbnailProps {}

const VerticalThumbnail: React.FunctionComponent<VerticalThumbnailProps> = () => (
    <Gallery images={IMAGES} horizontal={false} />
);

export default VerticalThumbnail;
