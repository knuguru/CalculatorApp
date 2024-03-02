import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const Styles = StyleSheet.create({
    buttonBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    buttonGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.gray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    buttonBlack: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    buttonWhite: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallText: {
        fontSize: 32,
        color: Colors.white,
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: Colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: Colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    }
})