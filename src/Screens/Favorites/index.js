import React, { useContext, useState } from 'react';
import {Text, View, FlatList} from 'react-native';

import {FavoriteContext} from '../../Contexts/Favorites';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

export default function Favorites() {

    const {favoritesGifs} = useContext(FavoriteContext);
    const lenFavGifs = favoritesGifs.length;

    return (
        <MainLayout screenTitle='Favorites'>
            <View style={{flex: 1}}>
                <Text style={{textAlign: "center", fontSize: 20, letterSpacing: 2}}>Number of favorites gifs : {lenFavGifs} </Text>
                <FlatList 
                    data={favoritesGifs} 
                    keyExtractor={favoritesGif => favoritesGif.id} 
                    renderItem={(favoritesGif) => <ClapsCard data={favoritesGif} typeOfMedia="gifs" isFav={true} />}
                />
            </View>
        </MainLayout>
    );
}