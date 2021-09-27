import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gallery } from 'react-native-fullscreen-gallery';
import { IMAGES } from '../images';
import { SettingContext } from '../context';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 60,
        right: 30,
        zIndex: 2000,
        backgroundColor: '#08CDE7',
        padding: 10,
        borderRadius: 10,
    },
});

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    const navigation = useNavigation<any>();
    const { setting } = React.useContext(SettingContext);

    const onPress = React.useCallback(() => {
        navigation.navigate('Setting');
    }, [navigation]);

    return (
        <View style={{ position: 'relative' }}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={{ fontWeight: 'bold' }}>Setting</Text>
            </TouchableOpacity>
            <Gallery images={IMAGES} {...setting} />
        </View>
    );
};

export default Home;
