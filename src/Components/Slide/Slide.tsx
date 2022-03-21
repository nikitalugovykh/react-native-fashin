import { FC } from "react"
import { StyleSheet, Text, View, ViewStyle } from "react-native"
import { Fonts, HEIGHT, WIDTH } from "../../../Constants"


interface SlideProps {
    label: string,
    right?: boolean
}

export const SLIDER_HEIGHT = 0.61 * HEIGHT

const Slide: FC<SlideProps> = ({ label, right }) => {


    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) / 2 },
        { translateX: right ? (WIDTH / 2 - 50) : (-WIDTH / 2 + 50)},
        {rotate: (right ? '-90deg' : '90deg')}
    ]


    return (
        <View style={styles.container}>
            <View
                style={
                    [
                        styles.titleContainer,
                        { transform }
                    ]
                }
            >
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: WIDTH
    },
    title: {
        fontSize: 80,
        lineHeight: 100,
        fontFamily: Fonts.BOLD,
        color: 'white',
        textAlign: 'center',
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center',
        

    }
})

export default Slide