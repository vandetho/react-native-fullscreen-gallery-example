import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';
import { SettingContext } from '../context';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 60,
        right: 60,
    },
});

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    const { setting } = React.useContext(SettingContext);

    return (
        <View style={{ position: 'relative' }}>
            <TouchableOpacity style={styles.button}>
                <Text>Setting</Text>
            </TouchableOpacity>
            <Gallery images={IMAGES} {...setting} />
        </View>
    );
};

export default Home;
