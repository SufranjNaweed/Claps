import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';

import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import {gifsMock} from '../../Configs/Mocks/Gifs';
import {stickersMock} from '../../Configs/Mocks/Stickers';

export default function Trends() {
    
    const [gifs, setGifs] = useState(gifsMock);
    const [stickers, setStickers] = useState(stickersMock);
            
    useEffect(() => {
        // uncomment when the app is over
        // getGifs();
    },[]);
    
    const getGifs = async () => {
        try{
            let gifs = await axios.get('https://claps-api.herokuapp.com/api/v1/gifs')
            .then((res) => {
                console.log("result", res.data.data);
                setGifs(res.data.data);
                return res.data.data;
            });
            console.log("getGifs", gifs)
            
            return gifs;
        }
        catch(err){
            console.log(err);

        }
    }

    return (
        <MainLayout screenTitle='Trends'>
            <View style={{flex: 1}}>
                <FlatList 
                    data={gifs} 
                    keyExtractor={gif => gif.id} 
                    renderItem={(gif) => <ClapsCard data={gif} />}
                >
                </FlatList>
            </View>
        </MainLayout>
    );
}