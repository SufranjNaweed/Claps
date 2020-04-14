import React, { useContext, useState } from 'react';
import {
    Text,
    View,
    FlatList
  } from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import {FavoriteContext} from '../../Contexts/Favorites';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

export default function Favorites() {
    const {favoritesGifs, favoritesStickers} = useContext(FavoriteContext);

    const [selectIndex, setSelectIndex] = useState(0);
    const buttons = ['Gifs', 'Stickers'];

    const lenFavGifs = favoritesGifs.length;
    const lenFavStickers = favoritesStickers.length;

    const updateIndex = (selectIndex) => {
        setSelectIndex(selectIndex);
    }

    return (
        <MainLayout screenTitle='Favorites'>
            <ButtonGroup 
                onPress={updateIndex}
                selectedIndex={selectIndex} 
                buttons={buttons} 
                containerStyle={{height : 40, borderRadius: 8}}
            />
            {
                selectIndex === 0 ?
                (
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: "center", fontSize: 20}}>Number of favorites gifs : {lenFavGifs} </Text>
                        <FlatList 
                            data={favoritesGifs} 
                            keyExtractor={favoritesGif => favoritesGif.id} 
                            renderItem={(favoritesGif) => <ClapsCard data={favoritesGif} typeOfMedia="gifs" isFav={true} />}
                        />
                    </View>
                ) : (
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: "center", fontSize: 20}}>Number of favorites stickers : {lenFavStickers} </Text>
                        <FlatList 
                            data={favoritesStickers} 
                            keyExtractor={favoritesSticker => favoritesSticker.id} 
                            renderItem={(favoritesSticker) => <ClapsCard data={favoritesSticker} typeOfMedia="gifs" isFav={true} />}
                        />
                    </View>
                )
            }
        </MainLayout>
    );
}