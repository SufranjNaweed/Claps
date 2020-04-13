import React, { useContext} from 'react';
import {
    Text,
    View,
    FlatList
  } from 'react-native';

import {FavoriteContext} from '../../Contexts/Favorites';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

export default function Favorites() {
    const {favoritesGifs} = useContext(FavoriteContext);

    console.log("------------- Favorites START -------------");

    console.log("favoriteGifs => ", favoritesGifs);
    const len = favoritesGifs.length
    console.log("favoriteGifs length => ", len)

    console.log("------------- Favorites END -------------");
    return (
        <MainLayout screenTitle='Favorites'>
            <Text>number of favoritesGifs : {len} </Text>

            <View style={{flex: 1}}>
                        <FlatList 
                            data={favoritesGifs} 
                            keyExtractor={favoritesGif => favoritesGif.id} 
                            renderItem={(favoritesGif) => <ClapsCard data={favoritesGif} typeOfMedia="gifs" />}
                        />
                    </View>
        </MainLayout>
    );
}