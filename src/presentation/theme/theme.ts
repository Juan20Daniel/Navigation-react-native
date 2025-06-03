import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#7037eb',
    secundary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',

    background: '#ffffff'
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 60,
        backgroundColor: globalColors.background,
        gap: 10,
    },
    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        width:'100%',
        alignItems: 'center'
    },
    buttonText: {
        color: globalColors.background,
        fontSize: 18
    }
})