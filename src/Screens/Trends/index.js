import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';
import axios from 'axios';

import {API_URL} from '../../Configs/API/index';

export default function Trends() {
    
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
         getGifs();
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

    return (
        <MainLayout screenTitle='Trends'>
            <View style={{flex: 1}}>
                <FlatList 
                    data={gifs} 
                    keyExtractor={gif => gif.id} 
                    renderItem={(gif) => <ClapsCard data={gif} typeOfMedia="gifs" isFav={false} />}
                />
            </View>
        </MainLayout>
    );
}