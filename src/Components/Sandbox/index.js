import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';

export default function Sandbox() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.boxOne}>one</Text>
                <Text style={styles.boxTwo}>two</Text>
                <Text style={styles.boxThree}>three</Text>
                <Text style={styles.boxFour}>four</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        // flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',

        paddingTop: 40,
        backgroundColor: '#ddd',
        
    },
    boxOne : {
        flex : 1,
        backgroundColor: 'red',
        padding : 10,
        textAlign: 'center'
    },
    boxTwo : {
        flex : 1,
        backgroundColor: 'blue',
        padding : 20
    },
    boxThree : {
        flex : 1,
        backgroundColor: 'yellow',
        padding : 30
    },
    boxFour : {
        flex : 1,
        backgroundColor: 'green',
        padding : 50,
    }
});