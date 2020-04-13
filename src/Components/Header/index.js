import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>CLAPS</Text>
            </View>
            <View style={styles.subHeaderContainer}>
                <Text style={styles.subHeaderTitle}>{props.screenTitle}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    // Header
    headerContainer : {
        height : 60,
        margin : 0,
        alignItems : "center",
        justifyContent : "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    headerTitle : {
        fontSize : 28,
        fontWeight : "bold",
        letterSpacing : 4
    },

    // SubHeader
    subHeaderContainer : {
        height : 40,
        margin : 0,
        alignItems : "center",
        justifyContent : "center",

        borderBottomColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 100,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    subHeaderTitle : {
        fontSize : 18,
        fontWeight : "300",
        letterSpacing : 2
    }
});

export default Header;