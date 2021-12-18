import React from "react";
import {  StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function Butn(props) {

    return (
        <View style={styles.butn}>
            <TouchableOpacity onPress={props.touch} >
                <Text style={styles.button}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    butn: {
        backgroundColor: "#2A2AC0",
        width: 340,
        height: 55,
        marginTop: 60,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
    },
    button: {

        color: "white",
        fontWeight: "600",
        fontSize: 14,
        letterSpacing: 0.8,

    }

})