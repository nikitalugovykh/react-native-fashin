import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Fonts } from "../../../Constants"
import { Button } from "../Button"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 44,
    },
    title: {
        fontFamily: Fonts.BOLD,
        fontSize: 24,
        lineHeight: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 12

    },
    description: {
        fontFamily: Fonts.REGULAR,
        fontSize: 16,
        color: 'black',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 40,


    }
})

type Props = {
    title: string,
    description: string,
    last: boolean,
    onPress: () => void
}


const SubSlide: FC<Props> = ({ title, description, last, onPress }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Button
                label={last ? 'Let`s get started' : 'Next'}
                variant={last ? 'primary' : 'default'}
                {...{ onPress }}
            />
        </View>
    )
}

export default SubSlide