import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
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
        backgroundColor: 'cyan',
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    },
})

const Onboarding = () => {

    const x = useValue(0)
    
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.ScrollView
                    snapToInterval={WIDTH}
                    decelerationRate={'fast'}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Slide label="Relax" />
                    <Slide label="Playful" right />
                    <Slide label="Excentric" />
                    <Slide label="Funky" right />
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <View
                    style={
                        {
                            ...StyleSheet.absoluteFillObject,
                            backgroundColor: 'cyan'
                        }
                    }
                />
                <View style = {{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}}>

                </View>
            </View>
        </View>
    )
}

export default Onboarding