import React, {useContext, useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements'
import {useClipboard} from '@react-native-community/clipboard';
import Toast from 'react-native-simple-toast';

import {FavoriteContext} from '../../Contexts/Favorites';

const  ClapsCard = ({data, typeOfMedia, isFav}) => {
    const dataItem = data.item;
    const image = dataItem.images.downsized.url;
    const text = dataItem.title;
    const originalUrl = dataItem.images.original.url;

    const { toggleToFavorites } = useContext(FavoriteContext);
    const [isFavorite, setIsFavorite] = useState(); 
    const [clipboardData, setSring] = useClipboard()
    
    useEffect(() => {
        setIsFavorite(isFav)
    }, [])

    const actionToggleToFavorite = () => {
        toggleToFavorites(typeOfMedia, data);
        setIsFavorite(!isFavorite);
    }

    const copyMediaUrl = () => {
        setSring(originalUrl);
        Toast.show('The links has been copy in your paste bin', Toast.LONG, Toast.BOTTOM);
    }

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
                    icon={<Icon name={isFavorite ? 'heart' : 'heart-outline'} type='material-community' color='#ffffff' />}
                    buttonStyle={[styles.actionButton, {backgroundColor: "red"}]}
                    title='' 
                    onPress={actionToggleToFavorite}
                />
                <Button
                    icon={<Icon name='link-variant' type='material-community' color='#ffffff' />}
                    buttonStyle={styles.actionButton}
                    title='' 
                    onPress={copyMediaUrl}
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
        marginBottom: 0,
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft : 50,
        paddingRight : 50
    }
});

export default ClapsCard;