import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { SharedValue } from 'react-native-reanimated'


type Props = {
    index: number,
    x: SharedValue<number>,
    currentIndex: number
}

const Dot: FC<Props> = ({ index, x, currentIndex }) => {

    console.log(x, 'Math.round(offset / (WIDTH))')
    

    return (
        <View style={styles.wrapper} />
    )
}

const styles = StyleSheet.create({
    wrapper: {}
})

export default Dot