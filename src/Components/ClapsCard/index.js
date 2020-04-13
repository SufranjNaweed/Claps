import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements'

const  ClapsCard = ({data}) => {
    const dataItem = data.item;
    const image = dataItem.images.downsized.url;
    const text = dataItem.title

    return(
        <Card
            key={dataItem.id}
            image={{uri : image}}
            containerStyle={styles.card}
        >
            <Text style={styles.title}>
                {text}
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    icon={<Icon name='heart' type='material-community' color='#ffffff' />}
                    buttonStyle={[styles.actionButton, {backgroundColor: "red"}]}
                    title='' 
                />
                <Button
                    icon={<Icon name='link-variant' type='material-community' color='#ffffff' />}
                    buttonStyle={styles.actionButton}
                    title='' 
                />
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 8
    },
    title : {
        textAlign: "center",
        fontSize: 22,
        marginBottom: 10
    },
    buttonContainer : {
        flex : 1,
        flexDirection: "row",
        alignItems : "baseline",
        justifyContent : "space-around"
    },
    actionButton : {
        flex : 1,
        borderRadius: 8,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }
});

export default ClapsCard;