import React from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useVisible } from '../hooks';
import { Picker } from '@react-native-picker/picker';
import { SettingContext } from '../context';
import { DotType } from 'react-native-fullscreen-gallery/dist/types';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
    },
});

interface SettingProps {}

const Setting: React.FunctionComponent<SettingProps> = () => {
    const navigation = useNavigation();
    const { visible, onToggle } = useVisible({ initial: true });
    const { visible: visibleAnimation, onToggle: onToggleAnimation } = useVisible({ initial: true });
    const { setting, updateSetting } = React.useContext(SettingContext);
    const [state, setState] = React.useState<{
        horizontal: boolean;
        indicatorMode: 'thumbnail' | 'dot';
        dotColor: string;
        dotType: DotType;
        withZoom: boolean;
    }>(() => ({ ...setting }));

    const onSaveSetting = React.useCallback(() => {
        updateSetting(state);
        navigation.goBack();
    }, [navigation, state, updateSetting]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onSaveSetting} style={{ paddingRight: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Save</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, onSaveSetting]);

    const onChangeHorizontal = React.useCallback((value: boolean) => {
        setState((prevState) => ({ ...prevState, horizontal: value }));
    }, []);

    const onColorChange = React.useCallback((value: string) => {
        setState((prevState) => ({ ...prevState, dotColor: value }));
    }, []);

    const onChangeIndicatorMode = React.useCallback((itemValue: 'thumbnail' | 'dot') => {
        setState((prevState) => ({ ...prevState, indicatorMode: itemValue }));
    }, []);

    const renderDotMode = React.useCallback(() => {
        return (
            <React.Fragment>
                <TouchableWithoutFeedback onPress={onToggle}>
                    <View style={styles.row}>
                        <Text>Indicator Mode</Text>
                        <Text>{state.indicatorMode}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Collapsible collapsed={visible}>
                    <Picker
                        selectedValue={state.indicatorMode}
                        onValueChange={onChangeIndicatorMode}
                        itemStyle={{ color: '#000000' }}
                    >
                        <Picker.Item value="thumbnail" label="thumbnail" />
                        <Picker.Item value="dot" label="dot" />
                    </Picker>
                </Collapsible>
            </React.Fragment>
        );
    }, [onChangeIndicatorMode, onToggle, state.indicatorMode, visible]);

    const onChangeAnimation = React.useCallback((itemValue: DotType) => {
        setState((prevState) => ({ ...prevState, dotType: itemValue }));
    }, []);

    const onChangeWithZoom = React.useCallback((value: boolean) => {
        setState((prevState) => ({ ...prevState, withZoom: value }));
    }, []);

    const renderAnimationType = React.useCallback(() => {
        return (
            <React.Fragment>
                <Collapsible collapsed={state.indicatorMode !== 'dot'}>
                    <View style={styles.row}>
                        <Text>Dot Color</Text>
                        <TextInput value={state.dotColor} onChangeText={onColorChange} />
                    </View>
                </Collapsible>
                <Collapsible collapsed={state.indicatorMode !== 'dot'}>
                    <TouchableWithoutFeedback onPress={onToggleAnimation}>
                        <View style={styles.row}>
                            <Text>Dot Indicator Animation</Text>
                            <Text>{state.dotType}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Collapsible>
                <Collapsible collapsed={visibleAnimation}>
                    <Picker selectedValue={state.dotType} onValueChange={onChangeAnimation}>
                        <Picker.Item label="expand" value="expand" />
                        <Picker.Item label="rotary" value="rotary" />
                        <Picker.Item label="fade" value="fade" />
                        <Picker.Item label="liquid" value="liquid" />
                        <Picker.Item label="zoom" value="zoom" />
                    </Picker>
                </Collapsible>
                <Collapsible collapsed={state.dotType !== 'liquid'}>
                    <View style={styles.row}>
                        <Text>Liquid Mode Zoom</Text>
                        <Switch value={state.withZoom} onValueChange={onChangeWithZoom} />
                    </View>
                </Collapsible>
            </React.Fragment>
        );
    }, [
        onChangeAnimation,
        onChangeWithZoom,
        onColorChange,
        onToggleAnimation,
        state.dotColor,
        state.dotType,
        state.indicatorMode,
        state.withZoom,
        visibleAnimation,
    ]);

    return (
        <View style={{ paddingVertical: 20 }}>
            <View style={styles.row}>
                <Text>Horizontal</Text>
                <Switch value={state.horizontal} onValueChange={onChangeHorizontal} />
            </View>
            {renderDotMode()}
            {renderAnimationType()}
        </View>
    );
};

export default Setting;
