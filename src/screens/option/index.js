import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from "../../../assets/logo.png"
import Butn from '../../components/button';
export default function Options({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.heading}>Welcome</Text>
                <Text></Text>
            </View>
            <View style={styles.midder}>
                <Butn touch={()=> navigation.navigate("Form")} title={"I am User"} />
                <Text style={{ color: "gray", fontSize: 18, marginBottom: 20, justifyContent: "center", alignItems: "center", marginTop: 20 }}>or</Text>
                <View style={styles.fbbutn}>
                    <TouchableOpacity onPress={() => navigation.navigate("Maps")} >
                        <Text style={styles.button}>I am Branch Manager</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                <Text>By signing in, you accept our
                    <Text style={{ color: "blue" }}> Terms and Conditions</Text>
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: '#ECF1FA',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 140,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
    },
    heading: {
        fontWeight: "800",
        fontSize: 32,
        color: "#181461",
        marginTop: 50,
    },
    midder: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 40
    },
    fbbutn: {
        backgroundColor: "#415C95",
        width: 340,
        height: 55,
        flexDirection: "row",
        justifyContent: "center",
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
