import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import {gifsMock} from '../../Configs/Mocks/Gifs';
import {stickersMock} from '../../Configs/Mocks/Stickers';
import {API_URL} from '../../Configs/API/index';

export default function Trends() {
    
    const [gifs, setGifs] = useState(gifsMock);
    const [stickers, setStickers] = useState(stickersMock);
    const [selectIndex, setSelectIndex] = useState(0);

    const buttons = ['Gifs', 'Stickers'];

    useEffect(() => {
        // uncomment when the app is over
        // getGifs();
    },[]);
    
    const getGifs = async () => {
        try{
            let gifs = await axios.get(API_URL + 'gifs')
            .then((res) => {
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

    const getStickers = async () => {
        
    }

    const updateIndex = (selectIndex) => {
        setSelectIndex(selectIndex);
        console.log(selectIndex);
    }
    

    return (
        <MainLayout screenTitle='Trends'>
            <ButtonGroup 
                onPress={updateIndex}
                selectedIndex={selectIndex} 
                buttons={buttons} 
                containerStyle={{height : 40, borderRadius: 8}}
            />
            {
                selectIndex === 0 ? (
                    <View style={{flex: 1}}>
                        <FlatList 
                            data={gifs} 
                            keyExtractor={gif => gif.id} 
                            renderItem={(gif) => <ClapsCard data={gif} typeOfMedia="gifs" isFav={false} />}
                        />
                    </View>
                ) : (
                    <View style={{flex: 1}}>
                        <FlatList 
                            data={stickers} 
                            keyExtractor={sticker => sticker.id} 
                            renderItem={(sticker) => <ClapsCard data={sticker} typeOfMedia="stickers" isFav={false} />}
                        />
                    </View>
                )
            }
        </MainLayout>
    );
}