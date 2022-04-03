import { useRef } from "react"
import { StyleSheet, View } from "react-native"
import Animated, { interpolateColor, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from "react-native-reanimated"
import { WIDTH } from "../../../Constants"
import { Dot } from "../../Components/Dot"
import { Slide } from "../../Components/Slide"
import { SLIDER_HEIGHT } from "../../Components/Slide/Slide"
import SubSlide from "../../Components/SubSlide/SubSlide"

const BORDER_RADIUS = 75

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const slides = [
    { label: 'Relax', color: '#bfeaf5', title: 'Hear it first, Wear it first', description: 'Here you can find activities to practise your reading skills.' },
    { label: 'Playful', color: '#beecc4', title: 'Your style, Your way', description: " Reading will help you to improve your understanding of the language and build your vocabulary." },
    { label: 'Excentric', color: '#ffe4d9', title: 'Find Your Outfits', description: 'There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English.' },
    { label: 'Funky', color: '#ffdddd', title: 'Look Good, feel Good', description: 'The self-study lessons in this section are written and organised according to the levels of the Common European Framework.' },
]

const Onboarding = () => {

    const aScrollRef = useAnimatedRef<Animated.ScrollView>()
   

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

    const rStyleTextTranslate = useAnimatedStyle(() => {
        return ({
            transform: [{ translateX: -x.value }]
        })
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, rStyle]}>
                <Animated.ScrollView
                    ref={aScrollRef}
                    snapToInterval={WIDTH}
                    decelerationRate={'fast'}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={onScrollHandler}
                    scrollEventThrottle={1}
                >
                    {slides.map((item, index) => (
                        <Slide key={index} right={index % 2 !== 0} label={item.label} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={[styles.footer]}>

                <Animated.View
                    style={
                        [{
                            ...StyleSheet.absoluteFillObject,
                        }, rStyle]
                    }
                />
                <Animated.View
                    style={
                        [styles.footerContent,
                        { width: WIDTH * slides.length },
                            rStyleTextTranslate]
                    }
                >
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot
                                currentIndex={Math.round(x.value / (WIDTH))}
                                key={index} {...{ index, x }}
                            />
                        ))}
                    </View>
                    {slides.map(({ title, description }, index) => (
                        <SubSlide
                            key={index}
                            last={index === slides.length - 1}
                            {... { title, description }}
                            onPress={() => {
                                if (aScrollRef.current) {
                                    aScrollRef.current
                                        // @ts-ignore
                                        ?.scrollTo(
                                            {
                                                x: WIDTH * (index + 1),
                                                animated: true
                                            }
                                        )
                                }
                            }}
                        />
                    ))}
                </Animated.View>
            </View>
        </View>
    )
}

export default Onboarding