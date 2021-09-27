import React from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Picker } from '@react-native-picker/picker';
import { DotType, SlideAnimationType } from 'react-native-fullscreen-gallery/dist/types';
import { useNavigation } from '@react-navigation/native';
import { SettingContext } from '../context';
import { useVisible } from '../hooks';
import { Setting as SettingType } from '../types';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
    },
});

const SlideAnimation = {
    slide: { value: 'slide', name: 'Slide' },
    fade: { value: 'fade', name: 'Fade' },
    zoom: { value: 'zoom', name: 'Zoom' },
    zoomAndFade: { value: 'zoomAndFade', name: 'Zoom And Fade' },
};

const IndicatorMode = {
    thumbnail: { value: 'thumbnail', name: 'Thumbnail' },
    dot: { value: 'dot', name: 'Dot' },
};

const DotAnimation = {
    expand: { value: 'expand', name: 'Expand' },
    rotary: { value: 'rotary', name: 'Rotary' },
    fade: { value: 'fade', name: 'Fade' },
    liquid: { value: 'liquid', name: 'Liquid' },
    zoom: { value: 'zoom', name: 'Zoom' },
};

interface SettingProps {}

const Setting: React.FunctionComponent<SettingProps> = () => {
    const navigation = useNavigation();
    const dotColorInput = React.useRef<TextInput>(null);
    const dotSizeInput = React.useRef<TextInput>(null);
    const { visible, onToggle } = useVisible({ initial: true });
    const { visible: visibleSlideType, onToggle: onToggleSlideType } = useVisible({ initial: true });
    const { visible: visibleAnimation, onToggle: onToggleAnimation } = useVisible({ initial: true });
    const { setting, updateSetting } = React.useContext(SettingContext);
    const [state, setState] = React.useState<SettingType>(() => ({ ...setting }));

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

    const onChangeRoundDot = React.useCallback((value: boolean) => {
        setState((prevState) => ({ ...prevState, roundDot: value }));
    }, []);

    const onSizeChange = React.useCallback((value: string) => {
        setState((prevState) => ({ ...prevState, dotSize: Number(value) }));
    }, []);

    const onColorChange = React.useCallback((value: string) => {
        setState((prevState) => ({ ...prevState, dotColor: value }));
    }, []);

    const onChangeSlideAnimationType = React.useCallback((itemValue: SlideAnimationType) => {
        setState((prevState) => ({ ...prevState, slideAnimationType: itemValue }));
    }, []);

    const onChangeIndicatorMode = React.useCallback((itemValue: 'thumbnail' | 'dot') => {
        setState((prevState) => ({ ...prevState, indicatorMode: itemValue }));
    }, []);

    const renderSlideAnimationType = React.useCallback(() => {
        return (
            <React.Fragment>
                <TouchableWithoutFeedback onPress={onToggleSlideType}>
                    <View style={styles.row}>
                        <Text>Slide Animation Type</Text>
                        <Text>{SlideAnimation[state.slideAnimationType].name}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Collapsible collapsed={visibleSlideType}>
                    <Picker
                        selectedValue={state.slideAnimationType}
                        onValueChange={onChangeSlideAnimationType}
                        itemStyle={{ color: '#000000' }}
                    >
                        {Object.values(SlideAnimation).map((item) => (
                            <Picker.Item
                                value={item.value}
                                label={item.name}
                                key={`slide-animation-type-${item.value}`}
                            />
                        ))}
                    </Picker>
                </Collapsible>
            </React.Fragment>
        );
    }, [onChangeSlideAnimationType, onToggleSlideType, state.slideAnimationType, visibleSlideType]);

    const renderDotMode = React.useCallback(() => {
        return (
            <React.Fragment>
                <TouchableWithoutFeedback onPress={onToggle}>
                    <View style={styles.row}>
                        <Text>Indicator Mode</Text>
                        <Text>{IndicatorMode[state.indicatorMode].name}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Collapsible collapsed={visible}>
                    <Picker
                        selectedValue={state.indicatorMode}
                        onValueChange={onChangeIndicatorMode}
                        itemStyle={{ color: '#000000' }}
                    >
                        {Object.values(IndicatorMode).map((item) => (
                            <Picker.Item value={item.value} label={item.name} key={`indicator-mode-${item.value}`} />
                        ))}
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
                    <TouchableWithoutFeedback onPress={() => dotSizeInput.current && dotSizeInput.current.focus()}>
                        <View style={styles.row}>
                            <Text>Dot Size</Text>
                            <TextInput
                                value={String(state.dotSize)}
                                keyboardType="numeric"
                                onChangeText={onSizeChange}
                                ref={dotSizeInput}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </Collapsible>
                <Collapsible collapsed={state.indicatorMode !== 'dot'}>
                    <View style={styles.row}>
                        <Text>Rounded Dot</Text>
                        <Switch value={state.roundDot} onValueChange={onChangeRoundDot} />
                    </View>
                </Collapsible>
                <Collapsible collapsed={state.indicatorMode !== 'dot'}>
                    <TouchableWithoutFeedback onPress={() => dotColorInput.current && dotColorInput.current.focus()}>
                        <View style={styles.row}>
                            <Text>Dot Color</Text>
                            <TextInput value={state.dotColor} onChangeText={onColorChange} ref={dotColorInput} />
                        </View>
                    </TouchableWithoutFeedback>
                </Collapsible>
                <Collapsible collapsed={state.indicatorMode !== 'dot'}>
                    <TouchableWithoutFeedback onPress={onToggleAnimation}>
                        <View style={styles.row}>
                            <Text>Dot Indicator Animation</Text>
                            <Text>{DotAnimation[state.dotType].name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Collapsible>
                <Collapsible collapsed={visibleAnimation}>
                    <Picker selectedValue={state.dotType} onValueChange={onChangeAnimation}>
                        {Object.values(DotAnimation).map((item) => (
                            <Picker.Item value={item.value} label={item.name} key={`dot-animation-${item.value}`} />
                        ))}
                    </Picker>
                </Collapsible>
                <Collapsible collapsed={state.dotType !== 'liquid' || state.indicatorMode !== 'dot'}>
                    <View style={styles.row}>
                        <Text>Liquid Mode Zoom</Text>
                        <Switch value={state.withZoom} onValueChange={onChangeWithZoom} />
                    </View>
                </Collapsible>
            </React.Fragment>
        );
    }, [
        onChangeAnimation,
        onChangeRoundDot,
        onChangeWithZoom,
        onColorChange,
        onSizeChange,
        onToggleAnimation,
        state.dotColor,
        state.dotSize,
        state.dotType,
        state.indicatorMode,
        state.roundDot,
        state.withZoom,
        visibleAnimation,
    ]);

    return (
        <View style={{ paddingVertical: 20 }}>
            <View style={styles.row}>
                <Text>Horizontal</Text>
                <Switch value={state.horizontal} onValueChange={onChangeHorizontal} />
            </View>
            {renderSlideAnimationType()}
            {renderDotMode()}
            {renderAnimationType()}
        </View>
    );
};

export default Setting;
