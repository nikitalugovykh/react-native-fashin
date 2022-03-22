import { ScrollView, StyleSheet, View } from "react-native"
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import Animated, { interpolateColor, useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { WIDTH } from "../../../Constants"
import { Slide } from "../../Components/Slide"
import { SLIDER_HEIGHT } from "../../Components/Slide/Slide"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    },
})

const slides = [
    { label: 'Relax', color: '#bfeaf5' },
    { label: 'Playful', color: '#beecc4' },
    { label: 'Excentric', color: '#ffe4d9' },
    { label: 'Funky', color: '#ffdddd' },
]

const Onboarding = () => {

    const x = useSharedValue(0)

    const outputRange = ['#bfeaf5', '#beecc4', '#ffe4d9', '#ffdddd']

    const onScrollHandler = useAnimatedScrollHandler((event) => {
        x.value = event.contentOffset.x;
    });


    const rStyle = useAnimatedStyle(() => {

        const backgroundColor = interpolateColor(
            x.value,
            slides.map((_, i) => i * WIDTH),
            slides.map(slide => slide.color)
        )

        return ({
            backgroundColor
        })
    })


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, rStyle]}>
                <Animated.ScrollView
                    snapToInterval={WIDTH}
                    decelerationRate={'fast'}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={onScrollHandler}
                    scrollEventThrottle={1}

                >
                    {slides.map((item, index) => (
                        <Slide key = {index} right={index % 2 !== 0} label={item.label} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                    style={
                        [{
                            ...StyleSheet.absoluteFillObject,
                        }, rStyle]
                    }
                />
                <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>

                </View>
            </View>
        </View>
    )
}

export default Onboarding