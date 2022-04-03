import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Fonts } from '../../../Constants'


type Props = {
    label: string,
    variant: 'primary' | 'default',
    onPress: () => void
}

const Button: FC<Props> = ({ label, variant = 'default', onPress }) => {

    const backgroundColor = variant === 'primary' ? '#2cb9b0' : 'rgba(12, 13, 52, 0.2)'
    const color = variant === 'primary' ? 'white' : '0c0d34'


    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            onPress = {onPress}
        >
            <View >
                <Text style={[styles.label, { color }]}>{label}</Text>
            </View>
        </RectButton>
    )


}
const styles = StyleSheet.create({
    wrapper: {},
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        fontFamily: Fonts.REGULAR,
    }
})

export default Button