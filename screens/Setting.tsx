import React from 'react';
import { Switch, Text, View } from 'react-native';
import { DotType } from 'react-native-fullscreen-gallery/dist/types';

interface SettingProps {}

const Setting: React.FunctionComponent<SettingProps> = () => {
    const [state, setState] = React.useState<{
        horizontal: boolean;
        indicatorMode: 'thumbnail' | 'dot';
        dotColor: string;
        dotType: DotType;
        withZoom: boolean;
    }>({
        horizontal: true,
        indicatorMode: 'dot',
        dotColor: '#555555',
        dotType: 'liquid',
        withZoom: false,
    });

    const onChangeHorizontal = React.useCallback((value: boolean) => {
        setState((prevState) => ({ ...prevState, horizontal: value }));
    }, []);

    const renderDotMode = React.useCallback(() => {
        return (
            <React.Fragment>
                <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}>
                    <Text>Dot Color</Text>
                    <Switch value={state.horizontal} onValueChange={onChangeHorizontal} />
                </View>
                <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}>
                    <Text>Dot Color</Text>
                    <Switch value={state.horizontal} onValueChange={onChangeHorizontal} />
                </View>
            </React.Fragment>
        );
    }, [onChangeHorizontal, state.horizontal]);

    const onChangeWithZoom = React.useCallback((value: boolean) => {
        setState((prevState) => ({ ...prevState, withZoom: value }));
    }, []);

    return (
        <View style={{ paddingVertical: 20 }}>
            <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}>
                <Text>Horizontal</Text>
                <Switch value={state.horizontal} onValueChange={onChangeHorizontal} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}>
                <Text>Indicator Mode</Text>
                <Text>{state.indicatorMode}</Text>
            </View>
            {renderDotMode()}
            <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}>
                <Text>Horizontal</Text>
                <Switch value={state.horizontal} onValueChange={onChangeHorizontal} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}>
                <Text>Liquid Mode Zoom</Text>
                <Switch value={state.horizontal} onValueChange={onChangeWithZoom} />
            </View>
        </View>
    );
};

export default Setting;
