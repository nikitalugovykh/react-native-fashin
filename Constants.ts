import { Dimensions } from "react-native";

export const {width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export const enum Fonts {
    REGULAR = 'Regular',
    SEMI_BOLD = 'SemiBold',
    BOLD = 'Bold',
}